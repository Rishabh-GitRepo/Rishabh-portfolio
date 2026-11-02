# Rishabh Portfolio

A portfolio website with a React frontend and an Express API backed by PostgreSQL and Prisma.

## Run the full application with Docker

1. Copy `.env.example` to `.env` in the project root. Update the PostgreSQL values if needed.
2. From the project root, start the stack:

   ```sh
   docker compose up --build
   ```

   Compose starts PostgreSQL, builds the backend and frontend, applies the Prisma schema, and seeds the portfolio data when the backend starts. The seed skips databases that already contain a resume profile.
3. Open the site at `http://localhost:5173`. The API is available at `http://localhost:4000`; check `http://localhost:4000/api/health`.

Stop the stack with `docker compose down`. To also remove the database volume and its data, use `docker compose down -v`.

## Run the backend locally

Docker is still needed for the PostgreSQL service, unless you have a local PostgreSQL server available.

1. Copy `.env.example` to `.env` in the project root and start the database:

   ```sh
   docker compose up -d db
   ```

2. Copy `backend/.env.example` to `backend/.env`.
3. In a terminal, install the backend dependencies and prepare the database:

   ```sh
   cd backend
   npm ci
   npm run db:generate
   npm run db:push
   npm run db:seed
   npm run dev
   ```

   The API listens on port `4000`. For a production build, run `npm run build` followed by `npm start`.

## Run the frontend locally

With the backend available on port `4000`, copy `frontend/.env.example` to `frontend/.env`, then open another terminal:

```sh
cd frontend
npm ci
npm run dev
```

Open the Vite URL shown in the terminal (typically `http://localhost:5173`).
