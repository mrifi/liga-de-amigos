{
'use strict';
const E = window.ENG, DAY = E.DAY, LIVE = E.LIVE_MS;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const AI_NAMES = [['Atlético Tormenta', 'ATO'], ['Real Faro', 'RFA'], ['Deportivo Brisa', 'DBR'], ['Unión Volcán', 'UVO'], ['Racing Mareas', 'RMA'], ['CD Halcones', 'HAL'], ['Sporting Lince', 'SLI'], ['Olímpico Sierra', 'OSI'], ['Dinamo Arena', 'DAR'], ['Inter Cobalto', 'ICO'], ['Juventud Acero', 'JAC'], ['CF Tritón', 'TRI'], ['Real Olivo', 'ROL'], ['Atlético Norte', 'ANO'], ['Club Relámpago', 'REL'], ['Unión Coral', 'UCO'], ['Racing Niebla', 'RNI'], ['Deportivo Roble', 'DRO'], ['Sporting Cometa', 'SCO'], ['Real Ámbar', 'RAM']];
const COLORS = [['#d62828', '#ffffff'], ['#1d4ed8', '#ffffff'], ['#111827', '#facc15'], ['#16a34a', '#ffffff'], ['#7c3aed', '#ffffff'], ['#f97316', '#111827'], ['#0ea5e9', '#0b1d13'], ['#be123c', '#fde68a'], ['#ffffff', '#1d4ed8'], ['#ffffff', '#d62828'], ['#facc15', '#111827'], ['#0f766e', '#facc15'], ['#334155', '#f97316'], ['#9333ea', '#facc15'], ['#dc2626', '#1d4ed8'], ['#065f46', '#ffffff'], ['#1e3a8a', '#facc15'], ['#a16207', '#ffffff'], ['#e11d48', '#111827'], ['#475569', '#ffffff']];
const MENT = { def: 'Defensiva', equ: 'Equilibrada', ofe: 'Ofensiva' }, PRESS = { baj: 'Baja', med: 'Media', alt: 'Alta' }, EST = { pos: 'Posesión', mix: 'Mixto', dir: 'Directo', con: 'Contraataque' };
const FOCUS = { general: ['General', 'Todos por igual'], ataque: ['Ataque', 'Delanteros y extremos'], medio: ['Medio campo', 'Centrocampistas'], defensa: ['Defensa', 'Defensas y porteros'] };
const LN = { G: 'Porteros', D: 'Defensas', M: 'Centrocampistas', A: 'Delanteros' };
const SCOUT_COST = 1.5, SQ_MAX = 25, SQ_MIN = 16;

const S = { db: null, user: null, me: null, canWrite: true, owner: false, cfg: null, cfgOk: false, teams: {}, jor: {}, offers: {}, orders: {}, auctions: {}, cup: {}, cl: {}, cupRaw: {}, clRaw: {}, pres: {}, vivo: {}, muro: {}, names: {}, view: 'inicio', sub: 'xi', lsub: 'tabla', msub: 'subastas', mdSel: null, sel: null, lin: null, linDirty: false, modal: null, q: '', fpos: '', sort: 'ovr', otherTeam: null, busy: false, loadErr: '', toast: null, rp: null, sig: '' };
let D = null;

/* ---------- utilidades ---------- */
const moneyK = v => v < 1 ? Math.round(v * 1000).toLocaleString('es-ES') + ' mil €' : money(v);
const money = v => v !== 0 && Math.abs(v) < .095 ? (v < 0 ? '−' : '') + Math.round(Math.abs(v) * 1000).toLocaleString('es-ES') + ' mil €' : (Math.round(v * 10) / 10).toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' M€';
const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const kickAt = md => S.cfg.forcedAt?.[md] ?? (S.cfg.firstKick + (md - 1) * DAY);
const fmtKick = t => new Date(t).toLocaleString('es-ES', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
function cdText(t) { const d = t - Date.now(); if (d <= 0) return 'ya'; const tm = Math.ceil(d / 60000), h = Math.floor(tm / 60), m = tm % 60; return h >= 24 ? 'en ' + Math.floor(h / 24) + ' d ' + (h % 24) + ' h' : h ? 'en ' + h + ' h' + (m ? ' ' + m + ' min' : '') : 'en ' + m + ' min'; }
const surname = n => { const p = n.split(' '); if (p.length < 2) return n; return /^J[úu]nior$/.test(p[p.length - 1]) ? p[0] : p.slice(1).join(' '); };
const lineOf = pos => E.LINE[pos];
const teamByIdx = i => i < D.n ? D.teams[i] : (clSetup()?.eu[i - D.n] || D.teams[0]);
function toast(msg) { S.toast = msg; renderToast(); clearTimeout(toast.t); toast.t = setTimeout(() => { S.toast = null; renderToast(); }, 3200); }
function renderToast() { let el = $('#toast'); if (!S.toast) { el && el.remove(); return; } if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); } el.textContent = S.toast; }
const chains = {};
function write(path, fn) { const p = (chains[path] || Promise.resolve()).then(fn); chains[path] = p.catch(() => {}); return p.catch(e => { console.warn(e); toast(e?.code === 'invalid_argument' ? 'No tienes permiso para guardar. Pide acceso de Editor.' : 'No se pudo guardar (' + (e?.code || 'error') + ')'); throw e; }); }
const saveTeam = (id, patch) => write('equipos/' + id, () => S.db.doc('equipos/' + id).update(patch));
const mgrName = id => S.names[id] || 'Mánager';

function crest(t, sz = 40) {
  if (!t) return '';
  const [a, b] = t.colors || ['#888', '#fff'], cid = 'c' + t.id + sz;
  const txt = sz >= 34 ? `<text x="20" y="29" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-weight="800" font-size="11" fill="${b}" stroke="${a}" stroke-width="2.5" paint-order="stroke">${esc(t.short || '')}</text>` : '';
  return `<svg class="crest" width="${sz}" height="${Math.round(sz * 1.12)}" viewBox="0 0 40 45" aria-hidden="true"><defs><clipPath id="${cid}"><path d="M20 2L37 7V22C37 33 29 40 20 43C11 40 3 33 3 22V7Z"/></clipPath></defs><path d="M20 2L37 7V22C37 33 29 40 20 43C11 40 3 33 3 22V7Z" fill="${a}"/><g clip-path="url(#${cid})"><path d="M27 0H35L13 46H5Z" fill="${b}" opacity=".85"/></g><path d="M20 2L37 7V22C37 33 29 40 20 43C11 40 3 33 3 22V7Z" fill="none" stroke="${b === '#ffffff' && a === '#ffffff' ? '#ccc' : b}" stroke-width="2"/>${txt}</svg>`;
}
function shirt(c1, c2, txt, sz = 34) {
  const stroke = c1.toLowerCase() === '#ffffff' && c2.toLowerCase() === '#ffffff' ? '#aab' : c2;
  return `<svg class="shirt" width="${sz}" height="${sz}" viewBox="0 0 40 40" aria-hidden="true"><path d="M13 3.5 4 8.5l3.2 8.3 4-2V37h17.6V14.8l4 2L36 8.5l-9-5c-1 3-3.8 5-7 5s-6-2-7-5z" fill="${c1}" stroke="${stroke}" stroke-width="1.7" stroke-linejoin="round"/><path d="M13 3.5c1 3 3.8 5 7 5s6-2 7-5" fill="none" stroke="${stroke}" stroke-width="2.2"/>${txt !== '' ? `<text x="20" y="27.5" text-anchor="middle" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-weight="800" font-size="14" fill="${c2}" stroke="${c1}" stroke-width="2.4" paint-order="stroke">${txt}</text>` : ''}</svg>`;
}
function stars(o) {
  const v = Math.max(.5, Math.min(5, Math.round((o - 52) / 8 * 2) / 2)); let h = '';
  for (let i = 1; i <= 5; i++) h += `<i class="st ${v >= i ? 'f' : v >= i - .5 ? 'h' : ''}"></i>`;
  return `<span class="stars" role="img" aria-label="${String(v).replace('.', ',')} estrellas">${h}</span>`;
}
const SVGI = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const DUO = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const NAV = {
  inicio: DUO('<path d="M3.5 20.5h17"/><path d="M5 20.5 6.6 12h10.8l1.6 8.5z" fill="currentColor" fill-opacity=".22"/><path d="M6.6 12 8 8.5h8l1.4 3.5"/><path d="M12 20.5V16"/><path d="M19.5 9.5V3.5M17.6 3.5h3.8"/><path d="M4.5 9.5V3.5M2.6 3.5h3.8"/>'),
  equipo: DUO('<path d="M8.2 3.5 3.5 6.2l1.9 4.4 2.1-.9V20.5h9V9.7l2.1.9 1.9-4.4-4.7-2.7c-.6 1.6-2 2.6-3.8 2.6s-3.2-1-3.8-2.6z" fill="currentColor" fill-opacity=".22"/><path d="M10 13h4"/>'),
  liga: DUO('<path d="M7 3.5h10v4.6a5 5 0 0 1-10 0z" fill="currentColor" fill-opacity=".22"/><path d="M7 5.5H4.2v1.2A3.3 3.3 0 0 0 7.4 10M17 5.5h2.8v1.2a3.3 3.3 0 0 1-3.2 3.3"/><path d="M12 13.2v3.3"/><path d="M8.5 20.5h7l-.8-4h-5.4z" fill="currentColor" fill-opacity=".22"/>'),
  mercado: DUO('<path d="M4 8.5h13.5"/><path d="m14 5 3.5 3.5L14 12"/><path d="M20 15.5H6.5"/><path d="m10 12-3.5 3.5L10 19"/>'),
  club: DUO('<path d="M12 3 4.5 5.8v6c0 4.4 3.1 7.6 7.5 9.2 4.4-1.6 7.5-4.8 7.5-9.2v-6z" fill="currentColor" fill-opacity=".22"/><path d="M12 3v18M4.6 11h14.8"/>')
};
/* iconos propios: gema de tokens y moneda de euro, dibujados a mano */
const IC = {
  gem: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5h10.8L21.5 9 12 21 2.5 9z" fill="#1aa85a"/><path d="M2.5 9h19L12 21z" fill="#0e7c41"/><path d="M6.6 3.5 8.7 9h6.6l2.1-5.5z" fill="#6ef0a2"/><path d="M8.7 9 12 21l3.3-12z" fill="#22c46b"/><path d="M6.6 3.5 2.5 9h6.2zM17.4 3.5 21.5 9h-6.2z" fill="#3ddc84"/><path d="M6.6 3.5h10.8L21.5 9 12 21 2.5 9z" fill="none" stroke="#052e17" stroke-width="1.1" stroke-linejoin="round"/><path d="M9 5.2h3" stroke="#e6fff0" stroke-width="1.3" stroke-linecap="round"/></svg>',
  coin: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="13.6" rx="9" ry="8.4" fill="#a85f00"/><ellipse cx="12" cy="12" rx="9" ry="8.4" fill="#ffc23d"/><ellipse cx="12" cy="12" rx="6.6" ry="6.1" fill="#f5a20c"/><path d="M14.6 8.9a3.6 3.6 0 1 0 0 6.2M8.3 11h4.6M8.3 13.1h4.6" fill="none" stroke="#fff3c4" stroke-width="1.6" stroke-linecap="round"/><path d="M12 3.6a9 8.4 0 0 1 8.2 5" fill="none" stroke="#fff3c4" stroke-width="1" stroke-linecap="round" opacity=".7"/></svg>',
  play: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor"/></svg>',
  x: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  med: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#ec4d55"/><path d="M12 7v10M7 12h10" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
  build: DUO('<path d="M3.5 20.5h17M6 20.5V8l6-4.5L18 8v12.5"/><path d="M9.5 20.5v-6h5v6" fill="currentColor" fill-opacity=".22"/>'),
  stadium: DUO('<ellipse cx="12" cy="13" rx="9" ry="5.5" fill="currentColor" fill-opacity=".22"/><ellipse cx="12" cy="13" rx="5" ry="2.6"/><path d="M3 13v3.5c0 3 4 5 9 5s9-2 9-5V13"/>')
};
function bgFor() { if (!D) return 'aereo'; return { inicio: 'stadium', equipo: S.sub === 'train' ? 'entreno' : 'vestuario', liga: 'aereo', mercado: 'despacho', club: 'despacho' }[S.view] || 'stadium'; }
const ICONS = {
  gol: '<svg class="ico" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.5" fill="#fff" stroke="#111" stroke-width="1.4"/><path d="M10 5.5l3.3 2.4-1.3 3.9H8l-1.3-3.9z" fill="#111"/></svg>',
  ama: '<svg class="ico" viewBox="0 0 20 20"><rect x="5" y="2.5" width="10" height="15" rx="1.5" fill="#ffd400" stroke="#0004"/></svg>',
  roja: '<svg class="ico" viewBox="0 0 20 20"><rect x="5" y="2.5" width="10" height="15" rx="1.5" fill="#e0393c" stroke="#0004"/></svg>',
  les: '<svg class="ico" viewBox="0 0 20 20"><rect x="2" y="2" width="16" height="16" rx="4" fill="#e0393c"/><path d="M10 5v10M5 10h10" stroke="#fff" stroke-width="2.6"/></svg>',
  cam: '<svg class="ico" viewBox="0 0 20 20"><path d="M4 7h10l-3-3M16 13H6l3 3" fill="none" stroke="#1f9d4e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

/* ---------- estado derivado ---------- */
const RES = {};
function ordersFor(doc, k) {
  const p = doc.pre[k], out = [];
  [p.h, p.a].forEach((ti, s) => { const o = S.orders['s' + doc.season + '-m' + doc.md + '-t' + ti]; if (o && o.list) o.list.forEach(x => out.push({ ...x, s })); });
  return out;
}
/* ---------- partido en directo: el resultado se sortea por tramos de 3 minutos justo antes de jugarse ---------- */
const MAXSEG = Math.floor(92 / E.SEG), PRES_TTL = 40000;
const curMin = (doc, now) => Math.max(1, Math.min(94, Math.floor((now - doc.at) / LIVE * 94) + 1));
// se sortean dos tramos por delante: la animación necesita unos segundos para preparar cada jugada
const segNeed = (doc, now) => Math.min(MAXSEG, Math.floor((curMin(doc, now) - 1 + 2 * E.SEG) / E.SEG));
// las semillas en directo van en un documento pequeño aparte (vivo/<colección>_<id>) para no reescribir la jornada entera
const withVivo = (col, id, d) => { const v = S.vivo[col + '_' + id]; return v && d && d.lv ? { ...d, sl: { ...(d.sl || {}), ...(v.sl || {}) }, pr: { ...(d.pr || {}), ...(v.pr || {}) } } : d; };
const newSalt = () => { try { return [...crypto.getRandomValues(new Uint32Array(2))].map(x => x.toString(36)).join(''); } catch (e) { return Math.random().toString(36).slice(2) + Date.now().toString(36); } };
const presentTeams = now => Object.entries(S.pres).filter(([, x]) => x && now - x.t < PRES_TTL).map(([k]) => +k.slice(1));
// semillas que faltan hasta el tramo `upto`; la presencia solo cuenta para tramos que aún no se han jugado
function moreSalts(doc, upto, now) {
  const sl = { ...(doc.sl || {}) }, pr = { ...(doc.pr || {}) }, cm = curMin(doc, now), here = presentTeams(now); let ch = false;
  for (let i = 0; i <= upto; i++) if (sl[i] == null) { sl[i] = newSalt(); pr[i] = i * E.SEG + 1 >= cm ? here : []; ch = true; }
  return ch ? { sl, pr } : null;
}
function lvOf(doc, now) {
  const sl = { ...(doc.sl || {}) };
  // si nadie estaba conectado durante el partido, los tramos sin sortear se cierran con una semilla fija al acabar
  if (now >= doc.at + LIVE) for (let i = 0; i <= MAXSEG; i++) if (sl[i] == null) sl[i] = 'z' + i;
  return { sl, pr: doc.pr || {} };
}
function resolveDoc(doc, col) {
  if (!doc.pre || doc.fin) return doc;
  col = col || 'jor';
  const lv = doc.lv ? lvOf(doc, Date.now()) : null, lk = lv ? Object.keys(lv.sl).length + ':' + E.hash(JSON.stringify(lv.sl)) : '';
  let changed = false;
  const m = doc.pre.map((p, k) => {
    const ords = col === 'jor' ? ordersFor(doc, k) : []; if (!ords.length && !lv) return doc.m[k];
    const key = col + doc.season + '-' + (doc.md ?? doc.round) + '-' + k + ':' + lk + JSON.stringify(ords);
    if (!RES[key]) RES[key] = E.resultFromPre(p, ords, lv);
    changed = true; return RES[key];
  });
  if (!changed) return doc;
  const out = { ...doc, m };
  if (lv && col !== 'jor') out.pens = m.map((x, k) => x.part == null && x.hg === x.ag ? E.penaltyShootout(doc.pre[k].seed + ':' + lv.sl[MAXSEG]) : null);
  return out;
}
const liveDocs = () => [...Object.entries(S.jor).map(([id, d]) => ['jornadas', id, withVivo('jornadas', id, d)]), ...Object.entries(S.cupRaw).map(([id, d]) => ['copa', id, withVivo('copa', id, d)]), ...Object.entries(S.clRaw).map(([id, d]) => ['champions', id, withVivo('champions', id, d)])];
let liveBusy = false;
async function liveTick() {
  if (liveBusy || !S.db || !S.canWrite) return;
  const now = Date.now(), todo = liveDocs().filter(([, , d]) => d.lv && !d.fin && now >= d.at && now < d.at + LIVE - 4000 && moreSalts(d, segNeed(d, now), now));
  if (!todo.length) return;
  liveBusy = true;
  try {
    for (const [col, id, d] of todo) {
      const ref = S.db.doc('vivo/' + col + '_' + id), l = await ref.acquire({ holder: S.me || 'anon', ttlMs: 6000 }); if (!l.acquired) continue;
      const v = (await ref.get()).data() || {}, cur = { ...d, sl: { ...(d.sl || {}), ...(v.sl || {}) }, pr: { ...(d.pr || {}), ...(v.pr || {}) } };
      const t = Date.now(), add = moreSalts(cur, segNeed(cur, t), t); if (add) { await ref.set(add); S.vivo[col + '_' + id] = add; }
    }
  } catch (e) { console.warn('live', e); } finally { liveBusy = false; }
}
setInterval(liveTick, 2500);
// presencia: si estás viendo en directo un partido de tu equipo, tu equipo juega con +8% de posesión (como el míster en el banquillo)
let presT = 0;
function myLiveMatch(now) {
  if (!D || D.myIdx < 0) return null;
  for (const [col, id, d] of liveDocs()) { if (!d.pre || now < d.at - 120000 || now >= d.at + LIVE) continue; const k = d.pre.findIndex(p => p.h === D.myIdx || p.a === D.myIdx); if (k >= 0) return { col, id, d, k }; }
  if (!D.done && D.nextMd <= D.total) { const at = kickAt(D.nextMd); if (now >= at - 120000 && now < at + LIVE) return { col: 'jornadas', id: null, d: { at }, k: -1 }; }
  return null;
}
function presenceOn() { return !!(VW && VW.key && VW.liveMine) || (document.visibilityState === 'visible' && !!myLiveMatch(Date.now()) && S.view === 'inicio'); }
setInterval(() => {
  if (!S.db || !S.canWrite || !D || D.myIdx < 0 || !presenceOn()) return;
  const now = Date.now(); if (now - presT < 15000) return; presT = now;
  S.db.doc('presencia/t' + D.myIdx).set({ t: now, by: S.me || '' }).catch(() => {});
}, 3000);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') presT = 0; });
function derive() {
  const c = S.cfg;
  if (!c || !c.started) { D = null; return; }
  const n = c.n, teams = [...Array(n)].map((_, i) => S.teams['t' + i]);
  if (teams.some(t => !t)) { D = null; return; }
  const Sx = c.season, now = Date.now(), total = 2 * (n - 1);
  S.cup = Object.fromEntries(Object.entries(S.cupRaw).map(([k, d]) => [k, resolveDoc(withVivo('copa', k, d), 'cup')]));
  S.cl = Object.fromEntries(Object.entries(S.clRaw).map(([k, d]) => [k, resolveDoc(withVivo('champions', k, d), 'cl')]));
  const all = Object.entries(S.jor).filter(([, d]) => d && d.m).map(([k, d]) => resolveDoc(withVivo('jornadas', k, d), 'jor')).sort((a, b) => a.season - b.season || a.md - b.md);
  const cur = all.filter(d => d.season === Sx);
  const revealed = cur.filter(d => now >= d.at + LIVE), live = cur.filter(d => now >= d.at && now < d.at + LIVE);
  const played = new Set(cur.map(d => d.md));
  let nextMd = 1; while (played.has(nextMd)) nextMd++;
  const owned = new Set(); teams.forEach(t => t.squad.forEach(id => owned.add(id)));
  const myIdx = S.me ? teams.findIndex(t => t.owner === S.me) : -1;
  D = { n, teams, Sx, total, all, cur, revealed, live, nextMd, state: E.deriveState(cur, E.adjOf(teams)), stats: E.deriveState(revealed), table: E.table(n, revealed), fx: E.fixtures(n, c.seed + ':' + Sx), owned, myIdx, my: myIdx >= 0 ? teams[myIdx] : null, done: revealed.length >= total };
  const cs = cupState(), cupP = {}; if (cs && cs.champ != null) { cupP[cs.champ] = 12; if (cs.finalist != null) cupP[cs.finalist] = 5; }
  const done = all.filter(d => now >= d.at + LIVE);
  D.fin = i => { const f = E.finances(i, teams[i], done, n), c = (cupP[i] || 0) + clMoney(i) + objPrizes(i).c; return c ? { ...f, prizes: E.r1(f.prizes + c), cash: E.r1(f.cash + c) } : f; };
  D.tok = i => E.tokens(i, teams[i], done, n) + clTokens(i) + objPrizes(i).t;
  D.fans = i => E.fansOf(i, teams[i], done);
  D.ctx = t => E.makeCtx(t, Sx, D.state, Math.min(D.nextMd, total));
}
const ovrOf = (id, t) => E.ovr(id, D.Sx, t?.xp?.[id] || 0);
const ownerOf = id => D.teams.find(t => t.squad.includes(id)) || null;
function status(id) { const st = D.state[id]; if (st && st.out >= D.nextMd) return { why: st.why, n: st.out - D.nextMd + 1 }; return null; }
const cond = id => Math.round(D.state[id]?.cond ?? 100);
function liveMinute(doc) { const now = Date.now(); if (S.rp && S.rp.key === doc.season + '-' + doc.md) { const el = now - S.rp.t0; if (el < 21000) return Math.min(94, Math.floor(el / 20000 * 94)); S.rp = null; } if (now >= doc.at + LIVE) return 99; return Math.max(0, Math.min(94, Math.floor((now - doc.at) / LIVE * 94))); }
function scoreAt(m, min) { let h = 0, a = 0; m.ev.forEach(e => { if (e.t === 'gol' && e.m <= min) e.s ? a++ : h++; }); return [h, a]; }

/* ---------- simulación perezosa: el primero que abre tras el pitido juega la jornada ---------- */
const needFin = now => liveDocs().find(([, , d]) => d.pre && !d.fin && now > d.at + LIVE + 3000);
async function finalize() {
  const now = Date.now(), hit = needFin(now);
  if (!hit) return false;
  const [col, key] = hit, ref = S.db.doc(col + '/' + key), cc = { jornadas: 'jor', copa: 'cup', champions: 'cl' }[col];
  const l = await ref.acquire({ holder: S.me || 'anon' + Math.random(), ttlMs: 15000 }); if (!l.acquired) return true;
  const fresh = (await ref.get()).data(); if (!fresh || fresh.fin) return true;
  const vv = (await S.db.doc('vivo/' + col + '_' + key).get()).data(); if (vv) S.vivo[col + '_' + key] = vv;
  const res = resolveDoc(withVivo(col, key, { ...fresh }), cc), upd = { m: res.m, fin: true }; if (cc !== 'jor' && res.pens) upd.pens = res.pens;
  await ref.update(upd); const store = col === 'jornadas' ? S.jor : col === 'copa' ? S.cupRaw : S.clRaw; store[key] = { ...fresh, ...upd };
  return true;
}
async function tick() {
  if (S.busy || !S.db || !S.canWrite || !D) return;
  if (needFin(Date.now())) { S.busy = true; try { await finalize(); } catch (e) { console.warn('fin', e); } finally { S.busy = false; } setTimeout(tick, 300); return; }
  if (!S.busy) { S.busy = true; let did = false; try { did = (await settleAuctions()) || (await cupTick()) || (await clTick()) || (await seasonRoll()); ensureDailyAuctions().catch(() => {}); ensureAiOffers().catch(() => {}); } catch (e) { console.warn('extra', e); } finally { S.busy = false; } if (did) { setTimeout(tick, 300); return; } }
  if (D.done) return;
  const md = D.nextMd; if (md > D.total || kickAt(md) > Date.now()) return;
  S.busy = true;
  try {
    const key = 's' + D.Sx + '-m' + md, ref = S.db.doc('jornadas/' + key);
    const l = await ref.acquire({ holder: S.me || 'anon' + Math.random(), ttlMs: 20000 });
    if (!l.acquired) return;
    const snap = await ref.get();
    if (snap.exists && snap.data().m) return;
    const prev = D.cur.filter(d => d.md < md);
    const at = kickAt(md), t = Date.now(), up = t >= at + LIVE ? MAXSEG : segNeed({ at }, t);
    const doc = E.simulateMatchday(S.cfg, D.teams, prev, D.Sx, md, at, D.all, moreSalts({ at }, up, t));
    await ref.set(doc);
    S.jor[key] = doc; derive(); render();
  } catch (e) { console.warn('tick', e); if (e?.code === 'invalid_argument') S.canWrite = false; }
  finally { S.busy = false; }
  setTimeout(tick, 400);
}

/* ---------- copa ---------- */
/* ---------- calendario: liga cada día a la misma hora; copa (días pares) y Champions (impares) a otra hora ---------- */
const CUP_OFF = () => { if (S.cfg.cupOff != null) return S.cfg.cupOff; const h = parseInt(S.cfg.hour || '21', 10); return (h >= 15 ? -7 : 6) * 3600000; };
const dayAt = (d, off) => S.cfg.firstKick + (d - 1) * DAY + (off || 0);
const cupDay = (r, R) => { const T = D.total, step = 4 * R <= T - 3 ? 4 : 2; return Math.min(T, 4 + step * r); };
const cupAt = r => dayAt(cupDay(r, E.cupBracket(D.n, S.cfg.seed + ':' + D.Sx).rounds), CUP_OFF());
const restEnd = () => dayAt(D.total + 2);
function cupState() {
  if (!D) return null;
  const b = E.cupBracket(D.n, S.cfg.seed + ':' + D.Sx), now = Date.now(), rounds = [];
  let entrants = null;
  for (let r = 0; r < b.rounds; r++) {
    const pairs = r === 0 ? b.first : []; if (r > 0) { for (let i = 0; i < entrants.length; i += 2) pairs.push([entrants[i], entrants[i + 1]]); }
    const doc = S.cup['s' + D.Sx + '-r' + r] || null, at = doc ? doc.at : cupAt(r);
    const revealed = doc && now >= doc.at + LIVE, ready = pairs.every(p => p[0] !== undefined && p[1] !== undefined);
    const winners = pairs.map(([h, a]) => {
      if (h == null && a == null) return null; if (h == null) return a; if (a == null) return h;
      if (!doc) return undefined; const k = doc.pairs.findIndex(p => p[0] === h && p[1] === a); return k >= 0 && revealed ? E.cupWinner(doc, k) : undefined;
    });
    rounds.push({ r, name: E.cupRoundName(r, b.rounds), pairs, doc, at, revealed, ready, winners });
    entrants = winners;
  }
  const fin = rounds[rounds.length - 1];
  const champ = fin.revealed && fin.winners[0] != null ? fin.winners[0] : null, finalist = champ != null ? fin.pairs[0].find(t => t !== champ) : null;
  return { rounds, champ, finalist };
}
async function cupTick() {
  const cs = cupState(); if (!cs) return false;
  for (const R of cs.rounds) {
    if (R.doc) continue;
    if (!R.ready || R.at > Date.now()) return false;
    const pairs = R.pairs.filter(p => p[0] != null && p[1] != null && p[0] !== undefined && p[1] !== undefined);
    const key = 's' + D.Sx + '-r' + R.r, ref = S.db.doc('copa/' + key);
    const l = await ref.acquire({ holder: S.me || 'x' + Math.random(), ttlMs: 15000 }); if (!l.acquired) return true;
    if ((await ref.get()).data()?.m) return true;
    const t = Date.now(), lv = moreSalts({ at: R.at }, t >= R.at + LIVE ? MAXSEG : segNeed({ at: R.at }, t), t);
    const doc = { ...E.simulateCupRound(S.cfg, D.teams, pairs, D.Sx, R.r, R.at, D.state, lv), pairs };
    await ref.set(doc); S.cupRaw[key] = doc; S.cup[key] = resolveDoc(doc, 'cup'); return true;
  }
  return false;
}
function cupView() {
  const cs = cupState(); if (!cs) return '';
  const now = Date.now();
  return `<section class="panel"><div class="comph">${compLogo('copa', 56)}<div><h3>Copa</h3><small class="mute">Temporada ${D.Sx}</small></div></div><p class="small mute">Eliminatoria a partido único entre todos los equipos. Si hay empate, penaltis. Campeón: ${money(12)} y finalista: ${money(5)}. No cansa ni lesiona.</p>
  ${cs.champ != null ? `<div class="champ" style="margin:12px 0">${prizeImg('copa', 110)}<div>${crest(teamByIdx(cs.champ), 48)}<h2>${esc(teamByIdx(cs.champ).name)}, campeón de copa</h2></div></div>` : ''}
  ${cs.rounds.map(R => `<div class="grp">${R.name} · ${fmtKick(R.at)}</div><div class="rows">${R.pairs.map(([h, a]) => {
    if (h === undefined || a === undefined) return `<div class="mrow" style="cursor:default"><span class="h"><span>Por decidir</span></span><span class="sc">–</span><span class="a"><span>Por decidir</span></span></div>`;
    if (h == null && a == null) return '';
    if (h == null || a == null) { const t = teamByIdx(h ?? a); if (!t) return ''; return `<div class="mrow" style="cursor:default"><span class="h"><span>${esc(t.name)}</span>${crest(t, 24)}</span><span class="sc"><small>pasa</small></span><span class="a"><span class="mute small">Pase directo</span></span></div>`; }
    const H = teamByIdx(h), A = teamByIdx(a), k = R.doc ? R.doc.pairs.findIndex(p => p[0] === h && p[1] === a) : -1;
    let sc = new Date(R.at).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), btn = false;
    if (R.doc && k >= 0 && now >= R.doc.at) { btn = true; const m = R.doc.m[k]; if (now < R.doc.at + LIVE) { const [x, y] = scoreAt(m, liveMinute(R.doc)); sc = `${x}-${y}<small>vivo</small>`; } else { const p = R.doc.pens[k]; sc = `${m.hg}-${m.ag}${p ? `<small>pen ${p[0]}-${p[1]}</small>` : ''}`; } }
    const inner = `<span class="h"><span>${esc(H.name)}</span>${crest(H, 24)}</span><span class="sc">${sc}</span><span class="a">${crest(A, 24)}<span>${esc(A.name)}</span></span>`;
    return btn ? `<button class="mrow" data-act="cupmatch" data-arg="${R.r}-${k}">${inner}</button>` : `<div class="mrow" style="cursor:default">${inner}</div>`;
  }).join('')}</div>`).join('')}</section>`;
}

