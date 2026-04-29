import { useReducedMotion } from "framer-motion";
import { Flame, ArrowUpRight } from "lucide-react";
import DroneScene from "../3d/DroneScene";
import SectionHeading from "../common/SectionHeading";
import Section from "../common/Section";
import Container from "../common/Container";

/**
 * Component: Simulation
 * 
 * Showcases the "India's First DGCA Certified LiDAR Drone" through an
 * interactive 3D scene (DroneScene). 
 * 
 * Layout: Side-by-side header (Badge + Title on left, Action buttons on right)
 * with the 3D canvas centered below.
 */
export default function Simulation() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="simulation" variant="default">
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-start mb-16 md:mb-20">
            <SectionHeading
              badgeIcon={Flame}
              badgeText="3D Simulation"
              title="India's First DGCA Certified LiDAR Drone"
              className="mb-0 max-w-3xl" // disable mb-10 as we have wrapper margin
            />
            
            {/* Right Buttons */}
            <div className="flex gap-4 mt-2">
              <button className="font-sans bg-[#702C26] border border-[#8C3A35] p-3 rounded-xl transition-colors hover:opacity-80 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
              <button className="font-sans bg-transparent border border-white/20 p-3 rounded-xl transition-colors hover:bg-white/5 flex items-center justify-center shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            <div className="w-full mx-auto flex justify-center pb-8 md:max-w-5xl">
              {/* Interactive 3D Canvas replacement for static image */}
              <DroneScene />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
