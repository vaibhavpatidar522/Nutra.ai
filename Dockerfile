# Dockerfile

# --- builder stage ---
    FROM node:20-alpine AS builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm install -g dotenv-cli
    RUN npm install
    COPY . .
    COPY .env.production .env.production
    RUN dotenv -e .env.production -- npm run build
    
    # --- final stage ---
    FROM node:20-alpine
    WORKDIR /app
    COPY --from=builder /app ./
    COPY .env.runtime .env.runtime
    RUN npm install --omit=dev
    EXPOSE 3000
    CMD ["npm", "start"]
    