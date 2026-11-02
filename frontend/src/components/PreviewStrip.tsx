import { BookOpen, Github, Globe2, Linkedin } from 'lucide-react';
import { ExternalLink } from './ExternalLink';
import type { Resume } from '../types';

export function PreviewStrip({ resume }: { resume: Resume }) {
  const edu = resume.education[0];
  const proj = resume.projects[0];
  const profile = resume.profile;

  return (
    <section className="preview-strip" aria-label="Quick previews">
      <PreviewCard label="1. Education Hover/Click" color="violet" icon={<BookOpen size={16}/>}>
        <div className="edu-preview">
          <div className="edu-icon" aria-hidden>🎓</div>
          <div>
            <strong>{edu?.institution}</strong>
            <p>{edu?.degree}</p>
          </div>
        </div>
        {edu?.website && <ExternalLink href={edu.website}>{edu.website}</ExternalLink>}
      </PreviewCard>

      <PreviewCard label="2. Project Link Hover" color="green" icon={<Github size={16}/>}>
        <strong>{proj?.title}</strong>
        <p>{proj?.description}</p>
        {proj?.githubUrl && (
          <ExternalLink href={proj.githubUrl}>
            <Github size={12}/> {proj.githubUrl.replace('https://', '')}
          </ExternalLink>
        )}
      </PreviewCard>

      <PreviewCard label="3. Deployed Website Preview" color="orange" icon={<Globe2 size={16}/>}>
        <div className="thumb" role="img" aria-label="Website thumbnail" />
        <strong>{proj?.title}</strong>
        {proj?.liveUrl && (
          <ExternalLink href={proj.liveUrl}>
            <Globe2 size={12}/> {proj.liveUrl.replace('https://', '')}
          </ExternalLink>
        )}
      </PreviewCard>

      <PreviewCard label="4. LinkedIn Preview" color="blue" icon={<Linkedin size={16}/>}>
        <div className="linkedin-preview">
          <div className="avatar" aria-hidden>{profile.name.charAt(0)}</div>
          <div>
            <strong>{profile.name}</strong>
            <p>{profile.headline}</p>
            <small>500+ connections</small>
          </div>
        </div>
        <ExternalLink href={profile.linkedin} className="btn-outline">
          <Linkedin size={12}/> View LinkedIn Profile
        </ExternalLink>
      </PreviewCard>
    </section>
  );
}

function PreviewCard({
  label, color, icon, children,
}: { label: string; color: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className={`preview-card color-${color}`}>
      <div className="card-eyebrow">{icon} {label}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}