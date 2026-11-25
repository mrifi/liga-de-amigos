/* Motor del juego: lógica pura, sin DOM. Todo es determinista a partir de semillas. */
(function (G) {
  'use strict';
  const SEG = 3, HOME_P = .03, PRES_P = .08, DAY = 86400000, LIVE_MS = 4 * 60000, BASE_YEAR = 2026, START_CASH = 40, TICKET = 45;
  const PRIZE = { w: 1.0, d: 0.45, l: 0.15 };
  // el club empieza en un campo municipal y crece con su afición (estilo Top Eleven)
  const STADIUM = [
    { n: 'Campo municipal', d: 'Grada de tubo en un lateral y vallas de obra.', cap: 1500, cost: 0, h: 0, fair: 12 },
    { n: 'Estadio de barrio', d: 'Dos gradas cubiertas y marcador manual.', cap: 4000, cost: 3, h: 12, fair: 16 },
    { n: 'Estadio regional', d: 'Cuatro gradas, focos y palco pequeño.', cap: 9000, cost: 8, h: 24, fair: 22 },
    { n: 'Estadio de Segunda', d: 'Gradas de hormigón, videomarcador y zona VIP.', cap: 18000, cost: 16, h: 36, fair: 30 },
    { n: 'Estadio de Primera', d: 'Doble anillo cubierto y palcos.', cap: 35000, cost: 30, h: 48, fair: 42 },
    { n: 'Gran estadio', d: 'Un coliseo moderno de tres anillos.', cap: 65000, cost: 55, h: 72, fair: 58 }];
  const stLvl = (team, now) => { let l = clamp(team.stadium || 0, 0, 5); const b = team.build; if (b && b.k === 'stadium' && (now || Date.now()) < b.done) l = Math.min(l, b.lvl - 1); return l; };
  const POS = ['POR', 'DFC', 'LD', 'LI', 'MCD', 'MC', 'MCO', 'ED', 'EI', 'DC'];
  const LINE = { POR: 'G', DFC: 'D', LD: 'D', LI: 'D', MCD: 'M', MC: 'M', MCO: 'M', ED: 'A', EI: 'A', DC: 'A' };
  const FORMS = {
    '4-3-3': ['POR', 'LD', 'DFC', 'DFC', 'LI', 'MCD', 'MC', 'MC', 'ED', 'DC', 'EI'],
    '4-4-2': ['POR', 'LD', 'DFC', 'DFC', 'LI', 'ED', 'MC', 'MC', 'EI', 'DC', 'DC'],
    '4-2-3-1': ['POR', 'LD', 'DFC', 'DFC', 'LI', 'MCD', 'MCD', 'ED', 'MCO', 'EI', 'DC'],
    '4-1-4-1': ['POR', 'LD', 'DFC', 'DFC', 'LI', 'MCD', 'ED', 'MC', 'MC', 'EI', 'DC'],
    '3-5-2': ['POR', 'DFC', 'DFC', 'DFC', 'LD', 'MCD', 'MC', 'MC', 'LI', 'DC', 'DC'],
    '5-3-2': ['POR', 'LD', 'DFC', 'DFC', 'DFC', 'LI', 'MC', 'MCD', 'MC', 'DC', 'DC']
  };
  const BACK4 = [[50, 92], [86, 72], [62, 77], [38, 77], [14, 72]];
  const COORD = {
    '4-3-3': [...BACK4, [50, 58], [72, 45], [28, 45], [84, 23], [50, 15], [16, 23]],
    '4-4-2': [...BACK4, [86, 45], [62, 50], [38, 50], [14, 45], [62, 18], [38, 18]],
    '4-2-3-1': [...BACK4, [64, 58], [36, 58], [84, 33], [50, 36], [16, 33], [50, 14]],
    '4-1-4-1': [...BACK4, [50, 60], [86, 40], [63, 44], [37, 44], [14, 40], [50, 15]],
    '3-5-2': [[50, 92], [74, 76], [50, 79], [26, 76], [89, 47], [50, 59], [68, 44], [32, 44], [11, 47], [62, 18], [38, 18]],
    '5-3-2': [[50, 92], [91, 64], [71, 76], [50, 79], [29, 76], [9, 64], [72, 46], [50, 55], [28, 46], [62, 18], [38, 18]]
  };
  // pesos de cada puesto en ataque, medio y defensa
  const W = { POR: [0, 0, 0], DFC: [0, .1, 1], LD: [.15, .2, .75], LI: [.15, .2, .75], MCD: [0, .8, .45], MC: [.25, 1, .2], MCO: [.6, .7, 0], ED: [.85, .3, .05], EI: [.85, .3, .05], DC: [1, .1, 0] };
  const K = [3.4, 3.6, 5.2];
  const SCW = { POR: 0, DFC: .35, LD: .45, LI: .45, MCD: .6, MC: 1.2, MCO: 2.4, ED: 3, EI: 3, DC: 5 };
  const ASW = { POR: .05, DFC: .4, LD: 1.2, LI: 1.2, MCD: .8, MC: 2, MCO: 3, ED: 3, EI: 3, DC: 1.5 };
  const PAIRS = { 'LD-LI': .9, 'DFC-LD': .85, 'DFC-LI': .85, 'DFC-MCD': .84, 'MC-MCD': .93, 'MC-MCO': .93, 'MCD-MCO': .82, 'ED-LD': .82, 'EI-LI': .82, 'ED-EI': .9, 'ED-MCO': .86, 'EI-MCO': .86, 'DC-MCO': .84, 'DC-ED': .86, 'DC-EI': .86, 'ED-MC': .8, 'EI-MC': .8 };
  const ADJ = { G: 'D', D: 'GM', M: 'DA', A: 'M' };

  function fit(pp, sp) {
    if (pp === sp) return 1;
    if (pp === 'POR' || sp === 'POR') return .3;
    const k = [pp, sp].sort().join('-');
    if (PAIRS[k]) return PAIRS[k];
    const a = LINE[pp], b = LINE[sp];
    if (a === b) return .8;
    return ADJ[a].includes(b) ? .65 : .5;
  }
  function hash(s) { let h = 2166136261 >>> 0; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) {
    let a = (typeof seed === 'string' ? hash(seed) : seed) >>> 0;
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  const pick = (r, a) => a[Math.floor(r() * a.length)];
  function wpick(r, items, wf) {
    let tot = 0; const ws = items.map(x => { const w = Math.max(0, wf(x)); tot += w; return w; });
    if (!items.length) return null;
    if (tot <= 0) return items[Math.floor(r() * items.length)];
    let v = r() * tot;
    for (let i = 0; i < items.length; i++) { v -= ws[i]; if (v <= 0) return items[i]; }
    return items[items.length - 1];
  }
  const r1 = x => Math.round(x * 10) / 10;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  /* ---------- jugadores ---------- */
  const P = {}; const REAL = [];
  G.REAL_RAW.trim().split('\n').forEach((l, i) => {
    const [name, pos, by, o, nat] = l.split(';');
    const p = { id: 'r' + i, name, pos, by: +by, base: +o, nat, real: true, s0: 1 };
    P[p.id] = p; REAL.push(p);
  });
  function genPlayer(id) {
    const r = rng('gen' + id), N = G.GEN_NAMES, parts = id.split('-');
    let pos, by, base, s0 = 1;
    if (parts[0] === 'f') { pos = parts[1]; base = 60 + Math.floor(r() * 12); by = BASE_YEAR - (21 + Math.floor(r() * 12)); }
    else if (parts[0] === 'e') { s0 = +parts[1] || 1; pos = parts[3]; base = +parts[5] || 80; by = BASE_YEAR + s0 - 1 - (22 + Math.floor(r() * 10)); }
    else { s0 = +parts[1] || 1; pos = wpick(r, POS, p => p === 'POR' ? .8 : p === 'DFC' || p === 'MC' ? 2 : p === 'DC' ? 1.6 : 1.1); base = 54 + Math.floor(r() * 14) + 2 * (+parts[4] || 0) + (parts[5] === 'p' ? 5 : 0); by = BASE_YEAR + s0 - 1 - (17 + Math.floor(r() * 3)); }
    const p = { id, name: pick(r, N.first) + ' ' + pick(r, N.last), pos, by, base, nat: pick(r, N.nat), real: false, young: parts[0] === 'y', s0 };
    P[id] = p; return p;
  }
  const player = id => P[id] || genPlayer(id);
  const age = (p, S) => BASE_YEAR + S - 1 - p.by;
  function pot(p) { const a0 = BASE_YEAR + p.s0 - 1 - p.by; return Math.min(95, p.base + Math.max(0, 26 - a0) * 2.2 + 2 + (p.young ? 4 : 0)); }
  function ageDelta(p, S) {
    let d = 0;
    for (let s = p.s0; s < S; s++) { const a = BASE_YEAR + s - 1 - p.by; d += a < 21 ? 2.5 : a < 24 ? 1.5 : a < 28 ? .5 : a < 31 ? 0 : a < 33 ? -1.5 : -2.5; }
    return d;
  }
  function ovr(id, S, xp) { const p = player(id); return clamp(Math.round(Math.min(p.base + Math.floor((xp || 0) / 100), Math.max(p.base, pot(p))) + ageDelta(p, S)), 40, 97); }
  function value(o, a) { const f = a <= 21 ? 1.35 : a <= 24 ? 1.2 : a <= 29 ? 1 : a <= 31 ? .75 : a <= 33 ? .5 : .3; return Math.max(.1, r1(Math.exp((o - 60) * .16) * f)); }
  const wage = v => Math.max(.01, v * .0013);
  function pval(id, S, xp) { return value(ovr(id, S, xp), age(player(id), S)); }

  /* ---------- calendario y draft ---------- */
  function fixtures(n, seed) {
    const r = rng('fx' + seed); const ids = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
    const rounds = []; let arr = ids.slice();
    for (let k = 0; k < n - 1; k++) {
      const m = [];
      for (let i = 0; i < n / 2; i++) { const a = arr[i], b = arr[n - 1 - i]; m.push((k + i) % 2 ? [a, b] : [b, a]); }
      rounds.push(m); arr = [arr[0], arr[n - 1], ...arr.slice(1, n - 1)];
    }
    return rounds.concat(rounds.map(m => m.map(([h, a]) => [a, h])));
  }
  const STEPS = [[['POR'], 2], [['DFC'], 3], [['LD'], 1], [['LI'], 1], [['DFC', 'LD', 'LI'], 1], [['MCD'], 1], [['MC'], 2], [['MCO'], 1], [['MCD', 'MC', 'MCO'], 2], [['ED'], 1], [['EI'], 1], [['DC'], 2], [['ED', 'EI', 'DC', 'MCO'], 1]];
  function draft(n, seed) {
    const r = rng('dr' + seed); const squads = [...Array(n)].map(() => []); const used = new Set(); let fill = 0;
    for (const [set, c] of STEPS) {
      const list = REAL.filter(p => !used.has(p.id) && set.includes(p.pos)).map(p => ({ p, k: p.base + r() * 2.5 })).sort((a, b) => b.k - a.k).map(x => x.p.id);
      const chosen = list.slice(0, c * n);
      while (chosen.length < c * n) chosen.push(player('f-' + pick(r, set) + '-' + (fill++)).id);
      chosen.forEach(id => used.add(id));
      const order = [...Array(n).keys()];
      for (let a = n - 1; a > 0; a--) { const b = Math.floor(r() * (a + 1)); [order[a], order[b]] = [order[b], order[a]]; }
      chosen.forEach((id, i) => { const rd = Math.floor(i / n), k = i % n; squads[order[rd % 2 ? n - 1 - k : k]].push(id); });
    }
    return squads;
  }
  function freeAgents(owned) {
    const ids = REAL.map(p => p.id);
    POS.forEach(pos => { for (let k = 0; k < 4; k++) ids.push('f-' + pos + '-' + (900 + k)); });
    return ids.filter(id => !owned.has(id));
  }

  /* ---------- estado derivado de los resultados ---------- */
  function deriveState(docs, adj) {
    const ps = {};
    const get = id => ps[id] || (ps[id] = { cond: 100, out: 0, why: '', g: 0, a: 0, apps: 0, rs: 0, y: 0 });
    for (const d of docs) {
      for (const m of d.m) {
        for (const s of [0, 1]) for (const pid in m.min[s]) {
          const mn = m.min[s][pid]; const st = get(pid);
          if (mn > 0) { st.cond -= 4 + 22 * mn / 90 + (m.pr[s] ? 3 : 0); st.apps++; st.rs += m.rat[pid] || 6; }
        }
        for (const e of m.ev) {
          if (e.t === 'gol') { get(e.p).g++; if (e.a) get(e.a).a++; }
          if (e.t === 'ama') get(e.p).y++;
          if (e.t === 'les') { const st = get(e.p); st.out = Math.max(st.out, d.md + e.n); st.why = 'Lesión'; }
          if (e.t === 'roja') { const st = get(e.p); if (st.out < d.md + 1) { st.out = d.md + 1; st.why = 'Sanción'; } }
        }
      }
      for (const id in ps) ps[id].cond = Math.min(100, Math.max(30, ps[id].cond) + 18);
      if (adj) {
        const key = d.season + ':' + (d.md + 1);
        for (const pid in adj.heal || {}) if (adj.heal[pid] === key) { const st = get(pid); st.out = Math.min(st.out, d.md); }
        for (const pid in adj.boost || {}) if (adj.boost[pid] === key) get(pid).cond = 100;
      }
    }
    return ps;
  }
  function table(n, docs) {
    const rows = [...Array(n)].map((_, t) => ({ t, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0, form: [] }));
    for (const d of docs) for (const m of d.m) {
      const H = rows[m.h], A = rows[m.a];
      H.pj++; A.pj++; H.gf += m.hg; H.gc += m.ag; A.gf += m.ag; A.gc += m.hg;
      if (m.hg > m.ag) { H.g++; A.p++; H.pts += 3; H.form.push('G'); A.form.push('P'); }
      else if (m.hg < m.ag) { A.g++; H.p++; A.pts += 3; A.form.push('G'); H.form.push('P'); }
      else { H.e++; A.e++; H.pts++; A.pts++; H.form.push('E'); A.form.push('E'); }
    }
    return rows.sort((a, b) => b.pts - a.pts || (b.gf - b.gc) - (a.gf - a.gc) || b.gf - a.gf || a.t - b.t);
  }
  function prize(rank, n) { return r1(25 - rank * (22 / Math.max(1, n - 1))); }

  /* ---------- alineaciones ---------- */
  function makeCtx(team, S, state, md) {
    const cache = {};
    const o = id => cache[id] ?? (cache[id] = ovr(id, S, team.xp?.[id] || 0));
    const cond = id => state[id]?.cond ?? 100;
    return { ovr: o, cond, ok: id => !(state[id] && state[id].out >= md), eff: (id, pos) => o(id) * fit(player(id).pos, pos) * (.7 + .3 * cond(id) / 100) };
  }
  function bestFor(pos, cands, ctx, used) { let best = null, bv = -1; for (const id of cands) { if (used.has(id)) continue; const v = ctx.eff(id, pos); if (v > bv) { bv = v; best = id; } } return best; }
  function fillBench(pool, used, pref, ctx) {
    const bench = pref.filter(id => !used.has(id)).slice(0, 7);
    const rest = pool.filter(id => !used.has(id) && !bench.includes(id)).sort((a, b) => ctx.ovr(b) - ctx.ovr(a));
    if (!bench.some(id => player(id).pos === 'POR')) { const gk = rest.find(id => player(id).pos === 'POR'); if (gk) { bench.push(gk); rest.splice(rest.indexOf(gk), 1); } }
    for (const id of rest) { if (bench.length >= 7) break; bench.push(id); }
    return bench.slice(0, 7);
  }
  function autoXI(squad, form, ctx) {
    const slots = FORMS[form], used = new Set(), xi = Array(11).fill(null), pool = squad.filter(ctx.ok);
    const order = slots.map((pos, i) => ({ i, pos, c: pool.filter(id => player(id).pos === pos).length })).sort((a, b) => (a.pos === 'POR' ? -1 : b.pos === 'POR' ? 1 : a.c - b.c));
    for (const o of order) { const id = bestFor(o.pos, pool, ctx, used); if (id) { xi[o.i] = id; used.add(id); } }
    return { form, xi, bench: fillBench(pool, used, [], ctx) };
  }
  const xiScore = (l, ctx) => l.xi.reduce((a, id, i) => a + (id ? ctx.eff(id, FORMS[l.form][i]) : 0), 0);
  function aiLineup(squad, ctx) { let best = null, bs = -1; for (const f in FORMS) { const l = autoXI(squad, f, ctx); const s = xiScore(l, ctx); if (s > bs) { bs = s; best = l; } } return best; }
  function resolveLineup(team, ctx) {
    const L = team.lineup;
    if (!team.owner || !L || !FORMS[L.form]) return aiLineup(team.squad, ctx);
    const slots = FORMS[L.form], sq = new Set(team.squad), used = new Set(), xi = Array(11).fill(null), pool = team.squad.filter(ctx.ok);
    (L.xi || []).forEach((id, i) => { if (i < 11 && id && sq.has(id) && ctx.ok(id) && !used.has(id)) { xi[i] = id; used.add(id); } });
    const pref = (L.bench || []).filter(id => sq.has(id) && ctx.ok(id) && !used.has(id));
    xi.forEach((id, i) => { if (!id) { const c = bestFor(slots[i], pref.filter(x => !used.has(x)).length ? pref : pool, ctx, used) || bestFor(slots[i], pool, ctx, used); if (c) { xi[i] = c; used.add(c); } } });
    return { form: L.form, xi, bench: fillBench(pool, used, pref, ctx) };
  }
  function lineStrength(lin, ctx) {
    let a = 0, wa = 0, m = 0, wm = 0, d = 0, wd = 0, g = 30;
    lin.xi.forEach((id, i) => {
      if (!id) return; const pos = FORMS[lin.form][i], e = ctx.eff(id, pos);
      if (pos === 'POR') { g = e; return; } const w = W[pos];
      a += e * w[0]; wa += w[0]; m += e * w[1]; wm += w[1]; d += e * w[2]; wd += w[2];
    });
    const f = (s, w, k) => w > 0 ? (s / w) * Math.pow(w / k, .2) : 30;
    return { A: f(a, wa, K[0]), M: f(m, wm, K[1]), D: f(d, wd, K[2]), G: g };
  }

  /* ---------- simulación de un partido ---------- */
  /* ---------- atributos por jugador ----------
     Se derivan de la media y del puesto (con una variación fija por jugador), así no hay que meter datos a mano. */
  const ATR = ['vel', 'tir', 'pas', 'reg', 'def', 'fis'];
  const ATR_N = { vel: 'Velocidad', tir: 'Tiro', pas: 'Pase', reg: 'Regate', def: 'Defensa', fis: 'Físico', por: 'Portería' };
  const PROF = { POR: [-14, -30, -12, -25, -18, 0], DFC: [-4, -18, -6, -12, 4, 4], LD: [3, -12, -2, -3, 1, -1], LI: [3, -12, -2, -3, 1, -1], MCD: [-4, -8, 2, -5, 3, 3], MC: [-2, -4, 4, 1, -4, 0], MCO: [0, 1, 4, 4, -12, -4], ED: [5, -1, 0, 4, -15, -4], EI: [5, -1, 0, 4, -15, -4], DC: [2, 4, -6, 1, -18, 2] };
  function attrs(id, o) {
    const p = player(id), r = rng('atr' + id), pr = PROF[p.pos], a = {};
    ATR.forEach((k, i) => a[k] = clamp(Math.round(o + pr[i] + (r() - .5) * 9), 20, 99));
    a.por = p.pos === 'POR' ? clamp(Math.round(o + (r() - .5) * 3), 30, 99) : 15;
    return a;
  }

  /* ---------- motor de partido 2.0 ----------
     Un minuto = una fase de posesión. El equipo con el balón intenta progresar (creación contra defensa + presión);
     si progresa, la jugada acaba en tiro, centro, regate, penalti o fuera de juego; si no, el rival roba (a veces con
     falta). Las tácticas se contrarrestan entre sí y las órdenes de los mánagers cambian el partido desde su minuto. */
  const KQ = { nor: 1, cab: .75, con: 1.35, fal: .55 };
  function simCore(pre, orders, lv) {
    // lv: partido en directo. Cada tramo de SEG minutos usa una semilla (lv.sl[i]) que se sortea justo antes de jugarse,
    // así nadie (ni el propio juego) conoce el resultado antes de tiempo. lv.pr[i] = equipos con el míster conectado.
    let r = rng(lv ? pre.seed + ':g0:' + lv.sl[0] : pre.seed), part = null, pres = [0, 0];
    const ev = [], mins = [{}, {}], lastPos = {}, goals = [0, 0], shots = [0, 0], ot = [0, 0], poss = [0, 0];
    const stats = { rob: [0, 0], fal: [0, 0], cor: [0, 0], off: [0, 0] };
    const T = [0, 1].map(s => {
      const sd = pre.side[s], P = {};
      for (const id in sd.p) { const [o, c] = sd.p[id]; P[id] = { id, o, c, a: attrs(id, o), pos0: player(id).pos }; }
      return { s, tac: { ...sd.tac }, mor: sd.mor, human: !!sd.human, auto: sd.auto !== false, med: sd.med || 0, subs: 0, manual: false, P, form: sd.form, bench: sd.bench.filter(id => P[id]), on: sd.xi.map((id, i) => id && P[id] ? { id, pos: FORMS[sd.form][i], from: 0, y: 0 } : null).filter(Boolean) };
    });
    T.forEach(t => t.on.forEach(x => { mins[t.s][x.id] = 0; lastPos[x.id] = x.pos; }));
    const ords = (orders || []).filter(o => o && o.m >= 1 && o.m <= 93).sort((a, b) => a.m - b.m || (a.t || 0) - (b.t || 0));
    const curCond = (t, x, m) => Math.max(20, t.P[x.id].c - (m - x.from) * (t.tac.press === 'alt' ? .16 : .12));
    const eff = (t, x, m) => fit(t.P[x.id].pos0, x.pos) * (.7 + .3 * curCond(t, x, m) / 100) * t.mor;
    function rate(t, m) {
      let crea = 0, wc = 0, fin = 0, wf = 0, de = 0, wd = 0, gk = 25, velA = 0, nA = 0, velD = 0, nD = 0, prs = 0, np = 0;
      for (const x of t.on) {
        const a = t.P[x.id].a, e = eff(t, x, m); x.e = e * t.P[x.id].o;
        if (x.pos === 'POR') { gk = a.por * e; continue; }
        const w = W[x.pos];
        crea += (a.pas * .6 + a.reg * .4) * e * w[1]; wc += w[1]; fin += (a.tir * .7 + a.reg * .3) * e * w[0]; wf += w[0]; de += (a.def * .75 + a.fis * .25) * e * w[2]; wd += w[2];
        if (LINE[x.pos] === 'A' || x.pos === 'MCO') { velA += a.vel * e; nA++; }
        if (LINE[x.pos] === 'D') { velD += a.vel * e; nD++; }
        if (LINE[x.pos] !== 'D') { prs += (a.fis * .5 + a.vel * .5) * e; np++; }
      }
      const f = (s, w, k) => w > 0 ? (s / w) * Math.pow(w / k, .2) : 25;
      const R = { crea: f(crea, wc, K[1]), fin: f(fin, wf, K[0]), def: f(de, wd, K[2]), gk, velA: nA ? velA / nA : 40, velD: nD ? velD / nD : 40, prs: np ? prs / np : 40 };
      const tc = t.tac;
      if (tc.ment === 'ofe') { R.fin *= 1.04; R.crea *= 1.03; R.def *= .95; }
      if (tc.ment === 'def') { R.fin *= .95; R.crea *= .97; R.def *= 1.05; }
      if (tc.press === 'alt') R.prs *= 1.1; if (tc.press === 'baj') { R.prs *= .9; R.def *= 1.02; }
      if (t.s === 0) for (const k in R) R[k] *= 1.02;
      return R;
    }
    let R = [rate(T[0], 0), rate(T[1], 0)];
    const reRate = m => { R = [rate(T[0], m), rate(T[1], m)]; };
    const pick = (t, wf) => t.on.length ? wpick(r, t.on, wf) : null;
    function leave(t, x, m) { mins[t.s][x.id] = (mins[t.s][x.id] || 0) + Math.min(90, m) - x.from; t.on.splice(t.on.indexOf(x), 1); }
    function bestBench(t, pos) { let b = null, bv = -1; for (const id of t.bench) { const v = t.P[id].o * fit(t.P[id].pos0, pos); if (v > bv) { bv = v; b = id; } } return b; }
    function enter(t, id, pos, m, outId) { t.subs++; t.bench.splice(t.bench.indexOf(id), 1); t.on.push({ id, pos, from: m, y: 0 }); mins[t.s][id] = 0; lastPos[id] = pos; ev.push({ m, t: 'cam', s: t.s, p: id, q: outId }); }
    function sub(t, x, m) {
      const inId = t.subs < 5 ? bestBench(t, x.pos) : null, pos = x.pos;
      leave(t, x, m);
      if (inId) enter(t, inId, pos, m, x.id);
      else if (pos === 'POR' && t.on.length) { const y = t.on.reduce((a, b) => (a.e < b.e ? a : b)); y.pos = 'POR'; }
    }
    function sendOff(t, x, m) {
      const wasGK = x.pos === 'POR'; leave(t, x, m);
      if (wasGK && t.on.length) {
        const gk = t.subs < 5 ? t.bench.find(id => t.P[id].pos0 === 'POR') : null;
        if (gk) { const y = t.on.reduce((a, b) => (a.e < b.e ? a : b)); leave(t, y, m); enter(t, gk, 'POR', m, y.id); }
        else t.on[0].pos = 'POR';
      }
    }
    function card(s, x, m) {
      const t = T[s]; if (!x || !t.on.includes(x)) return;
      if (r() < .015) { ev.push({ m, t: 'roja', s, p: x.id }); sendOff(t, x, m); reRate(m); return; }
      if (r() < .3) { x.y++; if (x.y >= 2) { ev.push({ m, t: 'roja', s, p: x.id, dbl: 1 }); sendOff(t, x, m); reRate(m); } else ev.push({ m, t: 'ama', s, p: x.id }); }
    }
    function autoSubs(t, m) {
      const tired = t.on.filter(x => x.pos !== 'POR').map(x => ({ x, c: curCond(t, x, m) - (x.y ? 8 : 0) })).sort((a, b) => a.c - b.c);
      let n = 0;
      for (const { x, c } of tired) {
        if (n >= 2 || t.subs >= 5 || c > 72) break;
        const b = bestBench(t, x.pos); if (!b) break;
        if (t.P[b].o * fit(t.P[b].pos0, x.pos) >= x.e * .9) { sub(t, x, m); n++; }
      }
    }
    function setForm(t, form) {
      const slots = FORMS[form], left = t.on.slice(), order = slots.map((pos, i) => ({ pos, i })).sort((a, b) => (a.pos === 'POR' ? -1 : b.pos === 'POR' ? 1 : 0));
      const used = new Set();
      for (const { pos } of order) { let b = null, bv = -1; for (const x of left) { if (used.has(x)) continue; const v = t.P[x.id].o * fit(t.P[x.id].pos0, pos); if (v > bv) { bv = v; b = x; } } if (b) { used.add(b); b.pos = pos; lastPos[b.id] = pos; } }
      t.form = form;
    }
    function applyOrder(o, m) {
      const t = T[o.s]; if (!t) return;
      if (o.k === 'sub') { const x = t.on.find(y => y.id === o.out); if (x && t.bench.includes(o.in) && t.subs < 5) { const pos = x.pos; leave(t, x, m); enter(t, o.in, pos, m, x.id); t.manual = true; } }
      if (o.k === 'tac' && o.tac) { t.tac = { ...t.tac, ...o.tac }; ev.push({ m, t: 'tac', s: t.s, tac: { ...t.tac } }); }
      if (o.k === 'form' && FORMS[o.form]) { setForm(t, o.form); ev.push({ m, t: 'tac', s: t.s, form: o.form }); }
      reRate(m);
    }
    function aiAdjust(t, m) {
      const diff = goals[t.s] - goals[1 - t.s], old = JSON.stringify(t.tac);
      if (diff < 0 && m >= 65) t.tac = { ...t.tac, ment: 'ofe', press: 'alt' };
      else if (diff > 0 && m >= 78) t.tac = { ...t.tac, ment: 'def', press: 'med' };
      if (JSON.stringify(t.tac) !== old) { ev.push({ m, t: 'tac', s: t.s, tac: { ...t.tac }, ai: 1 }); reRate(m); }
    }
    function shoot(a, m, k, pid) {
      const A = T[a], D = T[1 - a], RA = R[a], RD = R[1 - a];
      const sc = pid ? A.on.find(x => x.id === pid) : pick(A, x => SCW[x.pos] * (k === 'cab' ? A.P[x.id].a.fis / 70 : 1) * (x.e / 80));
      if (!sc) return;
      shots[a]++;
      let q = .074 * Math.pow(RA.fin / (.75 * RD.def + .25 * RD.gk), 3) * Math.pow(A.P[sc.id].a.tir / Math.max(40, RA.fin), 1.1) * KQ[k];
      if (D.tac.press === 'baj') q *= .95; if (D.tac.ment === 'def') q *= .92; if (A.tac.est === 'dir') q *= 1.05;
      q = clamp(q, .02, .5);
      const gk = D.on.find(x => x.pos === 'POR');
      if (r() < q) {
        goals[a]++; ot[a]++;
        const as = k === 'fal' ? null : (r() < .72 ? pick(A, x => x === sc ? 0 : ASW[x.pos] * (A.P[x.id].a.pas / 70)) : null);
        ev.push({ m, t: 'gol', s: a, p: sc.id, a: as ? as.id : null, k });
      } else if (r() < .42) {
        ot[a]++; ev.push({ m, t: 'tiro', s: a, p: sc.id, r: 'par', k, g: gk ? gk.id : null });
        if (r() < .3) { ev.push({ m, t: 'cor', s: a }); stats.cor[a]++; }
      } else ev.push({ m, t: 'tiro', s: a, p: sc.id, r: r() < .08 ? 'pal' : 'fue', k });
    }
    function penalty(a, m, foulerId) {
      const A = T[a], D = T[1 - a], tk = A.on.slice().sort((x, y) => A.P[y.id].a.tir - A.P[x.id].a.tir)[0], gk = D.on.find(x => x.pos === 'POR');
      if (!tk) return;
      ev.push({ m, t: 'pen', s: a, p: tk.id, q: foulerId || null });
      if (foulerId) card(1 - a, D.on.find(x => x.id === foulerId), m);
      shots[a]++;
      const q = clamp(.76 + (A.P[tk.id].a.tir - (gk ? D.P[gk.id].a.por : 40)) / 200, .6, .9);
      if (r() < q) { goals[a]++; ot[a]++; ev.push({ m, t: 'gol', s: a, p: tk.id, a: null, k: 'pen' }); }
      else { const sv = r() < .6; if (sv) ot[a]++; ev.push({ m, t: 'tiro', s: a, p: tk.id, r: sv ? 'par' : 'fue', k: 'pen', g: gk ? gk.id : null }); }
    }
    function foul(s, m, x, victimId, danger) {
      if (!x) return; stats.fal[s]++;
      ev.push({ m, t: 'fal', s, p: x.id, q: victimId || null });
      card(s, x, m);
      if (danger && r() < .25) { const A = T[1 - s], tk = A.on.slice().sort((p, q) => A.P[q.id].a.tir - A.P[p.id].a.tir)[0]; if (tk) shoot(1 - s, m, 'fal', tk.id); }
    }
    function attack(a, m, counter) {
      const A = T[a], D = T[1 - a];
      if (r() < .05 * (A.tac.est === 'dir' ? 1.8 : 1) * (D.tac.press === 'alt' ? 1.4 : 1)) { const x = pick(A, x => LINE[x.pos] === 'A' ? 3 : x.pos === 'MCO' ? 1 : 0); if (x) { ev.push({ m, t: 'off', s: a, p: x.id }); stats.off[a]++; } return; }
      const roll = r();
      if (roll < .14) { if (r() < .5) { ev.push({ m, t: 'cor', s: a }); stats.cor[a]++; } if (r() < .45) shoot(a, m, 'cab'); return; }
      if (roll < .32) {
        const x = pick(A, x => ({ ED: 3, EI: 3, MCO: 2.5, DC: 2, MC: 1 })[x.pos] || .2), y = pick(D, x => LINE[x.pos] === 'D' ? 2 : x.pos === 'MCD' ? 1.5 : .2);
        if (!x || !y) return;
        const win = r() < clamp(.5 + (A.P[x.id].a.reg - D.P[y.id].a.def) / 60, .15, .85);
        if (win) { if (r() < .4) ev.push({ m, t: 'reg', s: a, p: x.id, q: y.id }); if (r() < .07) { penalty(a, m, y.id); return; } shoot(a, m, counter ? 'con' : 'nor', x.id); }
        else { ev.push({ m, t: r() < .4 ? 'seg' : 'rob', s: 1 - a, p: y.id, q: x.id }); stats.rob[1 - a]++; if (r() < .14) foul(1 - a, m, y, x.id, true); }
        return;
      }
      if (r() < .012) { penalty(a, m, null); return; }
      shoot(a, m, counter ? 'con' : 'nor');
    }
    function turnover(a, m) {
      const A = T[a], D = T[1 - a], RA = R[a], RD = R[1 - a], d = 1 - a;
      const y = pick(D, x => LINE[x.pos] === 'D' ? 1.6 : x.pos === 'MCD' ? 2 : LINE[x.pos] === 'M' ? 1.2 : .5), x = pick(A, x => LINE[x.pos] === 'D' ? .6 : 1.2);
      const fr = .055 * (D.tac.press === 'alt' ? 1.4 : D.tac.press === 'baj' ? .8 : 1);
      if (y && x && r() < fr) { foul(d, m, y, x.id, r() < .18); return; }
      if (y && x && r() < .34) { ev.push({ m, t: r() < .3 ? 'seg' : 'rob', s: d, p: y.id, q: x.id }); stats.rob[d]++; }
      const cp = .06 * (D.tac.est === 'con' ? 3 : 1) * (A.tac.ment === 'ofe' ? 1.8 : A.tac.ment === 'def' ? .45 : 1) * (A.tac.press === 'alt' ? 1.3 : 1) * Math.pow(RD.velA / Math.max(30, RA.velD), 2);
      if (r() < clamp(cp, .01, .3)) attack(d, m, true);
    }
    function mod(A, D) {
      let k = 1; const ea = A.tac.est, pd = D.tac.press;
      if (ea === 'pos' && pd === 'baj') k *= 1.08; if (ea === 'pos' && pd === 'alt') k *= .74;
      if (ea === 'dir' && pd === 'alt') k *= 1.2; if (ea === 'dir') k *= 1.03; if (ea === 'con') k *= .92;
      if (A.tac.ment === 'ofe') k *= 1.06; if (A.tac.ment === 'def') k *= .9; if (D.tac.ment === 'def') k *= .95;
      return k;
    }
    for (let m = 1; m <= 93; m++) {
      if (lv && (m - 1) % SEG === 0) {
        const g = (m - 1) / SEG; if (lv.sl[g] == null) { part = m - 1; break; }
        r = rng(pre.seed + ':g' + g + ':' + lv.sl[g]); const pl = lv.pr && lv.pr[g] || []; pres = [pl.includes(pre.h) ? 1 : 0, pl.includes(pre.a) ? 1 : 0];
      }
      while (ords.length && ords[0].m <= m) applyOrder(ords.shift(), m);
      if (m === 65 || m === 78) for (const t of T) if (!t.human) aiAdjust(t, m);
      if (m % 5 === 0) reRate(m);
      const est = t => ({ pos: .05, dir: -.04, con: -.08 })[t.tac.est] || 0;
      let ph = Math.pow(R[0].crea, 3) / (Math.pow(R[0].crea, 3) + Math.pow(R[1].crea, 3)) + est(T[0]) - est(T[1]);
      ph += HOME_P + PRES_P * (pres[0] - pres[1]);
      ph = clamp(ph, .22, .78); poss[0] += ph; poss[1] += 1 - ph;
      const a = r() < ph ? 0 : 1, A = T[a], D = T[1 - a];
      if (A.on.length && D.on.length) {
        const pp = clamp(.27 * Math.pow(R[a].crea / (.55 * R[1 - a].def + .45 * R[1 - a].prs), 2) * mod(A, D), .08, .75);
        if (r() < pp) attack(a, m, false); else turnover(a, m);
      }
      for (const t of T) if (t.on.length && r() < .0011) {
        const x = wpick(r, t.on, x => 1.5 - curCond(t, x, m) / 100), n = Math.max(1, 1 + Math.floor(r() * r() * 6) - Math.floor(t.med / 2));
        ev.push({ m, t: 'les', s: t.s, p: x.id, n }); sub(t, x, m); reRate(m);
      }
      if (m === 60 || m === 72 || m === 80) { for (const t of T) if (!t.human || (t.auto && !t.manual)) autoSubs(t, m); reRate(m); }
    }
    const endM = part == null ? 90 : Math.min(90, part);
    T.forEach(t => t.on.forEach(x => { mins[t.s][x.id] = (mins[t.s][x.id] || 0) + Math.max(0, endM - x.from); }));
    // notas
    const rat = {}, rr = rng(pre.seed + 'rat');
    for (const s of [0, 1]) {
      const gf = goals[s], ga = goals[1 - s], res = gf > ga ? .4 : gf < ga ? -.3 : 0;
      for (const pid in mins[s]) {
        if (mins[s][pid] <= 0) continue;
        const pos = lastPos[pid], defl = pos === 'POR' || LINE[pos] === 'D';
        let v = 6.2 + (rr() - .5) * .8 + res;
        for (const e of ev) {
          if (e.p === pid) v += ({ gol: 1, ama: -.2, roja: -1.5, rob: .25, seg: .3, reg: .2, fal: -.1, off: -.1 })[e.t] || 0;
          if (e.a === pid) v += .6;
          if (e.g === pid && e.r === 'par') v += .35;
        }
        if (defl) v += ga === 0 ? .5 : -.2 * ga;
        if (mins[s][pid] < 25) v = 6 + (v - 6) * .5;
        rat[pid] = r1(clamp(v, 3, 10));
      }
    }
    let mvp = null; for (const pid in rat) if (!mvp || rat[pid] > rat[mvp]) mvp = pid;
    const tot = poss[0] + poss[1];
    return { part, ev, mins, rat, mvp, goals, shots, ot, stats, poss: [Math.round(poss[0] / tot * 100), 100 - Math.round(poss[0] / tot * 100)], tac: T.map(t => t.tac), form: T.map(t => t.form) };
  }

  /* ---------- economía (estilo Top Eleven) ---------- */
  const FAC = {
    tie: { n: 'Tienda oficial', d: 'Vende camisetas y bufandas: más merchandising cada jornada.', cost: [5, 11, 20, 36] },
    bar: { n: 'Bares y restaurantes', d: 'Cada espectador gasta más en casa.', cost: [4, 9, 16, 28] },
    park: { n: 'Aparcamiento', d: 'Ingresos extra por cada espectador.', cost: [3, 7, 13, 22] },
    med: { n: 'Centro médico', d: 'Las lesiones duran menos.', cost: [5, 11, 20, 35] },
    ent: { n: 'Ciudad deportiva', d: 'Los entrenamientos dan más experiencia.', cost: [6, 13, 24, 42] },
    can: { n: 'Cantera', d: 'El ojeador encuentra promesas mejores.', cost: [4, 9, 17, 30] }
  };
  const facLvl = (team, k, now) => { const f = team.fac || {}; let l = f[k] || 0; const b = team.build; if (b && b.k === k && (now || Date.now()) < b.done) l = Math.min(l, b.lvl - 1); return l; };
  // la afición nace pequeña y crece con las victorias (y un poco con cada ampliación del estadio)
  function fansOf(tIdx, team, allDocs) {
    let f = 900;
    for (const d of allDocs) for (const m of d.m) {
      if (m.h !== tIdx && m.a !== tIdx) continue;
      const me = m.h === tIdx ? m.hg : m.ag, op = m.h === tIdx ? m.ag : m.hg;
      f = me > op ? f * 1.06 + 90 : me === op ? f * 1.015 + 25 : f * .99 - 15;
    }
    f *= 1 + .05 * stLvl(team);
    return Math.max(400, Math.round(f / 10) * 10);
  }
  function sponsorOffers(team, S, fans) {
    const r = rng('spon' + team.id + S), base = .25 + fans / 110000;
    const names = ['Banco Atlas', 'Telecom Nova', 'Aerolíneas Brisa', 'Seguros Faro', 'Energía Sol', 'Cervezas Montaña', 'Apuestas No', 'Motor Vega', 'Café Origen', 'Tecno Cumbre'].filter(n => n !== 'Apuestas No');
    const pick3 = names.slice().sort(() => r() - .5).slice(0, 3);
    return [
      { id: 'seg', name: pick3[0], tipo: 'Fijo', pm: r1(base * 1.15), pw: 0 },
      { id: 'equ', name: pick3[1], tipo: 'Equilibrado', pm: r1(base * .8), pw: r1(base * .7) },
      { id: 'obj', name: pick3[2], tipo: 'Por victorias', pm: r1(base * .4), pw: r1(base * 1.6) }
    ];
  }
  function ecoOf(tIdx, team, allDocs, S, players) {
    const now = Date.now(), fans = fansOf(tIdx, team, allDocs);
    const stars = (players || team.squad).filter(id => ovr(id, S, team.xp?.[id] || 0) >= 85).length;
    const sp = team.spon && team.spon.s === S ? team.spon : null;
    const levels = ['tie', 'bar', 'park', 'med', 'ent', 'can'].reduce((a, k) => a + facLvl(team, k, now), 0);
    const sl = stLvl(team, now);
    return { fans, stars, sl, cap: STADIUM[sl].cap, fair: STADIUM[sl].fair, price: clamp(team.price || STADIUM[sl].fair, 5, 150), bar: facLvl(team, 'bar', now), park: facLvl(team, 'park', now), tie: facLvl(team, 'tie', now), med: facLvl(team, 'med', now), pm: sp ? sp.pm : 0, pw: sp ? sp.pw : 0, mant: r1(levels * .04 + sl * .05) };
  }
  function matchIncome(eco, home, fill, won, drew, rr) {
    let att = 0, tix = 0, bar = 0, park = 0;
    if (home) {
      // vienen tus aficionados (más si el equipo va bien) según lo justo que sea el precio para tu estadio
      const fair = eco.fair || 45, want = (eco.fans || 900) * (.75 + .35 * fill + .1 * rr) * clamp(Math.pow(fair / eco.price, 1.1), .2, 1.4);
      att = Math.round(Math.min(eco.cap, want) / 10) * 10;
      tix = att * eco.price / 1e6; bar = att * (5 + 4 * eco.bar) / 1e6; park = att * .3 * (4 + 3 * eco.park) / 1e6;
    }
    const merch = eco.fans * (6 + 7 * eco.tie) * (1 + .06 * eco.stars) / 1e6;
    const spon = eco.pm + (won ? eco.pw : 0), tv = .75, prz = won ? PRIZE.w : drew ? PRIZE.d : PRIZE.l;
    const d = { tix: r2(tix), bar: r2(bar), park: r2(park), merch: r2(merch), spon: r2(spon), tv, prz };
    return { att, d, inc: r2(tix + bar + park + merch + spon + tv + prz) };
  }
  const r2 = x => Math.round(x * 100) / 100;

  /* ---------- preparación y resolución de partidos ---------- */
  // la IA prepara el partido: según la diferencia de nivel y, si el rival es humano, contra la táctica que usa
  function aiTactic(mine, theirs, opp) {
    const a = mine.A + mine.M + mine.D, b = theirs.A + theirs.M + theirs.D;
    const t = { ment: a > b + 6 ? 'ofe' : a < b - 6 ? 'def' : 'equ', press: a > b + 6 ? 'alt' : 'med', est: a < b - 6 ? 'con' : 'mix' };
    if (opp) {
      if (opp.ment === 'ofe') { t.est = 'con'; if (t.ment === 'ofe') t.ment = 'equ'; }
      else if (opp.press === 'alt') t.est = 'dir';
      else if (opp.est === 'pos') t.press = 'alt';
      else if (opp.ment === 'def') { t.est = 'pos'; t.press = 'baj'; }
    }
    return t;
  }
  function formHelper(n, prev) {
    const tab = table(n, prev);
    return t => { const row = tab.find(x => x.t === t); const f = row.form.slice(-5); if (!f.length) return { mor: 1, fill: .5 }; const avg = f.reduce((a, x) => a + (x === 'G' ? 3 : x === 'E' ? 1 : 0), 0) / f.length; return { mor: .97 + .02 * avg, fill: avg / 3 }; };
  }
  function buildPre(cfg, teams, h, a, S, md, state, formOf, seed, allDocs) {
    const side = [h, a].map(t => { const team = teams[t]; const ctx = makeCtx(team, S, state, md); const lin = resolveLineup(team, ctx); return { team, ctx, lin, str: lineStrength(lin, ctx), ...formOf(t) }; });
    return {
      seed, h, a, fill: side[0].fill, derby: !!(side[0].team.owner && side[1].team.owner),
      side: side.map((sd, i) => {
        const op = side[1 - i].team, tac = sd.team.owner && sd.team.tac ? { ment: 'equ', press: 'med', est: 'mix', ...sd.team.tac } : aiTactic(sd.str, side[1 - i].str, op.owner && op.tac ? op.tac : null);
        const ids = [...sd.lin.xi.filter(Boolean), ...sd.lin.bench], p = {};
        ids.forEach(id => { p[id] = [sd.ctx.ovr(id), Math.round(sd.ctx.cond(id))]; });
        const eco = ecoOf([h, a][i], sd.team, allDocs || [], S);
        const wage = Math.round(sd.team.squad.reduce((acc, id) => acc + wage_(pval(id, S, sd.team.xp?.[id] || 0)), 0) * 100) / 100;
        return { form: sd.lin.form, xi: sd.lin.xi.map(x => x || null), bench: sd.lin.bench, tac, mor: sd.mor, human: !!sd.team.owner, auto: sd.team.tac?.auto !== false, med: eco.med, p, eco, wage };
      })
    };
  }
  const wage_ = v => wage(v);
  function resultFromPre(pre, orders, lv) {
    const res = simCore(pre, orders, lv), hg = res.goals[0], ag = res.goals[1];
    const rr = rng(pre.seed + 'att')();
    const fin = [0, 1].map(s => { const mi = matchIncome(pre.side[s].eco, s === 0, pre.fill, res.goals[s] > res.goals[1 - s], hg === ag, rr); if (pre.derby && res.goals[s] > res.goals[1 - s]) { mi.inc = r2(mi.inc + mi.d.prz); mi.d.prz = r2(mi.d.prz * 2); } return { inc: mi.inc, d: mi.d, wage: pre.side[s].wage, mant: pre.side[s].eco.mant, att: mi.att }; });
    return {
      h: pre.h, a: pre.a, hg, ag, ev: res.ev, min: res.mins, rat: res.rat, mvp: res.mvp,
      st: { pos: res.poss, sh: res.shots, ot: res.ot, rob: res.stats.rob, fal: res.stats.fal, cor: res.stats.cor, off: res.stats.off }, att: fin[0].att,
      fin, pr: res.tac.map(t => t.press === 'alt'), fm: [pre.side[0].form, pre.side[1].form], fm2: res.form, tc: [pre.side[0].tac, pre.side[1].tac],
      xi: pre.side.map(sd => sd.xi.filter(Boolean)), xs: pre.side.map(sd => sd.xi), sd: pre.seed, v: 2, derby: !!pre.derby, part: res.part
    };
  }
  function simulateMatchday(cfg, teams, prev, S, md, at, allDocs, lv) {
    const n = teams.length, fx = fixtures(n, cfg.seed + ':' + S)[md - 1], state = deriveState(prev, adjOf(teams)), formOf = formHelper(n, prev);
    const pre = fx.map(([h, a], k) => buildPre(cfg, teams, h, a, S, md, state, formOf, cfg.seed + ':' + S + ':' + md + ':' + k, allDocs));
    if (lv) return { season: S, md, at, pre, lv: 1, sl: lv.sl, pr: lv.pr, m: pre.map(p => resultFromPre(p, [], lv)), v: 2 };
    return { season: S, md, at, pre, m: pre.map(p => resultFromPre(p, [])), v: 2 };
  }
  function simulateFriendly(cfg, teams, h, a, S, prev, seed) {
    const md = prev.length + 1, state = deriveState(prev, adjOf(teams));
    const pre = buildPre(cfg, teams, h, a, S, md, state, formHelper(teams.length, prev), 'amistoso:' + seed, []);
    pre.side.forEach(sd => { sd.eco = { ...sd.eco, pm: 0, pw: 0 }; });
    return { pre, m: resultFromPre(pre, []) };
  }
  // ajustes de tokens (forma recuperada, lesión curada) que guarda cada equipo
  function adjOf(teams) { const boost = {}, heal = {}; for (const t of teams) { Object.assign(boost, t.boost || {}); Object.assign(heal, t.heal || {}); } return { boost, heal }; }

  /* ---------- entrenamiento y ojeador ---------- */
  const FOCUS = { general: { G: 1, D: 1, M: 1, A: 1 }, ataque: { G: .5, D: .6, M: 1.1, A: 1.5 }, defensa: { G: 1.5, D: 1.5, M: .9, A: .6 }, medio: { G: .6, D: .8, M: 1.5, A: .8 } };
  function trainGains(team, S, focus, dayKey) {
    const r = rng('tr' + team.id + dayKey + focus), f = FOCUS[focus] || FOCUS.general, out = {}, fm = 1 + .15 * facLvl(team, 'ent');
    for (const id of team.squad) {
      const p = player(id), a = age(p, S);
      const am = a <= 21 ? 1.6 : a <= 24 ? 1.3 : a <= 29 ? 1 : a <= 32 ? .6 : .35;
      out[id] = Math.round((16 + r() * 14) * am * f[LINE[p.pos]] * fm);
    }
    return out;
  }

  /* ---------- finanzas ---------- */
  function finances(tIdx, team, docs, n) {
    let inc = 0, wg = 0, prizes = 0;
    const bySeason = {};
    for (const d of docs) for (const m of d.m) {
      (bySeason[d.season] = bySeason[d.season] || []).push(d);
      if (m.h === tIdx) { inc += m.fin[0].inc; wg += m.fin[0].wage + (m.fin[0].mant || 0); }
      if (m.a === tIdx) { inc += m.fin[1].inc; wg += m.fin[1].wage + (m.fin[1].mant || 0); }
    }
    const total = 2 * (n - 1);
    for (const s in bySeason) {
      const ds = [...new Map(bySeason[s].map(d => [d.md, d])).values()];
      if (ds.length >= total) { const rank = table(n, ds).findIndex(x => x.t === tIdx); prizes += prize(rank, n); }
    }
    const led = (team.ledger || []).reduce((a, x) => a + (+x.amt || 0), 0);
    return { inc: r1(inc), wage: r1(wg), prizes: r1(prizes), ledger: r1(led), cash: r1(START_CASH + inc - wg + prizes + led) };
  }
  // tokens: se ganan jugando (victoria 2, empate 1, campeón 20) y con el premio diario; se gastan en ventajas
  function tokens(tIdx, team, docs, n) {
    let t = 10; const bySeason = {};
    for (const d of docs) { (bySeason[d.season] = bySeason[d.season] || new Map()).set(d.md, d); for (const m of d.m) { if (m.h !== tIdx && m.a !== tIdx) continue; const me = m.h === tIdx ? m.hg : m.ag, op = m.h === tIdx ? m.ag : m.hg; t += me > op ? (m.derby ? 4 : 2) : me === op ? 1 : 0; } }
    for (const s in bySeason) { const ds = [...bySeason[s].values()]; if (ds.length >= 2 * (n - 1) && table(n, ds)[0].t === tIdx) t += 20; }
    return t + (team.tok || []).reduce((a, x) => a + (+x.n || 0), 0);
  }


  /* ---------- copa eliminatoria ---------- */
  function cupBracket(n, seed) {
    const r = rng('copa' + seed), ids = [...Array(n).keys()].sort(() => r() - .5);
    let size = 1; while (size < n) size *= 2;
    const slots = [...ids, ...Array(size - n).fill(null)];
    // repartir los huecos (pases directos) de forma alterna
    const pairs = []; for (let i = 0; i < size / 2; i++) pairs.push([slots[i], slots[size - 1 - i]]);
    return { size, rounds: Math.log2(size), first: pairs };
  }
  // Sorteo de la Champions: bombo 1 = clubes de la liga, bombo 2 = europeos. Dos grupos de 4.
  function clDraw(seed, season, qual, euIdx) {
    const r = rng('sorteo' + seed + ':' + season), sh = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const groups = [[], []], seq = [];
    sh(qual).forEach((t, k) => { const g = k % 2; groups[g].push(t); seq.push({ t, pot: 1, g }); });
    sh(euIdx).forEach(t => { const g = groups[0].length <= groups[1].length ? 0 : 1; groups[g].push(t); seq.push({ t, pot: 2, g }); });
    return { groups, seq };
  }
  // Hora del sorteo: una hora antes de la última jornada de liga que empiece al menos 3 h antes del primer partido.
  function drawTime(firstAt, kicks) {
    let best = -Infinity; for (const k of kicks) { const t = k - 3600000; if (t <= firstAt - 3 * 3600000 && t > best) best = t; }
    return best > -Infinity ? best : firstAt - 2 * 3600000;
  }
  // Ronda (0 = primera) en la que se cruzarían los equipos de los emparejamientos p y q de la primera ronda.
  function cupMeetRound(p, q) { let r = 0; while (p !== q) { p >>= 1; q >>= 1; r++; } return r; }
  function cupRoundName(round, rounds) { const left = rounds - 1 - round; return left === 0 ? 'Final' : left === 1 ? 'Semifinales' : left === 2 ? 'Cuartos' : left === 3 ? 'Octavos' : 'Ronda ' + (round + 1); }
  function penaltyShootout(seed) {
    const r = rng('pens' + seed); let h = 0, a = 0;
    for (let i = 0; i < 5; i++) { if (r() < .76) h++; if (r() < .76) a++; }
    let k = 0; while (h === a && k++ < 20) { const x = r() < .74, y = r() < .74; h += x; a += y; }
    if (h === a) h++;
    return [h, a];
  }
  function simulateCupRound(cfg, teams, pairs, S, round, at, state, lv) {
    const formOf = () => ({ mor: 1, fill: .6 }), m = [], pens = [], pres = [];
    pairs.forEach(([h, a], k) => {
      const pre = buildPre(cfg, teams, h, a, S, 999, state, formOf, cfg.seed + ':copa:' + S + ':' + round + ':' + k, []);
      pre.side.forEach(sd => { sd.eco = { ...sd.eco, pm: 0, pw: 0, tie: 0, bar: 0, park: 0 }; sd.wage = 0; sd.eco.mant = 0; });
      const res = resultFromPre(pre, [], lv); m.push(res); pres.push(pre);
      pens.push(lv ? null : res.hg === res.ag ? penaltyShootout(pre.seed) : null);
    });
    if (lv) return { season: S, round, at, m, pens, pre: pres, lv: 1, sl: lv.sl, pr: lv.pr };
    return { season: S, round, at, m, pens };
  }

  /* ---------- Champions: clubes europeos de la IA ---------- */
  const EURO = [['FC Rheinberg', 'RHB', ['#c8102e', '#ffffff'], 'GER'], ['AS Lagunare', 'LAG', ['#1d3f8f', '#000000'], 'ITA'], ['Sporting Alvor', 'ALV', ['#0b7a3e', '#ffffff'], 'POR'], ['Olympique Calanque', 'OCA', ['#57b4e6', '#ffffff'], 'FRA'], ['Dinamo Karpat', 'DKA', ['#1a4fb0', '#ffffff'], 'UKR'], ['Royal Brabant', 'RBR', ['#5a2d82', '#ffffff'], 'BEL'], ['Athletic Thames', 'ATH', ['#e3a21a', '#0a2240'], 'ENG'], ['PSV Maasdal', 'PSM', ['#e2231a', '#ffffff'], 'NED'], ['Celtic Harbour', 'CEH', ['#0e7c3a', '#ffffff'], 'SCO'], ['Galata Bogaz', 'GAB', ['#f2b705', '#a50f15'], 'TUR']];
  const EURO_SQ = ['POR', 'POR', 'DFC', 'DFC', 'DFC', 'DFC', 'LD', 'LI', 'MCD', 'MCD', 'MC', 'MC', 'MC', 'MCO', 'ED', 'EI', 'DC', 'DC'];
  function euroClubs(seed, S, k, level) {
    const r = rng('euro' + seed + S), pool = EURO.slice().sort(() => r() - .5).slice(0, k);
    return pool.map(([name, short, colors], i) => {
      const str = Math.round((level || 84) - 2 + r() * 5);
      const squad = EURO_SQ.map((pos, j) => 'e-' + S + '-' + short + '-' + pos + '-' + j + '-' + clamp(Math.round(str - 3 + r() * 6 - (j > 0 && EURO_SQ[j - 1] === pos ? 3 : 0)), 70, 94));
      return { id: 'eu' + i, idx: null, eu: true, name, short, colors, owner: null, squad, lineup: null, tac: null, xp: {}, stadium: 4, fac: {}, str };
    });
  }
  const CL_RR = [[[0, 1], [2, 3]], [[0, 2], [3, 1]], [[3, 0], [1, 2]]];
  function groupTable(group, docs) {
    const row = {}; group.forEach(t => { row[t] = { t, pj: 0, pts: 0, gf: 0, gc: 0 }; });
    for (const d of docs) for (const m of d.m) { if (!(m.h in row) || !(m.a in row)) continue; const H = row[m.h], A = row[m.a]; H.pj++; A.pj++; H.gf += m.hg; H.gc += m.ag; A.gf += m.ag; A.gc += m.hg; if (m.hg > m.ag) H.pts += 3; else if (m.hg < m.ag) A.pts += 3; else { H.pts++; A.pts++; } }
    return Object.values(row).sort((x, y) => y.pts - x.pts || (y.gf - y.gc) - (x.gf - x.gc) || y.gf - x.gf || group.indexOf(x.t) - group.indexOf(y.t));
  }
  const cupWinner = (doc, k) => { const x = doc.m[k], p = doc.pens[k]; return x.hg > x.ag || (p && p[0] > p[1]) ? x.h : x.a; };
  G.ENG = { clDraw, drawTime, cupMeetRound, DRAW_SHOW: 4 * 60000, SEG, HOME_P, PRES_P, penaltyShootout, euroClubs, CL_RR, groupTable, stLvl, DAY, LIVE_MS, BASE_YEAR, START_CASH, STADIUM, POS, LINE, FORMS, COORD, TICKET, fit, rng, hash, player, age, ovr, value, wage, pval, pot, fixtures, draft, freeAgents, deriveState, table, prize, makeCtx, resolveLineup, aiLineup, autoXI, lineStrength, simulateMatchday, simulateFriendly, resultFromPre, buildPre, matchIncome, simCore, attrs, ATR, ATR_N, FAC, facLvl, fansOf, ecoOf, sponsorOffers, tokens, adjOf, trainGains, finances, REAL, r1, cupBracket, cupRoundName, simulateCupRound, cupWinner };
})(typeof window !== 'undefined' ? window : globalThis);
