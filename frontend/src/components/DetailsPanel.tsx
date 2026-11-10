import type { Resume, Selection } from '../types';
import { ExperienceDetails } from './ExperienceDetails';
import { EducationDetails } from './EducationDetails';
import { ProjectDetails } from './ProjectDetails';
import { ProfileDetails } from './ProfileDetails';
import { ExternalLink } from './ExternalLink';

export function DetailsPanel({ resume, selection }: { resume: Resume; selection: Selection }) {
  return (
    <aside id="details-panel" className="details" aria-live="polite" aria-label="Selected resume details">
      {(() => {
        switch (selection.kind) {
          case 'none':
            return resume.experience[0]
              ? <ExperienceDetails data={resume.experience[0]} />
              : <ProfileDetails profile={resume.profile} />;
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
            const education = resume.education.find(item => String(item.id) === String(selection.id));
            return education
              ? <EducationDetails data={education} />
              : <p className="empty">No education details available.</p>;
          }
          case 'experience': {
            const experience = resume.experience.find(item => String(item.id) === String(selection.id));
            return experience
              ? <ExperienceDetails data={experience} />
              : <p className="empty">No experience details available.</p>;
          }
          case 'project': {
            const project = resume.projects.find(item => String(item.id) === String(selection.id));
            return project
              ? <ProjectDetails data={project} />
              : <p className="empty">No project details available.</p>;
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