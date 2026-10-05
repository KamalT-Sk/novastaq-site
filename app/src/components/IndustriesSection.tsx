import { CreditCard, ShoppingBag, Blocks, Home, Truck, Palette, Store, GraduationCap, Settings } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const industries = [
  { icon: CreditCard, title: 'Fintech & Payments' },
  { icon: ShoppingBag, title: 'E-Commerce' },
  { icon: Blocks, title: 'Web3 & Crypto' },
  { icon: Home, title: 'Real Estate' },
  { icon: Truck, title: 'Logistics' },
  { icon: Palette, title: 'Creator Economy' },
  { icon: Store, title: 'Marketplaces' },
  { icon: GraduationCap, title: 'Education' },
  { icon: Settings, title: 'Business Management' },
];

export function IndustriesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <section ref={ref} className="py-24 md:py-32 border-t border-black/[0.06] bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        <div className={`transition-all duration-700 ${reveal}`}>
          <p className="eyebrow">Industries</p>
          <h2 className="heading-lg mb-5">Solutions for every sector.</h2>
          <p className="lead">We&apos;ve shipped in the markets that move Africa&apos;s economy, and we know their rules.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {industries.map((i, index) => (
            <div
              key={i.title}
              className={`panel flex items-center gap-3 px-4 py-4 hover:border-black/20 transition-all duration-700 ${reveal}`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <i.icon className="w-4 h-4 text-[#71717a] shrink-0" strokeWidth={1.5} />
              <span className="text-[14px] text-[#3f3f46]">{i.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
