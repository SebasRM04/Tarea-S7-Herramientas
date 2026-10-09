export default function RigBuilderCta() {
  return (
    <section className="w-full bg-surface-container py-12 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-container animate-pulse" />
            <span className="font-code-badge text-code-badge text-primary-container uppercase">HERRAMIENTA DE INGENIERÍA</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-primary uppercase">
            ¿Dudas sobre el flujo térmico o compatibilidad de tu build?
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
            Abre el simulador interactivo de Rig Builder con cálculo de consumo en tiempo real y perfiles de overclock
            automáticos.
          </p>
        </div>
        <a
          href="#"
          className="px-8 py-4 bg-primary-container text-on-primary font-headline-sm text-body-lg font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all shrink-0"
        >
          LANZAR RIG BUILDER PRO →
        </a>
      </div>
    </section>
  );
}
