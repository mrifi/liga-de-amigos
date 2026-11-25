// Bot de Telegram de Liga de Amigos: avisa antes de los partidos y publica resultados, clasificación, ofertas y el muro.
// Lee la liga como un miembro más (cuenta propia de Firebase) y solo escribe su ficha de miembro.
import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';
import path from 'node:path';
import { initializeApp } from 'firebase/app';
import { createNews, render as renderNews, setKey as setAIKey, testKey } from './news/news.mjs';
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
    const r = await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body, (k, v) => k === '__retry' ? undefined : v) });
    const j = await r.json();
    if (!j.ok && j.parameters?.retry_after && !body.__retry) { await sleep((j.parameters.retry_after + 1) * 1000); return tg(method, { ...body, __retry: 1 }); }
    if (!j.ok) console.warn('tg', method, j.description); return j;
  } catch (e) { console.warn('tg', method, e.message); return {}; }
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
const esc = s => String(s ?? '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
async function sendPhoto(chat, buf, caption) {
  try {
    const fd = new FormData(); fd.append('chat_id', String(chat)); fd.append('photo', new Blob([buf], { type: 'image/jpeg' }), 'noticia.jpg');
    if (caption) { fd.append('caption', caption); fd.append('parse_mode', 'HTML'); }
    let r = await fetch(`https://api.telegram.org/bot${TOKEN}/sendPhoto`, { method: 'POST', body: fd }), j = await r.json();
    if (!j.ok && j.parameters?.retry_after) { await new Promise(z => setTimeout(z, (j.parameters.retry_after + 1) * 1000)); r = await fetch(`https://api.telegram.org/bot${TOKEN}/sendPhoto`, { method: 'POST', body: fd }); j = await r.json(); }
    if (!j.ok) console.warn('sendPhoto', j.description); return j;
  } catch (e) { console.warn('sendPhoto', e.message); return {}; }
}
const NEWS_DIR = process.env.NEWS_DIR || '/news-out';
const codeOfChat = chat => Object.keys(ST.leagues).find(k => ST.leagues[k].chat === chat);
async function storeNews(code, n, buf, text) {
  if (!code) return;
  try {
    const id = Date.now().toString(36) + crypto.randomBytes(5).toString('hex');
    let img = null;
    if (buf) { fs.mkdirSync(NEWS_DIR, { recursive: true }); fs.writeFileSync(path.join(NEWS_DIR, id + '.jpg'), buf); img = '/noticias/' + id + '.jpg'; }
    const data = { t: Date.now(), kind: n.kind, caption: n.caption || '', img, text: text || null };
    await setDoc(doc(db, 'ligas/' + code + '/noticias/' + id), Object.fromEntries(Object.entries(data).map(([k, v]) => [k, JSON.stringify(v)])));
  } catch (e) { console.warn('storeNews', e.message); }
}
async function publishNews(chat, n) { const buf = await renderNews(n.kind, n.data); await sendPhoto(chat, buf, esc(n.caption)); storeNews(codeOfChat(chat), n, buf); }
const nq = {}; // cola de noticias por chat: una imagen cada ~50 s como mínimo
function queueNews(chat, maker, delay = 0) {
  const prev = nq[chat] || Promise.resolve();
  nq[chat] = prev.then(async () => {
    if (delay) await new Promise(z => setTimeout(z, delay));
    try { const n = await maker(); if (!n) return; await publishNews(chat, n); }
    catch (e) { console.warn('noticia', e.message); }
    await new Promise(z => setTimeout(z, 50000));
  });
}
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
  const lg = L[code] = { code, cfg: null, teams: {}, jor: {}, cup: {}, cl: {}, mem: {}, sorteos: {}, auc: {}, aucPrev: {}, unsub: [], boot: Date.now() };
  const P = 'ligas/' + code + '/';
  const col = (name, fn) => lg.unsub.push(onSnapshot(collection(db, P + name), q => fn(q), e => console.warn(code, name, e.code)));
  lg.unsub.push(onSnapshot(doc(db, P + 'liga/config'), s => { lg.cfg = s.exists() ? dec(s.data()) : null; }, e => console.warn(code, 'cfg', e.code)));
  col('equipos', q => { q.docs.forEach(d => { lg.teams[d.id] = dec(d.data()); }); ledgerNews(lg); });
  col('sorteos', q => q.docs.forEach(d => { lg.sorteos[d.id] = dec(d.data()); }));
  col('subastas', q => { q.docs.forEach(d => { lg.auc[d.id] = dec(d.data()); }); q.docChanges().forEach(ch => aucNews(lg, ch.type, ch.doc.id, dec(ch.doc.data()))); });
  col('miembros', q => q.docs.forEach(d => { lg.mem[d.id] = d.data(); }));
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
    if (ch.type === 'modified') {
      const o = dec(ch.doc.data()); if (!o || o.status !== 'no' || o.ai) return;
      const fi = lg.teams[o.from]?.idx, ti = lg.teams[o.to]?.idx; if (fi == null || ti == null || !isHuman(lg, fi) || !isHuman(lg, ti)) return;
      return once(code + ':ofno:' + ch.doc.id, () => { send(chatOf(code), fill(pick(T.REJECT), { t: who(lg, ti), f: who(lg, fi), p: esc(E.player(o.pid).name), x: fmtM(o.price) })); if (Math.random() < .6) queueNews(chatOf(code), () => NEWS.ultimaHora(lg, { facts: { tipo: 'oferta rechazada', rechaza: who2(lg, ti), ofertante: who2(lg, fi), jugador: E.player(o.pid).name, cifra: fmtM(o.price) }, fb: { titular: `${idxName(lg, ti)} rechaza ${fmtM(o.price)} por ${E.player(o.pid).name}`, sub: `«No está en venta», responde el club. ${idxName(lg, fi)} no se rinde.`, ticker: 'Tensión máxima en el mercado de la Liga de Amigos' } })); });
    }
    if (ch.type !== 'added') return; const o = dec(ch.doc.data()); if (!o || o.status !== 'pend' || !o.t || o.t < lg.boot - 60000) return;
    const to = lg.teams[o.to]; if (!to || !to.owner) return;
    const from = lg.teams[o.from], pl = E.player(o.pid);
    if (!o.ai && from && from.owner && Math.random() < .7) once(code + ':ofimg:' + ch.doc.id, () => queueNews(chatOf(code), () => NEWS.bombazo(lg, { tipo: 'oferta', from: from.idx, to: to.idx, pid: o.pid, price: o.price }), 3000));
    once(code + ':of:' + ch.doc.id, () => send(chatOf(code), `💰 <b>${esc(from?.name || 'Un club')}</b>${o.ai ? ' (IA)' : ''} ofrece <b>${fmtM(o.price)}</b> por ${esc(pl.name)} del <b>${esc(to.name)}</b>. ${o.exp ? 'Caduca a las ' + hhmm(o.exp) + '.' : ''}`));
  }));
}
const chatOf = code => ST.leagues[code]?.chat;
const fmtM = v => (v >= 1 ? (Math.round(v * 10) / 10).toString().replace('.', ',') + ' M€' : Math.round(v * 1000) + ' mil €');
const teamsArr = lg => { const n = lg.cfg?.n || 0; return [...Array(n)].map((_, i) => lg.teams['t' + i]); };
const teamName = (lg, id) => (typeof id === 'number' ? teamsArr(lg)[id]?.name : lg.teams[id]?.name);
function idxName(lg, i, doc) {
  const n = lg.cfg.n; if (i < n) return teamsArr(lg)[i]?.name || 'Equipo ' + (i + 1);
  const r0 = lg.cl['s' + lg.cfg.season + '-r0'] || lg.sorteos['s' + lg.cfg.season + '-cl'] || doc; if (!r0 || !r0.qual) return 'Club europeo';
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
  let fx = [];
  if (ev.k === 'jor') fx = E.fixtures(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season)[ev.md - 1] || [];
  else if (ev.k === 'cup') { const d = lg.cup[ev.id]; fx = d?.pairs || (ev.id.endsWith('-r0') ? E.cupBracket(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season).first : []); }
  else if (ev.k === 'cl') { const d = lg.cl[ev.id], sd = lg.sorteos['s' + lg.cfg.season + '-cl'], r = +ev.id.split('-r')[1]; fx = d?.pairs || (sd && r < 3 ? sd.groups.flatMap(g => E.CL_RR[r].map(([a, b]) => [g[a], g[b]])) : []); }
  fx = fx.filter(p => p && p[0] != null && p[1] != null);
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
      if (ev.k === 'jor' && dt <= 3 * 3600000 && dt > 20 * 60000) { const pv = previa(lg, ev); if (pv) once(code + ':pv:' + ev.id, () => { send(chat, pv); derbyPairs(lg, ev).forEach(([h, a]) => queueNews(chat, () => NEWS.caraacara(lg, ev, h, a), 20000)); }); }
    }
    drawTick(lg, chat, now);
    const [dk, hr] = madrid(now); if (hr >= 10 && hr < 12) once(code + ':dig:' + dk, () => send(chat, digest(lg)));
    if (hr >= 13 && hr < 16 && (ST.newsDay?.[code] || 0) < now - 20 * 3600000) once(code + ':news:' + dk, () => { ST.newsDay = { ...(ST.newsDay || {}), [code]: now }; save(); queueNews(chat, () => dailyNews(lg), Math.floor(Math.random() * 40) * 60000); });
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
      const tb = E.table(lg.cfg.n, seasonDocs(lg, d.md));
      txt += '\n\n<b>Clasificación</b>\n' + tb.map((r, i) => `${i + 1}. ${isHuman(lg, r.t) ? '<b>' : ''}${esc(idxName(lg, r.t))} · ${r.pts}${isHuman(lg, r.t) ? '</b>' : ''}`).filter((_, i, a) => i < 5 || isHuman(lg, tb[i].t)).join('\n');
    }
    send(chat, txt);
    setTimeout(() => { const b = pique(lg, k, d); if (b.length) { send(chat, '🎙️ <b>El vestuario opina</b>\n\n' + b.join('\n\n')); storeNews(code, { kind: 'texto', caption: '🎙️ El vestuario opina · ' + (k === 'jor' ? 'Jornada ' + d.md : k === 'cup' ? 'Copa' : 'Champions') }, null, b.join('\n\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')); } }, 15000);
    newsAfter(lg, chat, k, id, d);
  });
}


