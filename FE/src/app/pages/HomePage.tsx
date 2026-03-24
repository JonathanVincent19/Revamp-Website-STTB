import { HeroSection } from "../components/sttb/HeroSection";
import { CoreValuesSection } from "../components/sttb/CoreValuesSection";
import { ProgramsPreview } from "../components/sttb/ProgramsPreview";
import { TestimonialSection } from "../components/sttb/TestimonialSection";
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
      <TestimonialSection />
      <NewsEventsSection />
      <CTASection />
    </div>
  );
}
