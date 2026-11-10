import type { HTMLAttributes } from 'react';
import { BriefcaseBusiness, Code2, FolderKanban, GraduationCap, Landmark } from 'lucide-react';
import type { Resume, Selection } from '../types';
import { ExternalLink } from './ExternalLink';

type Props = {
  resume: Resume;
  preview: Selection;
  onHover: (s: Selection) => void;
  onLeave: () => void;
  onSelect: (s: Selection) => void;
};

function isActive(a: Selection, b: Selection): boolean {
  if (a.kind !== b.kind) return false;

  switch (a.kind) {
    case 'none':
    case 'profile':
      return true;
    case 'contact':
      return b.kind === 'contact' && a.field === b.field;
    case 'education':
    case 'experience':
    case 'project':
      return b.kind === a.kind && a.id === b.id;
    case 'skills':
      return b.kind === 'skills' && a.category === b.category;
  }
}

export function ResumePanel({ resume, preview, onHover, onLeave, onSelect }: Props) {
  const { profile } = resume;

  const interactive = (s: Selection): HTMLAttributes<HTMLElement> => ({
    tabIndex: 0,
    role: 'button',
    'aria-pressed': isActive(preview, s),
    onMouseEnter: () => onHover(s),
    onMouseLeave: onLeave,
    onFocus: e => {
      e.stopPropagation();
      onHover(s);
    },
    onBlur: onLeave,
    onClick: e => {
      e.stopPropagation();
      onSelect(s);
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        onSelect(s);
      }
    },
    className: isActive(preview, s) ? 'interactive active' : 'interactive',
  });

  return (
    <article className="resume" aria-label="Resume">
      <header id="section-resume" className="resume-header">
        <h1 {...interactive({ kind: 'profile' })}>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <ul id="section-contact" className="contact">
          <li>{profile.location}</li>
          <li {...interactive({ kind: 'contact', field: 'email' })}>
            <ExternalLink href={`mailto:${profile.email}`}>{profile.email}</ExternalLink>
          </li>
          <li {...interactive({ kind: 'contact', field: 'phone' })}>{profile.phone}</li>
          <li {...interactive({ kind: 'contact', field: 'linkedin' })}>
            <ExternalLink href={profile.linkedin}>LinkedIn profile</ExternalLink>
          </li>
          <li {...interactive({ kind: 'contact', field: 'github' })}>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </li>
        </ul>
      </header>

      <section aria-labelledby="summary-h">
        <h2 id="summary-h"><span className="section-icon"><Code2 size={15} /></span>Professional summary</h2>
        <p>{profile.summary}</p>
      </section>

      <section id="section-education" aria-labelledby="edu-h">
        <h2 id="edu-h"><span className="section-icon"><GraduationCap size={15} /></span>Education</h2>
        {resume.education.map(e => (
          <div key={e.id} {...interactive({ kind: 'education', id: e.id })}>
            <span className="item-mark education-mark"><Landmark size={17} /></span>
            <span className="resume-item-copy">
              <strong>{e.degree}</strong>
              <span>{e.institution} · {e.dates}{e.grade ? ` · ${e.grade}` : ''}</span>
            </span>
          </div>
        ))}
      </section>

      <section id="section-experience" aria-labelledby="exp-h">
        <h2 id="exp-h"><span className="section-icon"><BriefcaseBusiness size={15} /></span>Experience</h2>
        {resume.experience.map(x => (
          <div key={x.id} {...interactive({ kind: 'experience', id: x.id })}>
            <span className="item-mark company-mark">{x.company.slice(0, 1)}</span>
            <span className="resume-item-copy">
              <strong>{x.jobTitle}</strong>
              <span>{x.company} · {x.dates}{x.durationLabel ? ` · ${x.durationLabel}` : ''} · {x.location}</span>
            </span>
          </div>
        ))}
      </section>

      <section id="section-projects" aria-labelledby="proj-h">
        <h2 id="proj-h"><span className="section-icon"><FolderKanban size={15} /></span>Projects</h2>
        {resume.projects.map(p => (
          <div key={p.id} {...interactive({ kind: 'project', id: p.id })}>
            <span className="project-thumb" aria-hidden="true"><Code2 size={20} /></span>
            <span className="resume-item-copy">
              <strong>{p.title}</strong>
              <span>{p.technologies.join(' · ')}</span>
            </span>
          </div>
        ))}
      </section>

      <section id="section-skills" aria-labelledby="skills-h">
        <h2 id="skills-h"><span className="section-icon"><Code2 size={15} /></span>Skills</h2>
        {resume.skills.map(s => (
          <div key={s.category} {...interactive({ kind: 'skills', category: s.category })}>
            <span className="resume-item-copy skill-copy">
              <strong>{s.category}:</strong>
              <span>{s.items.join(', ')}</span>
            </span>
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