/* ---------- piques y noticias ---------- */
const pick = a => a[Math.floor(Math.random() * a.length)];
const fill = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');
const madrid = t => { const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false }).formatToParts(t).map(x => [x.type, x.value])); return [`${p.year}-${p.month}-${p.day}`, +p.hour % 24]; };
const mgr = (lg, i) => { const t = teamsArr(lg)[i], n = t && t.owner && lg.mem[t.owner]?.name; return n ? String(n).split(/[\s@]/)[0] : null; };
const who = (lg, i) => { const m = mgr(lg, i); return `<b>${esc(idxName(lg, i))}</b>${m ? ' (' + esc(m) + ')' : ''}`; };
const nick = (lg, i) => esc(mgr(lg, i) || idxName(lg, i));
const humansIdx = lg => teamsArr(lg).map((t, i) => i).filter(i => isHuman(lg, i));
const seasonDocs = (lg, maxMd = 1e9) => Object.values(lg.jor).filter(x => x.season === lg.cfg.season && x.fin && x.m && x.md <= maxMd).sort((a, b) => a.md - b.md);
const tableOf = (lg, docs) => { const tb = E.table(lg.cfg.n, docs), pos = {}; tb.forEach((r, k) => { pos[r.t] = k + 1; }); return { tb, pos, row: i => tb.find(r => r.t === i) }; };
const streak = (form, ch) => { let k = 0; for (let i = form.length - 1; i >= 0 && form[i] === ch; i--) k++; return k; };
const surname = id => E.player(id).name.split(' ').slice(-1)[0];

