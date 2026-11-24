#!/bin/bash
# Instala Liga de Amigos en un VPS Ubuntu/Debian limpio (Contabo).
# Uso (como root):  curl -fsSL https://raw.githubusercontent.com/mrifi/liga-de-amigos/main/deploy/vps-setup.sh | bash
# Sirve la web con Caddy y HTTPS automático en https://<ip-con-guiones>.sslip.io
# y se actualiza sola desde GitHub cada 5 minutos.
set -euo pipefail
REPO="${REPO:-https://github.com/mrifi/liga-de-amigos.git}"
DIR=/var/www/liga
IP=$(curl -fsS4 https://api.ipify.org || hostname -I | awk '{print $1}')
DOMAIN="${DOMAIN:-$(echo "$IP" | tr . -).sslip.io}"

echo "==> Paquetes"
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y git curl debian-keyring debian-archive-keyring apt-transport-https gnupg ufw
if ! command -v caddy >/dev/null; then
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' > /etc/apt/sources.list.d/caddy-stable.list
  apt-get update -y && apt-get install -y caddy
fi

echo "==> Código"
if [ -d "$DIR/.git" ]; then git -C "$DIR" pull --ff-only; else git clone --depth 1 "$REPO" "$DIR"; fi

echo "==> Caddy ($DOMAIN)"
cat > /etc/caddy/Caddyfile <<CADDY
$DOMAIN, http://$IP {
  root * $DIR/public
  encode gzip zstd
  file_server
  header {
    X-Content-Type-Options nosniff
    Referrer-Policy strict-origin-when-cross-origin
  }
  @js path *.js
  header @js Cache-Control "no-cache"
  @img path /img/*
  header @img Cache-Control "public, max-age=604800"
}
CADDY
systemctl enable --now caddy
systemctl reload caddy

echo "==> Actualización automática cada 5 minutos"
echo "*/5 * * * * root git -C $DIR pull --ff-only -q >/dev/null 2>&1" > /etc/cron.d/liga-update

echo "==> Cortafuegos (SSH, HTTP, HTTPS)"
ufw allow OpenSSH >/dev/null; ufw allow 80/tcp >/dev/null; ufw allow 443/tcp >/dev/null; ufw --force enable >/dev/null

echo
echo "Listo: https://$DOMAIN"
