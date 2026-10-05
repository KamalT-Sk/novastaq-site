import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight, Check } from 'lucide-react';
import { SERVICES, WHY_US, serviceHref } from '@/data/services';
import { IndustriesSection } from '@/components/IndustriesSection';
import { CTABand } from '@/components/CTABand';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  if (service.to) return <Navigate to={service.to} replace />;

  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const quote = `/contact?service=${service.quote}`;

  return (
    <div className="pt-16">
      {/* hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#a1a1aa] mb-10" aria-label="Breadcrumb">
            <Link to="/services" className="hover:text-[#0b0b0f]">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#3f3f46]">{service.title}</span>
          </nav>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <span className="w-14 h-14 rounded-2xl bg-[#0b0b0f] flex items-center justify-center mb-8 shadow-lg">
                <service.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
              </span>
              <h1 className="heading-xl text-5xl md:text-6xl lg:text-7xl mb-6">{service.title}</h1>
              <p className="text-2xl md:text-[28px] font-medium tracking-[-0.02em] text-[#52525b]">{service.tagline}</p>
            </div>
            <div>
              <p className="lead mb-8">{service.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to={quote} className="btn-primary group">
                  Request a quote <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link to="/services#work" className="btn-secondary">See our work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we build */}
      <section className="py-24 border-t border-black/[0.06] bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow">What we build</p>
            <h2 className="heading-lg">Everything included.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((f) => (
              <div key={f.title} className="panel p-7">
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 bg-[#f4f4f5] text-[#0b0b0f]`}>
                  <f.icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-[17px] font-semibold text-[#0b0b0f] mb-2">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#71717a]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* who we serve + why us */}
      <section className="py-24 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow">Who we serve</p>
            <h2 className="heading-lg mb-10">Built for teams like yours.</h2>
            <ul className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
              {service.audience.map((a) => (
                <li key={a.title} className="flex items-start gap-4 py-5">
                  <Check className="w-5 h-5 text-[#4f46e5] mt-0.5 shrink-0" strokeWidth={2.25} />
                  <span>
                    <span className="block text-[16px] font-medium text-[#0b0b0f]">{a.title}</span>
                    <span className="block text-[14px] text-[#71717a]">{a.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Why Novastaq</p>
            <h2 className="heading-lg mb-10">Why teams choose us.</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {WHY_US.map((w) => (
                <div key={w.title} className="panel p-6">
                  <w.icon className="w-5 h-5 text-[#4f46e5] mb-4" strokeWidth={1.75} />
                  <p className="text-[16px] font-semibold text-[#0b0b0f] mb-1">{w.title}</p>
                  <p className="text-[14px] leading-relaxed text-[#71717a]">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* other services */}
      <section className="py-24 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">More from Novastaq</p>
          <h2 className="heading-lg mb-10">Explore other services.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {others.map((o) => (
              <Link key={o.slug} to={serviceHref(o)} className="group panel p-5 hover:-translate-y-0.5 transition-transform">
                <o.icon className="w-5 h-5 text-[#4f46e5] mb-6" strokeWidth={1.75} />
                <span className="flex items-center justify-between gap-2 text-[14px] font-medium text-[#0b0b0f]">
                  {o.title} <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#0b0b0f] shrink-0 transition-colors" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
