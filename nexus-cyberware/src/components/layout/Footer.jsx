import { FOOTER_COLUMNS } from '../../data/site';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant shadow-[0_-2px_16px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 ${col.dotClass}`} />
                <span className="font-code-badge text-code-badge text-primary font-bold uppercase tracking-wider">
                  {col.title}
                </span>
              </div>
              {col.text && (
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{col.text}</p>
              )}
              {col.links && (
                <ul className="flex flex-col gap-1.5 font-label-sm text-label-sm">
                  {col.links.map((link) => (
                    <li key={link} className="hover:text-on-surface transition-colors cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-label-sm bg-surface-container-low/40 p-4">
          <div className="flex items-center gap-3">
            <span className="text-primary font-bold">[NEXUS_SYS_v4.2.1]</span>
            <span>© {new Date().getFullYear()} NEXUS CYBERWARE SYSTEMS. TODOS LOS DERECHOS RESERVADOS.</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              LATAM NODE PRIMARY
            </span>
            <span>LATENCIA: 12ms</span>
            <span>TLS 1.3 VERIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
