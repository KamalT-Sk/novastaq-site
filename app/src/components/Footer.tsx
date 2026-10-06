import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from '@/components/whatsapp';

const columns = [
  {
    title: 'Services',
    links: [
      ['Product Development', '/services/product-development'],
      ['Fintech & Payments', '/services/fintech'],
      ['Web3 Infrastructure', '/services/web3'],
      ['Product Design', '/services/design'],
      ['Consultation', '/services/consultation'],
      ['Tech Procurement', '/procurement'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '/about'],
      ['Our work', '/services#work'],
      ['Careers', '/careers'],
      ['Contact', '/contact'],
      ['FAQs', '/contact#faq'],
      ['Bootcamp', '/bootcamp'],
    ],
  },
  {
    title: 'Earn with us',
    links: [
      ['Referral Program', '/refer'],
      ['Request a quote', '/contact'],
    ],
  },
];

const socials = [
  ['X', 'https://x.com/NovastaqHQ?s=20'],
  ['Instagram', 'https://instagram.com/novastaq'],
  ['Facebook', 'https://facebook.com/NovastaqHQ'],
  ['WhatsApp', WHATSAPP_URL],
];

export function Footer() {
  const link = 'text-[13px] text-[#71717a] hover:text-[#0b0b0f] transition-colors';

  return (
    <footer className="bg-white border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <img src="/logo.png" alt="Novastaq Technologies Inc" className="h-5 w-auto mb-5" />
            <p className="text-[13px] leading-relaxed text-[#71717a] max-w-xs mb-6">
              Software, Web3 and tech procurement. We build, launch and scale products, and supply the devices your team runs on.
            </p>
            <a href="mailto:hello@novastaq.com" className="inline-flex items-center gap-1 text-[13px] text-[#0b0b0f] hover:text-black">
              hello@novastaq.com <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-1.5 text-[13px] text-[#0b0b0f] hover:underline underline-offset-4">
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#71717a]" /> Chat with someone on WhatsApp
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-[#0b0b0f] mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className={link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-black/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-[13px] text-[#a1a1aa]">© {new Date().getFullYear()} Novastaq Technologies Inc. All rights reserved.</p>
            {[['Terms', '/terms'], ['Privacy', '/privacy'], ['Refunds & Returns', '/returns']].map(([label, to]) => (
              <Link key={to} to={to} className={link}>{label}</Link>
            ))}
          </div>
          <div className="flex gap-6">
            {socials.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={link}>{name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
