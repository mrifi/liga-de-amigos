// Versión web: Firebase (Auth + Firestore) en lugar del almacenamiento de claude.ai.
// Expone window.claude.use('db' | 'user') con la misma interfaz que usa app.js, pero todo dentro de ligas/<CÓDIGO>/.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, setPersistence, browserLocalPersistence } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, deleteDoc, collection, getDocs, onSnapshot, runTransaction, serverTimestamp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
import { FIREBASE_CONFIG } from './firebase-config.js';

const app = initializeApp(FIREBASE_CONFIG), auth = getAuth(app), fs = getFirestore(app);
setPersistence(auth, browserLocalPersistence).catch(() => {});
const LS = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} } };
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newCode = () => { const a = new Uint32Array(6); crypto.getRandomValues(a); return [...a].map(x => ABC[x % ABC.length]).join(''); };
const cleanCode = s => String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);

/* ---------- adaptador de datos: cada campo se guarda como JSON (Firestore no admite listas dentro de listas) ---------- */
const enc = d => { const o = {}; for (const k in d) if (d[k] !== undefined) o[k] = JSON.stringify(d[k]); return o; };
const dec = d => { if (!d) return d; const o = {}; for (const k in d) { const v = d[k]; if (typeof v === 'string') { try { o[k] = JSON.parse(v); } catch (e) { o[k] = v; } } else o[k] = v; } return o; };
const wrap = s => ({ id: s.id, exists: s.exists(), data: () => (s.exists() ? dec(s.data()) : undefined), metadata: { fromCache: s.metadata.fromCache } });
function makeDb(code) {
  const P = 'ligas/' + code + '/';
  const dref = path => doc(fs, P + path);
  const docApi = path => ({
    id: path.split('/').pop(), path,
    async get() { return wrap(await getDoc(dref(path))); },
    async set(d) { await setDoc(dref(path), enc(d)); },
    async update(d) { await setDoc(dref(path), enc(d), { merge: true }); },
    async delete() { await deleteDoc(dref(path)); },
    // reserva corta para que un solo móvil haga cada tarea compartida (simular jornada, sortear un tramo…)
    async acquire({ holder, ttlMs }) {
      const lref = doc(fs, P + '_leases/' + path.replace(/\//g, '__'));
      try {
        return await runTransaction(fs, async tx => {
          const s = await tx.get(lref), now = Date.now(), L = s.exists() ? s.data() : null;
          if (L && L.exp > now && L.h !== holder) return { acquired: false };
          tx.set(lref, { h: holder, exp: now + (ttlMs || 5000) }); return { acquired: true };
        });
      } catch (e) { console.warn('lease', e); return { acquired: false }; }
    },
    onSnapshot(next, err) { return onSnapshot(dref(path), s => next(wrap(s)), err); }
  });
  const colApi = path => ({
    path, doc: id => docApi(path + '/' + (id || newCode() + Date.now().toString(36))),
    async get() { const q = await getDocs(collection(fs, P + path)); const docs = q.docs.map(wrap); return { docs, size: docs.length, empty: !docs.length }; },
    onSnapshot(next, err) { return onSnapshot(collection(fs, P + path), q => { const docs = q.docs.map(wrap); next({ docs, size: docs.length, empty: !docs.length }); }, err); }
  });
  return { doc: docApi, collection: colApi };
}
function makeUser(code, liga) {
  const uid = auth.currentUser.uid;
  return {
    id: async () => uid,
    isOwner: async () => liga.owner === uid,
    can: async () => true, canEdit: async () => true,
    async profiles(ids) {
      const out = {};
      await Promise.all(ids.map(async id => { try { const s = await getDoc(doc(fs, 'ligas/' + code + '/miembros/' + id)); if (s.exists()) out[id] = { name: s.data().name || '' }; } catch (e) {} }));
      return out;
    }
  };
}

/* ---------- pantalla de acceso (fuera de #app para no chocar con el juego) ---------- */
const gate = document.createElement('div'); gate.className = 'gate'; gate.setAttribute('role', 'dialog'); gate.setAttribute('aria-modal', 'true');
document.body.appendChild(gate); document.body.classList.add('gated');
let msg = '', busy = false, mode = 'start';
const host = location.host || "169-58-150-135.sslip.io";
const urlCode = cleanCode(new URLSearchParams(location.search).get('liga'));
function show(html) { gate.innerHTML = `<div class="gate-card"><div class="gate-head"><img src="img/comp/liga.webp" alt="" width="64" height="64"><div><h1>Liga de Amigos</h1><p>Tu liga de fútbol con tus amigos. La IA rellena el resto.</p></div></div>${html}${msg ? `<p class="gate-msg" role="alert">${esc(msg)}</p>` : ''}</div>`; const f = gate.querySelector('input,button.btn.y'); f && f.focus(); }
const authErr = e => {
  const c = e && e.code || '';
  if (c.includes('unauthorized-domain')) return 'Este dominio aún no está autorizado para entrar con Google. Usa email y contraseña mientras tanto.';
  if (c.includes('popup-closed') || c.includes('cancelled')) return '';
  if (c.includes('invalid-credential') || c.includes('wrong-password') || c.includes('user-not-found')) return 'Email o contraseña incorrectos.';
  if (c.includes('email-already-in-use')) return 'Ese email ya tiene cuenta: pulsa «Entrar».';
  if (c.includes('weak-password')) return 'La contraseña necesita al menos 6 caracteres.';
  if (c.includes('invalid-email')) return 'Ese email no es válido.';
  if (c.includes('network')) return 'Sin conexión. Revisa internet y vuelve a probar.';
  return 'No se ha podido entrar (' + (c || 'error') + ').';
};
function loginView() {
  show(`<button class="btn y gate-google" data-g="google">Entrar con Google</button>
  <div class="gate-or"><span>o con email</span></div>
  <form data-g="email" class="gate-form"><label class="f">Email<input type="email" id="g-email" autocomplete="email" required></label>
  <label class="f">Contraseña<input type="password" id="g-pass" autocomplete="current-password" minlength="6" required></label>
  <label class="f gate-name" ${mode === 'signup' ? '' : 'hidden'}>Tu nombre de míster<input type="text" id="g-name" maxlength="20" autocomplete="nickname"></label>
  <div class="gate-row"><button class="btn y" type="submit">${mode === 'signup' ? 'Crear cuenta' : 'Entrar'}</button><button class="btn ghost" type="button" data-g="toggle">${mode === 'signup' ? 'Ya tengo cuenta' : 'Crear cuenta'}</button></div></form>
  ${urlCode ? `<p class="small mute">Te han invitado a la liga <b>${esc(urlCode)}</b>. Entra y te unimos.</p>` : ''}`);
}
async function myLeagues() { try { const s = await getDoc(doc(fs, 'usuarios/' + auth.currentUser.uid)); return s.exists() ? (s.data().ligas || []) : []; } catch (e) { return []; } }
async function leaguesView() {
  const u = auth.currentUser, list = await myLeagues(), name = LS.get('lda-name') || u.displayName || '';
  show(`<p class="gate-hi">Hola${name ? ', <b>' + esc(name) + '</b>' : ''}.</p>
  ${list.length ? `<div class="gate-sec">Tus ligas</div><div class="gate-list">${list.map(l => `<button class="gate-lg" data-g="open" data-code="${esc(l.code)}"><b>${esc(l.name || 'Liga')}</b><span>${esc(l.code)}</span></button>`).join('')}</div>` : ''}
  <form data-g="join" class="gate-form"><div class="gate-sec">Unirme a una liga</div><label class="f">Código que te ha pasado tu amigo<input type="text" id="g-code" inputmode="latin" autocapitalize="characters" autocomplete="off" maxlength="6" value="${esc(urlCode)}" placeholder="Ej. K7P2QX"></label>
  ${name ? '' : '<label class="f">Tu nombre de míster<input type="text" id="g-name2" maxlength="20" required></label>'}
  <button class="btn y" type="submit">Unirme</button></form>
  <div class="gate-sec">O crea una nueva</div><button class="btn" data-g="create">Crear liga nueva</button>
  <p class="small mute gate-foot">Conectado como ${esc(u.email || 'invitado')} · <button class="link" data-g="logout">Cerrar sesión</button></p>`);
}
async function remember(code, name) {
  const uid = auth.currentUser.uid, list = (await myLeagues()).filter(l => l.code !== code);
  await setDoc(doc(fs, 'usuarios/' + uid), { ligas: [{ code, name: name || 'Liga' }, ...list].slice(0, 20) }, { merge: true });
}
async function joinAs(code, displayName) {
  const uid = auth.currentUser.uid, ref = doc(fs, 'ligas/' + code), s = await getDoc(ref);
  if (!s.exists()) throw Object.assign(new Error('nope'), { code: 'no-league' });
  const name = (displayName || LS.get('lda-name') || auth.currentUser.displayName || 'Míster').slice(0, 20);
  await setDoc(doc(fs, 'ligas/' + code + '/miembros/' + uid), { name, t: serverTimestamp() }, { merge: true });
  await remember(code, s.data().name);
  return s.data();
}
async function createLeague() {
  const uid = auth.currentUser.uid; let code = newCode();
  for (let i = 0; i < 5 && (await getDoc(doc(fs, 'ligas/' + code))).exists(); i++) code = newCode();
  await setDoc(doc(fs, 'ligas/' + code), { owner: uid, name: 'Liga de Amigos', created: serverTimestamp() });
  await joinAs(code);
  return code;
}
let started = false;
async function enter(code) {
  const ref = doc(fs, 'ligas/' + code), s = await getDoc(ref); if (!s.exists()) throw Object.assign(new Error('nope'), { code: 'no-league' });
  const liga = s.data(); LS.set('lda-liga', code);
  if (urlCode && location.search) history.replaceState(null, '', location.pathname);
  window.LIGA_WEB = {
    code, host, link: location.origin + location.pathname + '?liga=' + code,
    switch: () => { LS.set('lda-liga', null); location.reload(); },
    logout: async () => { LS.set('lda-liga', null); await signOut(auth); location.reload(); }
  };
  const db = makeDb(code), user = makeUser(code, liga);
  window.claude = { use: async n => (n === 'db' ? db : n === 'user' ? user : null) };
  // el nombre de la liga se copia al documento de la liga para que salga en "Tus ligas"
  db.doc('liga/config').onSnapshot(c => { const n = c.exists && c.data()?.name; if (n && n !== liga.name) { liga.name = n; if (liga.owner === auth.currentUser.uid) setDoc(ref, { name: n }, { merge: true }).catch(() => {}); remember(code, n).catch(() => {}); } }, () => {});
  gate.remove(); document.body.classList.remove('gated'); started = true;
  window.__claudeReady && window.__claudeReady();
}
gate.addEventListener('click', async e => {
  const b = e.target.closest('[data-g]'); if (!b || busy || b.tagName === 'FORM') return;
  const g = b.dataset.g; msg = '';
  try {
    busy = true;
    if (g === 'google') { try { await signInWithPopup(auth, new GoogleAuthProvider()); } catch (err) { if (String(err.code).includes('popup-blocked')) await signInWithRedirect(auth, new GoogleAuthProvider()); else throw err; } }
    if (g === 'toggle') { mode = mode === 'signup' ? 'login' : 'signup'; loginView(); }
    if (g === 'logout') { await signOut(auth); }
    if (g === 'open') await enter(b.dataset.code);
    if (g === 'create') { b.disabled = true; b.textContent = 'Creando…'; const code = await createLeague(); await enter(code); }
  } catch (err) { msg = err.code === 'no-league' ? 'Esa liga ya no existe.' : authErr(err); if (!started) (auth.currentUser ? leaguesView() : loginView()); }
  finally { busy = false; }
});
gate.addEventListener('submit', async e => {
  e.preventDefault(); if (busy) return; const f = e.target, g = f.dataset.g; msg = '';
  try {
    busy = true;
    if (g === 'email') {
      const em = gate.querySelector('#g-email').value.trim(), pw = gate.querySelector('#g-pass').value;
      if (mode === 'signup') { const nm = gate.querySelector('#g-name').value.trim(); const c = await createUserWithEmailAndPassword(auth, em, pw); if (nm) { LS.set('lda-name', nm); await updateProfile(c.user, { displayName: nm }); } }
      else await signInWithEmailAndPassword(auth, em, pw);
    }
    if (g === 'join') {
      const code = cleanCode(gate.querySelector('#g-code').value), n2 = gate.querySelector('#g-name2'); if (n2 && n2.value.trim()) LS.set('lda-name', n2.value.trim());
      if (code.length !== 6) { msg = 'El código tiene 6 letras y números.'; return leaguesView(); }
      await joinAs(code); await enter(code);
    }
  } catch (err) { msg = err.code === 'no-league' ? 'No hay ninguna liga con ese código. Revísalo con tu amigo.' : authErr(err); auth.currentUser ? leaguesView() : loginView(); }
  finally { busy = false; }
});
getRedirectResult(auth).catch(err => { msg = authErr(err); });
show('<p class="mute">Cargando…</p>');
onAuthStateChanged(auth, async u => {
  if (started) { if (!u) location.reload(); return; }
  if (!u) return loginView();
  const last = urlCode || LS.get('lda-liga');
  if (last) { try { if (urlCode) await joinAs(urlCode); await enter(last); return; } catch (e) { LS.set('lda-liga', null); if (e.code === 'no-league') msg = 'No hay ninguna liga con ese código.'; } }
  leaguesView();
});
