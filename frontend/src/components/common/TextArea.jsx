import { cn } from "../../lib/cn";

const textareaClass =
  "w-full rounded-2xl border border-border-strong bg-surface/50 px-4 py-3.5 text-fg placeholder:text-fg-muted transition-[border-color,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-[var(--ui-border-focus)] focus:bg-surface-hover/50 focus:outline-none focus:ring-4 focus:ring-brand-softer disabled:cursor-not-allowed disabled:opacity-55 min-h-[120px] resize-y";

/**
 * Component: TextArea
 * 
 * Multi-line text input component designed specifically for large messages.
 * Synchronized styling with the standard TextField.
 *
 * @param {string} id - Required for linking label to input for accessibility
 * @param {string} label - Display label text
 * @param {string} textareaClassName - Optional override for the <textarea> element
 */
export default function TextArea({
  id,
  label,
  className,
  textareaClassName,
  ...textareaProps
}) {
  return (
    <div className={cn("grid gap-1", className)}>
      <label htmlFor={id} className="text-label text-fg-secondary pl-4">
        {label}
      </label>
      <textarea 
        id={id} 
        className={cn(textareaClass, textareaClassName)} 
        {...textareaProps} 
      />
    </div>
  );
}