const T = {
  DERBY_WIN: [
    '🔥 {w} se lleva el derbi {sc}. {lm}, el grupo es todo tuyo para las excusas.',
    '😎 Derbi para {w} ({sc}). {lm} ya está buscando al árbitro para echarle la culpa.',
    '🏆 {w} gana el derbi {sc}. Tranquilo {lm}, solo te lo vamos a recordar toda la semana.',
    '📢 ¡{w} {sc} {l}! Que alguien le pase un pañuelo a {lm}.',
    '🥊 {w} tumba a {l} ({sc}). {wm} ya puede ir sacando pecho en el grupo.'],
  DERBY_HUMIL: [
    '💀 {sc}. Eso no ha sido un derbi, ha sido un atraco. {lm}, ¿quieres que te expliquemos cómo va el juego?',
    '📉 {lm} ha recibido una clase magistral gratis. Los demás tomamos apuntes.',
    '🚑 Que alguien llame a una ambulancia para la defensa de {l}.'],
  DERBY_DRAW: [
    '🤝 Empate en el derbi entre {a} y {b} ({sc}). Ninguno presume… de momento.',
    '😐 {a} y {b} firman tablas ({sc}). Tanto hablar en el grupo para esto.',
    '🫱 {sc} entre {a} y {b}. Se reparten los puntos y las excusas.'],
  LOST_AI: [
    '🤖 {l} pierde {sc} contra la IA. Contra una máquina, {lm}. Contra una máquina.',
    '🙈 {l} cae ante {ai} ({sc}). La IA ni sabe que existes y aun así te ha ganado.',
    '🤖 {ai} le da un repaso a {l} ({sc}). Skynet empieza por aquí.',
    '🫠 {lm}, perder {sc} contra {ai}… ¿has puesto la alineación con los ojos cerrados?'],
  DRAW_AI: [
    '😴 {t} empata contra {ai} ({sc}). Ni frío ni calor, {tm}.'],
  BIG_WIN: [
    '🚀 {w} le endosa un {sc} a {ai}. {wm} está en modo Guardiola.',
    '💥 {w} pasa por encima de {ai} ({sc}). Avisados quedáis.',
    '🎯 {sc} de {w} a {ai}. Esto empieza a dar miedo, chavales.'],
  HAT: ['🎩 Hat-trick de {p} con {t}. Que se lleve el balón a casa.', '🎩 {p} mete tres con {t}. Alguien que le haga un contrato de por vida.'],
  RED: ['🟥 Roja para {p}, de {t}. Disciplina de patio de colegio.', '🟥 {p} se va a la calle antes de tiempo. {tm}, las duchas le esperaban.'],
  NEW_KING: ['👑 {w} es el nuevo rey del grupo. Arrodillaos.', '👑 Cambio de trono: {w} ya manda entre los amigos. {pm}, se te acabó el chollo.'],
  LEADER: ['👑 {w} sigue mandando entre los amigos; {s} a {g} pts. Se huele el miedo.', '📊 {w} lidera el grupo y {s} persigue a {g} puntos… con la lengua fuera.'],
  TIED: ['⚖️ {a} y {b} empatados a puntos. Esto se pone caliente.'],
  OVERTAKE: ['⬆️ {a} adelanta a {b} en la tabla. {bm}, eso escuece.', '🏎️ Adelantamiento: {a} pasa a {b}. Se oye llorar desde aquí.'],
  LAST: ['🏮 {l} es el farolillo rojo de la liga. Por algo se empieza…', '🏮 Último de la tabla: {l}. {lm}, que alguien te mire el Wi-Fi porque el equipo no conecta.'],
  LOSE_STREAK: ['📉 {t} lleva {k} derrotas seguidas. ¿Se puede despedir al mánager? Ah, que eres tú, {tm}.', '😬 {k} derrotas seguidas para {t}. Huele a crisis en el vestuario.'],
  WIN_STREAK: ['🔥 {t} encadena {k} victorias seguidas. ¿Alguien piensa pararle?', '📈 {k} de {k} para {t}. {tm} ya se cree Ancelotti.'],
  PREV: ['🍻 El que pierda paga las cañas. Lo dice el bot y no se discute.', '📣 Se aceptan apuestas en el grupo. Quien calle, otorga.', '🧤 Mucho audio de WhatsApp, pero esto se decide en el campo.', '👀 Conectaos al directo: el que lo vea tiene +8% de posesión. El que no, que no llore luego.'],
  REJECT: ['❌ {t} rechaza los {x} de {f} por {p}. ¿Tacaño o visionario?', '🙅 {f} ofrece {x} por {p} y {t} dice que nanai.'],
  BUY: ['📰 <b>FICHAJE</b> · {t} se hace con {p} por {x}.'],
  BUY_BIG: [' Talonario sin fondo.', ' ¿Seguro que eso no es un error de un cero?', ' El mercado tiembla.'],
  AUC: ['🔨 {t} gana la subasta de {p} por {x}.'],
  SELL: ['💼 {t} vende a {p} por {x}.'],
  REL: ['🗑️ {t} libera a {p}. Gracias por los servicios prestados (pocos).'],
  BUILD: ['🏗️ {t} empieza obras: {x}. Ladrillo y ambición.'],
  CLOSE: ['{lm}, ¿todo bien en casa?', 'Recordad: el que va último invita.', '{wm} está insoportable. Alguien tiene que pararle.', 'Hoy se puede cambiar todo. O no.']
};

function scoreOf(m, pens) { const sc = `${m.hg}-${m.ag}`; return pens ? `${sc} (pen. ${pens[0]}-${pens[1]})` : sc; }
function winnerOf(m, pens) { if (m.hg !== m.ag) return m.hg > m.ag ? 0 : 1; if (pens) return pens[0] > pens[1] ? 0 : 1; return -1; }

function pique(lg, k, d) {
  const out = [], hum = new Set(humansIdx(lg)); if (!hum.size) return out;
  d.m.forEach((m, i) => {
    const pens = d.pens && d.pens[i], hH = hum.has(m.h), hA = hum.has(m.a), sc = scoreOf(m, pens), w = winnerOf(m, pens), diff = Math.abs(m.hg - m.ag);
    if (hH && hA) {
      if (w < 0) out.push(fill(pick(T.DERBY_DRAW), { a: who(lg, m.h), b: who(lg, m.a), sc }));
      else { const W = w ? m.a : m.h, Lo = w ? m.h : m.a, o = { w: who(lg, W), l: who(lg, Lo), wm: nick(lg, W), lm: nick(lg, Lo), sc };
        out.push(fill(pick(T.DERBY_WIN), o)); if (diff >= 3) out.push(fill(pick(T.DERBY_HUMIL), o)); }
    } else if (hH || hA) {
      const me = hH ? m.h : m.a, ai = hH ? m.a : m.h, mine = hH ? 0 : 1;
      if (w >= 0 && w !== mine) out.push(fill(pick(T.LOST_AI), { l: who(lg, me), lm: nick(lg, me), ai: esc(idxName(lg, ai, d)), sc }));
      else if (w === mine && diff >= 3) out.push(fill(pick(T.BIG_WIN), { w: who(lg, me), wm: nick(lg, me), ai: esc(idxName(lg, ai, d)), sc }));
      else if (w < 0 && Math.random() < .4) out.push(fill(pick(T.DRAW_AI), { t: who(lg, me), tm: nick(lg, me), ai: esc(idxName(lg, ai, d)), sc }));
    }
    const g = {};
    for (const e of m.ev || []) {
      const ti = e.s ? m.a : m.h; if (!hum.has(ti)) continue;
      if (e.t === 'gol') { g[e.p] = (g[e.p] || 0) + 1; if (g[e.p] === 3) out.push(fill(pick(T.HAT), { p: esc(E.player(e.p).name), t: who(lg, ti) })); }
      if (e.t === 'roja') out.push(fill(pick(T.RED), { p: esc(E.player(e.p).name), t: who(lg, ti), tm: nick(lg, ti) }));
    }
  });
  if (k === 'jor') {
    const before = tableOf(lg, seasonDocs(lg, d.md - 1)), after = tableOf(lg, seasonDocs(lg, d.md)), H = [...hum];
    if (H.length >= 2) {
      const rank = P => [...H].sort((a, b) => P.pos[a] - P.pos[b]);
      const ra = rank(after), rb = rank(before), lead = ra[0], sec = ra[1], g = after.row(lead).pts - after.row(sec).pts;
      if (d.md > 1 && rb[0] !== lead) out.push(fill(pick(T.NEW_KING), { w: who(lg, lead), pm: nick(lg, rb[0]) }));
      else if (g === 0) out.push(fill(pick(T.TIED), { a: who(lg, lead), b: who(lg, sec) }));
      else out.push(fill(pick(T.LEADER), { w: who(lg, lead), s: who(lg, sec), g }));
      if (d.md > 1) for (const a of H) for (const b of H) if (a !== b && before.pos[a] > before.pos[b] && after.pos[a] < after.pos[b] && !(a === lead && rb[0] === b)) out.push(fill(pick(T.OVERTAKE), { a: who(lg, a), b: who(lg, b), bm: nick(lg, b) }));
    }
    const last = after.tb[after.tb.length - 1]; if (last && hum.has(last.t) && d.md > 1) out.push(fill(pick(T.LAST), { l: who(lg, last.t), lm: nick(lg, last.t) }));
    for (const i of H) { const f = after.row(i).form, ls = streak(f, 'P'), ws = streak(f, 'G');
      if (ls >= 3) out.push(fill(pick(T.LOSE_STREAK), { t: who(lg, i), tm: nick(lg, i), k: ls }));
      else if (ws >= 3) out.push(fill(pick(T.WIN_STREAK), { t: who(lg, i), tm: nick(lg, i), k: ws })); }
  }
  return out.slice(0, 7);
}

