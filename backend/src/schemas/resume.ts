import { z } from 'zod';

export const sectionParam = z.object({
  section: z.enum(['education', 'experience', 'projects', 'skills', 'social-links']),
});

export const projectIdParam = z.object({
  id: z.coerce.number().int().positive(),
});