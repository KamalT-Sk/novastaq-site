import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/** The closing call to action at the foot of every page: one bold gradient card. */
export function CTABand() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[28px] px-6 py-16 md:py-20 text-center bg-[#0b0b0f]">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.06] text-white mb-5">Ready to build something great?</h2>
            <p className="text-[17px] leading-relaxed text-white/60 max-w-xl mx-auto mb-10">
              Tell us what you need, whether it&apos;s software or a single laptop. We&apos;ll reply within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-white text-[#0b0b0f] text-sm font-medium hover:bg-white/90 transition-colors group">
                Request a quote <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/refer" className="inline-flex items-center justify-center h-11 px-5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                Refer a client
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