/* ---------- subastas ---------- */
function auctionEnd(d) { const e = new Date(d); e.setHours(23, 0, 0, 0); if (e.getTime() - Date.now() < 3600000) e.setDate(e.getDate() + 1); return e.getTime(); }
async function ensureDailyAuctions() {
  if (!D || !S.canWrite || ensureDailyAuctions.done === today()) return;
  ensureDailyAuctions.done = today();
  const id0 = 'auto-' + today() + '-0'; if (S.auctions[id0]) return;
  const ref = S.db.doc('subastas/' + id0); const l = await ref.acquire({ holder: S.me || 'x', ttlMs: 10000 }); if (!l.acquired) return;
  if ((await ref.get()).data()?.pid) return;
  const r = E.rng('sub' + today() + S.cfg.seed), free = E.freeAgents(D.owned).sort((a, b) => ovrOf(b) - ovrOf(a)).slice(0, 30).sort(() => r() - .5).slice(0, 3), ends = auctionEnd(Date.now());
  for (let i = 0; i < free.length; i++) { const pid = free[i]; await S.db.doc('subastas/auto-' + today() + '-' + i).set({ id: 'auto-' + today() + '-' + i, pid, seller: null, min: E.r1(E.pval(pid, D.Sx, 0) * .7), ends, bids: [], status: 'open', t: Date.now() }); }
}
const topBid = a => (a.bids || []).reduce((b, x) => (!b || x.amt > b.amt ? x : b), null);
const nextBid = a => { const tb = topBid(a); return tb ? E.r1(tb.amt + Math.max(.5, tb.amt * .05)) : a.min; };
async function bid(id) {
  const a0 = S.auctions[id], amt = nextBid(a0), t = D.my;
  if (D.tok(D.myIdx) < 1) return toast('Pujar cuesta 1 token');
  if (!canAfford(amt)) return toast('No te llega el dinero');
  if (t.squad.length >= SQ_MAX) return toast('Tu plantilla está llena');
  const ref = S.db.doc('subastas/' + id); const l = await ref.acquire({ holder: S.me, ttlMs: 8000 }); if (!l.acquired) return toast('Otra puja entrando, prueba otra vez');
  const a = (await ref.get()).data(); if (!a || a.status !== 'open' || Date.now() > a.ends) return toast('La subasta ya ha terminado');
  const amt2 = nextBid(a); if (!canAfford(amt2)) return toast('No te llega el dinero');
  const ends = a.ends - Date.now() < 60000 ? Date.now() + 60000 : a.ends;
  await write('subastas/' + id, () => ref.set({ ...a, bids: [...(a.bids || []), { team: t.id, amt: amt2, t: Date.now() }], ends }));
  await saveTeam(t.id, { tok: tokAdd(t, -1, 'Puja: ' + E.player(a.pid).name) });
  toast('Pujas ' + money(amt2) + ' por ' + E.player(a.pid).name);
}
/* ---------- temporada: objetivos de la directiva, vitrina, muro y ofertas de la IA ---------- */
const OBJ_PRIZE = { cash: 8, tok: 5 };
const seasonDocs = Sx => D.all.filter(d => d.season === Sx);
const seasonsPlayed = () => [...new Set(D.all.map(d => d.season))].sort((a, b) => a - b);
// nivel de cada equipo al empezar la temporada (alineaciones de la primera jornada): fija el objetivo
function expectedRanks(Sx) {
  const key = 'er' + Sx; if (D[key]) return D[key];
  const d1 = seasonDocs(Sx).find(d => d.md === 1), str = new Array(D.n).fill(0);
  if (d1 && d1.pre) d1.pre.forEach(p => p.side.forEach((sd, s) => { const ids = sd.xi.filter(Boolean); str[[p.h, p.a][s]] = ids.reduce((a, id) => a + (sd.p[id] ? sd.p[id][0] : 75), 0) / Math.max(1, ids.length); }));
  else D.teams.forEach((t, i) => { str[i] = teamAvg(t); });
  const rank = []; str.map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v).forEach((o, k) => { rank[o.i] = k + 1; });
  return (D[key] = rank);
}
function objective(i, Sx) {
  const exp = expectedRanks(Sx)[i], target = Math.min(D.n, exp + (exp <= 2 ? 1 : 2));
  const docs = seasonDocs(Sx).filter(d => Date.now() >= d.at + LIVE), done = docs.length >= D.total;
  const pos = docs.length ? E.table(D.n, docs).findIndex(r => r.t === i) + 1 : null;
  return { exp, target, txt: target === 1 ? 'Ganar la liga' : `Terminar entre los ${target} primeros`, pos, done, met: done && pos <= target, onTrack: pos != null && pos <= target };
}
function objPrizes(i) {
  if (!D.teams[i] || !D.teams[i].owner) return { c: 0, t: 0 };
  const key = 'op' + i; if (D[key]) return D[key];
  let c = 0, t = 0; for (const Sx of seasonsPlayed()) if (objective(i, Sx).met) { c += OBJ_PRIZE.cash; t += OBJ_PRIZE.tok; }
  return (D[key] = { c, t });
}
/* vitrina: títulos, premios individuales, medallas de la directiva y derbis ganados */
const TROPHY = { liga: ['Liga', 'liga'], copa: ['Copa', 'copa'], champions: ['Champions', 'champions'], bota: ['Bota de oro', 'bota'], balon: ['Mejor jugador', 'balon'], medalla: ['Objetivo cumplido', 'medalla'], derbi: ['Derbis ganados', 'derbi'] };
function trophies(i) {
  const key = 'tr' + i; if (D[key]) return D[key];
  const out = [], now = Date.now();
  for (const Sx of seasonsPlayed()) {
    const docs = seasonDocs(Sx).filter(d => now >= d.at + LIVE), full = docs.length >= D.total;
    if (full && E.table(D.n, docs)[0].t === i) out.push({ k: 'liga', Sx });
    const R = E.cupBracket(D.n, S.cfg.seed + ':' + Sx).rounds, cf = S.cup['s' + Sx + '-r' + (R - 1)];
    if (cf && now >= cf.at + LIVE && E.cupWinner(cf, 0) === i) out.push({ k: 'copa', Sx });
    const clf = S.cl['s' + Sx + '-r3']; if (clf && now >= clf.at + LIVE && E.cupWinner(clf, 0) === i) out.push({ k: 'champions', Sx });
    if (full) {
      const g = {}, apps = {}, rs = {}, teamOf = {};
      for (const d of docs) for (const m of d.m) {
        for (const e of m.ev) if (e.t === 'gol') { g[e.p] = (g[e.p] || 0) + 1; teamOf[e.p] = e.s ? m.a : m.h; }
        for (const s of [0, 1]) for (const pid in m.min[s]) if (m.min[s][pid] > 0) { apps[pid] = (apps[pid] || 0) + 1; rs[pid] = (rs[pid] || 0) + (m.rat[pid] || 6); if (teamOf[pid] == null) teamOf[pid] = s ? m.a : m.h; }
      }
      const top = Object.entries(g).sort((a, b) => b[1] - a[1])[0];
      if (top && teamOf[top[0]] === i) out.push({ k: 'bota', Sx, p: top[0], n: top[1] });
      const best = Object.keys(apps).filter(p => apps[p] >= D.total / 2).map(p => [p, rs[p] / apps[p]]).sort((a, b) => b[1] - a[1])[0];
      if (best && teamOf[best[0]] === i) out.push({ k: 'balon', Sx, p: best[0], n: best[1] });
    }
    if (D.teams[i].owner && objective(i, Sx).met) out.push({ k: 'medalla', Sx });
    for (const d of docs) for (const m of d.m) if (m.derby && ((m.h === i && m.hg > m.ag) || (m.a === i && m.ag > m.hg))) out.push({ k: 'derbi', Sx });
  }
  return (D[key] = out);
}
const prizeImg = (k, sz) => `<img class="prz" src="img/premios/${TROPHY[k][1]}.webp" alt="" width="${sz}" height="${sz}" loading="lazy">`;
const compLogo = (k, sz) => `<img class="clogo" src="img/comp/${k}.webp" alt="" width="${sz}" height="${sz}">`;
function vitrinaHTML(i) {
  const tr = trophies(i), by = {}; tr.forEach(x => { (by[x.k] = by[x.k] || []).push(x); });
  return `<section class="panel"><h3>Vitrina</h3><div class="vit">${Object.keys(TROPHY).map(k => { const l = by[k] || []; const extra = l.length && (k === 'bota' || k === 'balon') ? l.map(x => `T${x.Sx}: ${esc(surname(E.player(x.p).name))}`).join(' · ') : l.length ? [...new Set(l.map(x => 'T' + x.Sx))].join(' · ') : 'Todavía no'; return `<div class="vt ${l.length ? 'won' : ''}">${prizeImg(k, 96)}<b>${l.length > 1 ? '×' + l.length + ' ' : ''}${TROPHY[k][0]}</b><small>${extra}</small></div>`; }).join('')}</div></section>`;
}
function objectiveHTML() {
  if (!D.my) return '';
  const o = objective(D.myIdx, D.Sx);
  const st = o.done ? (o.met ? `<b class="pos-amt">¡Cumplido!</b> +${money(OBJ_PRIZE.cash)} y +${OBJ_PRIZE.tok} tokens` : '<b class="neg-amt">No cumplido</b>. La directiva espera más la próxima temporada.') : o.pos ? `Vas ${o.pos}º · ${o.onTrack ? '<b class="pos-amt">dentro del objetivo</b>' : '<b class="neg-amt">fuera del objetivo</b>'}` : 'Empieza la temporada.';
  return `<section class="panel obj">${prizeImg('medalla', 64)}<div><h3>Objetivo de la directiva</h3><p class="objt">${o.txt}</p><p class="small mute">${st}${o.done ? '' : ` · Premio: ${money(OBJ_PRIZE.cash)} y ${OBJ_PRIZE.tok} ${IC.gem}`}</p></div></section>`;
}
/* muro de la liga: mensajes cortos entre los amigos */
function muroHTML(limit) {
  const msgs = Object.values(S.muro || {}).sort((a, b) => b.t - a.t).slice(0, limit);
  const ago = t => { const m = Math.round((Date.now() - t) / 60000); return m < 1 ? 'ahora' : m < 60 ? 'hace ' + m + ' min' : m < 1440 ? 'hace ' + Math.round(m / 60) + ' h' : 'hace ' + Math.round(m / 1440) + ' d'; };
  return `<section class="panel"><div class="ph"><h3>Muro de la liga</h3>${limit < 50 ? '<button class="btn sm ghost" data-act="go" data-arg="liga:muro">Ver todo</button>' : ''}</div>
  ${S.canWrite && D.my ? `<div class="muro-f"><input type="text" id="muro-txt" maxlength="180" placeholder="Pica a tus amigos…" aria-label="Mensaje"><button class="btn sm y" data-act="muro">Enviar</button></div>` : ''}
  <ul class="muro">${msgs.map(x => { const t = S.teams[x.team]; return `<li>${t ? crest(t, 30) : ''}<div><b>${esc(t ? t.name : 'Míster')}</b> <small class="mute">${ago(x.t)}</small><p>${esc(x.txt)}</p></div></li>`; }).join('') || '<li class="mute small">Nadie ha escrito todavía. Rompe el hielo.</li>'}</ul></section>`;
}
/* ofertas de la IA por tus estrellas: como mucho una al día por equipo, caduca en 24 h */
async function ensureAiOffers() {
  if (!D || !S.canWrite) return;
  const day = today(); S.aiOffDone = S.aiOffDone || {};
  for (const t of D.teams) {
    if (!t.owner) continue;
    const id = 'ai-' + day + '-' + t.id; if (S.offers[id] || S.aiOffDone[id]) continue;
    S.aiOffDone[id] = 1;
    const r = E.rng(id); if (r() > .55) continue;
    // un club de la IA con dinero va a por el mejor jugador tuyo que pueda pagar (entre tus 8 mejores)
    const buyers = D.teams.filter(x => !x.owner && x.squad.length < SQ_MAX).map(x => ({ x, cash: D.fin(x.idx).cash })).sort((a, b) => b.cash - a.cash).slice(0, 3); if (!buyers.length) continue;
    const { x: buyer, cash } = buyers[Math.floor(r() * buyers.length)], mult = 1.15 + r() * .35;
    const cand = t.squad.map(pid => ({ pid, o: ovrOf(pid, t), price: E.r1(E.pval(pid, D.Sx, t.xp?.[pid] || 0) * mult) })).sort((a, b) => b.o - a.o).slice(0, 8).filter(c => c.price <= cash * .8);
    if (!cand.length) continue;
    const { pid, price } = cand[0];
    await S.db.doc('ofertas/' + id).set({ id, from: buyer.id, to: t.id, pid, price, status: 'pend', t: Date.now(), ai: true, exp: Date.now() + DAY });
  }
}

