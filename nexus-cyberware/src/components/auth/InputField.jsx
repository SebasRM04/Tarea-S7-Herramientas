import Icon from '../common/Icon';

/**
 * Campo de formulario con icono a la izquierda y un slot opcional a la derecha.
 * `label` y `hint` forman la cabecera (hint = texto auxiliar a la derecha).
 */
export default function InputField({
  id,
  label,
  hint,
  labelAside,
  icon,
  right,
  inputClassName = 'pr-4',
  ...inputProps
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between">
        <span>{label}</span>
        {hint}
      </label>
      <div className="relative flex items-center">
        <Icon name={icon} className="absolute left-3.5 text-outline text-lg pointer-events-none" />
        <input
          id={id}
          className={`w-full py-2.5 pl-11 rounded-lg bg-surface-container-lowest text-on-surface placeholder-outline font-body-sm text-body-sm shadow-inner transition-all duration-200 outline-none focus:bg-surface-container-high ${inputClassName}`}
          {...inputProps}
        />
        {right}
      </div>
    </div>
  );
}
