import { PRODUCT_IMAGES } from './images';

export const CATALOG_META = {
  totalItems: 128,
  totalPages: 16,
  minPrice: 3000,
  maxPrice: 65000,
  defaultMaxPrice: 45000,
};

export const CATEGORIES = [
  { id: 'all', label: 'Todos los Módulos', icon: 'view_in_ar', count: 128 },
  { id: 'cpu', label: 'Procesadores & APUs Cuánticas', icon: 'memory' },
  { id: 'gpu', label: 'GPUs Neuronales & Ray-Tracing', icon: 'developer_board' },
  { id: 'cooling', label: 'Refrigeración Criogénica', icon: 'ac_unit' },
  { id: 'motherboard', label: 'Placas Madre Obsidian', icon: 'dashboard' },
  { id: 'storage', label: 'Almacenamiento NVMe Cuántico', icon: 'save' },
  { id: 'peripherals', label: 'Periféricos Cyber-Rig', icon: 'keyboard' },
];

export const AVAILABILITY_OPTIONS = [
  { id: 'stock', label: 'En Stock Inmediato', count: 94, countClass: 'text-primary-container' },
  { id: 'preorder', label: 'Pre-orden Neural', count: 22, countClass: 'text-secondary' },
  { id: 'drop', label: 'Drop Limitado / Lab', count: 12, countClass: 'text-primary-fixed' },
];

export const ARCHITECTURES = ['2nm Quantum Gate', 'Tensor Core Gen 5', 'Criogenia Activa', 'RISC-V Hybrid'];

export const TDP_OPTIONS = [
  { id: 'efficient', label: 'Eficiente: < 150W' },
  { id: 'high', label: 'High-End: 150W – 350W' },
  { id: 'extreme', label: 'Rigs Extremos: > 500W' },
];

export const FORM_FACTORS = ['E-ATX', 'ATX', 'ITX'];

export const SORT_OPTIONS = [
  { id: 'performance', label: 'Mayor Potencia / TFLOPS' },
  { id: 'price-asc', label: 'Precio: Menor a Mayor' },
  { id: 'price-desc', label: 'Precio: Mayor a Menor' },
  { id: 'newest', label: 'Novedades de Laboratorio' },
  { id: 'popular', label: 'Popularidad en Rigs' },
];

/**
 * status: 'stock' | 'drop' | 'preorder'
 * accent: color de marca de la tarjeta ('primary' | 'secondary')
 * spec.tone: 'default' | 'primary' | 'secondary' | 'fixed'
 */
