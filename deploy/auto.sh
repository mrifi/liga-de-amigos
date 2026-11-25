#!/bin/bash
# Lo lanza cron cada minuto: baja los cambios de GitHub y, si tocan al bot o al servidor web, los aplica solo.
cd /var/www/liga || exit 1
exec 9>/tmp/liga-auto.lock; flock -n 9 || exit 0
before=$(git rev-parse HEAD)
git pull -q || { echo "$(date -Is) git pull fallo"; exit 1; }
after=$(git rev-parse HEAD)
[ "$before" = "$after" ] && [ -f public/estado.json ] && exit 0
changed=$(git diff --name-only "$before" "$after")
echo "$(date -Is) $before -> $after"
bot=skip; web=skip; extra=skip
if [ "$1" = "all" ] || echo "$changed" | grep -qE '^(bot/|public/(engine|data|firebase-config)\.js|deploy/bot\.sh)'; then
  if [ -s /etc/liga-bot.env ]; then if bash deploy/bot.sh </dev/null >/tmp/liga-bot-deploy.log 2>&1; then docker logs liga-bot 2>&1 | tail -20 | grep -q "Bot en marcha" && bot=ok || bot=fallo-arranque; else bot=fallo-build; tail -c 600 /tmp/liga-bot-deploy.log | tr -d '"\\' | tr "\n" " " > /tmp/liga-bot-err.txt; fi; else bot=sin-token; fi
fi
if [ "$1" = "all" ] || echo "$changed" | grep -qE '^deploy/(liga\.Caddyfile|w\.sh)'; then bash deploy/w.sh >/tmp/liga-web-deploy.log 2>&1 && web=ok || web=fallo; fi
if echo "$changed" | grep -q '^deploy/run-once\.sh' && [ -f deploy/run-once.sh ]; then bash deploy/run-once.sh >/tmp/liga-run-once.log 2>&1 && extra=ok || extra=fallo; fi
running=$(docker inspect -f '{{.State.Running}}' liga-bot 2>/dev/null || echo no)
err=""; [ "$bot" = "fallo-build" ] && err=$(cat /tmp/liga-bot-err.txt 2>/dev/null | cut -c1-500)
printf '{"commit":"%s","at":"%s","bot":"%s","web":"%s","extra":"%s","botRunning":"%s","err":"%s"}\n' "$(git rev-parse --short HEAD)" "$(date -Is)" "$bot" "$web" "$extra" "$running" "$err" > public/estado.json
echo "$(date -Is) bot=$bot web=$web extra=$extra"
