import { cn } from "../../utils/cn";

/**
 * Reusable atmospheric background glow commonly used in Latrics sections.
 * @param {string} color - The Tailwind color class prefix (e.g., "brand", "accent", "#DA291C"). Defaults to "brand".
 * @param {string} className - Optional overrides for positioning, size, blur, and opacity.
 */
export default function BackgroundGlow({ color = "brand", className, ...props }) {
  // If color looks like an arbitrary hex/rgba, use it directly, otherwise use as bg-{color}
  const isArbitrary = color.startsWith("#") || color.startsWith("rgba");
  const bgClass = isArbitrary ? `bg-[${color}]/10` : `bg-${color}/10`;

  return (
    <div
      className={cn(
        "absolute rounded-full pointer-events-none -z-10",
        "size-[500px] blur-[120px] opacity-30",
        bgClass,
        className
      )}
      {...props}
    />
  );
}
