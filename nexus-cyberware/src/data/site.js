export const NAV_ITEMS = [
  { id: 'catalogo', label: 'Catálogo', href: '#catalogo-seccion' },
  { id: 'configurador-pc-rig', label: 'Configurador PC / Rig', href: '#' },
  { id: 'overclock-firmware', label: 'Overclock & Firmware', href: '#' },
  { id: 'ofertas-drops', label: 'Ofertas // Drops', href: '#' },
];

export const GUARANTEES = [
  {
    icon: 'verified_user',
    title: 'Garantía Holográfica Directa',
    badge: '3 AÑOS COBERTURA 100%',
    badgeClass: 'text-secondary',
    text: 'Validación criptográfica por chip TPM. Reemplazo express en 48 horas sin trámites burocráticos ante fallas de silicio o picos térmicos.',
    tag: 'SEC_PROTOCOL: TPM-2.4-ACTIVE',
  },
  {
    icon: 'speed',
    title: 'Benchmarking Certificado',
    badge: 'TEST DE ESTRÉS PRE-FLASH',
    badgeClass: 'text-primary-container',
    text: 'Cada rig o procesador se somete a 12 horas continuas de Cinebench R24 y FurMark bajo telemetría infrarroja de voltajes.',
    tag: 'STRESS_PASS: 99.98% MINIMUM',
  },
  {
    icon: 'psychology',
    title: 'Asesoría de IA en Tiempo Real',
    badge: 'ZERO-BOTTLENECK ENGINE',
    badgeClass: 'text-primary-fixed',
    text: 'Algoritmo de comprobación de compatibilidad dimensional de chasis, curvas térmicas de refrigeración y compatibilidad de carril PCIe.',
    tag: 'AI_MODEL: NEXUS-CORE-LLM',
  },
  {
    icon: 'local_shipping',
    title: 'Envíos Blindados Punto a Punto',
    badge: 'RASTREO SHA-512 NODO',
    badgeClass: 'text-secondary',
    text: 'Embalaje con espuma antiestática militar y precinto criptográfico con sensor de aceleración e impacto incorporado en caja.',
    tag: 'DELIVERY_NODE: LATAM-EXPRESS-24H',
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Garantía Holográfica',
    dotClass: 'bg-primary-container glow-dot',
    text: 'Validación criptográfica de silicio vía chip TPM 2.4. Cobertura total contra picos de voltaje criogénicos y reemplazo express por falla de firmware.',
  },
  {
    title: 'SEC-TLS & Protocolos',
    dotClass: 'bg-secondary shadow-[0_0_8px_#d0bcff]',
    text: 'Canal cifrado SHA-512 de extremo a extremo en cada transacción. Verificación de integridad de nodo para despacho de hardware militar y grado workstation.',
  },
  {
    title: 'Soporte Técnico',
    dotClass: 'bg-primary-container glow-dot',
    links: [
      'TELEMETRÍA Y DIAGNÓSTICO REMOTO',
      'MANUALES DE BIOS & MICROCODE',
      'SOLICITUD RMA CRIPTOGRÁFICA',
      'CANAL DE DISCORD DE OVERCLOCKERS',
    ],
  },
  {
    title: 'Marco Legal & Compliance',
    dotClass: 'bg-primary-fixed shadow-[0_0_8px_#7df4ff]',
    links: [
      'TÉRMINOS DE ADQUISICIÓN DE HARDWARE',
      'POLÍTICAS DE EXPORTACIÓN NEURAL',
      'PRIVACIDAD DE DATOS BIOMÉTRICOS',
      'CONTRATO DE ARQUITECTURA RIG',
    ],
  },
];
