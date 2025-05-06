# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Install dotenv-cli for build-time env loading
RUN npm install -g dotenv-cli

COPY package*.json ./
RUN npm install

COPY . .
COPY .env.production .env.production

# Use dotenv to load env vars during build
RUN dotenv -e .env.production -- npm run build

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./
COPY .env.runtime .env.runtime

RUN npm install --omit=dev

EXPOSE 3000

CMD ["sh", "-c", "dotenv -e .env.runtime -- npm start"]
