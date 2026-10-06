import { HeroSection } from '@/components/HeroSection';
import { PartnersSection } from '@/components/PartnersSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CTABand } from '@/components/CTABand';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <CTABand />
    </>
  );
}
