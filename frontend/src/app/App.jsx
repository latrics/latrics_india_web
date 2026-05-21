import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "./motion";
import { industryImages } from "../constants/siteContent";
import { useNavbarScroll } from "../hooks/useNavbarScroll";
import { useDemoRequest } from "../hooks/useDemoRequest";
import GridBackground from "../components/common/GridBackground";
import { cn } from "../utils/cn";

import BannerMarquee from "../components/common/BannerMarquee";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Highlights from "../components/home/Highlights";
import Brochure from "../components/home/Brochure";
import WhyLatrics from "../components/home/WhyLatrics";
import Industries from "../components/home/Industries";
import CaseStudies from "../components/home/CaseStudies";
import Milestones from "../components/home/Milestones";
import DemoForm from "../components/home/DemoForm";
import Footer from "../components/home/Footer";
import HomePopup from "../components/home/HomePopup";
import ProductPage from "../components/product/ProductPage";
import AboutPage from "../components/about/AboutPage";
import ExpertisePage from "../components/expertise/ExpertisePage";
import OutcomesPage from "../components/outcomes/OutcomesPage";
import ComingSoon from "../components/common/ComingSoon";
import { Rocket, ShieldAlert, Layers, Flame, Activity, PenTool } from "lucide-react";

/**
 * Main Application Composition Root.
 * 
 * Architecture:
 * - This file acts purely as a macro-orchestrator. It imports smart 'Hooks' to manage state
 *   and injects that state downward into dumb 'Presentational Components' (Sections).
 * - React `framer-motion` is initialized here to wrap the entire app payload in a fade-in animation.
 * 
 * Structure:
 * 1. Global State Init (Hooks)
 * 2. Background Glow Effects
 * 3. Primary Navigation (Sticky)
 * 4. Statically Ordered Page Sections
 * 5. Global Footer
 */