function h2h(lg, a, b) {
  let wa = 0, wb = 0, dr = 0;
  for (const d of Object.values(lg.jor)) if (d.fin && d.m) for (const m of d.m) {
    if (!((m.h === a && m.a === b) || (m.h === b && m.a === a))) continue;
    if (m.hg === m.ag) dr++; else if ((m.hg > m.ag) === (m.h === a)) wa++; else wb++;
  }
  return { wa, wb, dr };
}
function previa(lg, ev) {
  const fx = E.fixtures(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season)[ev.md - 1] || [], ders = fx.filter(([h, a]) => isHuman(lg, h) && isHuman(lg, a));
  if (!ders.length) return null;
  const P = tableOf(lg, seasonDocs(lg));
  const parts = ders.map(([h, a]) => {
    const r = h2h(lg, h, a), ph = P.row(h), pa = P.row(a);
    let s = `${who(lg, h)} 🆚 ${who(lg, a)}\n   ${P.pos[h]}º (${ph.pts} pts) contra ${P.pos[a]}º (${pa.pts} pts)`;
    s += r.wa + r.wb + r.dr ? `\n   Cara a cara: ${nick(lg, h)} ${r.wa} · empates ${r.dr} · ${nick(lg, a)} ${r.wb}` : '\n   Primer derbi entre ellos. Alguien va a estrenar el orgullo.';
    return s;
  });
  return `🔥 <b>PREVIA DEL DERBI</b> · Jornada ${ev.md}, a las ${hhmm(ev.at)}\n\n${parts.join('\n\n')}\n\n${pick(T.PREV)}\n${SITE}`;
}

function scorers(lg) {
  const g = {}, team = {};
  for (const d of seasonDocs(lg)) for (const m of d.m) for (const e of m.ev || []) if (e.t === 'gol') { g[e.p] = (g[e.p] || 0) + 1; team[e.p] = e.s ? m.a : m.h; }
  return Object.entries(g).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([p, n]) => ({ p, n, t: team[p] }));
}
function digest(lg) {
  const H = humansIdx(lg), docs = seasonDocs(lg), P = tableOf(lg, docs), now = Date.now(), L1 = [`📰 <b>NOTICIAS DE LA LIGA</b> · ${dayName(now)}`];
  if (!docs.length) L1.push('Aún no se ha jugado ninguna jornada. Todos invictos… por poco tiempo.');
  if (H.length) {
    const r = [...H].sort((a, b) => P.pos[a] - P.pos[b]);
    L1.push('<b>📊 Entre amigos</b>\n' + r.map((i, k) => `${['🥇', '🥈', '🥉'][k] || '▫️'} ${who(lg, i)} · ${P.pos[i]}º, ${P.row(i).pts} pts${P.row(i).form.length ? ' · ' + P.row(i).form.slice(-5).join('') : ''}`).join('\n'));
  }
  const sc = scorers(lg);
  if (sc.length) L1.push('<b>⚽ Pichichi</b>\n' + sc.map(x => `${esc(E.player(x.p).name)} (${esc(idxName(lg, x.t))}) · ${x.n}`).join('\n'));
  const wk = H.map(i => { const t = teamsArr(lg)[i]; return { i, spent: (t.ledger || []).filter(e => e.d > now - 7 * DAY && e.amt < 0 && /^(Fichaje|Subasta)/.test(e.why)).reduce((a, e) => a - e.amt, 0) }; }).filter(x => x.spent > 0).sort((a, b) => b.spent - a.spent);
  if (wk.length) L1.push(`<b>💸 Mercado</b>\n${who(lg, wk[0].i)} es el que más ha gastado esta semana: ${fmtM(wk[0].spent)}.`);
  const st = H.map(i => ({ i, l: teamsArr(lg)[i].stadium || 0 })).sort((a, b) => b.l - a.l);
  if (st.length >= 2 && st[0].l > st[st.length - 1].l) L1.push(`<b>🏟️ Estadios</b>\nEl más grande del grupo es el de ${who(lg, st[0].i)}: ${esc(E.STADIUM[st[0].l].n)} (${E.STADIUM[st[0].l].cap.toLocaleString('es-ES')} plazas). ${nick(lg, st[st.length - 1].i)} sigue en ${esc(E.STADIUM[st[st.length - 1].l].n.toLowerCase())}.`);
  const [today] = madrid(now), hoy = upcoming(lg).filter(e => madrid(e.at)[0] === today && e.at > now && !lg[e.k][e.id]?.fin);
  if (hoy.length) L1.push('<b>📅 Hoy</b>\n' + hoy.map(e => `${label[e.k]} ${esc(e.name)} a las ${hhmm(e.at)}${humanPairs(lg, e).some(x => x.includes('DERBI')) ? ' · 🔥 hay derbi' : ''}`).join('\n'));
  if (H.length >= 2 && docs.length) { const r = [...H].sort((a, b) => P.pos[a] - P.pos[b]); L1.push('🎙️ ' + fill(pick(T.CLOSE), { lm: nick(lg, r[r.length - 1]), wm: nick(lg, r[0]) })); }
  return L1.join('\n\n');
}
function piqueNow(lg) {
  const H = humansIdx(lg), docs = seasonDocs(lg);
  if (H.length < 2) return '🤷 Aquí solo hay un mánager. Invita a tus amigos, que picarse solo no tiene gracia.';
  if (!docs.length) return '🥱 Aún no se ha jugado nada y ya estáis nerviosos. Buena señal.';
  const P = tableOf(lg, docs), r = [...H].sort((a, b) => P.pos[a] - P.pos[b]), top = r[0], bot = r[r.length - 1], g = P.row(top).pts - P.row(bot).pts;
  return pick([
    `👑 ${who(lg, top)} va por delante de ${who(lg, bot)} por ${g} puntos. ${nick(lg, bot)}, ¿piensas hacer algo o solo miras?`,
    `📊 ${nick(lg, bot)} está ${P.pos[bot]}º. ${nick(lg, top)} está ${P.pos[top]}º. No digo nada, solo lo dejo aquí.`,
    `🍻 A día de hoy, las cañas las paga ${nick(lg, bot)}.`,
    `🧠 ${nick(lg, top)} entrena, ficha y gana. ${nick(lg, bot)} manda audios. Saquen sus conclusiones.`]);
}
function ledgerNews(lg) {
  const chat = chatOf(lg.code); if (!lg.cfg) return;
  ST.seen = ST.seen || {};
  for (const i of humansIdx(lg)) {
    const t = teamsArr(lg)[i], key = lg.code + ':' + t.id, led = t.ledger || [], max = led.reduce((a, e) => Math.max(a, e.d || 0), 0);
    if (ST.seen[key] == null) { ST.seen[key] = max; save(); continue; }
    const fresh = led.filter(e => e.d > ST.seen[key] && e.d > Date.now() - 6 * 3600000);
    if (max > ST.seen[key]) { ST.seen[key] = max; save(); }
    if (!chat) continue;
    for (const e of fresh) {
      const [kind, ...rest] = String(e.why || '').split(': '), o = { t: who(lg, i), p: esc(rest.join(': ')), x: fmtM(Math.abs(e.amt)) };
      if (kind === 'Fichaje' || kind === 'Subasta') {
        if (Math.abs(e.amt) >= 3) queueNews(chat, () => NEWS.fichaje(lg, i, rest.join(': '), e.amt, kind === 'Subasta' ? 'Subasta ganada' : 'Traspaso'), 5000);
        else send(chat, fill(pick(kind === 'Fichaje' ? T.BUY : T.AUC), o));
      }
      else if (kind === 'Venta') { send(chat, fill(pick(T.SELL), o)); if (Math.abs(e.amt) >= 8) queueNews(chat, () => NEWS.ultimaHora(lg, { facts: { tipo: 'venta', vendedor: who2(lg, i), jugador: rest.join(': '), precio: fmtM(Math.abs(e.amt)) }, fb: { titular: `${t.name} vende a ${rest.join(': ')}`, sub: `Operación cerrada por ${fmtM(Math.abs(e.amt))}. La afición, dividida.`, ticker: 'El mercado se mueve en la Liga de Amigos' } })); }
      else if (kind === 'Liberado') send(chat, fill(pick(T.REL), o));
      else if (kind === 'Obras') send(chat, fill(pick(T.BUILD), { ...o, x: esc(rest.join(': ')) }));
    }
  }
}


