import { cn } from "../../utils/cn";

/**
 * Centered content container that aligns with the Navbar island.
 * Uses a double-padding system:
 * 1. Outer padding (px-4 md:px-8) to create the "island" inset from screen edges.
 * 2. Inner padding (px-6 md:px-8) to match the Navbar's internal content alignment.
 * 
 * @param {Object} props
 * @param {string} [props.className] - Classes for the inner (max-width) container.
 * @param {string} [props.wrapperClassName] - Classes for the outer (screen-width) wrapper.
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export default function Container({ className, wrapperClassName, children, ...props }) {
  return (
    <div className={cn("w-full px-4 md:px-8", wrapperClassName)}>
      <div
        className={cn("relative w-full max-w-[1400px] mx-auto", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}



