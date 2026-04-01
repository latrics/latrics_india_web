import { cn } from "../../lib/cn";

const base =
  "inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg px-6 text-sm font-extrabold tracking-wide transition-[transform,box-shadow,background-color,border-color,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/45 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:scale-[0.98] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100";

const variants = {
  primary:
    "border border-transparent bg-gradient-to-br from-brand via-brand-mid to-brand-hover text-white shadow-brand hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgb(224_50_40_/_0.24)]",
  secondary:
    "border border-border-strong bg-surface/60 text-fg backdrop-blur-sm hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover/75",
  ghost:
    "border border-border bg-transparent text-fg hover:-translate-y-0.5 hover:border-border-strong hover:bg-elevate/70"
};

/**
 * Primary / secondary / ghost — hover, active, focus, disabled.
 */
export default function Button({
  variant = "primary",
  className,
  as: Comp = "button",
  disabled,
  type = Comp === "button" ? "button" : undefined,
  ...props
}) {
  return (
    <Comp
      type={type}
      disabled={disabled}
      className={cn(base, variants[variant] ?? variants.primary, className)}
      {...props}
    />
  );
}
