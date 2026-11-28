#!/bin/bash
# Solo lectura: foto del consumo del VPS en public/recursos.json (no reinicia ni cambia nada).
cd /var/www/liga || exit 1
{
echo "== fecha"; date -Is
echo "== uptime"; uptime
echo "== cpus"; nproc
echo "== mem"; free -m
echo "== disco"; df -h -x tmpfs -x overlay -x devtmpfs
echo "== docker"; docker stats --no-stream --format '{{.Name}}|{{.CPUPerc}}|{{.MemUsage}}|{{.MemPerc}}|{{.NetIO}}' 2>&1
echo "== docker-disco"; docker system df 2>&1
echo "== top"; ps -eo pid,comm,%cpu,%mem,rss --sort=-%cpu | head -12
echo "== red"; cat /proc/net/dev | grep -vE 'lo:|docker|veth|br-'
echo "== vnstat"; command -v vnstat >/dev/null && vnstat -m 2>&1 | tail -8 || echo "sin vnstat"
} > /tmp/recursos.txt 2>&1
python3 -c 'import json,sys;print(json.dumps({"txt":open("/tmp/recursos.txt").read()}))' > public/recursos.json 2>/dev/null || cp /tmp/recursos.txt public/recursos.json
