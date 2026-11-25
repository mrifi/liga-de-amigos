#!/bin/bash
# Rehace el contenedor liga-web con su Caddyfile (juego + login de Google por el propio dominio).
cd "$(dirname "$0")/.."
NET=$(docker inspect openreply-caddy-1 --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}} {{end}}' | awk '{print $1}')
docker run --rm -v /var/www/liga/deploy/liga.Caddyfile:/etc/caddy/Caddyfile:ro caddy:2-alpine caddy validate --config /etc/caddy/Caddyfile >/dev/null 2>&1 || { echo "Caddyfile no valido, no toco nada"; exit 1; }
docker rm -f liga-web >/dev/null 2>&1
docker run -d --name liga-web --restart unless-stopped --network "$NET" -v /var/www/liga/public:/srv:ro -v liga-news:/srv-news:ro -v /var/www/liga/deploy/liga.Caddyfile:/etc/caddy/Caddyfile:ro caddy:2-alpine >/dev/null || { echo "ERROR creando liga-web"; exit 1; }
sleep 3
curl -s -o /dev/null -w "web: %{http_code}\n" https://169-58-150-135.sslip.io/
curl -s -o /dev/null -w "login google: %{http_code}\n" https://169-58-150-135.sslip.io/__/auth/handler.js
