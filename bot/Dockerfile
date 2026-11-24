FROM node:20-alpine
WORKDIR /app
COPY bot/package.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY bot/index.mjs ./
COPY public/data.js public/engine.js public/firebase-config.js ./game/
ENV TZ=Europe/Madrid
CMD ["node", "index.mjs"]
