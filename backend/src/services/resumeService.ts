import { prisma } from '../lib/prisma.js';

export async function getFullResume() {
  const [profile, education, experience, projects, skills, socialLinks] = await Promise.all([
    prisma.resumeProfile.findFirst(),
    prisma.education.findMany({ orderBy: { id: 'asc' } }),
    prisma.experience.findMany({ orderBy: { id: 'asc' } }),
    prisma.project.findMany({ orderBy: { id: 'asc' } }),
    prisma.skill.findMany({ orderBy: { category: 'asc' } }),
    prisma.socialLink.findMany(),
  ]);
  if (!profile) {
    const err = new Error('Resume not found') as Error & { status?: number };
    err.status = 404;
    throw err;
  }
  return { profile, education, experience, projects, skills, socialLinks };
}

export async function getSection(section: string) {
  switch (section) {
    case 'education':  return prisma.education.findMany({ orderBy: { id: 'asc' } });
    case 'experience': return prisma.experience.findMany({ orderBy: { id: 'asc' } });
    case 'projects':   return prisma.project.findMany({ orderBy: { id: 'asc' } });
    case 'skills':     return prisma.skill.findMany({ orderBy: { category: 'asc' } });
    case 'social-links': return prisma.socialLink.findMany();
    default: throw Object.assign(new Error('Unknown section'), { status: 404 });
  }
}

export async function getProject(id: number) {
  const p = await prisma.project.findUnique({ where: { id } });
  if (!p) throw Object.assign(new Error('Project not found'), { status: 404 });
  return p;
}