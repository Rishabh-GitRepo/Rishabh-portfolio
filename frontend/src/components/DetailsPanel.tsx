import type { Resume, Selection } from '../types';
import { ExperienceDetails } from './ExperienceDetails';
import { EducationDetails } from './EducationDetails';
import { ProjectDetails } from './ProjectDetails';
import { ProfileDetails } from './ProfileDetails';
import { ExternalLink } from './ExternalLink';

export function DetailsPanel({ resume, selection }: { resume: Resume; selection: Selection }) {
  return (
    <aside className="details" aria-live="polite" aria-label="Contextual details">
      {(() => {
        switch (selection.kind) {
          case 'none':
            return <ProfileDetails profile={resume.profile} />;
          case 'profile':
            return <ProfileDetails profile={resume.profile} />;
          case 'contact': {
            const map = {
              email: ['Email', `mailto:${resume.profile.email}`, resume.profile.email],
              phone: ['Phone', `tel:${resume.profile.phone}`, resume.profile.phone],
              linkedin: ['LinkedIn', resume.profile.linkedin, 'View profile'],
              github: ['GitHub', resume.profile.github, 'View repositories'],
            } as const;
            const [label, href, text] = map[selection.field];
            return <section className="block"><h2>{label}</h2><p><ExternalLink href={href}>{text}</ExternalLink></p></section>;
          }
          case 'education': {
            const e = resume.education.find(x => x.id === selection.id);
            return e ? <EducationDetails data={e} /> : <p className="empty">No details.</p>;
          }
          case 'experience': {
            const x = resume.experience.find(v => v.id === selection.id);
            return x ? <ExperienceDetails data={x} /> : <p className="empty">No details.</p>;
          }
          case 'project': {
            const p = resume.projects.find(v => v.id === selection.id);
            return p ? <ProjectDetails data={p} /> : <p className="empty">No details.</p>;
          }
          case 'skills': {
            const s = resume.skills.find(v => v.category === selection.category);
            return s ? (
              <section className="block">
                <h2>{s.category}</h2>
                <ul className="chip-list">{s.items.map(i => <li key={i} className="chip">{i}</li>)}</ul>
              </section>
            ) : <p className="empty">No details.</p>;
          }
        }
      })()}
    </aside>
  );
}