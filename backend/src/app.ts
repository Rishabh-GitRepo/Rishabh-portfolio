import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { resumeRouter } from './routes/resume.js';
import { errorHandler } from './middleware/error.js';

export function createApp() {
  const app = express();
  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? true }));
  app.use(express.json({ limit: '100kb' }));
  app.use(morgan('tiny'));

  app.use('/api', rateLimit({ windowMs: 60_000, max: 120 }));

  app.get('/api/health', (_req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
  app.use('/api', resumeRouter);

  app.use(errorHandler);
  return app;
}