// Bot de Telegram de Liga de Amigos: avisa antes de los partidos y publica resultados, clasificación, ofertas y el muro.
// Lee la liga como un miembro más (cuenta propia de Firebase) y solo escribe su ficha de miembro.
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, onSnapshot } from 'firebase/firestore';

const TOKEN = process.env.BOT_TOKEN, SITE = process.env.SITE_URL || 'https://169-58-150-135.sslip.io';
const STATE_F = process.env.STATE_F || '/data/state.json', TZ = 'Europe/Madrid';
if (!TOKEN) { console.error('Falta BOT_TOKEN'); process.exit(1); }

/* ---------- motor del juego (mismo código que la web) ---------- */
const ctx = { console, Math, Date, JSON }; ctx.window = ctx; ctx.globalThis = ctx; vm.createContext(ctx);
for (const f of ['data.js', 'engine.js']) vm.runInContext(fs.readFileSync('./game/' + f, 'utf8'), ctx, { filename: f });
const E = ctx.ENG, DAY = E.DAY, LIVE = E.LIVE_MS;
const cfgSrc = fs.readFileSync('./game/firebase-config.js', 'utf8').replace('export const FIREBASE_CONFIG =', 'FC =');
const fcCtx = {}; vm.createContext(fcCtx); vm.runInContext(cfgSrc, fcCtx);

/* ---------- estado persistente ---------- */
let ST = { leagues: {}, sent: {}, offset: 0 };
try { ST = { ...ST, ...JSON.parse(fs.readFileSync(STATE_F, 'utf8')) }; } catch (e) {}
const save = () => { try { fs.writeFileSync(STATE_F, JSON.stringify(ST)); } catch (e) { console.warn('save', e.message); } };
const once = (k, fn) => { if (ST.sent[k]) return; ST.sent[k] = Date.now(); save(); fn(); };
// limpieza: avisos de hace más de 40 días
for (const [k, t] of Object.entries(ST.sent)) if (Date.now() - t > 40 * DAY) delete ST.sent[k];

/* ---------- Telegram ---------- */
const tg = async (method, body) => {
  try {
    const r = await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    const j = await r.json(); if (!j.ok) console.warn('tg', method, j.description); return j;
  } catch (e) { console.warn('tg', method, e.message); return {}; }
};
const esc = s => String(s ?? '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const send = (chat, html) => tg('sendMessage', { chat_id: chat, text: html, parse_mode: 'HTML', disable_web_page_preview: true });
const hhmm = t => new Date(t).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: TZ });
const dayName = t => new Date(t).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short', timeZone: TZ });

/* ---------- Firebase: el bot entra con su propia cuenta ---------- */
const app = initializeApp(fcCtx.FC), auth = getAuth(app), db = getFirestore(app);
async function login() {
  if (!ST.cred) { ST.cred = { email: `bot-${crypto.randomBytes(5).toString('hex')}@example.com`, pass: crypto.randomBytes(18).toString('base64url') }; save(); }
  for (let i = 0; ; i++) {
    try { await signInWithEmailAndPassword(auth, ST.cred.email, ST.cred.pass); break; }
    catch (e) {
      if (/invalid-credential|user-not-found|invalid-login/.test(e.code || '')) { try { await createUserWithEmailAndPassword(auth, ST.cred.email, ST.cred.pass); break; } catch (e2) { console.warn('alta', e2.code); } }
      else console.warn('login', e.code || e.message);
      await new Promise(r => setTimeout(r, Math.min(60000, 5000 * (i + 1))));
    }
  }
  console.log('Firebase OK como', auth.currentUser.uid);
}
const dec = d => { if (!d) return d; const o = {}; for (const k in d) { const v = d[k]; if (typeof v === 'string') { try { o[k] = JSON.parse(v); } catch (e) { o[k] = v; } } else o[k] = v; } return o; };

