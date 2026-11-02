import type { Resume, Selection } from '../types';
import { ExternalLink } from './ExternalLink';

type Props = {
  resume: Resume;
  preview: Selection;
  onHover: (s: Selection) => void;
  onLeave: () => void;
  onSelect: (s: Selection) => void;
};

const isActive = (a: Selection, b: Selection) => JSON.stringify(a) === JSON.stringify(b);

export function ResumePanel({ resume, preview, onHover, onLeave, onSelect }: Props) {
  const { profile } = resume;

  const interactive = (s: Selection): React.HTMLAttributes<HTMLElement> => ({
    tabIndex: 0,
    role: 'button',
    'aria-pressed': isActive(preview, s),
    onMouseEnter: () => onHover(s),
    onMouseLeave: onLeave,
    onFocus: () => onHover(s),
    onBlur: onLeave,
    onClick: () => onSelect(s),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(s); }
    },
    className: isActive(preview, s) ? 'interactive active' : 'interactive',
  });

  return (
    <article className="resume" aria-label="Resume">
      <header className="resume-header" {...interactive({ kind: 'profile' })}>
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <ul className="contact">
          <li {...interactive({ kind: 'contact', field: 'email' })}>
            <ExternalLink href={`mailto:${profile.email}`}>{profile.email}</ExternalLink>
          </li>
          <li {...interactive({ kind: 'contact', field: 'phone' })}>{profile.phone}</li>
          <li>{profile.location}</li>
          <li {...interactive({ kind: 'contact', field: 'linkedin' })}>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li {...interactive({ kind: 'contact', field: 'github' })}>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </li>
        </ul>
        <ExternalLink href={profile.resumePdfUrl} className="download" download>
          Download PDF
        </ExternalLink>
      </header>

      <section aria-labelledby="summary-h">
        <h2 id="summary-h">Summary</h2>
        <p>{profile.summary}</p>
      </section>

      <section aria-labelledby="edu-h">
        <h2 id="edu-h">Education</h2>
        {resume.education.map(e => (
          <div key={e.id} {...interactive({ kind: 'education', id: e.id })}>
            <strong>{e.institution}</strong>
            <div>{e.degree} · {e.dates}</div>
            {e.grade && <div>{e.grade}</div>}
          </div>
        ))}
      </section>

      <section aria-labelledby="exp-h">
        <h2 id="exp-h">Experience</h2>
        {resume.experience.map(x => (
          <div key={x.id} {...interactive({ kind: 'experience', id: x.id })}>
            <strong>{x.company}</strong>
            <div>{x.jobTitle} · {x.dates}</div>
            <div>{x.location}</div>
          </div>
        ))}
      </section>

      <section aria-labelledby="proj-h">
        <h2 id="proj-h">Projects</h2>
        {resume.projects.map(p => (
          <div key={p.id} {...interactive({ kind: 'project', id: p.id })}>
            <strong>{p.title}</strong>
            <div>{p.technologies.join(' · ')}</div>
          </div>
        ))}
      </section>

      <section aria-labelledby="skills-h">
        <h2 id="skills-h">Skills</h2>
        {resume.skills.map(s => (
          <div key={s.category} {...interactive({ kind: 'skills', category: s.category })}>
            <strong>{s.category}:</strong> {s.items.join(', ')}
          </div>
        ))}
      </section>

      {resume.achievements.length > 0 && (
        <section aria-labelledby="ach-h">
          <h2 id="ach-h">Achievements</h2>
          <ul>{resume.achievements.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </section>
      )}
    </article>
  );
}