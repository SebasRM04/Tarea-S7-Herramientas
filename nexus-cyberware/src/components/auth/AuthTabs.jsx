import Icon from '../common/Icon';
import { cx } from '../../utils/cx';

const TABS = [
  { id: 'login', label: 'Iniciar Sesión', icon: 'login' },
  { id: 'register', label: 'Crear Cuenta', icon: 'person_add' },
];

/** Selector Login / Registro. */
export default function AuthTabs({ mode, onChange }) {
  return (
    <div role="tablist" className="relative flex p-1 mb-6 rounded-lg bg-surface-container-highest shadow-inner">
      {TABS.map((tab) => {
        const active = mode === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={cx(
              'relative flex-1 py-2 rounded-md font-label-lg text-label-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer',
              active
                ? 'text-on-primary-container bg-surface-container shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            )}
          >
            <Icon name={tab.icon} className="text-base" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
