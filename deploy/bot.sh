#!/bin/bash
# Instala o actualiza el bot de Telegram de Liga de Amigos en el VPS.
# Uso: cd /var/www/liga && git pull && bash deploy/bot.sh
set -e
cd "$(dirname "$0")/.."
ENVF=/etc/liga-bot.env
if [ ! -s "$ENVF" ] || [ "$1" = "token" ]; then
  echo "Pega el token del bot (el que te dio BotFather) y pulsa Enter."
  echo "(No se verá nada mientras lo pegas, es normal)"
  read -rs TK; echo
  TK=$(echo "$TK" | tr -d '[:space:]')
  case "$TK" in *:*) ;; *) echo "Eso no parece un token (debe tener dos puntos). Vuelve a lanzar el script."; exit 1;; esac
  umask 077; printf 'BOT_TOKEN=%s\nSITE_URL=https://169-58-150-135.sslip.io\n' "$TK" > "$ENVF"
  echo "Token guardado en $ENVF (solo lo puede leer root)."
fi
echo "Construyendo el bot..."
docker build -q -t liga-bot -f bot/Dockerfile . >/dev/null
docker rm -f liga-bot >/dev/null 2>&1 || true
docker run -d --name liga-bot --restart unless-stopped --env-file "$ENVF" -v liga-bot-data:/data -v liga-news:/news-out liga-bot >/dev/null
sleep 8
docker logs --tail 15 liga-bot
if docker logs liga-bot 2>&1 | grep -q "Bot en marcha"; then
  echo; echo "LISTO: el bot está funcionando. Ahora en Telegram: añádelo a vuestro grupo y escribe /vincular CODIGO"
else
  echo; echo "Algo ha fallado: hazme captura de lo de arriba."
fi