/* ---------- sorteos en directo ---------- */
const drawKicks = lg => [...Array(total(lg))].map((_, i) => kickAt(lg, i + 1));
const clOn = lg => total(lg) >= 9;
const clDrawAt = lg => E.drawTime(dayAt(lg, 3), drawKicks(lg));
const cupRounds = lg => E.cupBracket(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season).rounds;
const cupDrawAt = lg => { const R = cupRounds(lg), T = total(lg), step = 4 * R <= T - 3 ? 4 : 2; return E.drawTime(dayAt(lg, Math.min(T, 4)), drawKicks(lg)); };
const tAvg = (lg, t) => (t.squad || []).reduce((a, id) => a + E.ovr(id, lg.cfg.season, t.xp?.[id] || 0), 0) / Math.max(1, (t.squad || []).length);
function clCompute(lg) {
  const c = lg.cfg, Sx = c.season, n = c.n, q = Math.min(4, Math.floor(n / 2)), T = teamsArr(lg);
  const prev = Object.values(lg.jor).filter(d => d.season === Sx - 1 && d.m);
  let qual;
  if (Sx > 1 && prev.length) qual = E.table(n, prev).slice(0, q).map(r => r.t);
  else qual = T.map((t, i) => ({ i, h: t?.owner ? 1 : 0, a: t ? tAvg(lg, t) : 0 })).sort((x, y) => y.h - x.h || y.a - x.a).slice(0, q).map(x => x.i);
  const lvl = Math.round(qual.reduce((a, i) => a + tAvg(lg, T[i]), 0) / qual.length);
  const eu = E.euroClubs(c.seed, Sx, 8 - qual.length, lvl).map((t, k) => ({ ...t, idx: n + k }));
  const { groups, seq } = E.clDraw(c.seed, Sx, qual, eu.map(t => t.idx));
  return { qual, lvl, groups, seq, eu };
}
const nameAny = (lg, i, eu) => i < lg.cfg.n ? idxName(lg, i) : (eu.find(t => t.idx === i)?.name || 'Club europeo');
const whoAny = (lg, i, eu) => isHuman(lg, i) ? who(lg, i) : `<b>${esc(nameAny(lg, i, eu))}</b>${i >= lg.cfg.n ? '' : ' <i>(IA)</i>'}`;
async function ball(chat, teaser, reveal) {
  const m = await send(chat, teaser); await sleep(3500);
  if (m?.result?.message_id) await tg('editMessageText', { chat_id: chat, message_id: m.result.message_id, text: reveal, parse_mode: 'HTML', disable_web_page_preview: true });
  else await send(chat, reveal);
  await sleep(3500);
}
const BALL = ['🥁 Se mueve el bombo…', '🥁 Sale una bola…', '🥁 La mano inocente busca…', '🥁 Bola en la mano… se abre…', '🥁 Silencio en la sala…'];
async function clCeremony(lg, chat) {
  const Sx = lg.cfg.season, key = 's' + Sx + '-cl', ref = doc(db, 'ligas/' + lg.code + '/sorteos/' + key);
  let saved = (await getDoc(ref).catch(() => null))?.data(); saved = saved ? dec(saved) : null;
  const d = clCompute(lg);
  if (saved && saved.groups) { d.qual = saved.qual; d.lvl = saved.lvl; d.groups = saved.groups; d.eu = E.euroClubs(lg.cfg.seed, Sx, 8 - d.qual.length, d.lvl).map((t, k) => ({ ...t, idx: lg.cfg.n + k })); d.seq = [...d.qual, ...d.eu.map(t => t.idx)].map(t => ({ t, pot: t < lg.cfg.n ? 1 : 2, g: d.groups[0].includes(t) ? 0 : 1 })); }
  else await setDoc(ref, Object.fromEntries(Object.entries({ qual: d.qual, lvl: d.lvl, groups: d.groups, at: clDrawAt(lg), by: 'bot' }).map(([k, v]) => [k, JSON.stringify(v)])));
  const G = 'AB';
  await send(chat, `⭐ <b>SORTEO DE LA CHAMPIONS · EN DIRECTO</b>\n\n<b>Bombo 1 · vuestra liga</b>\n${d.qual.map(i => '• ' + whoAny(lg, i, d.eu)).join('\n')}\n\n<b>Bombo 2 · Europa</b>\n${d.eu.map(t => '• ' + esc(t.name)).join('\n')}\n\nDos grupos de 4. Los ganadores de grupo juegan la final. Empezamos 👇`);
  await sleep(6000);
  const placed = [[], []];
  for (const [k, x] of d.seq.entries()) {
    placed[x.g].push(x.t);
    let line = `${x.pot === 1 ? '🟡' : '🔵'} ${whoAny(lg, x.t, d.eu)} → <b>Grupo ${G[x.g]}</b>`;
    if (isHuman(lg, x.t)) { const mates = placed[x.g].filter(t => t !== x.t && isHuman(lg, t)); if (mates.length) line += `\n💥 ¡DERBI EN EL GRUPO ${G[x.g]}! ${mates.map(t => nick(lg, t)).join(' y ')} contra ${nick(lg, x.t)}. Esto se pone feo.`; else if (x.t < lg.cfg.n) line += `\n${pick(['😬 A ver qué le toca…', '🙏 Que no le caiga un gigante…', '👀 Atentos a sus rivales…'])}`; }
    await ball(chat, `${pick(BALL)}\n<i>Bola ${k + 1} de ${d.seq.length} · bombo ${x.pot}</i>`, line);
  }
  const H = d.qual.filter(i => isHuman(lg, i)), same = [0, 1].map(g => H.filter(i => d.groups[g].includes(i)));
  let tail = same.filter(a => a.length >= 2).map(a => `🔥 ${a.map(i => nick(lg, i)).join(' vs ')}: derbi europeo asegurado.`);
  if (!tail.length && H.length >= 2) tail.push(`🤝 ${H.map(i => nick(lg, i)).join(' y ')} en grupos distintos: solo os podéis ver en la final. Si llegáis.`);
  await send(chat, `📋 <b>ASÍ QUEDAN LOS GRUPOS</b>\n\n${d.groups.map((g, gi) => `<b>Grupo ${G[gi]}</b>\n${g.map(i => '• ' + whoAny(lg, i, d.eu)).join('\n')}`).join('\n\n')}\n\n${tail.join('\n')}${tail.length ? '\n' : ''}⭐ Primera jornada: ${dayName(dayAt(lg, 3))} a las ${hhmm(dayAt(lg, 3))}.\n${SITE}`);
}
async function cupCeremony(lg, chat) {
  const b = E.cupBracket(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season), R = b.rounds, eu = [];
  await send(chat, `🏆 <b>SORTEO DE LA COPA · EN DIRECTO</b>\n\n${lg.cfg.n} equipos, eliminatoria a partido único. Si hay empate, penaltis.\nPrimera ronda: <b>${esc(E.cupRoundName(0, R))}</b>. Empezamos 👇`);
  await sleep(6000);
  for (const [k, [h, a]] of b.first.entries()) {
    if (h == null && a == null) continue;
    let line;
    if (h == null || a == null) line = `🎟️ ${whoAny(lg, h ?? a, eu)} pasa directo a la siguiente ronda. Qué suerte tienen algunos.`;
    else { line = `⚔️ ${whoAny(lg, h, eu)} 🆚 ${whoAny(lg, a, eu)}`;
      if (isHuman(lg, h) && isHuman(lg, a)) line += `\n💥 ¡DERBI A LA PRIMERA! ${nick(lg, h)} y ${nick(lg, a)}: uno se va a casa ya.`;
      else if (isHuman(lg, h) || isHuman(lg, a)) line += `\n${pick(['😏 Cruce asequible… o no.', '👀 Ojo, que la IA también muerde.', '🍀 Suerte, la va a necesitar.'])}`; }
    await ball(chat, `${pick(BALL)}\n<i>Cruce ${k + 1} de ${b.first.length}</i>`, line);
  }
  const H = []; b.first.forEach((p, k) => p.forEach(t => { if (t != null && isHuman(lg, t)) H.push({ t, k }); }));
  const meets = [];
  for (let x = 0; x < H.length; x++) for (let y = x + 1; y < H.length; y++) { const r = E.cupMeetRound(H[x].k, H[y].k); if (r > 0) meets.push(`🔮 ${nick(lg, H[x].t)} y ${nick(lg, H[y].t)} se cruzarían en <b>${esc(E.cupRoundName(r, R))}</b>.`); }
  await send(chat, `📋 <b>CUADRO DE LA COPA</b>\n\n${b.first.map(([h, a]) => h == null || a == null ? (h ?? a) == null ? '' : `• ${whoAny(lg, h ?? a, eu)} (pasa)` : `• ${whoAny(lg, h, eu)} 🆚 ${whoAny(lg, a, eu)}`).filter(Boolean).join('\n')}\n\n${meets.slice(0, 6).join('\n')}${meets.length ? '\n' : ''}🏆 ${esc(E.cupRoundName(0, R))}: ${dayName(cupAtR(lg, 0))} a las ${hhmm(cupAtR(lg, 0))}.\n${SITE}`);
}
const cupAtR = (lg, r) => { const R = cupRounds(lg), T = total(lg), step = 4 * R <= T - 3 ? 4 : 2; return dayAt(lg, Math.min(T, 4 + step * r)); };
const running = {};
function drawTick(lg, chat, now) {
  const S = lg.cfg.season, list = [{ k: 'cup', at: cupDrawAt(lg), name: 'la Copa', ico: '🏆', run: cupCeremony, done: !!lg.cup['s' + S + '-r0'] }];
  if (clOn(lg)) list.push({ k: 'cl', at: clDrawAt(lg), name: 'la Champions', ico: '⭐', run: clCeremony, done: !!lg.cl['s' + S + '-r0'] || !!lg.sorteos['s' + S + '-cl'] });
  for (const x of list) {
    if (x.done && !running[lg.code + x.k]) continue;
    const dt = x.at - now, id = lg.code + ':draw:' + x.k + ':s' + S;
    if (dt <= 8 * 3600000 && dt > 15 * 60000) once(id + ':ann', () => send(chat, `${x.ico}🎱 <b>Hoy a las ${hhmm(x.at)}: sorteo de ${x.name} EN DIRECTO</b> aquí en el grupo.\nNo vale mirar en el juego: los cruces se desvelan cuando acabe. Traed palomitas 🍿`));
    if (dt <= 10 * 60000 && dt > 60000) once(id + ':10', () => send(chat, `⏳ En 10 minutos, sorteo de ${x.name}. Id preparando las excusas.`));
    if (dt <= 0 && dt > -10 * 60000 && !x.done) once(id + ':run', () => { running[lg.code + x.k] = 1; x.run(lg, chat).catch(e => console.warn('sorteo', e.message)).finally(() => { delete running[lg.code + x.k]; }); });
  }
}


