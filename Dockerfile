FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && \
    npm install @rollup/rollup-linux-arm64-musl @img/sharp-linuxmusl-arm64

EXPOSE 4321

CMD ["npx", "astro", "dev", "--host"]
