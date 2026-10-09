import ProductCard from './ProductCard';
import Icon from '../common/Icon';

/** Rejilla de tarjetas + estado vacío. */
export default function ProductGrid({ products, favorites, onToggleFavorite, onAddToCart, onReset }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 p-12 bg-surface-container-low text-center">
        <Icon name="search_off" className="text-4xl text-on-surface-variant" />
        <p className="font-headline-sm text-headline-sm text-on-surface">Sin resultados en esta matriz</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Ningún componente cumple los filtros actuales. Ajusta el presupuesto o reinicia la búsqueda.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-2 px-5 py-2.5 bg-primary-container text-on-primary font-code-badge text-code-badge uppercase font-bold"
        >
          Reiniciar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          isFavorite={favorites.has(p.id)}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