/* ---------- Champions: los mejores de la liga contra clubes europeos de la IA ---------- */
const CL_ON = () => !!(D && D.total >= 9);
const clAt = r => dayAt(3 + 2 * r, CUP_OFF());
const CL_PRIZE = { win: 1, final: 8, champ: 20 }, CL_TOK = { win: 1, champ: 10 };
const teamAvg = t => t.squad.reduce((a, id) => a + ovrOf(id, t), 0) / Math.max(1, t.squad.length);
function clSetup() {
  if (!CL_ON()) return null;
  if (D._cls) return D._cls;
  const r0 = S.cl['s' + D.Sx + '-r0'];
  let qual = r0 && r0.qual, lvl = r0 && r0.lvl, groups = r0 && r0.groups;
  const q = Math.min(4, Math.floor(D.n / 2));
  if (!qual) {
    // temporada 2+: los primeros de la anterior; temporada 1: equipos de amigos y, si faltan, los más fuertes de la IA
    const prev = D.all.filter(d => d.season === D.Sx - 1);
    if (D.Sx > 1 && prev.length) qual = E.table(D.n, prev).slice(0, q).map(r => r.t);
    else qual = D.teams.map((t, i) => ({ i, h: t.owner ? 1 : 0, a: teamAvg(t) })).sort((x, y) => y.h - x.h || y.a - x.a).slice(0, q).map(x => x.i);
    lvl = Math.round(qual.reduce((a, i) => a + teamAvg(D.teams[i]), 0) / qual.length);
  }
  const eu = E.euroClubs(S.cfg.seed, D.Sx, 8 - qual.length, lvl);
  eu.forEach((t, k) => { t.idx = D.n + k; });
  if (!groups) { const seeds = [...qual, ...eu.map(t => t.idx)]; groups = [[seeds[0], seeds[3], seeds[4], seeds[7]], [seeds[1], seeds[2], seeds[5], seeds[6]]]; }
  return (D._cls = { qual, lvl, eu, groups, all: [...D.teams, ...eu], provisional: !r0 });
}
function clState() {
  const st = clSetup(); if (!st) return null;
  if (D._clst) return D._clst;
  const now = Date.now(), rounds = [];
  for (let r = 0; r < 3; r++) {
    const pairs = st.groups.flatMap(g => E.CL_RR[r].map(([a, b]) => [g[a], g[b]])), doc = S.cl['s' + D.Sx + '-r' + r] || null, at = doc ? doc.at : clAt(r);
    rounds.push({ r, name: 'Grupos · jornada ' + (r + 1), pairs, doc, at, revealed: !!doc && now >= doc.at + LIVE, ready: true });
  }
  const gDocs = rounds.filter(R => R.revealed).map(R => R.doc);
  const tables = st.groups.map(g => E.groupTable(g, gDocs));
  const groupsDone = rounds.every(R => R.revealed);
  const fdoc = S.cl['s' + D.Sx + '-r3'] || null;
  const fpairs = groupsDone ? [[tables[0][0].t, tables[1][0].t]] : [[undefined, undefined]];
  const F = { r: 3, name: 'Final', pairs: fdoc ? fdoc.pairs : fpairs, doc: fdoc, at: fdoc ? fdoc.at : clAt(3), revealed: !!fdoc && now >= fdoc.at + LIVE, ready: groupsDone };
  rounds.push(F);
  let champ = null, finalist = null;
  if (F.revealed) { champ = E.cupWinner(F.doc, 0); finalist = F.pairs[0].find(t => t !== champ); }
  return (D._clst = { ...st, rounds, tables, champ, finalist });
}
function clMoney(i) {
  const cs = clState(); if (!cs) return 0; let v = 0;
  for (const R of cs.rounds) if (R.revealed) R.doc.m.forEach((m, k) => { const won = (m.h === i && m.hg > m.ag) || (m.a === i && m.ag > m.hg); if (won) v += CL_PRIZE.win; });
  if (cs.champ === i) v += CL_PRIZE.champ; else if (cs.finalist === i) v += CL_PRIZE.final;
  return v;
}
function clTokens(i) {
  const cs = clState(); if (!cs) return 0; let v = 0;
  for (const R of cs.rounds) if (R.revealed) R.doc.m.forEach((m, k) => { const p = R.r === 3 && R.doc.pens[k]; const won = (m.h === i && (m.hg > m.ag || (p && p[0] > p[1]))) || (m.a === i && (m.ag > m.hg || (p && p[1] > p[0]))); if (won) v += CL_TOK.win; });
  return v + (cs.champ === i ? CL_TOK.champ : 0);
}
async function clTick() {
  const cs = clState(); if (!cs) return false;
  for (const R of cs.rounds) {
    if (R.doc) continue;
    if (!R.ready || R.at > Date.now() || R.pairs.some(p => p[0] === undefined)) return false;
    const key = 's' + D.Sx + '-r' + R.r, ref = S.db.doc('champions/' + key);
    const l = await ref.acquire({ holder: S.me || 'x' + Math.random(), ttlMs: 15000 }); if (!l.acquired) return true;
    if ((await ref.get()).data()?.m) return true;
    const t = Date.now(), lv = moreSalts({ at: R.at }, t >= R.at + LIVE ? MAXSEG : segNeed({ at: R.at }, t), t);
    const doc = { ...E.simulateCupRound(S.cfg, cs.all, R.pairs, D.Sx, 'cl' + R.r, R.at, D.state, lv), pairs: R.pairs, groups: cs.groups, qual: cs.qual, lvl: cs.lvl };
    await ref.set(doc); S.clRaw[key] = doc; S.cl[key] = resolveDoc(doc, 'cl'); D._cls = D._clst = null; return true;
  }
  return false;
}
function clMatchRow(R, h, a, k) {
  const H = teamByIdx(h), A = teamByIdx(a), now = Date.now();
  let sc = new Date(R.at).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), btn = false;
  if (R.doc && k >= 0 && now >= R.doc.at) { btn = true; const m = R.doc.m[k]; if (now < R.doc.at + LIVE) { const [x, y] = scoreAt(m, liveMinute(R.doc)); sc = `${x}-${y}<small>vivo</small>`; } else { const p = R.r === 3 && R.doc.pens[k]; sc = `${m.hg}-${m.ag}${p ? `<small>pen ${p[0]}-${p[1]}</small>` : ''}`; } }
  const mine = D.my && (h === D.myIdx || a === D.myIdx);
  const inner = `<span class="h"><span>${esc(H.name)}</span>${crest(H, 24)}</span><span class="sc ${R.doc && now >= R.doc.at && now < R.doc.at + LIVE ? 'lv' : ''}">${sc}</span><span class="a">${crest(A, 24)}<span>${esc(A.name)}</span></span>`;
  return btn ? `<button class="mrow ${mine ? 'mine' : ''}" data-act="clmatch" data-arg="${R.r}-${k}">${inner}</button>` : `<div class="mrow ${mine ? 'mine' : ''}" style="cursor:default">${inner}</div>`;
}
function clView() {
  if (!CL_ON()) return `<section class="panel"><h3>Champions</h3><p class="mute">Con tan pocos equipos la temporada es demasiado corta para la Champions. Se juega en ligas de 6 equipos o más.</p></section>`;
  const cs = clState(), ours = new Set(cs.qual);
  const tableHTML = (g, rows, gi) => `<section class="panel"><h3>Grupo ${'AB'[gi]}</h3><div class="scroll"><table><thead><tr><th>#</th><th>Equipo</th><th>PJ</th><th>DG</th><th>Pts</th></tr></thead><tbody>${rows.map((r, i) => { const t = teamByIdx(r.t); return `<tr class="${D.my && r.t === D.myIdx ? 'me' : ''}"><td>${i + 1}</td><td><span class="tn">${crest(t, 22)}<span>${esc(t.name)}</span>${ours.has(r.t) ? '' : `<span class="tag ia">${esc(t.short)}</span>`}</span></td><td>${r.pj}</td><td>${r.gf - r.gc > 0 ? '+' : ''}${r.gf - r.gc}</td><td>${r.pts}</td></tr>`; }).join('')}</tbody></table></div></section>`;
  const qualTxt = cs.provisional ? 'Clasificados provisionales: se cierran al empezar la primera jornada.' : '';
  let html = `<section class="panel"><div class="comph">${compLogo('champions', 56)}<div><h3>Champions</h3><small class="mute">Temporada ${D.Sx}</small></div></div><ul class="facts"><li>${cs.qual.length} de tu liga + ${cs.eu.length} europeos</li><li>Ganar: +${money(CL_PRIZE.win)} y +${CL_TOK.win} ${IC.gem}</li><li>Campeón: ${money(CL_PRIZE.champ)} y +${CL_TOK.champ} ${IC.gem}</li><li>Finalista: ${money(CL_PRIZE.final)}</li></ul>${qualTxt ? `<p class="small mute">${qualTxt}</p>` : ''}
  ${cs.champ != null ? `<div class="champ" style="margin-top:12px">${prizeImg('champions', 110)}<div>${crest(teamByIdx(cs.champ), 48)}<h2>${esc(teamByIdx(cs.champ).name)}, campeón de la Champions</h2></div></div>` : ''}</section>`;
  html += `<div class="grid">${cs.groups.map((g, gi) => tableHTML(g, cs.tables[gi], gi)).join('')}</div>`;
  html += `<section class="panel">${cs.rounds.map(R => `<div class="grp">${R.name} · ${fmtKick(R.at)}</div><div class="rows">${R.pairs.map(([h, a], k) => h === undefined ? `<div class="mrow" style="cursor:default"><span class="h"><span>Ganador grupo A</span></span><span class="sc">–</span><span class="a"><span>Ganador grupo B</span></span></div>` : clMatchRow(R, h, a, R.doc ? R.doc.pairs.findIndex(p => p[0] === h && p[1] === a) : -1)).join('')}</div>`).join('')}</section>`;
  return html;
}
/* próximos partidos del míster en las tres competiciones */
function upcoming() {
  if (!D.my) return [];
  const i = D.myIdx, out = [], now = Date.now();
  for (let md = Math.max(D.nextMd, D.revealed.length + 1); md <= D.total && out.length < 2; md++) { const p = D.fx[md - 1]?.find(([h, a]) => h === i || a === i); if (p && kickAt(md) + LIVE > now) out.push({ c: 'Liga', at: kickAt(md), h: p[0], a: p[1], tag: 'J' + md }); }
  const cup = cupState(); if (cup) for (const R of cup.rounds) { const p = R.pairs.find(x => x && (x[0] === i || x[1] === i)); if (p && p[0] != null && p[1] != null && p[0] !== undefined && p[1] !== undefined && !R.revealed) { out.push({ c: 'Copa', at: R.at, h: p[0], a: p[1], tag: R.name }); break; } }
  const cl = clState(); if (cl && cl.qual.includes(i)) for (const R of cl.rounds) { const p = R.pairs.find(x => x[0] === i || x[1] === i); if (p && !R.revealed) { out.push({ c: 'Champions', at: R.at, h: p[0], a: p[1], tag: R.r < 3 ? 'Grupos' : 'Final' }); break; } }
  return out.sort((x, y) => x.at - y.at);
}
function upcomingHTML() {
  const up = upcoming(); if (!up.length) return '';
  return `<section class="panel"><h3>Próximos partidos</h3><div class="rows">${up.map(u => { const op = teamByIdx(u.h === D.myIdx ? u.a : u.h), home = u.h === D.myIdx; return `<div class="prow" style="cursor:default;grid-template-columns:auto minmax(0,1fr) auto"><span class="compl">${compLogo(u.c === 'Liga' ? 'liga' : u.c === 'Copa' ? 'copa' : 'champions', 36)}<small>${u.c}</small></span><span class="pname">${home ? '' : '@ '}${esc(op.name)}<small>${esc(u.tag)} · ${fmtKick(u.at)}</small></span><b class="small" data-cd="${u.at}">${cdText(u.at)}</b></div>`; }).join('')}</div></section>`;
}
/* la IA también puja en las subastas: interés según lo que necesita y su caja */
function aiBids(a) {
  if (!D) return [];
  const p = E.player(a.pid), o = ovrOf(a.pid, null), out = [];
  D.teams.forEach((t, i) => {
    if (t.owner || a.seller === t.id || t.squad.length >= SQ_MAX) return;
    const r = E.rng('aib' + a.id + t.id)();
    const same = t.squad.filter(id => E.player(id).pos === p.pos).map(id => ovrOf(id, t)).sort((x, y) => y - x);
    const need = same.length < 2 || o >= (same[0] || 0) ? .55 : o > (same[1] || 0) ? .3 : .08;
    if (r > need) return;
    const amt = E.r1(a.min * (1.05 + (need - r) / need * .5)), cash = D.fin(i).cash;
    if (amt > cash * .5) return;
    out.push({ team: t.id, amt, ai: true, t: 0 });
  });
  return out.sort((x, y) => y.amt - x.amt).slice(0, 1);
}

/* fin de temporada: un día de descanso y la siguiente arranca sola */
async function seasonRoll() {
  if (!D || !D.done || !S.canWrite || S.cfg.season !== D.Sx) return false;
  const next = restEnd(); if (Date.now() < next - 6 * 3600000) return false;
  const cs = cupState(), cl = clState(); if ((cs && cs.champ == null) || (cl && cl.champ == null)) return false;
  await write('liga/config', () => S.db.doc('liga/config').update({ season: D.Sx + 1, firstKick: next, forcedAt: {} }));
  return true;
}
async function settleAuctions() {
  const due = Object.values(S.auctions).find(a => a.status === 'open' && Date.now() > a.ends + 2000); if (!due) return false;
  const ref = S.db.doc('subastas/' + due.id); const l = await ref.acquire({ holder: S.me || 'x', ttlMs: 15000 }); if (!l.acquired) return true;
  const a = (await ref.get()).data(); if (!a || a.status !== 'open') return true;
  const byTeam = {}; [...(a.bids || []), ...aiBids(a)].forEach(b => { if (!byTeam[b.team] || b.amt > byTeam[b.team].amt) byTeam[b.team] = b; });
  const order = Object.values(byTeam).sort((x, y) => y.amt - x.amt);
  let winner = null;
  for (const b of order) { const tm = S.teams[b.team]; if (tm && D.fin(tm.idx).cash >= b.amt && tm.squad.length < SQ_MAX) { winner = b; break; } }
  const seller = a.seller ? S.teams[a.seller] : null;
  if (winner && seller && !seller.squad.includes(a.pid)) winner = null;
  if (winner && !seller && D.owned.has(a.pid)) winner = null;
  if (winner) {
    const to = S.teams[winner.team];
    if (seller) await movePlayer(seller, to, a.pid, winner.amt);
    else await saveTeam(to.id, { squad: [...to.squad, a.pid], ledger: ledgerAdd(to, -winner.amt, 'Subasta: ' + E.player(a.pid).name) });
  }
  await ref.set({ ...a, status: winner ? 'done' : 'void', winner: winner ? winner.team : null, price: winner ? winner.amt : null });
  return true;
}
function auctionsView() {
  const list = Object.values(S.auctions), open = list.filter(a => a.status === 'open').sort((a, b) => a.ends - b.ends), done = list.filter(a => a.status !== 'open').sort((a, b) => b.ends - a.ends).slice(0, 6);
  const row = a => { const p = E.player(a.pid), tb = topBid(a), lead = tb ? S.teams[tb.team] : null, mine = tb && D.my && tb.team === D.my.id, nb = nextBid(a), seller = a.seller ? S.teams[a.seller] : null;
    return `<div class="auc"><button class="prow" data-act="player" data-arg="${a.pid}"><span class="av">${shirt('#5b6b94', '#ffffff', '', 38)}<span class="pos ${lineOf(p.pos)}">${p.pos}</span></span><span class="pname">${esc(p.name)}<small>${stars(ovrOf(a.pid, seller))} · ${E.age(p, D.Sx)} años · ${seller ? 'Vende ' + esc(seller.name) : 'Agente libre'}</small></span><span class="val">${tb ? money(tb.amt) : 'Salida ' + money(a.min)}</span><span class="ovr">${ovrOf(a.pid, seller)}</span></button>
    <div class="auc-b"><span class="small ${mine ? 'pos-amt' : 'mute'}">${tb ? (mine ? 'Vas ganando' : 'Gana ' + esc(lead ? lead.name : '?')) : 'Sin pujas'}${aiBids(a).length ? ' · <b class="ai-int">la IA está interesada</b>' : ''} · termina <b data-cd="${a.ends}">${cdText(a.ends)}</b></span>${D.my && (!seller || seller.id !== D.my.id) ? `<button class="btn sm y" data-act="bid" data-arg="${a.id}" ${mine ? 'disabled' : ''}>Pujar ${money(nb)} · 1 ${IC.gem}</button>` : ''}</div></div>`; };
  return `<div class="grid"><section class="panel"><h3>Subastas abiertas</h3><ul class="facts"><li>3 agentes libres nuevos cada día</li><li>1 ${IC.gem} por puja</li><li>Puja de último minuto: +1 min</li></ul><div class="rows">${open.map(row).join('') || '<p class="mute">No hay subastas abiertas ahora.</p>'}</div></section>
  <section class="panel"><h3>Últimas cerradas</h3><ul class="ledger">${done.map(a => `<li><span>${esc(E.player(a.pid).name)}</span><b>${a.winner ? esc(S.teams[a.winner]?.name || '?') + ' · ' + money(a.price) : 'Sin comprador'}</b></li>`).join('') || '<li><span class="mute">Todavía ninguna.</span></li>'}</ul></section></div>`;
}
async function auctionMine(pid) {
  const t = D.my, v = E.pval(pid, D.Sx, t.xp?.[pid] || 0), min = E.r1(v * .6);
  if (Object.values(S.auctions).some(a => a.pid === pid && a.status === 'open')) return toast('Ya está en subasta');
  const ref = S.db.collection('subastas').doc();
  await write('subastas/' + ref.id, () => ref.set({ id: ref.id, pid, seller: t.id, min, ends: Date.now() + 30 * 60000, bids: [], status: 'open', t: Date.now() }));
  S.modal = null; S.view = 'mercado'; S.msub = 'subastas'; toast('En subasta durante 30 minutos'); render();
}

