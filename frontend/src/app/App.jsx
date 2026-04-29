import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "./motion";
import { industryImages } from "../constants/siteContent";
import { useNavbarScroll } from "../hooks/useNavbarScroll";
import { useDemoRequest } from "../hooks/useDemoRequest";
import GridBackground from "../components/common/GridBackground";
import LoadingScreen from "../components/common/LoadingScreen";
import BannerMarquee from "../components/common/BannerMarquee";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Simulation from "../components/home/Simulation";
import Highlights from "../components/home/Highlights";
import WhyLatrics from "../components/home/WhyLatrics";
import Industries from "../components/home/Industries";
import CaseStudies from "../components/home/CaseStudies";
import Milestones from "../components/home/Milestones";
import DemoForm from "../components/home/DemoForm";
import Footer from "../components/home/Footer";
import ProductPage from "../components/product/ProductPage";
import AboutPage from "../components/about/AboutPage";
import ExpertisePage from "../components/expertise/ExpertisePage";

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
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Aerospace");
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
    window.location.hash.includes("expertise") ? "expertise" : "home"
  );

  useEffect(() => {
    // Simulate initial loading time for assets
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);

    const handleHashChange = () => {
      if (window.location.hash.includes("product")) {
        setCurrentRoute("product");
      } else if (window.location.hash.includes("about")) {
        setCurrentRoute("about");
      } else if (window.location.hash.includes("expertise")) {
        setCurrentRoute("expertise");
      } else {
        setCurrentRoute("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isAppLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative isolate min-h-screen overflow-x-hidden w-full"
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

      {currentRoute === "product" ? (
        <ProductPage 
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
          submitState={submitState}
        />
      ) : currentRoute === "about" ? (
        <AboutPage />
      ) : currentRoute === "expertise" ? (
        <ExpertisePage />
      ) : (
        <main id="top" className="relative z-[1]">
          <Hero staggerContainer={staggerContainer} staggerItem={staggerItem} />
          <About fadeInUp={fadeInUp} />
          <Simulation />
          <BannerMarquee />
          <Highlights staggerContainer={staggerContainer} staggerItem={staggerItem} />
          <WhyLatrics staggerContainer={staggerContainer} staggerItem={staggerItem} />
          <Industries
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            industryImages={industryImages}
          />
          <CaseStudies staggerContainer={staggerContainer} staggerItem={staggerItem} />
          <Milestones staggerContainer={staggerContainer} staggerItem={staggerItem} />
          <DemoForm
            formData={formData}
            setFormData={setFormData}
            handleFormSubmit={handleFormSubmit}
            isSubmitting={isSubmitting}
            submitState={submitState}
          />
        </main>
      )}

      <Footer />
    </motion.div>
    </>
  );
}
