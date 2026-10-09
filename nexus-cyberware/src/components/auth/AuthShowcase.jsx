import Icon from '../common/Icon';
import PingDot from '../common/PingDot';
import CircuitGrid from './CircuitGrid';
import { AUTH_SHOWCASE_IMAGE } from '../../data/images';

const TELEMETRY = [
  { label: 'ESTADO', value: '100% OPERATIVO', valueClass: 'text-primary-container' },
  { label: 'LATENCIA', value: '11.8 ms', valueClass: 'text-tertiary' },
  { label: 'SEGURIDAD', value: 'NIVEL IV', valueClass: 'text-secondary' },
];

function Brand() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-surface-container-highest shadow-inner">
          <Icon name="developer_board" filled className="text-primary-container text-2xl" />
          <PingDot size="h-2.5 w-2.5" className="absolute -top-1 -right-1" />
        </div>
        <div>
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase font-bold block">NEXUS</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest block -mt-1">CYBERWARE SYSTEMS</span>
        </div>
      </div>
      <div className="px-2.5 py-1 rounded bg-surface-container-high flex items-center gap-1.5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse" />
        <span className="font-code-badge text-code-badge text-primary">NODE_08 // MX</span>
      </div>
    </div>
  );
}

function TelemetryBar() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-2 p-2.5 rounded-lg bg-surface-container/60 shadow-sm">
      {TELEMETRY.map(({ label, value, valueClass }) => (
        <div key={label} className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant">{label}</span>
          <span className={`font-code-badge text-code-badge font-semibold ${valueClass}`}>{value}</span>
        </div>
      ))}
    </div>
  );
}

function HardwareShowcase() {
  return (
    <div className="relative z-10 my-6 group">
      <div className="relative overflow-hidden rounded-xl bg-surface-container shadow-xl">
        <img
          className="w-full h-52 sm:h-60 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          alt="Equipo gaming cibernético con refrigeración líquida luminosa y cables de fibra óptica cian y ultravioleta"
          src={AUTH_SHOWCASE_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-surface-container-high/90 backdrop-blur-md shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-secondary-container flex items-center justify-center text-secondary">
              <Icon name="memory" className="text-lg" />
            </div>
            <div>
              <div className="font-label-lg text-label-lg text-on-surface font-semibold">QUANTUM-X APU 9900</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">Garantía Holográfica Directa</div>
            </div>
          </div>
          <div className="px-2 py-0.5 rounded bg-surface-container text-primary-container font-code-badge text-code-badge font-bold">
            EN STOCK
          </div>
        </div>
      </div>
    </div>
  );
}

function RewardsFooter() {
  return (
    <div className="relative z-10 flex flex-col gap-3">
      <div className="p-4 rounded-xl bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high shadow-inner flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full bg-primary-container/15 flex-shrink-0 flex items-center justify-center text-primary-container">
          <Icon name="token" className="text-xl" />
        </div>
        <div>
          <div className="font-body-sm text-body-sm text-on-surface font-semibold">Nexus CyberPass Rewards</div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Acumula 5% cashback en GPUs neurales y periféricos de grado militar en cada orden.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-1 text-on-surface-variant font-label-sm text-label-sm">
        <span className="flex items-center gap-1">
          <Icon name="verified" className="text-sm text-primary-container" /> FIDO2 Hardware Key Ready
        </span>
        <span>v4.18.2-SEC</span>
      </div>
    </div>
  );
}

/** Panel izquierdo del login: marca, telemetría y hardware destacado. */
export default function AuthShowcase() {
  return (
    <div className="lg:col-span-5 relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-surface-container-low/70 overflow-hidden">
      <CircuitGrid />
      <div className="relative z-10 flex flex-col gap-4">
        <Brand />
        <TelemetryBar />
      </div>
      <HardwareShowcase />
      <RewardsFooter />
    </div>
  );
}
