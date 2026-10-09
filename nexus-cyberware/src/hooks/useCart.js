import { useState, useCallback, useMemo } from 'react';

/** Carrito mínimo en memoria: { [productId]: cantidad } */
export default function useCart() {
  const [items, setItems] = useState({});

  const add = useCallback((product) => {
    setItems((prev) => ({ ...prev, [product.id]: (prev[product.id] ?? 0) + 1 }));
  }, []);

  const count = useMemo(() => Object.values(items).reduce((a, b) => a + b, 0), [items]);

  return { items, count, add };
}
