import { useCallback, useState } from 'react';
import type { Selection } from '../types';

function sameSelection(a: Selection, b: Selection): boolean {
  if (a.kind !== b.kind) return false;

  switch (a.kind) {
    case 'none':
    case 'profile':
      return true;
    case 'contact':
      return b.kind === 'contact' && a.field === b.field;
    case 'education':
    case 'experience':
    case 'project':
      return b.kind === a.kind && a.id === b.id;
    case 'skills':
      return b.kind === 'skills' && a.category === b.category;
  }
}

export function useSelection() {
  const [hovered, setHovered] = useState<Selection>({ kind: 'none' });
  const [pinned,  setPinned]  = useState<Selection>({ kind: 'none' });

  const preview = hovered.kind !== 'none' ? hovered : pinned;

  return {
    preview,
    isPinned: pinned.kind !== 'none',
    onHover:  useCallback((s: Selection) => setHovered(s), []),
    onLeave:  useCallback(() => setHovered({ kind: 'none' }), []),
    onSelect: useCallback((s: Selection) => {
      setPinned(p => (sameSelection(p, s) ? { kind: 'none' } : s));
    }, []),
  };
}