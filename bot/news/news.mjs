// Noticias en imagen para el grupo de Telegram: medios y personajes inventados, datos reales de la liga.
// Textos: Groq (si hay clave) con textos de reserva si falla. Render: Chromium headless (puppeteer-core).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const CSS = fs.readFileSync(path.join(DIR, 'style.css'), 'utf8');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pick = a => a[Math.floor(Math.random() * a.length)];
const clip = (s, n) => { s = String(s ?? '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const BG = ['stadium', 'grada', 'vestuario', 'trofeo', 'entreno', 'despacho'];
const bgUrl = n => `url(../img/${n}.webp)`;
const fmtM = v => (v >= 1 ? (Math.round(v * 10) / 10).toString().replace('.', ',') + ' M€' : Math.round(v * 1000) + ' mil €');
const fechaLarga = t => new Date(t).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/Madrid' }).replace(/^./, c => c.toUpperCase());
const hora = t => new Date(t).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' });
const k = n => n >= 1000 ? (Math.round(n / 100) / 10).toString().replace('.', ',') + 'K' : String(n);
const LINE = { POR: 'G', DFC: 'D', LD: 'D', LI: 'D', CAD: 'D', CAI: 'D', MCD: 'M', MC: 'M', MCO: 'M', MD: 'M', MI: 'M', ED: 'A', EI: 'A', DC: 'A', SD: 'A' };

/* ---------------- plantillas (HTML) ---------------- */
const crest = (t, size = 150) => { const [a, b] = t?.colors || ['#334', '#fff']; return `<div style="width:${size}px;height:${Math.round(size * 1.13)}px;margin:0 auto;background:${esc(a)};color:${esc(b)};clip-path:polygon(50% 0,100% 12%,100% 60%,50% 100%,0 60%,0 12%);display:grid;place-items:center;font-family:Anton;font-size:${Math.round(size * .37)}px">${esc(t?.short || '???')}</div>`; };
const T = {
  portada: d => `<section class="c pt" id="n1">
  <div class="mast"><h1><small>EL DIARIO QUE NADIE PIDIÓ</small>VESTUARIO</h1><div class="meta">${esc(d.fecha)}<br>Año ${esc(d.anyo)} · Nº ${esc(d.num)}<br>1,50 €</div></div>
  <div class="bar">LIGA DE AMIGOS <span>· ${esc(d.barra)} ·</span> COPA <span>·</span> CHAMPIONS <span>·</span> MERCADO</div>
  <div class="hero" style="background-image:${bgUrl(d.bg)}"><div class="txt"><span class="tag">${esc(d.tag)}</span><h2 style="font-size:${d.tsize}px">${d.titularHTML}</h2><p>${esc(d.entradilla)}</p></div></div>
  <div class="cols">${d.cols.map(c => `<div class="col"><b>${esc(c.k)}</b><h3>${esc(c.h)}</h3><p>${esc(c.p)}</p></div>`).join('')}</div><div class="barcode"></div></section>`,
  bombazo: d => `<section class="c sq" id="n2"><div class="card">
    <div class="hd"><div class="av">PB</div><div><div class="nm">Paco Bombazo <span class="ok">✓</span></div><div class="hn">@pacobombazo · Periodista de fichajes</div></div></div>
    <div class="tx">🚨 <b>${esc(d.etiqueta)}</b> | ${d.textoHTML}<br><span class="hw">${esc(d.remate)}</span></div>
    <div class="meta">${esc(d.hora)} · ${esc(d.fecha)} · Liga de Amigos</div>
    <div class="st"><span><b>${esc(d.r1)}</b> respuestas</span><span><b>${esc(d.r2)}</b> compartidos</span><span><b>${esc(d.r3)}</b> me gusta</span></div>
  </div><div class="src">LIGA DE AMIGOS · MEDIOS FICTICIOS</div></section>`,
  radio: d => `<section class="c pt" id="n3">
  <div class="top"><div class="logo">📻</div><div><h1>Radio Penalti</h1><small>El carrusel del vestuario</small></div><div class="air"><i></i>EN DIRECTO</div></div>
  <div class="q">${d.gritoHTML}</div><div class="who">🎙️ Manolo «El Pulmón» · ${esc(d.contexto)}</div>
  <div class="wave">${Array.from({ length: 44 }, (_, i) => `<i style="height:${Math.round(20 + Math.abs(Math.sin(i * 1.7 + d.seed) * Math.cos(i * .4)) * 140)}px"></i>`).join('')}</div>
  <div class="tick">${d.marcadores.map(x => `<span>${esc(x[0])} <b>${esc(x[1])}</b> ${esc(x[2])}</span>`).join('')}</div></section>`,
  ultimahora: d => `<section class="c sq" id="n4" style="background-image:${bgUrl(d.bg)}"><div class="live"><span>● EN DIRECTO</span><span>${esc(d.hora)}</span></div><div class="ch">AMIGOS 24H</div>
  <div class="lt"><div class="k">${esc(d.etiqueta)}</div><div class="h">${esc(d.titular)}</div><div class="s">${esc(d.sub)}</div></div>
  <div class="tk"><b>${esc(d.seccion)}</b><span>${esc(d.ticker)}</span></div></section>`,
  tierlist: d => `<section class="c pt" id="n5"><div class="u"><div class="a">😎</div><div><b>Kevin Golazos</b><small>1,2 M seguidores · influencer de fútbol</small></div></div>
  <h1>${esc(d.titulo)}</h1><div class="rows">${d.rows.map(r => `<div class="r"><div class="t" style="background:${r.col}">${r.tier}</div><div class="v">${esc(r.nombre)}<small>${esc(r.com)}</small></div></div>`).join('')}</div>
  <div class="cta">${esc(d.cta)}</div></section>`,
  encuesta: d => `<section class="c sq" id="n6"><div class="h"><span class="b">VESTUARIO</span><small>Encuesta · ${esc(d.votos)} votos</small></div>
  <h1>${esc(d.pregunta)}</h1><div class="bars">${d.ops.map((o, i) => `<div class="bar${i ? '' : ' win'}"><i style="width:${o.p}%"></i><span>${esc(o.n)}</span><span>${o.p}%</span></div>`).join('')}</div>
  <div class="f"><span>${esc(d.pie)}</span><span>Liga de Amigos</span></div></section>`,
  notas: d => `<section class="c pt" id="n7"><div class="hd"><span class="b">VESTUARIO</span><small>${esc(d.cab)}</small></div>
  <h1>${esc(d.l)} <em>${esc(d.sc)}</em> ${esc(d.r)}</h1><div class="sc">${esc(d.sub)}</div>
  <div class="list">${d.ps.map(p => `<div class="p"><div class="n" style="background:${p.n >= 8 ? '#3ddc84' : p.n >= 6 ? '#ffd400' : p.n >= 4 ? '#ff9a3d' : '#ff4d4d'}">${p.n}</div><div><b>${esc(p.nombre)}</b><span>${esc(p.com)}</span></div><span class="pos">${esc(p.pos)}</span></div>`).join('')}</div></section>`,
  comunicado: d => `<section class="c pt" id="n8">${crest(d.team, 150)}<div class="club">${esc(d.club)}</div><div class="t">COMUNICADO OFICIAL</div><hr>
  ${d.ps.map(p => `<p>${esc(p)}</p>`).join('')}<p>${esc(d.remate)}</p>
  <div class="sig"><div>${esc(d.lugar)}<br>${esc(d.fecha)}</div><div style="text-align:right"><b>La Directiva</b><br>${esc(d.club)}</div></div><div class="stamp">${esc(d.sello)}</div></section>`,
  fichaje: d => `<section class="c pt" id="n9" style="background:radial-gradient(circle at 70% 30%,${esc(d.c1)},#081038 65%)"><div class="num">${esc(d.dorsal)}</div><div class="of">✍️ OFICIAL</div>
  <div class="sil" style="padding-top:40px">${crest(d.team, 230)}</div><h2>${esc(d.club)} DA LA BIENVENIDA A</h2><h1>${d.nombreHTML}</h1>
  <div class="info">${d.info.map(i => `<div><b>${esc(i[0])}</b><span>${esc(i[1])}</span></div>`).join('')}</div></section>`,
  chat: d => `<section class="c pt" id="n10"><div class="bar"><div class="g">⚽</div><div><b>Vestuario ${esc(d.club)} 🔒</b><small>${esc(d.miembros)}</small></div></div><div class="leak">FILTRADO</div>
  <div class="msgs">${d.ms.map((m, i) => `<div class="m${m.yo ? ' me' : ''}">${m.yo ? '' : `<i style="color:${['#c8102e', '#0b6e4f', '#4b2c91', '#b35c00'][i % 4]}">${esc(m.de)}</i>`}${esc(m.texto)}<small>${esc(m.h)}${m.yo ? ' ✓✓' : ''}</small></div>`).join('')}</div>
  <div class="ft">Chat inventado por la redacción · Liga de Amigos</div></section>`,
  caraacara: d => `<section class="c pt" id="n11"><div class="half l" style="background:linear-gradient(135deg,${esc(d.a.c)},#140006)"></div><div class="half r" style="background:linear-gradient(225deg,${esc(d.b.c)},#00140d)"></div><div class="split"></div>
  <div class="top"><b>EL DERBI</b> <span>${esc(d.cuando)}</span></div>
  ${[d.a, d.b].map((x, i) => `<div class="tm ${i ? 'b' : 'a'}">${crest(x.team, 220)}<h2>${x.nombreHTML}</h2><p>${esc(x.mister)}</p><div class="st">${esc(x.pos)} · <b>${esc(x.pts)}</b><br>Racha: ${esc(x.racha)}</div></div>`).join('')}
  <div class="vs">VS</div><div class="bot"><div>${esc(d.lema)}</div><br><p>${esc(d.sub)}</p></div></section>`,
  onceideal: d => `<section class="c pt" id="n12"><h1><small>EL ONCE IDEAL · ${esc(d.cab)}</small>${esc(d.titulo)}</h1><div class="pitch">
  ${d.ps.map(p => `<div class="pl" style="left:${p.x}%;top:${p.y}%"><div class="s">${esc(p.r)}</div><b>${esc(p.nombre)}</b><span>${esc(p.eq)}</span></div>`).join('')}</div></section>`,
  clasificacion: d => `<section class="c sq" id="n13"><div class="hd"><span class="live">● AHORA</span><b>AMIGOS 24H</b></div><h1>${esc(d.titulo)}</h1>
  <table><tr><th>#</th><th>Equipo</th><th>PJ</th><th>DG</th><th style="text-align:right;padding-right:24px">PTS</th></tr>
  ${d.rows.map(r => `<tr class="${r.h ? 'h ' : ''}${r.cl ? 'cl' : ''}${r.dn ? ' dn' : ''}"><td>${r.pos}</td><td>${esc(r.n)}${r.tag ? ` <span class="tag">${esc(r.tag)}</span>` : ''}</td><td>${r.pj}</td><td>${r.dg > 0 ? '+' : ''}${r.dg}</td><td>${r.pts}</td></tr>`).join('')}</table>
  <div class="lg"><span><i style="background:#2b8cff"></i>Champions</span><span><i style="background:#e10600"></i>Último</span><span><i style="background:#23367a"></i>Amigos</span></div></section>`,
  sobres: d => { const zig = (n, h) => { const a = []; for (let i = 0; i <= n; i++) a.push(`${(i / n * 100).toFixed(2)}% ${i % 2 ? h : 0}px`); for (let i = n; i >= 0; i--) a.push(`${(i / n * 100).toFixed(2)}% calc(100% - ${i % 2 ? h : 0}px)`); return `polygon(${a.join(',')})`; };
    const art = (k, name, n) => `<div class="pack pack-${k}" style="clip-path:${zig(22, 11)}"><div class="pack-in"><span class="pack-top">LIGA DE AMIGOS</span><svg class="pack-crest" viewBox="0 0 64 72"><path d="M32 2L60 11V36C60 54 47 65 32 70C17 65 4 54 4 36V11Z" fill="rgba(0,0,0,.18)" stroke="rgba(255,255,255,.7)" stroke-width="2"/><circle cx="32" cy="35" r="13" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="2.5"/><path d="M32 26l6 4.5-2.3 7h-7.4L26 30.5z" fill="rgba(255,255,255,.85)"/></svg><b class="pack-name">${name}</b><span class="pack-n">${n}</span></div></div>`;
    return `<section class="c pt" id="nS"><span class="k">NOVEDAD</span><h1>Llegan los <em>sobres</em></h1><div class="sub">Jugadores, cracks, dinero, tokens y bonos</div>
    <div class="row">${[['bronce', 'Bronce', '1 premio', 'GRATIS', 'cada día'], ['plata', 'Plata', '2 premios', '3 tokens', 'promesas y titulares'], ['oro', 'Oro', '3 premios', '8 tokens o 15 M€', '5% de crack 86+']].map(([k, n, p, pr, x]) => `<div class="col">${art(k, n, p)}<b>${n}</b><span>${pr}</span><small>${x}</small></div>`).join('')}</div>
    <div class="foot">Ábrelos en <b>Mercado → Sobres</b></div></section>`; },
  expectativa: d => `<section class="c sq" id="n14"><div class="p p1"><span class="lb">Expectativa</span><b>${esc(d.e)}</b></div><div class="mid"></div><div class="p p2"><span class="lb">Realidad</span><b>${esc(d.r)}</b></div><div class="by">vía Kevin Golazos 😎</div></section>`
};
// titular en dos colores: lo que va entre *asteriscos* sale en amarillo
const hi = s => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
const twoLines = s => { const w = String(s).split(' '); if (w.length < 2) return esc(s); const m = Math.ceil(w.length / 2); return esc(w.slice(0, m).join(' ')) + '<br>' + esc(w.slice(m).join(' ')); };

/* ---------------- render con Chromium ---------------- */
let browser = null, rq = Promise.resolve();
async function getBrowser() {
  if (browser && browser.connected) return browser;
  const { default: pptr } = await import('puppeteer-core');
  const exe = ['/usr/bin/chromium-browser', '/usr/bin/chromium', process.env.CHROME_PATH].find(p => p && fs.existsSync(p));
  browser = await pptr.launch({ executablePath: exe, args: ['--no-sandbox', '--disable-dev-shm-usage', '--allow-file-access-from-files', '--font-render-hinting=none'] });
  return browser;
}
export function render(kind, data) {
  const job = rq.then(async () => {
    const html = `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><style>${CSS}</style></head><body>${T[kind](data)}</body></html>`;
    const file = path.join(DIR, '_render.html'); fs.writeFileSync(file, html);
    const b = await getBrowser(), pg = await b.newPage();
    try {
      await pg.setViewport({ width: 1080, height: 1350 });
      await pg.goto('file://' + file, { waitUntil: 'load', timeout: 30000 });
      await pg.evaluate(() => document.fonts.ready);
      const el = await pg.$('section');
      return await el.screenshot({ type: 'jpeg', quality: 90 });
    } finally { await pg.close().catch(() => {}); }
  });
  rq = job.catch(() => {});
  return job;
}

/* ---------------- textos con IA (Groq) ---------------- */
const SYS = `Eres la redacción de los medios FICTICIOS de una liga privada de fútbol manager entre amigos (un juego tipo Top Eleven). Escribes en español de España, con humor de vestuario, pique sano y tono de prensa deportiva sensacionalista. Reglas:
- Usa SOLO los datos que te doy (equipos, jugadores, resultados, cifras). No inventes resultados ni cifras distintas.
- Los "místers" son amigos reales: puedes picarles, nunca insultos fuertes, nada ofensivo (ni físico, ni origen, ni religión, ni familia).
- Los jugadores son los del juego: no les atribuyas declaraciones reales ni hables de su vida real; trátalos solo como piezas del juego.
- No menciones medios, periodistas ni marcas reales.
- Respeta los límites de caracteres indicados. Responde SOLO con JSON válido con las claves pedidas.`;
let aiKey = null, aiOff = 0;
export function setKey(k) { aiKey = k || null; aiOff = 0; }
async function ai(task, facts, keys) {
  if (!aiKey || Date.now() < aiOff) return null;
  const user = `${task}\n\nDATOS:\n${JSON.stringify(facts)}\n\nDevuelve JSON con estas claves: ${keys}`;
  for (const model of ['llama-3.3-70b-versatile', 'openai/gpt-oss-120b']) {
    try {
      const ac = new AbortController(), to = setTimeout(() => ac.abort(), 25000);
      const r = await fetch('https://api.groq.com/openai/v1/chat/completions', { method: 'POST', signal: ac.signal, headers: { 'content-type': 'application/json', authorization: 'Bearer ' + aiKey },
        body: JSON.stringify({ model, temperature: 1, max_tokens: 900, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: SYS }, { role: 'user', content: user }] }) });
      clearTimeout(to);
      if (r.status === 401) { console.warn('groq: clave no válida'); aiOff = Date.now() + 3600000; return null; }
      if (r.status === 429) { aiOff = Date.now() + 120000; continue; }
      const j = await r.json(); const txt = j?.choices?.[0]?.message?.content; if (!txt) continue;
      return JSON.parse(txt.replace(/^```json|```$/g, '').trim());
    } catch (e) { console.warn('groq', model, e.message); }
  }
  return null;
}
export async function testKey(key) {
  try { const r = await fetch('https://api.groq.com/openai/v1/models', { headers: { authorization: 'Bearer ' + key } }); return r.ok; } catch (e) { return null; }
}

