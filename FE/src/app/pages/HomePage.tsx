import { HeroSection } from "../components/sttb/HeroSection";
import { CoreValuesSection } from "../components/sttb/CoreValuesSection";
import { ProgramsPreview } from "../components/sttb/ProgramsPreview";
import { NewsEventsSection } from "../components/sttb/NewsEventsSection";
import { CTASection } from "../components/sttb/CTASection";
import { StatsSection } from "../components/sttb/StatsSection";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <CoreValuesSection />
      <StatsSection />
      <ProgramsPreview />
      <NewsEventsSection />
      <CTASection />
    </div>
  );
}
