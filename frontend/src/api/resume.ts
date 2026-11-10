import type { Resume } from '../types';

export async function fetchResume(signal?: AbortSignal): Promise<Resume> {
  const r = await fetch('/api/resume', { signal });
  if (!r.ok) throw new Error(`Failed to load resume (${r.status})`);
  const raw = await r.json();
  // Backend field names align with Resume types.
  return {
    profile: {
      ...raw.profile,
      resumePdfUrl: raw.profile.resumePdfUrl,
    },
    education: raw.education,
    experience: raw.experience,
    projects: raw.projects,
    skills: raw.skills,
    achievements: [],
  };
}