import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Field, inputCls, EMAIL_RE } from '@/components/form';
import { sendForm, type SendResult } from '@/lib/sendForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Referrers earn a share of the contract they bring in.
const reward = '5–10% of the contract value';

const steps = [
  { n: '01', title: 'Sign up below', text: 'Leave your name and email. We send you your referral link within 48 hours.' },
  { n: '02', title: 'Share your link', text: 'Send it to founders, businesses, or anyone who needs software built or devices supplied.' },
  { n: '03', title: 'Get paid', text: `When your referral signs a contract with Novastaq, you earn ${reward}.` },
];

const faqs = [
  { q: 'How much do I earn?', a: 'Between 5% and 10% of the contract value, depending on the size and type of the project. We confirm your percentage before the client signs.' },
  { q: 'When do I get paid?', a: 'Once your referral signs and their contract is confirmed. We share the exact timing when you join.' },
  { q: 'Is there a limit to how many people I can refer?', a: 'No. Refer as many clients as you like.' },
  { q: 'What counts as a successful referral?', a: 'A new client who reaches us through your link and signs a contract for a software project or a procurement order.' },
  { q: 'How do I get paid?', a: 'By bank transfer. We confirm the details with you when you join.' },
];


export default function Referral() {
  const [sent, setSent] = useState<SendResult | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const [name, email, phone] = ['name', 'email', 'phone'].map(get);
    const next = { name: name ? undefined : 'Please tell us your name.', email: EMAIL_RE.test(email) ? undefined : 'Please enter a valid email address.' };
    setErrors(next);
    if (next.name || next.email) {
      // focus the first bad field (by name: aria-invalid is not rendered yet)
      const first = ['name', 'email'].find((k) => next[k as keyof typeof next]);
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setSent(await sendForm('Referral program sign-up', { Name: name, Email: email, 'Phone/WhatsApp': phone || 'Not given', Request: 'Please send me my Novastaq referral link.' }, email, get('website')));
  };

  return (
    <div className="pt-16">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow">Referral Program</p>
          <h1 className="heading-xl text-5xl md:text-7xl mb-6">Refer a client.<br />Earn 5–10%.</h1>
          <p className="lead max-w-xl mx-auto mb-10">
            Know someone who needs software built, or a team that needs laptops and phones? Share your link and earn {reward} for
            every client who signs a contract. No cap, no expiry.
          </p>
          <a href="#join" className="btn-primary group">
            Get my referral link <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      <section className="py-24 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">How it works</p>
          <h2 className="heading-lg mb-14">Three steps.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="panel p-8">
                <div className="flex items-center gap-3 mb-12">
                  <span className="font-mono text-[13px] text-[#4f46e5]">{s.n}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-black/15 to-transparent" />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0b0b0f] mb-2">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#71717a]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="py-24 border-t border-black/[0.06] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow">Join</p>
            <h2 className="heading-lg mb-5">Start earning today.</h2>
            <p className="lead">Sign up and we&apos;ll send your unique referral link to your inbox.</p>
          </div>
          {sent ? (
            <div className="panel p-8 flex flex-col justify-center" role="status">
              <CheckCircle2 className="w-8 h-8 text-[#0b0b0f] mb-6" strokeWidth={1.5} />
              <p className="text-xl font-semibold text-[#0b0b0f] mb-2">Thanks, you&apos;re in.</p>
              <p className="text-[15px] text-[#71717a]">{sent === 'sent' ? "We'll email your referral link within 48 hours." : "Send the email that just opened, and we'll reply with your referral link within 48 hours."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="relative panel p-6 md:p-8 space-y-5">
              {/* spam trap: hidden from people, bots fill it in */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
              <Field id="ref-name" label="Full name" error={errors.name}>
                <input id="ref-name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'ref-name-error' : undefined} onInput={() => errors.name && setErrors((x) => ({ ...x, name: undefined }))} className={inputCls} placeholder="Ada Okafor" />
              </Field>
              <Field id="ref-email" label="Email" error={errors.email} hint="We send your referral link here.">
                <input id="ref-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'ref-email-error' : undefined} onInput={() => errors.email && setErrors((x) => ({ ...x, email: undefined }))} className={inputCls} placeholder="ada@example.com" />
              </Field>
              <Field id="ref-phone" label="Phone or WhatsApp" optional>
                <input id="ref-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+234 800 000 0000" />
              </Field>
              <button type="submit" className="btn-primary w-full group">
                Get my referral link <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-[12px] text-center text-[#a1a1aa]">Free to join. You earn 5–10% of every contract you bring in.</p>
            </form>
          )}
        </div>
      </section>

      <section className="py-24 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="heading-lg">Referral questions.</h2>
          </div>
          <Accordion type="single" collapsible className="border-t border-black/[0.08]">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-black/[0.08]">
                <AccordionTrigger className="text-[16px] font-medium text-[#0b0b0f] py-5 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-[#71717a]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
