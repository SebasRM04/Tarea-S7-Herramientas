/** 18499 -> "$18,499" */
export const formatPrice = (n) => `$${Number(n).toLocaleString('es-MX')}`;
