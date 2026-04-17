import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, Menu, X, ChevronDown, Rocket, Shield, Activity, RefreshCcw } from "lucide-react";
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

const productDropdown = {
  categories: [
    {
      title: "DRONE SERIES",
      items: [
        {
          name: "Latrix Licopter-X1",
          desc: "Industrial-grade helicopter drone for heavy-duty corridor mapping.",
          icon: Rocket,
          tag: "HEAVY LIFT"
        },
        {
          name: "Latrix Quad-Pro",
          desc: "Precision quadcopter for high-resolution industrial inspection.",
          icon: Shield,
        },
        {
          name: "Latrix Nano-S",
          desc: "Lightweight autonomous scout for confined space telemetry.",
          icon: Activity,
          tag: "NEW"
        }
      ]
    },
    {
      title: "TOOLS & ANALYTICS",
      items: [
        {
          name: "Compare Drones",
          desc: "Side-by-side technical specification comparison tool.",
          icon: RefreshCcw,
          isAction: true
        }
      ]
    }
  ]
};

export default function Navbar({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      onMouseLeave={() => setActiveDropdown(null)}
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
            {links.map((link) => (
              <div 
                key={link.label}
                className="relative py-2"
                onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.label) : setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={cn(
                    "group flex items-center gap-1 text-base font-medium transition-colors hover:text-gray-300",
                    link.active ? "text-[#DA291C] font-semibold" : "text-white"
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
            ))}
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
                    <div className="col-span-4 bg-gray-50 p-8 border-r border-gray-100 flex flex-col justify-between">
                      <div>
                        <span className="text-[0.65rem] font-black uppercase tracking-widest text-brand mb-4 block">Featured Release</span>
                        <h4 className="text-2xl font-display font-black text-black mb-3">Licopter X-Edition</h4>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">Our most advanced autonomous helicopter platform designed for long-range industrial missions.</p>
                        <div className="h-40 w-full rounded-2xl bg-gray-200 animate-pulse overflow-hidden relative">
                           {/* Placeholder for drone image */}
                           <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
                        </div>
                      </div>
                      <a href="#featured" className="inline-flex items-center gap-2 text-brand font-bold text-sm hover:gap-3 transition-all mt-4">
                        Details <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Right Section: Categories */}
                    <div className="col-span-8 p-10 grid grid-cols-2 gap-x-12 gap-y-10">
                      {productDropdown.categories.map((cat, i) => (
                        <div key={cat.title} className={cn(i === 1 ? "pb-0" : "")}>
                          <h5 className="text-[0.65rem] font-black tracking-[0.2em] text-gray-400 uppercase mb-6">{cat.title}</h5>
                          <div className="space-y-6">
                            {cat.items.map((item) => (
                              <a 
                                key={item.name} 
                                href={`#${item.name.toLowerCase().replace(/ /g, '-')}`}
                                className="group flex items-start gap-4 no-underline"
                              >
                                <div className={cn(
                                  "flex-shrink-0 size-10 rounded-xl flex items-center justify-center transition-all duration-300",
                                  item.isAction ? "bg-brand text-white shadow-brand" : "bg-gray-100 text-black group-hover:bg-brand group-hover:text-white"
                                )}>
                                  <item.icon className="size-5" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-base font-bold text-black group-hover:text-brand transition-colors">{item.name}</span>
                                    {item.tag && (
                                      <span className="text-[0.6rem] font-black px-1.5 py-0.5 rounded bg-brand/10 text-brand uppercase tracking-wider">{item.tag}</span>
                                    )}
                                  </div>
                                  <p className="text-[0.8rem] text-gray-500 leading-tight mt-1">{item.desc}</p>
                                </div>
                              </a>
                            ))}
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
            <div className="flex flex-col gap-2 px-2 py-6 pb-8">
              {links.map((link) => (
                <div key={link.label}>
                  <a
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
                </div>
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