/* ---------- una liga vigilada ---------- */
const L = {}; // code -> { cfg, teams, jor, cup, cl, chat, unsub[] , ready }
function watch(code) {
  if (L[code]) return;
  const lg = L[code] = { code, cfg: null, teams: {}, jor: {}, cup: {}, cl: {}, unsub: [], boot: Date.now() };
  const P = 'ligas/' + code + '/';
  const col = (name, fn) => lg.unsub.push(onSnapshot(collection(db, P + name), q => fn(q), e => console.warn(code, name, e.code)));
  lg.unsub.push(onSnapshot(doc(db, P + 'liga/config'), s => { lg.cfg = s.exists() ? dec(s.data()) : null; }, e => console.warn(code, 'cfg', e.code)));
  col('equipos', q => q.docs.forEach(d => { lg.teams[d.id] = dec(d.data()); }));
  const store = (k, name) => col(name, q => {
    q.docs.forEach(d => { lg[k][d.id] = dec(d.data()); });
    q.docChanges().forEach(ch => { const d = lg[k][ch.doc.id]; if (d && d.fin) onFinal(lg, k, ch.doc.id, d); });
  });
  store('jor', 'jornadas'); store('cup', 'copa'); store('cl', 'champions');
  col('muro', q => q.docChanges().forEach(ch => {
    if (ch.type !== 'added') return; const p = dec(ch.doc.data()); if (!p || !p.t || p.t < lg.boot - 60000) return;
    once(code + ':muro:' + ch.doc.id, () => send(chatOf(code), `💬 <b>${esc(teamName(lg, p.team) || 'Míster')}</b>: ${esc(String(p.txt || '').slice(0, 300))}`));
  }));
  col('ofertas', q => q.docChanges().forEach(ch => {
    if (ch.type !== 'added') return; const o = dec(ch.doc.data()); if (!o || o.status !== 'pend' || !o.t || o.t < lg.boot - 60000) return;
    const to = lg.teams[o.to]; if (!to || !to.owner) return;
    const from = lg.teams[o.from], pl = E.player(o.pid);
    once(code + ':of:' + ch.doc.id, () => send(chatOf(code), `💰 <b>${esc(from?.name || 'Un club')}</b>${o.ai ? ' (IA)' : ''} ofrece <b>${fmtM(o.price)}</b> por ${esc(pl.name)} del <b>${esc(to.name)}</b>. ${o.exp ? 'Caduca a las ' + hhmm(o.exp) + '.' : ''}`));
  }));
}
const chatOf = code => ST.leagues[code]?.chat;
const fmtM = v => (v >= 1 ? (Math.round(v * 10) / 10).toString().replace('.', ',') + ' M€' : Math.round(v * 1000) + ' mil €');
const teamsArr = lg => { const n = lg.cfg?.n || 0; return [...Array(n)].map((_, i) => lg.teams['t' + i]); };
const teamName = (lg, id) => (typeof id === 'number' ? teamsArr(lg)[id]?.name : lg.teams[id]?.name);
function idxName(lg, i, doc) {
  const n = lg.cfg.n; if (i < n) return teamsArr(lg)[i]?.name || 'Equipo ' + (i + 1);
  const r0 = lg.cl['s' + lg.cfg.season + '-r0'] || doc; if (!r0 || !r0.qual) return 'Club europeo';
  return E.euroClubs(lg.cfg.seed, lg.cfg.season, 8 - r0.qual.length, r0.lvl)[i - n]?.name || 'Club europeo';
}
const isHuman = (lg, i) => i < lg.cfg.n && !!teamsArr(lg)[i]?.owner;