export const PRODUCTS = [
  {
    id: 'quantum-x-apu-9900',
    brand: 'NEXUS SILICON',
    name: 'Quantum-X APU 9900 64-Core',
    image: PRODUCT_IMAGES['quantum-x-apu-9900'],
    category: 'cpu',
    status: 'stock',
    accent: 'primary',
    featured: true,
    rating: 4.9,
    reviews: 142,
    price: 18499,
    oldPrice: 21299,
    performance: 98,
    releasedAt: 5,
    specs: [
      { text: '64 Cores // 5.8 GHz' },
      { text: 'PCIe 5.0 x16' },
      { text: '2nm Quantum Gate', tone: 'secondary' },
    ],
  },
  {
    id: 'vortex-rtx-5090',
    brand: 'AEGIS NEURAL CORE',
    name: 'Vortex RTX 5090 Neuro-Sync',
    image: PRODUCT_IMAGES['vortex-rtx-5090'],
    category: 'gpu',
    status: 'drop',
    accent: 'secondary',
    rating: 5.0,
    reviews: 88,
    price: 42899,
    oldPrice: 46500,
    performance: 100,
    releasedAt: 6,
    specs: [
      { text: '32GB GDDR7' },
      { text: 'Tensor Core Gen 5' },
      { text: 'Ray Tracing 4.0', tone: 'primary' },
    ],
  },
  {
    id: 'cryozero-420',
    brand: 'HYPERION CHILL',
    name: 'CryoZero 420mm Liquid Loop',
    image: PRODUCT_IMAGES['cryozero-420'],
    category: 'cooling',
    status: 'stock',
    accent: 'primary',
    rating: 4.8,
    reviews: 96,
    price: 7650,
    oldPrice: 8900,
    performance: 70,
    releasedAt: 3,
    specs: [
      { text: 'Cero Ruido Acústico' },
      { text: 'OLED Telemetría 2.8"' },
      { text: '450W TDP Capacidad', tone: 'fixed' },
    ],
  },
  {
    id: 'obsidian-darkboard',
    brand: 'OBSIDIAN ARCHITECTURE',
    name: 'Obsidian DarkBoard Z890-Cyber',
    image: PRODUCT_IMAGES['obsidian-darkboard'],
    category: 'motherboard',
    status: 'preorder',
    accent: 'primary',
    rating: 4.7,
    reviews: 63,
    price: 14200,
    shipNote: 'ENVÍO FEB 28',
    performance: 82,
    releasedAt: 4,
    specs: [
      { text: '24+2+1 Fases VRM' },
      { text: 'DDR5 8400+ OC' },
      { text: 'Wi-Fi 7 + 10GbE', tone: 'secondary' },
    ],
  },
  {
    id: 'phantom-nvme-gen5',
    brand: 'PHANTOM STORAGE',
    name: 'Phantom NVMe Gen5 4TB 14,000MB/s',
    image: PRODUCT_IMAGES['phantom-nvme-gen5'],
    category: 'storage',
    status: 'stock',
    accent: 'primary',
    rating: 4.9,
    reviews: 112,
    price: 9150,
    oldPrice: 10800,
    performance: 88,
    releasedAt: 2,
    specs: [
      { text: '14,200 MB/s Lectura' },
      { text: 'DRAM Cache 8GB' },
      { text: 'Cifrado Cuántico XTS', tone: 'secondary' },
    ],
  },
  {
    id: 'pulse-rig-titan',
    brand: 'PULSE-ENGINE POWER',
    name: 'Pulse-Rig Titan 1200W Platinum',
    image: PRODUCT_IMAGES['pulse-rig-titan'],
    category: 'peripherals',
    status: 'stock',
    accent: 'primary',
    rating: 4.9,
    reviews: 74,
    price: 6450,
    oldPrice: 7200,
    performance: 60,
    releasedAt: 1,
    specs: [
      { text: 'ATX 3.1 & PCIe 5.1 Native' },
      { text: '94% Eficiencia 80+ Plat' },
      { text: '10 Años Garantía', tone: 'primary' },
    ],
  },
];

/** Estilos por estado de producto (clases completas para que Tailwind las detecte). */
export const STATUS_STYLES = {
  stock: { label: '[EN STOCK / READY]', badge: 'bg-primary-container text-on-primary', dot: 'bg-on-primary' },
  drop: { label: '[DROP EXCLUSIVO]', badge: 'bg-secondary text-on-secondary', dot: 'bg-on-secondary animate-pulse' },
  preorder: { label: '[PRE-ORDEN]', badge: 'bg-surface-container-highest text-on-surface', dot: 'bg-secondary' },
};

/** Clases por acento de marca de tarjeta. */
export const ACCENT_STYLES = {
  primary: {
    brand: 'text-primary-container',
    titleHover: 'group-hover:text-primary',
    glow: 'hover:shadow-[0_4px_30px_rgba(0,240,255,0.15)]',
  },
  secondary: {
    brand: 'text-secondary',
    titleHover: 'group-hover:text-secondary',
    glow: 'hover:shadow-[0_4px_30px_rgba(208,188,255,0.15)]',
  },
};

export const SPEC_TONES = {
  default: 'text-on-surface-variant',
  primary: 'text-primary-container',
  secondary: 'text-secondary',
  fixed: 'text-primary-fixed',
};