/* ---------- render ---------- */
function render() {
  const app = $('#app'), act = document.activeElement, aid = act?.id, val = act && act.tagName === 'INPUT' ? act.value : null; let sel = null; try { sel = act && act.tagName === 'INPUT' && act.type === 'text' ? [act.selectionStart, act.selectionEnd] : null; } catch (e) {}
  document.body.dataset.bg = bgFor();
  app.innerHTML = header() + '<main>' + body() + '</main>' + modal();
  if (aid) { const el = document.getElementById(aid); if (el) { if (val != null && el.tagName === 'INPUT') el.value = val; el.focus(); if (sel && el.setSelectionRange) try { el.setSelectionRange(sel[0], sel[1]); } catch (e) {} } }
  const sh = document.querySelector('.sheet');
  if (sh) { sh.onkeydown = e => trapTab(e, sh); if (!sh.contains(document.activeElement)) { const f = sh.querySelector('select,input,.btn,button:not(.x)') || sh.querySelector('.x'); f && f.focus({ preventScroll: true }); } }
}
function header() {
  const my = D?.my, cash = my ? D.fin(D.myIdx).cash : null;
  const title = my ? `<span>${crest(my, 38)}</span><span><b>${esc(my.name)}</b><small>${esc(S.cfg.name)} · T${D.Sx} · J${Math.min(D.revealed.length + (D.live.length ? 1 : 0), D.total)}/${D.total}</small></span>` : `<span><b>${esc(S.cfg?.name || 'Liga de Amigos')}</b><small>${D ? 'Temporada ' + D.Sx + ' · ' + D.n + ' equipos' : 'Fútbol manager entre amigos'}</small></span>`;
  const tabs = D ? `<nav class="tabs">${[['inicio', 'Inicio'], ['equipo', 'Equipo'], ['liga', 'Liga'], ['mercado', 'Mercado'], ['club', 'Club']].map(([k, l]) => `<button data-act="view" data-arg="${k}" aria-current="${S.view === k}">${NAV[k]}${l}</button>`).join('')}</nav>` : '';
  return `<header class="top"><div class="row"><div class="club">${title}</div>${cash != null ? `<button class="tokchip" data-act="go" data-arg="club:tok" aria-label="Tokens: ${D.tok(D.myIdx)}">${IC.gem}${D.tok(D.myIdx)}</button><div class="cash ${cash < 0 ? 'neg' : ''}" aria-label="Caja">${IC.coin}${money(cash)}</div>` : ''}</div>${tabs}</header>`;
}
function body() {
  if (S.loadErr) return `<div class="panel"><h2>No se puede abrir la liga</h2><p class="mute">${esc(S.loadErr)}</p></div>`;
  if (!S.cfgOk) return `<div class="boot">Cargando la liga…</div>`;
  if (!S.cfg || !S.cfg.started) return setupView();
  if (!D) return `<div class="boot">Cargando equipos…</div>`;
  return ({ inicio: homeView, equipo: teamView, liga: leagueView, mercado: marketView, club: clubView }[S.view] || homeView)();
}

