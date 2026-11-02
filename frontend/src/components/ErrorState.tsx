export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div role="alert" className="error-state">
      <p>Could not load resume: {message}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
}