export default function App() {
  const isScrolled = useNavbarScroll();

  const [activeTab, setActiveTab] = useState("Mining");
  const {
    formData,
    setFormData,
    isSubmitting,
    submitState,
    handleFormSubmit
  } = useDemoRequest();

  const [currentRoute, setCurrentRoute] = useState(
    window.location.hash.includes("product") ? "product" :
      window.location.hash.includes("about") ? "about" :
        window.location.hash.includes("expertise") ? "expertise" :
          window.location.hash.includes("aerospace") ? "aerospace" :
            window.location.hash.includes("digital-intelligence") ? "digital-intelligence" :
              window.location.hash.includes("energy") ? "energy" :
                window.location.hash.includes("blog") ? "blog" : "home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("product") && !hash.includes("sudarshana") && !hash.includes("guardian")) {
        setCurrentRoute("product");
      } else if (hash.includes("about")) {
        setCurrentRoute("about");
      } else if (hash.includes("expertise")) {
        setCurrentRoute("expertise");
      } else if (hash.includes("sudarshana")) {
        setCurrentRoute("sudarshana");
      } else if (hash.includes("guardian")) {
        setCurrentRoute("guardian");
      } else if (hash.includes("terrain-desk")) {
        setCurrentRoute("terrain-desk");
      } else if (hash.includes("blog")) {
        setCurrentRoute("blog");
      } else if (hash.includes("outcomes") || hash.includes("case-studies")) {
        setCurrentRoute("outcomes");
      } else if (hash.includes("aerospace")) {
        setCurrentRoute("aerospace");
      } else if (hash.includes("digital-intelligence")) {
        setCurrentRoute("digital-intelligence");
      } else if (hash.includes("energy")) {
        setCurrentRoute("energy");
      } else {
        setCurrentRoute("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const scrollToHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 500); // Increased delay to account for page transitions
      } else {
        window.scrollTo(0, 0);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [currentRoute]);

  return (
    <>
      <div
        className={cn(
          "relative isolate min-h-screen overflow-x-hidden w-full",
          currentRoute !== "home" && "h-[100dvh] overflow-hidden"
        )}
      >
        {/* Site-wide interactive grid spotlight */}
        <GridBackground />

        {/* Global Background Glow Accents - these provide the premium "atmospheric" depth */}
        <div
          className="pointer-events-none absolute left-[-6rem] top-32 -z-10 h-80 w-80 rounded-full bg-brand-glow blur-[60px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[-8rem] top-[36rem] -z-10 h-96 w-96 rounded-full bg-accent-glow blur-[60px]"
          aria-hidden
        />

        <Navbar isScrolled={isScrolled} currentRoute={currentRoute} />
        {currentRoute === "home" && <HomePopup />}

        {/* 1. HOME PAGE CONTAINER: Always mounted in the DOM to keep its state, three.js/canvas instances and scroll position, but hidden from sight & interaction when a subpage is active */}
        <div
          className={cn(
            "w-full h-full transition-opacity duration-300 ease-in-out",
            currentRoute !== "home" && "opacity-0 pointer-events-none"
          )}
        >
          <main id="top" className="relative z-[1]">
            <Hero staggerContainer={staggerContainer} staggerItem={staggerItem} />
            <Highlights staggerContainer={staggerContainer} staggerItem={staggerItem} />
            <Brochure staggerContainer={staggerContainer} staggerItem={staggerItem} />
            <Industries
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              industryImages={industryImages}
            />
            <WhyLatrics staggerContainer={staggerContainer} staggerItem={staggerItem} />
            <Milestones staggerContainer={staggerContainer} staggerItem={staggerItem} />
            <CaseStudies staggerContainer={staggerContainer} staggerItem={staggerItem} />
            <About fadeInUp={fadeInUp} />
            <DemoForm
              formData={formData}
              setFormData={setFormData}
              handleFormSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
              submitState={submitState}
            />
          </main>

          <Footer isHomePage={true} />
        </div>

        {/* 2. SUBPAGES CONTAINER: Animates subpages instantly on top of the Home page without any unmounting lag */}
        <AnimatePresence>
          {currentRoute !== "home" && (
            <motion.div
              key={currentRoute}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "fixed inset-0 z-40 w-full h-[100dvh] overflow-x-hidden",
                currentRoute === "product" ? "overflow-y-auto" : "overflow-hidden"
              )}
            >
              {/* Solid brand canvas background layer behind the grid */}
              <div className="absolute inset-0 bg-[#08090d] -z-20" />

              {/* Dedicated grid background instance for the subpage context */}
              <GridBackground />

              {/* Glowing accent effects for subpage ambient styling */}
              <div
                className="pointer-events-none absolute left-[-6rem] top-32 -z-10 h-80 w-80 rounded-full bg-brand-glow blur-[60px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute right-[-8rem] top-[36rem] -z-10 h-96 w-96 rounded-full bg-accent-glow blur-[60px]"
                aria-hidden
              />

              {currentRoute === "product" && (
                <ComingSoon
                  title="LiCOPTER-P720"
                  subtitle="The next generation of industrial heavy-lift drone technology is being calibrated for peak performance. Stay tuned for the technical specifications."
                  icon={Rocket}
                />
              )}

            {/**{/*<ProductPage
                  formData={formData}
                  setFormData={setFormData}
                  handleFormSubmit={handleFormSubmit}
                  isSubmitting={isSubmitting}
                  submitState={submitState}
                />/} */}
            


              {currentRoute === "about" && (
                <ComingSoon
                  title="About Latrics"
                  subtitle="We're building a company focused on precision, innovation, and real-world impact. Our journey, vision, and the people behind Latrics will be shared here soon. Stay tuned."
                  icon={Flame}
                />
              )}
              {currentRoute === "expertise" && (
                <ComingSoon
                  title="Industrial Expertise"
                  subtitle="We're detailing our specialized industrial capabilities and technical mastery. This section is currently being updated with our latest methodologies."
                  icon={Layers}
                />
              )}
              {currentRoute === "sudarshana" && (
                <ComingSoon
                  title="Sudarshana Series"
                  subtitle="Our next-generation tactical drone platform is undergoing final mission-readiness testing. Stay tuned for the unveiling."
                  icon={Rocket}
                />
              )}
              {currentRoute === "guardian" && (
                <ComingSoon
                  title="Guardian Series"
                  subtitle="Advanced defensive aerial surveillance systems currently in the R&D pipeline. Precision and protection, redefined."
                  icon={ShieldAlert}
                />
              )}
              {currentRoute === "terrain-desk" && (
                <ComingSoon
                  title="Terrain Desk"
                  subtitle="Our proprietary geospatial analysis platform is being integrated with next-gen AI capabilities."
                  icon={Layers}
                />
              )}
              {currentRoute === "aerospace" && (
                <ComingSoon
                  title="Aerospace Solutions"
                  subtitle="Pioneering the next frontier of aerial intelligence. Our aerospace division is crafting advanced flight systems for the future of Indian industry."
                  icon={Rocket}
                />
              )}
              {currentRoute === "digital-intelligence" && (
                <ComingSoon
                  title="Digital Intelligence"
                  subtitle="Harnessing the power of AI and Big Data to transform raw aerial telemetry into actionable industrial insights."
                  icon={Activity}
                />
              )}
              {currentRoute === "energy" && (
                <ComingSoon
                  title="Sustainable Energy"
                  subtitle="Optimizing the energy landscape through precise LiDAR monitoring and autonomous infrastructure inspection."
                  icon={Flame}
                />
              )}
              {currentRoute === "blog" && (
                <ComingSoon
                  title="Latrics Blog"
                  subtitle="Industry insights, technical deep-dives, and company news are currently being curated by our editorial team."
                  icon={PenTool}
                />
              )}
              
              {currentRoute === "outcomes" && <OutcomesPage />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
