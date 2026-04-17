import { cn } from "../../lib/cn";

const shells = {
  default: "",
  elevate: "",
  band: "border-y border-border-muted",
  subtle: ""
};

const paddings = {
  default: "section-y-xs",
  sm: "section-y-sm",
  xs: "section-y-xs"
};

/**
 * Consistent section vertical padding + optional background variant.
 */
export default function Section({
  as: Comp = "section",
  variant = "default",
  spacing = "default",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "bg-[#1B1A1A] scroll-mt-20 md:scroll-mt-24",
        paddings[spacing] ?? paddings.default,
        shells[variant] ?? shells.default,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
