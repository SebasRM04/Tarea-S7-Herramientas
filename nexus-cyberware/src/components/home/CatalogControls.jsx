import Icon from '../common/Icon';
import { cx } from '../../utils/cx';
import { SORT_OPTIONS, CATALOG_META } from '../../data/catalog';

const VIEWS = [
  { id: 'grid', icon: 'grid_view', label: 'Vista Grid' },
  { id: 'table', icon: 'table_rows', label: 'Vista Tabla Técnica' },
];

/** Cabecera del catálogo: conteo, orden y vista grid/tabla. */
export default function CatalogControls({ shown, sort, onSortChange, view, onViewChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-surface-container-low shadow-md">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-primary-container glow-dot" />
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-primary">Catálogo de Silicio &amp; Rigs</span>
          <span className="font-code-badge text-code-badge text-on-surface-variant">
            Mostrando {shown} de {CATALOG_META.totalItems} componentes certificados
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <label className="flex items-center gap-2 bg-surface-container px-3 py-1.5">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">ORDEN:</span>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-transparent font-code-badge text-code-badge text-primary outline-none cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id} className="bg-surface-container text-on-surface">
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-center bg-surface-container p-1">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              aria-label={v.label}
              aria-pressed={view === v.id}
              onClick={() => onViewChange(v.id)}
              className={cx(
                'p-1.5',
                view === v.id ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
              )}
            >
              <Icon name={v.icon} className="text-[18px]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
