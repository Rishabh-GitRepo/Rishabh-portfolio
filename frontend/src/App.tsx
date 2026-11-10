import { useState } from 'react';
import { useResume } from './hooks/useResume';
import { useSelection } from './hooks/useSelection';
import { TopBar } from './components/TopBar';
import { ResumePanel } from './components/ResumePanel';
import { DetailsPanel } from './components/DetailsPanel';
import { PreviewStrip } from './components/PreviewStrip';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';

export default function App() {
  const state = useResume();
  const { preview, onHover, onLeave, onSelect } = useSelection();
  const [nav, setNav] = useState('Resume');

  const handleNav = (section: string) => {
    setNav(section);
    document.getElementById(`section-${section.toLowerCase()}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleSelect = (selection: Parameters<typeof onSelect>[0]) => {
    onSelect(selection);
    if (window.matchMedia('(max-width: 760px)').matches) {
      document.getElementById('details-panel')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  if (state.status === 'loading') return <LoadingState />;
  if (state.status === 'error') return <ErrorState message={state.message} />;

  return (
    <div className="app-shell">
      <TopBar profile={state.data.profile} activeNav={nav} onNav={handleNav} />
      <main className="layout">
        <ResumePanel
          resume={state.data}
          preview={preview}
          onHover={onHover}
          onLeave={onLeave}
          onSelect={handleSelect}
        />
        <DetailsPanel resume={state.data} selection={preview} />
      </main>
      <PreviewStrip resume={state.data} />
      <footer className="site-footer">
        <span>{state.data.profile.name}</span>
        <span>Portfolio &amp; resume</span>
      </footer>
    </div>
  );
}