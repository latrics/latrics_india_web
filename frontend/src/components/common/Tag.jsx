import { cn } from "../../lib/cn";

/**
 * Eyebrow chip — secondary surface + accent icon.
 */
export default function Tag({ icon: Icon, children, className }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-border bg-elevate/85 px-3.5 py-2 text-[0.6875rem] font-extrabold uppercase tracking-[0.14em] text-fg",
        className
      )}
    >
      {Icon ? <Icon className="size-3.5 shrink-0 text-accent" strokeWidth={2} aria-hidden /> : null}
      {children}
    </span>
  );
}
