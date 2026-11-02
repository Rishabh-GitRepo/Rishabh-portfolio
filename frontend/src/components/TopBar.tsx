import { Github, Linkedin, Mail } from 'lucide-react';
import { ExternalLink } from './ExternalLink';
import type { Profile } from '../types';

type Props = {
  profile: Profile;
  activeNav: string;
  onNav: (v: string) => void;
};

const NAV = ['Resume', 'Projects', 'Experience', 'Education', 'Skills', 'Contact'];

export function TopBar({ profile, activeNav, onNav }: Props) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="avatar" aria-hidden>{profile.name.charAt(0)}</div>
        <div>
          <div className="name">{profile.name}</div>
          <div className="headline">{profile.headline}</div>
        </div>
      </div>
      <nav className="nav-pills" aria-label="Sections">
        {NAV.map(n => (
          <button
            key={n}
            aria-current={activeNav === n ? 'page' : undefined}
            className={activeNav === n ? 'pill active' : 'pill'}
            onClick={() => onNav(n)}
          >
            {n}
          </button>
        ))}
      </nav>
      <div className="top-icons">
        <ExternalLink href={profile.github} aria-label="GitHub"><Github size={18} /></ExternalLink>
        <ExternalLink href={profile.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></ExternalLink>
        <ExternalLink href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></ExternalLink>
      </div>
    </header>
  );
}