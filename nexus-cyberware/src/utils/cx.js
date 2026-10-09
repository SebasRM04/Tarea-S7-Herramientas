/** Une clases condicionales: cx('a', cond && 'b') -> "a b" */
export const cx = (...parts) => parts.filter(Boolean).join(' ');
