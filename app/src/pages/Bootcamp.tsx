import { ArrowRight, Calendar, Video, Sparkles, Wand2, Check } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const PAYMENT_LINK = 'https://usevelcro.com/pay/3903a520f71a';

const highlights = [
  { icon: Calendar, title: '7 days', text: 'An intensive, hands-on program you can finish in a week.' },
  { icon: Video, title: 'Live sessions', text: 'Interactive daily workshops, with time for your questions.' },
  { icon: Sparkles, title: 'Beginner friendly', text: 'No coding experience needed. We start from zero.' },
  { icon: Wand2, title: 'Build with AI', text: 'Create real projects using today’s AI tools.' },
];

const forYou = [
  'You have an idea for an app, website or digital product',
  "You've never written code, or you're just starting out",
  'You want to use AI tools to build faster',
  'You want something real to show at the end of the week',
];

export default function Bootcamp() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <div className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="eyebrow">Bootcamp</p>
            <h1 className="heading-xl text-5xl sm:text-6xl lg:text-[72px] mb-6">7-Day Build<br />with AI.</h1>
            <p className="lead max-w-xl mb-10">
              Learn to build real digital products using AI tools, with no coding experience required.
              Hosted by Novastaq in partnership with Deezaina Studios.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                Register now <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#details" className="btn-secondary">What you&apos;ll get</a>
            </div>
            <p className="mt-6 text-[13px] text-[#71717a]">Limited spots available.</p>
          </div>

          <div className="panel p-8">
            <p className="text-[13px] font-medium text-[#71717a] mb-6">In partnership</p>
            <div className="flex items-center gap-5 mb-8">
              <img src="/logo.png" alt="Novastaq Technologies Inc" className="h-7 w-auto" />
              <span className="text-[#a1a1aa] text-xl">×</span>
              <img src="/deezaina-logo.png" alt="Deezaina Studios" className="h-8 w-auto" />
            </div>
            <ul className="space-y-3 pt-6 border-t border-black/[0.06]">
              {['7 days, live and online', 'Beginner friendly', 'Real projects, built with AI'].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-[15px] text-[#3f3f46]">
                  <Check className="w-4 h-4 text-[#4f46e5] shrink-0" strokeWidth={2.25} /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="details" ref={ref} className="py-24 border-t border-black/[0.06] bg-[#fafafa] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`max-w-2xl mb-14 transition-all duration-700 ${reveal}`}>
            <p className="eyebrow">What you get</p>
            <h2 className="heading-lg">A week that ends with something you built.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <div key={h.title} className={`panel p-7 transition-all duration-700 ${reveal}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="w-11 h-11 rounded-xl bg-[#f4f4f5] flex items-center justify-center mb-6">
                  <h.icon className="w-5 h-5 text-[#0b0b0f]" strokeWidth={1.75} />
                </span>
                <h3 className="text-[17px] font-semibold text-[#0b0b0f] mb-2">{h.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#71717a]">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 className="heading-lg">This bootcamp is for you if…</h2>
          </div>
          <ul className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
            {forYou.map((t) => (
              <li key={t} className="flex items-start gap-3 py-5 text-[16px] text-[#3f3f46]">
                <Check className="w-5 h-5 text-[#4f46e5] shrink-0 mt-0.5" strokeWidth={2.25} /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[28px] bg-[#0b0b0f] px-6 py-16 md:py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.035em] text-white mb-5">Secure your spot.</h2>
            <p className="text-[17px] text-white/60 max-w-lg mx-auto mb-10">Register through our secure payment page. Your details are collected at checkout, and we&apos;ll be in touch before day one.</p>
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 h-11 px-6 rounded-full bg-white text-[#0b0b0f] text-sm font-medium hover:bg-white/90 transition-colors group">
              Proceed to payment <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-[13px] text-white/40 mt-6">Questions? <a href="https://wa.me/2348150533325" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Chat with us on WhatsApp</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
