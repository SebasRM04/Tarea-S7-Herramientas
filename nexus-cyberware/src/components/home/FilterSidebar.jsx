import { useState } from 'react';
import Icon from '../common/Icon';
import Checkbox from '../common/Checkbox';
import { cx } from '../../utils/cx';
import { formatPrice } from '../../utils/format';
import {
  AVAILABILITY_OPTIONS,
  ARCHITECTURES,
  TDP_OPTIONS,
  FORM_FACTORS,
  CATALOG_META,
} from '../../data/catalog';

function FilterTitle({ children }) {
  return <div className="font-label-lg text-label-lg text-primary uppercase">{children}</div>;
}

function AvailabilityFilter({ selected, onToggle }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center justify-between font-label-lg text-label-lg text-primary uppercase"
      >
        <span>Disponibilidad</span>
        <Icon name={open ? 'expand_less' : 'expand_more'} className="text-[16px] text-on-surface-variant" />
      </button>
      {open && (
        <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
          {AVAILABILITY_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className="flex items-center justify-between p-2 bg-surface-container hover:bg-surface-container-high transition-colors"
            >
              <Checkbox
                square
                className="flex-1"
                checked={selected.includes(opt.id)}
                onChange={() => onToggle(opt.id)}
                label={<span>{opt.label}</span>}
              />
              <span className={cx('font-label-sm text-label-sm font-mono', opt.countClass)}>{opt.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PriceFilter({ value, onChange }) {
  return (
    <div className="flex flex-col gap-3 bg-surface-container p-4">
      <div className="flex items-center justify-between font-label-lg text-label-lg text-primary uppercase">
        <span>Presupuesto (MXN)</span>
        <span className="font-label-sm text-label-sm text-primary-container font-bold">{formatPrice(value)}</span>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="range"
          aria-label="Presupuesto máximo"
          min={CATALOG_META.minPrice}
          max={CATALOG_META.maxPrice}
          step={1000}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-primary-container bg-surface-container-lowest h-2 cursor-pointer"
        />
        <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant font-mono">
          <span>{formatPrice(CATALOG_META.minPrice)}</span>
          <span>{formatPrice(CATALOG_META.maxPrice)}+</span>
        </div>
      </div>
    </div>
  );
}

/** Barra lateral de filtros. Recibe el estado del hook useCatalog. */
export default function FilterSidebar({ filters, setField, toggleAvailability, onReset }) {
  return (
    <aside className="lg:col-span-3 flex flex-col gap-6 bg-surface-container-low p-6 shadow-xl">
      <div className="flex items-center justify-between bg-surface-container p-3">
        <div className="flex items-center gap-2 font-code-badge text-code-badge text-primary font-bold uppercase tracking-wider">
          <Icon name="tune" className="text-[18px] text-primary-container" />
          <span>Matriz de Filtros</span>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase"
        >
          [Reset]
        </button>
      </div>

      <AvailabilityFilter selected={filters.availability} onToggle={toggleAvailability} />

      <PriceFilter value={filters.maxPrice} onChange={(v) => setField('maxPrice', v)} />

      <div className="flex flex-col gap-3">
        <FilterTitle>Arquitectura de Silicio</FilterTitle>
        <div className="flex flex-wrap gap-1.5 font-label-sm text-label-sm">
          {ARCHITECTURES.map((arch) => (
            <button
              key={arch}
              type="button"
              onClick={() => setField('architecture', arch)}
              className={cx(
                'px-2.5 py-1.5 transition-all',
                filters.architecture === arch
                  ? 'bg-surface-container-highest text-primary font-semibold hover:bg-primary-container hover:text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
              )}
            >
              {arch}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <FilterTitle>TDP / Potencia Energética</FilterTitle>
        <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
          {TDP_OPTIONS.map((opt) => (
            <label key={opt.id} className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-surface-container">
              <input
                type="radio"
                name="tdp"
                className="accent-primary-container"
                checked={filters.tdp === opt.id}
                onChange={() => setField('tdp', opt.id)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <FilterTitle>Factor de Forma</FilterTitle>
        <div className="grid grid-cols-3 gap-2 font-code-badge text-code-badge text-center">
          {FORM_FACTORS.map((ff) => (
            <button
              key={ff}
              type="button"
              onClick={() => setField('formFactor', ff)}
              className={cx(
                'p-2 transition-all',
                filters.formFactor === ff
                  ? 'bg-primary-container text-on-primary font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                  : 'bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary'
              )}
            >
              {ff}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 p-4 bg-surface-container-lowest shadow-inner flex flex-col gap-2">
        <div className="flex items-center gap-2 font-code-badge text-code-badge text-secondary font-bold">
          <span className="w-2 h-2 bg-secondary animate-pulse" />
          <span>DIAGNÓSTICO EN VIVO</span>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          Tu rig actual soporta tarjetas PCIe 5.0 con un cuello de botella proyectado de tan sólo <strong>1.8%</strong>.
        </p>
        <a href="#" className="font-label-sm text-label-sm text-primary-container hover:underline mt-1 font-bold">
          CONSULTAR IA DE COMPATIBILIDAD →
        </a>
      </div>
    </aside>
  );
}
