import { Router } from 'express';
import {
  getResume, listSections, getSectionHandler, getProjectHandler,
} from '../controllers/resumeController.js';

export const resumeRouter = Router();
resumeRouter.get('/resume', getResume);
resumeRouter.get('/resume/sections', listSections);
resumeRouter.get('/resume/sections/:section', getSectionHandler);
resumeRouter.get('/education', getSectionHandler.bind(null) /* route alias */);
resumeRouter.get('/projects', getSectionHandler.bind(null));
resumeRouter.get('/projects/:id', getProjectHandler);