/* ---------- calendario (igual que la web) ---------- */
const total = lg => 2 * (lg.cfg.n - 1);
const kickAt = (lg, md) => lg.cfg.forcedAt?.[md] ?? (lg.cfg.firstKick + (md - 1) * DAY);
const cupOff = lg => lg.cfg.cupOff != null ? lg.cfg.cupOff : ((parseInt(lg.cfg.hour || '21', 10) >= 15 ? -7 : 6) * 3600000);
const dayAt = (lg, d) => lg.cfg.firstKick + (d - 1) * DAY + cupOff(lg);
function upcoming(lg) {
  const c = lg.cfg, T = total(lg), out = [];
  for (let md = 1; md <= T; md++) out.push({ k: 'jor', id: 's' + c.season + '-m' + md, at: kickAt(lg, md), name: 'Jornada ' + md, md });
  const R = E.cupBracket(c.n, c.seed + ':' + c.season).rounds, step = 4 * R <= T - 3 ? 4 : 2;
  for (let r = 0; r < R; r++) out.push({ k: 'cup', id: 's' + c.season + '-r' + r, at: dayAt(lg, Math.min(T, 4 + step * r)), name: 'Copa · ' + E.cupRoundName(r, R) });
  if (T >= 9) for (let r = 0; r < 4; r++) out.push({ k: 'cl', id: 's' + c.season + '-r' + r, at: dayAt(lg, 3 + 2 * r), name: r < 3 ? 'Champions · jornada ' + (r + 1) : 'Final de la Champions' });
  return out.sort((a, b) => a.at - b.at);
}
const label = { jor: '⚽', cup: '🏆', cl: '⭐' };
function humanPairs(lg, ev) {
  if (ev.k !== 'jor') return [];
  const fx = E.fixtures(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season)[ev.md - 1] || [];
  return fx.filter(([h, a]) => isHuman(lg, h) || isHuman(lg, a)).map(([h, a]) => {
    const derby = isHuman(lg, h) && isHuman(lg, a);
    return `${derby ? '🔥 ' : ''}<b>${esc(idxName(lg, h))}</b> vs <b>${esc(idxName(lg, a))}</b>${derby ? ' · DERBI' : ''}`;
  });
}

/* ---------- avisos por tiempo ---------- */
function tick() {
  const now = Date.now();
  for (const code in ST.leagues) {
    const lg = L[code], chat = chatOf(code); if (!lg || !lg.cfg || !lg.cfg.started || !chat) continue;
    for (const ev of upcoming(lg)) {
      const store = lg[ev.k]; if (store[ev.id]?.fin) continue;
      const dt = ev.at - now;
      if (dt <= 10 * 60000 && dt > 7 * 60000) once(code + ':pre:' + ev.k + ev.id, () => {
        const ps = humanPairs(lg, ev);
        send(chat, `${label[ev.k]} <b>${esc(ev.name)}</b> a las ${hhmm(ev.at)} (en 10 min)\n${ps.join('\n')}${ps.length ? '\n' : ''}\nVedlo en directo: quien esté conectado juega con <b>+8% de posesión</b>.\n${SITE}`);
      });
      if (dt <= 0 && dt > -90000) once(code + ':ko:' + ev.k + ev.id, () => send(chat, `🔴 ¡Empieza ${esc(ev.name)}! ${SITE}`));
    }
  }
}

/* ---------- resultados ---------- */
function onFinal(lg, k, id, d) {
  const code = lg.code, chat = chatOf(code); if (!chat || !lg.cfg) return;
  if (Date.now() - (d.at || 0) > 2 * DAY) return; // no repetir partidos antiguos al arrancar
  once(code + ':fin:' + k + id, () => {
    const title = k === 'jor' ? `⚽ Resultados · Jornada ${d.md}` : k === 'cup' ? `🏆 Copa · ${E.cupRoundName(+String(id).split('-r')[1], E.cupBracket(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season).rounds)}` : `⭐ Champions`;
    const lines = d.m.map((m, i) => {
      const hum = isHuman(lg, m.h) || isHuman(lg, m.a), derby = isHuman(lg, m.h) && isHuman(lg, m.a);
      const pn = d.pens && d.pens[i], pen = pn ? ` (pen. ${pn[0]}-${pn[1]})` : '';
      let s = `${derby ? '🔥 ' : ''}${hum ? '<b>' : ''}${esc(idxName(lg, m.h, d))} ${m.hg}-${m.ag} ${esc(idxName(lg, m.a, d))}${hum ? '</b>' : ''}${pen}`;
      if (hum) { const g = m.ev.filter(e => e.t === 'gol').map(e => `${esc(E.player(e.p).name.split(' ').slice(-1)[0])} ${e.m}'`); if (g.length) s += `\n   ⚽ ${g.join(', ')}`; }
      return s;
    });
    let txt = `${title}\n\n${lines.join('\n')}`;
    if (k === 'jor') {
      const docs = Object.values(lg.jor).filter(x => x.season === lg.cfg.season && x.fin);
      const tb = E.table(lg.cfg.n, docs);
      txt += '\n\n<b>Clasificación</b>\n' + tb.map((r, i) => `${i + 1}. ${isHuman(lg, r.t) ? '<b>' : ''}${esc(idxName(lg, r.t))} · ${r.pts}${isHuman(lg, r.t) ? '</b>' : ''}`).filter((_, i, a) => i < 5 || isHuman(lg, tb[i].t)).join('\n');
    }
    send(chat, txt);
  });
}

