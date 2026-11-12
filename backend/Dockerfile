# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Using npm install (as fixed earlier)
RUN npm install

# Stage 2: Build the application
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Generate Prisma Client & build TypeScript
RUN npm run db:generate && npm run build

# Stage 3: Production Runtime
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/prisma ./prisma

# (Optional) Copy prisma config if it actually exists in your repo
# COPY --from=build /app/prisma7.config.ts ./prisma7.config.ts

USER node
EXPOSE 4000

# ONLY start the server. Do NOT run db:push or db:seed here.
CMD ["npm", "start"]