import { useEffect, useState } from 'react';
import type { Resume } from '../types';
import { fetchResume } from '../api/resume';
import { resume as fallback } from '../data/resume';

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: Resume; usingFallback: boolean };

export function useResume(): State {
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    const ac = new AbortController();
    fetchResume(ac.signal)
      .then(data => setState({ status: 'success', data, usingFallback: false }))
      .catch(err => {
        if (ac.signal.aborted) return;
        // Graceful fallback to local data when API is unavailable.
        console.warn('API failed, using fallback:', err.message);
        setState({ status: 'success', data: fallback, usingFallback: true });
      });
    return () => ac.abort();
  }, []);

  return state;
}