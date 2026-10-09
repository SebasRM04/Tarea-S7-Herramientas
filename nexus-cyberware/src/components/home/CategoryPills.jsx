import Icon from '../common/Icon';
import { cx } from '../../utils/cx';

/** Cinta sticky de categorías. */
export default function CategoryPills({ categories, active, onChange, activeFiltersCount }) {
  return (
    <section className="w-full bg-surface-container-low sticky top-20 z-40 shadow-lg py-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max" role="tablist">
          {categories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(cat.id)}
                className={cx(
                  'flex items-center gap-2 px-4 py-2 font-code-badge text-code-badge uppercase transition-all',
                  isActive
                    ? 'bg-primary-container text-on-primary font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                )}
              >
                <Icon name={cat.icon} className="text-[16px]" />
                <span>{cat.label}</span>
                {cat.count != null && (
                  <span
                    className={cx(
                      'px-1.5 py-px font-mono text-[10px]',
                      isActive ? 'bg-on-primary text-primary-container' : 'bg-surface-container-lowest'
                    )}
                  >
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-2 shrink-0 pl-4 bg-surface-container-low">
          <span className="font-label-sm text-label-sm text-secondary font-bold">
            [FILTROS ACTIVOS: {activeFiltersCount}]
          </span>
        </div>
      </div>
    </section>
  );
}
