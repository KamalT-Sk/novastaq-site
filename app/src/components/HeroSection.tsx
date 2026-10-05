import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '@/components/ProjectCard';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const fade = (delay: string) =>
    `transition-all duration-1000 ${delay} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`;

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20">
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
        <div className="text-center lg:text-left">
          <Link to="/procurement" className={`inline-flex items-center gap-1 text-[14px] text-[#52525b] hover:text-[#0b0b0f] mb-6 ${fade('')}`}>
            Now supplying phones, laptops &amp; gadgets <ChevronRight className="w-4 h-4" />
          </Link>

          <h1 className={`heading-xl text-5xl sm:text-6xl lg:text-[76px] mb-6 ${fade('delay-100')}`}>
            Build fast.<br />Scale further.
          </h1>

          <p className={`lead max-w-lg mx-auto lg:mx-0 mb-10 ${fade('delay-200')}`}>
            We design, engineer and scale digital products that drive real business outcomes,
            and supply the tech your team runs on.
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start ${fade('delay-300')}`}>
            <Link to="/contact" className="btn-primary group">
              Request a quote <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link to="/services#work" className="btn-secondary">See our work</Link>
          </div>

          <p className={`mt-10 inline-flex items-center gap-2.5 text-[15px] text-[#52525b] ${fade('delay-500')}`}>
            <span className="w-8 h-8 rounded-lg bg-[#f4f4f5] flex items-center justify-center"><Package className="w-4 h-4 text-[#0b0b0f]" strokeWidth={1.75} /></span>
            <span><span className="font-semibold text-[#0b0b0f]">100+ products</span> shipped and running</span>
          </p>
        </div>

        {/* Illustrative: a project moving through Build, Launch, Scale */}
        <div className={`max-w-lg w-full mx-auto lg:mr-0 ${fade('delay-300')}`} aria-hidden>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
