/* Visor de partidos: convierte un resultado simulado en un directo animado (2D y 3D). */
(function (G) {
  'use strict';
  const E = G.ENG, FL = 105, FW = 68, LIVE_S = E.LIVE_MS / 1000, MINS = 94, RH = 45.5 / MINS * LIVE_S;
  const STD = { POR: [1, 13, 25], LD: [2, 12, 26], LI: [3, 17, 27], DFC: [4, 5, 15, 24], MCD: [6, 16, 28], MC: [8, 14, 18], MCO: [10, 20], ED: [7, 22], EI: [11, 21], DC: [9, 19, 23] };
  const SHOTW = { POR: 0, DFC: .3, LD: .4, LI: .4, MCD: .6, MC: 1.2, MCO: 2.4, ED: 3, EI: 3, DC: 5 };
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x)), lerp = (a, b, f) => a + (b - a) * f;
  const hyp = (ax, ay, bx, by) => { const dx = ax - bx, dy = ay - by; return Math.sqrt(dx * dx + dy * dy); };
  const rOf = m => Math.max(2, (m - .5) / MINS * LIVE_S);
  const minuteAt = r => r < RH ? Math.min(45, Math.floor(r / LIVE_S * MINS) + 1) : Math.min(94, Math.floor(r / LIVE_S * MINS) + 1);
  const dirOf = (s, t) => ((s === 0) === (t < RH)) ? 1 : -1;
  const U = (s, t, x) => dirOf(s, t) > 0 ? x : FL - x;
  const X = (s, t, u) => dirOf(s, t) > 0 ? u : FL - u;
  function wpick(R, arr, wf) { let tot = 0; const w = arr.map(x => { const v = Math.max(0, wf(x)); tot += v; return v; }); if (!arr.length) return null; if (tot <= 0) return arr[Math.floor(R() * arr.length)]; let v = R() * tot; for (let i = 0; i < arr.length; i++) { v -= w[i]; if (v <= 0) return arr[i]; } return arr[arr.length - 1]; }

  /* ---------- director: simula el partido entero (jugadores y balón) a 10 Hz ----------
     Cada equipo se mueve como un bloque según su formación y el balón; el poseedor conduce y pasa
     al compañero libre; el rival presiona y corta líneas. Las incidencias del motor (goles, tiros,
     robos, faltas…) se preparan con unos segundos de antelación para que nazcan de la propia jugada. */
  const DT = .1;
  function shapeTarget(p, t, bx, by, possSide) {
    const s = p.s, own = possSide === s, bu = U(s, t, bx);
    if (p.pos === 'POR') { const u = clamp(2.5 + bu * .09, 2, own ? 16 : 11); return { x: X(s, t, u), y: 34 + (by - 34) * .15 }; }
    let L, span;
    if (own) { L = clamp(bu * .62 + 4, 14, 52); span = 50; } else { L = clamp(bu * .5 - 3, 8, 36); span = 34; }
    const ph = t * .35 + p.h;
    let u = L + (p.d - .25) / .6 * span + Math.sin(ph) * 1.3;
    if (own && p.fwd && bu > 40) u += 2 + 4 * Math.max(0, Math.sin(t * .45 + p.h * 2));
    u = clamp(u, 3, own ? 93 : 78);
    const yw = FW * (.07 + .86 * (1 - p.w)), lat = dirOf(s, t) > 0 ? yw : FW - yw;
    const y = 34 + (lat - 34) * (own ? 1.05 : .7) + (by - 34) * (own ? .2 : .42) + Math.cos(ph * 1.3) * 1.2;
    return { x: clamp(X(s, t, u), 1, FL - 1), y: clamp(y, 1.5, FW - 1.5) };
  }
  function resetSpot(p, t) {
    const u = p.pos === 'POR' ? 4 : clamp(6 + p.d * 44, 2, 50), yw = FW * (.07 + .86 * (1 - p.w));
    return { x: X(p.s, t, u), y: dirOf(p.s, t) > 0 ? yw : FW - yw };
  }
  function segDist(ax, ay, bx, by, px, py) { const dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy || 1, f = clamp(((px - ax) * dx + (py - ay) * dy) / L2, 0, 1); return { d: Math.hypot(ax + dx * f - px, ay + dy * f - py), f }; }

  function build(m) {
    const R = E.rng('viz2:' + (m.sd || '') + ':' + m.h + ':' + m.a);
    const P = {}, side = [[], []];
    for (const s of [0, 1]) {
      const form = m.fm[s], slots = E.FORMS[form], co = E.COORD[form], xs = (m.xs && m.xs[s]) || m.xi[s], used = new Set();
      xs.forEach((id, i) => {
        if (!id) return; const pos = slots[i];
        let num = (STD[pos] || []).find(n => !used.has(n)); if (num == null) { num = 12; while (used.has(num)) num++; } used.add(num);
        const p = { id, s, pos, w: co[i][0] / 100, d: (100 - co[i][1]) / 100, num, from: -1, to: 1e9, h: (E.hash(id) % 1000) / 1000 * 6.28, fwd: /DC|ED|EI|MCO/.test(pos) };
        P[id] = p; side[s].push(p);
      });
      side[s].used = used;
    }
    const evs = m.ev.slice().sort((a, b) => a.m - b.m); let lastM = -1, k = 0;
    const evT = evs.map(e => { k = e.m === lastM ? k + 1 : 0; lastM = e.m; let tt = rOf(e.m) + k * 2.6; if (tt > RH - 3 && tt < RH + 5) tt = e.m <= 45 ? Math.min(tt, RH - 3) : RH + 5 + k * 2.6; return { ...e, tt }; });
    for (const e of evT) {
      if (e.t === 'cam' && P[e.q]) {
        const out = P[e.q]; out.to = e.tt; const used = side[e.s].used; let num = 12; while (used.has(num)) num++; used.add(num);
        const p = { id: e.p, s: e.s, pos: out.pos, w: out.w, d: out.d, num, from: e.tt, to: 1e9, h: (E.hash(e.p) % 1000) / 1000 * 6.28, fwd: out.fwd };
        P[e.p] = p; side[e.s].push(p);
      }
      if (e.t === 'roja' && P[e.p]) P[e.p].to = e.tt + 3;
    }
    const active = (s, t) => side[s].filter(p => p.from <= t && t < p.to);
    const plays = [], tacs = [];
    if (m.v === 2) {
      evT.forEach(e => {
        const base = { t: e.tt, s: e.s, p: e.p, m: e.m };
        const cardOf = pid => { const c = evT.find(x => (x.t === 'ama' || x.t === 'roja') && x.m === e.m && x.p === pid); return c ? c.t : null; };
        if (e.t === 'gol') plays.push({ ...base, type: 'goal', a: e.a, k: e.k });
        else if (e.t === 'tiro') plays.push({ ...base, type: e.r === 'par' ? 'save' : 'miss', post: e.r === 'pal', k: e.k, g: e.g });
        else if (e.t === 'fal') plays.push({ ...base, type: 'foul', card: cardOf(e.p), q: e.q });
        else if ((e.t === 'ama' || e.t === 'roja') && !evT.some(x => (x.t === 'fal' && x.p === e.p || x.t === 'pen' && x.q === e.p) && x.m === e.m)) plays.push({ ...base, type: 'foul', card: e.t });
        else if (e.t === 'les') plays.push({ ...base, type: 'inj' });
        else if (e.t === 'rob' || e.t === 'seg') plays.push({ ...base, type: 'tackle', slide: e.t === 'seg', q: e.q });
        else if (e.t === 'reg') plays.push({ ...base, type: 'drib', q: e.q });
        else if (e.t === 'cor') plays.push({ ...base, type: 'corner' });
        else if (e.t === 'pen') plays.push({ ...base, type: 'pen', q: e.q, card: e.q ? cardOf(e.q) : null });
        else if (e.t === 'off') plays.push({ ...base, type: 'off' });
        else if (e.t === 'tac') tacs.push(e);
      });
    } else {
      evT.forEach(e => {
        if (e.t === 'gol') plays.push({ t: e.tt, type: 'goal', s: e.s, p: e.p, a: e.a, m: e.m });
        else if (e.t === 'ama' || e.t === 'roja') plays.push({ t: e.tt, type: 'foul', s: e.s, p: e.p, card: e.t, m: e.m });
        else if (e.t === 'les') plays.push({ t: e.tt, type: 'inj', s: e.s, p: e.p, m: e.m });
      });
      for (const s of [0, 1]) {
        const g = s ? m.ag : m.hg, sh = Math.max(0, m.st.sh[s] - g), ot = clamp(m.st.ot[s] - g, 0, sh);
        for (let i = 0; i < sh; i++) {
          let mm, tries = 0; do { mm = 2 + Math.floor(R() * 90); tries++; } while (tries < 40 && (plays.some(p => Math.abs(p.m - mm) < 2) || mm === 45 || mm === 46));
          plays.push({ t: rOf(mm) + R() * 3, type: i < ot ? 'save' : 'miss', s, m: mm });
        }
      }
    }
    plays.sort((a, b) => a.t - b.t);

    const phases = [], banners = [], comm = [], goals = [], kicks = [], netT = [];
    const nm = id => { const n = E.player(id).name.split(' '); return n.length > 1 && !/^J[úu]nior$/.test(n[n.length - 1]) ? n.slice(1).join(' ') : n[0]; };
    const say = (t, txt, imp) => comm.push({ t, txt, imp: !!imp });
    const all = Object.values(P); all.forEach((p, i) => { p.i = i; });
    const SHORT = LIVE_S < 600, CEL = SHORT ? 3.6 : 6, KOD = SHORT ? 1.4 : 2.6;
    const LEAD0 = pl => pl.type === 'goal' || pl.type === 'miss' || pl.type === 'save' ? (pl.k === 'pen' ? 2 : pl.k === 'fal' ? 4 : pl.k === 'con' ? 7 : 8.5) : pl.type === 'corner' ? 4.4 : pl.type === 'pen' ? 6 : pl.type === 'inj' ? 1.5 : pl.type === 'off' ? 4 : 3.4;
    // partido corto (directo de pocos minutos): solo se escenifican las jugadas importantes; el resto va al relato y a los avisos
    const silent = []; let dbgShort = null;
    if (LIVE_S < 600 && m.v === 2) {
      // lo que no da tiempo a enseñar en el campo no se narra: el comentarista solo cuenta lo que se ve.
      // Primero se colocan goles, penaltis, tarjetas y lesiones (lo más cerca posible de su minuto);
      // luego, en los huecos libres, paradas, disparos fuera y córners.
      const LIGHT = { tackle: 1, drib: 1, off: 1 }, isMust = pl => pl.type === 'goal' || pl.type === 'pen' || pl.type === 'inj' || (pl.type === 'foul' && pl.card);
      const aft = pl => pl.type === 'goal' || pl.type === 'pen' ? CEL + KOD + 1.2 : 2.4, keep = [];
      let prevEnd = -1;
      for (const pl of plays.filter(isMust)) { pl.t0 = pl.t; pl.h1 = pl.m <= 45; if (pl.t - LEAD0(pl) < prevEnd) pl.t = prevEnd + LEAD0(pl); prevEnd = pl.t + aft(pl); keep.push(pl); }
      const busy = keep.map(pl => [pl.t - LEAD0(pl) - .5, pl.t + aft(pl) + .5]);
      for (const pl of plays) {
        if (isMust(pl)) continue;
        if (LIGHT[pl.type] || pl.type === 'foul') { silent.push(pl); continue; }
        const a = pl.t - LEAD0(pl), b = pl.t + aft(pl) + 1.5;
        if (a < 1 || busy.some(([x, y]) => a < y && b > x)) { silent.push(pl); continue; }
        pl.t0 = pl.t; pl.h1 = pl.m <= 45; busy.push([a, b]); keep.push(pl);
      }
      keep.sort((p, q) => p.t - q.t);
      plays.length = 0; dbgShort = { keep: keep.length, silent: silent.length, shift: keep.reduce((mx, pl) => Math.max(mx, pl.t - pl.t0), 0) }; plays.push(...keep);
    }
    const END = LIVE_S + (LIVE_S < 600 ? 40 : 6), N = Math.ceil(END / DT) + 2;
    const TR = all.map(() => new Float32Array(N * 2).fill(NaN));
    const BX = new Float32Array(N), BY = new Float32Array(N), BZ = new Float32Array(N), BO = new Int16Array(N), BT = new Int16Array(N), BS = new Int8Array(N), BF = new Uint8Array(N);
    const Q = all.map(p => ({ p, x: 0, y: 0, vx: 0, vy: 0, on: false, ov: null, fx: 1, fy: 0 }));
    const ball = { x: 52.5, y: 34, z: 0, own: -1, side: 0, fl: null, dead: null, net: null };
    const prot = [0, 0], possT = [1, 1], tgt = [(m.st.pos[0] || 50) / 100, (m.st.pos[1] || 50) / 100];
    let nextDec = 0, boost = -1, script = null, pi = 0, halfAt = 0, halfDone = false, ended = false, pending = [], penSpot = null;

    const on = s => Q.filter(q => q.on && q.p.s === s);
    const owner = () => ball.own >= 0 ? Q[ball.own] : null;
    const valid = (s, id) => !!(id && P[id] && P[id].s === s && Q[P[id].i].on);
    const qOf = id => Q[P[id].i];
    const later = (at, fn, tag) => pending.push({ at, fn, tag });
    function nearestOf(s, pt, gk) { let b = null, bd = 1e9; for (const q of Q) if (q.on && q.p.s === s && (gk || q.p.pos !== 'POR')) { const d = hyp(q.x, q.y, pt.x, pt.y); if (d < bd) { bd = d; b = q; } } return b; }
    function turnF(s, t) {
      if (t < prot[s]) return 0;
      const share = possT[s] / (possT[0] + possT[1]);
      return clamp(Math.exp(5 * (share - tgt[s])), .35, 2.8) * (boost === 1 - s ? 4 : 1) * (U(s, t, ball.x) > 78 ? 1.8 : 1);
    }
    function give(i, t) { ball.own = i; ball.fl = null; ball.net = null; if (i >= 0) { ball.side = all[i].s; const q = Q[i]; q.ov = null; } }
    function hasBall(s) { const c = owner(); if (c) return c.p.s === s; const f = ball.fl; return !!(f && !f.shot && f.to >= 0 && Q[f.to].p.s === s); }

    function kick(t, to, tx, ty, o = {}) {
      const from = o.by != null ? o.by : ball.own, d = hyp(ball.x, ball.y, tx, ty), lofted = !!o.lofted;
      const dur = o.dur || (lofted ? d / 20 + .5 : clamp(d / 19 + .12, .25, 2.2));
      ball.fl = { t0: t, t1: t + dur, x0: ball.x, y0: ball.y, z0: o.z0 != null ? o.z0 : ball.z, x1: clamp(tx, -2, FL + 2), y1: clamp(ty, -1, FW + 1), z1: o.z1 || 0, h: o.h != null ? o.h : lofted ? d * .075 : Math.min(.35, d * .01), to, shot: !!o.shot, out: o.out || null };
      if (from >= 0) kicks.push({ t, pid: all[from].id, shot: !!o.shot });
      ball.own = -1;
      if (to >= 0) Q[to].ov = { x: ball.fl.x1, y: ball.fl.y1, v: o.rv || 8.5, until: ball.fl.t1 + .15 };
      return dur;
    }
    function passTo(t, q, o = {}) {
      const c = owner(); if (!c) return 0;
      const d0 = hyp(c.x, c.y, q.x, q.y), est = o.lofted ? d0 / 19 + .55 : d0 / 16 + .15;
      let tx = clamp(q.x + q.vx * est * .6, 2, FL - 2), ty = clamp(q.y + q.vy * est * .6, 2, FW - 2);
      if (o.at) { tx = o.at.x; ty = o.at.y; }
      const s = c.p.s;
      if (!o.safe && !o.lofted) {
        let best = null;
        for (const z of Q) if (z.on && z.p.s !== s && z.p.pos !== 'POR') { const sd = segDist(c.x, c.y, tx, ty, z.x, z.y); if (sd.f > .12 && sd.f < .95 && sd.d < 1.5 && (!best || sd.d < best.d)) best = { z, ...sd }; }
        if (best && R() < .28 * turnF(s, t)) { const ix = lerp(c.x, tx, best.f), iy = lerp(c.y, ty, best.f); if (R() < .3) say(t, 'Corta el pase ' + nm(best.z.p.id) + '.'); return kick(t, best.z.p.i, ix, iy, { dur: Math.max(.25, (d0 / 16 + .15) * best.f) }); }
      }
      return kick(t, q.p.i, tx, ty, o);
    }
    function carryTarget(c, t, cap) {
      if (c.p.pos === 'POR') return { x: c.x, y: c.y, v: 1 };
      const s = c.p.s, u = U(s, t, c.x); let nz = null, nd = 99;
      for (const z of Q) if (z.on && z.p.s !== s) { const d = hyp(z.x, z.y, c.x, c.y); if (d < nd) { nd = d; nz = z; } }
      let ty = c.y + (34 - c.y) * .08; if (nz && nd < 8) ty += (c.y > nz.y ? 1 : -1) * (8 - nd) * .6;
      return { x: X(s, t, clamp(u + 6, 3, cap || 84)), y: clamp(ty, 3, FW - 3), v: 5.2 };
    }
    function freeDecide(t, bias) {
      const c = owner(); if (!c || t < nextDec) return;
      const s = c.p.s, bu = U(s, t, c.x), opps = on(1 - s);
      let nearOpp = 99; for (const z of opps) nearOpp = Math.min(nearOpp, hyp(z.x, z.y, c.x, c.y));
      const cand = [];
      for (const q of on(s)) {
        if (q === c || (bias && bias.skip && bias.skip.includes(q))) continue;
        if (q.p.pos === 'POR' && !(bu < 30 && nearOpp < 4)) continue;
        const d = hyp(c.x, c.y, q.x, q.y); if (d < 6 || d > 45) continue;
        const du = U(s, t, q.x) - bu; if (bias && bias.fwd && du < -4) continue;
        let open = 99, lane = 99;
        for (const z of opps) { open = Math.min(open, hyp(z.x, z.y, q.x, q.y)); const sd = segDist(c.x, c.y, q.x, q.y, z.x, z.y); if (sd.f > .1 && sd.f < .95) lane = Math.min(lane, sd.d); }
        let w = Math.exp(-(((d - 16) / 14) ** 2)) * (1 + clamp(du / 14, -.7, 1.3)) * clamp(open / 5, .15, 1.5) * clamp(lane / 2.5, .12, 1.2);
        if (U(s, t, q.x) > 84) w *= .35;
        cand.push({ q, w, lofted: d > 30 && lane < 3 });
      }
      const dribW = (nearOpp > 5 ? 1.8 : .3) * (bu > 80 ? .25 : 1) * (c.p.pos === 'POR' ? 0 : 1);
      const tot = cand.reduce((a, b) => a + b.w, 0);
      nextDec = t + (1 + R() * 1.3) * (bias && bias.fast ? .6 : 1) * (c.p.pos === 'POR' ? 1.7 : 1);
      if (!cand.length || R() * (tot + dribW) < dribW) return;
      const ch = wpick(R, cand, x => x.w);
      passTo(t, ch.q, { lofted: ch.lofted });
      if (R() < .05) say(t, 'Pase de ' + nm(c.p.id) + ' para ' + nm(ch.q.p.id) + '.');
    }
    function freeTackle(t) {
      const c = owner(); if (!c) return; const s = c.p.s, f = turnF(s, t); if (!f) return;
      for (const z of Q) if (z.on && z.p.s !== s && z.p.pos !== 'POR' && hyp(z.x, z.y, c.x, c.y) < 1.3) {
        if (R() < DT * .25 * f) { give(z.p.i, t); nextDec = t + .6; if (R() < .2) say(t, 'Recupera ' + nm(z.p.id) + '.'); }
        return;
      }
    }
    function loose(t) {
      if (ball.own >= 0 || ball.fl || ball.dead || ball.net) return;
      let b = null, bd = 1.1; for (const q of Q) if (q.on) { const d = hyp(q.x, q.y, ball.x, ball.y); if (d < bd) { bd = d; b = q; } }
      if (b) { give(b.p.i, t); nextDec = t + .4 + R() * .5; }
    }
    function forceWin(s, t) {
      if (hasBall(s)) return true; if (ball.dead || ball.net) return false;
      const c = owner();
      if (c) {
        const b = nearestOf(s, c); if (!b) return false; const bd = hyp(b.x, b.y, c.x, c.y);
        if (bd < 3.2) { give(b.p.i, t); nextDec = t + .5; }
        else { let tq = null, td = 1e9; for (const q of on(s)) if (q.p.pos !== 'POR') { const d = hyp(q.x, q.y, c.x, c.y); if (d > 6 && d < td) { td = d; tq = q; } } tq = tq || b; kick(t, tq.p.i, tq.x, tq.y, { lofted: td > 32 }); }
        return true;
      }
      if (!ball.fl) { const b = nearestOf(s, ball, true); if (b && hyp(b.x, b.y, ball.x, ball.y) < 4) { give(b.p.i, t); return true; } if (b) b.ov = { x: ball.x, y: ball.y, v: 8.5, until: t + .2 }; }
      return false;
    }
    function kickoff(s, t) {
      pending = pending.filter(p => p.tag !== 'ko');
      for (const q of Q) if (q.on) { const r0 = resetSpot(q.p, t); q.x = r0.x; q.y = r0.y; q.vx = q.vy = 0; q.ov = null; }
      const kq = on(s).filter(q => q.p.pos !== 'POR').sort((a, b) => b.p.d - a.p.d)[0];
      ball.fl = null; ball.net = null; ball.x = 52.5; ball.y = 34; ball.z = 0; ball.side = s;
      if (kq) { kq.x = 52.5 - dirOf(s, t) * .7; kq.y = 34; give(kq.p.i, t); kq.ov = { x: kq.x, y: kq.y, v: .1, until: t + KOD }; }
      ball.dead = { until: t + KOD, restart: tt => { const back = on(s).find(q => /MC|MCD|MCO/.test(q.p.pos) && q !== kq) || on(s).find(q => q !== kq && q.p.pos !== 'POR'); if (back && owner()) passTo(tt, back, { safe: true }); prot[s] = tt + 2; nextDec = tt + 2; } };
      phases.push({ t0: t, t1: t + 2.6, type: 'reset' });
    }

    /* --- remate y sus consecuencias --- */
    function shoot(t, pl, shooter, assister) {
      const s = pl.s, dirx = dirOf(s, t), gx = X(s, t, FL), shotDur = pl.type === 'miss' ? .9 : .7, z0 = ball.z > .8 ? ball.z : 0, by = shooter.p.i;
      const gk = on(1 - s).find(q => q.p.pos === 'POR');
      if (pl.k === 'pen') say(t, 'Lanza ' + nm(shooter.p.id) + '…', true);
      else say(t, (z0 > .8 ? 'Remate de cabeza de ' : pl.k === 'fal' ? 'Lanza la falta ' : pl.k === 'con' ? '¡Contraataque! Dispara ' : pl.type === 'goal' ? '¡Dispara ' : 'Disparo de ') + nm(shooter.p.id) + '…');
      ball.own = -1;
      if (pl.type === 'goal') {
        const ty = 34 + (R() < .5 ? -1 : 1) * (1 + R() * 2.4), tz = .3 + R() * 1.8;
        if (gk) gk.ov = { x: gx - dirx * .7, y: clamp(ty + (ty < 34 ? 1.4 : -1.4), 30, 38), v: 5, until: t + shotDur + .6 };
        kick(t, -1, gx + dirx * .9, ty, { dur: shotDur, shot: true, h: pl.k === 'fal' ? 1.6 : .4, z0, z1: tz, by, out: T => {
          ball.net = { t0: T, x0: ball.x, x1: gx + dirx * 1.7, z0: tz }; ball.dead = { until: 1e9 }; netT.push(T);
          goals.push({ t: T, s, p: shooter.p.id, a: assister && assister.p.id, m: pl.m });
          const g0 = goals.filter(g => g.s === 0).length, g1 = goals.filter(g => g.s === 1).length;
          banners.push({ t: T, d: 4.5, type: 'goal', s, p: shooter.p.id, a: assister && assister.p.id, sc: [g0, g1] });
          say(T, '¡GOOOL de ' + E.player(shooter.p.id).name + '!' + (assister ? ' Asistencia de ' + nm(assister.p.id) + '.' : ''), true);
          phases.push({ t0: T, t1: T + CEL, type: 'celebr', s, pid: shooter.p.id, cx: X(s, T, 101), cy: ty < 34 ? 3 : FW - 3 });
          later(T + CEL, tt => kickoff(1 - s, tt), 'ko');
        } });
      } else if (pl.type === 'miss' && pl.post) {
        const ty = 34 + (R() < .5 ? -1 : 1) * 3.6;
        kick(t, -1, gx, ty, { dur: shotDur, shot: true, h: .5, z0, z1: 1.2, by, out: T => {
          banners.push({ t: T, d: 2.2, type: 'pal', s, p: shooter.p.id }); say(T, '¡Al palo! ' + nm(shooter.p.id) + ' estaba cerca.', true);
          kick(T, -1, gx - dirx * 9, clamp(ty + (ty < 34 ? 5 : -5), 3, FW - 3), { dur: .8, h: 1.5, z0: 1.2 });
          prot[s] = 0; boost = -1;
        } });
      } else if (pl.type === 'miss') {
        const over = R() < .35, ty = over ? 34 + (R() - .5) * 5 : 34 + (R() < .5 ? -1 : 1) * (4.6 + R() * 5);
        kick(t, -1, gx + dirx * 3, ty, { dur: shotDur, shot: true, h: over ? 2.6 : .5, z0, z1: over ? 3.2 : .4, by, out: T => {
          banners.push({ t: T, d: 2.2, type: 'miss', s, p: shooter.p.id }); say(T, over ? 'El balón se va por encima del larguero.' : 'Se marcha fuera por poco.');
          ball.z = 0; const spot = { x: X(s, T, 99.5), y: 34 + (R() - .5) * 8 };
          if (gk) gk.ov = { x: spot.x, y: spot.y, v: 3.5, until: T + 2.6 };
          ball.dead = { until: T + 2.6, walk: true, restart: tt => { ball.x = spot.x; ball.y = spot.y; if (gk && gk.on) { give(gk.p.i, tt); prot[1 - s] = tt + 2.5; nextDec = tt + 1.4; } } };
        } });
      } else {
        const ty = 34 + (R() - .5) * 4, hx = gx - dirx * 1.3;
        if (gk) gk.ov = { x: hx, y: ty, v: 6, until: t + shotDur + .3 };
        kick(t, gk ? gk.p.i : -1, hx, ty, { dur: shotDur, shot: true, h: .5, z0, z1: 1 + R(), by, rv: 6, out: T => {
          banners.push({ t: T, d: 2.4, type: 'save', s, p: shooter.p.id, gk: gk && gk.p.id }); say(T, (gk ? '¡Paradón de ' + nm(gk.p.id) + '!' : '¡Lo saca la defensa!'), true);
          ball.z = 0; if (gk && gk.on) { give(gk.p.i, T); prot[1 - s] = T + 2.6; nextDec = T + 2; }
        } });
      }
      prot[s] = 0; boost = -1;
    }

    /* --- guiones: preparan cada incidencia para que ocurra a su hora --- */
    function sAttack(pl, t0) {
      const s = pl.s, Tg = pl.t, shotDur = pl.type === 'miss' ? .9 : .7, tShot = Tg - shotDur;
      const shooter = valid(s, pl.p) ? qOf(pl.p) : wpick(R, on(s).filter(q => q.p.pos !== 'POR'), q => SHOTW[q.p.pos]);
      if (!shooter) return null;
      const assister = valid(s, pl.a) && pl.a !== shooter.p.id ? qOf(pl.a) : null, cab = pl.k === 'cab', con = pl.k === 'con';
      const spotU = cab ? 88 + R() * 5 : shooter.p.pos === 'DC' ? 85 + R() * 9 : 78 + R() * 11;
      const spotY = clamp(34 + (R() - .5) * (cab ? 10 : shooter.p.pos === 'DC' ? 16 : 28), 8, 60), sd = R() < .5 ? -1 : 1;
      const aU = cab ? 86 + R() * 6 : 68 + R() * 10, aY = cab ? (sd < 0 ? 6 : 62) : clamp(34 + sd * (8 + R() * 12), 6, 62);
      const est = (d, lo) => lo ? d / 19 + .55 : clamp(d / 16 + .15, .3, 2.6);
      let stage = 0, passedA = false;
      boost = s;
      return { ctrl: false, step(t) {
        const spot = { x: X(s, t, spotU), y: spotY }, ap = { x: X(s, t, aU), y: aY };
        this.ctrl = stage === 1;
        if (stage === 0) {
          if (hasBall(s)) { stage = 1; boost = -1; }
          else {
            if (t >= Math.min(tShot - (con ? 5 : 4.5), Math.max(t0 + 2.5, tShot - 7))) forceWin(s, t);
            if (t >= Tg + 1.5 && !ball.dead && !ball.net) { give(shooter.p.i, t); stage = 1; }
            if (stage === 0) return t > Tg + 12;
          }
        }
        this.ctrl = true; prot[s] = Math.max(prot[s], t + .25);
        const left = Math.max(.5, tShot - .3 - t);
        shooter.ov = { x: spot.x, y: spot.y, v: clamp(hyp(shooter.x, shooter.y, spot.x, spot.y) / left, 2.5, con ? 9 : 8.2), until: t + .15 };
        if (ball.dead || ball.net) return t > Tg + 12;
        const c = owner(); if (!c) { if (!ball.fl) forceWin(s, t); return false; }
        if (c.p.s !== s) { stage = 0; return false; }
        if (c === shooter) {
          if (t >= tShot - .05) { shoot(t, pl, shooter, assister); return true; }
          shooter.ov = { x: spot.x, y: spot.y, v: 5.4, until: t + .15 }; return false;
        }
        const dS = hyp(c.x, c.y, spot.x, spot.y), lo = cab || dS > 32, fS = est(dS, lo);
        if (assister && !passedA && c !== assister) {
          const dAS = hyp(ap.x, ap.y, spot.x, spot.y), fA = est(hyp(c.x, c.y, ap.x, ap.y), false), tPA = tShot - est(dAS, cab || dAS > 32) - .7 - fA;
          assister.ov = { x: ap.x, y: ap.y, v: clamp(hyp(assister.x, assister.y, ap.x, ap.y) / Math.max(.5, tPA + fA - t), 2.5, 8.2), until: t + .15 };
          if (t >= tPA) { passTo(t, assister, { at: ap, safe: true }); passedA = true; return false; }
        } else if (t >= tShot - fS - .1) {
          passTo(t, shooter, { at: spot, lofted: lo, safe: true, h: cab ? 3.2 : undefined, z1: cab ? 1.9 : 0, out: T => { ball.own = -1; shoot(T, pl, shooter, assister); } });
          return true;
        }
        if (c === assister) { c.ov = { x: ap.x, y: ap.y, v: 5, until: t + .15 }; return false; }
        if (t < tShot - fS - 1.8) freeDecide(t, { fwd: true, fast: con, skip: [shooter, assister].filter(Boolean) });
        return false;
      } };
    }
    function sSetShot(pl, t0) {
      const s = pl.s, Tg = pl.t, shotDur = pl.type === 'miss' ? .9 : .7, tShot = Tg - shotDur, sh = valid(s, pl.p) ? qOf(pl.p) : null;
      if (!sh) return sAttack({ ...pl, k: 'nor' }, t0);
      let placed = false;
      return { step(t) {
        if (!placed) {
          if (pl.k === 'pen') {
            if (!(ball.dead && penSpot && penSpot.s === s)) { if (ball.fl || ball.net) return false; placePen(s, t, pl.p, null); }
          } else {
            if (ball.fl || ball.net || (ball.dead && t < ball.dead.until)) return false;
            const c = owner(), u0 = c ? clamp(U(s, t, c.x), 74, 86) : 79 + R() * 7;
            const fx = X(s, t, u0), fy = clamp(c ? c.y : 34 + (R() - .5) * 26, 14, 54);
            ball.own = -1; ball.dead = { until: 1e9 }; ball.x = fx; ball.y = fy; ball.z = 0; ball.side = s;
            phases.push({ t0: t, t1: Math.max(t + 1, tShot + .1), type: 'fk', s, x: fx, y: fy });
            say(t, 'Falta peligrosa al borde del área.');
          }
          placed = true;
        }
        const d = dirOf(s, t), bx = ball.x, by = ball.y;
        sh.ov = { x: bx - d * (t < tShot - .7 ? 1.8 : .3), y: by, v: 3, until: t + .15 };
        if (t >= tShot) { ball.dead = null; penSpot = null; ball.own = sh.p.i; ball.side = s; shoot(t, pl, sh, null); return true; }
        return false;
      } };
    }
    function placePen(s, t, taker, fouler) {
      const spot = { x: X(s, t, FL - 11), y: 34 };
      ball.own = -1; ball.fl = null; ball.x = spot.x; ball.y = spot.y; ball.z = 0; ball.side = s;
      ball.dead = { until: t + 6.5, walk: true, restart: tt => { penSpot = null; const gk = on(1 - s).find(q => q.p.pos === 'POR'); if (gk) { give(gk.p.i, tt); prot[1 - s] = tt + 2; } } };
      penSpot = { s, ...spot };
      phases.push({ t0: t, t1: t + 5.6, type: 'pen', s, x: spot.x, y: spot.y, pid: taker });
      if (valid(s, taker)) qOf(taker).ov = { x: spot.x - dirOf(s, t) * 1.8, y: 34, v: 4, until: t + 5.6 };
    }
    function sPen(pl, t0) {
      const s = pl.s, Tg = pl.t; let passed = false, recv = null;
      boost = s;
      return { step(t) {
        if (!hasBall(s)) { if (t >= Tg - 3.6) forceWin(s, t); if (!hasBall(s)) return t > Tg + 8 && (placePen(s, t, pl.p, pl.q), true); }
        boost = -1; prot[s] = Math.max(prot[s], t + .25);
        const c = owner();
        if (!passed && c) {
          recv = on(s).filter(q => q.p.pos !== 'POR' && q !== c).sort((a, b) => (SHOTW[b.p.pos] || 0) - (SHOTW[a.p.pos] || 0))[0] || c;
          const box = { x: X(s, t, 92), y: clamp(34 + (R() - .5) * 18, 20, 48) };
          recv.ov = { x: box.x, y: box.y, v: 8, until: t + .15 };
          if (recv === c || t >= Tg - 1.6 - est2(hyp(c.x, c.y, box.x, box.y))) { if (recv !== c) passTo(t, recv, { at: box, safe: true, lofted: hyp(c.x, c.y, box.x, box.y) > 30 }); passed = true; }
          return false;
        }
        if (ball.fl || t < Tg) { if (valid(1 - s, pl.q) && recv) qOf(pl.q).ov = { x: recv.x, y: recv.y, v: 8, until: t + .15 }; return false; }
        banners.push({ t, d: 2.6, type: 'pen', s, p: pl.p, q: pl.q, card: pl.card });
        say(t, '¡Penalti!' + (pl.q ? ' Falta de ' + nm(pl.q) + '.' : ''), true);
        placePen(s, t, pl.p, pl.q);
        return true;
      } };
    }
    const est2 = d => clamp(d / 16 + .15, .3, 2.6);
    function sTackle(pl, t0) {
      const s = pl.s, vs = 1 - s, Tg = pl.t, victim = valid(vs, pl.q) ? qOf(pl.q) : null; let passed = false, ph = null;
      boost = vs;
      return { step(t) {
        if (!hasBall(vs)) { if (t >= Tg - 2.4) forceWin(vs, t); if (!hasBall(vs)) return t > Tg + 6; }
        boost = -1; if (t < Tg) prot[vs] = Math.max(prot[vs], Math.min(Tg, t + .25));
        const c = owner();
        if (c && victim && c !== victim && !passed && t < Tg - 1.3) { passTo(t, victim, { safe: true }); passed = true; }
        const cur = owner() || (ball.fl && ball.fl.to >= 0 ? Q[ball.fl.to] : null); if (!cur) return t > Tg + 6;
        const st = valid(s, pl.p) ? qOf(pl.p) : nearestOf(s, cur); if (!st) return true;
        const d = dirOf(s, t);
        st.ov = { x: cur.x + d * .6, y: cur.y, v: 8, until: t + .15 };
        if (!ph) { ph = { t0: Math.max(t, Tg - 1.1), t1: Tg + (pl.slide ? 1.6 : .7), type: 'tackle', pid: st.p.id, vic: cur.p.id, slide: pl.slide }; phases.push(ph); }
        if (t < Tg || !owner()) return false;
        const cc = owner(); prot[vs] = 0;
        if (hyp(st.x, st.y, cc.x, cc.y) > 3.5) { st.x = lerp(st.x, cc.x, .5); st.y = lerp(st.y, cc.y, .5); }
        if (pl.slide) {
          st.ov = { x: st.x, y: st.y, v: .3, until: t + 1.3 }; cc.ov = { x: cc.x, y: cc.y, v: 1, until: t + 1.1 };
          kick(t, -1, clamp(cc.x - d * 2.8, 2, FL - 2), clamp(cc.y + (R() - .5) * 4, 2, FW - 2), { dur: .45, by: st.p.i }); ball.side = s;
        } else { give(st.p.i, t); nextDec = t + .8; }
        ph.vic = cc.p.id;
        banners.push({ t, d: 1.6, type: pl.slide ? 'seg' : 'rob', s, p: st.p.id, q: cc.p.id });
        if (pl.slide || R() < .45) say(t, (pl.slide ? '¡Segada limpia de ' : 'Robo de ') + nm(st.p.id) + ' a ' + nm(cc.p.id) + '.', pl.slide);
        return true;
      } };
    }
    function sDrib(pl, t0) {
      const s = pl.s, Tg = pl.t, drb = valid(s, pl.p) ? qOf(pl.p) : null; let passed = false, started = false;
      boost = s;
      return { step(t) {
        if (!hasBall(s)) { if (t >= Tg - 2.2) forceWin(s, t); if (!hasBall(s)) return t > Tg + 6; }
        boost = -1; prot[s] = Math.max(prot[s], t + .25);
        this.ctrl = true;
        const c0 = owner(); if (c0 && drb && c0 !== drb && !passed && t < Tg - 1.1) { passTo(t, drb, { safe: true }); passed = true; return false; }
        const c = owner(); if (!c) return t > Tg + 6;
        const d = dirOf(s, t), dfn = valid(1 - s, pl.q) ? qOf(pl.q) : nearestOf(1 - s, c);
        if (!started) {
          c.ov = { x: c.x + d * 1.5, y: c.y, v: 3.5, until: t + .15 };
          if (dfn) dfn.ov = { x: c.x + d * 2.2, y: c.y, v: 7.5, until: t + .15 };
          if (t < Tg - .45) return false;
          started = true; const sd = R() < .5 ? -1 : 1, x0 = c.x, y0 = c.y;
          c.ov = { x: clamp(x0 + d * 3, 2, FL - 2), y: clamp(y0 + sd * 3.5, 3, FW - 3), v: 7, until: t + .9 };
          later(t + .9, () => { if (c.on) c.ov = { x: clamp(x0 + d * 8, 2, FL - 2), y: clamp(y0 + sd * 2, 3, FW - 3), v: 7.5, until: t + 1.8 }; });
          if (dfn) { dfn.x = lerp(dfn.x, x0 + d * 2, .6); dfn.y = lerp(dfn.y, y0, .6); dfn.ov = { x: dfn.x, y: dfn.y - sd * .8, v: 1.2, until: t + 1.5 }; }
          phases.push({ t0: t - .4, t1: t + 1.3, type: 'drib', pid: c.p.id, def: dfn && dfn.p.id, bx: x0 + d * 1.5, by: y0 });
          prot[s] = t + 1.8;
          banners.push({ t: t + .3, d: 1.5, type: 'reg', s, p: c.p.id, q: dfn && dfn.p.id });
          say(t + .3, '¡Regate de ' + nm(c.p.id) + (dfn ? ' que deja atrás a ' + nm(dfn.p.id) : '') + '!', true);
        }
        return t >= Tg + 1.2;
      } };
    }
    function sCorner(pl, t0) {
      const s = pl.s, Tg = pl.t, T0 = Math.max(t0 + 1.2, Tg - 3); let st = 0, cx = 0, cy = 0, taker = null, tk = 0;
      return { step(t) {
        if (st === 0) {
          if (t < T0 - 1 || ball.dead || ball.net || ball.fl) return false;
          cy = R() < .5 ? .7 : FW - .7; cx = X(s, t, FL - .7);
          kick(t, -1, X(s, t, FL + 1.5), cy < 34 ? 7 : FW - 7, { dur: .9, out: () => { ball.dead = { until: 1e9, walk: true }; } });
          say(t, 'Despeje a córner.'); st = 1; return false;
        }
        if (st === 1) {
          if (ball.fl) return false;
          ball.dead = { until: 1e9, walk: true }; ball.own = -1; ball.x = cx; ball.y = cy; ball.z = 0; ball.side = s;
          taker = on(s).filter(q => /ED|EI|MCO|LD|LI|MC/.test(q.p.pos)).sort((a, b) => b.p.d - a.p.d)[0] || on(s)[0];
          tk = t + 2.3;
          phases.push({ t0: t, t1: tk + 1.3, type: 'set', s, cx, cy, pid: taker && taker.p.id });
          banners.push({ t, d: 2, type: 'cor', s }); say(t, 'Córner. Lo saca ' + (taker ? nm(taker.p.id) : 'el extremo') + '.');
          if (taker) taker.ov = { x: cx + dirOf(s, t) * .6, y: cy + (cy < 34 ? -.6 : .6), v: 8, until: tk };
          st = 2; return false;
        }
        if (t < tk) return false;
        const tg = wpick(R, on(s).filter(q => q.p.pos !== 'POR' && q !== taker), q => /DC|DFC/.test(q.p.pos) ? 3 : 1);
        const tx = X(s, t, FL - 8 - R() * 5), ty = clamp(34 + (R() - .5) * 14, 22, 46);
        ball.dead = null; if (taker) ball.own = taker.p.i;
        kick(t, tg ? tg.p.i : -1, tx, ty, { lofted: true, h: 7, z1: 1.9, dur: 1.3, out: T => {
          kick(T, -1, X(s, T, FL - 14 - R() * 9), clamp(34 + (R() - .5) * 24, 8, 60), { dur: .7, z0: 1.9, h: .9, by: tg ? tg.p.i : -1 });
        } });
        return true;
      } };
    }
    function sStop(pl, t0) {
      const s = pl.s, Tg = pl.t, dur = pl.type === 'inj' ? 3.5 : pl.type === 'foul' && !pl.card ? 2.2 : pl.type === 'off' ? 2 : 3;
      const vs = pl.type === 'foul' ? 1 - s : pl.type === 'off' ? s : -1;
      const actor = valid(s, pl.p) ? qOf(pl.p) : null, vic = valid(1 - s, pl.q) ? qOf(pl.q) : null; let passed = false;
      if (vs >= 0) boost = vs;
      return { step(t) {
        if (vs >= 0 && !hasBall(vs) && t < Tg + 3) { if (t >= Tg - 2.2) forceWin(vs, t); if (!hasBall(vs)) return false; }
        boost = -1; if (vs >= 0 && t < Tg) prot[vs] = Math.max(prot[vs], Math.min(Tg, t + .25));
        const c = owner();
        if (pl.type === 'foul') {
          if (c && vic && c !== vic && !passed && t < Tg - 1.3) { passTo(t, vic, { safe: true }); passed = true; }
          const cur = owner() || (ball.fl && ball.fl.to >= 0 ? Q[ball.fl.to] : null);
          if (actor && cur) actor.ov = { x: cur.x, y: cur.y, v: 8, until: t + .15 };
        } else if (pl.type === 'off' && actor) {
          let defU = 40; for (const q of on(1 - s)) if (q.p.pos !== 'POR') defU = Math.max(defU, U(s, t, q.x));
          if (!passed) actor.ov = { x: X(s, t, clamp(defU + 2.5, 40, 95)), y: actor.y, v: 7.5, until: t + .15 };
          if (c && c !== actor && !passed && t >= Tg - 1.1) { passTo(t, actor, { safe: true }); passed = true; }
        }
        if (t < Tg || (ball.fl && t < Tg + 1.2) || ball.net || (ball.dead && t < Tg + 3)) return false;
        const T = t, bx = ball.x, by = ball.y; ball.fl = null; ball.own = -1; ball.z = 0;
        const fouled = pl.type === 'foul' || pl.type === 'off' ? 1 - s : ball.side;
        const down = pl.type === 'inj' ? pl.p : pl.type === 'foul' ? (vic ? vic.p.id : c ? c.p.id : null) : null;
        phases.push({ t0: T, t1: T + dur, type: 'stop', pid: pl.p, down });
        if (pl.type === 'foul' && pl.card) { banners.push({ t: T, d: 3, type: pl.card, s, p: pl.p }); say(T, (pl.card === 'roja' ? '¡Roja! ' : 'Falta y amarilla para ') + E.player(pl.p).name + '.', true); }
        else if (pl.type === 'foul') { banners.push({ t: T, d: 1.8, type: 'fal', s, p: pl.p, q: pl.q }); say(T, 'Falta de ' + nm(pl.p) + (pl.q ? ' sobre ' + nm(pl.q) : '') + '.'); }
        else if (pl.type === 'off') { banners.push({ t: T, d: 1.8, type: 'off', s, p: pl.p }); say(T, 'Fuera de juego de ' + nm(pl.p) + '. Bandera arriba.'); }
        else { banners.push({ t: T, d: 3, type: 'les', s, p: pl.p }); say(T, E.player(pl.p).name + ' se duele en el césped. Malas noticias.', true); }
        const tk = nearestOf(fouled, { x: bx, y: by }); if (tk) tk.ov = { x: bx, y: by, v: 4, until: T + dur };
        ball.dead = { until: T + dur, walk: true, restart: tt => { const k2 = nearestOf(fouled, { x: bx, y: by }); if (k2) { give(k2.p.i, tt); prot[fouled] = tt + 1.5; nextDec = tt + .7; } } };
        return true;
      } };
    }
    function makeScript(pl, t) {
      if (pl.type === 'goal' || pl.type === 'miss' || pl.type === 'save') return pl.k === 'pen' || pl.k === 'fal' ? sSetShot(pl, t) : sAttack(pl, t);
      if (pl.type === 'tackle') return sTackle(pl, t);
      if (pl.type === 'drib') return sDrib(pl, t);
      if (pl.type === 'corner') return sCorner(pl, t);
      if (pl.type === 'pen') return sPen(pl, t);
      return sStop(pl, t);
    }
    const LEAD = pl => pl.type === 'goal' || pl.type === 'miss' || pl.type === 'save' ? (pl.k === 'pen' ? 2 : pl.k === 'fal' ? 4 : pl.k === 'con' ? 7 : 8.5) : pl.type === 'corner' ? 4.4 : pl.type === 'pen' ? 6 : pl.type === 'inj' ? 1.5 : pl.type === 'off' ? 4 : 3.4;

    /* --- objetivos de movimiento de cada jugador --- */
    function curPhase(t) { for (let i = phases.length - 1; i >= Math.max(0, phases.length - 6); i--) { const p = phases[i]; if (t >= p.t0 && t < p.t1) return p; } return null; }
    function phaseT(p, t, ph) {
      if (ph.type === 'celebr') {
        if (p.s === ph.s && p.pos !== 'POR') { const a = (p.num * 1.7) % 6.28, k2 = p.id === ph.pid ? 0 : 1; return { x: clamp(ph.cx + Math.cos(a) * 2.5 * k2, 1, FL - 1), y: clamp(ph.cy + Math.sin(a) * 2.5 * k2, 1, FW - 1), v: 7.5 }; }
        const r0 = resetSpot(p, t); return { x: r0.x, y: r0.y, v: 2.5 };
      }
      if (ph.type === 'reset') { const r0 = resetSpot(p, t); return { x: r0.x, y: r0.y, v: 2 }; }
      if (ph.type === 'set') {
        if (p.id === ph.pid) return null;
        if (p.pos === 'POR') return p.s !== ph.s ? { x: X(ph.s, t, FL - .6), y: 34, v: 4 } : null;
        const off = p.s === ph.s ? 0 : 1.3; return { x: X(ph.s, t, FL - 6.5 - ((p.num * 3) % 10) - off * .6), y: clamp(34 + (((p.num * 7) % 17) - 8) * 1.3 + off, 18, 50), v: 6 };
      }
      if (ph.type === 'pen') {
        if (p.id === ph.pid) return null;
        if (p.pos === 'POR') return p.s !== ph.s ? { x: X(ph.s, t, FL - .4), y: 34, v: 4 } : null;
        const a = ((p.num * 37) % 100) / 100 * 2.4 - 1.2; return { x: X(ph.s, t, FL - 11 - 10 * Math.cos(a) - 1), y: clamp(34 + 14 * Math.sin(a), 10, 58), v: 5 };
      }
      if (ph.type === 'fk' && p.s !== ph.s && p.pos !== 'POR' && (p.num % 4 === 1 || /DFC/.test(p.pos))) {
        const gx = X(ph.s, t, FL), dx = gx - ph.x, dy = 34 - ph.y, L = Math.hypot(dx, dy) || 1, k2 = (p.num % 5) - 2;
        return { x: ph.x + dx / L * 9.15 - dy / L * k2 * .7, y: ph.y + dy / L * 9.15 + dx / L * k2 * .7, v: 5 };
      }
      return null;
    }
    function targets(t) {
      const ph = curPhase(t), c = owner(), fl = ball.fl, possS = ball.side;
      const bx = fl ? fl.x1 : ball.x, by = fl ? fl.y1 : ball.y, out = new Array(Q.length);
      const chase = [null, null];
      if (!c && !ball.dead && !ball.net) for (const s of [0, 1]) if (!(fl && fl.to >= 0 && Q[fl.to].p.s === s)) chase[s] = nearestOf(s, { x: bx, y: by });
      let pr1 = null, pr2 = null, sup = [];
      if (c && !ball.dead) {
        const ds = []; for (const q of Q) if (q.on && q.p.s !== c.p.s && q.p.pos !== 'POR') ds.push({ q, d: hyp(q.x, q.y, c.x, c.y) });
        ds.sort((a, b) => a.d - b.d); pr1 = ds[0] && ds[0].q; pr2 = ds[1] && ds[1].q;
        const ms = []; for (const q of Q) if (q.on && q.p.s === c.p.s && q !== c && q.p.pos !== 'POR') ms.push({ q, d: hyp(q.x, q.y, c.x, c.y) });
        ms.sort((a, b) => a.d - b.d); sup = ms.slice(0, 2).map(o => o.q);
      }
      for (const q of Q) {
        if (!q.on) continue;
        const p = q.p; let T;
        if (q.ov && t < q.ov.until) T = q.ov;
        else {
          q.ov = null;
          const pt = ph ? phaseT(p, t, ph) : null;
          if (pt) T = pt;
          else if (c === q) T = ball.dead ? { x: q.x, y: q.y, v: .1 } : carryTarget(q, t);
          else if (chase[p.s] === q) T = { x: bx, y: by, v: 7.5 };
          else {
            const b = shapeTarget(p, t, bx, by, possS), db = hyp(q.x, q.y, bx, by), far = hyp(q.x, q.y, b.x, b.y); T = { x: b.x, y: b.y, v: far > 12 ? 6.2 : db > 38 ? 2.4 : db > 26 ? 3.4 : db > 15 ? 4.5 : 5.4 };
            if (c && !ball.dead && p.s !== c.p.s) {
              if (q === pr1) T = { x: c.x - dirOf(p.s, t) * .8, y: c.y, v: t < prot[c.p.s] ? 6.2 : 7.2 };
              else if (q === pr2) { const gx = X(p.s, t, 0), L = hyp(gx, 34, c.x, c.y) || 1; T = { x: c.x + (gx - c.x) / L * 6, y: c.y + (34 - c.y) / L * 6, v: 6.2 }; }
              else if (p.pos !== 'POR') {
                let mk = null, md = 11; for (const z of Q) if (z.on && z.p.s !== p.s) { const d = hyp(z.x, z.y, b.x, b.y); if (d < md) { md = d; mk = z; } }
                if (mk) { const gx = X(p.s, t, 0), L = hyp(gx, 34, mk.x, mk.y) || 1, gap = 2.6; T.x = lerp(b.x, mk.x + (gx - mk.x) / L * gap, .38); T.y = lerp(b.y, mk.y + (34 - mk.y) / L * gap, .38); }
              }
            } else if (c && !ball.dead && p.s === c.p.s && sup.includes(q)) {
              const a = .75 * (sup.indexOf(q) ? -1 : 1), fx = dirOf(p.s, t) * Math.cos(a), fy = Math.sin(a);
              T = { x: lerp(b.x, clamp(c.x + fx * 13, 2, FL - 2), .55), y: lerp(b.y, clamp(c.y + fy * 13, 2, FW - 2), .55), v: 6 };
            }
            if (ball.dead && ball.dead.walk) T.v = Math.min(T.v, 1.8);
          }
        }
        out[p.i] = T;
      }
      return out;
    }
    function move(T) {
      const A = []; for (const q of Q) if (q.on) A.push(q);
      const n = A.length, bo = ball.own;
      for (let a = 0; a < n; a++) {
        const q = A[a], g = T[q.p.i]; if (!g) continue;
        let dx = g.x - q.x, dy = g.y - q.y; const d = Math.sqrt(dx * dx + dy * dy);
        if (bo !== q.p.i) for (let b = 0; b < n; b++) { if (b === a) continue; const z = A[b], sx = q.x - z.x; if (sx > 1.4 || sx < -1.4) continue; const sy = q.y - z.y; if (sy > 1.4 || sy < -1.4) continue; const s2 = sx * sx + sy * sy; if (s2 < 1.96 && s2 > 1e-6 && bo !== z.p.i) { const sd = Math.sqrt(s2), k2 = (1.4 - sd) * 2 / sd; dx += sx * k2; dy += sy * k2; } }
        const dd = Math.sqrt(dx * dx + dy * dy), want = Math.min(g.v || 5.4, d * 1.5);
        const wx = dd > 1e-4 ? dx / dd * want : 0, wy = dd > 1e-4 ? dy / dd * want : 0;
        let ax = wx - q.vx, ay = wy - q.vy; const al = Math.sqrt(ax * ax + ay * ay), am = 9 * DT; if (al > am) { ax *= am / al; ay *= am / al; }
        q.vx += ax; q.vy += ay; q.x = clamp(q.x + q.vx * DT, -1.5, FL + 1.5); q.y = clamp(q.y + q.vy * DT, -1.5, FW + 1.5);
      }
    }
    function ballStep(t) {
      const f = ball.fl;
      if (f) {
        const kk = clamp((t - f.t0) / (f.t1 - f.t0), 0, 1);
        ball.x = lerp(f.x0, f.x1, kk); ball.y = lerp(f.y0, f.y1, kk); ball.z = lerp(f.z0, f.z1, kk) + f.h * 4 * kk * (1 - kk);
        if (kk >= 1) {
          ball.fl = null;
          if (f.out) f.out(t);
          else if (f.to >= 0 && Q[f.to].on && hyp(Q[f.to].x, Q[f.to].y, ball.x, ball.y) < 2.6) { give(f.to, t); nextDec = t + .8 + R() * 1; }
          else ball.z = 0;
        }
      } else if (ball.net) { const n = ball.net, kk = clamp((t - n.t0) / .5, 0, 1); ball.x = lerp(n.x0, n.x1, kk); ball.z = lerp(n.z0, 0, kk * kk); }
      else if (ball.own >= 0) { const c = Q[ball.own], sp = Math.hypot(c.vx, c.vy); if (sp > .4) { c.fx = c.vx / sp; c.fy = c.vy / sp; } ball.x = c.x + c.fx * .65; ball.y = c.y + c.fy * .65; ball.z = 0; }
      if (ball.own >= 0) possT[ball.side] += DT;
    }
    function activate(t) {
      for (const q of Q) {
        const a = q.p.from <= t && t < q.p.to;
        if (a && !q.on) { q.on = true; q.vx = q.vy = 0; q.ov = null; if (q.p.from < 0) { const r0 = resetSpot(q.p, t); q.x = r0.x; q.y = r0.y; } else { q.x = 52.5 + (q.p.s ? 4 : -4); q.y = -.8; } }
        else if (!a && q.on) { q.on = false; if (ball.own === q.p.i) ball.own = -1; }
      }
    }

    kickoff(0, 0); say(0, '¡Empieza el partido!', true);
    for (let f = 0; f < N; f++) {
      const t = f * DT;
      activate(t);
      if (pending.length) { const due = pending.filter(p => t >= p.at); if (due.length) { pending = pending.filter(p => t < p.at); due.forEach(p => p.fn(t)); } }
      if (!ended) {
        if (!halfDone && t >= RH - .4 && !(pi < plays.length && plays[pi].h1 === true && t < RH + 25) && (!script || t >= RH + (SHORT ? 14 : 2)) && (!SHORT || (!ball.fl && !ball.net && !pending.some(p => p.tag === 'ko')) || t >= RH + 25)) {
          halfDone = true; script = null; ball.fl = null; ball.net = null; ball.dead = { until: 1e9, walk: true };
          for (const ph of phases) if (ph.t1 > t) ph.t1 = t;
          banners.push({ t, d: 3, type: 'half' }); say(t, 'Descanso.', true);
          halfAt = t + .6; later(halfAt, tt => kickoff(1, tt), 'ko');
        }
        if (!script && pi < plays.length) {
          const pl = plays[pi], post = pl.h1 === undefined ? pl.t > RH : !pl.h1;
          if ((!post || (halfDone && t >= halfAt + 2.7)) && t >= pl.t - LEAD(pl)) { pi++; script = makeScript(pl, t); }
        }
        if (script && script.step(t)) script = null;
        if (!ball.dead && !ball.net) { if (!script || !script.ctrl) freeDecide(t); freeTackle(t); loose(t); }
        else if (ball.dead && t >= ball.dead.until) { const d = ball.dead; ball.dead = null; if (d.restart) d.restart(t); }
        if (halfDone && pi >= plays.length && !script && t >= LIVE_S - .4 && (!SHORT || (!ball.fl && !ball.net && !pending.some(p => p.tag === 'ko')) || t >= END - 2)) {
          ended = true; ball.dead = { until: 1e9, walk: true }; ball.fl = null; if (ball.own >= 0) ball.own = -1;
          for (const q of Q) if (q.on) q.ov = { x: clamp(q.x + q.vx * .5, 1, FL - 1), y: clamp(q.y + q.vy * .5, 1, FW - 1), v: 1.4, until: 1e9 };
          const g0 = goals.filter(g => g.s === 0).length, g1 = goals.length - g0;
          phases.push({ t0: t + .8, t1: 1e9, type: 'fin', s: g0 > g1 ? 0 : g1 > g0 ? 1 : -1 });
          banners.push({ t, d: 999, type: 'end' }); say(t, 'Final del partido.', true);
        }
      }
      move(targets(t)); ballStep(t);
      for (const q of Q) if (q.on) { TR[q.p.i][f * 2] = q.x; TR[q.p.i][f * 2 + 1] = q.y; }
      BX[f] = ball.x; BY[f] = ball.y; BZ[f] = ball.z; BO[f] = ball.own; BT[f] = ball.fl ? ball.fl.to : -1; BS[f] = ball.side; BF[f] = ball.fl ? (ball.fl.shot ? 2 : 1) : ball.net ? 3 : 0;
    }
    if (!ended) { banners.push({ t: LIVE_S - .3, d: 999, type: 'end' }); say(LIVE_S - .3, 'Final del partido.', true); }
    tacs.forEach(e => { const tx = e.form ? 'Cambia a ' + e.form : 'Táctica: ' + ({ def: 'defensiva', equ: 'equilibrada', ofe: 'ofensiva' })[e.tac.ment] + ', presión ' + ({ baj: 'baja', med: 'media', alt: 'alta' })[e.tac.press]; banners.push({ t: e.tt, d: 2.2, type: 'tac', s: e.s, txt: tx }); say(e.tt, tx + '.'); });
    evT.filter(e => e.t === 'cam').forEach(e => { banners.push({ t: e.tt, d: 3, type: 'sub', s: e.s, p: e.p, q: e.q }); say(e.tt, 'Cambio: entra ' + nm(e.p) + ', sale ' + nm(e.q) + '.'); });
    banners.sort((a, b) => a.t - b.t); comm.sort((a, b) => a.t - b.t); kicks.sort((a, b) => a.t - b.t);
    const windows = [...goals.map(g => g.t), ...banners.filter(b => ['miss', 'save', 'roja', 'les', 'pen', 'pal', 'seg', 'reg'].includes(b.type)).map(b => b.t)].sort((a, b) => a - b);
    return { m, P, side, all, N, TR, BX, BY, BZ, BO, BT, BS, BF, kicks, netT, phases, banners, comm, goals, windows, plays, active, possT, dbgShort };
  }

  /* ---------- muestreo en un instante ---------- */
  function sample(tl, r) {
    const fr = clamp(r / DT, 0, tl.N - 2.001), i = Math.floor(fr), a = fr - i, j = i + 1;
    const own = tl.BO[i], to = tl.BT[i], fl = tl.BF[i];
    let x = lerp(tl.BX[i], tl.BX[j], a), y = lerp(tl.BY[i], tl.BY[j], a), z = lerp(tl.BZ[i], tl.BZ[j], a);
    if (Math.hypot(tl.BX[j] - tl.BX[i], tl.BY[j] - tl.BY[i]) > 6) { x = tl.BX[i]; y = tl.BY[i]; z = tl.BZ[i]; }
    const K = tl.kicks; let lo = 0, hi = K.length - 1, kk = null;
    while (lo <= hi) { const mid = (lo + hi) >> 1; if (K[mid].t <= r) { kk = K[mid]; lo = mid + 1; } else hi = mid - 1; }
    const air = fl === 1 || fl === 2, kicker = kk && r - kk.t < 1 ? kk.pid : null, kt = kk ? kk.t : 0;
    const phase = tl.phases.find(p => r >= p.t0 && r < p.t1) || null;
    let g0 = 0, g1 = 0; for (const g of tl.goals) if (g.t <= r) g.s ? g1++ : g0++;
    return { r, x, y, z, own: own >= 0 ? tl.all[own].id : null, to: air && to >= 0 ? tl.all[to].id : null, side: tl.BS[i], phase, score: [g0, g1], minute: minuteAt(r), air, kicker, kt, shot: fl === 2, netHit: tl.netT.some(t => r >= t && r < t + .25) };
  }

  /* ---------- movimiento de los jugadores: lee la pista simulada y suaviza la orientación ---------- */
  function Motion(tl, prev) {
    const st = prev || {};
    function step(smp, dt, snap) {
      const r = smp.r, fr = clamp(r / DT, 0, tl.N - 2.001), i = Math.floor(fr), a = fr - i, ph = smp.phase, seen = new Set();
      for (const p of tl.all) {
        const A = tl.TR[p.i], x0 = A[i * 2]; if (x0 !== x0) continue;
        const y0 = A[i * 2 + 1]; let x1 = A[i * 2 + 2], y1 = A[i * 2 + 3]; if (x1 !== x1) { x1 = x0; y1 = y0; }
        let vx = (x1 - x0) / DT, vy = (y1 - y0) / DT, sp = Math.hypot(vx, vy);
        const tele = sp > 12 || r / DT > tl.N - 2.5; if (tele) { vx = vy = sp = 0; }
        const x = tele ? x0 : lerp(x0, x1, a), y = tele ? y0 : lerp(y0, y1, a);
        seen.add(p.id);
        let o = st[p.id]; if (!o) o = st[p.id] = { id: p.id, s: p.s, num: p.num, pos: p.pos, x, y, vx: 0, vy: 0, ph: p.h, face: p.s ? Math.PI : 0 };
        o.x = x; o.y = y; o.vx = vx; o.vy = vy; o.sp = sp; o.ph += dt * (2 + sp * 1.6);
        const faceT = sp > .6 ? Math.atan2(vy, vx) : Math.atan2(smp.y - y, smp.x - x);
        let dfa = faceT - o.face; while (dfa > Math.PI) dfa -= 6.283; while (dfa < -Math.PI) dfa += 6.283; o.face += dfa * (snap || tele ? 1 : Math.min(1, dt * 8));
        o.down = !!(ph && (ph.down === p.id || (ph.type === 'tackle' && ph.slide && p.id === ph.pid && r > ph.t1 - 1.4 && r < ph.t1 - .1)));
        o.act = ph && ph.type === 'tackle' && ph.slide && p.id === ph.pid ? 'slide' : ph && (ph.type === 'celebr' || ph.type === 'fin') && p.s === ph.s && p.pos !== 'POR' ? 'cheer' : (smp.kicker === p.id && r - smp.kt < .45 ? 'kick' : null);
      }
      for (const id in st) if (!seen.has(id)) delete st[id];
      return Object.values(st);
    }
    return { step, st };
  }

  /* ---------- colores ---------- */
  function colorDist(a, b) { const h = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16)); const x = h(a), y = h(b); return Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]); }
  function kits(H, A) {
    const h = { shirt: H.colors[0], trim: H.colors[1] }; let a = { shirt: A.colors[0], trim: A.colors[1] };
    if (colorDist(h.shirt, a.shirt) < 120) a = { shirt: A.colors[1], trim: A.colors[0] };
    if (colorDist(h.shirt, a.shirt) < 120) a = { shirt: colorDist(h.shirt, '#ffffff') > 200 ? '#f2f2f2' : '#1b1b1b', trim: colorDist(h.shirt, '#ffffff') > 200 ? '#222222' : '#ffffff' };
    // porteros: el color de la paleta más distinto de las dos camisetas (y del otro portero)
    const PAL = ['#facc15', '#22d3ee', '#a3e635', '#f97316', '#e879f9', '#f43f5e', '#111111', '#ffffff'], far = avoid => PAL.map(c => [c, Math.min(...avoid.map(x => colorDist(c, x)))]).sort((p, q) => q[1] - p[1])[0][0];
    const g0 = far([h.shirt, a.shirt, h.trim, a.trim]), gk = [g0, far([h.shirt, a.shirt, g0])];
    return [h, a].map((k, i) => ({ ...k, gk: gk[i], gkTrim: '#111111', num: colorDist(k.shirt, '#ffffff') > 230 ? '#ffffff' : '#111111' }));
  }

  /* ---------- render 2D ---------- */
  function R2D(root, tl, kit) {
    const cv = document.createElement('canvas'); cv.className = 'mv-cv'; root.appendChild(cv);
    const ctx = cv.getContext('2d'); let W = 0, H = 0, sc = 1, ox = 0, oy = 0, V = false;
    function size() {
      const dpr = Math.min(2, devicePixelRatio || 1), bw = root.clientWidth, bh = root.clientHeight; cv.width = bw * dpr; cv.height = bh * dpr; cv.style.width = bw + 'px'; cv.style.height = bh + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); W = bw; H = bh;
      V = H > W * 1.15;
      if (V) { sc = Math.min((W - 16) / (FW + 6), (H - 70) / (FL + 6)); ox = (W - FW * sc) / 2; oy = (H - FL * sc) / 2; }
      else { sc = Math.min((W - 16) / (FL + 8), (H - 70) / (FW + 8)); ox = (W - FL * sc) / 2; oy = (H - FW * sc) / 2; }
    }
    const ro = new ResizeObserver(size); ro.observe(root); size();
    const mp = (x, y) => V ? [ox + y * sc, oy + (FL - x) * sc] : [ox + x * sc, oy + y * sc];
    function rect(x0, y0, w, h, fill) { const a = mp(x0, y0), b = mp(x0 + w, y0 + h), x = Math.min(a[0], b[0]), y = Math.min(a[1], b[1]), rw = Math.abs(a[0] - b[0]), rh = Math.abs(a[1] - b[1]); fill ? ctx.fillRect(x, y, rw + (fill === 2 ? 1 : 0), rh + (fill === 2 ? 1 : 0)) : ctx.strokeRect(x, y, rw, rh); }
    function arc(x, y, r, a0, a1, fill) { const c = mp(x, y), off = V ? -Math.PI / 2 : 0; ctx.beginPath(); ctx.arc(c[0], c[1], r * sc, a0 + off, a1 + off); fill ? ctx.fill() : ctx.stroke(); }
    function pitch() {
      const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0d3b22'); g.addColorStop(1, '#0a2a19'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 14; i++) { ctx.fillStyle = i % 2 ? '#2f8f45' : '#28883f'; rect(i * FL / 14, 0, FL / 14, FW, 2); }
      ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = Math.max(1, sc * .15);
      rect(0, 0, FL, FW); const m1 = mp(52.5, 0), m2 = mp(52.5, FW); ctx.beginPath(); ctx.moveTo(m1[0], m1[1]); ctx.lineTo(m2[0], m2[1]); ctx.stroke();
      arc(52.5, 34, 9.15, 0, 6.283);
      for (const e of [0, 1]) {
        rect(e ? FL - 16.5 : 0, 13.85, 16.5, 40.3); rect(e ? FL - 5.5 : 0, 24.85, 5.5, 18.3);
        arc(e ? FL - 11 : 11, 34, 9.15, e ? Math.PI * .7 : -Math.PI * .3, e ? Math.PI * 1.3 : Math.PI * .3);
        ctx.fillStyle = 'rgba(255,255,255,.9)'; rect(e ? FL : -1.6, 30.34, 1.6, 7.32, 1);
      }
      ctx.fillStyle = '#fff'; arc(52.5, 34, .35, 0, 6.283, 1);
    }
    const trail = [], parts = [];
    function draw(smp, pls, fx) {
      fx = fx || { sx: 0, sy: 0 };
      ctx.save(); ctx.translate(fx.sx * 9, fx.sy * 7);
      pitch();
      const rad = Math.max(8, sc * 1.6);
      // estela del balón en tiros y pases largos
      trail.push({ x: smp.x, y: smp.y, s: smp.shot || smp.z > 1 }); if (trail.length > 14) trail.shift();
      for (let i = 1; i < trail.length; i++) { if (!trail[i].s) continue; const a = mp(trail[i - 1].x, trail[i - 1].y), b = mp(trail[i].x, trail[i].y); ctx.strokeStyle = `rgba(255,214,0,${i / trail.length * .8})`; ctx.lineWidth = Math.max(2, sc * .5) * i / trail.length; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); }
      if (smp.air && smp.to) { const rec = pls.find(p => p.id === smp.to); if (rec) { const a = mp(smp.x, smp.y), b = mp(rec.x, rec.y); ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); ctx.setLineDash([]); } }
      for (const p of pls) {
        const k = kit[p.s], gk = p.pos === 'POR', [x, y] = mp(p.x, p.y);
        ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(x + 1.5, y + 2, rad, rad * .8, 0, 0, 6.283); ctx.fill();
        if (smp.own === p.id) { ctx.strokeStyle = '#ffd400'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, y, rad + 4, 0, 6.283); ctx.stroke(); }
        ctx.fillStyle = gk ? k.gk : k.shirt; ctx.strokeStyle = gk ? k.gkTrim : k.trim; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.arc(x, y, p.down ? rad * .8 : rad, 0, 6.283); ctx.fill(); ctx.stroke();
        ctx.fillStyle = gk ? '#111' : k.trim; ctx.font = `800 ${Math.round(rad * 1.05)}px "Barlow Condensed","Arial Narrow",sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(p.num, x, y + .5);
      }
      const own = pls.find(p => p.id === smp.own);
      if (own) { const nm = E.player(own.id).name, [x0, y0] = mp(own.x, own.y), y = y0 - rad - 12; ctx.font = '700 12px Barlow,sans-serif'; const w = ctx.measureText(nm).width + 12; const x = clamp(x0, w / 2 + 2, W - w / 2 - 2); ctx.fillStyle = 'rgba(6,12,28,.85)'; ctx.fillRect(x - w / 2, y - 9, w, 18); ctx.fillStyle = '#ffd400'; ctx.fillRect(x - w / 2, y - 9, 3, 18); ctx.fillStyle = '#fff'; ctx.fillText(nm, x + 1, y); }
      const [bx, by] = mp(smp.x, smp.y), lift = smp.z * sc * .9, br = Math.max(4, sc * .55) * (1 + smp.z * .08);
      ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.ellipse(bx + 1, by + 1.5, br, br * .7, 0, 0, 6.283); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#111'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(bx, by - lift, br, 0, 6.283); ctx.fill(); ctx.stroke();
      // confeti de gol
      if (fx.burst) { const [px0, py0] = mp(fx.burst.x, fx.burst.y); for (let i = 0; i < 70; i++) { const a = Math.random() * 6.283, v = 60 + Math.random() * 220; parts.push({ x: px0, y: py0, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 80, life: 1.4 + Math.random(), c: fx.burst.colors[i % fx.burst.colors.length] }); } }
      const now = performance.now(), pdt = Math.min(.05, (now - (draw.t || now)) / 1000); draw.t = now;
      for (let i = parts.length - 1; i >= 0; i--) { const p = parts[i]; p.life -= pdt; if (p.life <= 0) { parts.splice(i, 1); continue; } p.vy += 260 * pdt; p.x += p.vx * pdt; p.y += p.vy * pdt; ctx.globalAlpha = Math.min(1, p.life); ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, 5, 3); }
      ctx.globalAlpha = 1; ctx.restore();
    }
    return { draw, destroy() { ro.disconnect(); cv.remove(); } };
  }

  /* ---------- render 3D (Three.js) ---------- */
  // Skills aplicadas: threejs-scene-setup (pixel ratio, delta acotado, resize), threejs-materials-lighting
  // (tone mapping, sombras con cámara ajustada al campo, sRGB), performance-optimization (instancing,
  // precompilado, calidad adaptativa, liberar GPU) y camera-systems (suavizado exponencial, look-ahead).
  let threeP = null;
  function loadThree() { if (window.THREE) return Promise.resolve(); if (threeP) return threeP; threeP = new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'; s.onload = res; s.onerror = () => { threeP = null; rej(new Error('three')); }; document.head.appendChild(s); }); return threeP; }
  function canvasTex(w, h, fn) { const c = document.createElement('canvas'); c.width = w; c.height = h; fn(c.getContext('2d'), w, h); return c; }
  function loadImg(src) { return new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; }); }
  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  async function loadRig(T, mf) {
    const lib = (f, cdn) => loadScript('lib/' + f).catch(() => loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/' + cdn + f));
    if (!T.GLTFLoader) await lib('GLTFLoader.js', 'loaders/');
    if (!T.SkeletonUtils) await lib('SkeletonUtils.js', 'utils/');
    // el alojamiento bloquea fetch() a data:/otros hosts: forzamos TextureLoader (usa <img>, que sí está permitido)
    const loader = new T.GLTFLoader(), cache = {};
    loader.register(parser => { parser.textureLoader = new T.TextureLoader(parser.options.manager); return { name: 'tl_img' }; });
    const load = url => cache[url] || (cache[url] = new Promise((res, rej) => loader.load(url, res, undefined, rej)));
    const base = await load(mf.base);
    // altura real: muestrea vértices ya deformados por el esqueleto (el Box3 estático falla con armaduras escaladas)
    const sc = base.scene; sc.updateMatrixWorld(true); let mn = 1e9, mx = -1e9; const v = new T.Vector3();
    sc.traverse(o => { if (!o.isSkinnedMesh) return; const p = o.geometry.attributes.position; for (let i = 0; i < p.count; i += 5) { v.fromBufferAttribute(p, i); o.boneTransform(i, v); v.applyMatrix4(o.matrixWorld); if (v.y < mn) mn = v.y; if (v.y > mx) mx = v.y; } });
    if (!(mx > mn)) { const box = new T.Box3().setFromObject(sc); mn = box.min.y; mx = box.max.y; }
    const h = mx - mn || 1;
    const clips = {};
    for (const key in mf.clips) {
      try { const [url, name] = [].concat(mf.clips[key]); const g = await load(url); const c = name ? T.AnimationClip.findByName(g.animations, name) : g.animations[0]; if (c) clips[key] = c; } catch (e) { console.warn('clip', key, e); }
    }
    if (!clips.run && !clips.idle) throw new Error('sin animaciones');
    return { scene: base.scene, clips, scale: (mf.height || 1.85) * 1.25 / h, yaw: mf.yaw != null ? mf.yaw : Math.PI / 2, tint: mf.tint !== false, kit: !!mf.kit, sock: mf.sock || null };
  }
  const coarse = () => { try { return matchMedia('(pointer: coarse)').matches; } catch (e) { return false; } };
  async function R3D(root, tl, kit, meta) {
    await loadThree();
    const T = window.THREE;
    const [grass, crowd] = await Promise.all([loadImg('img/cesped.jpg'), loadImg('img/grada.webp')]);
    let rig = null;
    try { const mf = await fetch('img/jugador/manifest.json').then(r => r.ok ? r.json() : null); if (mf) rig = await loadRig(T, mf); } catch (e) { console.warn('rig', e); rig = null; }
    let useRig = !!rig; try { if (localStorage.getItem('mv-rig') === '0') useRig = false; } catch (e) {}
    const ren = new T.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    const prMax = coarse() ? 1.5 : 1.75; let pr = Math.min(prMax, devicePixelRatio || 1);
    ren.setPixelRatio(pr); ren.outputEncoding = T.sRGBEncoding; ren.toneMapping = T.ACESFilmicToneMapping; ren.toneMappingExposure = 1.15;
    let hd = !coarse(); ren.shadowMap.enabled = hd; ren.shadowMap.type = T.PCFSoftShadowMap;
    const cv = ren.domElement; cv.className = 'mv-cv'; root.appendChild(cv);
    const scene = new T.Scene(); scene.background = new T.Color(0x070d1c); scene.fog = new T.Fog(0x070d1c, 150, 320);
    const cam = new T.PerspectiveCamera(34, 1, .5, 700);
    scene.add(new T.HemisphereLight(0xdde8ff, 0x1d3320, .9));
    const sun = new T.DirectionalLight(0xffffff, .85); sun.position.set(-30, 90, 40); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048); const sc = sun.shadow.camera; sc.near = 20; sc.far = 200; sc.left = -62; sc.right = 62; sc.top = 44; sc.bottom = -44; sun.shadow.bias = -.0006;
    scene.add(sun); scene.add(sun.target);
    const W3 = (x, y) => [x - FL / 2, y - FW / 2];
    // césped con líneas
    const pc = canvasTex(1680, 1088, (c, w, h) => {
      const s = w / 120; const offx = 7.5 * s, offy = (h - FW * s) / 2;
      if (grass) { const pat = c.createPattern(grass, 'repeat'); c.save(); c.scale(.55, .55); c.fillStyle = pat; c.fillRect(0, 0, w / .55, h / .55); c.restore(); } else { c.fillStyle = '#2f8d42'; c.fillRect(0, 0, w, h); }
      for (let i = 0; i < 16; i++) { c.fillStyle = i % 2 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.07)'; c.fillRect(i * w / 16, 0, w / 16, h); }
      c.strokeStyle = 'rgba(255,255,255,.92)'; c.lineWidth = .14 * s;
      const L = (x0, y0, x1, y1) => { c.beginPath(); c.moveTo(offx + x0 * s, offy + y0 * s); c.lineTo(offx + x1 * s, offy + y1 * s); c.stroke(); };
      c.strokeRect(offx, offy, FL * s, FW * s); L(52.5, 0, 52.5, FW);
      c.beginPath(); c.arc(offx + 52.5 * s, offy + 34 * s, 9.15 * s, 0, 6.283); c.stroke();
      for (const e of [0, 1]) { const x0 = e ? FL - 16.5 : 0, x1 = e ? FL - 5.5 : 0; c.strokeRect(offx + x0 * s, offy + 13.85 * s, 16.5 * s, 40.3 * s); c.strokeRect(offx + x1 * s, offy + 24.85 * s, 5.5 * s, 18.3 * s); c.beginPath(); c.arc(offx + (e ? FL - 11 : 11) * s, offy + 34 * s, 9.15 * s, e ? Math.PI * .7 : -Math.PI * .3, e ? Math.PI * 1.3 : Math.PI * .3); c.stroke(); c.fillStyle = '#fff'; c.beginPath(); c.arc(offx + (e ? FL - 11 : 11) * s, offy + 34 * s, .25 * s, 0, 6.283); c.fill(); }
    });
    const pTex = new T.CanvasTexture(pc); pTex.anisotropy = ren.capabilities.getMaxAnisotropy(); pTex.encoding = T.sRGBEncoding;
    const ground = new T.Mesh(new T.PlaneGeometry(120, 120 * 1088 / 1680), new T.MeshLambertMaterial({ map: pTex }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
    const apron = new T.Mesh(new T.PlaneGeometry(200, 160), new T.MeshLambertMaterial({ color: 0x1e5a2d })); apron.rotation.x = -Math.PI / 2; apron.position.y = -.05; apron.receiveShadow = true; scene.add(apron);
    // porterías
    const postM = new T.MeshLambertMaterial({ color: 0xffffff });
    const netTex = new T.CanvasTexture(canvasTex(128, 128, (c, w, h) => { c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = 2; for (let i = 0; i <= 8; i++) { c.beginPath(); c.moveTo(i * w / 8, 0); c.lineTo(i * w / 8, h); c.stroke(); c.beginPath(); c.moveTo(0, i * h / 8); c.lineTo(w, i * h / 8); c.stroke(); } }));
    netTex.wrapS = netTex.wrapT = T.RepeatWrapping; netTex.repeat.set(4, 2);
    const netM = new T.MeshBasicMaterial({ map: netTex, transparent: true, side: T.DoubleSide, depthWrite: false });
    const backNets = [];
    for (const e of [-1, 1]) {
      const gx = e * FL / 2, g = new T.Group();
      for (const z of [-3.66, 3.66]) { const post = new T.Mesh(new T.CylinderGeometry(.07, .07, 2.44, 8), postM); post.position.set(gx, 1.22, z); post.castShadow = true; g.add(post); }
      const bar = new T.Mesh(new T.CylinderGeometry(.07, .07, 7.32, 8), postM); bar.rotation.x = Math.PI / 2; bar.position.set(gx, 2.44, 0); bar.castShadow = true; g.add(bar);
      const back = new T.Mesh(new T.PlaneGeometry(7.32, 2.44), netM); back.rotation.y = Math.PI / 2; back.position.set(gx + e * 2, 1.22, 0); g.add(back); backNets.push({ m: back, e, x0: gx + e * 2, push: 0 });
      const top = new T.Mesh(new T.PlaneGeometry(2, 7.32), netM); top.rotation.x = Math.PI / 2; top.rotation.z = Math.PI / 2; top.position.set(gx + e * 1, 2.44, 0); g.add(top);
      for (const z of [-3.66, 3.66]) { const sideN = new T.Mesh(new T.PlaneGeometry(2, 2.44), netM); sideN.position.set(gx + e * 1, 1.22, z); g.add(sideN); }
      scene.add(g);
    }
    // gradas y vallas
    const adC = canvasTex(2048, 64, (c, w, h) => { const cols = ['#0a2a6b', '#b3121b', '#0f5132', '#5b21b6'], txt = (meta.league || 'LIGA DE AMIGOS').toUpperCase(); for (let i = 0; i < 4; i++) { c.fillStyle = cols[i]; c.fillRect(i * w / 4, 0, w / 4, h); c.fillStyle = '#fff'; let fs = 36; c.font = `700 ${fs}px Barlow Condensed, Arial Narrow, sans-serif`; while (c.measureText(txt).width > w / 4 - 30 && fs > 14) { fs -= 2; c.font = `700 ${fs}px Barlow Condensed, Arial Narrow, sans-serif`; } c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(txt, i * w / 4 + w / 8, h / 2 + 2); } });
    const adTex = new T.CanvasTexture(adC); adTex.wrapS = T.RepeatWrapping; adTex.repeat.set(1.5, 1); adTex.encoding = T.sRGBEncoding;
    let crowdTex = null;
    // la grada se llena según la gente que vino de verdad: los asientos vacíos se pintan de gris
    const fill = clamp(meta.fill == null ? .9 : meta.fill, .05, 1);
    let crowdSrc = crowd;
    if (crowd && fill < .97) {
      const cw = crowd.naturalWidth || crowd.width, chh = crowd.naturalHeight || crowd.height, cc = document.createElement('canvas'); cc.width = cw; cc.height = chh;
      const cx = cc.getContext('2d'); cx.drawImage(crowd, 0, 0);
      const R2 = E.rng('grada' + Math.round(fill * 100)), cs = Math.max(6, Math.round(cw / 64)), rh = Math.max(6, Math.round(chh / 18));
      for (let y = 0; y < chh; y += rh) for (let x = 0; x < cw; x += cs) {
        const near = R2() < .5 ? 1 : 0;
        if (R2() > fill * (.8 + .4 * near)) { cx.fillStyle = (x / cs + y / rh) % 2 ? '#34413a' : '#2c3832'; cx.fillRect(x, y, cs, rh - 1); cx.fillStyle = '#3d4b43'; cx.fillRect(x + 1, y + 1, cs - 2, 2); }
      }
      crowdSrc = cc;
    }
    if (crowdSrc) { crowdTex = new T.Texture(crowdSrc); crowdTex.needsUpdate = true; crowdTex.wrapS = crowdTex.wrapT = T.RepeatWrapping; crowdTex.encoding = T.sRGBEncoding; }
    const standM = [];
    // el estadio 3D crece con el del equipo local: de una grada de tubo a tres anillos
    const SL = clamp(meta.stad == null ? 3 : meta.stad, 0, 5);
    function stand(len, rot, dist, h, roofOn, tube) {
      const g = new T.Group();
      const tex = crowdTex ? crowdTex.clone() : null; if (tex) { tex.needsUpdate = true; tex.repeat.set(len / 45, 1.2 * h); }
      const mat = new T.MeshLambertMaterial({ map: tex, color: tex ? 0xc2cbc4 : 0x334433 }); standM.push(mat);
      const m1 = new T.Mesh(new T.PlaneGeometry(len, 34 * h), mat); m1.position.set(0, 13 * h, -dist - 13 * h); m1.rotation.x = -Math.PI / 2 + .62; g.add(m1);
      const board = new T.Mesh(new T.BoxGeometry(len - 8, 1, .3), new T.MeshBasicMaterial({ map: adTex, toneMapped: false })); board.position.set(0, .5, -dist + 3); g.add(board);
      if (tube) { const tm = new T.MeshLambertMaterial({ color: 0x8a9196 }); for (let x = -len / 2; x <= len / 2; x += 6) { const p = new T.Mesh(new T.BoxGeometry(.25, 26 * h, .25), tm); p.position.set(x, 13 * h * .55, -dist - 13 * h * 1.4); g.add(p); } }
      if (roofOn) { const roof = new T.Mesh(new T.BoxGeometry(len + 10, 1.2, 22 * h), new T.MeshLambertMaterial({ color: 0x1a221d })); roof.position.set(0, 31 * h, -dist - 22 * h); roof.rotation.x = -.12; g.add(roof); }
      g.rotation.y = rot; scene.add(g);
    }
    function fence(len, rot, dist) { const g = new T.Group(), fm = new T.MeshLambertMaterial({ color: 0x3b4a40 }); const w = new T.Mesh(new T.BoxGeometry(len, 2.2, .15), new T.MeshLambertMaterial({ color: 0x55636a, transparent: true, opacity: .55 })); w.position.set(0, 1.1, -dist - 1); g.add(w); for (let x = -len / 2; x <= len / 2; x += 5) { const p = new T.Mesh(new T.BoxGeometry(.12, 2.4, .12), fm); p.position.set(x, 1.2, -dist - 1); g.add(p); } g.rotation.y = rot; scene.add(g); }
    const SIDE = FW / 2 + 9, END = FL / 2 + 9;
    if (SL === 0) { stand(55, 0, SIDE, .32, false, true); fence(140, Math.PI, SIDE - 4); fence(95, Math.PI / 2, END - 4); fence(95, -Math.PI / 2, END - 4); }
    else if (SL === 1) { stand(90, 0, SIDE, .45, true); stand(90, Math.PI, SIDE, .45, true); fence(95, Math.PI / 2, END - 4); fence(95, -Math.PI / 2, END - 4); }
    else if (SL === 2) { stand(120, 0, SIDE, .6, true); stand(120, Math.PI, SIDE, .6, true); stand(70, Math.PI / 2, END, .45, false); stand(70, -Math.PI / 2, END, .45, false); }
    else if (SL === 3) { stand(140, 0, SIDE, .8, true); stand(140, Math.PI, SIDE, .8, false); stand(95, Math.PI / 2, END, .7, false); stand(95, -Math.PI / 2, END, .7, false); }
    else { const h = SL === 5 ? 1.25 : 1; stand(140, 0, SIDE, h, true); stand(140, Math.PI, SIDE, h, true); stand(95, Math.PI / 2, END, h, true); stand(95, -Math.PI / 2, END, h, true); }
    // focos
    const glow = new T.CanvasTexture(canvasTex(128, 128, (c, w) => { const g = c.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.25, 'rgba(220,235,255,.7)'); g.addColorStop(1, 'rgba(160,200,255,0)'); c.fillStyle = g; c.fillRect(0, 0, w, w); }));
    const PH = SL < 2 ? 22 : 48, poleG = new T.CylinderGeometry(.5, .8, PH, 8), poleM = new T.MeshLambertMaterial({ color: 0x2a3348 }), panelG = new T.BoxGeometry(9, 5, 1), panelM = new T.MeshBasicMaterial({ color: 0xf4f8ff, toneMapped: false });
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const pole = new T.Mesh(poleG, poleM); pole.position.set(sx * 68, PH / 2, sz * 52); scene.add(pole);
      const panel = new T.Mesh(panelG, panelM); panel.position.set(sx * 68, PH + 1, sz * 52); panel.lookAt(0, 0, 0); scene.add(panel);
      const spr = new T.Sprite(new T.SpriteMaterial({ map: glow, transparent: true, depthWrite: false, blending: T.AdditiveBlending, toneMapped: false })); spr.scale.set(34, 34, 1); spr.position.copy(panel.position); scene.add(spr);
    }
    // jugadores: un "esqueleto" invisible por jugador y una InstancedMesh por pieza (pocas llamadas de dibujo)
    const MAXP = 36, skins = ['#f1c27d', '#e0ac69', '#c68642', '#8d5524', '#ffdbac', '#6b4423'];
    const white = () => new T.MeshLambertMaterial({ color: 0xffffff });
    const mkIM = (geo, n, shadow) => { const im = new T.InstancedMesh(geo, white(), n); im.instanceMatrix.setUsage(T.DynamicDrawUsage); im.castShadow = !!shadow; im.frustumCulled = false; const c = new T.Color(1, 1, 1); for (let i = 0; i < n; i++) { im.setColorAt(i, c); im.setMatrixAt(i, ZERO); } im.instanceColor.needsUpdate = true; scene.add(im); return im; };
    const ZERO = new T.Matrix4().makeScale(0, 0, 0);
    const IM = {
      torso: mkIM(new T.CylinderGeometry(.27, .22, .72, 10), MAXP, 1), shorts: mkIM(new T.CylinderGeometry(.24, .26, .28, 10), MAXP, 1),
      leg: mkIM(new T.BoxGeometry(.13, .78, .13), MAXP * 2, 1), arm: mkIM(new T.BoxGeometry(.1, .6, .1), MAXP * 2, 1),
      head: mkIM(new T.SphereGeometry(.16, 12, 10), MAXP, 1), hair: mkIM(new T.SphereGeometry(.165, 12, 8, 0, 6.283, 0, 1.4), MAXP, 0)
    };
    const blobM = new T.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .32, depthWrite: false });
    const blob = new T.InstancedMesh(new T.CircleGeometry(.5, 16), blobM, MAXP + 1); blob.frustumCulled = false; for (let i = 0; i <= MAXP; i++) blob.setMatrixAt(i, ZERO); scene.add(blob);
    const numCache = {};
    function numTex(n, fg, bg) { const k = n + fg + bg; if (numCache[k]) return numCache[k]; const t = new T.CanvasTexture(canvasTex(64, 64, (c) => { c.fillStyle = bg; c.fillRect(0, 0, 64, 64); c.fillStyle = fg; c.font = '800 44px Barlow Condensed, Arial Narrow, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(n, 32, 35); })); t.encoding = T.sRGBEncoding; return numCache[k] = t; }
    const numGeo = new T.PlaneGeometry(.3, .3);
    const men = {}, free = [...Array(MAXP).keys()].reverse(), col = new T.Color();
    function makeMan(o) {
      const slot = free.pop(); if (slot == null) return null;
      const k = kit[o.s], gk = o.pos === 'POR', shirt = gk ? k.gk : k.shirt, trim = gk ? k.gkTrim : k.trim;
      const g = new T.Object3D(), body = new T.Object3D(); g.add(body); g.scale.set(1.35, 1.35, 1.35);
      const node = (parent, x, y, z) => { const n = new T.Object3D(); n.position.set(x, y, z); parent.add(n); return n; };
      const torso = node(body, 0, 1.18, 0), shorts = node(body, 0, .76, 0), head = node(body, 0, 1.73, 0), hair = node(body, 0, 1.75, 0), num = node(body, -.245, 1.22, 0); num.rotation.y = -Math.PI / 2;
      const legs = [-.1, .1].map(z => { const p = node(body, 0, .72, z); return { p, m: node(p, 0, -.38, 0) }; });
      const arms = [-.32, .32].map(z => { const p = node(body, 0, 1.48, z); return { p, m: node(p, 0, -.28, 0) }; });
      const sh = node(g, 0, .02, 0); sh.rotation.x = -Math.PI / 2;
      IM.torso.setColorAt(slot, col.set(shirt)); IM.shorts.setColorAt(slot, col.set(trim)); IM.head.setColorAt(slot, col.set(skins[(E.hash(o.id) >>> 3) % skins.length])); IM.hair.setColorAt(slot, col.set('#1d140c'));
      for (const i of [0, 1]) { IM.leg.setColorAt(slot * 2 + i, col.set(shirt === '#ffffff' ? '#ffffff' : trim)); IM.arm.setColorAt(slot * 2 + i, col.set(shirt)); }
      for (const k2 in IM) IM[k2].instanceColor.needsUpdate = true;
      const nm = new T.Mesh(numGeo, new T.MeshBasicMaterial({ map: numTex(o.num, trim, shirt) })); nm.matrixAutoUpdate = false; scene.add(nm);
      return { slot, g, body, torso, shorts, head, hair, num, legs, arms, sh, nm };
    }
    function dropMan(id) { const mm = men[id]; if (!mm) return; for (const k2 of ['torso', 'shorts', 'head', 'hair']) IM[k2].setMatrixAt(mm.slot, ZERO); for (const i of [0, 1]) { IM.leg.setMatrixAt(mm.slot * 2 + i, ZERO); IM.arm.setMatrixAt(mm.slot * 2 + i, ZERO); } blob.setMatrixAt(mm.slot, ZERO); scene.remove(mm.nm); mm.nm.material.dispose(); free.push(mm.slot); delete men[id]; }
    // muñecos animados (GLB con esqueleto): un clon por jugador y transición suave entre animaciones
    const rmen = {}, V3 = new T.Vector3(), kitMats = {};
    try { window.__rmen = rmen; } catch (e) {}
    function kitMat(src, color, key) {
      const k = key + src.uuid; if (kitMats[k]) return kitMats[k];
      const m = src.clone(); const c = new T.Color(color).convertSRGBToLinear();
      if (rig.tint) { m.onBeforeCompile = sh => { sh.uniforms.kitColor = { value: c }; sh.fragmentShader = 'uniform vec3 kitColor;\n' + sh.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\nfloat kl = dot(diffuseColor.rgb, vec3(.299,.587,.114)); float ks = max(max(diffuseColor.r,diffuseColor.g),diffuseColor.b) - min(min(diffuseColor.r,diffuseColor.g),diffuseColor.b); float kk = smoothstep(.5,.72,kl) * (1.0 - smoothstep(.07,.18,ks)); diffuseColor.rgb = mix(diffuseColor.rgb, kitColor * (.3 + .72 * kl), kk);'); }; m.customProgramCacheKey = () => 'kit' + color; }
      return kitMats[k] = m;
    }
    // modelo por piezas (camiseta, pantalón, medias, botas): cada pieza toma el color de la equipación
    const HAIRS = ['#1d140c', '#3b2414', '#0d0d0d', '#6b4a2b', '#2a1a10'];
    function partMat(src, o) {
      const k = kit[o.s], gk = o.pos === 'POR', shirt = gk ? k.gk : k.shirt, trim = gk ? k.gkTrim : k.trim, h = E.hash(o.id) >>> 3, skin = skins[h % skins.length], hair = HAIRS[(h >>> 4) % HAIRS.length];
      const n = src.name, col = { kit_shirt: shirt, kit_shorts: trim, kit_trim: shirt, boots: '#141414', sole: '#e9e9e9', skin, skin_dark: skin, leg_skin: skin, hair }[n];
      if (!col) return src;
      const key = n + '|' + col + (n === 'leg_skin' ? '|' + shirt : ''); if (kitMats[key]) return kitMats[key];
      const m = src.clone(); m.color = new T.Color(col).convertSRGBToLinear(); if (n === 'skin_dark') m.color.multiplyScalar(.82);
      if (n === 'leg_skin' && rig.sock) {
        // medias: la parte baja de la pierna (en la postura de reposo) se pinta del color de la camiseta
        const sc = new T.Color(shirt).convertSRGBToLinear(), top = rig.sock;
        m.onBeforeCompile = sh => {
          sh.uniforms.sockC = { value: sc }; sh.uniforms.sockTop = { value: top };
          sh.vertexShader = 'varying float vRestY;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvRestY = position.y;');
          sh.fragmentShader = 'uniform vec3 sockC; uniform float sockTop; varying float vRestY;\n' + sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\nif (vRestY < sockTop) diffuseColor.rgb = sockC;');
        };
        m.customProgramCacheKey = () => 'sock' + top;
      }
      return kitMats[key] = m;
    }
    function makeRigMan(o) {
      const k = kit[o.s], color = o.pos === 'POR' ? k.gk : k.shirt;
      const g = T.SkeletonUtils.clone(rig.scene); g.scale.setScalar(rig.scale);
      g.traverse(x => { if (x.isMesh) { x.castShadow = true; x.frustumCulled = false; x.material = rig.kit ? (Array.isArray(x.material) ? x.material.map(mm => partMat(mm, o)) : partMat(x.material, o)) : Array.isArray(x.material) ? x.material.map(mm => kitMat(mm, color, o.s + o.pos)) : kitMat(x.material, color, o.s + (o.pos === 'POR' ? 'g' : 'p')); } });
      const mixer = new T.AnimationMixer(g), acts = {};
      for (const name in rig.clips) { const a = mixer.clipAction(rig.clips[name]); if (['kick', 'slide', 'fall'].includes(name)) { a.setLoop(T.LoopOnce, 1); a.clampWhenFinished = true; } acts[name] = a; }
      const first = acts.idle || acts.run; if (first) first.play();
      // pies: altura del tobillo en reposo para pegarlos al césped en cada fotograma
      const feet = ['LeftFoot', 'RightFoot', 'LeftToeBase', 'RightToeBase', 'FootL', 'FootR', 'PTL', 'PTR'].map(n => g.getObjectByName(n)).filter(Boolean);
      scene.add(g); g.updateMatrixWorld(true);
      let rest = 0; if (feet.length) { rest = 1e9; for (const f of feet) { V3.setFromMatrixPosition(f.matrixWorld); rest = Math.min(rest, V3.y); } rest = clamp(rest, 0, .3); }
      return { g, mixer, acts, feet, rest, lift: 0, cur: first ? (acts.idle ? 'idle' : 'run') : null };
    }
    function drawRig(pls, dt) {
      const seen = new Set();
      for (const o of pls) {
        seen.add(o.id); let mm = rmen[o.id]; if (!mm) mm = rmen[o.id] = makeRigMan(o);
        const [wx, wz] = W3(o.x, o.y); mm.g.position.set(wx, 0, wz); mm.g.rotation.set(o.down && !mm.acts.slide && !mm.acts.fall ? -Math.PI / 2 * .9 : 0, -o.face + rig.yaw, 0);
        let want = o.down && mm.acts.fall ? 'fall' : o.act === 'slide' && mm.acts.slide ? 'slide' : o.act === 'kick' && mm.acts.kick ? 'kick' : o.act === 'cheer' && mm.acts.cheer ? 'cheer' : o.sp > 1.2 || !mm.acts.idle ? 'run' : 'idle';
        if (!mm.acts[want]) want = mm.acts.run ? 'run' : mm.cur;
        if (want && want !== mm.cur) { const nx = mm.acts[want], pv = mm.acts[mm.cur]; nx.reset().fadeIn(.18).play(); if (pv) pv.fadeOut(.18); mm.cur = want; }
        if (mm.cur === 'run' && mm.acts.run) mm.acts.run.timeScale = clamp(o.sp / 6.5, .55, 1.6);
        mm.mixer.update(dt);
        if (mm.feet.length && !o.down) {
          mm.g.position.y = 0; mm.g.updateMatrixWorld(true); let lo = 1e9;
          for (const f of mm.feet) { V3.setFromMatrixPosition(f.matrixWorld); if (V3.y < lo) lo = V3.y; }
          const want2 = clamp(mm.rest - lo, -.05, .45); mm.lift += (want2 - mm.lift) * Math.min(1, dt * 18); mm.g.position.y = mm.lift;
        }
      }
      for (const id in rmen) if (!seen.has(id)) { scene.remove(rmen[id].g); delete rmen[id]; }
    }
    // balón
    const ballTex = new T.CanvasTexture(canvasTex(128, 64, (c, w, h) => { c.fillStyle = '#fff'; c.fillRect(0, 0, w, h); c.fillStyle = '#111'; for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) { c.beginPath(); c.arc((i + (j % 2) * .5) * w / 6 + 8, j * h / 3 + 10, 6, 0, 6.283); c.fill(); } }));
    const ball = new T.Mesh(new T.SphereGeometry(.22, 16, 12), new T.MeshLambertMaterial({ map: ballTex })); ball.castShadow = true; scene.add(ball);
    // confeti de gol
    const NC = 220, cGeo = new T.BufferGeometry(), cPos = new Float32Array(NC * 3), cCol = new Float32Array(NC * 3), cVel = new Float32Array(NC * 3);
    cGeo.setAttribute('position', new T.BufferAttribute(cPos, 3)); cGeo.setAttribute('color', new T.BufferAttribute(cCol, 3));
    const confetti = new T.Points(cGeo, new T.PointsMaterial({ size: .45, vertexColors: true, transparent: true, depthWrite: false })); confetti.visible = false; confetti.frustumCulled = false; scene.add(confetti);
    let confT = 0;
    function burst(x, y, colors) {
      const [wx, wz] = W3(x, y);
      for (let i = 0; i < NC; i++) { cPos[i * 3] = wx + (Math.random() - .5) * 6; cPos[i * 3 + 1] = 6 + Math.random() * 6; cPos[i * 3 + 2] = wz + (Math.random() - .5) * 10; cVel[i * 3] = (Math.random() - .5) * 6; cVel[i * 3 + 1] = Math.random() * 6; cVel[i * 3 + 2] = (Math.random() - .5) * 6; col.set(colors[i % colors.length]); cCol[i * 3] = col.r; cCol[i * 3 + 1] = col.g; cCol[i * 3 + 2] = col.b; }
      cGeo.attributes.position.needsUpdate = true; cGeo.attributes.color.needsUpdate = true; confetti.visible = true; confT = 3.2;
    }
    // etiqueta del poseedor
    const tagC = document.createElement('canvas'); tagC.width = 512; tagC.height = 96; const tagT = new T.CanvasTexture(tagC);
    const tag = new T.Sprite(new T.SpriteMaterial({ map: tagT, depthTest: false, transparent: true, toneMapped: false })); tag.scale.set(9, 1.7, 1); tag.renderOrder = 10; scene.add(tag); let tagFor = null;
    function setTag(id) { if (tagFor === id) return; tagFor = id; const c = tagC.getContext('2d'); c.clearRect(0, 0, 512, 96); tag.visible = !!id; if (!id) return; const nm = E.player(id).name; c.font = '700 46px Barlow, Arial, sans-serif'; const w = c.measureText(nm).width + 40; c.fillStyle = 'rgba(6,12,28,.85)'; c.fillRect(256 - w / 2, 14, w, 66); c.fillStyle = '#ffd400'; c.fillRect(256 - w / 2, 14, 8, 66); c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(nm, 260, 49); tagT.needsUpdate = true; }
    // cámara: suavizado exponencial independiente de los FPS, look-ahead y arrastre con límites
    let camMode = 'tv', yaw = 0, tilt = 0, drag = null;
    const camPos = new T.Vector3(0, 30, 70), camLook = new T.Vector3(), tp = new T.Vector3(), tlk = new T.Vector3(), lead = new T.Vector3();
    cv.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, yaw, tilt }; cv.setPointerCapture(e.pointerId); });
    cv.addEventListener('pointermove', e => { if (!drag) return; yaw = clamp(drag.yaw + (e.clientX - drag.x) * .006, -1.2, 1.2); tilt = clamp(drag.tilt - (e.clientY - drag.y) * .05, -10, 22); });
    cv.addEventListener('pointerup', () => { drag = null; }); cv.addEventListener('dblclick', () => { yaw = 0; tilt = 0; });
    function size() { const w = root.clientWidth, h = root.clientHeight; ren.setSize(w, h, false); cv.style.width = w + 'px'; cv.style.height = h + 'px'; cam.aspect = w / h; cam.fov = w / h < 1.1 ? 48 : 34; cam.updateProjectionMatrix(); }
    const ro = new ResizeObserver(size); ro.observe(root); size();
    function setHD(on) { hd = on; ren.shadowMap.enabled = on; blob.visible = !on; scene.traverse(o => { if (o.material) o.material.needsUpdate = true; }); }
    setHD(hd);
    // precompilar shaders para que el primer fotograma no dé tirón
    cam.position.set(0, 30, 60); cam.lookAt(0, 0, 0); ren.compile(scene, cam);
    let ftAvg = 16, ftN = 0;
    const m4 = new T.Matrix4();
    function draw(smp, pls, dt, snap, fx) {
      // calidad adaptativa: si va lento, primero menos resolución y después sin sombras
      ftAvg = ftAvg * .95 + Math.min(100, dt * 1000) * .05; ftN++;
      if (ftN > 90 && ftAvg > 34) { ftN = 0; if (pr > 1) { pr = 1; ren.setPixelRatio(1); size(); } else if (hd) { setHD(false); meta.onQuality && meta.onQuality(false); } }
      const seen = new Set();
      if (useRig) { drawRig(pls, dt); for (const k2 in IM) IM[k2].visible = false; blob.visible = !hd; for (const id in men) dropMan(id); }
      else { for (const k2 in IM) IM[k2].visible = true; for (const id in rmen) { scene.remove(rmen[id].g); delete rmen[id]; } }
      for (const o of useRig ? [] : pls) {
        seen.add(o.id); let mm = men[o.id]; if (!mm) { mm = makeMan(o); if (!mm) continue; men[o.id] = mm; }
        const [wx, wz] = W3(o.x, o.y); mm.g.position.set(wx, 0, wz); mm.g.rotation.y = -o.face;
        const sw = Math.sin(o.ph) * Math.min(.9, o.sp * .13);
        mm.legs[0].p.rotation.z = sw; mm.legs[1].p.rotation.z = -sw; mm.arms[0].p.rotation.z = -sw * .8; mm.arms[1].p.rotation.z = sw * .8;
        mm.body.rotation.x = o.down ? Math.PI / 2 * .95 : 0; mm.body.position.y = o.down ? .25 : Math.abs(Math.sin(o.ph)) * Math.min(.06, o.sp * .01);
        mm.g.updateMatrixWorld(true);
        IM.torso.setMatrixAt(mm.slot, mm.torso.matrixWorld); IM.shorts.setMatrixAt(mm.slot, mm.shorts.matrixWorld); IM.head.setMatrixAt(mm.slot, mm.head.matrixWorld); IM.hair.setMatrixAt(mm.slot, mm.hair.matrixWorld);
        for (const i of [0, 1]) { IM.leg.setMatrixAt(mm.slot * 2 + i, mm.legs[i].m.matrixWorld); IM.arm.setMatrixAt(mm.slot * 2 + i, mm.arms[i].m.matrixWorld); }
        blob.setMatrixAt(mm.slot, mm.sh.matrixWorld); mm.nm.matrix.copy(mm.num.matrixWorld);
      }
      if (!useRig) for (const id in men) if (!seen.has(id)) dropMan(id);
      for (const k2 in IM) IM[k2].instanceMatrix.needsUpdate = true;
      const [bx, bz] = W3(smp.x, smp.y); ball.position.set(bx, .22 + smp.z, bz); ball.rotation.z -= dt * 6;
      m4.makeScale(.5, .5, .5); m4.premultiply(new T.Matrix4().makeRotationX(-Math.PI / 2)); m4.setPosition(bx, .03, bz); blob.setMatrixAt(MAXP, m4); blob.instanceMatrix.needsUpdate = true;
      // red que se hincha con el gol
      for (const n of backNets) { if (smp.netHit && Math.sign(bx) === n.e) n.push = .9; n.push *= Math.exp(-dt * 4); n.m.position.x = n.x0 + n.e * n.push; }
      if (fx.burst) burst(fx.burst.x, fx.burst.y, fx.burst.colors);
      if (confT > 0) { confT -= dt; for (let i = 0; i < NC; i++) { cVel[i * 3 + 1] -= 9 * dt * .35; cPos[i * 3] += cVel[i * 3] * dt; cPos[i * 3 + 1] = Math.max(.05, cPos[i * 3 + 1] + cVel[i * 3 + 1] * dt); cPos[i * 3 + 2] += cVel[i * 3 + 2] * dt; } cGeo.attributes.position.needsUpdate = true; confetti.material.opacity = Math.min(1, confT); if (confT <= 0) confetti.visible = false; }
      const own = pls.find(p => p.id === smp.own); setTag(own ? own.id : null); if (own) { const [ox, oz] = W3(own.x, own.y); tag.position.set(ox, 3.8, oz); const w = clamp(cam.position.distanceTo(tag.position) * .16, 2, 9); tag.scale.set(w, w * .19, 1); }
      // cámara
      lead.set((smp.vx || 0) * .7, 0, (smp.vy || 0) * .4);
      const port = cam.aspect < 1.1, D0 = port ? 40 : 50, ph = smp.phase;
      if (camMode !== 'aerea' && ph && ph.type === 'celebr') { const [cx, cz] = W3(ph.cx, ph.cy); tp.set(cx - Math.sign(cx || 1) * 13, 11 + tilt * .3, cz + 16); tlk.set(cx, 1.3, cz); }
      else if (camMode === 'tv') { const cx = clamp(bx * .85 + lead.x, -40, 40); tp.set(cx + Math.sin(yaw) * D0, (port ? 21 : 24) + tilt, Math.cos(yaw) * D0 + bz * .25); tlk.set(clamp(bx * .95 + lead.x, -46, 46), 0, bz * .6 + lead.z); }
      else if (camMode === 'aerea') { tp.set(bx * .6 + Math.sin(yaw) * 34, (port ? 62 : 70) + tilt, 30 * Math.cos(yaw) + bz * .3); tlk.set(bx * .6, 0, bz * .3); }
      else { const d = dirOf(smp.side, smp.r), fx = clamp(bx, -47, 47), fz = clamp(bz, -29, 29); tp.set(fx - d * 17 * Math.cos(yaw), 9 + tilt * .4, fz - 17 * Math.sin(yaw) * d); tlk.set(clamp(fx + d * 10, -50, 50), .8, fz * .9); }
      if (snap) { camPos.copy(tp); camLook.copy(tlk); } else { camPos.lerp(tp, 1 - Math.exp(-2.6 * dt)); camLook.lerp(tlk, 1 - Math.exp(-4.5 * dt)); }
      cam.position.copy(camPos); cam.position.x += fx.sx * 1.4; cam.position.y += fx.sy * .9; cam.lookAt(camLook); cam.rotateZ(fx.roll * .05);
      sun.position.set(camLook.x - 30, 90, 40); sun.target.position.set(camLook.x, 0, 0);
      ren.render(scene, cam);
    }
    const api = {
      draw, setCam(m) { camMode = m; yaw = 0; tilt = 0; }, setHD, get hd() { return hd; }, renderer: ren, get hasRig() { return !!rig; }, get rig() { return useRig; }, setRig(v) { useRig = !!v && !!rig; try { localStorage.setItem('mv-rig', useRig ? '1' : '0'); } catch (e) {} },
      destroy() {
        ro.disconnect();
        scene.traverse(o => { if (o.geometry) o.geometry.dispose(); const ms = o.material ? [].concat(o.material) : []; ms.forEach(mt => { for (const k2 in mt) if (mt[k2] && mt[k2].isTexture) mt[k2].dispose(); mt.dispose(); }); });
        Object.values(numCache).forEach(t => t.dispose()); standM.forEach(m => m.map && m.map.dispose());
        ren.dispose(); cv.remove(); if (window.__mv && window.__mv.renderer === ren) window.__mv = null;
      }
    };
    window.__mv = { renderer: ren, scene, cam };
    return api;
  }

  /* ---------- sonido (Web Audio, sin archivos) ----------
     Skill audio-design: buses Master <- Ambiente / Efectos, compresor en el master para no saturar,
     volumen con curva cuadrática, variación de tono para que no suene repetido. */
  const SND = (() => {
    let ctx = null, master, amb, sfx, crowdG, crowdF, noise, on = true, vol = .7;
    try { const s = JSON.parse(localStorage.getItem('mv-snd') || 'null'); if (s) { on = !!s.on; vol = +s.vol; } } catch (e) {}
    const save = () => { try { localStorage.setItem('mv-snd', JSON.stringify({ on, vol })); } catch (e) {} };
    function init() {
      if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      try { ctx = new AC(); } catch (e) { return; }
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4; comp.connect(ctx.destination);
      master = ctx.createGain(); master.gain.value = 0; master.connect(comp);
      amb = ctx.createGain(); amb.gain.value = 0; amb.connect(master); sfx = ctx.createGain(); sfx.gain.value = .9; sfx.connect(master);
      const len = ctx.sampleRate * 3; noise = ctx.createBuffer(1, len, ctx.sampleRate); const d = noise.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0; for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b0 = .99765 * b0 + w * .099046; b1 = .963 * b1 + w * .2965164; b2 = .57 * b2 + w * 1.0526913; d[i] = (b0 + b1 + b2 + w * .1848) * .16; }
      const src = ctx.createBufferSource(); src.buffer = noise; src.loop = true;
      crowdF = ctx.createBiquadFilter(); crowdF.type = 'bandpass'; crowdF.frequency.value = 650; crowdF.Q.value = .55;
      crowdG = ctx.createGain(); crowdG.gain.value = .22; src.connect(crowdF).connect(crowdG).connect(amb); src.start();
      const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = .21; lg.gain.value = .05; lfo.connect(lg).connect(crowdG.gain); lfo.start();
      setVol();
    }
    function setVol() { if (ctx) master.gain.setTargetAtTime(on ? vol * vol : 0, ctx.currentTime, .08); }
    function swell({ dur = 2, f = 900, q = .8, peak = 1, att = .15, sweep = 0 }) {
      const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noise; s.loop = true;
      const fl = ctx.createBiquadFilter(); fl.type = 'bandpass'; fl.frequency.setValueAtTime(f, t); if (sweep) fl.frequency.linearRampToValueAtTime(f + sweep, t + dur); fl.Q.value = q;
      const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + att); g.gain.setTargetAtTime(0, t + att + dur * .35, dur * .3);
      s.connect(fl).connect(g).connect(amb); s.start(t, Math.random() * 2); s.stop(t + dur * 2.5);
    }
    return {
      init, get on() { return on; }, get vol() { return vol; },
      toggle() { on = !on; save(); setVol(); return on; }, setVolume(v) { vol = clamp(v, 0, 1); save(); setVol(); },
      live(x) { if (!ctx) return; amb.gain.setTargetAtTime(.8, ctx.currentTime, .4); crowdG.gain.setTargetAtTime(.16 + .3 * x, ctx.currentTime, .7); crowdF.frequency.setTargetAtTime(560 + 520 * x, ctx.currentTime, .7); },
      quiet() { if (ctx) amb.gain.setTargetAtTime(0, ctx.currentTime, .3); },
      whistle(n = 1) { if (!ctx) return; const t0 = ctx.currentTime; for (let i = 0; i < n; i++) { const long = i === n - 1, t = t0 + i * .42, o = ctx.createOscillator(), mod = ctx.createOscillator(), mg = ctx.createGain(), g = ctx.createGain(); o.frequency.value = 2800 + Math.random() * 120; mod.frequency.value = 30 + Math.random() * 6; mg.gain.value = 110; mod.connect(mg).connect(o.frequency); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.16, t + .02); g.gain.setValueAtTime(.16, t + (long ? .55 : .26)); g.gain.linearRampToValueAtTime(0, t + (long ? .62 : .32)); o.connect(g).connect(sfx); o.start(t); mod.start(t); o.stop(t + .7); mod.stop(t + .7); } },
      kick(p = .5) { if (!ctx) return; const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(120 + Math.random() * 60, t); o.frequency.exponentialRampToValueAtTime(42, t + .09); g.gain.setValueAtTime(.32 * p, t); g.gain.exponentialRampToValueAtTime(.001, t + .13); o.connect(g).connect(sfx); o.start(t); o.stop(t + .15); },
      goal() { if (!ctx) return; swell({ dur: 3.4, f: 850, q: .45, peak: 1.15, att: .1, sweep: 350 }); swell({ dur: 2.8, f: 1700, q: 1.1, peak: .35, att: .2 }); },
      ooh() { if (!ctx) return; swell({ dur: 1.4, f: 480 + Math.random() * 80, q: 2.4, peak: .5, att: .3, sweep: -160 }); },
      whoa() { if (!ctx) return; swell({ dur: 1, f: 700, q: 1.5, peak: .35, att: .2, sweep: 120 }); }
    };
  })();

  /* ---------- controlador del visor ---------- */
  const VI = {
    ball: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#111" stroke-width="1.5"/><path d="m12 6.6 3.9 2.8-1.5 4.6H9.6L8.1 9.4z" fill="#111"/><path d="M12 6.6V2.2M15.9 9.4l4-1.6M14.4 14l2.6 3.6M9.6 14 7 17.6M8.1 9.4l-4-1.6" stroke="#111" stroke-width="1.3"/></svg>',
    med: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="#ec4d55"/><path d="M12 7v10M7 12h10" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
    sub: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5h13.5M14 5l3.5 3.5L14 12" fill="none" stroke="#4bd474" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 15.5H6.5M10 12l-3.5 3.5L10 19" fill="none" stroke="#ec4d55" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    glove: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 21v-4.5L4.5 12c-.6-1.1.9-2.1 1.8-1.2L8 12.6V5.5a1.3 1.3 0 0 1 2.6 0V11V3.8a1.3 1.3 0 0 1 2.6 0V11V4.8a1.3 1.3 0 0 1 2.6 0V11.5 7a1.3 1.3 0 0 1 2.6 0v8.5c0 2.6-1.6 4.4-3.6 5.5z" fill="#ffb21c" stroke="#2a1700" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    snd: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6M18.2 6.5a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    mute: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="m16 9.5 5 5M21 9.5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    full: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    flag: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V3.5" stroke="#f2f5ee" stroke-width="2" stroke-linecap="round"/><path d="M5.5 4h12l-2.6 4 2.6 4h-12z" fill="#ffb21c"/></svg>',
    off: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V3.5" stroke="#f2f5ee" stroke-width="2" stroke-linecap="round"/><path d="M5.5 4h13v8h-13z" fill="#ec4d55"/><path d="M5.5 4h6.5v4H5.5zM12 8h6.5v4H12z" fill="#ffb21c"/></svg>',
    slide: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18.5h18" stroke="#f2f5ee" stroke-width="2" stroke-linecap="round"/><path d="M4 16.5 11 14l7.5 1.6" fill="none" stroke="#ffb21c" stroke-width="3" stroke-linecap="round"/><circle cx="19.5" cy="12" r="2.4" fill="#fff" stroke="#111" stroke-width="1"/></svg>',
    drib: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17c4 0 5-10 9-10s4 7 9 7" fill="none" stroke="#ffb21c" stroke-width="2.6" stroke-linecap="round"/><circle cx="19" cy="19" r="2.4" fill="#fff" stroke="#111" stroke-width="1"/></svg>',
    play: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor"/></svg>',
    pause: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z" fill="currentColor"/></svg>'
  };
  function mount(root, o) {
    let m = o.match, tl = build(m), mot = Motion(tl); const kit = kits(o.H, o.A), esc = o.esc, MG = o.manage || null;
    const reduced = (() => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
    let fxOn = !reduced; try { const v = localStorage.getItem('mv-fx'); if (v != null) fxOn = v === '1'; } catch (e) {}
    let trauma = 0, shakeT = 0, prevR = null, lastScore = '0-0', burstEv = null;
    SND.init();
    let mode = o.live ? 'live' : 'replay', r = o.live ? clamp((Date.now() - o.live.at) / 1000, 0, LIVE_S + 8) : (o.startR || 0), speed = o.speed || 4, high = !!o.highlights, view = o.view || '2d', r2 = null, r3 = null, raf = 0, last = performance.now(), snap = true, dead = false, lastPanel = -1, paused = false, draft = {}, pendT = 0, pendMin = 0;
    root.innerHTML = `<div class="mv">
      <div class="mv-top"><div class="mv-t">${o.crest(o.H, 36)}<b>${esc(o.H.short)}</b></div><div class="mv-sc"><span class="mv-score">0-0</span><span class="mv-clk">0'</span></div><div class="mv-t r"><b>${esc(o.A.short)}</b>${o.crest(o.A, 36)}</div></div>
      <div class="mv-stage"><div class="mv-r2"></div><div class="mv-r3"></div><div class="mv-flash"></div><div class="mv-ban" aria-live="polite"></div><div class="mv-load" style="display:none">Cargando estadio 3D…</div>
        <div class="mv-tools"><div class="seg"><button data-v="2d">2D</button><button data-v="3d">3D</button></div><div class="seg mv-cams"><button data-c="tv">TV</button><button data-c="aerea">Aérea</button><button data-c="jug">Cerca</button></div></div>
        <div class="mv-comm"></div><div class="mv-end" hidden></div></div>
      <div class="mv-ctrl"></div>
      <div class="mv-tabs">${MG ? '<button data-tab="ges" aria-pressed="true">Gestión</button>' : ''}<button data-tab="nar" aria-pressed="${!MG}">Relato</button><button data-tab="est">Datos</button><button data-tab="ali">Equipos</button></div>
      <div class="mv-panel"></div></div>`;
    const $ = s => root.querySelector(s); let tab = MG ? 'ges' : 'nar', gesSel = null;
    const el = { score: $('.mv-score'), clk: $('.mv-clk'), ban: $('.mv-ban'), comm: $('.mv-comm'), ctrl: $('.mv-ctrl'), panel: $('.mv-panel'), r2: $('.mv-r2'), r3: $('.mv-r3'), load: $('.mv-load'), end: $('.mv-end') };
    // final del partido: cuándo pita el árbitro y panel de resumen
    // mientras el partido se está jugando no se puede ir por delante del directo: lo que no se ha jugado aún no existe
    const liveR = () => o.live ? (Date.now() - o.live.at) / 1000 : Infinity, liveOpen = () => !!o.live && liveR() < LIVE_S + 2;
    const endOf = () => { const b = tl.banners.find(x => x.type === 'end'); return b ? b.t : LIVE_S; }, capR = () => Math.max(LIVE_S + 1, endOf() + 4);
    let endShown = false;
    function showEnd(on) { if (!el.end || !o.summary) return; endShown = on; if (!on) { el.end.hidden = true; return; } el.end.innerHTML = `<div class="mv-endc">${o.summary(m)}<div class="mv-enda"><button class="mv-b" data-act2="replay">${VI.play}Repetir</button><button class="mv-b" data-act2="endclose">Ver el campo</button><button class="mv-b on" data-act2="exit">Salir</button></div></div>`; el.end.hidden = false; }
    function optsHTML() { return `<span class="mv-opts"><button class="mv-b ${SND.on ? 'on' : ''}" data-o="snd" aria-pressed="${SND.on}" aria-label="Sonido">${SND.on ? VI.snd : VI.mute}</button><input class="mv-vol" type="range" min="0" max="100" value="${Math.round(SND.vol * 100)}" aria-label="Volumen"><button class="mv-b ${fxOn ? 'on' : ''}" data-o="fx" aria-pressed="${fxOn}">Efectos</button><button class="mv-b" data-act2="full" aria-label="Pantalla completa">${VI.full}</button>${view === '3d' && r3 && r3.hasRig ? `<button class="mv-b ${r3.rig ? 'on' : ''}" data-o="rig" aria-pressed="${r3.rig}" title="Muñecos animados">Animados</button>` : ''}${view === '3d' ? `<button class="mv-b ${r3 && r3.hd ? 'on' : ''}" data-o="hd" aria-pressed="${!!(r3 && r3.hd)}" title="Sombras y más resolución">HD</button>` : ''}</span>`; }
    function ctrlHTML() {
      if (mode === 'live') return `<span class="mv-live"><i></i> En directo</span>${o.liveNote ? `<span class="mv-lnote">${o.liveNote()}</span>` : ''}<button class="mv-b" data-act2="fromstart">Ver desde el inicio</button>` + optsHTML();
      return `<button class="mv-b" data-act2="pause" aria-label="${paused ? 'Reanudar' : 'Pausa'}">${paused ? VI.play : VI.pause}</button>${[1, 4, 10].map(s => `<button class="mv-b ${!high && speed === s ? 'on' : ''}" data-sp="${s}">x${s}</button>`).join('')}<button class="mv-b ${high ? 'on' : ''}" data-act2="high">Solo jugadas</button><input class="mv-seek" type="range" min="0" max="${Math.round(liveOpen() ? liveR() : LIVE_S)}" value="${Math.round(r)}" aria-label="Minuto">${o.live ? '<button class="mv-b" data-act2="golive">Volver al directo</button>' : ''}` + optsHTML();
    }
    function setView(v) {
      view = v; root.querySelectorAll('[data-v]').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === v)); $('.mv-cams').style.display = v === '3d' ? '' : 'none';
      el.r2.style.display = v === '2d' ? '' : 'none'; el.r3.style.display = v === '3d' ? '' : 'none';
      if (v === '2d' && !r2) r2 = R2D(el.r2, tl, kit);
      if (v === '3d' && !r3) { el.load.style.display = ''; R3D(el.r3, tl, kit, { ...o, onQuality: () => { el.ctrl.innerHTML = ctrlHTML(); } }).then(x => { if (dead) return x.destroy(); r3 = x; el.load.style.display = 'none'; snap = true; el.ctrl.innerHTML = ctrlHTML(); }).catch(err => { console.warn(err); el.load.textContent = 'Tu dispositivo no puede mostrar el 3D. Usa la vista 2D.'; }); }
      try { localStorage.setItem('mv-view', v); } catch (e) {}
      snap = true; if (el.ctrl.innerHTML) el.ctrl.innerHTML = ctrlHTML();
    }
    // lo que el míster elige en los desplegables se guarda al momento (Safari quita el foco al elegir y el panel se redibuja)
    const keepDraft = e => { const g = e.target && e.target.dataset && e.target.dataset.g; if (g && e.target.tagName === 'SELECT') draft[g] = e.target.value; };
    root.addEventListener('change', keepDraft); root.addEventListener('input', keepDraft);
    root.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || !root.contains(b)) return;
      if (b.dataset.v) setView(b.dataset.v);
      if (b.dataset.c && r3) { r3.setCam(b.dataset.c); root.querySelectorAll('[data-c]').forEach(x => x.setAttribute('aria-pressed', x === b)); snap = true; }
      if (b.dataset.sp) { speed = +b.dataset.sp; high = false; paused = false; el.ctrl.innerHTML = ctrlHTML(); }
      if (b.dataset.tab) { tab = b.dataset.tab; root.querySelectorAll('[data-tab]').forEach(x => x.setAttribute('aria-pressed', x === b)); lastPanel = -1; }
      if (b.dataset.o === 'snd') { SND.init(); SND.toggle(); el.ctrl.innerHTML = ctrlHTML(); }
      if (b.dataset.o === 'fx') { fxOn = !fxOn; try { localStorage.setItem('mv-fx', fxOn ? '1' : '0'); } catch (e) {} el.ctrl.innerHTML = ctrlHTML(); }
      if (b.dataset.o === 'rig' && r3) { r3.setRig(!r3.rig); el.ctrl.innerHTML = ctrlHTML(); }
      if (b.dataset.o === 'hd' && r3) { r3.setHD(!r3.hd); el.ctrl.innerHTML = ctrlHTML(); }
      const a = b.dataset.act2;
      if (a === 'applytac' && MG) { const g = k => draft[k] ?? root.querySelector(`[data-g="${k}"]`).value; pendT = Date.now(); pendMin = Math.min(93, minuteAt(r) + 1); const mm = Math.min(93, minuteAt(r) + 1); MG.onOrder({ k: 'tac', tac: { ment: g('ment'), press: g('press'), est: g('est') }, m: mm }); const f = g('form'); let fNow = m.fm[MG.side]; for (const e of m.ev) if (e.t === 'tac' && e.s === MG.side && e.form && e.m <= minuteAt(r)) fNow = e.form; if (f !== fNow) MG.onOrder({ k: 'form', form: f, m: mm }); lastPanel = -1; }
      if (a === 'dosub' && MG) { const out = draft.out ?? root.querySelector('[data-g="out"]').value, inn = draft.in ?? root.querySelector('[data-g="in"]').value; if (out && inn) MG.onOrder({ k: 'sub', out, in: inn, m: Math.min(93, minuteAt(r) + 1) }); delete draft.out; delete draft.in; lastPanel = -1; }
      if (a === 'full') { const el2 = root.closest('.mvov') || root; try { (el2.requestFullscreen ? el2.requestFullscreen() : Promise.reject()).then(() => { try { screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {}); } catch (e) {} }).catch(() => {}); } catch (e) {} }
      if (a === 'fromstart') { mode = 'replay'; r = 0; speed = 4; snap = true; el.ctrl.innerHTML = ctrlHTML(); }
      if (a === 'endclose') { el.end.hidden = true; }
      if (a === 'exit') { el.end.hidden = true; const x = document.querySelector('.mvx'); if (x) x.click(); }
      if (a === 'replay') { showEnd(false); mode = 'replay'; r = 0; paused = false; high = false; snap = true; prevR = null; el.ctrl.innerHTML = ctrlHTML(); }
      if (a === 'golive') { mode = 'live'; r = clamp((Date.now() - o.live.at) / 1000, 0, capR()); snap = true; el.ctrl.innerHTML = ctrlHTML(); }
      if (a === 'high') { high = !high; paused = false; el.ctrl.innerHTML = ctrlHTML(); }
      if (a === 'pause') { paused = !paused; el.ctrl.innerHTML = ctrlHTML(); }
    });
    root.addEventListener('input', e => { if (e.target.classList.contains('mv-seek')) { r = liveOpen() ? Math.min(+e.target.value, liveR()) : +e.target.value; snap = true; } if (e.target.classList.contains('mv-vol')) { SND.init(); SND.setVolume(+e.target.value / 100); } });
    el.ctrl.innerHTML = ctrlHTML();
    root.querySelector(`[data-c="tv"]`).setAttribute('aria-pressed', 'true');
    let curBan = null;
    function banner(smp) {
      const b = [...tl.banners].reverse().find(x => smp.r >= x.t && smp.r < x.t + x.d);
      if (b === curBan) return; curBan = b;
      if (!b) { el.ban.classList.remove('on'); return; }
      const team = b.s != null ? (b.s ? o.A : o.H) : null, nm = id => esc(E.player(id).name);
      const html = b.type === 'goal' ? `<div class="big">¡GOOOL!</div><div>${nm(b.p)}${b.a ? `<small>Asistencia: ${nm(b.a)}</small>` : ''}</div><div class="sc">${esc(o.H.short)} ${b.sc[0]}-${b.sc[1]} ${esc(o.A.short)}</div>`
        : b.type === 'ama' ? `<span class="card y"></span><div>${nm(b.p)}<small>Tarjeta amarilla · ${esc(team.short)}</small></div>`
        : b.type === 'roja' ? `<span class="card r"></span><div>${nm(b.p)}<small>¡Expulsado! · ${esc(team.short)}</small></div>`
        : b.type === 'les' ? `${VI.med}<div>${nm(b.p)}<small>Lesionado · ${esc(team.short)}</small></div>`
        : b.type === 'sub' ? `${VI.sub}<div>${nm(b.p)}<small>Sale ${nm(b.q)} · ${esc(team.short)}</small></div>`
        : b.type === 'save' ? `${VI.glove}<div>¡Parada!<small>Disparo de ${nm(b.p)}</small></div>`
        : b.type === 'miss' ? `<div>Fuera<small>Disparo de ${nm(b.p)}</small></div>`
        : b.type === 'seg' ? `${VI.slide}<div>¡Segada!<small>${nm(b.p)} · ${esc(team.short)}</small></div>`
        : b.type === 'rob' ? `<div>Robo<small>${nm(b.p)} · ${esc(team.short)}</small></div>`
        : b.type === 'reg' ? `${VI.drib}<div>¡Regate!<small>${nm(b.p)} · ${esc(team.short)}</small></div>`
        : b.type === 'cor' ? `${VI.flag}<div>Córner<small>${esc(team.short)}</small></div>`
        : b.type === 'fal' ? `<div>Falta<small>${nm(b.p)} · ${esc(team.short)}</small></div>`
        : b.type === 'off' ? `${VI.off}<div>Fuera de juego<small>${nm(b.p)}</small></div>`
        : b.type === 'pal' ? `<div>¡Al palo!<small>${nm(b.p)}</small></div>`
        : b.type === 'pen' ? `<div class="big2">¡PENALTI!</div><div><small>A favor de ${esc(team.name)}${b.q ? ' · falta de ' + nm(b.q) : ''}</small></div>`
        : b.type === 'tac' ? `<div>${esc(b.txt)}<small>${esc(team.short)}</small></div>`
        : b.type === 'half' ? `<div class="big2">Descanso</div>` : `<div class="big2">Final del partido</div>`;
      el.ban.className = 'mv-ban on ' + b.type + (['rob', 'seg', 'reg', 'cor', 'fal', 'off', 'pal', 'tac', 'miss', 'save'].includes(b.type) ? ' mini' : '') + (b.type === 'goal' ? (b.s ? ' away' : ' home') : '');
      if (b.type === 'goal') el.ban.style.setProperty('--tc', team.colors[0]);
      el.ban.innerHTML = html;
    }
    function panel(smp) {
      const sec = Math.floor(smp.r / 2); if (sec === lastPanel) return; lastPanel = sec;
      const nm = id => esc(E.player(id).name);
      const lines = tl.comm.filter(c => c.t <= smp.r);
      el.comm.innerHTML = lines.slice(-2).map(c => `<div class="${c.imp ? 'imp' : ''}">${esc(c.txt)}</div>`).join('');
      if (tab === 'ges' && MG) {
        if (root.contains(document.activeElement) && el.panel.contains(document.activeElement) && document.activeElement.tagName === 'SELECT') return;
        const s2 = MG.side, mnow = minuteAt(smp.r), over = smp.r >= LIVE_S - 2;
        const onF = tl.side[s2].filter(p => p.from <= smp.r && smp.r < p.to), used = m.ev.filter(e => e.t === 'cam' && e.s === s2 && e.m <= mnow).length;
        const entered = new Set(tl.side[s2].filter(p => p.from <= smp.r).map(p => p.id)), bench = (MG.bench || []).filter(id => !entered.has(id));
        const tacNow = (() => { let t = m.tc[s2]; for (const e of m.ev) if (e.t === 'tac' && e.s === s2 && e.tac && e.m <= mnow) t = e.tac; return t; })();
        const formNow = (() => { let f = m.fm[s2]; for (const e of m.ev) if (e.t === 'tac' && e.s === s2 && e.form && e.m <= mnow) f = e.form; return f; })();
        if (pendT && ((['ment', 'press', 'est'].every(k => !draft[k] || draft[k] === tacNow[k]) && (!draft.form || draft.form === formNow)) || Date.now() - pendT > 40000)) { pendT = 0; ['ment', 'press', 'est', 'form'].forEach(k => delete draft[k]); }
        const tv = k => draft[k] ?? tacNow[k], fv = draft.form ?? formNow;
        const opt = (obj, v) => Object.entries(obj).map(([k, l]) => `<option value="${k}" ${k === v ? 'selected' : ''}>${l}</option>`).join('');
        const rt = id => m.rat[id] && mnow > 30 ? ` · ${m.rat[id] >= 7 ? '⬆' : m.rat[id] < 6 ? '⬇' : '='}` : '';
        el.panel.innerHTML = over ? '<p class="mv-note">El partido ha terminado.</p>' : `<div class="mv-ges">
          <p class="mv-note">${pendT ? `✅ Táctica enviada: entra en juego en el minuto ${pendMin}.` : `Lo que cambies se aplica desde el minuto ${Math.min(93, mnow + 1)}.`} Cambios hechos: ${used}/5.</p>
          <div class="mv-grid"><label>Mentalidad<select data-g="ment">${opt({ def: 'Defensiva', equ: 'Equilibrada', ofe: 'Ofensiva' }, tv('ment'))}</select></label>
          <label>Presión<select data-g="press">${opt({ baj: 'Baja', med: 'Media', alt: 'Alta' }, tv('press'))}</select></label>
          <label>Estilo<select data-g="est">${opt({ pos: 'Posesión', mix: 'Mixto', dir: 'Directo', con: 'Contraataque' }, tv('est'))}</select></label>
          <label>Formación<select data-g="form">${Object.keys(E.FORMS).map(f => `<option value="${f}" ${f === fv ? 'selected' : ''}>${f}</option>`).join('')}</select></label></div>
          <button class="mv-b on" data-act2="applytac">Aplicar táctica</button>
          <h4>Cambio</h4><div class="mv-grid"><label>Sale<select data-g="out">${onF.filter(p => p.pos !== 'POR' || true).map(p => `<option value="${p.id}" ${(draft.out ? draft.out === p.id : gesSel && gesSel.out === p.id) ? 'selected' : ''}>${p.num} · ${esc(E.player(p.id).name)} (${p.pos})${rt(p.id)}</option>`).join('')}</select></label>
          <label>Entra<select data-g="in">${bench.map(id => `<option value="${id}" ${draft.in === id ? 'selected' : ''}>${esc(E.player(id).name)} (${E.player(id).pos})</option>`).join('') || '<option value="">Sin suplentes</option>'}</select></label></div>
          <button class="mv-b on" data-act2="dosub" ${used >= 5 || !bench.length ? 'disabled' : ''}>Hacer el cambio</button></div>`;
        return;
      }
      if (tab === 'nar') {
        const key = tl.banners.filter(b => b.t <= smp.r && b.type !== 'rob' && b.type !== 'fal');
        el.panel.innerHTML = `<ol class="mv-feed">${key.slice().reverse().map(b => { const mn = minuteAt(b.t); const team = b.s != null ? (b.s ? o.A : o.H) : null; const t = b.type === 'goal' ? `<b>¡Gol! ${nm(b.p)}</b>${b.a ? ' (' + nm(b.a) + ')' : ''} · ${b.sc[0]}-${b.sc[1]}` : b.type === 'ama' ? `Amarilla a ${nm(b.p)}` : b.type === 'roja' ? `<b>Roja a ${nm(b.p)}</b>` : b.type === 'les' ? `Lesión de ${nm(b.p)}` : b.type === 'sub' ? `Entra ${nm(b.p)} por ${nm(b.q)}` : b.type === 'save' ? `Parada tras disparo de ${nm(b.p)}` : b.type === 'miss' ? `Disparo fuera de ${nm(b.p)}` : b.type === 'seg' ? `Segada de ${nm(b.p)}` : b.type === 'reg' ? `Regate de ${nm(b.p)}` : b.type === 'cor' ? 'Córner' : b.type === 'off' ? `Fuera de juego de ${nm(b.p)}` : b.type === 'pal' ? `<b>Al palo</b>: ${nm(b.p)}` : b.type === 'pen' ? '<b>¡Penalti!</b>' : b.type === 'tac' ? esc(b.txt) : b.type === 'half' ? 'Descanso' : 'Final'; return `<li class="${b.type}"><span class="mn">${b.type === 'end' ? '90\'' : b.type === 'half' ? '45\'' : mn + "'"}</span><span class="ico ${b.type}"></span><span>${t}${team ? ` <em>${esc(team.short)}</em>` : ''}</span></li>`; }).join('') || '<li><span class="mn">0\'</span><span></span><span>Los equipos saltan al campo.</span></li>'}</ol>`;
      } else if (tab === 'est') {
        const f = clamp(smp.r / LIVE_S, 0, 1), done = smp.r >= LIVE_S;
        const sh = [0, 1].map(s => tl.banners.filter(b => b.t <= smp.r && b.s === s && ['goal', 'save', 'miss', 'pal'].includes(b.type)).length);
        const ot = [0, 1].map(s => tl.banners.filter(b => b.t <= smp.r && b.s === s && (b.type === 'goal' || b.type === 'save')).length);
        const cards = [0, 1].map(s => tl.banners.filter(b => b.t <= smp.r && b.s === s && (b.type === 'ama' || b.type === 'roja')).length);
        const pos = done ? m.st.pos : m.st.pos.map(v => Math.round(50 + (v - 50) * Math.min(1, f * 3)));
        const row = (l, a, b) => `<div class="mv-st"><b>${a}</b><span><i style="width:${a + b ? a / (a + b) * 100 : 50}%"></i><i style="width:${a + b ? b / (a + b) * 100 : 50}%"></i></span><b>${b}</b><em>${l}</em></div>`;
        const cnt = types => [0, 1].map(s2 => tl.banners.filter(b => b.t <= smp.r && b.s === s2 && types.includes(b.type)).length);
        const robs = cnt(['rob', 'seg']), fals = cnt(['fal', 'ama', 'roja']), cors = cnt(['cor']), offs = cnt(['off']);
        el.panel.innerHTML = row('Posesión %', pos[0], pos[1]) + row('Tiros', sh[0], sh[1]) + row('A puerta', ot[0], ot[1]) + row('Robos', robs[0], robs[1]) + row('Córners', cors[0], cors[1]) + row('Faltas', fals[0], fals[1]) + row('Fueras de juego', offs[0], offs[1]) + row('Tarjetas', cards[0], cards[1]) + `<p class="mv-note">${m.att.toLocaleString('es-ES')} espectadores · ${m.fm[0]} vs ${m.fm[1]}</p>`;
      } else {
        const done = smp.r >= LIVE_S;
        const lu = s => tl.side[s].filter(p => p.from <= smp.r).map(p => { const rt = m.rat[p.id]; const out = p.to <= smp.r; return `<li class="${out ? 'out' : ''}"><span class="n">${p.num}</span><span class="nm">${nm(p.id)}</span><span class="ps">${p.pos}</span>${done && rt ? `<span class="rt ${rt >= 7.5 ? 'hi' : rt < 5.8 ? 'lo' : ''}">${rt.toFixed(1)}</span>` : ''}</li>`; }).join('');
        el.panel.innerHTML = `<div class="mv-lus"><div><h4>${esc(o.H.name)}</h4><ol>${lu(0)}</ol></div><div><h4>${esc(o.A.name)}</h4><ol>${lu(1)}</ol></div></div>${done && m.mvp ? `<p class="mv-note">Mejor jugador: <b>${nm(m.mvp)}</b> (${m.rat[m.mvp].toFixed(1)})</p>` : ''}`;
      }
    }
    // Skill game-feel: cada suceso dispara un paquete proporcional (sonido + temblor + destello + partículas);
    // el temblor sale de un "trauma" que decae en tiempo real y solo mueve la cámara, nunca la simulación.
    function feedback(tier, ev) {
      const T2 = { small: .15, medium: .4, large: .85 }[tier];
      if (fxOn) trauma = Math.min(1, trauma + T2);
      if (tier === 'large' && fxOn) { const f = root.querySelector('.mv-flash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
    }
    function events(smp) {
      const a = prevR, b = smp.r; prevR = b;
      if (a == null || b <= a || b - a > 1.5 || paused) return;
      for (const k of tl.kicks) { if (k.t > a && k.t <= b) SND.kick(k.shot ? 1 : .45 + Math.random() * .2); if (k.t > b) break; }
      if (a < .3 && b >= .3) SND.whistle(1);
      for (const bn of tl.banners) {
        if (bn.t <= a || bn.t > b) continue;
        if (bn.type === 'goal') { feedback('large'); SND.goal(); const team = bn.s ? o.A : o.H; burstEv = { x: smp.x, y: smp.y, colors: [team.colors[0], team.colors[1], '#ffd400'] }; }
        else if (bn.type === 'save') { feedback('medium'); SND.ooh(); }
        else if (bn.type === 'miss') { feedback('small'); SND.ooh(); }
        else if (bn.type === 'ama' || bn.type === 'roja' || bn.type === 'les') { feedback(bn.type === 'roja' ? 'medium' : 'small'); SND.whistle(bn.type === 'roja' ? 2 : 1); }
        else if (bn.type === 'fal' || bn.type === 'off') SND.whistle(1);
        else if (bn.type === 'pen') { SND.whistle(1); SND.whoa(); feedback('medium'); }
        else if (bn.type === 'pal') { SND.ooh(); feedback('medium'); }
        else if (bn.type === 'seg' || bn.type === 'reg') { SND.whoa(); feedback('small'); }
        else if (bn.type === 'half') SND.whistle(2);
        else if (bn.type === 'end') SND.whistle(3);
      }
    }
    let lnT = 0;
    function frame(now) {
      if (dead) return;
      const rdt = Math.min(.1, Math.max(0, (now - last) / 1000)); last = now; let dt = rdt;
      if (mode === 'live') { const nr = clamp((Date.now() - o.live.at) / 1000, 0, capR()); if (Math.abs(nr - r) > 3) snap = true; r = nr; }
      else if (!paused) {
        let sp = speed;
        if (high) { const nxt = tl.windows.find(t => t > r - 6); const inWin = tl.windows.some(t => r >= t - 7 && r < t + 6); if (!inWin) { if (nxt != null && nxt - 7 > r) { r = nxt - 7; snap = true; prevR = null; } else if (nxt == null) r = Math.max(r, endOf() + .5); } sp = 1.3; }
        // cámara lenta en los goles al ver la repetición (en directo no, para seguir sincronizados)
        if (fxOn && tl.goals.some(g => r > g.t - 1.1 && r < g.t + .5)) sp = Math.min(sp, .35);
        r = Math.min(capR(), r + dt * sp); dt = dt * Math.min(sp, 4);
        // al alcanzar el directo, se engancha a él
        if (liveOpen() && r >= liveR() - .2) { r = liveR(); mode = 'live'; high = false; el.ctrl.innerHTML = ctrlHTML(); }
      }
      if (mode === 'live' && o.liveNote && now - (lnT || 0) > 2000) { lnT = now; const ln = root.querySelector('.mv-lnote'); if (ln) ln.innerHTML = o.liveNote(); }
      if (snap) prevR = null;
      const smp = sample(tl, r), ahead = sample(tl, Math.min(capR(), r + .35));
      smp.vx = (ahead.x - smp.x) / .35; smp.vy = (ahead.y - smp.y) / .35;
      events(smp);
      const pls = mot.step(smp, snap ? 0 : (mode === 'live' ? rdt : dt), snap);
      trauma = Math.max(0, trauma - 1.2 * rdt); shakeT += rdt * 30;
      const sh = trauma * trauma, fx = { sx: sh * Math.sin(shakeT * 1.7), sy: sh * Math.sin(shakeT * 2.3), roll: sh * Math.sin(shakeT * 1.1), burst: burstEv };
      burstEv = null;
      const atk = Math.max(0, 1 - Math.min(smp.x, FL - smp.x) / 35);
      if (SND.on) SND.live(smp.phase && smp.phase.type === 'celebr' ? 1 : atk * .8);
      const fin = smp.r >= endOf();
      if (fin && !endShown && smp.r >= endOf() + 1.8) showEnd(true); else if (endShown && smp.r < endOf() - 2) showEnd(false);
      const mn = fin ? 'Final' : smp.minute > 90 ? '90+' + (smp.minute - 90) + "'" : smp.minute + "'";
      const sc = smp.score[0] + '-' + smp.score[1];
      if (sc !== lastScore) { lastScore = sc; el.score.textContent = sc; if (fxOn && !snap) { el.score.classList.remove('pop'); void el.score.offsetWidth; el.score.classList.add('pop'); } }
      el.clk.textContent = smp.r < RH + .2 && smp.r > RH - .5 ? 'Descanso' : mn;
      if (view === '2d' && r2) r2.draw(smp, pls, fx); else if (view === '3d' && r3) r3.draw(smp, pls, dt, snap, fx);
      banner(smp); panel(smp);
      const sk = root.querySelector('.mv-seek'); if (sk && document.activeElement !== sk) sk.value = Math.round(r);
      snap = false; raf = requestAnimationFrame(frame);
    }
    root.__mv = { get tl() { return tl; }, get m() { return m; }, get r() { return r; }, get mode() { return mode; }, seek(x) { r = x; snap = true; prevR = null; }, setSpeed(x) { speed = x; high = false; } };
    let v0 = view; try { v0 = o.view || localStorage.getItem('mv-view') || '2d'; } catch (e) {}
    setView(v0 === '3d' ? '3d' : '2d');
    raf = requestAnimationFrame(frame);
    return { update(nm2) { m = nm2; tl = build(m); mot = Motion(tl, mot.st); curBan = null; lastPanel = -1; prevR = r; }, destroy() { dead = true; cancelAnimationFrame(raf); SND.quiet(); r2 && r2.destroy(); r3 && r3.destroy(); root.innerHTML = ''; }, get r() { return r; } };
  }

  G.MV = { build, sample, mount, LIVE_S, minuteAt, Motion };
})(window);
