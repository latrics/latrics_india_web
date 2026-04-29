import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";

/**
 * ActionLink component - a specialized button/link with a distinctive icon box.
 * Often used for "Discover More" or "Download" calls to action.
 * 
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Label text for the action.
 * @param {string} [props.href] - Optional URL. If provided, renders as an <a> tag.
 * @param {string} [props.className] - Additional Tailwind classes for the main container.
 * @param {string} [props.iconClassName] - Optional classes for the icon container (e.g. background gradient).
 * @param {React.ElementType} [props.icon=ArrowUpRight] - Lucide icon component.
 * @returns {JSX.Element} The rendered action link.
 */
export default function ActionLink({ children, href, className, iconClassName, icon: Icon = ArrowUpRight, ...props }) {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      className={cn(
        "group/btn flex w-max items-center gap-4 rounded-xl border border-white/10 bg-black/50 py-1.5 pl-6 pr-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-black/30",
        className
      )}
      {...props}
    >
      <span className="text-sm font-semibold tracking-wide text-white/90">{children}</span>
      <div
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg shadow-[0_2px_10px_rgba(218,41,28,0.4)] transition-transform duration-300 group-hover/btn:scale-110",
          iconClassName || "bg-gradient-to-br from-[#DA291C] to-[#8f1208]"
        )}
      >
        <Icon className="size-4 text-white" strokeWidth={2.5} />
      </div>
    </Component>
  );
}
