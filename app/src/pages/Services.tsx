import { ServicesSection } from '@/components/ServicesSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProductsSection } from '@/components/ProductsSection';
import { CTABand } from '@/components/CTABand';

export default function Services() {
  return (
    <div className="pt-16">
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <ProductsSection />
      <CTABand />
    </div>
  );
}
