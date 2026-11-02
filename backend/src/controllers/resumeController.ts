import type { RequestHandler } from 'express';
import { getFullResume, getSection, getProject } from '../services/resumeService.js';
import { sectionParam, projectIdParam } from '../schemas/resume.js';

export const getResume: RequestHandler = async (_req, res, next) => {
  try { res.json(await getFullResume()); } catch (e) { next(e); }
};

export const listSections: RequestHandler = (_req, res) => {
  res.json(['education', 'experience', 'projects', 'skills', 'social-links']);
};

export const getSectionHandler: RequestHandler = async (req, res, next) => {
  try {
    const { section } = sectionParam.parse(req.params);
    res.json(await getSection(section));
  } catch (e) { next(e); }
};

export const getProjectHandler: RequestHandler = async (req, res, next) => {
  try {
    const { id } = projectIdParam.parse(req.params);
    res.json(await getProject(id));
  } catch (e) { next(e); }
};