import { Github, Globe2 } from 'lucide-react';
import type { Project } from '../types';
import { ExternalLink } from './ExternalLink';

export function ProjectDetails({ data }: { data: Project }) {
  return (
    <section>
      <div className="exp-header">
        <div>
          <div className="eyebrow">PROJECT{data.year ? ` · ${data.year}` : ''}</div>
          <h2>{data.title}</h2>
          <div className="subtitle">{data.technologies.join(' · ')}</div>
        </div>
      </div>
      <p>{data.description}</p>
      <h3>Highlights</h3>
      <ul>{data.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}</ul>
      <ul className="chip-list">
        {data.technologies.map(technology => <li className="chip" key={technology}>{technology}</li>)}
      </ul>
      <div className="project-links">
        {data.githubUrl && (
          <ExternalLink className="btn-outline" href={data.githubUrl}>
            <Github size={14} /> GitHub
          </ExternalLink>
        )}
        {data.liveUrl && (
          <ExternalLink className="btn-outline" href={data.liveUrl}>
            <Globe2 size={14} /> Live project
          </ExternalLink>
        )}
      </div>
    </section>
  );
}
