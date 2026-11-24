#!/bin/bash
# Sirve el juego desde un contenedor "liga-web" en la red de openreply y le pasa el dominio desde su Caddy.
F=/srv/openreply/deploy/Caddyfile
DOMAIN=169-58-150-135.sslip.io
NET=$(docker inspect openreply-caddy-1 --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}} {{end}}' | awk '{print $1}')
echo "red: $NET"
docker rm -f liga-web >/dev/null 2>&1
docker run -d --name liga-web --restart unless-stopped --network "$NET" -v /var/www/liga/public:/srv:ro caddy:2-alpine caddy file-server --root /srv --listen :80 >/dev/null || { echo "ERROR creando liga-web"; exit 1; }
cp "$F" "$F.bak2"
# deja un solo bloque del juego apuntando al contenedor
python3 - "$F" "$DOMAIN" <<'PY'
import sys,re
f,d=sys.argv[1],sys.argv[2]; s=open(f).read()
s=re.sub(r'\n*'+re.escape(d)+r' \{[^}]*\}\n?','\n',s)
s=s.rstrip('\n')+'\n\n'+d+' {\n  encode gzip\n  reverse_proxy liga-web:80\n}\n'
open(f,'r+').write(s) if False else None
with open(f,'r+') as h: h.seek(0); h.write(s); h.truncate()
PY
if docker exec openreply-caddy-1 caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null 2>&1; then
  docker exec openreply-caddy-1 caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null 2>&1 && echo "proxy recargado"
else
  cat "$F.bak2" > "$F"; echo "config no valida: restaurada"; exit 1
fi
systemctl disable --now caddy >/dev/null 2>&1
sleep 3
curl -s -o /dev/null -w "web: %{http_code}\n" "https://$DOMAIN/"
