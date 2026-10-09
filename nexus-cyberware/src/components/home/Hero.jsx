import Icon from '../common/Icon';
import { HERO_IMAGE } from '../../data/images';

const SPECS = [
  { label: 'Litografía', value: '2.0nm Quantum Gate', valueClass: 'text-primary-container' },
  { label: 'Garantía', value: '3 Años Holográfica', valueClass: 'text-secondary' },
  { label: 'Cashback', value: '+10% CyberPass', valueClass: 'text-on-surface' },
];

function HeroVisual() {
  return (
    <div className="lg:col-span-5 relative">
      <div className="relative bg-surface-container p-4 shadow-2xl overflow-hidden">
        <div className="absolute top-2 left-2 z-10 font-label-sm text-label-sm text-primary-container bg-surface-container-lowest px-2 py-0.5">
          TARGET_SPEC // APU-QX99
        </div>
        <div className="absolute top-2 right-2 z-10 font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5">
          STATUS: READY_TO_DEPLOY
        </div>

        <div className="relative w-full h-[380px] overflow-hidden bg-surface-container-lowest mt-6 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            alt="Procesador cibernético con trazas cian luminosas, tuberías de refrigeración criogénica y reflejos violeta"
            src={HERO_IMAGE}
          />
          <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md p-3 flex items-center justify-between">
            <div>
              <div className="font-code-badge text-code-badge text-primary">QUANTUM-X APU 9900 // 64-CORE</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">Clock 5.8 GHz • TDP 180W • 128MB 3D Cache</div>
            </div>
            <div className="text-right">
              <div className="font-label-sm text-label-sm text-secondary">DROP_PRICE</div>
              <div className="font-headline-sm text-headline-sm text-primary-container">$18,499 MXN</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-surface-container-low p-3 flex flex-col gap-2 font-label-sm text-label-sm">
          <div className="flex justify-between text-on-surface-variant">
            <span>EFICIENCIA CUÁNTICA TENSOR</span>
            <span className="text-primary-container font-bold">98.4%</span>
          </div>
          <div className="w-full bg-surface-container-highest h-1.5 overflow-hidden">
            <div className="bg-primary-container h-full w-[98%] shadow-[0_0_8px_#00f0ff]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 lg:py-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-container-high shadow-inner">
              <span className="w-2 h-2 bg-primary-container glow-dot" />
              <span className="font-code-badge text-code-badge text-primary uppercase tracking-wider">
                PROMO DROP // QUANTUM-X APU 9900 - STOCK LIMITADO
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight leading-none uppercase">
                NEXT-GEN CYBERWARE &amp; QUANTUM ARCHITECTURE
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Componentes grado militar, aceleradores neurales con validación holográfica directa y rigs de
                ultra-rendimiento preparados para cargas de cálculo cuántico e inferencia local profunda.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 bg-surface-container-low max-w-xl">
              {SPECS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{s.label}</span>
                  <span className={`font-code-badge text-code-badge font-bold ${s.valueClass}`}>{s.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#catalogo-seccion"
                className="flex items-center gap-3 px-8 py-4 bg-primary-container text-on-primary font-headline-sm text-body-lg font-bold shadow-[0_0_24px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all"
              >
                <Icon name="precision_manufacturing" className="text-[20px]" />
                <span>CONFIGURAR RIG COMPLETO</span>
              </a>
              <a
                href="#catalogo-seccion"
                className="flex items-center gap-3 px-6 py-4 bg-surface-container-high text-on-surface hover:text-primary-container hover:bg-surface-container-highest transition-all font-headline-sm text-body-lg"
              >
                <Icon name="blur_on" className="text-[20px]" />
                <span>EXPLORAR DROPS DE TEMPORADA</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-on-surface-variant font-label-sm text-label-sm pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                BENCHMARK PRE-FLASH INCLUIDO
              </span>
              <span className="text-surface-variant">/</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                VALIDACIÓN SHA-512 NODO
              </span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
