#!/bin/bash
# Instala la actualización automática (una sola vez). Uso: cd /var/www/liga && git pull && bash deploy/install-auto.sh
cd /var/www/liga || exit 1
chmod +x deploy/*.sh
echo '* * * * * root /var/www/liga/deploy/auto.sh >> /var/log/liga-auto.log 2>&1' > /etc/cron.d/liga-update
chmod 644 /etc/cron.d/liga-update
echo "Aplicando todo por primera vez (tarda 1-2 minutos)..."
bash deploy/auto.sh all
cat public/estado.json
echo; echo "LISTO: a partir de ahora el servidor se actualiza solo cada minuto."
