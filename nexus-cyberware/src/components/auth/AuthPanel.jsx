import { useState } from 'react';
import PingDot from '../common/PingDot';
import AuthTabs from './AuthTabs';
import PasskeyButton from './PasskeyButton';
import SocialButtons from './SocialButtons';
import AuthForm from './AuthForm';
import FeedbackAlert from './FeedbackAlert';

/** Panel derecho del login: consola de autenticación completa. */
export default function AuthPanel({ onAuthSuccess }) {
  const [mode, setMode] = useState('login');
  const [feedback, setFeedback] = useState(null);

  const changeMode = (next) => {
    setMode(next);
    setFeedback(null);
  };

  const handleSocial = (provider) =>
    setFeedback({ icon: 'sync', message: `Redirigiendo a handshake seguro con ${provider}...` });

  return (
    <div className="lg:col-span-7 flex flex-col justify-center p-6 sm:p-10 lg:p-12 bg-surface-container/40">
      <header className="flex flex-col gap-1.5 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-code-badge text-code-badge text-primary-container tracking-wider uppercase font-semibold">
            CONSOLE_AUTH // ACCESS CONTROL
          </span>
          <span className="h-px flex-1 bg-surface-container-highest" />
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Acceso al Sistema</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Inicia sesión para gestionar pedidos de componentes, garantías extendidas y ensamblajes personalizados.
        </p>
      </header>

      <AuthTabs mode={mode} onChange={changeMode} />

      {mode === 'login' && <PasskeyButton onFeedback={setFeedback} />}

      <div className="relative flex items-center justify-center my-4">
        <div className="w-full h-px bg-surface-container-highest" />
        <span className="absolute px-3 bg-surface-container-low font-code-badge text-code-badge text-on-surface-variant uppercase tracking-widest">
          O VÍA CREDENCIALES
        </span>
      </div>

      <SocialButtons onSelect={handleSocial} />

      <AuthForm mode={mode} onFeedback={setFeedback} onSuccess={onAuthSuccess} />

      <FeedbackAlert feedback={feedback} />

      <footer className="mt-8 pt-5 border-t border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <PingDot />
          <span className="font-code-badge text-code-badge text-on-surface-variant">
            ENCRIPTACIÓN CUÁNTICA ACTIVA • SSL 256-BIT
          </span>
        </div>
        <span className="font-code-badge text-code-badge text-on-surface-variant">PROTOCOLO: SEC-TLS 1.3</span>
      </footer>
    </div>
  );
}
