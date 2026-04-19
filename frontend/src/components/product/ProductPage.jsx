import { useEffect } from "react";
import ProductHero from "./ProductHero";
import ProductAbout from "./ProductAbout";
import ProductAdvantages from "./ProductAdvantages";
import ProductTechSpecs from "./ProductTechSpecs";
import ProductPayloads from "./ProductPayloads";
import ProductSoftware from "./ProductSoftware";
import ProductAnalysis from "./ProductAnalysis";
import ProductDemo from "./ProductDemo";

export default function ProductPage({
  formData,
  setFormData,
  handleFormSubmit,
  isSubmitting,
  submitState
}) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.hash && window.location.hash !== "#product") {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo(0, 0);
    };

    handleScroll();
    window.addEventListener("hashchange", handleScroll);
    return () => window.removeEventListener("hashchange", handleScroll);
  }, []);

  return (
    <div className="pb-20 relative z-[1] w-full isolate">
      <ProductHero />
      <ProductAbout />
      <ProductAdvantages />
      <ProductTechSpecs />
      <ProductPayloads />
      <ProductSoftware />
      <ProductAnalysis />
      <ProductDemo 
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
        submitState={submitState}
      />
    </div>
  );
}
