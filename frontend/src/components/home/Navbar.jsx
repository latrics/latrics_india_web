import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, Menu, X, ChevronDown, Rocket, Shield, Activity, RefreshCcw, History } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { cn } from "../../utils/cn";

/**
 * Navigation links configuration.
 * Defines the main menu items and their dropdown behavior.
 */
const links = [
  { href: "#", label: "Home" },
  { href: "#product", label: "Products", hasDropdown: true },
  { href: "#expertise", label: "Expertise", hasDropdown: false },
  { href: "#case-studies", label: "Outcomes", hasDropdown: false },
  { href: "#blog", label: "Blog", hasDropdown: false },
  { href: "#about", label: "About", hasDropdown: false }
];

/**
 * Dropdown data for the "Products" menu.
 * Structured into categories for the mega-menu layout.
 */
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

/**
 * Dropdown data for Expertise, Outcomes, Blog, and About.
 * Standardized structure for consistent rendering in both desktop and mobile menus.
 */


const outcomesDropdown = {
  categories: [
    {
      title: "IMPACT",
      items: [
        { name: "Success Stories", href: "#case-studies" },
        { name: "Industrial Impact", href: "#outcomes" }
      ]
    }
  ]
};

const blogDropdown = {
  categories: [
    {
      title: "UPDATES",
      items: [
        { name: "Latest News", href: "#highlights" },
        { name: "Industry Insights", href: "#highlights" },
        { name: "Technical Blog", href: "#highlights" }
      ]
    }
  ]
};

const aboutDropdown = {
  categories: [
    {
      title: "COMPANY",
      items: [
        { name: "Company Profile", href: "#about" },
        { name: "Timeline", href: "#about" },
        { name: "Vision & Mission", href: "#about" },
        { name: "Our Values", href: "#about" }
      ]
    }
  ]
};

/**
 * Navbar Component
 * 
 * Features:
 * - Sticky behavior with background blur on scroll.
 * - Mega-menu for "Products" on desktop.
 * - Expanding search bar with auto-focus.
 * - Fully responsive mobile menu with accordion dropdowns.
 * - Outside click detection to close menus.
 * 
 * @param {boolean} isScrolled - Prop to manually trigger scrolled state from parent.
 * @param {string} currentRoute - Current active page/route for highlighting links.
 */
