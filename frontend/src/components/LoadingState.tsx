export function LoadingState() {
  return (
    <div className="loading-shell" role="status" aria-live="polite" aria-label="Loading portfolio">
      <span className="sr-only">Loading portfolio…</span>
      <header className="loading-topbar">
        <div className="loading-brand">
          <div className="loading-avatar shimmer" />
          <div>
            <div className="loading-bar shimmer w-60" />
            <div className="loading-bar shimmer w-40" />
          </div>
        </div>
        <div className="loading-nav">
          <div className="loading-bar shimmer" />
          <div className="loading-bar shimmer" />
          <div className="loading-bar shimmer" />
          <div className="loading-bar shimmer" />
        </div>
      </header>
      <div className="loading-grid">
        <section className="loading-card">
          <div className="loading-bar shimmer w-40" />
          <div className="loading-bar shimmer w-full tall" />
          <div className="loading-bar shimmer w-60" />
          <div className="loading-bar shimmer w-full" />
          <div className="loading-bar shimmer w-full" />
          <div className="loading-bar shimmer w-80" />
          <div className="loading-bar shimmer w-40" />
          <div className="loading-bar shimmer w-full" />
          <div className="loading-bar shimmer w-60" />
        </section>
        <section className="loading-card loading-detail">
          <div className="loading-bar shimmer w-40" />
          <div className="loading-bar shimmer w-80 tall" />
          <div className="loading-bar shimmer w-full" />
          <div className="loading-bar shimmer w-full" />
          <div className="loading-bar shimmer w-60" />
        </section>
        <div className="loading-previews" aria-hidden="true">
          <div className="loading-preview-card"><div className="loading-bar shimmer w-40" /><div className="loading-bar shimmer w-full" /></div>
          <div className="loading-preview-card"><div className="loading-bar shimmer w-40" /><div className="loading-bar shimmer w-full" /></div>
          <div className="loading-preview-card"><div className="loading-bar shimmer w-40" /><div className="loading-bar shimmer w-full" /></div>
          <div className="loading-preview-card"><div className="loading-bar shimmer w-40" /><div className="loading-bar shimmer w-full" /></div>
        </div>
      </div>
    </div>
  );
}
