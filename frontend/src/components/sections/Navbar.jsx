import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, Menu, X, ChevronDown, Rocket, Shield, Activity, RefreshCcw } from "lucide-react";
import Container from "../common/Container";
import { cn } from "../../lib/cn";

const links = [
  { href: "#top", label: "Home" },
  { href: "#product", label: "Products", hasDropdown: true },
  { href: "#expertise", label: "Expertise", hasDropdown: true },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#blog", label: "Blog" },
  { href: "#about", label: "About" }
];

const productDropdown = {
  categories: [
    {
      title: "DRONE SERIES",
      items: [
        { name: "Licopter - P720", href: "#product" },
        { name: "Sudarshana", href: "#sudarshana" },
        { name: "Guardian", href: "#guardian" }
      ]
    },
    {
      title: "COMPARE",
      items: [
        { name: "Compare Drones", href: "#product-analysis", isAction: true }
      ]
    },
    {
      title: "PLATFORMS",
      items: [
        { name: "Terrain Desk", href: "#terrain-desk" }
      ]
    }
  ]
};

export default function Navbar({ isScrolled, currentRoute }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navScrolled = isScrolled || scrolled;

  const isLinkActive = (label) => {
    if (currentRoute === "home" && label === "Home") return true;
    if (currentRoute === "product" && label === "Products") return true;
    return false;
  };

  const handleLinkClick = (e, link) => {
    if (link.hasDropdown) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === link.label ? null : link.label);
    } else {
      setActiveDropdown(null);
      setOpen(false);
    }
  };

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        navScrolled ? "bg-black/40 backdrop-blur-md py-4" : "bg-black/40 py-4"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-2">
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
            {links.map((link) => {
              const active = isLinkActive(link.label);
              return (
                <div key={link.label} className="relative py-2">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={cn(
                      "group flex items-center gap-1 text-base font-medium transition-colors hover:text-gray-300",
                      active ? "text-brand font-semibold" : "text-white"
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300 opacity-60",
                        activeDropdown === link.label ? "rotate-180" : ""
                      )} />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {activeDropdown === "Products" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-full max-w-5xl px-2"
              >
                <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20">
                  <div className="grid grid-cols-12">
                    {/* Left Section: Featured Drone */}
                    <div className="col-span-4 bg-gray-100/80 p-9 flex flex-col justify-between">
                      <div>
                        <span className="text-[0.7rem] font-black uppercase tracking-widest text-[#DA291C] mb-5 block">Featured Products</span>
                        <h4 className="text-3xl font-display font-black text-black mb-4">LiCOPTER-P720</h4>
                        <p className="text-gray-500 text-[0.85rem] font-medium leading-[1.6] mb-8">ISO 27001 certified — your operational data stays in your region</p>
                        <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                          <img
                            src="/licopterp720.jpg"
                            alt="LiCOPTER-P720"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                      </div>

                      <a
                        href="#product"
                        onClick={() => setActiveDropdown(null)}
                        className="group relative inline-flex items-center justify-between bg-[#DA291C] text-white px-5 py-3 rounded-xl font-black text-sm transition-all hover:bg-brand-deep shadow-[0_4px_12px_rgba(218,41,28,0.3)] mt-8 group w-fit gap-6"
                      >
                        <span className="tracking-wide">More Details</span>
                        <div className="flex bg-white rounded-lg size-7 items-center justify-center transition-transform group-hover:rotate-45">
                          <ArrowUpRight className="w-4 h-4 text-[#DA291C]" strokeWidth={3} />
                        </div>
                      </a>
                    </div>

                    {/* Right Section: Categories */}
                    <div className="col-span-8 p-12 grid grid-cols-2 gap-x-16 gap-y-12 bg-white/95 backdrop-blur-xl">
                      {productDropdown.categories.map((cat, i) => (
                        <div key={cat.title} className={cn(cat.title === "PLATFORMS" && "col-span-1")}>
                          <h5 className="text-[0.7rem] font-black tracking-[0.2em] text-gray-800 uppercase mb-8 pl-4">{cat.title}</h5>
                          <div className={cn(
                            "flex flex-col gap-4",
                            cat.title === "COMPARE" ? "flex-col" : "flex-col"
                          )}>
                            {cat.items.map((item) => {
                              const isActive = window.location.hash === item.href;
                              return (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={cn(
                                    "group flex items-center px-4 py-2.5 rounded-xl transition-all duration-300 no-underline w-fit min-w-[180px]",
                                    isActive
                                      ? "bg-brand/10 text-brand shadow-sm shadow-brand/5 border border-brand/10"
                                      : "text-gray-400 hover:text-brand"
                                  )}
                                >
                                  <span className={cn(
                                    "text-lg font-bold tracking-tight transition-colors",
                                    isActive ? "text-brand" : "group-hover:text-brand"
                                  )}>
                                    {item.name}
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-white">
              <Search className="w-5 h-5" />
            </button>

            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg text-base font-semibold hover:bg-brand-mid transition-colors shadow-brand"
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
            <div className="flex flex-col gap-2 px-2 py-6 pb-8">
              {links.map((link) => {
                const active = isLinkActive(link.label);
                return (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between text-lg font-medium py-3 border-b border-white/10",
                        active ? "text-brand" : "text-white"
                      )}
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      {link.label}
                      {link.hasDropdown && <ChevronDown className="w-5 h-5 opacity-50" />}
                    </a>
                  </div>
                );
              })}
              <div className="flex items-center gap-4 mt-6">
                <button className="flex items-center justify-center w-12 h-12 rounded-lg border border-white/20 bg-white/5 text-white">
                  <Search className="w-5 h-5" />
                </button>
                <a
                  href="#contact"
                  className="flex flex-1 justify-center items-center gap-2 bg-brand text-white px-5 py-3 rounded-lg font-semibold shadow-lg"
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
