import { cn } from "../../lib/cn";

const shells = {
  elevated:
    "rounded-[var(--radius-card-lg)] border border-border bg-gradient-to-b from-fg/[0.045] to-fg/[0.01] shadow-card",
  /** Flat dark panel — live metrics / telemetry (Linear-style) */
  telemetry:
    "rounded-[var(--radius-card-lg)] border border-border-muted bg-surface shadow-[0_8px_40px_rgb(0_0_0_/_0.45),inset_0_1px_0_rgb(255_255_255_/_0.04)]",
  inset:
    "rounded-[var(--radius-card-lg)] border border-border bg-surface-inset/92 shadow-soft backdrop-blur-md",
  flat: "rounded-[var(--radius-card-lg)] border border-border bg-surface/45 backdrop-blur-sm",
  glass: "rounded-[var(--radius-card)] border border-border bg-surface/35 backdrop-blur-md"
};

/**
 * Elevated surfaces — tokens align with design system layering.
 */
export default function Card({ as: Comp = "div", variant = "elevated", className, children, ...props }) {
  return (
    <Comp className={cn(shells[variant] ?? shells.elevated, className)} {...props}>
      {children}
    </Comp>
  );
}
