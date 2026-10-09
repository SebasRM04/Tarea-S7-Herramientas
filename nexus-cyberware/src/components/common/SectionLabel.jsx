import { cx } from '../../utils/cx';

/** Cuadrito de color + etiqueta mono en mayúsculas (se repite en todo el sitio). */
export default function SectionLabel({ children, dotClass = 'bg-primary-container glow-dot', textClass = 'text-primary-container', className }) {
  return (
    <div className={cx('flex items-center gap-2', className)}>
      <span className={cx('w-2.5 h-2.5', dotClass)} />
      <span className={cx('font-code-badge text-code-badge uppercase tracking-wider font-bold', textClass)}>
        {children}
      </span>
    </div>
  );
}
