import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import WhyLatrics from "../components/home/WhyLatrics";
import Industries from "../components/home/Industries";
import CaseStudies from "../components/home/CaseStudies";
import Milestones from "../components/home/Milestones";
import DemoForm from "../components/home/DemoForm";
import Footer from "../components/home/Footer";
import ProductPage from "../components/product/ProductPage";
import AboutPage from "../components/about/AboutPage";
import ExpertisePage from "../components/expertise/ExpertisePage";
import BlogPage from "../components/blog/BlogPage";
import OutcomesPage from "../components/outcomes/OutcomesPage";
import ComingSoon from "../components/common/ComingSoon";
import { Rocket, ShieldAlert, Layers, Flame } from "lucide-react";

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
        window.location.hash.includes("expertise") ? "expertise" : "home"
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
      } else if (hash.includes("highlights")) {
        setCurrentRoute("highlights");
      } else if (hash.includes("outcomes") || hash.includes("case-studies")) {
        setCurrentRoute("outcomes");
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
    window.scrollTo(0, 0);
  }, [currentRoute]);

  return (
    <>


      <div
        className={cn(
          "relative isolate min-h-screen overflow-x-hidden w-full",
          ["about", "expertise", "product", "sudarshana", "guardian", "terrain-desk", "highlights", "outcomes"].includes(currentRoute) && "h-[100dvh] overflow-hidden"
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

        {currentRoute === "product" ? (
          <ComingSoon 
            title="LiCOPTER-P720" 
            subtitle="The next generation of industrial heavy-lift drone technology is being calibrated for peak performance. Stay tuned for the technical specifications."
            icon={Rocket}
          />
        ) : currentRoute === "about" ? (
          <ComingSoon 
            title="About Latrics" 
            subtitle="We're building a company focused on precision, innovation, and real-world impact. Our journey, vision, and the people behind Latrics will be shared here soon. Stay tuned."
            icon={Flame}
          />
        ) : currentRoute === "expertise" ? (
          <ComingSoon 
            title="Industrial Expertise" 
            subtitle="We're detailing our specialized industrial capabilities and technical mastery. This section is currently being updated with our latest methodologies."
            icon={Layers}
          />
        ) : currentRoute === "sudarshana" ? (
          <ComingSoon 
            title="Sudarshana Series" 
            subtitle="Our next-generation tactical drone platform is undergoing final mission-readiness testing. Stay tuned for the unveiling."
            icon={Rocket}
          />
        ) : currentRoute === "guardian" ? (
          <ComingSoon 
            title="Guardian Series" 
            subtitle="Advanced defensive aerial surveillance systems currently in the R&D pipeline. Precision and protection, redefined."
            icon={ShieldAlert}
          />
        ) : currentRoute === "terrain-desk" ? (
          <ComingSoon 
            title="Terrain Desk" 
            subtitle="Our proprietary geospatial analysis platform is being integrated with next-gen AI capabilities."
            icon={Layers}
          />
        ) : currentRoute === "highlights" ? (
          <BlogPage />
        ) : currentRoute === "outcomes" ? (
          <OutcomesPage />
        ) : (
          <main id="top" className="relative z-[1]">
            <Hero staggerContainer={staggerContainer} staggerItem={staggerItem} />
            <Highlights staggerContainer={staggerContainer} staggerItem={staggerItem} />
            {/* <BannerMarquee /> */}
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
        )}

        {/* Global Footer - Hidden on 'Coming Soon' pages to maintain aesthetic focus */}
        {!["about", "expertise", "product", "sudarshana", "guardian", "terrain-desk", "highlights", "outcomes"].includes(currentRoute) && (
          <Footer isHomePage={currentRoute === "home"} />
        )}
      </div>
    </>
  );
}