/* ---------- noticias en imagen ---------- */
const who2 = (lg, i) => `${idxName(lg, i)}${mgr(lg, i) ? ' (' + mgr(lg, i) + ')' : ''}`;
const NEWS = createNews({ E, teamsArr, idxName, isHuman, nick, mgr, seasonDocs, tableOf, streak, h2h, scorers, humansIdx });
function derbyPairs(lg, ev) { const fx = E.fixtures(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season)[ev.md - 1] || []; return fx.filter(([h, a]) => isHuman(lg, h) && isHuman(lg, a)); }
function newsAfter(lg, chat, k, id, d) {
  if (!humansIdx(lg).length || !NEWS.mainStory(lg, d)) return;
  if (k === 'jor') {
    queueNews(chat, () => NEWS.portada(lg, d), 60000);
    const md = d.md, opts = [];
    const late = d.m.some(m => (isHuman(lg, m.h) || isHuman(lg, m.a)) && (m.ev || []).some(e => e.t === 'gol' && e.m >= 80 && [m.hg, m.ag][e.s] >= [m.hg, m.ag][1 - e.s]));
    if (late) opts.push({ p: 9, f: () => NEWS.radio(lg, d) });
    opts.push({ p: 5 + Math.random() * 4, f: () => NEWS.notas(lg, d) });
    opts.push({ p: 4 + Math.random() * 4, f: () => NEWS.chat(lg, d) });
    opts.push({ p: 6 + Math.random() * 3, f: () => NEWS.comunicado(lg, d) });
    if (md >= 3) opts.push({ p: 3 + Math.random() * 5, f: () => NEWS.expectativa(lg, d) });
    opts.push({ p: 2 + Math.random() * 5, f: () => NEWS.onceIdeal(lg, d) });
    if (md % 3 === 0) opts.push({ p: 7, f: () => NEWS.clasificacion(lg, md) });
    if (md % 4 === 2) opts.push({ p: 6, f: () => NEWS.tierlist(lg, md) });
    // se prueban por prioridad; salen como mucho 2 extra (los que no aplican devuelven null)
    const order = opts.sort((a, b) => b.p - a.p);
    let sent = 0;
    queueNews(chat, async () => { for (const o of order) { if (sent >= 2) break; const n = await o.f(); if (n) { sent++; await publishNews(chat, n); if (sent < 2) await sleep(60000); } } return null; }, 30000);
  } else {
    const R = k === 'cup' ? E.cupBracket(lg.cfg.n, lg.cfg.seed + ':' + lg.cfg.season).rounds : 4, r = +String(id).split('-r')[1], final = r === R - 1;
    const comp = k === 'cup' ? (final ? 'Final de Copa' : 'Copa') : (final ? 'Final de la Champions' : 'Champions');
    if (final) queueNews(chat, () => NEWS.portada(lg, d, { comp }), 60000);
    else if (Math.random() < .35) queueNews(chat, () => NEWS.radio(lg, { ...d, md: comp }), 60000);
  }
}
async function dailyNews(lg) {
  const md = seasonDocs(lg).length, H = humansIdx(lg); if (!H.length) return null;
  const opts = [() => NEWS.encuesta(lg)];
  // rumor: un equipo de amigos se interesa por una estrella de otro equipo
  opts.push(() => { const from = pick(H), pool = []; teamsArr(lg).forEach((t, i) => { if (i === from || !t) return; (t.squad || []).forEach(pid => { const o = E.ovr(pid, lg.cfg.season, t.xp?.[pid] || 0); if (o >= 80) pool.push({ pid, i, o, v: E.pval(pid, lg.cfg.season, t.xp?.[pid] || 0) }); }); });
    if (!pool.length) return null; const x = pick(pool.sort((a, b) => b.o - a.o).slice(0, 12)); return NEWS.bombazo(lg, { tipo: 'rumor', from, to: x.i, pid: x.pid, price: Math.round(x.v * (1 + Math.random() * .5) * 10) / 10 }); });
  if (md >= 2) opts.push(() => NEWS.tierlist(lg, md), () => NEWS.clasificacion(lg, md));
  for (let tries = 0; tries < 4; tries++) { const n = await pick(opts)(); if (n) return n; }
  return null;
}
async function setGroqKey(msg, raw) {
  const chat = msg.chat.id, from = msg.from?.id;
  if (msg.chat.type !== 'private') { tg('deleteMessage', { chat_id: chat, message_id: msg.message_id }); return send(chat, '🔐 La clave se manda por privado al bot, no en el grupo. He intentado borrar tu mensaje; por si acaso, crea una clave nueva en Groq.'); }
  tg('deleteMessage', { chat_id: chat, message_id: msg.message_id });
  if (ST.groqOwner && ST.groqOwner !== from) return send(chat, 'Solo quien configuró la clave la puede cambiar.');
  if (raw === 'borrar') { ST.groq = null; save(); setAIKey(null); return send(chat, 'Clave borrada. Las noticias usarán textos de reserva.'); }
  if (!raw || !/^gsk_[A-Za-z0-9]{20,}$/.test(raw)) return send(chat, 'Mándamela así: <code>/clave gsk_...</code> (la clave de console.groq.com).');
  const ok = await testKey(raw);
  if (ok === false) return send(chat, '❌ Groq dice que esa clave no es válida. Revisa que la has copiado entera.');
  ST.groq = raw; ST.groqOwner = from; save(); setAIKey(raw);
  send(chat, `✅ Clave guardada${ok ? ' y comprobada' : ''}. He borrado tu mensaje. Ya escribo las noticias con IA.\nPrueba <code>/noticia</code> en el grupo.`);
}


