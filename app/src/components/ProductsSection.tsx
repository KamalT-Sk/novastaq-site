import { ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const products = [
  { name: 'Tsara', category: 'Fintech', description: 'Unified payments built for African businesses: fiat and crypto, online, in-store and across borders.', image: '/products/usetsara.png', link: 'https://usetsara.com' },
  { name: 'Velcro', category: 'Payments', description: 'Collect payments and ramp crypto, all inside WhatsApp. No stress, just chat.', image: '/products/velcro.png', link: 'https://usevelcro.com' },
  { name: 'CriptPay', category: 'Web3', description: 'Crypto payment infrastructure that lets businesses accept digital assets with ease.', image: '/products/criptpay.png', link: 'https://criptpay.com' },
  { name: 'MyArteLab', category: 'Creator Economy', description: 'Discover, book and pay African visual creatives. Built for creators, trusted by global clients.', image: '/products/myartelab.png', link: 'https://myartelab.com' },
];

export function ProductsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <section id="work" ref={ref} className="py-24 md:py-32 border-t border-black/[0.06] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ${reveal}`}>
          <div>
            <p className="eyebrow">Our work</p>
            <h2 className="heading-lg">Projects we&apos;re proud of.</h2>
          </div>
          <p className="lead max-w-sm">A few of the 100+ products we&apos;ve shipped.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, index) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group panel block overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.25)] transition-all duration-500 ${reveal}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* the live site, framed in a browser window on the product's own colour */}
              <div className={`bg-[#f4f4f5] px-6 pt-6 md:px-8 md:pt-8`}>
                <div className="rounded-t-xl overflow-hidden border border-b-0 border-black/10 bg-white shadow-[0_-8px_32px_-12px_rgba(0,0,0,0.25)] group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-1.5 px-3 h-7 bg-[#f4f4f5] border-b border-black/[0.06]">
                    <span className="w-2 h-2 rounded-full bg-black/15" /><span className="w-2 h-2 rounded-full bg-black/15" /><span className="w-2 h-2 rounded-full bg-black/15" />
                    <span className="ml-2 flex-1 max-w-[60%] h-4 rounded bg-white text-[9px] leading-4 px-2 text-[#a1a1aa] truncate">{p.link.replace('https://', '')}</span>
                  </div>
                  <img src={p.image} alt={`${p.name} website`} className="w-full aspect-[1024/484] object-cover object-top" loading="lazy" />
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0b0b0f]">{p.name}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#f4f4f5] text-[#52525b]`}>{p.category}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-[#71717a] mb-5">{p.description}</p>
                <span className="inline-flex items-center gap-1 text-[14px] font-medium text-[#0b0b0f]">
                  Visit site <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
