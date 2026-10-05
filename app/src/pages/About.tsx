import { AboutSection } from '@/components/AboutSection';
import { ProcessSection } from '@/components/ProcessSection';
import { PartnersSection } from '@/components/PartnersSection';
import { CTABand } from '@/components/CTABand';

export default function About() {
  return (
    <div className="pt-16">
      <AboutSection />
      <PartnersSection />
      <ProcessSection />
      <CTABand />
    </div>
  );
}