/* ---------- subastas ---------- */
const AUC_TAG = { estrella: '⭐ Crack', titular: 'Titular', joven: '🌱 Promesa', veterano: 'Veterano', ganga: '💸 Ganga', ia: '🤖 Vende la IA' };
const durTxt = m => m >= 60 ? (m / 60) + ' h' : m + ' min';
function pInfo(lg, a) {
  const p = E.player(a.pid), t = a.seller ? lg.teams[a.seller] : null;
  return { p, ovr: E.ovr(a.pid, lg.cfg.season, t?.xp?.[a.pid] || 0), age: E.age(p, lg.cfg.season) };
}
function aucNews(lg, type, id, a) {
  const chat = chatOf(lg.code); if (!chat || !a || !a.pid || !lg.cfg) return;
  const prev = lg.aucPrev[id]; lg.aucPrev[id] = a;
  const seller = a.seller ? lg.teams[a.seller] : null, sHum = !!seller?.owner, x = pInfo(lg, a);
  const fresh = (a.t || 0) > lg.boot - 60000;
  if (type === 'added' && a.status === 'open' && fresh) {
    if (sHum) once(lg.code + ':auc:' + id, () => send(chat, `🔨 <b>SUBASTA</b> · ${who(lg, seller.idx)} subasta a <b>${esc(x.p.name)}</b> (${x.p.pos}, ${x.ovr} de media, ${x.age} años)\nPrecio de salida: <b>${fmtM(a.min)}</b> · termina a las <b>${hhmm(a.ends)}</b>${a.mins ? ' (' + durTxt(a.mins) + ')' : ''}\n¡A pujar! ${SITE}`));
    if (/^auto-.*-0$/.test(id)) once(lg.code + ':mkt:' + id, () => setTimeout(() => {
      const day = id.replace(/-0$/, '-'), list = Object.entries(lg.auc).filter(([k, v]) => k.startsWith(day) && v.status === 'open').map(([, v]) => v);
      if (!list.length) return;
      const lines = list.sort((u, v) => pInfo(lg, v).ovr - pInfo(lg, u).ovr).slice(0, 8).map(v => { const y = pInfo(lg, v); return `• ${AUC_TAG[v.kind] || 'Libre'} · <b>${esc(y.p.name)}</b> ${y.p.pos} ${y.ovr} (${y.age} años) · desde ${fmtM(v.min)}`; });
      send(chat, `🛒 <b>MERCADO DEL DÍA</b> · ${list.length} subastas hasta las ${hhmm(list[0].ends)}\n\n${lines.join('\n')}\n\nCada puja cuesta 1 token. ${SITE}`);
    }, 8000));
  }
  if (type === 'modified' && prev && a.status === 'open') {
    const top = b => (b || []).reduce((m, z) => (!m || z.amt > m.amt ? z : m), null), t1 = top(a.bids), t0 = top(prev.bids);
    if (t1 && t0 && t1.team !== t0.team && lg.teams[t1.team]?.owner && lg.teams[t0.team]?.owner)
      once(lg.code + ':outbid:' + id + ':' + (a.bids || []).length, () => send(chat, `⚔️ ${who(lg, lg.teams[t1.team].idx)} supera la puja de ${who(lg, lg.teams[t0.team].idx)} por <b>${esc(x.p.name)}</b>: ${fmtM(t1.amt)}. Termina a las ${hhmm(a.ends)}.`));
  }
  if (type === 'modified' && prev && prev.status === 'open' && a.status !== 'open' && sHum) {
    const w = a.winner ? lg.teams[a.winner] : null;
    once(lg.code + ':aucend:' + id, () => send(chat, w ? `✅ <b>${esc(x.p.name)}</b> se va de ${who(lg, seller.idx)} a ${w.owner ? who(lg, w.idx) : '<b>' + esc(w.name) + '</b> (IA)'} por <b>${fmtM(a.price)}</b>.` : `🤷 Nadie ha pujado por <b>${esc(x.p.name)}</b>. Se queda en ${who(lg, seller.idx)}.`));
  }
}

