import type { Resume } from '../types';

const API = import.meta.env.VITE_API_URL ?? '';

export async function fetchResume(signal?: AbortSignal): Promise<Resume> {
  const r = await fetch(`${API}/api/resume`, { signal });
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