/* ---------- comandos ---------- */
async function link(chat, raw) {
  const code = String(raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  if (code.length !== 6) return send(chat, 'Escribe /vincular seguido del código de 6 letras de tu liga. Lo tienes en el juego: Club → Mi club → Código de la liga.');
  const s = await getDoc(doc(db, 'ligas/' + code)).catch(() => null);
  if (!s || !s.exists()) return send(chat, `No encuentro ninguna liga con el código ${esc(code)}.`);
  await setDoc(doc(db, 'ligas/' + code + '/miembros/' + auth.currentUser.uid), { name: 'Bot de Telegram', bot: true }, { merge: true });
  ST.leagues[code] = { chat }; save(); watch(code);
  send(chat, `✅ Vinculado a <b>${esc(s.data().name || 'Liga de Amigos')}</b> (${code}).\nAvisaré 10 minutos antes de cada partido, al empezar, con los resultados y la clasificación, las ofertas por vuestros jugadores y lo que escribáis en el muro.\n\nComandos: /proximos /tabla /desvincular`);
}
async function cmd(msg) {
  const chat = msg.chat.id, t = (msg.text || '').trim(), [c0, ...rest] = t.split(/\s+/), c = c0.split('@')[0].toLowerCase();
  const code = Object.keys(ST.leagues).find(k => ST.leagues[k].chat === chat), lg = code && L[code];
  if (c === '/start' || c === '/ayuda' || c === '/help') return send(chat, `👋 Soy el bot de <b>Liga de Amigos</b>.\nMeted el bot en vuestro grupo y escribid <code>/vincular CODIGO</code> con el código de 6 letras de la liga (Club → Mi club).\n\n${SITE}`);
  if (c === '/vincular') return link(chat, rest[0]);
  if (c === '/desvincular') { if (code) { delete ST.leagues[code]; save(); } return send(chat, 'Hecho, ya no enviaré avisos aquí.'); }
  if (!lg || !lg.cfg) return c.startsWith('/') ? send(chat, 'Este chat no está vinculado a ninguna liga. Usa /vincular CODIGO.') : null;
  if (c === '/proximos') {
    const now = Date.now(), up = upcoming(lg).filter(e => e.at + LIVE > now && !lg[e.k][e.id]?.fin).slice(0, 5);
    return send(chat, up.length ? '<b>Próximos partidos</b>\n' + up.map(e => `${label[e.k]} ${esc(e.name)} · ${dayName(e.at)} ${hhmm(e.at)}${e.at <= now ? ' 🔴 en juego' : ''}${humanPairs(lg, e).length ? '\n   ' + humanPairs(lg, e).join('\n   ') : ''}`).join('\n') : 'No hay partidos pendientes esta temporada.');
  }
  if (c === '/tabla') {
    const docs = Object.values(lg.jor).filter(x => x.season === lg.cfg.season && x.fin), tb = E.table(lg.cfg.n, docs);
    return send(chat, '<b>Clasificación</b>\n' + tb.map((r, i) => `${i + 1}. ${isHuman(lg, r.t) ? '<b>' : ''}${esc(idxName(lg, r.t))} · ${r.pts} pts${isHuman(lg, r.t) ? '</b>' : ''}`).join('\n'));
  }
}
async function poll() {
  for (;;) {
    const j = await tg('getUpdates', { offset: ST.offset, timeout: 50, allowed_updates: ['message'] });
    for (const u of j.result || []) { ST.offset = u.update_id + 1; save(); if (u.message?.text) cmd(u.message).catch(e => console.warn('cmd', e.message)); }
    if (!j.ok) await new Promise(r => setTimeout(r, 5000));
  }
}

await login();
await tg('setMyCommands', { commands: [{ command: 'vincular', description: 'Vincular este chat a una liga (código de 6 letras)' }, { command: 'proximos', description: 'Próximos partidos' }, { command: 'tabla', description: 'Clasificación' }, { command: 'desvincular', description: 'Dejar de recibir avisos aquí' }] });
for (const code in ST.leagues) watch(code);
setInterval(tick, 30000); setTimeout(tick, 5000);
poll();
console.log('Bot en marcha');
