import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SERVICES, serviceHref } from '@/data/services';

export function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <section id="services" ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`max-w-2xl mb-14 transition-all duration-700 ${reveal}`}>
          <p className="eyebrow">What we do</p>
          <h2 className="heading-lg mb-5">Everything you need to build, launch and run.</h2>
          <p className="lead">Software, Web3, and the hardware your team works on, all from one partner.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08] rounded-2xl overflow-hidden border border-black/[0.08]">
          {SERVICES.map((s, index) => (
            <Link
              key={s.title}
              to={serviceHref(s)}
              className={`group relative text-left p-8 bg-white hover:bg-[#fafbff] transition-all duration-700 ${reveal}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="w-11 h-11 rounded-xl bg-[#f4f4f5] group-hover:bg-[#0b0b0f] flex items-center justify-center mb-10 transition-colors">
                <s.icon className="w-5 h-5 text-[#0b0b0f] group-hover:text-white transition-colors" strokeWidth={1.75} />
              </span>
              <h3 className="text-[17px] font-medium text-[#0b0b0f] mb-2">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#71717a] mb-6">{s.summary}</p>
              <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#4f46e5]">Learn more <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
