import { cn } from "../../utils/cn";

/**
 * A reusable badge component used primarily in section headers.
 * Combines an icon with an uppercase text label in a stylized pill shape.
 * 
 * @param {Object} props
 * @param {React.ElementType} [props.icon] - Optional Lucide or SVG React component to display as the badge icon.
 * @param {string} props.text - The text to display next to the icon.
 * @param {string} [props.className] - Optional Tailwind classes to override the outer container.
 * @param {string} [props.iconBoxClassName] - Optional Tailwind classes to override the icon's background container.
 * @param {string} [props.iconClassName="size-5 fill-white text-white"] - Optional Tailwind classes for the icon itself.
 * @returns {JSX.Element} The rendered section badge.
 */
export default function SectionBadge({
  icon: Icon,
  text,
  className,
  iconBoxClassName,
  iconClassName = "size-5 fill-white text-white"
}) {
  return (
    <div className={cn("inline-flex items-center gap-3 rounded-lg bg-white p-1 pr-5 shadow-xl transition-transform hover:scale-105", className)}>
      <div className={cn(
        "flex h-8 w-8 items-center justify-center rounded-lg bg-brand shadow-sm flex-shrink-0",
        iconBoxClassName
      )}>
        {Icon && <Icon className={iconClassName} strokeWidth={2.5} />}
      </div>
      <span className="text-[0.70rem] font-black uppercase tracking-[0.15em] text-black pt-0.5">
        {text}
      </span>
    </div>
  );
}
