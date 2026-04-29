import { cn } from "../../utils/cn";

/**
 * Button component variants mapped to their respective Tailwind classes.
 * Includes primary, secondary, ghost, glass, brand-solid, and tab styles.
 */
const variants = {
  primary:
    "border border-transparent bg-gradient-to-br from-brand via-brand-mid to-brand-hover text-white shadow-brand hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgb(224_50_40_/_0.24)]",
  secondary:
    "border border-border-strong bg-surface/60 text-fg backdrop-blur-sm hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover/75",
  ghost:
    "border border-border bg-transparent text-fg hover:-translate-y-0.5 hover:border-border-strong hover:bg-elevate/70",
  glass:
    "border border-white/10 bg-black/50 text-white backdrop-blur-md hover:border-white/20 hover:bg-black/30 shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
  "brand-solid":
    "bg-brand text-white hover:bg-brand-hover active:bg-brand-deep shadow-lg shadow-brand/25",
  tab:
    "rounded-t-xl transition-all duration-300",
};

/**
 * Base styles applied to all button variants.
 */
const base =
  "inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg px-6 text-sm font-extrabold tracking-wide transition-[transform,box-shadow,background-color,border-color,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/45 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:scale-[0.98] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100";

/**
 * Reusable Button component that adheres to the Latrics design system.
 * 
 * @param {Object} props - Component props.
 * @param {"primary" | "secondary" | "ghost" | "glass" | "brand-solid" | "tab"} [props.variant="primary"] - Visual style variation.
 * @param {string} [props.className] - Additional Tailwind classes for customization.
 * @param {React.ElementType} [props.as="button"] - The HTML element or component to render as.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {string} [props.type] - The HTML button type.
 * @param {React.ReactNode} props.children - Button content.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({
  variant = "primary",
  className,
  as: Comp = "button",
  disabled,
  type = Comp === "button" ? "button" : undefined,
  children,
  ...props
}) {
  const variantClass = variants[variant] ?? variants.primary;

  // Specific logic for tab active state could be handled via className or a separate active prop
  // For now, we allow the consumer to pass active state via className for tab variant

  return (
    <Comp
      type={type}
      disabled={disabled}
      className={cn(base, variantClass, className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

