import { useEffect, useRef } from 'react';
import Icon from '../common/Icon';

/** Buscador del header. Ctrl/⌘ + K enfoca el input. */
export default function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="hidden md:flex flex-1 max-w-md mx-2">
      <label className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-surface-container-lowest/80 text-on-surface-variant focus-within:ring-1 focus-within:ring-primary-container/60">
        <span className="flex items-center gap-2 flex-1 min-w-0">
          <Icon name="search" className="text-[18px] text-primary-container shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Buscar APUs, Neural GPUs, Memorias Criogénicas..."
            className="w-full bg-transparent outline-none font-code-badge text-code-badge text-on-surface placeholder:text-on-surface-variant/70 truncate"
          />
        </span>
        <kbd className="font-label-sm text-label-sm px-1.5 py-0.5 bg-surface-container-high text-primary font-bold shrink-0">
          CTRL+K
        </kbd>
      </label>
    </div>
  );
}
