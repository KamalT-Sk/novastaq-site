import { Smartphone, Laptop, Headphones, Router, Truck, Building2, User, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Link } from 'react-router-dom';

// Set to 'https://store.novastaq.com' when the store goes live; null shows "Coming soon".
export const STORE_URL: string | null = null;

const categories = [
  { icon: Smartphone, title: 'Phones', description: 'iPhone, Samsung, Pixel and more' },
  { icon: Laptop, title: 'Laptops', description: 'MacBook, ThinkPad, Dell and HP' },
  { icon: Headphones, title: 'Gadgets & Accessories', description: 'Audio, wearables, chargers' },
  { icon: Router, title: 'Office & Networking', description: 'Monitors, routers, POS, setup' },
];

const perks = [
  { icon: Building2, title: 'For businesses', text: 'Bulk orders and full office setups, with invoices.' },
  { icon: User, title: 'For individuals', text: 'One device at a fair price, genuine and checked.' },
  { icon: Truck, title: 'Delivered to you', text: 'To your home or office, wherever you are.' },
];

export function ProcurementSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <section id="procurement" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-[#fafafa]">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${reveal}`}>
          <p className="eyebrow">Tech Procurement</p>
          <h2 className="heading-lg mb-5">Equip your team.<br />We source, deliver &amp; support.</h2>
          <p className="lead mb-8">Genuine phones, laptops and gadgets at fair prices, from a single device to a full office.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact?service=procurement" className="btn-primary group">
              Request a bulk quote <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            {STORE_URL ? (
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">Visit store</a>
            ) : (
              <span className="btn-secondary cursor-default text-[#71717a] hover:bg-black/[0.03]">Online store coming soon</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {categories.map((c, index) => (
            <div
              key={c.title}
              className={`panel p-6 transition-all duration-700 ${reveal}`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              <span className="w-11 h-11 rounded-xl bg-[#f4f4f5] flex items-center justify-center mb-12"><c.icon className="w-5 h-5 text-[#0b0b0f]" strokeWidth={1.75} /></span>
              <h3 className="text-[15px] font-medium text-[#0b0b0f] mb-1">{c.title}</h3>
              <p className="text-[13px] text-[#71717a]">{c.description}</p>
            </div>
          ))}
        </div>

        <div className={`panel grid md:grid-cols-3 transition-all duration-700 delay-300 ${reveal}`}>
          {perks.map((p, index) => (
            <div key={p.title} className={`flex gap-4 p-6 ${index ? 'border-t md:border-t-0 md:border-l border-black/[0.08]' : ''}`}>
              <p.icon className="w-5 h-5 text-[#71717a] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[15px] font-medium text-[#0b0b0f]">{p.title}</p>
                <p className="text-[13px] text-[#71717a]">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
