import { useEffect, useRef, useState } from 'react';
import Icon from '../common/Icon';
import { cx } from '../../utils/cx';

const STATUS_TEXT = {
  idle: 'FIDO2 / WebAuthn Biometría Directa',
  waiting: 'ESPERANDO TOKEN BIOMÉTRICO...',
  done: 'FIDO2 / WEBAUTHN AUTORIZADO',
};

/** CTA de acceso rápido con passkey (simulado: sustituir por WebAuthn real). */
export default function PasskeyButton({ onFeedback }) {
  const [status, setStatus] = useState('idle');
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = () => {
    setStatus('waiting');
    timer.current = setTimeout(() => {
      setStatus('done');
      onFeedback?.({
        icon: 'check_circle',
        message: 'Autenticación biométrica confirmada con éxito. Conectando al nodo principal...',
      });
    }, 1200);
  };

  return (
    <div className="mb-5">
      <button
        type="button"
        onClick={handleClick}
        className="w-full relative group overflow-hidden p-3.5 rounded-lg bg-surface-container-high hover:bg-surface-bright transition-all duration-300 shadow-md text-left flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
            <Icon name="fingerprint" className={cx('text-2xl', status === 'waiting' && 'animate-spin')} />
          </div>
          <div className="flex flex-col">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold group-hover:text-primary-container transition-colors">
              Acceso Rápido con Passkey
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{STATUS_TEXT[status]}</span>
          </div>
        </div>
        <Icon
          name="chevron_right"
          className="text-on-surface-variant group-hover:translate-x-1 group-hover:text-primary-container transition-all"
        />
      </button>
    </div>
  );
}
