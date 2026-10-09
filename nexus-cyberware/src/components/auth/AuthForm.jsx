import { useEffect, useRef, useState } from 'react';
import Icon from '../common/Icon';
import Checkbox from '../common/Checkbox';
import InputField from './InputField';
import { cx } from '../../utils/cx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUBMIT = {
  login: { text: 'INICIAR SESIÓN // AUTENTICAR', icon: 'shield_lock' },
  register: { text: 'REGISTRAR TERMINAL // NUEVO ID', icon: 'how_to_reg' },
};

/**
 * Formulario de login/registro.
 * Sustituye el setTimeout de `handleSubmit` por tu llamada real a la API.
 */
export default function AuthForm({ mode, onFeedback, onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const emailValid = EMAIL_RE.test(email.trim());
  const isLogin = mode === 'login';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    timer.current = setTimeout(() => {
      setSubmitting(false);
      onFeedback(
        isLogin
          ? { icon: 'verified', message: '¡Credenciales verificadas! Acceso concedido al panel de Nexus Cyberware.' }
          : { icon: 'check_circle', message: 'Terminal creada exitosamente. Bienvenido a la red Nexus.' }
      );
      onSuccess?.({ mode, email, name, remember });
    }, 1000);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    onFeedback({ icon: 'lock_reset', message: 'Enlace de reestablecimiento cuántico emitido a su correo registrado.' });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {!isLogin && (
        <InputField
          id="input-name"
          label="NOMBRE DE USUARIO / CALLSIGN"
          hint={<span className="font-code-badge text-code-badge text-primary-container">[OPCIONAL]</span>}
          icon="badge"
          type="text"
          placeholder="Cyberpilot_01"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <InputField
        id="input-email"
        label="CORREO O IDENTIFICADOR NEXUS"
        hint={
          <span
            className={cx(
              'font-code-badge text-code-badge',
              emailValid ? 'text-primary-container font-semibold' : 'text-on-surface-variant font-normal'
            )}
          >
            {emailValid ? '[SYNTAX VERIFICADA]' : 'FORMATO: ID@DOMAIN'}
          </span>
        }
        icon="terminal"
        type="email"
        required
        placeholder="operador@nexus-cyberware.io"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        inputClassName="pr-10"
        right={
          <Icon
            name="check_circle"
            className={cx(
              'absolute right-3.5 text-primary-fixed-dim text-lg transition-opacity',
              emailValid ? 'opacity-100' : 'opacity-0'
            )}
          />
        }
      />

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="input-password" className="font-label-sm text-label-sm text-on-surface-variant">
            CONTRASEÑA ENCRIPTADA
          </label>
          <a href="#" onClick={handleForgot} className="font-label-sm text-label-sm text-primary-container hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="relative flex items-center">
          <Icon name="lock" className="absolute left-3.5 text-outline text-lg pointer-events-none" />
          <input
            id="input-password"
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2.5 pl-11 pr-11 rounded-lg bg-surface-container-lowest text-on-surface placeholder-outline font-body-sm text-body-sm shadow-inner transition-all duration-200 outline-none focus:bg-surface-container-high tracking-wider"
          />
          <button
            type="button"
            title="Mostrar u ocultar contraseña"
            aria-label="Mostrar u ocultar contraseña"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3.5 text-on-surface-variant hover:text-on-surface cursor-pointer p-0.5"
          >
            <Icon name={showPassword ? 'visibility_off' : 'visibility'} className="text-lg" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <Checkbox
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          label={
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Mantener terminal autenticada (30 días)
            </span>
          }
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 px-6 rounded-lg bg-primary-container hover:bg-primary-fixed text-on-primary-container font-label-lg text-label-lg font-bold tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-70 disabled:cursor-wait"
        >
          <Icon name={SUBMIT[mode].icon} className="text-xl transition-transform group-hover:rotate-12" />
          <span>{submitting ? 'PROCESANDO FIRMA DIGITAL...' : SUBMIT[mode].text}</span>
        </button>
      </div>
    </form>
  );
}
