import { useState, useCallback } from 'react';

/** Conjunto de ids con toggle (favoritos, comparar, etc.). */
export default function useToggleSet() {
  const [ids, setIds] = useState(() => new Set());

  const toggle = useCallback((id) => {
    setIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return { ids, toggle, has: (id) => ids.has(id) };
}
