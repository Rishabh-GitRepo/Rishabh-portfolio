import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: 'ValidationError', issues: err.issues });
  }
  const status = (err as { status?: number }).status ?? 500;
  if (status >= 500) console.error(err);
  res.status(status).json({ error: err.message ?? 'InternalServerError' });
};