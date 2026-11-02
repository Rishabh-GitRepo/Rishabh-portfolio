import { useState } from 'react';
import { Building2, ExternalLink, MapPin, Users, Globe2 } from 'lucide-react';
import { ExternalLink as SafeLink } from './ExternalLink';
import type { Experience } from '../types';

const TABS = ['Overview', 'My Work', 'Technologies', 'About'] as const;
type Tab = typeof TABS[number];

export function ExperienceDetails({ data }: { data: Experience }) {
  const [tab, setTab] = useState<Tab>('Overview');

  return (
    <div className="exp-details">
      <div className="exp-header">
        <div className="exp-logo"><Building2 size={22} /></div>
        <div>
          <div className="eyebrow">WORK EXPERIENCE</div>
          <h2>{data.company}</h2>
          <div className="subtitle">{data.jobTitle}</div>
          <div className="meta">
            <span>{data.dates}</span>
            {data.durationLabel && <><span>·</span><span>{data.durationLabel}</span></>}
            <span>·</span>
            <span><MapPin size={13} /> {data.location}</span>
          </div>
        </div>
        {data.website && (
          <SafeLink className="btn-outline" href={data.website}>
            <ExternalLink size={14} /> Open Company Website
          </SafeLink>
        )}
      </div>

      <div role="tablist" className="tabs">
        {TABS.map(t => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={tab === t ? 'tab active' : 'tab'}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Overview' && (
        <div className="overview-grid">
          <div className="overview-left">
            <div className="hero-image" role="img" aria-label={`${data.company} office`}>
              {/* Placeholder – use data.logo or a local image */}
              <span>{data.company}</span>
            </div>
            <h3>My Role &amp; Responsibilities</h3>
            <ul>{data.responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>
            {data.keyLearnings && (
              <div className="callout">
                <strong>Key Learnings</strong>
                <p>{data.keyLearnings}</p>
              </div>
            )}
          </div>
          <aside className="overview-right">
            <h3>About {data.company}</h3>
            <p>{data.about}</p>
            <dl className="facts">
              {data.industry && <><dt><Building2 size={13}/> Industry</dt><dd>{data.industry}</dd></>}
              {data.website && (
                <><dt><Globe2 size={13}/> Website</dt>
                  <dd><SafeLink href={data.website}>{data.website}</SafeLink></dd></>
              )}
              {data.employees && <><dt><Users size={13}/> Employees</dt><dd>{data.employees}</dd></>}
              {data.headquarters && <><dt><MapPin size={13}/> Headquarters</dt><dd>{data.headquarters}</dd></>}
            </dl>
          </aside>
        </div>
      )}

      {tab === 'My Work' && (
        <ul className="work-list">{data.responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>
      )}
      {tab === 'Technologies' && (
        <ul className="chip-list">{data.technologies.map(t => <li key={t} className="chip">{t}</li>)}</ul>
      )}
      {tab === 'About' && <p>{data.about}</p>}
    </div>
  );
}