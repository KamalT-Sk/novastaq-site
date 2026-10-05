import { Link } from 'react-router-dom';
import { ArrowRight, Gem, MessagesSquare, Target, ShieldCheck, Mail, GraduationCap } from 'lucide-react';

// Add roles here as you open them: { title, type, location }. Empty shows "No open roles right now".
const roles: { title: string; type: string; location: string }[] = [];

const values = [
  { icon: Gem, title: 'Craft', text: 'You sweat the details other people skip. Clean code, clear thinking, and pride in what you ship.' },
  { icon: MessagesSquare, title: 'Communication', text: 'You keep people informed, raise blockers early and write clearly. Good teams run on it.' },
  { icon: Target, title: 'Ownership', text: "You don't wait to be told what's next. You see what needs doing and you do it." },
  { icon: ShieldCheck, title: 'Honesty', text: "You say when something won't work, when you're stuck, or when you disagree. No politics." },
];

const APPLY = `mailto:hello@novastaq.com?subject=${encodeURIComponent('Application')}&body=${encodeURIComponent('Role I want:\nPortfolio / GitHub / LinkedIn:\nCV: (attach)\n\nA few lines about what you want to do next:\n')}`;

export default function Careers() {
  return (
    <div className="pt-16">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow">Careers</p>
          <h1 className="heading-xl text-5xl md:text-7xl mb-6">Build what&apos;s next<br />with us.</h1>
          <p className="lead max-w-xl mx-auto">
            We&apos;re a small, intentional team, and we hire slowly. We&apos;re always glad to hear from exceptional
            engineers, designers and operators.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-black/[0.06] bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow">Open roles</p>
          {roles.length ? (
            <div className="panel divide-y divide-black/[0.06] mt-4">
              {roles.map((r) => (
                <a key={r.title} href={APPLY} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-6 hover:bg-[#fafafa] group">
                  <span className="text-[17px] font-medium text-[#0b0b0f]">{r.title}</span>
                  <span className="flex items-center gap-4 text-[14px] text-[#71717a]">{r.type} · {r.location} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></span>
                </a>
              ))}
            </div>
          ) : (
            <div className="panel p-8 md:p-10 mt-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#0b0b0f] mb-2">No open roles right now.</h2>
                <p className="text-[15px] text-[#71717a] max-w-lg">We still read every application. If you&apos;re great at what you do, tell us. We&apos;ll reach out when something fits.</p>
              </div>
              <a href={APPLY} className="btn-primary shrink-0"><Mail className="w-4 h-4" /> Send an application</a>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow">What we look for</p>
            <h2 className="heading-lg">Four things matter most.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="panel p-7">
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 bg-[#f4f4f5] text-[#0b0b0f]`}><v.icon className="w-5 h-5" strokeWidth={1.75} /></span>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#0b0b0f] mb-2">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#71717a]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-black/[0.06] bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow">How to apply</p>
            <h2 className="heading-lg mb-5">Be direct.</h2>
            <p className="lead">No cover letter template needed. Email us your CV, the role you want, links to your work, and a few lines on where you want your career to go.</p>
          </div>
          <div className="space-y-4">
            <a href={APPLY} className="panel p-6 flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
              <span className="w-11 h-11 rounded-xl bg-[#0b0b0f] flex items-center justify-center"><Mail className="w-5 h-5 text-white" /></span>
              <span className="flex-1">
                <span className="block text-[16px] font-medium text-[#0b0b0f]">hello@novastaq.com</span>
                <span className="block text-[13px] text-[#71717a]">Subject: Application</span>
              </span>
              <ArrowRight className="w-4 h-4 text-[#71717a] group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link to="/bootcamp" className="panel p-6 flex items-center gap-4 group hover:-translate-y-0.5 transition-transform">
              <span className="w-11 h-11 rounded-xl bg-[#f4f4f5] flex items-center justify-center"><GraduationCap className="w-5 h-5 text-[#4f46e5]" /></span>
              <span className="flex-1">
                <span className="block text-[16px] font-medium text-[#0b0b0f]">Just starting out?</span>
                <span className="block text-[13px] text-[#71717a]">Join our 7-day Build with AI bootcamp</span>
              </span>
              <ArrowRight className="w-4 h-4 text-[#71717a] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
