import { Package, Layers, Laptop } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const stats = [
  { icon: Package, value: '100+', label: 'Products shipped' },
  { icon: Layers, value: 'Web2 + Web3', label: 'Under one roof' },
  { icon: Laptop, value: 'Code + devices', label: 'One partner for both' },
];

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 transition-all duration-700 ${reveal}`}>
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="heading-lg">Innovators, builders and growth partners.</h2>
          </div>
          <div className="lg:pt-10 space-y-4 lead">
            <p>
              Novastaq Technologies Inc is a venture studio and technology partner. We focus on craft: we design,
              engineer and scale products for startups and enterprises across Africa and beyond.
            </p>
            <p>
              We don&apos;t just ship code. Every product we&apos;ve launched is a business that makes money, from
              fintech and payments to creator tools and Web3 infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-black/[0.08]">
          {stats.map((s, index) => (
            <div
              key={s.label}
              className={`pt-8 pr-6 pb-2 transition-all duration-700 ${index > 0 ? 'sm:border-l sm:pl-8' : ''} border-black/[0.08] ${reveal}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <s.icon className="w-5 h-5 text-[#4f46e5] mb-4" strokeWidth={1.75} />
              <p className="text-2xl md:text-[32px] font-semibold tracking-[-0.03em] text-[#0b0b0f] mb-1 whitespace-nowrap">{s.value}</p>
              <p className="text-[15px] text-[#71717a]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
