import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What does Novastaq do?', a: 'We design, build and scale digital products: web and mobile apps, fintech and payment systems, and Web3 infrastructure. We also supply phones, laptops and other tech to businesses and individuals.' },
  { q: 'How long does it take to build a product?', a: 'It depends on scope. After a short discovery call, we give you an honest timeline and quote.' },
  { q: 'Do you work with early-stage startups?', a: 'Yes. Our venture studio works with founders from idea to launch, and keeps working with them as they scale.' },
  { q: 'Can I buy a single device, or only in bulk?', a: 'Both. We sell to individuals and businesses, from one phone to a full office setup.' },
  { q: 'Do you deliver?', a: 'Yes. We bring your order to your home or office, wherever you are in Nigeria.' },
  { q: 'Do you offer support after launch?', a: 'Yes. Our consultation and maintenance plans cover monitoring, updates, new features and growth support.' },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
        <div>
          <p className="eyebrow">FAQs</p>
          <h2 className="heading-lg">Questions?<br />Answers.</h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-black/[0.08]">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-black/[0.08]">
              <AccordionTrigger className="text-[16px] font-medium text-[#0b0b0f] py-5 hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-[#71717a]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
