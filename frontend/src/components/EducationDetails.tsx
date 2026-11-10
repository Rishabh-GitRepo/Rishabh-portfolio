import type { Education } from '../types';
import { GraduationCap } from 'lucide-react';
import { ExternalLink } from './ExternalLink';

export function EducationDetails({ data }: { data: Education }) {
  return (
    <section>
      <div className="exp-header">
        <div className="exp-logo education-logo" aria-label={`${data.institution} logo`}>
          {data.image ? <img src={data.image} alt="" /> : <GraduationCap size={22} />}
        </div>
        <div>
          <div className="eyebrow">EDUCATION</div>
          <h2>{data.institution}</h2>
          <div className="subtitle">{data.degree}</div>
          <div className="meta">
            <span>{data.dates}</span>
            {data.grade && <><span>·</span><span>{data.grade}</span></>}
          </div>
        </div>
      </div>
      <p>{data.description}</p>
      {data.website && (
        <ExternalLink className="btn-outline" href={data.website}>
          Visit Institution
        </ExternalLink>
      )}
    </section>
  );
}
