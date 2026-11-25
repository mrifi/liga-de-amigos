# Liga de Amigos

Juego de gestión de fútbol estilo Top Eleven para jugar una liga con tus amigos. Los equipos que no coge nadie los lleva la IA.

- **Web:** HTML + JavaScript sin compilación (carpeta `public/`), desplegada en Netlify.
- **Datos y cuentas:** Firebase (Firestore + Authentication), proyecto `liga-de-amigos-rifi`.

## Cómo se juega con amigos

1. Entra en la web, inicia sesión (Google o email) y pulsa **Crear liga nueva**.
2. Configura la liga (nombre, número de equipos, hora del partido diario) y coge tu equipo.
3. En **Club → Mi club → Código de la liga** pulsa **Invitar amigos**: les llega el enlace con el código de 6 letras.
4. Cada amigo entra con su cuenta, pone el código y coge un equipo libre.

## Partidos

- Liga cada día a la misma hora; copa y Champions en días alternos.
- Cada partido dura 4 minutos en directo y todos lo veis a la vez. El resultado se sortea por tramos justo antes de jugarse y nadie puede adelantarlo.
- Verlo en directo da +8 % de posesión; jugar en casa también suma.

## Estructura

| Archivo | Qué hace |
|---|---|
| `public/engine.js` | Motor: simulación, economía, copa, Champions |
| `public/matchviz.js` | Visor 2D/3D del partido |
| `public/app.js` | Interfaz y lógica compartida (sincronización, mercado, tutorial…) |
| `public/web.js` | Acceso, códigos de liga y adaptador de Firestore |
| `public/firebase-config.js` | Configuración pública de Firebase |
| `firestore.rules` | Reglas: solo los miembros de una liga leen y escriben en ella |

## Desplegar

- Web: Netlify publica la carpeta `public/` (ver `netlify.toml`).
- Reglas de Firestore: `firebase deploy --only firestore:rules --project liga-de-amigos-rifi`.
- Para entrar con Google desde el dominio de Netlify, añádelo en Firebase → Authentication → Settings → Authorized domains.

## Bot de Telegram (@LigaDeAmigosRifiBot)

Avisa 10 min antes de cada partido, publica resultados con goleadores y clasificación, ofertas y el muro.
En el VPS: `cd /var/www/liga && git pull && bash deploy/bot.sh` (la primera vez pide el token de BotFather y lo guarda en /etc/liga-bot.env).
En Telegram: añade el bot a vuestro grupo y escribe `/vincular CODIGO`.

## Actualización automática
El VPS baja los cambios de GitHub cada minuto (deploy/auto.sh) y deja el estado en /estado.json.
