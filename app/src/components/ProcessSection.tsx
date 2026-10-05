import { Check } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const steps = [
  {
    number: '01', title: 'Build',
    description: 'We turn your idea into a working product, not a slide deck.',
    items: ['Product strategy & UX', 'Design system & prototypes', 'Production-ready code'],
  },
  {
    number: '02', title: 'Launch',
    description: 'We get real users in the door and learn from them fast.',
    items: ['Landing page & onboarding', 'App Store & web release', 'Analytics & feedback loops'],
  },
  {
    number: '03', title: 'Scale',
    description: 'We grow the product and the team behind it.',
    items: ['Cloud infrastructure & DevOps', 'Compliance & security', 'Devices for your growing team'],
  },
];

export function ProcessSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <section id="process" ref={ref} className="py-24 md:py-32 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ${reveal}`}>
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="heading-lg">Build. Launch. Scale.</h2>
          </div>
          <p className="lead max-w-sm">One team from first sketch to thousands of users. No hand-offs, no starting over.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className={`border-t-2 border-[#0b0b0f] pt-6 transition-all duration-700 ${reveal}`} style={{ transitionDelay: `${(index + 1) * 120}ms` }}>
              <p className="font-mono text-[13px] text-[#71717a] mb-8">{step.number}</p>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0b0b0f] mb-2">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#71717a] mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#3f3f46]">
                    <Check className="w-4 h-4 text-[#0b0b0f] shrink-0" strokeWidth={2} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
