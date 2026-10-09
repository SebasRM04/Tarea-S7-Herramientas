import Icon from '../common/Icon';

/** Mensaje de estado bajo el formulario. Renderiza null si no hay feedback. */
export default function FeedbackAlert({ feedback }) {
  if (!feedback) return null;
  return (
    <div
      role="status"
      className="mt-4 p-3 rounded-lg bg-surface-container text-body-sm font-body-sm flex items-center gap-2.5 animate-fadeIn"
    >
      <Icon name={feedback.icon} className="text-primary-container" />
      <span className="text-on-surface">{feedback.message}</span>
    </div>
  );
}
