import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, Menu, X, ChevronDown } from "lucide-react";
import Container from "../common/Container";
import { cn } from "../../lib/cn";

const links = [
  { href: "#top", label: "Home", active: true },
  { href: "#products", label: "Products", hasDropdown: true },
  { href: "#expertise", label: "Expertise", hasDropdown: true },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#blog", label: "Blog" },
  { href: "#about", label: "About" }
];

export default function Navbar({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navScrolled = isScrolled || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        navScrolled ? "bg-black/40 backdrop-blur-md py-4" : "bg-black/40 py-4"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center no-underline outline-none group">
            <img
              src="/latrics_logo.svg"
              alt="Latrics Logo"
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "group flex items-center gap-1 text-base font-medium transition-colors hover:text-gray-300",
                  link.active ? "text-[#DA291C] font-semibold" : "text-white"
                )}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 opacity-60" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-white">
              <Search className="w-5 h-5" />
            </button>

            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 bg-[#DA291C] text-white px-5 py-2.5 rounded-lg text-base font-semibold hover:bg-[#B52217] transition-colors shadow-[0_4px_14px_rgba(218,41,28,0.39)] hover:shadow-[0_6px_20px_rgba(218,41,28,0.23)]"
            >
              Contact Us <ArrowUpRight className="w-5 h-5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white lg:hidden hover:bg-white/10 transition-colors"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-black/95 backdrop-blur-xl lg:hidden mt-4"
          >
            <div className="flex flex-col gap-2 px-6 py-6 pb-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between text-lg font-medium py-3 border-b border-white/10",
                    link.active ? "text-[#DA291C]" : "text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-5 h-5 opacity-50" />}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-6">
                <button className="flex items-center justify-center w-12 h-12 rounded-lg border border-white/20 bg-white/5 text-white">
                  <Search className="w-5 h-5" />
                </button>
                <a
                  href="#contact"
                  className="flex flex-1 justify-center items-center gap-2 bg-[#DA291C] text-white px-5 py-3 rounded-lg font-semibold shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  Contact Us <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
