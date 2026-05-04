import ComingSoon from "../common/ComingSoon";
import { PenTool } from "lucide-react";

/**
 * BlogPage Component
 * Currently shows a premium "Under Development" state.
 */
export default function BlogPage() {
  return (
    <ComingSoon 
      title="Latrics Blog" 
      subtitle="Industry insights, technical deep-dives, and company news are currently being curated by our editorial team."
      icon={PenTool}
    />
  );
}