/* ---------- crear liga ---------- */
function setupView() {
  const canCreate = S.owner;
  const tm = new Date(Date.now() + DAY), dv = tm.toISOString().slice(0, 10);
  return `${webPanel()}<div class="grid"><section class="panel"><h2>Crea vuestra liga</h2><p class="mute">Cada amigo coge un equipo. Los que queden libres los entrena la IA. Se juega un partido al día a la hora que elijas, con directo de 15 minutos.</p>
  ${canCreate ? `<form id="newleague" class="stackp"><div class="fields">
  <label class="f">Nombre de la liga<input type="text" id="lg-name" maxlength="30" value="Liga de los Panas"></label>
  <label class="f">Equipos<select id="lg-n">${[6, 8, 10, 12, 14, 16, 18, 20].map(n => `<option ${n === 8 ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
  <label class="f">Hora del partido<input type="time" id="lg-hour" value="21:00"></label>
  <label class="f">Primera jornada<input type="date" id="lg-date" value="${dv}"></label></div>
  <p class="small mute">Las plantillas se reparten con un draft equilibrado entre ${E.REAL.length} futbolistas reales (valoraciones aproximadas). Si hacen falta más jugadores, se completan con canteranos.</p>
  <button class="btn y" type="submit">Crear liga y repartir jugadores</button></form>` : `<p class="note">El creador de esta página todavía no ha montado la liga. Cuando lo haga, aquí podrás elegir equipo.</p>`}</section>
  <section class="panel"><h3>Cómo funciona</h3><ul class="small"><li>Liga cada día a la misma hora; copa y Champions (contra clubes europeos de la IA) en días alternos, a otra hora.</li><li>Tras la última jornada hay un día de descanso y la siguiente temporada arranca sola.</li><li>Partidos en directo de ${Math.round(LIVE / 60000)} minutos: todos veis lo mismo a la vez, nadie puede adelantarlo y el resultado se decide mientras se juega.</li><li>Verlo en directo da +8% de posesión a tu equipo; jugar en casa también suma.</li><li>Alineación, táctica y suplentes antes de cada partido.</li><li>Cansancio, lesiones y sanciones que duran jornadas.</li><li>Entrenamiento diario, ojeador de promesas y mercado de fichajes.</li><li>Taquilla, salarios, premios y estadio ampliable.</li><li>Al acabar, nueva temporada: los jugadores envejecen y evolucionan.</li></ul></section></div>`;
}
async function createLeague(e) {
  e.preventDefault();
  const name = $('#lg-name').value.trim() || 'Liga de Amigos', n = +$('#lg-n').value, hour = $('#lg-hour').value || '21:00', date = $('#lg-date').value;
  const firstKick = new Date(date + 'T' + hour).getTime();
  if (!isFinite(firstKick)) return toast('Revisa la fecha y la hora');
  const seed = Math.random().toString(36).slice(2, 10);
  const squads = E.draft(n, seed);
  const shuffled = AI_NAMES.map((x, i) => [x, COLORS[i]]).sort((a, b) => E.hash(seed + a[0][0]) - E.hash(seed + b[0][0]));
  toast('Repartiendo jugadores…');
  try {
    await wipe();
    for (let i = 0; i < n; i++) {
      const [[nm, sh], col] = shuffled[i];
      await S.db.doc('equipos/t' + i).set({ id: 't' + i, idx: i, name: nm, short: sh, colors: col, owner: null, squad: squads[i], lineup: null, tac: { ment: 'equ', press: 'med', est: 'mix' }, xp: {}, stadium: 0, ledger: [], lastTrain: '', lastScout: '', scouts: 0 });
    }
    await S.db.doc('liga/config').set({ name, n, seed, season: 1, hour, firstKick, forcedAt: {}, started: true, createdBy: S.me, created: Date.now() });
    toast('Liga creada. Elige tu equipo.');
  } catch (err) { console.warn(err); toast('No se pudo crear la liga'); }
}
async function wipe() {
  for (const col of ['jornadas', 'ofertas', 'equipos', 'copa', 'champions', 'subastas', 'muro', 'ordenes', 'vivo', 'presencia']) { const q = await S.db.collection(col).get(); for (const d of q.docs) await S.db.doc(col + '/' + d.id).delete(); }
  S.jor = {}; S.offers = {}; S.teams = {};
}

/* ---------- inicio ---------- */
function myNext() {
  if (!D.my) return null;
  const i = D.myIdx;
  const liveDoc = D.live.find(d => d.m.some(m => m.h === i || m.a === i));
  if (liveDoc) return { live: true, doc: liveDoc, m: liveDoc.m.find(m => m.h === i || m.a === i) };
  if (D.done) return null;
  const md = Math.max(D.nextMd, D.revealed.length + 1);
  const pair = D.fx[md - 1]?.find(([h, a]) => h === i || a === i);
  return pair ? { live: false, md, h: pair[0], a: pair[1], at: kickAt(md) } : null;
}
function homeView() {
  if (!D.my) return pickTeamView();
  const nx = myNext(), lastDoc = [...D.revealed].reverse().find(d => d.m.some(m => m.h === D.myIdx || m.a === D.myIdx));
  const last = lastDoc && lastDoc.m.find(m => m.h === D.myIdx || m.a === D.myIdx);
  let main = '';
  if (D.done) {
    const ch = teamByIdx(D.table[0].t);
    main = `<div class="champ">${prizeImg('liga', 120)}<div>${crest(ch, 56)}<h2>${esc(ch.name)}, campeón de la temporada ${D.Sx}</h2><p class="small">${D.table[0].pts} puntos. Día de descanso: la temporada ${D.Sx + 1} arranca sola el ${fmtKick(restEnd())}.</p></div></div>`;
  }
  if (nx && nx.live) main += liveBoard(nx.doc, nx.m);
  else if (nx) main += nextBoard(nx);
  else main += `<section class="hero"><div class="meta"><span>Temporada ${D.Sx}</span></div><h2 style="margin-top:40px">Temporada terminada</h2><div class="acts"><button class="btn y" data-act="friendly">Jugar amistoso</button></div></section>`;
  const pend = Object.values(S.offers).filter(o => o.to === D.my.id && o.status === 'pend').length;
  const avisos = [];
  D.my.squad.forEach(id => { const s = status(id); if (s) avisos.push(`<li>${ICONS[s.why === 'Lesión' ? 'les' : 'roja']} ${esc(E.player(id).name)}: ${s.why.toLowerCase()}, ${s.n} jornada${s.n > 1 ? 's' : ''}</li>`); });
  const tired = D.my.squad.filter(id => cond(id) < 75).length;
  if (tired) avisos.push(`<li>${tired} jugador${tired > 1 ? 'es' : ''} por debajo del 75% de forma: piensa en rotar.</li>`);
  if (D.my.lastTrain !== today()) avisos.push(`<li>Hoy aún no has entrenado. <button class="btn sm ghost" data-act="go" data-arg="equipo:train">Entrenar</button></li>`);
  if (pend) avisos.push(`<li>Tienes ${pend} oferta${pend > 1 ? 's' : ''} por tus jugadores. <button class="btn sm ghost" data-act="go" data-arg="mercado:ofertas">Ver</button></li>`);
  const cash = D.fin(D.myIdx).cash; if (cash < 0) avisos.push(`<li><b class="neg-amt">Saldo negativo.</b> Vende algún jugador o los salarios te hundirán.</li>`);
  const rows = D.table, myPos = rows.findIndex(r => r.t === D.myIdx);
  const show = rows.filter((r, k) => k < 4 || Math.abs(k - myPos) <= 1);
  return `<div class="grid"><div class="stackp">${main}${objectiveHTML()}${upcomingHTML()}${last ? `<section class="panel"><div class="ph"><h3>Último partido · J${lastDoc.md}</h3><button class="btn sm" data-act="match" data-arg="${lastDoc.season}-${lastDoc.md}-${lastDoc.m.indexOf(last)}">${IC.play}Ver partido</button></div>${matchRow(last, lastDoc, lastDoc.m.indexOf(last))}</section>` : ''}</div>
  <div class="stackp"><section class="panel"><div class="ph"><h3>Clasificación</h3><button class="btn sm ghost" data-act="go" data-arg="liga:tabla">Completa</button></div>${tableHTML(show, true)}</section>${muroHTML(4)}
  <section class="panel"><h3>Avisos del míster</h3>${avisos.length ? `<ul class="small" style="padding-left:18px;margin:8px 0 0">${avisos.join('')}</ul>` : '<p class="mute small">Todo en orden, míster.</p>'}</section></div></div>`;
}
function nextBoard(nx) {
  const H = teamByIdx(nx.h), A = teamByIdx(nx.a);
  const st = [H, A].map(t => { const ctx = D.ctx(t); return E.lineStrength(E.resolveLineup(t, ctx), ctx); });
  const rowsC = [['ATA', 'A'], ['MED', 'M'], ['DEF', 'D'], ['POR', 'G']].map(([l, k]) => { const a = st[0][k], b = st[1][k], mx = Math.max(a, b, 1); return `<div class="cmp"><span class="n">${Math.round(a)}</span><span class="bar r"><i style="width:${a / mx * 100}%"></i></span><span class="l">${l}</span><span class="bar"><i style="width:${b / mx * 100}%"></i></span><span class="n">${Math.round(b)}</span></div>`; }).join('');
  const who = t => t.owner ? (t.owner === S.me ? 'Tú' : esc(mgrName(t.owner))) : 'IA';
  const derby = H.owner && A.owner;
  return `<section class="hero"><div class="meta"><span class="hm">${compLogo('liga', 26)}Jornada ${nx.md} de ${D.total}${derby ? ' <b class="derby">Derbi</b>' : ''}</span><span>${fmtKick(nx.at)} · <b data-cd="${nx.at}">${cdText(nx.at)}</b></span></div>
  <div class="vs"><div class="t">${crest(H, 74)}<b>${esc(H.name)}</b><small>${who(H)}</small></div><div class="score">VS<small>${new Date(nx.at).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</small></div><div class="t">${crest(A, 74)}<b>${esc(A.name)}</b><small>${who(A)}</small></div></div>
  ${rowsC}<div class="acts"><button class="btn y" data-act="go" data-arg="equipo:xi">Alineación</button><button class="btn" data-act="friendly">Amistoso</button></div></section>`;
}
function liveBoard(doc, m) {
  const k = doc.m.indexOf(m), mn = liveMinute(doc), [hg, ag] = scoreAt(m, mn), H = teamByIdx(m.h), A = teamByIdx(m.a);
  const evs = m.ev.filter(e => e.m <= mn && ['gol', 'ama', 'roja', 'les'].includes(e.t)).slice(-4).reverse();
  return `<section class="hero"><div class="meta"><span class="live"><i></i> EN DIRECTO</span><span>Jornada ${doc.md}</span></div>
  <div class="vs"><div class="t">${crest(H, 74)}<b>${esc(H.name)}</b></div><div class="score">${hg}-${ag}<small>${Math.min(mn, 90)}${mn > 90 ? '+' + (mn - 90) : ''}'</small></div><div class="t">${crest(A, 74)}<b>${esc(A.name)}</b></div></div>
  <ul class="evs">${evs.map(e => evLi(e, m)).join('')}</ul>
  <div class="acts"><button class="btn y" data-act="match" data-arg="${doc.season}-${doc.md}-${k}">${IC.play}Ver en directo y dirigir</button><button class="btn" data-act="friendly">Amistoso</button></div></section>`;
}
function evLi(e, m) {
  const t = teamByIdx(e.s ? m.a : m.h), p = E.player(e.p);
  const txt = e.t === 'gol' ? `<b>${esc(p.name)}</b>${e.a ? ` <span class="mute small">(${esc(surname(E.player(e.a).name))})</span>` : ''}` : e.t === 'cam' ? `Entra ${esc(surname(p.name))}, sale ${esc(surname(E.player(e.q).name))}` : e.t === 'les' ? `${esc(p.name)} se lesiona (${e.n} j.)` : e.t === 'roja' ? `${esc(p.name)} expulsado${e.dbl ? ' (doble amarilla)' : ''}` : esc(p.name);
  return `<li><span class="mn">${Math.min(e.m, 90)}${e.m > 90 ? '+' + (e.m - 90) : ''}'</span>${ICONS[e.t]}<span>${txt} <span class="small mute">· ${esc(t.short)}</span></span></li>`;
}
function pickTeamView() {
  const free = D.teams.filter(t => !t.owner), taken = D.teams.filter(t => t.owner);
  return `<section class="panel"><h2>Elige tu equipo</h2><p class="mute">Coge cualquier equipo de la IA. Te quedas con su plantilla, su dinero y su puesto en la tabla.</p>
  ${!S.canWrite ? '<p class="note bad">Ahora mismo solo puedes mirar. Pide al creador que te invite por email con permiso para editar y entra con ese mismo email de Claude.</p>' : ''}
  <div class="teams">${free.map(t => { const avg = Math.round(t.squad.reduce((a, id) => a + ovrOf(id, t), 0) / t.squad.length); return `<div class="tm">${crest(t, 40)}<div><b>${esc(t.name)}</b><div class="small mute">Media ${avg} · ${t.squad.length} jugadores</div></div>${S.canWrite ? `<button class="btn sm" data-act="claim" data-arg="${t.id}">Coger</button>` : ''}</div>`; }).join('')}</div>
  ${taken.length ? `<h3 style="margin-top:18px">Ya tienen mánager</h3><div class="teams" style="margin-top:8px">${taken.map(t => `<div class="tm">${crest(t, 34)}<div><b>${esc(t.name)}</b><div class="small mute">${esc(mgrName(t.owner))}</div></div></div>`).join('')}</div>` : ''}</section>${webPanel()}`;
}
async function claim(id) {
  if (!S.me) return toast('Necesitas iniciar sesión');
  if (D.my) return toast('Ya tienes equipo');
  const ref = S.db.doc('equipos/' + id);
  try {
    const l = await ref.acquire({ holder: S.me, ttlMs: 8000 }); if (!l.acquired) return toast('Otro mánager lo está cogiendo, prueba otro');
    const snap = await ref.get(); if (snap.data()?.owner) return toast('Ese equipo ya tiene dueño');
    await saveTeam(id, { owner: S.me, lineup: null });
    S.view = 'inicio'; S.tutoSeen = false;
  } catch (e) { console.warn(e); }
}

/* ---------- equipo ---------- */
function teamView() {
  if (!D.my) return pickTeamView();
  const subs = [['xi', 'Alineación'], ['squad', 'Plantilla'], ['train', 'Entreno']];
  return `<div class="sub">${subs.map(([k, l]) => `<button data-act="sub" data-arg="${k}" aria-pressed="${S.sub === k}">${l}</button>`).join('')}</div>` + (S.sub === 'squad' ? squadView() : S.sub === 'train' ? trainView() : lineupView());
}
function ensureLin() {
  const t = D.my, ctx = D.ctx(t);
  if (!S.lin || S.lin.team !== t.id) {
    const L = t.lineup && E.FORMS[t.lineup.form] ? { form: t.lineup.form, xi: (t.lineup.xi || []).slice(0, 11), bench: (t.lineup.bench || []).slice(0, 7) } : E.autoXI(t.squad, '4-3-3', ctx);
    while (L.xi.length < 11) L.xi.push(null);
    const sq = new Set(t.squad); L.xi = L.xi.map(id => id && sq.has(id) ? id : null); L.bench = L.bench.filter(id => sq.has(id));
    S.lin = { team: t.id, ...L };
  }
  return S.lin;
}
function fitClass(id, pos) { const f = E.fit(E.player(id).pos, pos); return f >= .99 ? '' : f >= .84 ? 'mid' : 'bad'; }
function tokHTML(id, pos, k, i, style) {
  const sel = S.sel && S.sel.k === k && S.sel.i === i, t = D.my, c1 = t.colors[0], c2 = t.colors[1];
  if (!id) return `<button class="tok empty ${sel ? 'sel' : ''}" style="${style}" data-act="slot" data-arg="${k}:${i}" aria-label="Puesto ${pos || 'suplente'} vacío"><span class="jw">${shirt('#ffffff22', '#ffffff', '+', 44)}</span><span class="n">${pos || 'Vacío'}</span></button>`;
  const p = E.player(id), st = status(id), c = cond(id), isGk = p.pos === 'POR';
  return `<button class="tok ${pos ? fitClass(id, pos) : ''} ${st ? 'out' : ''} ${sel ? 'sel' : ''}" style="${style}" data-act="slot" data-arg="${k}:${i}" aria-label="${esc(p.name)}, ${pos || p.pos}"><span class="jw">${shirt(isGk ? '#facc15' : c1, isGk ? '#111111' : c2, ovrOf(id, t), 44)}</span><span class="n">${esc(surname(p.name))}</span><span class="e"><i style="width:${c}%;${c < 75 ? 'background:var(--warn)' : ''}"></i></span></button>`;
}
function lineupView() {
  const L = ensureLin(), t = D.my, slots = E.FORMS[L.form], co = E.COORD[L.form], ctx = D.ctx(t);
  const str = E.lineStrength({ form: L.form, xi: L.xi }, ctx);
  const nx = myNext();
  const toks = L.xi.map((id, i) => tokHTML(id, slots[i], 'xi', i, `left:${co[i][0]}%;top:${co[i][1]}%`)).join('');
  const bench = [...Array(7)].map((_, i) => tokHTML(L.bench[i] || null, '', 'bench', i, '')).join('');
  const tac = t.tac || { ment: 'equ', press: 'med', est: 'mix' };
  const sel = (id, obj, v) => `<select id="${id}" data-chg="${id}">${Object.entries(obj).map(([k, l]) => `<option value="${k}" ${k === v ? 'selected' : ''}>${l}</option>`).join('')}</select>`;
  const outXI = L.xi.filter(id => id && status(id)).length;
  return `<div class="grid"><section class="panel"><div class="ph"><h3>${nx && !nx.live ? 'Para la jornada ' + nx.md : 'Tu once'}</h3><div style="display:flex;gap:6px"><button class="btn sm ghost" data-act="autoxi">Automática</button></div></div>
  <div class="fields" style="margin-bottom:12px"><label class="f">Formación<select id="t-form" data-chg="form">${Object.keys(E.FORMS).map(f => `<option ${f === L.form ? 'selected' : ''}>${f}</option>`).join('')}</select></label>
  <label class="f">Mentalidad${sel('t-ment', MENT, tac.ment)}</label><label class="f">Presión${sel('t-press', PRESS, tac.press)}</label><label class="f">Estilo${sel('t-est', EST, tac.est)}</label></div>
  <label class="chk"><input type="checkbox" id="t-auto" data-chg="tauto" ${tac.auto !== false ? 'checked' : ''}> Cambios automáticos por cansancio si no haces ninguno</label>
  <div class="pitch">${pitchLines()}${toks}</div>
  <div class="grp">Banquillo</div><div class="bench">${bench}</div>
  <div class="str"><div><b>${Math.round(str.A)}</b><span>Ataque</span></div><div><b>${Math.round(str.M)}</b><span>Medio</span></div><div><b>${Math.round(str.D)}</b><span>Defensa</span></div><div><b>${Math.round(str.G)}</b><span>Portería</span></div></div>
  ${outXI ? `<p class="note bad">Tienes ${outXI} jugador${outXI > 1 ? 'es' : ''} no disponible${outXI > 1 ? 's' : ''} en el once. Si no los cambias, entrará el mejor suplente.</p>` : ''}
  <p class="small mute">Borde verde: juega en su puesto. Amarillo: puesto parecido. Rojo: fuera de sitio. La barrita es su forma física. Los cambios se guardan solos.</p></section>
  <section class="panel">${pickerHTML(L)}</section></div>`;
}
function pitchLines() { return `<svg class="lines" viewBox="0 0 68 88" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="#ffffff8c" stroke-width=".5"><rect x="2" y="2" width="64" height="84"/><line x1="2" y1="44" x2="66" y2="44"/><circle cx="34" cy="44" r="7"/><rect x="16" y="2" width="36" height="13"/><rect x="25" y="2" width="18" height="5"/><rect x="16" y="73" width="36" height="13"/><rect x="25" y="81" width="18" height="5"/></g></svg>`; }
function pickerHTML(L) {
  if (!S.sel) return `<h3>Cambiar jugadores</h3><p class="mute">Toca un puesto del campo o del banquillo y luego elige quién juega ahí.</p>${squadList(D.my, null)}`;
  const pos = S.sel.k === 'xi' ? E.FORMS[L.form][S.sel.i] : null, ctx = D.ctx(D.my);
  const ids = D.my.squad.slice().sort((a, b) => pos ? ctx.eff(b, pos) - ctx.eff(a, pos) : ovrOf(b, D.my) - ovrOf(a, D.my));
  const cur = S.sel.k === 'xi' ? L.xi[S.sel.i] : L.bench[S.sel.i];
  return `<div class="ph"><h3>${pos ? 'Elige ' + pos : 'Elige suplente'}</h3><div style="display:flex;gap:6px">${cur ? `<button class="btn sm ghost" data-act="clearslot">Dejar vacío</button>` : ''}<button class="btn sm ghost" data-act="unsel">Cerrar</button></div></div>
  <div class="rows">${ids.map(id => { const p = E.player(id), where = L.xi.indexOf(id) >= 0 ? 'Titular' : L.bench.indexOf(id) >= 0 ? 'Banquillo' : '', st = status(id), f = pos ? Math.round(E.fit(p.pos, pos) * 100) : null;
    return `<button class="prow" data-act="assign" data-arg="${id}"><span class="pos ${lineOf(p.pos)}">${p.pos}</span><span class="pname">${esc(p.name)}${st ? `<span class="tag ${st.why === 'Lesión' ? 'inj' : 'sus'}">${st.why} ${st.n}j</span>` : ''}<small>${where ? where + ' · ' : ''}${f != null ? 'Encaje ' + f + '% · ' : ''}Forma ${cond(id)}%</small></span><span class="val">${pos ? Math.round(ctx.eff(id, pos)) + ' ef.' : ''}</span><span class="ovr">${ovrOf(id, D.my)}</span></button>`; }).join('')}</div>`;
}
function saveLin() {
  const L = S.lin, t = D.my; if (!L || !t) return;
  clearTimeout(saveLin.t); S.linDirty = true;
  saveLin.t = setTimeout(() => { saveTeam(t.id, { lineup: { form: L.form, xi: L.xi, bench: L.bench.filter(Boolean) } }).finally(() => { S.linDirty = false; }); }, 700);
}
function assign(pid) {
  const L = S.lin, s = S.sel; if (!L || !s) return;
  const inX = L.xi.indexOf(pid), inB = L.bench.indexOf(pid);
  const cur = s.k === 'xi' ? L.xi[s.i] : L.bench[s.i] || null;
  if (s.k === 'xi' && inX === s.i) { S.sel = null; return render(); }
  if (inX >= 0) L.xi[inX] = cur; else if (inB >= 0) { if (cur) L.bench[inB] = cur; else L.bench.splice(inB, 1); }
  if (s.k === 'xi') L.xi[s.i] = pid; else { if (s.i < L.bench.length) L.bench[s.i] = pid; else L.bench.push(pid); }
  L.bench = L.bench.filter(Boolean).slice(0, 7);
  S.sel = null; saveLin(); render();
}
function changeForm(f) {
  const L = S.lin, t = D.my, ctx = D.ctx(t);
  const keep = L.xi.filter(Boolean), auto = E.autoXI(keep, f, ctx);
  const used = new Set(auto.xi.filter(Boolean));
  auto.xi = auto.xi.map((id, i) => id || (() => { let b = null, bv = -1; for (const c of t.squad) { if (used.has(c) || !ctx.ok(c)) continue; const v = ctx.eff(c, E.FORMS[f][i]); if (v > bv) { bv = v; b = c; } } if (b) used.add(b); return b; })());
  L.form = f; L.xi = auto.xi; L.bench = L.bench.filter(id => !used.has(id)).slice(0, 7);
  S.sel = null; saveLin(); render();
}
function squadList(t, actPrefix) {
  const groups = { G: [], D: [], M: [], A: [] };
  t.squad.forEach(id => groups[lineOf(E.player(id).pos)].push(id));
  return Object.entries(groups).map(([g, ids]) => ids.length ? `<div class="grp">${LN[g]}</div><div class="rows">${ids.sort((a, b) => ovrOf(b, t) - ovrOf(a, t)).map(id => playerRow(id, t)).join('')}</div>` : '').join('');
}
function playerRow(id, t, extra) {
  const p = E.player(id), own = t || (D.owned.has(id) ? ownerOf(id) : null), st = D.owned.has(id) ? status(id) : null, o = ovrOf(id, own), v = E.value(o, E.age(p, D.Sx)), c = cond(id);
  const cols = own ? own.colors : ['#5b6b94', '#ffffff'], gk = p.pos === 'POR';
  return `<button class="prow" data-act="player" data-arg="${id}"><span class="av">${shirt(gk && own ? '#facc15' : cols[0], gk && own ? '#111111' : cols[1], '', 38)}<span class="pos ${lineOf(p.pos)}">${p.pos}</span></span><span class="pname">${esc(p.name)}${st ? `<span class="tag ${st.why === 'Lesión' ? 'inj' : 'sus'}">${st.why} ${st.n}j</span>` : ''}<small>${stars(o)} · ${p.nat} · ${E.age(p, D.Sx)} años${extra ? ' · ' + extra : ''}</small>${t ? `<span class="cond"><i style="width:${c}%;${c < 75 ? 'background:var(--warn)' : ''}"></i></span>` : ''}</span><span class="val">${money(v)}</span><span class="ovr">${o}</span></button>`;
}
function squadView() {
  const t = D.my, avg = Math.round(t.squad.reduce((a, id) => a + ovrOf(id, t), 0) / t.squad.length);
  const wages = t.squad.reduce((a, id) => a + E.wage(E.pval(id, D.Sx, t.xp?.[id] || 0)), 0);
  return `<div class="grid"><section class="panel"><div class="ph"><h3>Plantilla · ${t.squad.length}/${SQ_MAX}</h3><span class="mute small">Media ${avg}</span></div>${squadList(t)}</section>
  <section class="panel"><h3>Resumen</h3><div class="kv" style="margin-top:10px"><div><b>${money(t.squad.reduce((a, id) => a + E.pval(id, D.Sx, t.xp?.[id] || 0), 0))}</b><span>Valor de la plantilla</span></div><div><b>${money(wages)}</b><span>Salarios por jornada</span></div><div><b>${t.squad.filter(id => status(id)).length}</b><span>Bajas</span></div></div>
  <p class="small mute" style="margin-top:12px">Toca un jugador para ver sus números, venderlo o liberarlo. Mínimo ${SQ_MIN} jugadores, máximo ${SQ_MAX}.</p></section></div>`;
}
function trainView() {
  const t = D.my, done = t.lastTrain === today(), f = S.focus || t.lastFocus || 'general';
  const gains = done ? t.lastGains || {} : null;
  const ids = t.squad.slice().sort((a, b) => ovrOf(b, t) - ovrOf(a, t));
  return `<div class="grid"><section class="panel"><h3>Sesión de hoy</h3><ul class="facts"><li>1 sesión al día</li><li>Los jóvenes suben más rápido</li><li>100 exp = +1 de media</li></ul>
  <div class="focus" style="margin:12px 0">${Object.entries(FOCUS).map(([k, [l, d]]) => `<button data-act="focus" data-arg="${k}" aria-pressed="${f === k}" ${done ? 'disabled' : ''}>${l}<small>${d}</small></button>`).join('')}</div>
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn y" data-act="train" ${done ? 'disabled' : ''}>${done ? 'Entrenado hoy' : 'Entrenar ahora'}</button>${done && t.lastTrain2 !== today() ? '<button class="btn" data-act="train2">Sesión extra · 2 tokens</button>' : ''}</div><p class="small mute" style="margin-top:8px">La ciudad deportiva (nivel ${E.facLvl(t, 'ent')}) da un ${E.facLvl(t, 'ent') * 15}% más de experiencia.</p></section>
  <section class="panel"><h3>Progreso</h3><div class="rows" style="margin-top:6px">${ids.map(id => { const p = E.player(id), xp = t.xp?.[id] || 0, o = ovrOf(id, t), cap = Math.max(p.base, Math.floor(E.pot(p))), atMax = p.base + Math.floor(xp / 100) >= cap; return `<div class="prow" style="cursor:default"><span class="pos ${lineOf(p.pos)}">${p.pos}</span><span class="pname">${esc(p.name)}<small>${atMax ? 'En su techo' : (xp % 100) + '/100 exp.'}${gains && gains[id] ? ' · <b style="color:var(--good)">+' + gains[id] + '</b>' : ''}</small></span><span class="xp"><i style="width:${atMax ? 100 : xp % 100}%"></i></span><span class="ovr">${o}</span></div>`; }).join('')}</div></section></div>`;
}
async function doTrain() {
  const t = D.my, f = S.focus || t.lastFocus || 'general', day = today();
  if (t.lastTrain === day) return;
  const g = E.trainGains(t, D.Sx, f, t.lastTrain2 === day ? day + 'b' : day), xp = { ...(t.xp || {}) };
  for (const id in g) xp[id] = (xp[id] || 0) + g[id];
  const before = t.squad.map(id => ovrOf(id, t));
  await saveTeam(t.id, { xp, lastTrain: day, lastGains: g, lastFocus: f });
  const up = t.squad.filter((id, k) => E.ovr(id, D.Sx, xp[id]) > before[k]).map(id => surname(E.player(id).name));
  toast(up.length ? 'Suben de media: ' + up.slice(0, 4).join(', ') + (up.length > 4 ? '…' : '') : 'Buena sesión. Experiencia sumada.');
}

/* ---------- liga ---------- */
function tableHTML(rows, compact) {
  return `<div class="scroll"><table><thead><tr><th>#</th><th>Equipo</th><th>PJ</th>${compact ? '' : '<th class="hide-s">G</th><th class="hide-s">E</th><th class="hide-s">P</th>'}<th>DG</th><th>Pts</th>${compact ? '' : '<th class="hide-s">Racha</th>'}</tr></thead><tbody>${rows.map(r => { const t = teamByIdx(r.t), k = D.table.indexOf(r); return `<tr class="${r.t === D.myIdx ? 'me' : ''}"><td>${k + 1}</td><td><span class="tn">${crest(t, 22)}<span>${esc(t.name)}</span>${t.owner ? '' : '<span class="tag ia">IA</span>'}</span></td><td>${r.pj}</td>${compact ? '' : `<td class="hide-s">${r.g}</td><td class="hide-s">${r.e}</td><td class="hide-s">${r.p}</td>`}<td>${r.gf - r.gc > 0 ? '+' : ''}${r.gf - r.gc}</td><td><b>${r.pts}</b></td>${compact ? '' : `<td class="hide-s"><span class="form">${r.form.slice(-5).map(x => `<i class="${x}"></i>`).join('')}</span></td>`}</tr>`; }).join('')}</tbody></table></div>`;
}
function matchRow(m, doc, k) {
  const H = teamByIdx(m.h), A = teamByIdx(m.a), now = Date.now();
  let sc, lv = false;
  if (!doc || now < doc.at) sc = new Date(doc ? doc.at : kickAt(S.mdSel)).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  else if (now < doc.at + LIVE) { const mn = liveMinute(doc), [h, a] = scoreAt(m, mn); sc = `${h}-${a}<small>${Math.min(mn, 90)}'</small>`; lv = true; }
  else sc = m.hg + '-' + m.ag;
  const inner = `<span class="h"><span>${esc(H.name)}</span>${crest(H, 26)}</span><span class="sc ${lv ? 'lv' : ''}">${sc}</span><span class="a">${crest(A, 26)}<span>${esc(A.name)}</span></span>`;
  return doc && now >= doc.at ? `<button class="mrow" data-act="match" data-arg="${doc.season}-${doc.md}-${k}" aria-label="Ver partido">${inner}</button>` : `<div class="mrow" style="cursor:default">${inner}</div>`;
}
function leagueView() {
  const subs = [['tabla', 'Tabla'], ['jornadas', 'Jornadas'], ['copa', 'Copa'], ['champions', 'Champions'], ['muro', 'Muro'], ['goles', 'Goleadores'], ['clubes', 'Clubes']];
  let html = `<div class="sub">${subs.map(([k, l]) => `<button data-act="lsub" data-arg="${k}" aria-pressed="${S.lsub === k}">${l}</button>`).join('')}</div>`;
  if (S.lsub === 'jornadas') {
    const md = S.mdSel = S.mdSel || Math.min(D.total, Math.max(1, D.live.length ? D.live[0].md : D.revealed.length + (D.done ? 0 : 1)));
    const doc = D.cur.find(d => d.md === md);
    const list = doc ? doc.m.map((m, k) => matchRow(m, doc, k)).join('') : D.fx[md - 1].map(([h, a]) => matchRow({ h, a, ev: [] }, null, 0)).join('');
    html += `<section class="panel"><div class="ph"><button class="btn sm ghost" data-act="md" data-arg="${md - 1}" ${md <= 1 ? 'disabled' : ''} aria-label="Jornada anterior">‹</button><h3>Jornada ${md} · ${fmtKick(doc ? doc.at : kickAt(md))}</h3><button class="btn sm ghost" data-act="md" data-arg="${md + 1}" ${md >= D.total ? 'disabled' : ''} aria-label="Jornada siguiente">›</button></div>${list}</section>`;
  } else if (S.lsub === 'goles') {
    const ent = Object.entries(D.stats).filter(([, s]) => s.g || s.a);
    const row = ([id, s], k, key) => { const o = ownerOf(id); return `<button class="prow" data-act="player" data-arg="${id}"><span class="num" style="font-size:20px;text-align:center">${k + 1}</span><span class="pname">${esc(E.player(id).name)}<small>${o ? esc(o.name) : 'Libre'} · ${s.apps} PJ</small></span><span class="val">${key === 'g' ? s.a + ' asist.' : s.g + ' goles'}</span><span class="ovr">${s[key]}</span></button>`; };
    html += `<div class="grid"><section class="panel"><h3>Goleadores</h3><div class="rows">${ent.sort((a, b) => b[1].g - a[1].g || b[1].a - a[1].a).slice(0, 15).map((e, k) => row(e, k, 'g')).join('') || '<p class="mute">Aún no hay goles.</p>'}</div></section>
    <section class="panel"><h3>Asistentes</h3><div class="rows">${ent.sort((a, b) => b[1].a - a[1].a || b[1].g - a[1].g).filter(e => e[1].a).slice(0, 15).map((e, k) => row(e, k, 'a')).join('') || '<p class="mute">Aún no hay asistencias.</p>'}</div></section></div>`;
  } else if (S.lsub === 'copa') {
    html += cupView();
  } else if (S.lsub === 'champions') {
    html += clView();
  } else if (S.lsub === 'muro') {
    html += muroHTML(50);
  } else if (S.lsub === 'clubes') {
    html += `<section class="panel"><div class="teams">${D.teams.map(t => { const avg = Math.round(t.squad.reduce((a, id) => a + ovrOf(id, t), 0) / t.squad.length); return `<div class="tm">${crest(t, 40)}<div><b>${esc(t.name)}</b><div class="small mute">${t.owner ? esc(t.owner === S.me ? 'Tú' : mgrName(t.owner)) : 'IA'} · media ${avg}</div></div><button class="btn sm ghost" data-act="seeteam" data-arg="${t.id}">Ver</button></div>`; }).join('')}</div></section>`;
  } else html += `<section class="panel"><div class="comph">${compLogo('liga', 56)}<div><h3>${esc(S.cfg.name)}</h3><small class="mute">Temporada ${D.Sx} · jornada ${Math.min(D.revealed.length, D.total)} de ${D.total}</small></div></div>${tableHTML(D.table, false)}<p class="small mute" style="margin-top:10px">Premio final: de ${money(E.prize(0, D.n))} al campeón a ${money(E.prize(D.n - 1, D.n))} al último.</p></section>`;
  return html;
}

/* ---------- mercado ---------- */
function canAfford(price) { return D.fin(D.myIdx).cash >= price; }
function marketView() {
  if (!D.my) return pickTeamView();
  const subs = [['subastas', 'Subastas'], ['libres', 'Libres'], ['equipos', 'Rivales'], ['ofertas', 'Ofertas']];
  let html = `<div class="sub">${subs.map(([k, l]) => `<button data-act="msub" data-arg="${k}" aria-pressed="${S.msub === k}">${l}</button>`).join('')}</div>`;
  if (S.msub === 'subastas') {
    html += auctionsView();
  } else if (S.msub === 'equipos') {
    const others = D.teams.filter(t => t.id !== D.my.id), t = others.find(x => x.id === S.otherTeam) || others[0];
    html += `<section class="panel"><label class="f">Equipo<select id="m-team" data-chg="mteam">${others.map(x => `<option value="${x.id}" ${x === t ? 'selected' : ''}>${esc(x.name)}${x.owner ? '' : ' (IA)'}</option>`).join('')}</select></label>
    <p class="small mute" style="margin:10px 0">${t.owner ? 'Equipo de un amigo: le mandas una oferta y él decide.' : 'Equipo de la IA: vende si pagas un 35% más de lo que vale el jugador.'}</p>${squadList(t)}</section>`;
  } else if (S.msub === 'ofertas') {
    const offs = Object.values(S.offers).sort((a, b) => b.t - a.t);
    const rec = offs.filter(o => o.to === D.my.id), sent = offs.filter(o => o.from === D.my.id);
    const li = (o, mine) => { const p = E.player(o.pid), other = S.teams[mine ? o.to : o.from]; const exp = o.ai && o.status === 'pend' && Date.now() > o.exp, stt = exp ? 'Caducada' : { pend: 'Pendiente', ok: 'Aceptada', no: 'Rechazada' }[o.status] + (o.ai ? ' · IA' : ''); return `<div class="prow" style="cursor:default"><span class="pos ${lineOf(p.pos)}">${p.pos}</span><span class="pname">${esc(p.name)}<small>${mine ? 'A' : 'De'} ${esc(other?.name || '?')} · ${stt}</small></span><span class="val">${money(o.price)}</span><span>${o.status === 'pend' && !exp ? (mine ? `<button class="btn sm ghost" data-act="offcancel" data-arg="${o.id}">Retirar</button>` : `<button class="btn sm" data-act="offok" data-arg="${o.id}">Aceptar</button> <button class="btn sm ghost" data-act="offno" data-arg="${o.id}">No</button>`) : ''}</span></div>`; };
    html += `<div class="grid"><section class="panel"><h3>Recibidas</h3><div class="rows">${rec.map(o => li(o, false)).join('') || '<p class="mute">Nadie ha pujado por tus jugadores todavía.</p>'}</div></section><section class="panel"><h3>Enviadas</h3><div class="rows">${sent.map(o => li(o, true)).join('') || '<p class="mute">No has enviado ofertas.</p>'}</div></section></div>`;
  } else {
    let ids = E.freeAgents(D.owned);
    if (S.fpos) ids = ids.filter(id => E.player(id).pos === S.fpos);
    if (S.q) { const q = S.q.toLowerCase(); ids = ids.filter(id => E.player(id).name.toLowerCase().includes(q)); }
    const sorters = { ovr: (a, b) => ovrOf(b) - ovrOf(a), precio: (a, b) => E.pval(a, D.Sx, 0) - E.pval(b, D.Sx, 0), edad: (a, b) => E.age(E.player(a), D.Sx) - E.age(E.player(b), D.Sx) };
    ids.sort(sorters[S.sort] || sorters.ovr);
    html += `<section class="panel"><div class="fields" style="margin-bottom:10px"><label class="f">Buscar<input type="text" id="m-q" data-inp="q" value="${esc(S.q)}" placeholder="Nombre"></label><label class="f">Posición<select id="m-pos" data-chg="fpos"><option value="">Todas</option>${E.POS.map(p => `<option ${p === S.fpos ? 'selected' : ''}>${p}</option>`).join('')}</select></label><label class="f">Ordenar<select id="m-sort" data-chg="sort">${[['ovr', 'Media'], ['precio', 'Precio'], ['edad', 'Edad']].map(([k, l]) => `<option value="${k}" ${k === S.sort ? 'selected' : ''}>${l}</option>`).join('')}</select></label></div>
    <p class="small mute">${ids.length} jugadores sin equipo. Fichar cuesta su valor de mercado. Tienes ${money(D.fin(D.myIdx).cash)} y ${D.my.squad.length}/${SQ_MAX} en plantilla.</p><div class="rows">${ids.slice(0, 60).map(id => playerRow(id, null)).join('') || '<p class="mute">Nadie con ese filtro.</p>'}</div></section>`;
  }
  return html;
}

/* ---------- club ---------- */
function clubView() {
  if (!D.my) return pickTeamView() + adminPanel();
  const t = D.my, f = D.fin(D.myIdx), lvl = E.stLvl(t), nextL = E.STADIUM[(t.stadium || 0) + 1], tok = D.tok(D.myIdx), fans = D.fans(D.myIdx);
  const sub = S.csub || 'eco';
  const subs = [['eco', 'Finanzas'], ['inst', 'Estadio'], ['vit', 'Vitrina'], ['tok', 'Tokens'], ['club', 'Mi club']];
  let html = `<div class="sub">${subs.map(([k, l]) => `<button data-act="csub" data-arg="${k}" aria-pressed="${sub === k}">${l}</button>`).join('')}</div>`;
  if (sub === 'eco') {
    const led = (t.ledger || []).slice(-8).reverse();
    const lastHome = [...D.all].reverse().map(d => d.m.find(m => m.h === D.myIdx)).find(Boolean);
    const bd = lastHome && lastHome.fin[0].d;
    const offers = E.sponsorOffers(t, D.Sx, fans), sp = t.spon && t.spon.s === D.Sx ? t.spon : null;
    html += `<div class="grid"><div class="stackp"><section class="panel"><div class="ph"><h3>Caja</h3><span class="big ${f.cash < 0 ? 'neg-amt' : ''}">${money(f.cash)}</span></div>
    <div class="kv"><div><b class="pos-amt">+${money(f.inc)}</b><span>Ingresos de partidos</span></div><div><b class="neg-amt">−${money(f.wage)}</b><span>Salarios y mantenimiento</span></div><div><b>${f.prizes ? '+' + money(f.prizes) : money(0)}</b><span>Premios de liga</span></div><div><b class="${f.ledger < 0 ? 'neg-amt' : 'pos-amt'}">${money(f.ledger)}</b><span>Fichajes y obras</span></div></div>
    ${bd ? `<h3 style="margin-top:16px">Último partido en casa</h3><ul class="ledger">${[['Entradas', bd.tix], ['Bares', bd.bar], ['Aparcamiento', bd.park], ['Merchandising', bd.merch], ['Patrocinio', bd.spon], ['Televisión', bd.tv], ['Prima del partido', bd.prz]].map(([l, v]) => `<li><span>${l}</span><b class="pos-amt">+${money(v || 0)}</b></li>`).join('')}<li><span>${(lastHome.att || 0).toLocaleString('es-ES')} espectadores</span><b></b></li></ul>` : ''}
    ${led.length ? `<h3 style="margin-top:16px">Movimientos</h3><ul class="ledger">${led.map(x => `<li><span>${esc(x.why)}</span><b class="${x.amt < 0 ? 'neg-amt' : 'pos-amt'}">${x.amt > 0 ? '+' : ''}${money(x.amt)}</b></li>`).join('')}</ul>` : ''}</section></div>
    <div class="stackp"><section class="panel"><h3>Patrocinador de la temporada ${D.Sx}</h3>
    ${sp ? `<div class="kv" style="margin-top:10px"><div><b>${esc(sp.name)}</b><span>${esc(sp.tipo)}</span></div><div><b>${money(sp.pm)}</b><span>Por partido</span></div><div><b>${money(sp.pw)}</b><span>Extra por victoria</span></div></div>` :
    `<p class="small mute">Elige un contrato. Dura toda la temporada.</p><div class="rows">${offers.map(o => `<div class="prow" style="cursor:default"><span class="pos M">${esc(o.tipo.slice(0, 3))}</span><span class="pname">${esc(o.name)}<small>${money(o.pm)} por partido${o.pw ? ' + ' + money(o.pw) + ' por victoria' : ''}</small></span><span></span><button class="btn sm" data-act="sponsor" data-arg="${o.id}">Firmar</button></div>`).join('')}</div>`}</section>
    <section class="panel"><h3>Aficionados</h3><div class="kv" style="margin-top:10px"><div><b>${fans.toLocaleString('es-ES')}</b><span>Socios y seguidores</span></div><div><b>${t.squad.filter(id => ovrOf(id, t) >= 85).length}</b><span>Estrellas (85+): venden más camisetas</span></div></div><p class="small mute" style="margin-top:8px">Ganar atrae aficionados; perder los aleja. Más aficionados llenan el estadio y compran en la tienda.</p></section></div></div>`;
  } else if (sub === 'inst') {
    const now = Date.now(), b = t.build && t.build.done > now ? t.build : null, fair = E.STADIUM[lvl].fair, price = t.price || fair;
    const eco = E.ecoOf(D.myIdx, { ...t, price }, D.all, D.Sx), est = E.matchIncome(eco, true, .5, false, false, .5);
    const SL = E.STADIUM[lvl], stB = b && b.k === 'stadium', full = fans * .85 > SL.cap;
    const bName = b ? (b.k === 'stadium' ? E.STADIUM[b.lvl].n : E.FAC[b.k].n + ' · nivel ' + b.lvl) : '';
    html += `<div class="grid"><div class="stackp"><section class="panel">
    <div class="stad ${stB ? 'build' : ''}" style="background-image:url(img/estadio/l${lvl}.webp)">${stB ? `<span class="crane">En obras · ${cdText(b.done)}</span>` : ''}<div class="cap"><b>${esc(SL.n)}</b><span>${SL.cap.toLocaleString('es-ES')} asientos</span></div></div>
    <div class="ladder" aria-label="Nivel ${lvl + 1} de ${E.STADIUM.length}">${E.STADIUM.map((x, i) => `<i class="${i <= lvl ? 'on' : stB && i === b.lvl ? 'wip' : ''}"></i>`).join('')}</div>
    <div class="fanbar"><b>${fans.toLocaleString('es-ES')}</b><span class="mute">aficionados${full ? ' · se te queda gente fuera: toca ampliar' : ''}</span></div>
    ${b ? `<p class="note" style="margin-top:12px">En obras: <b>${esc(bName)}</b>. Termina ${cdText(b.done)}. <button class="btn sm y" data-act="finishbuild">Terminar ya · ${Math.ceil((b.done - now) / 43200000) * 2} ${IC.gem}</button></p>` : ''}
    ${nextL ? `<div class="prow" style="cursor:default;grid-template-columns:minmax(0,1fr) auto;margin-top:8px;border-top:1px solid var(--line)"><span class="pname" style="white-space:normal">Siguiente: ${esc(nextL.n)}<small style="white-space:normal">${esc(nextL.d)} ${nextL.cap.toLocaleString('es-ES')} asientos · ${nextL.h} h de obra</small></span><button class="btn" data-act="stadium" ${b || !canAfford(nextL.cost) ? 'disabled' : ''}>${IC.build}${money(nextL.cost)}</button></div>` : '<p class="mute">Estadio al máximo.</p>'}
    </section>
    <section class="panel"><h3>Precio de la entrada</h3><div class="price"><input type="range" id="c-price" min="5" max="150" step="1" value="${price}" data-chg="price" aria-label="Precio de la entrada"><b>${price} €</b></div>
    <p class="small mute">Precio justo para tu estadio: <b>${fair} €</b>. Con ${price} € esperas <b>${est.att.toLocaleString('es-ES')}</b> espectadores y <b>${money(est.d.tix + est.d.bar + est.d.park)}</b> entre taquilla, bares y parking por partido en casa.</p></section></div>
    <div class="stackp"><section class="panel"><h3>Instalaciones</h3><div class="facs">${Object.entries(E.FAC).map(([k, F]) => { const l = (t.fac || {})[k] || 0, act = E.facLvl(t, k), cost = F.cost[l], wip = b && b.k === k; return `<div class="facc"><div class="im" style="background-image:url(img/inst/${k}${act >= 3 ? '' : '1'}.webp);${act ? '' : 'filter:grayscale(1) brightness(.45)'}">${wip ? `<span class="crane" style="position:absolute;top:8px;left:8px;background:var(--tape);color:var(--tape-ink);font-family:var(--disp);font-weight:900;padding:1px 8px;text-transform:uppercase">En obras</span>` : ''}</div><div class="bd"><b>${esc(F.n)}</b><span class="pips" aria-label="Nivel ${act} de 4">${[1, 2, 3, 4].map(n => `<i class="${n <= act ? 'on' : ''}"></i>`).join('')}</span><p>${esc(F.d)}</p><div class="row2">${l < 4 ? `<span class="small mute">Nivel ${l + 1} · ${12 * (l + 1)} h</span><button class="btn sm" data-act="build" data-arg="${k}" ${b || !canAfford(cost) ? 'disabled' : ''}>${money(cost)}</button>` : '<span class="tag sus">Máximo</span>'}</div></div></div>`; }).join('')}</div></section></div></div>`;
  } else if (sub === 'vit') {
    html += vitrinaHTML(D.myIdx);
  } else if (sub === 'tok') {
    const d = t.daily || {}, todayK = today(), claimed = d.d === todayK, streak = d.d === yesterday() ? (d.streak || 0) + 1 : 1;
    const shop = [['Forma al 100%', '2 ' + IC.gem, 'En la ficha del jugador'], ['Curar una lesión', '4 ' + IC.gem, 'En la ficha del jugador'], ['Entreno extra', '2 ' + IC.gem, 'En Equipo · Entreno'], ['Ojeador premium', '3 ' + IC.gem, 'En Club · Mi club'], ['Terminar obras', '2 ' + IC.gem + ' / 12 h', 'En Club · Estadio']];
    html += `<div class="grid"><section class="panel"><div class="ph"><h3>Tus tokens</h3><span class="big">${tok}</span></div><ul class="facts"><li>+2 por victoria</li><li>+1 por empate</li><li>+20 por ganar la liga</li><li>Premio diario</li></ul>
    <button class="btn y" data-act="daily" ${claimed ? 'disabled' : ''}>${claimed ? 'Premio de hoy recogido' : `Recoger premio diario · +${Math.min(5, streak)}`}</button>${!claimed && streak > 1 ? `<p class="small mute">Racha de ${streak} días seguidos.</p>` : ''}</section>
    <section class="panel"><h3>En qué gastarlos</h3><ul class="ledger">${shop.map(([a, b2, c]) => `<li><span><b>${a}</b><br><span class="small mute">${c}</span></span><b class="tk">${b2}</b></li>`).join('')}</ul></section></div>`;
  } else {
    html += `<div class="grid"><div class="stackp"><section class="panel"><h3>Ojeador</h3><ul class="facts"><li>Promesa de 17-19 años</li><li>1 al día · ${money(SCOUT_COST)}</li><li>Cantera nivel ${E.facLvl(t, 'can')}</li></ul><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="scout" ${t.lastScout === today() || !canAfford(SCOUT_COST) || t.squad.length >= SQ_MAX ? 'disabled' : ''}>${t.lastScout === today() ? 'Ya buscó hoy' : 'Enviar al ojeador'}</button><button class="btn y" data-act="scout" data-arg="p" ${t.lastScout === today() || !canAfford(SCOUT_COST) || t.squad.length >= SQ_MAX || tok < 3 ? 'disabled' : ''}>Premium · 3 tokens</button></div></section>
    <section class="panel"><h3>Tu club</h3><div class="fields" style="margin-top:10px"><label class="f">Nombre<input type="text" id="c-name" maxlength="24" value="${esc(t.name)}"></label><label class="f">Siglas<input type="text" id="c-short" maxlength="3" value="${esc(t.short)}"></label></div>
    <div class="grp">Colores</div><div class="colors">${COLORS.map((c, i) => `<button data-act="color" data-arg="${i}" aria-pressed="${c[0] === t.colors[0] && c[1] === t.colors[1]}" aria-label="Colores ${i + 1}" style="background:linear-gradient(135deg,${c[0]} 55%,${c[1]} 55%)"></button>`).join('')}</div>
    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="saveclub">Guardar</button><button class="btn ghost" data-act="leave">Dejar el equipo a la IA</button></div></section>
    <section class="panel"><h3>¿Cómo se juega?</h3><p class="small mute">Repasa en un minuto lo básico: horarios, directo, alineación, mercado y club.</p><button class="btn" data-act="tutoagain">Ver el tutorial</button></section>${webPanel()}</div><div class="stackp">${adminPanel()}</div></div>`;
  }
  return html;
}
function yesterday() { const d = new Date(Date.now() - DAY); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
const tokAdd = (t, n, why) => [...(t.tok || []), { n, why, d: Date.now() }].slice(-200);
function spendTok(n, why, patch) { const t = D.my; if (D.tok(D.myIdx) < n) { toast('No tienes tokens suficientes'); return null; } return saveTeam(t.id, { ...patch, tok: tokAdd(t, -n, why) }); }
/* ---------- versión web (Firebase): código de la liga ---------- */
const WEB = () => window.LIGA_WEB || null;
function webPanel() {
  const w = WEB(); if (!w) return '';
  return `<section class="panel"><h3>Código de la liga</h3><div class="code-big" aria-label="Código ${esc(w.code.split('').join(' '))}">${esc(w.code)}</div><p class="small mute">Pásaselo a tus amigos: entran en <b>${esc(w.host)}</b>, inician sesión y escriben este código. Cada uno coge un equipo libre.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn y" data-act="webshare">Invitar amigos</button><button class="btn ghost" data-act="webswitch">Mis ligas</button><button class="btn ghost" data-act="weblogout">Cerrar sesión</button></div></section>`;
}
function adminPanel() {
  if (!S.owner || !D) return '';
  const nextMd = D.nextMd, humans = D.teams.filter(t => t.owner);
  return `<section class="panel"><h3>Ajustes de la liga</h3><p class="small mute">Solo lo ves tú, como creador.${WEB() ? ' Para invitar, usa el código de la liga.</p><p hidden>' : ''} Para invitar a un amigo: botón Compartir de esta página → escribe su email → acceso «puede editar» → Invitar. Necesita cuenta de Claude con ese mismo email (la gratuita vale). Al entrar, elige un equipo libre y le sale el tutorial.</p>
  ${!D.done && nextMd <= D.total ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0"><button class="btn y" data-act="force" data-arg="live">Jugar jornada ${nextMd} ya (con directo)</button><button class="btn ghost" data-act="force" data-arg="now">Jugar jornada ${nextMd} sin directo</button></div><p class="small mute">El resto del calendario se mantiene: un partido al día a las ${esc(S.cfg.hour)}.</p>` : ''}
  ${D.done ? `<button class="btn y" data-act="newseason">Empezar temporada ${D.Sx + 1}</button><p class="small mute">Empieza mañana a las ${esc(S.cfg.hour)}. Se reparten los premios y los jugadores cumplen un año.</p>` : ''}
  ${humans.length ? `<div class="grp">Mánagers</div><ul class="ledger">${humans.map(t => `<li><span>${esc(t.name)} · ${esc(t.owner === S.me ? 'Tú' : mgrName(t.owner))}</span>${t.owner !== S.me ? `<button class="btn sm ghost" data-act="kick" data-arg="${t.id}">Pasar a IA</button>` : ''}</li>`).join('')}</ul>` : ''}
  <div style="margin-top:14px"><button class="btn red" data-act="askwipe">Borrar liga y empezar de cero</button></div></section>`;
}

/* ---------- modales ---------- */
/* ---------- tutorial de bienvenida ---------- */
const hhmm = t => new Date(t).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
function tutoSteps() {
  const my = D.my, lg = hhmm(kickAt(1)), cp = hhmm(kickAt(1) + CUP_OFF()), fans = D.fans(D.myIdx).toLocaleString('es-ES'), cap = E.STADIUM[0].cap.toLocaleString('es-ES');
  const rivals = D.teams.filter(t => t.owner && t.id !== my.id).length, pres = Math.round(E.PRES_P * 100);
  return [
    { img: 'img/estadio/l0.webp', k: 'Bienvenido, míster', t: `El ${esc(my.name)} es tuyo`, d: `Empiezas desde abajo: un campo de regional para ${cap} personas y ${fans} aficionados. El objetivo es ganar la liga a tus amigos${rivals ? ` (${rivals} ya ${rivals > 1 ? 'están' : 'está'} dentro)` : ''} y convertir esto en un estadio de Champions.` },
    { img: 'img/stadium.webp', nav: 'inicio', k: 'Un partido al día', t: `Liga cada día a las ${lg}`, d: `Copa y Champions van en días alternos a las ${cp}. Si no te conectas, tu equipo juega igual con tu última alineación, así que nunca pierdes un partido por no estar.` },
    { img: 'img/grada.webp', nav: 'inicio', k: 'En directo y a la vez', t: 'Todos veis el mismo partido', d: `Dura ${Math.round(LIVE / 60000)} minutos y nadie puede adelantarlo: el resultado se decide mientras se juega. Si lo ves en directo, tu equipo tiene <b>+${pres}% de posesión</b>, y jugar en casa también suma. Desde ahí cambias táctica y haces cambios.` },
    { img: 'img/vestuario.webp', nav: 'equipo', k: 'Alineación', t: 'Elige once, formación y táctica', d: 'En Equipo colocas a tus jugadores en la pizarra. Cada partido les quita en torno a un 25% de forma y recuperan un 18% al día: si no rotas, llegan fundidos al final de temporada.' },
    { img: 'img/entreno.webp', nav: 'equipo', k: 'Entreno y cantera', t: 'Hazlos mejores cada día', d: 'Un entrenamiento diario da experiencia y sube la media. El ojeador de la cantera te trae promesas jóvenes que pueden acabar siendo estrellas.' },
    { img: 'img/despacho.webp', nav: 'mercado', k: 'Mercado', t: 'Subastas, libres y ofertas', d: 'Puja en las subastas diarias, ficha jugadores libres o roba a tus amigos. Los clubes de la IA también harán ofertas por tus estrellas: tú decides si vendes.' },
    { img: 'img/estadio/l3.webp', nav: 'club', k: 'Tu club', t: 'Estadio, entradas e instalaciones', d: 'Amplía el estadio, ajusta el precio de la entrada (caro = menos gente) y construye tienda, bares, centro médico o ciudad deportiva. Los tokens sirven para curar lesiones y recuperar forma.' },
    { img: 'img/premios/derbi.webp', nav: 'liga', k: 'Entre amigos', t: 'Derbis, muro y vitrina', d: 'Ganar a un amigo da prima doble y el doble de tokens. Picaos en el muro de la liga, cumple el objetivo de la directiva y llena tu vitrina de trofeos.', last: true }
  ];
}
function tutoHTML(i) {
  const st = tutoSteps(), x = st[i];
  return `<div class="tuto-ov" role="dialog" aria-modal="true" aria-labelledby="tuto-t"><div class="tuto-card">
    <div class="tuto-img" style="background-image:url('${x.img}')"><span class="tuto-k">${x.k}</span></div>
    <div class="tuto-b"><h2 id="tuto-t">${x.t}</h2><p>${x.d}</p>
    <div class="tuto-dots" aria-label="Paso ${i + 1} de ${st.length}">${st.map((_, j) => `<i class="${j === i ? 'on' : j < i ? 'done' : ''}"></i>`).join('')}</div>
    <div class="tuto-a">${i ? `<button class="btn ghost" data-act="tuto" data-arg="${i - 1}">Atrás</button>` : `<button class="btn ghost" data-act="tutoend" data-arg="skip">Saltar</button>`}
    ${x.last ? `<button class="btn y" data-act="tutoend" data-arg="club">Personalizar mi club</button>` : `<button class="btn y" data-act="tuto" data-arg="${i + 1}">Siguiente</button>`}</div></div></div></div>`;
}
function maybeTuto() {
  if (!D || !D.my || D.my.tuto || S.tutoSeen || S.modal || VW) return;
  S.tutoSeen = true; S.modal = { type: 'tuto', i: 0 };
}
function modal() {
  const m = S.modal; document.body.dataset.tutonav = m && m.type === 'tuto' ? (tutoSteps()[m.i].nav || '') : ''; if (!m) return '';
  if (m.type === 'tuto') return tutoHTML(m.i);
  let inner = '';
  if (m.type === 'player') inner = playerModal(m.id);
  if (m.type === 'confirm') inner = `<h2>${esc(m.title)}</h2><p>${esc(m.text)}</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ${m.danger ? 'red' : 'y'}" data-act="confirm">${esc(m.ok || 'Confirmar')}</button><button class="btn ghost" data-act="close">Cancelar</button></div>`;
  if (m.type === 'team') { const t = S.teams[m.id]; inner = `<div class="ph" style="margin-right:48px"><h2>${esc(t.name)}</h2>${crest(t, 48)}</div><p class="mute small">${t.owner ? esc(mgrName(t.owner)) : 'Equipo de la IA'} · ${esc(E.STADIUM[E.stLvl(t)].n).toLowerCase()} de ${E.STADIUM[E.stLvl(t)].cap.toLocaleString('es-ES')} asientos</p>${squadList(t)}`; }
  if (m.type === 'offer') { const p = E.player(m.id); inner = `<h2>Oferta por ${esc(p.name)}</h2><p class="mute">Valor de mercado ${money(m.val)}. Tienes ${money(D.fin(D.myIdx).cash)}.</p><label class="f">Tu oferta (M€)<input type="number" id="o-price" min="0.1" step="0.1" value="${m.val}"></label><div style="display:flex;gap:8px;margin-top:12px"><button class="btn y" data-act="sendoffer" data-arg="${m.id}">Enviar oferta</button><button class="btn ghost" data-act="close">Cancelar</button></div>`; }
  if (m.type === 'friendly') {
    let v = '3d'; try { v = localStorage.getItem('mv-view') || '3d'; } catch (e) {}
    inner = `<h2>Partido amistoso</h2><p class="mute">Se simula al momento con tu alineación y tu táctica guardadas. No cuenta para la liga, no cansa ni lesiona a nadie, y no lo ve nadie más.</p>
    <label class="f">Rival<select id="f-rival">${D.teams.filter(t => t.id !== D.my.id).map(t => `<option value="${t.idx}">${esc(t.name)}${t.owner ? '' : ' (IA)'}</option>`).join('')}</select></label>
    <div class="fields" style="margin:12px 0"><label class="f">Vista<select id="f-view"><option value="3d" ${v === '3d' ? 'selected' : ''}>3D estadio</option><option value="2d" ${v === '2d' ? 'selected' : ''}>2D campo</option></select></label>
    <label class="f">Ritmo<select id="f-speed"><option value="1">Ritmo de directo (${Math.round(LIVE / 60000)} min)</option><option value="4">Rápido x4 (1 min)</option><option value="h">Solo las jugadas</option></select></label></div>
    <button class="btn y" data-act="playfriendly">${IC.play}Jugar amistoso</button>`;
  }
  return `<div class="ov" data-act="ovclose"><div class="sheet" role="dialog" aria-modal="true"><button class="x" data-act="close" aria-label="Cerrar">${IC.x}</button>${inner}</div></div>`;
}
function playerModal(id) {
  const p = E.player(id), own = ownerOf(id), mine = own && D.my && own.id === D.my.id, o = ovrOf(id, own), a = E.age(p, D.Sx), v = E.value(o, a), st = D.stats[id] || {}, ss = own ? status(id) : null;
  let acts = '';
  if (D.my && !own) acts = `<button class="btn y" data-act="buyfree" data-arg="${id}" ${canAfford(v) && D.my.squad.length < SQ_MAX ? '' : 'disabled'}>Fichar por ${money(v)}</button>`;
  else if (D.my && own && !mine) acts = own.owner ? `<button class="btn y" data-act="offer" data-arg="${id}">Hacer oferta</button>` : `<button class="btn y" data-act="buyai" data-arg="${id}" ${canAfford(E.r1(v * 1.35)) && D.my.squad.length < SQ_MAX && own.squad.length > 17 ? '' : 'disabled'}>Comprar por ${money(E.r1(v * 1.35))}</button>${own.squad.length <= 17 ? '<p class="small mute">La IA no vende: se quedaría corta de plantilla.</p>' : ''}`;
  else if (mine) acts = `${ss && ss.why === 'Lesión' ? `<button class="btn y" data-act="heal" data-arg="${id}">Curar · 4 tokens</button>` : ''}${!ss && cond(id) < 100 ? `<button class="btn y" data-act="boost" data-arg="${id}">Forma al 100% · 2 tokens</button>` : ''}<button class="btn" data-act="auction" data-arg="${id}" ${D.my.squad.length > SQ_MIN ? '' : 'disabled'}>Subastar 30 min</button><button class="btn ghost" data-act="release" data-arg="${id}" ${D.my.squad.length > SQ_MIN ? '' : 'disabled'}>Liberar y cobrar ${money(E.r1(v * .5))}</button>`;
  const cols = own ? own.colors : ['#5b6b94', '#ffffff'];
  return `<div class="pcard">${shirt(p.pos === 'POR' && own ? '#facc15' : cols[0], p.pos === 'POR' && own ? '#111111' : cols[1], '', 70)}<div style="flex:1"><h2>${esc(p.name)}</h2><div class="mute"><span class="pos ${lineOf(p.pos)}">${p.pos}</span> ${p.nat} · ${a} años · ${own ? esc(own.name) : 'Sin equipo'}</div><div style="margin-top:4px">${stars(o)}</div></div><span class="ovr">${o}</span></div>
  ${ss ? `<p class="note bad">${ss.why}: ${ss.n} jornada${ss.n > 1 ? 's' : ''} más.</p>` : ''}
  <div class="attrs">${(() => { const at = E.attrs(id, o), ks = p.pos === 'POR' ? ['por', 'fis', 'pas', 'vel'] : E.ATR; return ks.map(k => `<div><span>${E.ATR_N[k]}</span><span class="ab"><i style="width:${at[k]}%;background:${at[k] >= 85 ? 'var(--good)' : at[k] >= 70 ? 'var(--gold)' : 'var(--warn)'}"></i></span><b>${at[k]}</b></div>`).join(''); })()}</div>
  <div class="kv" style="margin:14px 0"><div><b>${money(v)}</b><span>Valor</span></div><div><b>${moneyK(E.wage(v))}</b><span>Salario por jornada</span></div><div><b>~${Math.round(Math.min(95, Math.max(p.base, E.pot(p))))}</b><span>Techo estimado</span></div><div><b>${own ? cond(id) + '%' : '100%'}</b><span>Forma</span></div><div><b>${st.apps || 0}</b><span>Partidos</span></div><div><b>${st.g || 0} / ${st.a || 0}</b><span>Goles / asist.</span></div><div><b>${st.apps ? (st.rs / st.apps).toFixed(1) : '–'}</b><span>Nota media</span></div></div>
  <div style="display:flex;gap:8px;flex-wrap:wrap">${acts}</div>`;
}
let VW = null;
let opener = null;
function trapTab(e, box) { if (e.key !== 'Tab') return; const f = [...box.querySelectorAll('button:not([disabled]),input,select,[tabindex="0"]')].filter(x => x.offsetParent); if (!f.length) return; const first = f[0], lastEl = f[f.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); } else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); } }

