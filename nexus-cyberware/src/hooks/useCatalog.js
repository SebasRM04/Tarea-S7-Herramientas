import { useMemo, useState, useCallback } from 'react';
import { PRODUCTS, CATALOG_META } from '../data/catalog';

const DEFAULT_FILTERS = {
  query: '',
  category: 'all',
  availability: [],
  maxPrice: CATALOG_META.defaultMaxPrice,
  // Selecciones visuales (la data de ejemplo aún no las usa para filtrar)
  architecture: '2nm Quantum Gate',
  tdp: 'high',
  formFactor: 'ATX',
  sort: 'performance',
};

const SORTERS = {
  performance: (a, b) => b.performance - a.performance,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  newest: (a, b) => b.releasedAt - a.releasedAt,
  popular: (a, b) => b.reviews - a.reviews,
};

/**
 * Estado + lógica de filtrado/orden del catálogo.
 * Mantiene la UI "tonta" y toda la regla de negocio en un único sitio.
 */
export default function useCatalog(products = PRODUCTS) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const setField = useCallback((key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFilters((f) => ({
      ...f,
      availability: f.availability.includes(id)
        ? f.availability.filter((x) => x !== id)
        : [...f.availability, id],
    }));
  }, []);

  const reset = useCallback(() => setFilters(DEFAULT_FILTERS), []);

  const visibleProducts = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return products
      .filter((p) => filters.category === 'all' || p.category === filters.category)
      .filter((p) => filters.availability.length === 0 || filters.availability.includes(p.status))
      .filter((p) => p.price <= filters.maxPrice)
      .filter((p) => !q || `${p.name} ${p.brand}`.toLowerCase().includes(q))
      .sort(SORTERS[filters.sort]);
  }, [products, filters]);

  const activeFiltersCount =
    filters.availability.length +
    (filters.category !== 'all' ? 1 : 0) +
    (filters.maxPrice !== CATALOG_META.defaultMaxPrice ? 1 : 0) +
    (filters.query.trim() ? 1 : 0);

  return { filters, setField, toggleAvailability, reset, visibleProducts, activeFiltersCount };
}
