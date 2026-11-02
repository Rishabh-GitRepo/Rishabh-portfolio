import { useState } from 'react';
import { useResume } from './hooks/useResume';
import { TopBar } from './components/TopBar';
import { ResumePanel } from './components/ResumePanel';
import { PreviewStrip } from './components/PreviewStrip';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';

function useSelection() {
  const [preview, setPreview] = useState<any>(null);

  return {
    preview,
    onHover: (selection: any) => setPreview(selection),
    onLeave: () => setPreview(null),
    onSelect: (selection: any) => setPreview(selection),
  };
}

export default function App() {
  const state = useResume();
  const { preview, onHover, onLeave, onSelect } = useSelection();
  const [nav, setNav] = useState('Resume');

  if (state.status === 'loading') return <LoadingState />;
  if (state.status === 'error') return <ErrorState message={state.message} />;

  return (
    <div className="app-shell">
      <TopBar profile={state.data.profile} activeNav={nav} onNav={setNav} />
      <main className="layout">
        <ResumePanel
          resume={state.data}
          preview={preview}
          onHover={onHover}
          onLeave={onLeave}
          onSelect={onSelect}
        />
      </main>
      <PreviewStrip resume={state.data} />
    </div>
  );
}