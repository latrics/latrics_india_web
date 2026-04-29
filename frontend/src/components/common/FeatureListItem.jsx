import { cn } from "../../utils/cn";

/**
 * Reusable list item with a dot or custom icon.
 * Used extensively in Expertise and Product feature lists.
 */
export default function FeatureListItem({ 
  text, 
  children, 
  icon: Icon, 
  className,
  textClassName,
  iconClassName
}) {
  return (
    <div className={cn("flex items-center gap-4 group", className)}>
      {Icon ? (
        <Icon className={cn("size-5 text-brand transition-transform duration-300 group-hover:scale-110", iconClassName)} />
      ) : (
        <div className={cn(
          "size-1.5 rounded-full bg-brand transition-transform duration-300 group-hover:scale-150 shadow-[0_0_8px_rgba(218,41,28,0.6)]",
          iconClassName
        )} />
      )}
      <div className={cn("text-body-lg font-medium text-white/80 tracking-tight transition-colors group-hover:text-white", textClassName)}>
        {text || children}
      </div>
    </div>
  );
}
