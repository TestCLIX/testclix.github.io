FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && \
    case "$(apk --print-arch)" in \
        aarch64) npm install @rollup/rollup-linux-arm64-musl @img/sharp-linuxmusl-arm64 ;; \
        x86_64) npm install @rollup/rollup-linux-x64-musl @img/sharp-linuxmusl-x64 ;; \
    esac

FROM deps AS build

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

COPY --from=build /app ./

EXPOSE 4321

CMD ["./node_modules/.bin/astro", "preview", "--host", "0.0.0.0", "--port", "4321"]
