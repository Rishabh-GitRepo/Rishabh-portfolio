export function LoadingState() {
  return (
    <div className="skeleton" role="status" aria-live="polite">
      <span className="sr-only">Loading resume…</span>
      <div className="bar w-60" /><div className="bar w-40" /><div className="bar w-80" />
    </div>
  );
}