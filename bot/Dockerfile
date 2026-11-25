FROM node:20-alpine
# Chromium para dibujar las noticias en imagen + fuentes (emojis, serif)
RUN apk add --no-cache chromium nss freetype harfbuzz ca-certificates ttf-dejavu font-noto-emoji
ENV PUPPETEER_SKIP_DOWNLOAD=1 CHROME_PATH=/usr/bin/chromium-browser
WORKDIR /app
COPY bot/package.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY bot/index.mjs ./
COPY bot/news ./news
COPY public/img ./img
COPY public/data.js public/engine.js public/firebase-config.js ./game/
ENV TZ=Europe/Madrid
CMD ["node", "index.mjs"]
