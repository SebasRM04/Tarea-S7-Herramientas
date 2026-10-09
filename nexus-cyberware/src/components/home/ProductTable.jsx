import Icon from '../common/Icon';
import { formatPrice } from '../../utils/format';
import { STATUS_STYLES } from '../../data/catalog';
import { cx } from '../../utils/cx';

/** Vista "Tabla Técnica" del catálogo. */
export default function ProductTable({ products, onAddToCart }) {
  if (products.length === 0) return null;
  return (
    <div className="overflow-x-auto bg-surface-container-low shadow-md">
      <table className="w-full text-left font-body-sm text-body-sm">
        <thead className="bg-surface-container font-label-sm text-label-sm text-on-surface-variant uppercase">
          <tr>
            <th className="p-3">Componente</th>
            <th className="p-3">Especificaciones</th>
            <th className="p-3">Estado</th>
            <th className="p-3 text-right">Precio (MXN)</th>
            <th className="p-3" />
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-surface-container-high transition-colors">
              <td className="p-3">
                <div className="font-label-sm text-label-sm text-primary-container uppercase">{p.brand}</div>
                <div className="text-on-surface font-semibold">{p.name}</div>
              </td>
              <td className="p-3 font-label-sm text-label-sm text-on-surface-variant">
                {p.specs.map((s) => s.text).join(' · ')}
              </td>
              <td className="p-3">
                <span className={cx('px-2 py-0.5 font-code-badge text-code-badge font-bold whitespace-nowrap', STATUS_STYLES[p.status].badge)}>
                  {STATUS_STYLES[p.status].label}
                </span>
              </td>
              <td className="p-3 text-right font-mono text-primary font-bold">{formatPrice(p.price)}</td>
              <td className="p-3 text-right">
                <button
                  type="button"
                  aria-label={`Añadir ${p.name} al carrito`}
                  onClick={() => onAddToCart(p)}
                  className="p-2 bg-primary-container text-on-primary hover:bg-primary-fixed-dim transition-all"
                >
                  <Icon name="add_shopping_cart" className="text-[18px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