/* ---------------- constructores de noticias ---------------- */
export function createNews(X) {
  // X: { E, teamsArr, idxName, isHuman, nick, mgr, seasonDocs, tableOf, streak, h2h, scorers, humansIdx, sendPhoto }
  const { E } = X;
  const team = (lg, i) => i < lg.cfg.n ? X.teamsArr(lg)[i] : { short: (X.idxName(lg, i) || 'EUR').slice(0, 3).toUpperCase(), colors: ['#334', '#fff'] };
  const tname = (lg, i) => X.idxName(lg, i);
  const label = (lg, i) => X.isHuman(lg, i) ? `${tname(lg, i)}${X.mgr(lg, i) ? ' (' + X.mgr(lg, i) + ')' : ''}` : `${tname(lg, i)} (IA)`;
  const formStr = f => (f || []).slice(-5).join('') || '—';
  const sideOf = (m, pid) => (m.min?.[0] && pid in m.min[0]) ? 0 : (m.min?.[1] && pid in m.min[1]) ? 1 : (m.xi?.[0] || []).includes(pid) ? 0 : 1;
  const ratingsOf = m => Object.entries(m.rat || {}).map(([pid, r]) => ({ pid, r: +r, s: sideOf(m, pid), mins: m.min?.[sideOf(m, pid)]?.[pid] ?? 90 }));
  const pname = pid => { try { return E.player(pid).name; } catch (e) { return pid; } };
  const ppos = pid => { try { return E.player(pid).pos; } catch (e) { return ''; } };
  const goalsOf = (m, s) => (m.ev || []).filter(e => e.t === 'gol' && e.s === s);
  const resultFacts = (lg, d) => d.m.filter(m => X.isHuman(lg, m.h) || X.isHuman(lg, m.a)).map(m => ({ local: label(lg, m.h), visitante: label(lg, m.a), resultado: `${m.hg}-${m.ag}`, derbi: X.isHuman(lg, m.h) && X.isHuman(lg, m.a), goles: (m.ev || []).filter(e => e.t === 'gol').map(e => `${pname(e.p)} ${e.m}' (${tname(lg, e.s ? m.a : m.h)})`), expulsados: (m.ev || []).filter(e => e.t === 'roja').map(e => pname(e.p)), mvp: m.mvp ? pname(m.mvp) : null }));
  const standFacts = (lg, md) => { const P = X.tableOf(lg, X.seasonDocs(lg, md)); return P.tb.map((r, i) => ({ pos: i + 1, equipo: label(lg, r.t), pts: r.pts, racha: formStr(r.form) })); };
  const recentBuys = (lg, days = 7) => { const now = Date.now(), out = []; X.humansIdx(lg).forEach(i => (X.teamsArr(lg)[i].ledger || []).forEach(e => { if (e.d > now - days * 864e5 && /^(Fichaje|Subasta)/.test(e.why || '')) out.push({ equipo: label(lg, i), jugador: String(e.why).split(': ').slice(1).join(': '), precio: fmtM(Math.abs(e.amt)), t: e.d }); })); return out.sort((a, b) => b.t - a.t).map(({ t, ...x }) => x); };

  // la historia principal de una jornada
  function mainStory(lg, d) {
    const H = new Set(X.humansIdx(lg)); let best = null;
    d.m.forEach(m => {
      const hh = H.has(m.h), ha = H.has(m.a); if (!hh && !ha) return;
      const diff = Math.abs(m.hg - m.ag), w = m.hg === m.ag ? -1 : m.hg > m.ag ? m.h : m.a, l = w < 0 ? -1 : w === m.h ? m.a : m.h;
      let score = diff + (hh && ha ? 10 : 0) + (w >= 0 && !H.has(w) ? 4 : 0);
      if (!best || score > best.score) best = { m, score, w, l, derby: hh && ha, diff };
    });
    return best;
  }

  async function portada(lg, d, extra = {}) {
    const st = mainStory(lg, d); if (!st) return null;
    const { m } = st, sc = `${m.hg}-${m.ag}`, md = d.md || 0;
    const facts = { jornada: md || extra.ronda, historia_principal: { local: label(lg, m.h), visitante: label(lg, m.a), resultado: sc, derbi: st.derby, ganador: st.w >= 0 ? label(lg, st.w) : 'empate', goles: (m.ev || []).filter(e => e.t === 'gol').map(e => `${pname(e.p)} ${e.m}'`) }, otros_resultados: resultFacts(lg, d), clasificacion: md ? standFacts(lg, md).slice(0, 8) : undefined, pichichi: X.scorers(lg).map(s => `${pname(s.p)} (${tname(lg, s.t)}) ${s.n} goles`), fichajes_recientes: recentBuys(lg).slice(0, 4), competicion: extra.comp || 'Liga' };
    const a = await ai('Escribe la PORTADA de "Vestuario", diario deportivo sensacionalista de la liga, sobre la historia principal. "titular": máximo 34 caracteres, en MAYÚSCULAS, rodea con *asteriscos* 1-2 palabras clave para destacarlas. "tag": máx 16 (p.ej. "DERBI · 4-0"). "entradilla": máx 130. "cols": 3 noticias breves de otros datos (pichichi, mercado, clasificación, otros partidos, polémicas) con "k" (sección, máx 12, mayúsculas), "h" (titular, máx 30) y "p" (máx 95).', facts, '{"tag","titular","entradilla","cols":[{"k","h","p"}]}');
    const wN = st.w >= 0 ? tname(lg, st.w) : null, lN = st.l >= 0 ? tname(lg, st.l) : null;
    const fb = { tag: `${st.derby ? 'DERBI' : extra.comp || 'LIGA'} · ${sc}`, titular: wN ? pick([`¡*${wN}* ${st.diff >= 3 ? 'ARRASA' : 'GANA'}!`, `${wN} *TUMBA* A ${lN}`, `*${wN}* NO PERDONA`]) : `TABLAS EN ${tname(lg, m.h)}`, entradilla: wN ? `${wN} se impone ${sc} a ${lN}. ${X.isHuman(lg, st.l) ? 'En ' + lN + ' toca dar explicaciones.' : 'La IA no pudo hacer nada.'}` : `Empate ${sc} entre ${tname(lg, m.h)} y ${tname(lg, m.a)}. Nadie presume.`,
      cols: [(() => { const s = X.scorers(lg)[0]; return s ? { k: 'PICHICHI', h: `${pname(s.p)} manda`, p: `Ya suma ${s.n} goles con ${tname(lg, s.t)}.` } : { k: 'PICHICHI', h: 'Sin dueño', p: 'Nadie se ha adueñado aún de la tabla de goleadores.' }; })(), (() => { const b = recentBuys(lg)[0]; return b ? { k: 'MERCADO', h: `${b.jugador} ya es de ${b.equipo.split(' (')[0]}`, p: `Operación cerrada por ${b.precio}.` } : { k: 'MERCADO', h: 'Mercado en calma', p: 'Nadie mueve ficha. ¿Miedo o falta de dinero?' }; })(), (() => { const s = md ? standFacts(lg, md)[0] : null; return s ? { k: 'CLASIFICACIÓN', h: `${s.equipo.split(' (')[0]}, líder`, p: `${s.pts} puntos tras ${md} jornadas.` } : { k: 'LIGA', h: 'Arranca la batalla', p: 'Todo por decidir.' }; })()] };
    const x = { ...fb, ...(a || {}) }; const cols = Array.isArray(x.cols) && x.cols.length >= 3 ? x.cols.slice(0, 3) : fb.cols;
    return { kind: 'portada', caption: `📰 Vestuario · ${md ? 'Jornada ' + md : extra.comp || 'Hoy'}`, data: { fecha: fechaLarga(Date.now()), anyo: lg.cfg.season, num: md || 1, barra: md ? 'JORNADA ' + md : (extra.comp || 'HOY').toUpperCase(), bg: pick(['stadium', 'grada', 'vestuario']), tag: clip(x.tag, 18), titularHTML: hi(clip(x.titular, 40).toUpperCase()), tsize: (L => L <= 18 ? 116 : L <= 26 ? 96 : L <= 32 ? 84 : 74)(clip(x.titular, 40).replace(/\*/g, '').length), entradilla: clip(x.entradilla, 140), cols: cols.map(c => ({ k: clip(c.k, 14).toUpperCase(), h: clip(c.h, 34), p: clip(c.p, 100) })) } };
  }

  async function radio(lg, d) {
    let best = null;
    d.m.forEach(m => { if (!X.isHuman(lg, m.h) && !X.isHuman(lg, m.a)) return; const fin = [m.hg, m.ag];
      (m.ev || []).filter(e => e.t === 'gol' && e.m >= 80).forEach(e => { if (fin[e.s] >= fin[1 - e.s] && (!best || e.m > best.e.m)) best = { m, e }; }); });
    if (!best) return null;
    const { m, e } = best, sc = tname(lg, e.s ? m.a : m.h), vic = tname(lg, e.s ? m.h : m.a);
    const a = await ai('Eres Manolo «El Pulmón», narrador de "Radio Penalti". Escribe el GRITO de gol tal cual lo cantarías en directo. "grito": máx 85 caracteres, en mayúsculas, rodea con *asteriscos* 1-2 palabras a destacar, puedes picar al rival si es de un amigo. "contexto": máx 45 (p.ej. "narrando el derbi de la jornada 3").', { goleador: pname(e.p), minuto: e.m, equipo_que_marca: label(lg, e.s ? m.a : m.h), rival: label(lg, e.s ? m.h : m.a), resultado_final: `${tname(lg, m.h)} ${m.hg}-${m.ag} ${tname(lg, m.a)}`, derbi: X.isHuman(lg, m.h) && X.isHuman(lg, m.a), jornada: d.md }, '{"grito","contexto"}');
    const g = a?.grito || `¡¡GOOOOL!! ¡GOL DE *${sc}* EN EL ${e.m}'! ¡${vic}, *VETE A CASA*!`;
    const marc = d.m.filter(x => X.isHuman(lg, x.h) || X.isHuman(lg, x.a)).slice(0, 2).map(x => [tname(lg, x.h), `${x.hg}-${x.ag}`, tname(lg, x.a)]);
    return { kind: 'radio', caption: `📻 Radio Penalti · gol en el ${e.m}'`, data: { gritoHTML: '“' + hi(clip(g, 95).toUpperCase()) + '”', contexto: clip(a?.contexto || `narrando la jornada ${d.md}`, 50), marcadores: marc, seed: Math.random() * 9 } };
  }

  async function notas(lg, d) {
    const st = mainStory(lg, d); if (!st || st.w < 0) return null;
    const { m } = st, ws = st.w === m.h ? 0 : 1, rs = ratingsOf(m).filter(x => x.mins >= 25);
    const top = rs.filter(x => x.s === ws).sort((a, b) => b.r - a.r).slice(0, 3), bot = rs.filter(x => x.s !== ws).sort((a, b) => a.r - b.r).slice(0, 2);
    if (top.length < 2 || !bot.length) return null;
    const list = [...top, ...bot].map(x => ({ nombre: pname(x.pid), nota: Math.max(1, Math.min(10, Math.round(x.r))), equipo: tname(lg, x.s ? m.a : m.h), goles: goalsOf(m, x.s).filter(e => e.p === x.pid).length, roja: (m.ev || []).some(e => e.t === 'roja' && e.p === x.pid) }));
    const loserHuman = X.isHuman(lg, st.l);
    const a = await ai('Escribe "Las notas" del partido en el diario "Vestuario": un comentario corto y gracioso por jugador según su nota (1-10), goles y expulsión. "coms": array con un comentario por jugador en el mismo orden (máx 42 caracteres cada uno). "sub": subtítulo picante (máx 60). "mister": comentario para el míster perdedor (máx 42).', { partido: `${label(lg, m.h)} ${m.hg}-${m.ag} ${label(lg, m.a)}`, jugadores: list, mister_perdedor: loserHuman ? label(lg, st.l) : null }, '{"sub","coms":[],"mister"}');
    const fbc = p => p.nota >= 9 ? 'Partidazo. De otro planeta.' : p.nota >= 7 ? (p.goles ? 'Gol y liderazgo.' : 'Cumplió con nota.') : p.nota >= 5 ? 'Ni fu ni fa.' : p.roja ? 'Expulsado. Dejó al equipo tirado.' : 'Para olvidar.';
    const ps = list.map((p, i) => ({ n: p.nota, nombre: p.nombre, com: clip(a?.coms?.[i] || fbc(p), 46), pos: `${ppos([...top, ...bot][i].pid)} · ${(team(lg, [...top, ...bot][i].s ? m.a : m.h)?.short || '').toUpperCase()}` }));
    if (loserHuman) ps.push({ n: 1, nombre: `El míster de ${tname(lg, st.l)}`, com: clip(a?.mister || 'Alineación misteriosa. Sin explicación.', 46), pos: (team(lg, st.l)?.short || '').toUpperCase() });
    return { kind: 'notas', caption: `📝 Las notas · ${tname(lg, m.h)} ${m.hg}-${m.ag} ${tname(lg, m.a)}`, data: { cab: `Las notas de la jornada ${d.md}`, l: tname(lg, m.h), sc: `${m.hg}-${m.ag}`, r: tname(lg, m.a), sub: clip(a?.sub || 'Uno a uno: quién brilló y quién debería pedir perdón', 64), ps } };
  }

  async function chat(lg, d) {
    const H = X.humansIdx(lg); let pickM = null;
    d.m.forEach(m => { [m.h, m.a].forEach((t, s) => { if (!H.includes(t)) return; const g = s ? m.ag - m.hg : m.hg - m.ag; if (g <= -2 && (!pickM || g < pickM.g)) pickM = { m, t, s, g }; }); });
    if (!pickM) return null;
    const { m, t, s } = pickM, xi = (m.xi?.[s] || []).filter(Boolean).map(pname).slice(0, 11);
    if (xi.length < 3) return null;
    const a = await ai('Inventa el CHAT FILTRADO del vestuario del equipo perdedor justo durante/después del partido. 6 mensajes cortos, graciosos, de jugadores quejándose del míster y del míster defendiéndose ("yo": true para el míster). Usa nombres de jugadores de la lista. "msgs": [{"de","texto","yo"}], texto máx 60 caracteres.', { equipo: label(lg, t), rival: label(lg, s ? m.h : m.a), resultado: `${m.hg}-${m.ag}`, jugadores: xi }, '{"msgs":[{"de","texto","yo"}]}');
    let ms = Array.isArray(a?.msgs) ? a.msgs.slice(0, 6).map(x => ({ de: clip(x.de, 22), texto: clip(x.texto, 64), yo: !!x.yo })) : null;
    if (!ms || ms.length < 4) ms = [{ de: xi[1], texto: 'Míster, ¿qué táctica es esta?' }, { yo: 1, texto: 'Es nueva. Confiad 🙏' }, { de: xi[2], texto: `Vamos perdiendo ${Math.abs(pickM.g)} y aún queda 💀` }, { de: xi[0], texto: 'Yo pido el traspaso ya' }, { yo: 1, texto: 'Eso es una broma, ¿no?' }, { de: xi[1], texto: '…' }];
    const base = d.at || Date.now(); ms.forEach((x, i) => { x.h = hora(base + (i * 7 + 3) * 60000); });
    return { kind: 'chat', caption: `🔒 Filtrado: el vestuario de ${tname(lg, t)}`, data: { club: tname(lg, t), miembros: `Míster, ${xi.slice(0, 3).join(', ')} y ${Math.max(1, xi.length - 3 + 8)} más`, ms } };
  }

  async function comunicado(lg, d) {
    const md = d.md; if (!md) return null; const P = X.tableOf(lg, X.seasonDocs(lg, md));
    const cand = X.humansIdx(lg).map(i => ({ i, ls: X.streak(P.row(i)?.form || [], 'P'), pos: P.pos[i] })).filter(x => x.ls >= 3 || (md >= 4 && x.pos === P.tb.length)).sort((a, b) => b.ls - a.ls)[0];
    if (!cand) return null; const i = cand.i;
    const a = await ai('Escribe el COMUNICADO OFICIAL de la directiva del club, dando "total confianza" al míster de forma claramente irónica (todo el mundo entiende que está en la cuerda floja). "ps": 2 párrafos (máx 200 caracteres cada uno), "remate": frase final seca y graciosa (máx 30), "sello": texto del sello de goma (máx 18, mayúsculas).', { club: label(lg, i), racha_derrotas: cand.ls, posicion: cand.pos, de: P.tb.length, puntos: P.row(i)?.pts, jornada: md }, '{"ps":[],"remate","sello"}');
    const ps = Array.isArray(a?.ps) && a.ps.length >= 2 ? a.ps.slice(0, 2).map(p => clip(p, 210)) : [`El ${tname(lg, i)} quiere expresar su total confianza en su míster tras ${cand.ls >= 3 ? cand.ls + ' derrotas seguidas' : 'la última jornada'}.`, 'La temporada es larga y los rumores de destitución son completamente falsos.'];
    return { kind: 'comunicado', caption: `📄 Comunicado oficial del ${tname(lg, i)}`, data: { team: team(lg, i), club: tname(lg, i).toUpperCase(), ps, remate: clip(a?.remate || 'Por el momento.', 34), sello: clip(a?.sello || 'CONFIANZA TOTAL*', 20).toUpperCase(), lugar: 'Ciudad de los Amigos', fecha: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' }) } };
  }

  async function expectativa(lg, d) {
    const md = d.md; if (!md || md < 3) return null; const P = X.tableOf(lg, X.seasonDocs(lg, md)), H = X.humansIdx(lg);
    const worst = [...H].sort((a, b) => P.pos[b] - P.pos[a])[0]; if (worst == null || P.pos[worst] < P.tb.length - 1) return null;
    const a = await ai('Meme "Expectativa vs Realidad" del influencer Kevin Golazos sobre el míster que va mal. "e": lo que prometía en verano (máx 60), "r": la realidad con datos (máx 66). Usa emojis.', { equipo: label(lg, worst), posicion: P.pos[worst], de: P.tb.length, puntos: P.row(worst).pts, racha: formStr(P.row(worst).form), jornada: md }, '{"e","r"}');
    return { kind: 'expectativa', caption: '😂 Kevin Golazos ha publicado', data: { e: clip(a?.e || `${tname(lg, worst)} en verano: «Este año la liga es mía» 🏆`, 70), r: clip(a?.r || `Jornada ${md}: ${P.pos[worst]}º con ${P.row(worst).pts} puntos 🤖`, 76) } };
  }

  function onceIdeal(lg, d) {
    const all = []; d.m.forEach(m => ratingsOf(m).forEach(x => { if (x.mins >= 45) all.push({ ...x, t: x.s ? m.a : m.h, l: LINE[ppos(x.pid)] || 'M' }); }));
    const by = l => all.filter(x => x.l === l).sort((a, b) => b.r - a.r);
    const G = by('G').slice(0, 1), D = by('D').slice(0, 4), M = by('M').slice(0, 3), A = by('A').slice(0, 3);
    if (G.length < 1 || D.length < 4 || M.length < 3 || A.length < 3) return null;
    const P = (x, px, py) => ({ x: px, y: py, r: x.r.toFixed(1), nombre: pname(x.pid), eq: tname(lg, x.t) });
    const ps = [P(G[0], 50, 90), ...D.map((x, i) => P(x, [16, 38, 62, 84][i], [70, 74, 74, 70][i])), ...M.map((x, i) => P(x, [24, 50, 76][i], [49, 44, 49][i])), ...A.map((x, i) => P(x, [18, 50, 82][i], [16, 10, 16][i]))];
    const hs = ps.filter(p => X.humansIdx(lg).some(i => tname(lg, i) === p.eq)).length;
    return { kind: 'onceideal', caption: `⭐ El once ideal de la jornada ${d.md}`, data: { cab: 'JORNADA ' + d.md, titulo: hs ? 'Los mejores de la jornada' : 'La IA domina el once', ps } };
  }

  function clasificacion(lg, md) {
    const P = X.tableOf(lg, X.seasonDocs(lg, md)), n = P.tb.length, H = new Set(X.humansIdx(lg)), q = Math.min(4, Math.floor(lg.cfg.n / 2));
    const show = P.tb.map((r, i) => ({ r, i })).filter(({ r, i }) => i < 5 || H.has(r.t) || i === n - 1).slice(0, 7);
    const rows = show.map(({ r, i }) => ({ pos: i + 1, n: X.isHuman(lg, r.t) ? tname(lg, r.t) : tname(lg, r.t) + ' (IA)', tag: H.has(r.t) ? (i === n - 1 ? 'farolillo' : X.mgr(lg, r.t) || '') : '', pj: r.pj ?? (r.g + r.e + r.p) ?? md, dg: (r.gf ?? 0) - (r.gc ?? 0), pts: r.pts, h: H.has(r.t), cl: i < q, dn: i === n - 1 }));
    return { kind: 'clasificacion', caption: `📊 Así va la liga · jornada ${md}`, data: { titulo: 'Así va la liga', rows } };
  }

  async function tierlist(lg, md) {
    const P = X.tableOf(lg, X.seasonDocs(lg, md)), H = X.humansIdx(lg); if (!H.length) return null;
    const bestAI = P.tb.find(r => !X.isHuman(lg, r.t)); const ids = [...H, ...(bestAI ? [bestAI.t] : [])].sort((a, b) => P.pos[a] - P.pos[b]).slice(0, 5);
    const tiers = ['S', 'A', 'B', 'C', 'F'], cols = { S: '#ffd400', A: '#7dff6a', B: '#5ad1ff', C: '#c9a0ff', F: '#ff5a7a' };
    const assign = ids.map((t, k) => ids.length === 1 ? 'A' : k === ids.length - 1 ? 'F' : tiers[Math.min(k, 3)]);
    const a = await ai('Eres Kevin Golazos, influencer de fútbol con mucho postureo. Haz tu TIER LIST de místers. "titulo": máx 44 caracteres. "coms": un comentario por equipo en el mismo orden (máx 48 cada uno), según su tier, puntos y racha. "cta": llamada a comentar (máx 32).', { jornada: md, equipos: ids.map((t, k) => ({ equipo: label(lg, t), tier: assign[k], pos: P.pos[t], pts: P.row(t).pts, racha: formStr(P.row(t).form), ia: !X.isHuman(lg, t) })) }, '{"titulo","coms":[],"cta"}');
    const fb = (t, k) => !X.isHuman(lg, t) ? pick(['Una máquina compitiendo mejor que humanos 💀', 'La IA no descansa ni cobra.']) : assign[k] === 'S' ? pick(['Ni lo despeinan.', 'Esto ya huele a título.']) : assign[k] === 'F' ? pick(['Sin palabras. Bueno, alguna sí.', 'Que alguien le quite el mando.']) : assign[k] === 'A' ? pick(['Ahí ahí, pero falta algo.', 'Candidato serio. De momento.']) : pick(['Ni fu ni fa.', 'Mucho mercado, poco campo.', 'Regular tirando a mal.']);
    return { kind: 'tierlist', caption: '😎 Kevin Golazos ha publicado su tier list', data: { titulo: clip(a?.titulo || `Tier list de místers tras la jornada ${md}`, 48), rows: ids.map((t, k) => ({ tier: assign[k], col: cols[assign[k]], nombre: label(lg, t), com: clip(a?.coms?.[k] || fb(t, k), 52) })), cta: clip(a?.cta || 'Comenta 🔥 si estás de acuerdo', 36) } };
  }

  function encuesta(lg) {
    const docs = X.seasonDocs(lg), P = X.tableOf(lg, docs), H = X.humansIdx(lg); if (!H.length) return null;
    const bestAI = P.tb.find(r => !X.isHuman(lg, r.t));
    const qs = [{ q: '¿Quién ganará la liga?', ids: [...H, ...(bestAI ? [bestAI.t] : [])], w: t => Math.exp((P.row(t)?.pts || 0) / 4) * (0.6 + Math.random()) }];
    if (H.length >= 2) qs.push({ q: '¿Quién acabará último de los amigos?', ids: H, w: t => Math.exp(-(P.row(t)?.pts || 0) / 4) * (0.6 + Math.random()) }, { q: '¿Quién ficha mejor?', ids: H, w: () => 0.4 + Math.random() });
    const Q = pick(qs), ws = Q.ids.map(t => ({ t, w: Q.w(t) })), tot = ws.reduce((a, x) => a + x.w, 0);
    let ops = ws.map(x => ({ n: X.isHuman(lg, x.t) ? tname(lg, x.t) : `La IA (${tname(lg, x.t)})`, p: Math.max(1, Math.round(x.w / tot * 100)) })).sort((a, b) => b.p - a.p).slice(0, 4);
    const diff = 100 - ops.reduce((a, o) => a + o.p, 0); ops[0].p += diff;
    return { kind: 'encuesta', caption: '🗳️ Encuesta de Vestuario', data: { votos: (800 + Math.floor(Math.random() * 3200)).toLocaleString('es-ES'), pregunta: Q.q, ops, pie: docs.length ? `Votación cerrada · Jornada ${docs.length}` : 'Votación cerrada · Pretemporada' } };
  }

  async function bombazo(lg, f) {
    // f: { tipo: 'oferta'|'rumor', from, to, pid, price }
    const pn = pname(f.pid), now = Date.now();
    const a = await ai('Eres Paco Bombazo, periodista de fichajes exagerado. Escribe tu post. "etiqueta": EXCLUSIVA / ÚLTIMA HORA / BOMBAZO (máx 14). "texto": máx 210 caracteres, menciona club comprador, vendedor, jugador y cifra; pon en **dobles asteriscos** los nombres y la cifra. "remate": tu coletilla final, por ejemplo "¡ATADO Y BIEN ATADO! 🔒" u otra parecida tuya (máx 28).', { tipo: f.tipo === 'oferta' ? 'oferta real hecha en el juego' : 'rumor (no confirmado)', comprador: label(lg, f.from), vendedor: f.to != null ? label(lg, f.to) : 'agente libre', jugador: pn, posicion: ppos(f.pid), cifra: fmtM(f.price) }, '{"etiqueta","texto","remate"}');
    const txt = a?.texto || (f.tipo === 'oferta' ? `**${tname(lg, f.from)}** ha ofrecido **${fmtM(f.price)}** a **${f.to != null ? tname(lg, f.to) : 'nadie'}** por **${pn}**. Contactos muy avanzados 👀` : `**${tname(lg, f.from)}** sigue muy de cerca a **${pn}**. Hay sondeo por **${fmtM(f.price)}**. Atentos 👀`);
    const r = 200 + Math.random() * 3000;
    return { kind: 'bombazo', caption: `🚨 Paco Bombazo · ${pn}`, data: { etiqueta: clip(a?.etiqueta || (f.tipo === 'oferta' ? 'EXCLUSIVA' : 'BOMBAZO'), 16).toUpperCase(), textoHTML: esc(clip(txt, 230)).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'), remate: clip(a?.remate || '¡ATADO Y BIEN ATADO! 🔒', 30), hora: hora(now), fecha: new Date(now).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/Madrid' }), r1: k(Math.round(r * 4)), r2: k(Math.round(r * 15)), r3: k(Math.round(r * 70)) } };
  }

  async function ultimaHora(lg, f) {
    // f: { tipo: 'rechazo'|'venta', ...datos }
    const a = await ai('Rótulo de "ÚLTIMA HORA" del canal de noticias "Amigos 24H". "titular": máx 58 caracteres en mayúsculas. "sub": declaración inventada o detalle (máx 100). "ticker": noticia secundaria corta con otros datos que te doy (máx 110).', f.facts, '{"titular","sub","ticker"}');
    return { kind: 'ultimahora', caption: '📺 Amigos 24H · Última hora', data: { bg: pick(['despacho', 'stadium', 'vestuario']), hora: hora(Date.now()), etiqueta: 'Última hora', seccion: 'MERCADO', titular: clip(a?.titular || f.fb.titular, 62).toUpperCase(), sub: clip(a?.sub || f.fb.sub, 110), ticker: clip(a?.ticker || f.fb.ticker, 120) } };
  }

  function fichaje(lg, i, name, amt, via) {
    const t = X.teamsArr(lg)[i]; const pid = (t.squad || []).find(id => pname(id) === name); if (!pid) return null;
    const p = E.player(pid), w = name.split(' '), last = w.length > 1 ? w.slice(0, -1).join(' ') + '<br>' + esc(w[w.length - 1]) : esc(name);
    return { kind: 'fichaje', caption: `✍️ OFICIAL · ${name} ficha por ${t.name}`, data: { team: t, c1: (t.colors || ['#2b5cff'])[0], dorsal: 2 + (name.length * 7) % 27, club: t.name.toUpperCase(), nombreHTML: w.length > 1 ? esc(w.slice(0, -1).join(' ')) + '<br>' + esc(w[w.length - 1]) : last, info: [[fmtM(Math.abs(amt)), via], [String(E.ovr(pid, lg.cfg.season, t.xp?.[pid] || 0)), 'Media'], [String(E.age(p, lg.cfg.season)), 'Años'], [p.pos, 'Posición']] } };
  }

  async function caraacara(lg, ev, h, aT) {
    const P = X.tableOf(lg, X.seasonDocs(lg)), r = X.h2h(lg, h, aT);
    const side = t => ({ team: team(lg, t), c: (team(lg, t).colors || ['#c8102e'])[0], nombreHTML: twoLines(tname(lg, t)), mister: X.mgr(lg, t) || 'Míster', pos: `${P.pos[t]}º`, pts: `${P.row(t)?.pts ?? 0} pts`, racha: formStr(P.row(t)?.form) });
    const a = await ai('Cartel del DERBI estilo velada de boxeo. "lema": frase épica corta en mayúsculas (máx 26). "sub": frase de pique (máx 60), menciona la apuesta o el cara a cara si quieres.', { local: label(lg, h), visitante: label(lg, aT), cara_a_cara: `${r.wa} victorias ${tname(lg, h)}, ${r.dr} empates, ${r.wb} victorias ${tname(lg, aT)}` }, '{"lema","sub"}');
    return { kind: 'caraacara', caption: `🥊 Esta noche, el derbi: ${tname(lg, h)} vs ${tname(lg, aT)}`, data: { cuando: `${ev.name} · ${hora(ev.at)}`, a: side(h), b: side(aT), lema: clip(a?.lema || pick(['SOLO PUEDE QUEDAR UNO', 'NOCHE DE DERBI', 'EL GRUPO MIRA']), 28).toUpperCase(), sub: clip(a?.sub || `El que pierda paga las cañas 🍻 · Cara a cara: ${r.wa}-${r.dr}-${r.wb}`, 70) } };
  }

  return { portada, radio, notas, chat, comunicado, expectativa, onceIdeal, clasificacion, tierlist, encuesta, bombazo, ultimaHora, fichaje, caraacara, mainStory };
}