/* panel al acabar un partido: resultado, mejor jugador y, si es tu partido de liga, dinero, tokens y aficionados */
function endSummary(kind, doc, extra) {
  return m => {
    const H = teamByIdx(m.h), A = teamByIdx(m.a), my = D && D.my ? D.myIdx : -1, side = m.h === my ? 0 : m.a === my ? 1 : -1;
    const me = side < 0 ? null : side ? m.ag : m.hg, op = side < 0 ? null : side ? m.hg : m.ag;
    let pens = extra && extra.pens; const res = side < 0 ? 'Final' : me > op ? '¡Victoria!' : me < op ? (pens && (side ? pens[1] > pens[0] : pens[0] > pens[1]) ? '¡Pasáis por penaltis!' : 'Derrota') : pens ? ((side ? pens[1] > pens[0] : pens[0] > pens[1]) ? '¡Pasáis por penaltis!' : 'Fuera por penaltis') : 'Empate';
    const mvp = m.mvp ? E.player(m.mvp) : null, rt = m.mvp && m.rat ? m.rat[m.mvp] : null;
    const lg = kind === 'cup' ? 'copa' : kind === 'cl' ? 'champions' : kind === 'league' ? 'liga' : null;
    let h = `${lg ? `<div class="mv-endl0">${compLogo(lg, 52)}</div>` : ''}<h3 class="mv-endt">${res}</h3><div class="mv-ends">${crest(H, 40)}<b>${m.hg}-${m.ag}</b>${crest(A, 40)}</div>${pens ? `<p class="mv-endp">Penaltis ${pens[0]}-${pens[1]}</p>` : ''}`;
    if (mvp) h += `<p class="mv-endp">Mejor jugador: <b>${esc(mvp.name)}</b>${rt ? ` · ${(+rt).toFixed(1)}` : ''}</p>`;
    if (kind === 'friendly') return h + `<p class="mv-endn">Amistoso: no da dinero, tokens ni aficionados. Sirve para probar alineaciones y tácticas.</p>`;
    if (side < 0) return h;
    if (kind === 'cup') return h + `<p class="mv-endn">En la copa no hay taquilla ni tokens: el campeón se lleva ${money(12)} y el finalista ${money(5)}.</p>`;
    if (kind === 'cl') { const won = me > op || (pens && (side ? pens[1] > pens[0] : pens[0] > pens[1])); return h + (extra && extra.final ? `<p class="mv-endn">${won ? `¡Campeones de la Champions! +${money(CL_PRIZE.champ + CL_PRIZE.win)} y +${CL_TOK.champ + CL_TOK.win} tokens.` : `Subcampeones: +${money(CL_PRIZE.final)}.`}</p>` : `<div class="mv-endk"><span>${IC.gem}<b>+${won ? CL_TOK.win : 0}</b> tokens</span><span><b class="pos-amt">+${money(won ? CL_PRIZE.win : 0)}</b> premio</span></div>`); }
    const f = m.fin && m.fin[side]; if (!f) return h;
    const d = f.d || {}, rows = [['Entradas' + (f.att ? ` · ${f.att.toLocaleString('es-ES')} espectadores` : ''), d.tix], ['Bares y restaurantes', d.bar], ['Aparcamiento', d.park], ['Tienda y camisetas', d.merch], ['Patrocinador', d.spon], ['Televisión', d.tv], ['Prima del partido', d.prz]].filter(x => x[1] > 0);
    const cost = (f.wage || 0) + (f.mant || 0), net = (f.inc || 0) - cost, tk = me > op ? (m.derby ? 4 : 2) : me === op ? 1 : 0;
    if (m.derby) h += `<p class="mv-endn"><b class="derby">Derbi</b> ${me > op ? 'ganado: prima doble y tokens dobles.' : 'entre amigos: el ganador cobra prima doble y tokens dobles.'}</p>`;
    const before = D.all.filter(x => x.season < doc.season || (x.season === doc.season && x.md < doc.md)), team = teamByIdx(my);
    const fansGain = E.fansOf(my, team, [...before, { m: [m] }]) - E.fansOf(my, team, before);
    h += `<ul class="ledger mv-endl">${rows.map(([l, v]) => `<li><span>${l}</span><b class="pos-amt">+${money(v)}</b></li>`).join('')}<li><span>Sueldos y mantenimiento</span><b class="neg-amt">−${money(cost)}</b></li><li class="tot"><span>Balance del partido</span><b class="${net < 0 ? 'neg-amt' : 'pos-amt'}">${net < 0 ? '−' : '+'}${money(Math.abs(net))}</b></li></ul>
    <div class="mv-endk"><span>${IC.gem}<b>+${tk}</b> tokens</span><span><b class="${fansGain < 0 ? 'neg-amt' : 'pos-amt'}">${fansGain < 0 ? '' : '+'}${fansGain.toLocaleString('es-ES')}</b> aficionados</span></div>`;
    return h;
  };
}
function liveOpts(col, id, doc, k) {
  const m = doc.m[k], live = Date.now() < doc.at + LIVE ? { at: doc.at } : null, mine = !!(D && D.myIdx >= 0 && (m.h === D.myIdx || m.a === D.myIdx));
  const note = !live ? null : () => {
    const now = Date.now(), here = presentTeams(now), mySide = mine ? (m.h === D.myIdx ? 0 : 1) : -1, opp = mySide < 0 ? null : mySide ? m.h : m.a;
    if (mySide < 0) return 'Mismo partido y mismo minuto para todos';
    return `<b>+${Math.round(E.PRES_P * 100)}% posesión</b> mientras lo veas${here.includes(opp) ? ' · tu rival también está conectado' : ''}`;
  };
  return { live, liveNote: note, after: v => { v.key = { col, id, k }; v.sig = null; v.liveMine = !!(live && mine); if (live && mine) presT = 0; } };
}
function openViewer(opts) {
  opener = document.activeElement; closeViewer(true);
  const ov = document.createElement('div'); ov.className = 'mvov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
  ov.innerHTML = `<div class="mvbox"><button class="mvx" aria-label="Cerrar">${IC.x}</button><div class="mvroot"></div></div>`;
  document.body.appendChild(ov); document.body.style.overflow = 'hidden';
  ov.querySelector('.mvx').addEventListener('click', closeViewer);
  const stad = opts.H ? E.stLvl(opts.H) : 3, f0 = opts.match && opts.match.fin && opts.match.fin[0], fill = f0 && f0.att ? f0.att / E.STADIUM[stad].cap : .6;
  VW = window.MV.mount(ov.querySelector('.mvroot'), { stad, fill, ...opts, crest, esc, league: S.cfg.name }); VW.el = ov; if (opts.after) opts.after(VW);
  ov.addEventListener('keydown', e => trapTab(e, ov)); ov.querySelector('.mvx').focus();
}
function closeViewer(silent) { if (!VW) return; VW.destroy(); VW.el.remove(); VW = null; document.body.style.overflow = ''; if (silent === true) return; render(); const back = opener && opener.id ? document.getElementById(opener.id) : null; (back || document.querySelector('nav.tabs [aria-current=true]'))?.focus(); }
/* ---------- acciones de mercado ---------- */
async function lockPlayer(pid) { const l = await S.db.doc('bloqueos/p-' + pid).acquire({ holder: S.me, ttlMs: 10000 }); return l.acquired; }
const ledgerAdd = (t, amt, why) => [...(t.ledger || []), { d: Date.now(), amt: E.r1(amt), why }].slice(-150);
async function buyFree(pid) {
  const v = E.pval(pid, D.Sx, 0), t = D.my;
  if (!canAfford(v) || t.squad.length >= SQ_MAX) return;
  if (!(await lockPlayer(pid))) return toast('Otro mánager está fichándolo ahora mismo');
  if (D.owned.has(pid)) return toast('Ya lo ha fichado otro');
  await saveTeam(t.id, { squad: [...t.squad, pid], ledger: ledgerAdd(t, -v, 'Fichaje: ' + E.player(pid).name) });
  S.modal = null; toast(E.player(pid).name + ' ya es tuyo'); render();
}
function movePlayer(from, to, pid, price) {
  const xpF = { ...(from.xp || {}) }, xpT = { ...(to.xp || {}) }; if (xpF[pid]) { xpT[pid] = xpF[pid]; delete xpF[pid]; }
  const lin = from.lineup ? { ...from.lineup, xi: (from.lineup.xi || []).map(x => x === pid ? null : x), bench: (from.lineup.bench || []).filter(x => x !== pid) } : null;
  const name = E.player(pid).name;
  return Promise.all([
    saveTeam(to.id, { squad: [...to.squad, pid], xp: xpT, ledger: ledgerAdd(to, -price, 'Fichaje: ' + name) }),
    saveTeam(from.id, { squad: from.squad.filter(x => x !== pid), xp: xpF, lineup: lin, ledger: ledgerAdd(from, price, 'Venta: ' + name) })
  ]);
}
async function buyAI(pid) {
  const own = ownerOf(pid), price = E.r1(E.pval(pid, D.Sx, own.xp?.[pid] || 0) * 1.35);
  if (own.owner || !canAfford(price) || own.squad.length <= 17 || D.my.squad.length >= SQ_MAX) return;
  if (!(await lockPlayer(pid))) return toast('Inténtalo en unos segundos');
  await movePlayer(own, D.my, pid, price); S.modal = null; toast('Fichado ' + E.player(pid).name); render();
}
async function release(pid) {
  const t = D.my, v = E.r1(E.pval(pid, D.Sx, t.xp?.[pid] || 0) * .5);
  if (t.squad.length <= SQ_MIN) return;
  const xp = { ...(t.xp || {}) }; delete xp[pid];
  const lin = t.lineup ? { ...t.lineup, xi: (t.lineup.xi || []).map(x => x === pid ? null : x), bench: (t.lineup.bench || []).filter(x => x !== pid) } : null;
  await saveTeam(t.id, { squad: t.squad.filter(x => x !== pid), xp, lineup: lin, ledger: ledgerAdd(t, v, 'Liberado: ' + E.player(pid).name) });
  if (S.lin) { S.lin.xi = S.lin.xi.map(x => x === pid ? null : x); S.lin.bench = S.lin.bench.filter(x => x !== pid); }
  S.modal = null; toast('Jugador liberado'); render();
}
async function sendOffer(pid) {
  const price = E.r1(+$('#o-price').value), own = ownerOf(pid);
  if (!(price > 0)) return toast('Pon una cantidad');
  if (!canAfford(price)) return toast('No te llega el dinero');
  const ref = S.db.collection('ofertas').doc();
  await write('ofertas/' + ref.id, () => ref.set({ id: ref.id, from: D.my.id, to: own.id, pid, price, status: 'pend', t: Date.now() }));
  S.modal = null; toast('Oferta enviada'); render();
}
async function acceptOffer(oid) {
  const o = S.offers[oid]; if (!o) return;
  const from = S.teams[o.to], to = S.teams[o.from];
  if (!from.squad.includes(o.pid)) { await setOffer(oid, 'no'); return toast('Ese jugador ya no está en tu plantilla'); }
  if (from.squad.length <= SQ_MIN) return toast('Te quedarías con menos de ' + SQ_MIN + ' jugadores');
  if (to.squad.length >= SQ_MAX) return toast('El comprador tiene la plantilla llena');
  if (D.fin(to.idx).cash < o.price) return toast('Al comprador no le llega el dinero');
  await movePlayer(from, to, o.pid, o.price); await setOffer(oid, 'ok');
  if (S.lin) { S.lin.xi = S.lin.xi.map(x => x === o.pid ? null : x); S.lin.bench = S.lin.bench.filter(x => x !== o.pid); }
  toast('Traspaso cerrado');
}
const setOffer = (oid, status) => write('ofertas/' + oid, () => S.db.doc('ofertas/' + oid).update({ status }));

