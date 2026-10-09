import Icon from '../common/Icon';
import { cx } from '../../utils/cx';
import { formatPrice } from '../../utils/format';
import { STATUS_STYLES, ACCENT_STYLES, SPEC_TONES } from '../../data/catalog';

/** Tarjeta de producto. Totalmente controlada por props. */
export default function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
  const status = STATUS_STYLES[product.status];
  const accent = ACCENT_STYLES[product.accent];
  const isPreorder = product.status === 'preorder';

  return (
    <article
      className={cx(
        'group flex flex-col bg-surface-container hover:bg-surface-container-high transition-all shadow-xl relative',
        accent.glow
      )}
    >
      <div className="relative w-full h-56 bg-surface-container-lowest overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <div
          className={cx(
            'absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 font-code-badge text-code-badge font-bold',
            status.badge
          )}
        >
          <span
            className={cx(
              'w-1.5 h-1.5 rounded-full',
              status.dot,
              product.featured && product.status === 'stock' && 'animate-ping'
            )}
          />
          {status.label}
        </div>
        <button
          type="button"
          aria-label="Guardar en favoritos"
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(product.id)}
          className={cx(
            'absolute top-2 right-2 w-8 h-8 bg-surface-container-lowest/80 hover:text-primary flex items-center justify-center transition-colors',
            isFavorite ? 'text-primary-container' : 'text-on-surface'
          )}
        >
          <Icon name="bookmark" filled={isFavorite} className="text-[18px]" />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
            <span className={cx('font-semibold uppercase', accent.brand)}>{product.brand}</span>
            <div className="flex items-center gap-1 text-primary-container">
              <Icon name="star" className="text-[14px]" />
              <span className="font-bold">{product.rating.toFixed(1)}</span>
              <span className="text-on-surface-variant">({product.reviews})</span>
            </div>
          </div>
          <h3 className={cx('font-headline-sm text-headline-sm text-on-surface transition-colors', accent.titleHover)}>
            {product.name}
          </h3>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.specs.map((spec) => (
              <span
                key={spec.text}
                className={cx(
                  'px-2 py-0.5 bg-surface-container-lowest font-label-sm text-label-sm',
                  SPEC_TONES[spec.tone ?? 'default']
                )}
              >
                {spec.text}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low p-3 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">{formatPrice(product.price)}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant ml-1 font-mono">MXN</span>
            </div>
            {product.shipNote ? (
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">{product.shipNote}</span>
            ) : (
              product.oldPrice && (
                <span className="font-label-sm text-label-sm text-on-surface-variant line-through font-mono">
                  {formatPrice(product.oldPrice)}
                </span>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className={cx(
                'flex-1 flex items-center justify-center gap-2 px-3 py-2.5 transition-all font-code-badge text-code-badge uppercase font-bold',
                isPreorder
                  ? 'bg-surface-container-highest text-primary hover:bg-primary-container hover:text-on-primary'
                  : 'bg-primary-container text-on-primary hover:bg-primary-fixed-dim'
              )}
            >
              <Icon name={isPreorder ? 'variable_remove' : 'add_shopping_cart'} className="text-[18px]" />
              <span>{isPreorder ? 'Reservar Unidad' : 'Añadir al Carrito'}</span>
            </button>
            <button
              type="button"
              aria-label="Comparar arquitectura"
              className="p-2.5 bg-surface-container hover:bg-surface-container-highest text-on-surface transition-all"
            >
              <Icon name="compare_arrows" className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