export default function Navbar({ isScrolled, currentRoute }) {
  // --- State Management ---
  const [open, setOpen] = useState(false); // Mobile menu open/close state
  const [scrolled, setScrolled] = useState(false); // Internal scroll tracking
  const [activeDropdown, setActiveDropdown] = useState(null); // Currently open desktop dropdown (label)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false); // Search bar expansion state
  const [isDropdownClosing, setIsDropdownClosing] = useState(false); // Track if search dropdown is in exit animation
  const [searchQuery, setSearchQuery] = useState(""); // Current search input value

  // --- Refs ---
  const navRef = useRef(null); // Reference to the entire navbar for click-away logic
  const searchInputRef = useRef(null); // Reference to search input for auto-focus

  /**
   * Helper: Close search with animation sync
   */
  const closeSearch = () => {
    if (isSearchExpanded) {
      setIsDropdownClosing(true);
    }
    setIsSearchExpanded(false);
    setSearchQuery("");
  };

  /**
   * Effect: Search Auto-focus
   * Focuses the search input automatically when expanded.
   */
  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  /**
   * Effect: Route Change Cleanup
   * Automatically closes the search bar when the user navigates to a new page.
   */
  useEffect(() => {
    closeSearch();
  }, [currentRoute]);

  /**
   * Effect: Prevent Body Scroll
   * Disables scrolling on the main page when the mobile menu is open.
   */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleClickOutside = (event) => {
    // Close all menus if user clicks outside the navbar area
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveDropdown(null);
      setOpen(false);
      closeSearch();
    }
  };

  /**
   * Effect: Global Event Listeners
   * Handles scroll detection and outside-click menu closing.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchExpanded]); // Re-bind with latest state for handleClickOutside

  // Combined scrolled state (prop + internal)
  const navScrolled = isScrolled || scrolled;

  /**
   * Helper: Check if a link is active based on currentRoute.
   */
  const isLinkActive = (label) => {
    if (currentRoute === "home" && label === "Home") return true;
    if (currentRoute === "product" && label === "Products") return true;
    if (currentRoute === "expertise" && label === "Expertise") return true;
    if (currentRoute === "about" && label === "About") return true;
    if (currentRoute === "blog" && label === "Blog") return true;
    return false;
  };

  /**
   * Interaction Handler: Link Clicks
   * Manages dropdown toggling on desktop.
   */
  const handleLinkClick = (e, link) => {
    if (link.hasDropdown) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === link.label ? null : link.label);
    } else {
      setActiveDropdown(null);
      setOpen(false);
      closeSearch();
    }
  };

  /**
   * Search Logic: Gather all searchable entities from the navigation structure.
   */
  const allSearchableItems = [
    ...links.map(l => ({ label: l.label, href: l.href, category: "Pages" })),
    ...productDropdown.categories.flatMap(c => c.items.map(i => ({ label: i.name, href: i.href, category: "Products" }))),

    ...outcomesDropdown.categories.flatMap(c => c.items.map(i => ({ label: i.name, href: i.href, category: "Outcomes" }))),
    ...blogDropdown.categories.flatMap(c => c.items.map(i => ({ label: i.name, href: i.href, category: "Updates" }))),
    ...aboutDropdown.categories.flatMap(c => c.items.map(i => ({ label: i.name, href: i.href, category: "Company" })))
  ];

  // Filter out duplicates and items without names
  const uniqueItems = allSearchableItems.reduce((acc, current) => {
    const x = acc.find(item => item.label === current.label);
    if (!x) return acc.concat([current]);
    return acc;
  }, []);

  const searchResults = searchQuery.trim().length >= 2
    ? uniqueItems.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8)
    : [];

  /**
   * Suggestions Logic: Show top-tier products and sections when query is empty or short.
   */
  const trendingSuggestions = [
    { label: "LiCOPTER-P720", href: "#product", category: "Featured" },

    // Todo: Uncomment these 3 lines later for Search Suggestions or may Add more options
    // { label: "Sudarshana", href: "#sudarshana", category: "Drone Series" },
    // { label: "Terrain Desk", href: "#terrain-desk", category: "Platforms" },
    // { label: "Expertise", href: "#expertise", category: "Pages" }
  ];

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 pt-4 md:pt-6",
      )}
    >
      {/* 
        Container provides the "Island" constraint.
        Classes here handle the glassmorphism aesthetic and vertical padding shifts on scroll.
      */}
      <Container
        className={cn(
          "relative",
          "bg-[#050A11]/30 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
          "rounded-lg",
          "py-4 px-6 md:px-8",
          "transition-all duration-300"
        )}
      >
        <div className="flex items-center justify-between">
          {/* --- LOGO SECTION --- */}
          <a href="#" className="font-sans flex items-center no-underline outline-none group">
            <img
              src="/latrics_logo.svg"
              alt="Latrics Logo"
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* --- DESKTOP NAVIGATION --- */}
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

          {/* --- MEGA MENU DROPDOWN (DESKTOP) --- */}
          <AnimatePresence>
            {activeDropdown === "Products" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="hidden lg:block absolute left-1/2 top-full -translate-x-1/2 mt-4 w-full max-w-5xl px-4 md:px-8"
              >
                <div className="bg-white rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20">
                  <div className="grid grid-cols-12">
                    {/* Featured Product Highlight (Left Column) */}
                    <div className="col-span-4 bg-gray-100/80 p-9 flex flex-col justify-between">
                      <div>
                        <span className="text-[0.7rem] font-black uppercase tracking-widest text-[#DA291C] mb-5 block">Featured Products</span>
                        <h4 className="text-3xl font-display font-black text-black mb-4">LiCOPTER-P720</h4>
                        <p className="text-gray-500 text-[0.85rem] font-medium leading-[1.6] mb-8">ISO 27001 certified — your operational data stays in your region</p>
                        <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
                          <img
                            src="/licopterp720.jpg"
                            alt="LiCOPTER-P720"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                      </div>

                      <Button
                        as="a"
                        href="#product"
                        variant="brand-solid"
                        onClick={() => setActiveDropdown(null)}
                        className="group relative inline-flex items-center justify-between px-5 py-3 rounded-lg font-black text-sm transition-all shadow-[0_4px_12px_rgba(218,41,28,0.3)] mt-8 w-fit gap-6"
                      >
                        <span className="font-sans tracking-wide">More Details</span>
                        <div className="flex bg-white rounded-lg size-7 items-center justify-center transition-transform group-hover:rotate-45">
                          <ArrowUpRight className="w-4 h-4 text-[#DA291C]" strokeWidth={3} />
                        </div>
                      </Button>
                    </div>

                    {/* Categorized Links (Right Column) */}
                    <div className="col-span-8 p-12 grid grid-cols-2 gap-x-16 gap-y-12 bg-white/95 backdrop-blur-xl">
                      {productDropdown.categories.map((cat, i) => (
                        <div key={cat.title} className={cn(cat.title === "PLATFORMS" && "col-span-1")}>
                          <h5 className="text-[0.7rem] font-black tracking-[0.2em] text-gray-800 uppercase mb-8 pl-4">{cat.title}</h5>
                          <div className="flex flex-col gap-4">
                            {cat.items.map((item) => {
                              const isActive = window.location.hash === item.href;
                              const isTerrainDesk = item.name === "Terrain Desk";
                              return (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={cn(
                                    "group flex items-center px-4 py-2.5 rounded-lg transition-all duration-300 no-underline w-fit min-w-[180px]",
                                    isTerrainDesk
                                      ? "bg-brand/10 text-brand border border-brand/20 shadow-sm shadow-brand/5 backdrop-blur-md"
                                      : isActive
                                        ? "bg-brand/10 text-brand shadow-sm shadow-brand/5 border border-brand/10"
                                        : "text-gray-400 hover:text-brand"
                                  )}
                                >
                                  <span className={cn(
                                    "text-lg font-bold tracking-tight transition-colors",
                                    (isActive || isTerrainDesk) ? "text-brand" : "group-hover:text-brand"
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

          {/* --- UTILITY BUTTONS (SEARCH & CONTACT) --- */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Bar - Responsive Implementation */}
            <div className="relative">
              <motion.div
                initial={false}
                animate={{
                  width: (isSearchExpanded || isDropdownClosing)
                    ? (typeof window !== "undefined" && window.innerWidth < 1024 ? "40px" : "280px")
                    : (typeof window !== "undefined" && window.innerWidth < 1024 ? "40px" : "44px")
                }}
                className={cn(
                  "relative flex items-center h-10 lg:h-11 rounded-lg border border-white/10 bg-white/5 transition-colors overflow-hidden",
                  (isSearchExpanded || isDropdownClosing) ? "bg-white/10 border-white/30 shadow-lg" : "hover:bg-white/10"
                )}
              >
                <div className="flex items-center w-full h-full">
                  <button
                    onClick={() => {
                      if (isSearchExpanded) {
                        setIsDropdownClosing(true);
                      }
                      setIsSearchExpanded(!isSearchExpanded);
                    }}
                    className="flex items-center rounded-lg justify-center min-w-[40px] lg:min-w-[44px] h-full text-white outline-none"
                  >
                    {isSearchExpanded && typeof window !== "undefined" && window.innerWidth < 1024 ? (
                      <X className="w-5 h-5 text-brand" />
                    ) : (
                      <Search className="w-5 h-5" />
                    )}
                  </button>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchResults.length > 0) {
                        window.location.href = searchResults[0].href;
                        closeSearch();
                      }
                    }}
                    placeholder="Search..."
                    className={cn(
                      "bg-transparent border-none outline-none text-white text-sm w-full transition-all duration-300",
                      isSearchExpanded ? "opacity-100 pr-4 lg:flex" : "opacity-0 pointer-events-none",
                      "hidden lg:flex" // Hide input from main bar on mobile
                    )}
                  />
                </div>
              </motion.div>

              {/* Search Dropdown (Mobile & Desktop) */}
              <AnimatePresence onExitComplete={() => setIsDropdownClosing(false)}>
                {isSearchExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={cn(
                      "bg-[#0d0f14] backdrop-blur-2xl border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.8)] rounded-lg overflow-hidden z-[100]",
                      // Mobile: Fixed positioning to avoid alignment issues with the parent button
                      "fixed inset-x-4 top-[84px] lg:absolute lg:inset-x-auto lg:top-full lg:right-0 lg:mt-3 lg:w-full lg:min-w-[320px]"
                    )}
                  >
                    <div className="py-2 max-h-[80vh] lg:max-h-[400px] overflow-y-auto custom-scrollbar">
                      {/* --- MOBILE ONLY: Search Input at Top --- */}
                      <div className="px-5 pt-4 pb-2 lg:hidden">
                        <div className="relative flex items-center h-12 rounded-lg border border-white/20 bg-white/5 px-4 focus-within:border-brand/50 transition-colors">
                          <Search className="w-5 h-5 text-white/40 shrink-0" />
                          <input
                            autoFocus
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search everything..."
                            className="bg-transparent border-none outline-none text-white text-base w-full ml-3"
                          />
                        </div>
                        <div className="h-px w-full bg-white/5 mt-6" />
                      </div>

                      {/* --- SUGGESTIONS (When query is short) --- */}
                      {searchQuery.trim().length < 2 && (
                        <div className="px-5 py-5">
                          <span className="block text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/50 mb-5 ml-1">Trending Searches</span>
                          <div className="flex flex-col gap-2">
                            {trendingSuggestions.map((s) => (
                              <button
                                key={s.label}
                                onClick={() => {
                                  window.location.href = s.href;
                                  closeSearch();
                                }}
                                className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 group"
                              >
                                <span className="text-white/80 text-sm font-semibold tracking-tight transition-colors group-hover:text-white">{s.label}</span>
                                <History size={16} className="text-white/20 transition-colors group-hover:text-white/40" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- SEARCH RESULTS --- */}
                      {searchQuery.trim().length >= 2 && searchResults.length > 0 && (
                        <div className="px-2">
                          <div className="px-4 py-2 opacity-40">
                            <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-white">Results</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            {searchResults.map((result, idx) => (
                              <a
                                key={`${result.label}-${idx}`}
                                href={result.href}
                                onClick={() => closeSearch()}
                                className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                              >
                                <div className="flex flex-col">
                                  <span className="text-white text-sm font-bold group-hover:text-brand transition-colors">
                                    {result.label}
                                  </span>
                                  <span className="text-[0.6rem] text-white/40 uppercase tracking-widest font-black">
                                    {result.category}
                                  </span>
                                </div>
                                <ArrowUpRight className="size-4 text-white/0 group-hover:text-brand group-hover:opacity-100 transition-all" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* --- NO RESULTS --- */}
                      {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                        <div className="p-10 text-center">
                          <Search className="w-10 h-10 mx-auto text-white/10 mb-4" />
                          <span className="text-white/30 text-xs font-bold uppercase tracking-widest">No matching results</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button (Desktop Only) */}
            <div className="hidden lg:block">
              <Button
                as="a"
                href="#request-demo-form"
                variant="brand-solid"
                className="flex items-center gap-2 px-6 py-2 h-11 rounded-lg text-sm font-bold shadow-lg shadow-brand/20 hover:scale-[1.02] transition-all"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="font-sans inline-flex items-center justify-center w-10 h-10 rounded-lg text-white lg:hidden hover:bg-white/10 transition-colors"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* --- MOBILE NAVIGATION CARD --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-[60] lg:hidden"
          >
            <div className="overflow-y-auto no-scrollbar max-h-[calc(100dvh-160px)] rounded-lg border border-gray-200 bg-white p-6 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const active = isLinkActive(link.label);
                  const isExpanded = activeDropdown === link.label;

                  // Map sub-sections based on link label for accordion behavior
                  let dropdownData = null;
                  if (link.label === "Products") dropdownData = productDropdown;

                  if (link.label === "Outcomes") dropdownData = outcomesDropdown;
                  if (link.label === "Blog") dropdownData = blogDropdown;
                  if (link.label === "About") dropdownData = aboutDropdown;

                  const Content = link.hasDropdown ? "button" : "a";
                  const contentProps = link.hasDropdown
                    ? { onClick: (e) => handleLinkClick(e, link) }
                    : { href: link.href, onClick: () => setOpen(false) };

                  return (
                    <div key={link.label} className="flex flex-col">
                      <Content
                        {...contentProps}
                        className={cn(
                          "flex items-center justify-between py-4 text-xl font-bold transition-colors",
                          active ? "text-brand" : "text-gray-900"
                        )}
                      >
                        {link.label}
                        {link.hasDropdown && (
                          <ChevronDown className={cn(
                            "w-5 h-5 transition-transform duration-300",
                            isExpanded ? "rotate-180 text-brand" : "text-gray-400"
                          )} />
                        )}
                      </Content>

                      {/* Nested Sub-sections Accordion (Mobile) */}
                      <AnimatePresence>
                        {link.hasDropdown && isExpanded && dropdownData && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-4 pb-4 pl-4 border-l border-gray-200 ml-1">
                              {dropdownData.categories.map((cat) => (
                                <div key={cat.title} className="flex flex-col gap-2">
                                  <span className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 mt-2">
                                    {cat.title}
                                  </span>
                                  {cat.items.map((item) => {
                                    const isTerrainDesk = item.name === "Terrain Desk";
                                    return (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                          "text-base py-2 px-3 font-medium transition-colors rounded-lg w-fit",
                                          isTerrainDesk
                                            ? "text-brand bg-brand/10 border border-brand/20 backdrop-blur-md"
                                            : "text-gray-600 hover:text-brand"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    );
                                  })}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Contact Button */}
              <div className="mt-8 flex items-center border-t border-gray-200 pt-8">
                <Button
                  as="a"
                  href="#request-demo-form"
                  variant="brand-solid"
                  onClick={() => setOpen(false)}
                  className="flex h-14 flex-1 items-center justify-center gap-3 rounded-xl font-sans text-base font-bold text-white shadow-[0_12px_24px_rgba(218,41,28,0.3)] transition-all"
                >
                  Contact Us <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

