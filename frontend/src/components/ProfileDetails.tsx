import type { Profile } from '../types';
import { ExternalLink } from './ExternalLink';

export function ProfileDetails({ profile }: { profile: Profile }) {
  return (
    <section>
      <div className="exp-header">
        <div>
          <div className="eyebrow">PROFILE</div>
          <h2>{profile.name}</h2>
          <div className="subtitle">{profile.headline}</div>
        </div>
      </div>
      <p>{profile.summary}</p>
      <dl className="facts">
        <dt>Location</dt><dd>{profile.location}</dd>
        <dt>Email</dt><dd><ExternalLink href={`mailto:${profile.email}`}>{profile.email}</ExternalLink></dd>
        <dt>Phone</dt><dd><ExternalLink href={`tel:${profile.phone}`}>{profile.phone}</ExternalLink></dd>
        <dt>LinkedIn</dt><dd><ExternalLink href={profile.linkedin}>View profile</ExternalLink></dd>
        <dt>GitHub</dt><dd><ExternalLink href={profile.github}>View repositories</ExternalLink></dd>
      </dl>
      <ExternalLink className="btn-outline" href={profile.resumePdfUrl} download>
        Download Resume
      </ExternalLink>
    </section>
  );
}