/* ---------- comandos ---------- */
async function link(chat, raw) {
  const code = String(raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  if (code.length !== 6) return send(chat, 'Escribe /vincular seguido del código de 6 letras de tu liga. Lo tienes en el juego: Club → Mi club → Código de la liga.');
  const s = await getDoc(doc(db, 'ligas/' + code)).catch(() => null);
  if (!s || !s.exists()) return send(chat, `No encuentro ninguna liga con el código ${esc(code)}.`);
  await setDoc(doc(db, 'ligas/' + code + '/miembros/' + auth.currentUser.uid), { name: 'Bot de Telegram', bot: true }, { merge: true });
  ST.leagues[code] = { chat }; save(); watch(code);
  send(chat, `✅ Vinculado a <b>${esc(s.data().name || 'Liga de Amigos')}</b> (${code}).\nAvisaré 10 minutos antes de cada partido, al empezar, con los resultados y la clasificación, las ofertas por vuestros jugadores y lo que escribáis en el muro.\n\nY como buen vestuario: piques tras cada jornada, previa de los derbis y noticias cada mañana.\n\nComandos: /proximos /tabla /pique /noticias /noticia /desvincular`);
}
async function cmd(msg) {
  const chat = msg.chat.id, t = (msg.text || '').trim(), [c0, ...rest] = t.split(/\s+/), c = c0.split('@')[0].toLowerCase();
  const code = Object.keys(ST.leagues).find(k => ST.leagues[k].chat === chat), lg = code && L[code];
  if (c === '/start' || c === '/ayuda' || c === '/help') return send(chat, `👋 Soy el bot de <b>Liga de Amigos</b>.\nMeted el bot en vuestro grupo y escribid <code>/vincular CODIGO</code> con el código de 6 letras de la liga (Club → Mi club).\n\n${SITE}`);
  if (c === '/vincular') return link(chat, rest[0]);
  if (c === '/clave') return setGroqKey(msg, rest[0]);
  if (c === '/desvincular') { if (code) { delete ST.leagues[code]; save(); } return send(chat, 'Hecho, ya no enviaré avisos aquí.'); }
  if (!lg || !lg.cfg) return c.startsWith('/') ? send(chat, 'Este chat no está vinculado a ninguna liga. Usa /vincular CODIGO.') : null;
  if (c === '/proximos') {
    const now = Date.now(), up = upcoming(lg).filter(e => e.at + LIVE > now && !lg[e.k][e.id]?.fin).slice(0, 5);
    return send(chat, up.length ? '<b>Próximos partidos</b>\n' + up.map(e => `${label[e.k]} ${esc(e.name)} · ${dayName(e.at)} ${hhmm(e.at)}${e.at <= now ? ' 🔴 en juego' : ''}${humanPairs(lg, e).length ? '\n   ' + humanPairs(lg, e).join('\n   ') : ''}`).join('\n') : 'No hay partidos pendientes esta temporada.');
  }
  if (c === '/noticias') return send(chat, digest(lg));
  if (c === '/pique') return send(chat, piqueNow(lg));
  if (c === '/noticia') { const now = Date.now(); if (lg.lastAsk && now - lg.lastAsk < 5 * 60000) return send(chat, '⏳ La redacción está escribiendo… espera unos minutos entre noticias.'); lg.lastAsk = now; send(chat, '🗞️ Marchando una noticia…'); return queueNews(chat, () => dailyNews(lg)); }
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
if (ST.groq) setAIKey(ST.groq);
await tg('setMyCommands', { commands: [{ command: 'vincular', description: 'Vincular este chat a una liga (código de 6 letras)' }, { command: 'proximos', description: 'Próximos partidos' }, { command: 'tabla', description: 'Clasificación' }, { command: 'pique', description: 'Que el bot pique al grupo' }, { command: 'noticias', description: 'Noticias de la liga' }, { command: 'noticia', description: 'Una noticia en imagen de la prensa de la liga' }, { command: 'desvincular', description: 'Dejar de recibir avisos aquí' }] });
for (const code in ST.leagues) watch(code);
setInterval(tick, 30000); setTimeout(tick, 5000);
poll();
console.log('Bot en marcha');
