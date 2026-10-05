import { ProcurementSection } from '@/components/ProcurementSection';
import { FAQSection } from '@/components/FAQSection';
import { CTABand } from '@/components/CTABand';

export default function Procurement() {
  return (
    <div className="pt-16">
      <ProcurementSection />
      <FAQSection />
      <CTABand />
    </div>
  );
}
