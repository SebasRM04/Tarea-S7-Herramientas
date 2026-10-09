import { cx } from '../../utils/cx';

const pad = (n) => String(n).padStart(2, '0');

/** Devuelve [1, 2, 3, '…', total] adaptado a la página actual. */
function getPages(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, '…', total];
  if (current >= total - 2) return [1, '…', total - 2, total - 1, total];
  return [1, '…', current, '…', total];
}

export default function Pagination({ page, totalPages, onChange }) {
  const pages = getPages(page, totalPages);
  const btn = 'px-3 py-1.5 transition-colors';

  return (
    <nav
      aria-label="Paginación"
      className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-surface-container-low shadow-sm mt-4"
    >
      <div className="font-label-sm text-label-sm text-on-surface-variant">
        PÁGINA <strong className="text-primary font-mono">{pad(page)}</strong> DE{' '}
        <strong className="text-on-surface font-mono">{pad(totalPages)}</strong> • LATENCIA DEL CATÁLOGO 14ms
      </div>

      <div className="flex items-center gap-1 font-code-badge text-code-badge">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onChange(page - 1)}
          className={cx(btn, 'bg-surface-container text-on-surface-variant hover:text-on-surface disabled:opacity-50')}
        >
          &lt; PREV
        </button>

        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`gap-${i}`} className="px-2 text-on-surface-variant">...</span>
          ) : (
            <button
              key={p}
              type="button"
              aria-current={p === page ? 'page' : undefined}
              onClick={() => onChange(p)}
              className={cx(
                btn,
                p === page
                  ? 'bg-primary-container text-on-primary font-bold'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              )}
            >
              {pad(p)}
            </button>
          )
        )}

        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => onChange(page + 1)}
          className={cx(btn, 'bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary disabled:opacity-50')}
        >
          NEXT &gt;
        </button>
      </div>
    </nav>
  );
}