/* ---------- acciones ---------- */
function ask(title, text, ok, fn, danger) { S.modal = { type: 'confirm', title, text, ok, fn, danger }; render(); }
const ACT = {
  view: v => { S.view = v; S.sel = null; S.modal = null; render(); window.scrollTo(0, 0); },
  go: a => { const [v, s] = a.split(':'); S.view = v; if (v === 'equipo') S.sub = s; if (v === 'liga') S.lsub = s; if (v === 'mercado') S.msub = s; if (v === 'club') S.csub = s; render(); window.scrollTo(0, 0); },
  sub: v => { S.sub = v; S.sel = null; render(); }, lsub: v => { S.lsub = v; render(); }, msub: v => { S.msub = v; render(); },
  md: v => { S.mdSel = Math.max(1, Math.min(D.total, +v)); render(); },
  claim, player: id => { S.modal = { type: 'player', id }; render(); }, seeteam: id => { S.modal = { type: 'team', id }; render(); },
  match: key => {
    const [ss, md, k] = key.split('-').map(Number), doc = D.all.find(d => d.season === ss && d.md === md); if (!doc) return;
    const m = doc.m[k], lo = liveOpts('jor', 's' + ss + '-m' + md, doc, k), live = lo.live; S.modal = null; render();
    let manage = null;
    if (live && doc.pre && D.my && S.canWrite && (m.h === D.myIdx || m.a === D.myIdx)) {
      const side = m.h === D.myIdx ? 0 : 1, okey = 's' + ss + '-m' + md + '-t' + D.myIdx;
      manage = { side, bench: doc.pre[k].side[side].bench, onOrder: o => { if (Date.now() > doc.at + LIVE) return toast('El partido ya ha terminado'); const cur = S.orders[okey]?.list || []; const nowMin = Math.floor((Date.now() - doc.at) / LIVE * 94) + 1; const ord = { ...o, m: Math.max(o.m, nowMin), t: Date.now() }; write('ordenes/' + okey, () => S.db.doc('ordenes/' + okey).set({ season: ss, md, team: D.myIdx, list: [...cur, ord] })).then(() => toast(o.k === 'sub' ? 'Cambio hecho' : 'Táctica cambiada')); } };
    }
    openViewer({ match: m, H: teamByIdx(m.h), A: teamByIdx(m.a), ...lo, speed: 4, manage, summary: endSummary('league', doc) });
  },
  friendly: () => { S.modal = { type: 'friendly' }; render(); },
  playfriendly: () => { const rival = +$('#f-rival').value, view = $('#f-view').value, sp = $('#f-speed').value; const fr = E.simulateFriendly(S.cfg, D.teams, D.myIdx, rival, D.Sx, D.cur, Date.now() + ':' + Math.random()), ords = []; const m = fr.m; try { localStorage.setItem('mv-view', view); } catch (e) {} S.modal = null; render(); const manage = { side: 0, bench: fr.pre.side[0].bench, onOrder: o => { ords.push({ ...o, s: 0, t: Date.now() }); VW && VW.update(E.resultFromPre(fr.pre, ords)); toast(o.k === 'sub' ? 'Cambio hecho' : 'Táctica cambiada'); } }; openViewer({ match: m, H: teamByIdx(m.h), A: teamByIdx(m.a), live: null, view, speed: sp === 'h' ? 4 : +sp, highlights: sp === 'h', summary: endSummary('friendly'), manage }); },
  close: () => { S.modal = null; S.rp = null; render(); },
  tuto: i => { S.modal = { type: 'tuto', i: +i }; render(); document.querySelector('.tuto-card .btn.y')?.focus(); },
  tutoend: to => { S.modal = null; if (D.my && !D.my.tuto) saveTeam(D.my.id, { tuto: 1 }); if (to === 'club') { S.view = 'club'; S.csub = 'club'; } render(); window.scrollTo(0, 0); },
  webshare: async () => { const w = WEB(); if (!w) return; const txt = `Únete a mi liga "${S.cfg?.name || 'Liga de Amigos'}": entra en ${w.link} y pon el código ${w.code}`; try { if (navigator.share) { await navigator.share({ title: 'Liga de Amigos', text: txt, url: w.link }); return; } } catch (e) { if (e && e.name === 'AbortError') return; } try { await navigator.clipboard.writeText(txt); toast('Invitación copiada: pégala en WhatsApp'); } catch (e) { toast('Código: ' + w.code); } },
  webswitch: () => WEB()?.switch(), weblogout: () => WEB()?.logout(),
  tutoagain: () => { S.modal = { type: 'tuto', i: 0 }; render(); }, ovclose: (a, el, e) => { if (e.target === el) ACT.close(); },
  confirm: async () => { const fn = S.modal?.fn; S.modal = null; render(); if (fn) await fn(); },
  slot: a => { const [k, i] = a.split(':'); const s = { k, i: +i }; S.sel = S.sel && S.sel.k === s.k && S.sel.i === s.i ? null : s; render(); if (S.sel && innerWidth < 860) setTimeout(() => document.querySelector('.grid>section:last-child')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30); },
  assign, unsel: () => { S.sel = null; render(); },
  clearslot: () => { const L = S.lin, s = S.sel; if (s.k === 'xi') L.xi[s.i] = null; else L.bench.splice(s.i, 1); S.sel = null; saveLin(); render(); },
  autoxi: () => { const a = E.autoXI(D.my.squad, S.lin.form, D.ctx(D.my)); S.lin.xi = a.xi; S.lin.bench = a.bench; S.sel = null; saveLin(); render(); },
  focus: f => { S.focus = f; render(); }, train: doTrain,
  buyfree: id => { const p = E.player(id), v = E.pval(id, D.Sx, 0); ask('Fichar a ' + p.name, `Cuesta ${money(v)} y cobrará ${moneyK(E.wage(v))} por jornada. Te quedarán ${money(D.fin(D.myIdx).cash - v)}.`, 'Fichar', () => buyFree(id)); },
  buyai: id => { const own = ownerOf(id), price = E.r1(E.pval(id, D.Sx, own.xp?.[id] || 0) * 1.35); ask('Comprar a ' + E.player(id).name, `${own.name} lo vende por ${money(price)}. Te quedarán ${money(D.fin(D.myIdx).cash - price)}.`, 'Comprar', () => buyAI(id)); },
  release: id => { const v = E.r1(E.pval(id, D.Sx, D.my.xp?.[id] || 0) * .5); ask('Liberar a ' + E.player(id).name, `Se va al mercado de agentes libres y cobras ${money(v)}. Cualquiera podrá ficharlo.`, 'Liberar', () => release(id), true); },
  offer: id => { S.modal = { type: 'offer', id, val: E.pval(id, D.Sx, ownerOf(id).xp?.[id] || 0) }; render(); },
  sendoffer: sendOffer, offok: acceptOffer, offno: id => setOffer(id, 'no'), offcancel: id => write('ofertas/' + id, () => S.db.doc('ofertas/' + id).delete()),
  stadium: () => { const t = D.my, l = (t.stadium || 0) + 1, nx = E.STADIUM[l]; if (!nx) return; if (t.build && t.build.done > Date.now()) return toast('Ya tienes una obra en marcha.'); ask('Construir: ' + nx.n, `${nx.cap.toLocaleString('es-ES')} asientos por ${money(nx.cost)}. La obra dura ${nx.h} horas; mientras tanto juegas en tu estadio actual.`, 'Construir', () => saveTeam(t.id, { stadium: l, build: { k: 'stadium', lvl: l, done: Date.now() + nx.h * 3600000 }, ledger: ledgerAdd(t, -nx.cost, 'Obras: ' + nx.n) })); },
  scout: async prem => { const t = D.my, id = 'y-' + D.Sx + '-' + t.id + '-' + (t.scouts || 0) + '-' + E.facLvl(t, 'can') + (prem === 'p' ? '-p' : ''), p = E.player(id); const patch = { squad: [...t.squad, id], scouts: (t.scouts || 0) + 1, lastScout: today(), ledger: ledgerAdd(t, -SCOUT_COST, 'Ojeador: ' + p.name) }; if (prem === 'p') { if (!(await spendTok(3, 'Ojeador premium', patch))) return; } else await saveTeam(t.id, patch); S.modal = { type: 'player', id }; render(); },
  csub: v => { S.csub = v; render(); },
  bid: id => bid(id).catch(e => console.warn(e)),
  auction: pid => ask('Subastar a ' + E.player(pid).name, 'Saldrá en subasta 30 minutos con un precio de salida del 60% de su valor. Si alguien puja, el jugador se va al mejor postor.', 'Subastar', () => auctionMine(pid)),
  cupmatch: a => { const [r, k] = a.split('-').map(Number), id = 's' + D.Sx + '-r' + r, doc = S.cup[id]; if (!doc) return; const m = doc.m[k]; openViewer({ match: m, H: teamByIdx(m.h), A: teamByIdx(m.a), ...liveOpts('cup', id, doc, k), speed: 4, summary: endSummary('cup', doc, { pens: doc.pens && doc.pens[k] }) }); },
  clmatch: a => { const [r, k] = a.split('-').map(Number), id = 's' + D.Sx + '-r' + r, doc = S.cl[id]; if (!doc) return; const m = doc.m[k]; openViewer({ match: m, H: teamByIdx(m.h), A: teamByIdx(m.a), ...liveOpts('cl', id, doc, k), speed: 4, summary: endSummary('cl', doc, { pens: r === 3 ? doc.pens && doc.pens[k] : null, final: r === 3 }) }); },
  muro: async () => { const el = $('#muro-txt'), txt = (el && el.value || '').trim().slice(0, 180); if (!txt || !D.my) return; const ref = S.db.collection('muro').doc(); await write('muro/' + ref.id, () => ref.set({ id: ref.id, by: S.me, team: D.my.id, txt, t: Date.now() })); el.value = ''; },
  sponsor: id => { const t = D.my, o = E.sponsorOffers(t, D.Sx, D.fans(D.myIdx)).find(x => x.id === id); ask('Firmar con ' + o.name, `${money(o.pm)} por partido${o.pw ? ' y ' + money(o.pw) + ' extra por cada victoria' : ''}, toda la temporada ${D.Sx}.`, 'Firmar', () => saveTeam(t.id, { spon: { ...o, s: D.Sx } })); },
  build: k => { const t = D.my, l = (t.fac || {})[k] || 0, F = E.FAC[k], cost = F.cost[l]; ask(F.n + ' nivel ' + (l + 1), `Cuesta ${money(cost)} y tarda ${12 * (l + 1)} horas. ${F.d}`, 'Construir', () => saveTeam(t.id, { fac: { ...(t.fac || {}), [k]: l + 1 }, build: { k, lvl: l + 1, done: Date.now() + (l + 1) * 43200000 }, ledger: ledgerAdd(t, -cost, 'Obras: ' + F.n + ' ' + (l + 1)) })); },
  finishbuild: () => { const t = D.my, b = t.build; if (!b) return; const n = Math.ceil((b.done - Date.now()) / 43200000) * 2; spendTok(n, 'Terminar obras', { build: { ...b, done: Date.now() - 1 } }); },
  daily: () => { const t = D.my, d = t.daily || {}; if (d.d === today()) return; const streak = d.d === yesterday() ? (d.streak || 0) + 1 : 1, n = Math.min(5, streak); saveTeam(t.id, { daily: { d: today(), streak }, tok: tokAdd(t, n, 'Premio diario') }).then(() => toast('+' + n + ' tokens')); },
  boost: id => spendTok(2, 'Forma: ' + E.player(id).name, { boost: { ...(D.my.boost || {}), [id]: D.Sx + ':' + D.nextMd } }).then(x => x !== null && toast(E.player(id).name + ' llegará al 100% al próximo partido')),
  heal: id => spendTok(4, 'Curación: ' + E.player(id).name, { heal: { ...(D.my.heal || {}), [id]: D.Sx + ':' + D.nextMd } }).then(x => x !== null && toast(E.player(id).name + ' estará disponible')),
  train2: () => { if (D.my.lastTrain2 === today()) return; spendTok(2, 'Entrenamiento extra', { lastTrain2: today(), lastTrain: '' }); },
  color: i => { S.pickColor = +i; document.querySelectorAll('.colors button').forEach((b, k) => b.setAttribute('aria-pressed', k === +i)); },
  saveclub: async () => { const t = D.my, name = $('#c-name').value.trim().slice(0, 24) || t.name, short = ($('#c-short').value.trim().slice(0, 3) || t.short).toUpperCase(); const colors = S.pickColor != null ? COLORS[S.pickColor] : t.colors; await saveTeam(t.id, { name, short, colors }); toast('Club guardado'); },
  leave: () => ask('Dejar el equipo', 'La IA pasará a llevarlo. Podrás coger otro equipo libre.', 'Dejar', () => saveTeam(D.my.id, { owner: null, lineup: null }), true),
  kick: id => ask('Pasar a la IA', 'Ese amigo dejará de llevar el equipo.', 'Pasar a IA', () => saveTeam(id, { owner: null, lineup: null }), true),
  force: mode => { const md = D.nextMd, at = mode === 'now' ? Date.now() - LIVE - 1000 : Date.now(); write('liga/config', () => S.db.doc('liga/config').update({ forcedAt: { ...(S.cfg.forcedAt || {}), [md]: at } })).then(() => setTimeout(tick, 300)); },
  newseason: () => ask('Nueva temporada', `Empieza la temporada ${D.Sx + 1} mañana a las ${S.cfg.hour}.`, 'Empezar', async () => { const d = new Date(Date.now() + DAY), ds = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); const fk = new Date(ds + 'T' + S.cfg.hour).getTime(); await write('liga/config', () => S.db.doc('liga/config').update({ season: D.Sx + 1, firstKick: fk, forcedAt: {} })); S.mdSel = null; toast('¡Arranca la temporada ' + (D.Sx + 1) + '!'); }),
  askwipe: () => ask('Borrar la liga', 'Se borran equipos, resultados y ofertas de todos. No se puede deshacer.', 'Borrar todo', async () => { await wipe(); await S.db.doc('liga/config').delete(); S.cfg = null; S.lin = null; D = null; render(); }, true)
};
document.addEventListener('click', e => { const b = e.target.closest('[data-act]'); if (!b || b.disabled) return; const fn = ACT[b.dataset.act]; if (fn) { if (b.dataset.act !== 'ovclose') e.stopPropagation(); fn(b.dataset.arg, b, e); } });
document.addEventListener('submit', e => { if (e.target.id === 'newleague') createLeague(e); });
document.addEventListener('keydown', e => { if (e.key !== 'Escape') return; if (VW) closeViewer(); else if (S.modal) ACT.close(); });
document.addEventListener('change', e => {
  const k = e.target.dataset.chg; if (!k) return; const v = e.target.value;
  if (k === 'form') return changeForm(v);
  if (k.startsWith('t-')) { const tac = { ...(D.my.tac || { ment: 'equ', press: 'med', est: 'mix' }), [k.slice(2)]: v }; saveTeam(D.my.id, { tac }); return; }
  if (k === 'price') { clearTimeout(ACT.pt); ACT.pt = setTimeout(() => saveTeam(D.my.id, { price: +v }), 300); return; }
  if (k === 'tauto') { saveTeam(D.my.id, { tac: { ...(D.my.tac || {}), auto: e.target.checked } }); return; }
  if (k === 'fpos') S.fpos = v; if (k === 'sort') S.sort = v; if (k === 'mteam') S.otherTeam = v;
  render();
});
document.addEventListener('input', e => { if (e.target.id === 'c-price') { const b = e.target.nextElementSibling; if (b) b.textContent = e.target.value + ' €'; } if (e.target.dataset.inp === 'q') { S.q = e.target.value; clearTimeout(ACT.qt); ACT.qt = setTimeout(render, 200); } });

