import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import SearchBar from './SearchBar';
import { NAV_ITEMS } from '../../data/site';

/** Cabecera fija: marca, buscador, navegación y acciones (alertas, favoritos, carrito, cuenta). */
export default function Header({ cartCount, favoritesCount, searchQuery, onSearchChange }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Marca */}
        <div className="flex flex-col shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-container glow-dot" />
            <span className="font-code-badge text-code-badge tracking-wider font-bold text-primary uppercase">
              Nexus Cyberware Systems
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              NODE_08 // MX - ONLINE
            </span>
          </div>
        </div>

        <SearchBar value={searchQuery} onChange={onSearchChange} />

        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="px-3 py-1.5 font-label-lg text-label-lg uppercase tracking-wide text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-surface-container-low text-on-surface-variant">
            <Icon name="public" className="text-[16px] text-primary-container" />
            <span className="font-label-sm text-label-sm text-on-surface tracking-wider uppercase font-semibold">MXN / LATAM</span>
          </div>

          <button
            type="button"
            aria-label="Alertas de Stock"
            className="p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all relative"
          >
            <Icon name="notifications" className="text-[20px]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#d0bcff]" />
          </button>

          <button
            type="button"
            aria-label={`Favoritos (${favoritesCount})`}
            className="p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all"
          >
            <Icon name="bookmark" filled={favoritesCount > 0} className="text-[20px]" />
          </button>

          <button
            type="button"
            aria-label={`Carrito de compras (${cartCount})`}
            className="flex items-center gap-2 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high transition-all"
          >
            <Icon name="shopping_bag" className="text-[20px] text-primary-container" />
            <span className="font-label-sm text-label-sm text-primary font-bold">[{cartCount}]</span>
          </button>

          <Link
            to="/login"
            aria-label="Cuenta"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Icon name="person" className="text-on-primary text-[18px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
