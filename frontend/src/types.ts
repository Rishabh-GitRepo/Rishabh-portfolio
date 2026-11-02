export type Education = {
  id: string;
  institution: string;
  degree: string;
  dates: string;
  grade?: string;
  description: string;
  website?: string;
  image?: string;
};

export type Experience = {
  id: string;
  company: string;
  jobTitle: string;
  dates: string;
  location: string;
  durationLabel?: string;
  responsibilities: string[];
  technologies: string[];
  keyLearnings?: string;
  about?: string;
  industry?: string;
  employees?: string;
  headquarters?: string;
  website?: string;
  logo?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
  highlights: string[];
  year?: string;
};

export type SkillGroup = { category: string; items: string[] };

export type Profile = {
  name: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  resumePdfUrl: string;
};

export type Resume = {
  profile: Profile;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  achievements: string[];
};

export type Selection =
  | { kind: 'none' }
  | { kind: 'profile' }
  | { kind: 'contact'; field: 'email' | 'phone' | 'linkedin' | 'github' }
  | { kind: 'education'; id: string }
  | { kind: 'experience'; id: string }
  | { kind: 'project'; id: string }
  | { kind: 'skills'; category: string };