#!/bin/bash
# Limpieza de la caché de build de Docker (no toca imágenes, contenedores ni volúmenes)
cd /var/www/liga || exit 1
{ echo "== antes"; docker system df 2>&1; df -h / | tail -1
  echo "== prune"; docker builder prune -f 2>&1 | tail -2
  echo "== despues"; docker system df 2>&1; df -h / | tail -1
  echo "== contenedores"; docker ps --format '{{.Names}} {{.Status}}' 2>&1; } > /tmp/limpieza.txt 2>&1
python3 -c 'import json;print(json.dumps({"txt":open("/tmp/limpieza.txt").read()}))' > public/limpieza.json
