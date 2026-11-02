import type { Education } from '../types';
import { ExternalLink } from './ExternalLink';

export function EducationDetails({ data }: { data: Education }) {
  return (
    <section>
      <div className="exp-header">
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
