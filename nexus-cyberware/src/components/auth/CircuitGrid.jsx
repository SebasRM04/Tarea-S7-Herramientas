/** Patrón SVG de circuito de fondo (decorativo). */
export default function CircuitGrid() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path className="text-primary-container" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle className="fill-primary-container" cx="40" cy="0" r="1.5" />
            <path
              className="text-primary-container"
              d="M 20 20 L 20 40 M 0 20 L 20 20"
              fill="none"
              stroke="currentColor"
              strokeDasharray="2 2"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect fill="url(#circuit-grid)" width="100%" height="100%" />
      </svg>
    </div>
  );
}
