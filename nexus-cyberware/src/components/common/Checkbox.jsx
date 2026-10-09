import Icon from './Icon';
import { cx } from '../../utils/cx';

/** Checkbox accesible con apariencia personalizada (input real oculto con sr-only). */
export default function Checkbox({ checked, onChange, label, className, square = false }) {
  return (
    <label className={cx('flex items-center gap-2.5 cursor-pointer select-none', className)}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <span
        className={cx(
          'w-4 h-4 flex items-center justify-center transition-colors',
          square ? 'rounded-none' : 'rounded',
          checked ? 'bg-primary-container' : 'bg-surface-container-highest'
        )}
      >
        <Icon
          name="check"
          className={cx('text-surface-container-lowest text-sm font-bold', checked ? 'opacity-100' : 'opacity-0')}
        />
      </span>
      {label}
    </label>
  );
}
