import { cx } from '../../utils/cx';

/** Punto con animación de "ping" (indicador de estado en vivo). */
export default function PingDot({ size = 'h-2 w-2', color = 'bg-primary-container', className }) {
  return (
    <span className={cx('relative flex', size, className)}>
      <span
        className={cx('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', color)}
      />
      <span className={cx('relative inline-flex rounded-full', size, color)} />
    </span>
  );
}
