import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, ArrowRight, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Field, Choices, inputCls, EMAIL_RE } from '@/components/form';
import { WhatsAppIcon, WHATSAPP_URL } from '@/components/whatsapp';

const SERVICES = [
  ['software', 'Software & apps'],
  ['web3', 'Web3'],
  ['procurement', 'Phones, laptops & gadgets'],
  ['consultation', 'Consultation & support'],
  ['other', 'Something else'],
] as const;

const BUDGETS = ['Under ₦1M', '₦1M – ₦5M', '₦5M – ₦20M', '₦20M+', 'Not sure yet'].map((b) => [b, b] as const);

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

export function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [params] = useSearchParams();
  const preset = SERVICES.find(([v]) => v === params.get('service'))?.[0] ?? 'software';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const [name, email, phone, company, message] = ['name', 'email', 'phone', 'company', 'message'].map(get);
    const service = SERVICES.find(([v]) => v === get('service'))?.[1] ?? 'Not given';
    const budget = get('budget') || 'Not given';

    const next: Errors = {};
    if (!name) next.name = 'Please tell us your name.';
    if (!EMAIL_RE.test(email)) next.email = 'Please enter a valid email address.';
    if (message.length < 10) next.message = 'A sentence or two helps us reply properly.';
    setErrors(next);
    if (Object.keys(next).length) {
      // focus the first bad field (by name: aria-invalid is not rendered yet)
      const first = ['name', 'email', 'message'].find((k) => next[k as keyof typeof next]);
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // ponytail: mailto until a form backend exists; swap this for a POST when it does
    const subject = encodeURIComponent(`${service}: enquiry from ${name}${company ? ` (${company})` : ''}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone/WhatsApp: ${phone || 'Not given'}\nCompany: ${company || 'Not given'}\nService: ${service}\nBudget: ${budget}\n\n${message}`,
    );
    window.open(`mailto:hello@novastaq.com?subject=${subject}&body=${body}`, '_self');
    setSentTo(email);
    form.reset();
  };

  // clear a field's error as soon as it is edited
  const clear = (k: keyof Errors) => () => errors[k] && setErrors((e) => ({ ...e, [k]: undefined }));

  const reveal = isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';
  const social = 'w-9 h-9 rounded-lg border border-black/10 flex items-center justify-center text-[#71717a] hover:text-[#0b0b0f] hover:bg-black/[0.03] transition-colors';

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20">
        <div className={`transition-all duration-700 ${reveal}`}>
          <p className="eyebrow">Contact</p>
          <h2 className="heading-lg mb-5">Tell us what you need.</h2>
          <p className="lead mb-10">Software or a single laptop, we&apos;ll reply within 48 hours with an honest assessment and next steps.</p>

          <ul className="space-y-5 mb-10">
            {[
              [Clock, 'Reply within 48 hours', 'A real person reads every message.'],
              [MessageSquare, 'One form for everything', 'A software project, a Web3 build or a device order.'],
              [CheckCircle2, 'Devices too', 'Phones, laptops and gadgets for you or your whole team.'],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof Clock;
              return (
                <li key={title as string} className="flex gap-3">
                  <I className="w-5 h-5 text-[#0b0b0f] mt-0.5 shrink-0" strokeWidth={1.75} />
                  <span>
                    <span className="block text-[15px] font-medium text-[#0b0b0f]">{title as string}</span>
                    <span className="block text-[14px] text-[#71717a]">{text as string}</span>
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col items-start gap-3 mb-6">
            <a href="mailto:hello@novastaq.com" className="inline-flex items-center gap-2 text-[15px] text-[#0b0b0f] hover:underline underline-offset-4">
              <Mail className="w-4 h-4 text-[#71717a]" /> hello@novastaq.com
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] text-[#0b0b0f] hover:underline underline-offset-4">
              <WhatsAppIcon className="w-4 h-4 text-[#71717a]" /> Chat with someone on WhatsApp
            </a>
          </div>
          <div className="flex gap-2">
            <a href="https://x.com/NovastaqHQ?s=20" target="_blank" rel="noopener noreferrer" className={social} aria-label="X"><Twitter className="w-4 h-4" /></a>
            <a href="https://instagram.com/novastaq" target="_blank" rel="noopener noreferrer" className={social} aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="https://facebook.com/NovastaqHQ" target="_blank" rel="noopener noreferrer" className={social} aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={social} aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>

        {sentTo ? (
          <div className={`panel p-8 md:p-10 flex flex-col justify-center transition-all duration-700 ${reveal}`} role="status">
            <CheckCircle2 className="w-8 h-8 text-[#0b0b0f] mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#0b0b0f] mb-3">Almost there.</h3>
            <p className="text-[15px] leading-relaxed text-[#71717a] mb-8">
              Your email app should have opened with your message ready. Press send, and we&apos;ll reply to <span className="text-[#0b0b0f]">{sentTo}</span> within 48 hours.
              If nothing opened, email us directly at <a href="mailto:hello@novastaq.com" className="text-[#0b0b0f] underline underline-offset-4">hello@novastaq.com</a>.
            </p>
            <button onClick={() => setSentTo(null)} className="btn-secondary self-start">Send another message</button>
          </div>
        ) : (
          <form key={preset} onSubmit={handleSubmit} noValidate className={`panel p-6 md:p-8 space-y-6 transition-all duration-700 delay-150 ${reveal}`}>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="contact-name" label="Name" error={errors.name}>
                <input id="contact-name" name="name" autoComplete="name" onInput={clear('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined} className={inputCls} placeholder="Ada Okafor" />
              </Field>
              <Field id="contact-email" label="Email" error={errors.email}>
                <input id="contact-email" name="email" type="email" autoComplete="email" onInput={clear('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={inputCls} placeholder="ada@company.com" />
              </Field>
              <Field id="contact-phone" label="Phone or WhatsApp" optional>
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+234 800 000 0000" />
              </Field>
              <Field id="contact-company" label="Company" optional>
                <input id="contact-company" name="company" autoComplete="organization" className={inputCls} placeholder="Company name" />
              </Field>
            </div>

            <Choices name="service" legend="What do you need?" options={SERVICES} defaultValue={preset} />
            <Choices name="budget" legend="Budget" options={BUDGETS} optional />

            <Field id="contact-message" label="Message" error={errors.message} hint="What are you building, or which devices and how many?">
              <textarea id="contact-message" name="message" rows={5} onInput={clear('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined} className={`${inputCls} !h-auto py-3 resize-y min-h-[140px]`} placeholder="Tell us about your project..." />
            </Field>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-[12px] text-[#a1a1aa] max-w-xs">We only use your details to reply to you.</p>
              <button type="submit" className="btn-primary group">
                Send message <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
