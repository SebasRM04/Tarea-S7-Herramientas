import Icon from '../common/Icon';

/** Cinta superior de telemetría en vivo. */
export default function TelemetryTicker() {
  return (
    <section className="w-full bg-surface-container-lowest text-on-surface-variant overflow-hidden py-2 px-4 shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-label-sm text-label-sm">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-primary-container text-on-primary font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-on-primary animate-ping" />
            FEED_REALTIME
          </span>
          <span className="text-on-surface">
            STOCK GLOBAL SILICIO: <strong className="text-primary-container font-semibold">+14.2% RENDIMIENTO NETO</strong>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-on-surface-variant">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-secondary" />
            TASA HASH NEURAL: <strong className="text-on-surface">4,892 TFLOPS/s</strong>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-container" />
            DESPACHO BLINDADO 24H: <strong className="text-primary font-semibold">ACTIVO // NODO-MX</strong>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-fixed" />
            FIRMWARE TPM 2.4: <strong className="text-on-surface">100% SECURE_BOOT</strong>
          </span>
        </div>

        <div className="flex items-center gap-2 text-primary font-bold">
          <Icon name="bolt" className="text-[15px] text-primary-container" />
          <span>LATENCIA INTER-CORE: 0.12ms</span>
        </div>
      </div>
    </section>
  );
}
