import Icon from '../common/Icon';
import SectionLabel from '../common/SectionLabel';
import { GUARANTEES } from '../../data/site';

function GuaranteeCard({ icon, title, badge, badgeClass, text, tag }) {
  return (
    <div className="p-6 bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-4 relative overflow-hidden group">
      <div className="w-12 h-12 bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
        <Icon name={icon} className="text-[28px]" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{title}</h4>
        <span className={`font-code-badge text-code-badge font-bold ${badgeClass}`}>{badge}</span>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{text}</p>
      </div>
      <div className="mt-auto pt-2 font-label-sm text-label-sm text-on-surface-variant font-mono">{tag}</div>
    </div>
  );
}

export default function GuaranteesSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <SectionLabel>ESTÁNDARES NEXUS PRIME</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase">COMPROMISO &amp; BLINDAJE TÉCNICO TOTAL</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Cada unidad pasa por nuestro laboratorio de validación criptográfica y banco de estrés térmico antes de
            recibir el sello de embarque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((g) => (
            <GuaranteeCard key={g.title} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
}
