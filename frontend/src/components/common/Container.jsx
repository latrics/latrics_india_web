import { cn } from "../../lib/cn";

/**
 * Content width + horizontal padding on an 8px grid (16 / 24 / 32px).
 */
export default function Container({ className, children, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
