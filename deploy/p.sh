#!/bin/bash
# Sirve el juego desde un contenedor "liga-web" en la red de openreply y le pasa el dominio desde su Caddy.
F=/srv/openreply/deploy/Caddyfile
DOMAIN=169-58-150-135.sslip.io
NET=$(docker inspect openreply-caddy-1 --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}} {{end}}' | awk '{print $1}')
echo "red: $NET"
docker inspect liga-web >/dev/null 2>&1 || docker run -d --name liga-web --restart unless-stopped --network "$NET" -v /var/www/liga/public:/srv:ro caddy:2-alpine caddy file-server --root /srv --listen :80 >/dev/null || { echo "ERROR creando liga-web"; exit 1; }
echo -n "liga-web desde openreply: "; docker exec openreply-caddy-1 wget -qO- -T 3 http://liga-web/ | head -c 15; echo
cp "$F" "$F.bak2"
sed -E "s#reverse_proxy [0-9.]+:8081#reverse_proxy liga-web:80#" "$F.bak2" > /tmp/cf && cat /tmp/cf > "$F"
grep -n -A3 "$DOMAIN" "$F"
OUT=$(docker exec openreply-caddy-1 caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile 2>&1)
if [ $? -eq 0 ]; then
  docker exec openreply-caddy-1 caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null 2>&1 && echo "proxy recargado"
else
  cat "$F.bak2" > "$F"; echo "config no valida: restaurada"; echo "$OUT" | grep -v '"level":"info"' | tail -4; exit 1
fi
systemctl disable --now caddy >/dev/null 2>&1
sleep 3
curl -s -o /dev/null -w "web: %{http_code}\n" "https://$DOMAIN/"