/* ---------- datos en vivo ---------- */
let rerenderT = null;
function changed() { clearTimeout(rerenderT); rerenderT = setTimeout(() => { derive(); maybeTuto(); loadNames(); render(); refreshViewer(); tick(); }, 60); }
function refreshViewer() {
  if (!VW || !VW.key || !D) return; const { col, id, k } = VW.key;
  const doc = col === 'jor' ? D.all.find(d => 's' + d.season + '-m' + d.md === id) : col === 'cup' ? S.cup[id] : S.cl[id]; if (!doc || !doc.m[k]) return;
  const m = doc.m[k], sig = m.ev.length + ':' + m.hg + m.ag + ':' + (m.part ?? 'f') + ':' + E.hash(JSON.stringify(m.ev));
  if (sig !== VW.sig) { VW.sig = sig; VW.update(m); }
}
async function loadNames() {
  if (!S.user || !D) return;
  const ids = D.teams.map(t => t.owner).filter(id => id && !(id in S.names)); if (!ids.length) return;
  ids.forEach(id => S.names[id] = S.names[id] || '');
  try { const ps = await S.user.profiles(ids); ids.forEach(id => S.names[id] = ps?.[id]?.name || ''); render(); } catch (e) {}
}
function liveSig() {
  if (!D) return '';
  const now = Date.now();
  const st = [...D.cur, ...Object.values(S.cupRaw), ...Object.values(S.clRaw)].map(d => now < d.at ? 0 : now < d.at + LIVE ? 1 : 2).join('');
  const mins = D.live.map(liveMinute).join(',') + (S.rp ? 'r' + Math.floor((now - S.rp.t0) / 400) : '');
  const due = !D.done && D.nextMd <= D.total && kickAt(D.nextMd) <= now ? 'd' : '';
  const fin = needFin(now) ? 'f' : ''; // en cuanto se puede cerrar un partido, se cierra (sin esperar al repaso de 20 s)
  return [st, mins, due + fin];
}
setInterval(() => {
  document.querySelectorAll('[data-cd]').forEach(el => el.textContent = cdText(+el.dataset.cd));
  const [st, mins, due] = liveSig();
  if (st + due !== S.sig) { S.sig = st + due; derive(); render(); tick(); return; }
  if (mins !== S.sigM) { S.sigM = mins; if (S.view === 'inicio' || S.modal?.type === 'match' || (S.view === 'liga' && S.lsub === 'jornadas')) render(); }
}, 1000);
setInterval(tick, 20000);

(async function boot() {
  render();
  if (window.claudeReady) await window.claudeReady;
  const use = window.claude?.use;
  if (!use) { S.loadErr = 'Abre esta página desde claude.ai con tu sesión iniciada para jugar.'; return render(); }
  const [db, user] = await Promise.all([use('db'), use('user')]);
  if (!db) { S.loadErr = 'No hay acceso a los datos de la liga. Inicia sesión en claude.ai y pide al creador que te invite.'; return render(); }
  S.db = db; S.user = user;
  if (user) { try { S.me = await user.id(); S.owner = !!(await user.isOwner()); const cw = await user.can('data.write'); S.canWrite = cw !== false; } catch (e) {} }
  const lt = setTimeout(() => { if (!S.cfgOk) { S.loadErr = 'La liga tarda en cargar. Revisa tu conexión y vuelve a abrir la página.'; render(); } }, 10000);
  db.doc('liga/config').onSnapshot(s => { clearTimeout(lt); S.loadErr = ''; S.cfgOk = true; S.cfg = s.exists ? s.data() : null; changed(); }, e => { clearTimeout(lt); S.loadErr = 'Error al cargar la liga (' + e.code + ').'; render(); });
  db.collection('equipos').onSnapshot(q => { S.teams = {}; q.docs.forEach(d => { if (d.exists) S.teams[d.id] = d.data(); }); if (!S.linDirty) S.lin = null; changed(); }, e => console.warn(e));
  db.collection('jornadas').onSnapshot(q => { const j = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.m) j[d.id] = x; }); S.jor = j; changed(); }, e => console.warn(e));
  db.collection('ordenes').onSnapshot(q => { const o = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.list) o[d.id] = x; }); S.orders = o; changed(); }, e => console.warn(e));
  db.collection('subastas').onSnapshot(q => { const o = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.pid) o[d.id] = x; }); S.auctions = o; changed(); }, e => console.warn(e));
  db.collection('muro').onSnapshot(q => { const o = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.txt) o[d.id] = x; }); S.muro = o; changed(); }, e => console.warn(e));
  db.collection('champions').onSnapshot(q => { const o = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.m) o[d.id] = x; }); S.clRaw = o; changed(); }, e => console.warn(e));
  db.collection('copa').onSnapshot(q => { const o = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.m) o[d.id] = x; }); S.cupRaw = o; changed(); }, e => console.warn(e));
  db.collection('vivo').onSnapshot(q => { const o = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.sl) o[d.id] = x; }); S.vivo = o; changed(); }, e => console.warn(e));
  db.collection('presencia').onSnapshot(q => { const o = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.t) o[d.id] = x; }); S.pres = o; }, e => console.warn(e));
  db.collection('ofertas').onSnapshot(q => { S.offers = {}; q.docs.forEach(d => { const x = d.data(); if (x && x.pid) S.offers[d.id] = x; }); changed(); }, e => console.warn(e));
})();
}
