import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TelemetryTicker from '../components/home/TelemetryTicker';
import Hero from '../components/home/Hero';
import CategoryPills from '../components/home/CategoryPills';
import FilterSidebar from '../components/home/FilterSidebar';
import CatalogControls from '../components/home/CatalogControls';
import ProductGrid from '../components/home/ProductGrid';
import ProductTable from '../components/home/ProductTable';
import Pagination from '../components/home/Pagination';
import GuaranteesSection from '../components/home/GuaranteesSection';
import RigBuilderCta from '../components/home/RigBuilderCta';

import useCatalog from '../hooks/useCatalog';
import useCart from '../hooks/useCart';
import useToggleSet from '../hooks/useToggleSet';
import { CATEGORIES, CATALOG_META } from '../data/catalog';

export default function HomePage() {
  const catalog = useCatalog();
  const cart = useCart();
  const favorites = useToggleSet();
  const [view, setView] = useState('grid');
  const [page, setPage] = useState(1);

  const { filters, setField, toggleAvailability, reset, visibleProducts, activeFiltersCount } = catalog;

  return (
    <>
      <Header
        cartCount={cart.count}
        favoritesCount={favorites.ids.size}
        searchQuery={filters.query}
        onSearchChange={(v) => setField('query', v)}
      />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <TelemetryTicker />
        <Hero />

        <CategoryPills
          categories={CATEGORIES}
          active={filters.category}
          onChange={(id) => setField('category', id)}
          activeFiltersCount={activeFiltersCount}
        />

        <section id="catalogo-seccion" className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 scroll-mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <FilterSidebar
              filters={filters}
              setField={setField}
              toggleAvailability={toggleAvailability}
              onReset={reset}
            />

            <div className="lg:col-span-9 flex flex-col gap-6">
              <CatalogControls
                shown={visibleProducts.length}
                sort={filters.sort}
                onSortChange={(v) => setField('sort', v)}
                view={view}
                onViewChange={setView}
              />

              {view === 'grid' ? (
                <ProductGrid
                  products={visibleProducts}
                  favorites={favorites.ids}
                  onToggleFavorite={favorites.toggle}
                  onAddToCart={cart.add}
                  onReset={reset}
                />
              ) : (
                <ProductTable products={visibleProducts} onAddToCart={cart.add} />
              )}

              <Pagination page={page} totalPages={CATALOG_META.totalPages} onChange={setPage} />
            </div>
          </div>
        </section>

        <GuaranteesSection />
        <RigBuilderCta />
      </main>

      <Footer />
    </>
  );
}
