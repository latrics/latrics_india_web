import { cn } from "../../utils/cn";

const inputClass =
  "w-full rounded-xl border border-border-strong bg-surface/50 px-4 py-3.5 text-fg placeholder:text-fg-muted transition-[border-color,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-[var(--ui-border-focus)] focus:bg-surface-hover/50 focus:outline-none focus:ring-4 focus:ring-brand-softer disabled:cursor-not-allowed disabled:opacity-55";

/**
 * Accessible label + input pairing for forms.
 */
export default function TextField({
  id,
  label,
  type = "text",
  className,
  labelClassName,
  inputClassName,
  ...inputProps
}) {
  return (
    <div className={cn("grid gap-1", className)}>
      <label htmlFor={id} className={cn("text-label text-fg-secondary pl-3", labelClassName)}>
        {label}
      </label>
      <input id={id} type={type} className={cn(inputClass, inputClassName)} {...inputProps} />
    </div>
  );
}
