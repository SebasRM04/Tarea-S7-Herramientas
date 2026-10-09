import { cx } from '../../utils/cx';

/**
 * Wrapper de Material Symbols Outlined.
 * <Icon name="memory" className="text-2xl" filled />
 */
export default function Icon({ name, filled = false, className, style, ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={cx('material-symbols-outlined', className)}
      style={filled ? { fontVariationSettings: "'FILL' 1", ...style } : style}
      {...rest}
    >
      {name}
    </span>
  );
}
