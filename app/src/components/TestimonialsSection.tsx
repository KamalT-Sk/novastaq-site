import { Quote } from 'lucide-react';
interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// TODO: placeholder quotes. Replace with real client testimonials before launch.
const row1: Testimonial[] = [
  { quote: 'Novastaq shipped our MVP in weeks, then helped us scale across three markets.', author: 'Amina K.', role: 'Product Lead, Fintech Startup' },
  { quote: 'They design like a product team and build like an infrastructure company.', author: 'David O.', role: 'CTO, Logistics Platform' },
  { quote: 'Working with Novastaq turned our product vision into reality. The attention to detail is incredible.', author: 'Sarah M.', role: 'Founder, HealthTech' },
];


function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="panel p-6 flex flex-col justify-between">
      <Quote className="w-6 h-6 text-[#d4d4d8] mb-4" fill="currentColor" strokeWidth={0} aria-hidden />
      <blockquote className="text-[15px] leading-relaxed text-[#3f3f46] mb-6 flex-1">{t.quote}</blockquote>
      <figcaption className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-[#f4f4f5] border border-black/10 flex items-center justify-center text-[12px] text-[#0b0b0f]">
          {t.author.split(' ').map((n) => n[0]).join('')}
        </span>
        <span>
          <span className="block text-[14px] text-[#0b0b0f]">{t.author}</span>
          <span className="block text-[12px] text-[#a1a1aa]">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-black/[0.06] bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow">Testimonials</p>
        <h2 className="heading-lg mb-14">Trusted by builders.</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {row1.map((t) => <Card key={t.author} t={t} />)}
        </div>
      </div>
    </section>
  );
}
