import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { STORE_URL } from '@/components/ProcurementSection';

const NAV_ITEMS = [
  { label: 'Services', to: '/services' },
  { label: 'Procurement', to: '/procurement' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function StoreLink({ className }: { className: string }) {
  return STORE_URL ? (
    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className={className}>Store</a>
  ) : (
    <Link to="/procurement" className={className}>
      Store <span className="ml-1.5 px-1.5 py-px rounded border border-black/10 text-[10px] text-[#71717a]">Soon</span>
    </Link>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever the page changes
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const link = ({ isActive }: { isActive: boolean }) =>
    `text-[13px] transition-colors ${isActive ? 'text-[#0b0b0f]' : 'text-[#71717a] hover:text-[#0b0b0f]'}`;
  const mobileLink = 'flex items-center text-left text-[#0b0b0f] py-3 border-b border-black/[0.06]';

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-xl border-black/[0.08]' : 'bg-transparent border-transparent'
      }`}
      aria-label="Main navigation"
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg">
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" aria-label="Novastaq Technologies Inc home">
          <img src="/logo.png" alt="Novastaq Technologies Inc" className="h-5 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={link}>{item.label}</NavLink>
          ))}
          <StoreLink className="inline-flex items-center text-[13px] text-[#71717a] hover:text-[#0b0b0f] transition-colors" />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="btn-primary h-8 px-3.5 text-[13px]">Request a quote</Link>
        </div>

        <button
          className="lg:hidden text-[#0b0b0f] p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to} className={mobileLink}>{item.label}</Link>
          ))}
          <StoreLink className={mobileLink} />
          <Link to="/contact" className="btn-primary w-full mt-6">Request a quote</Link>
        </div>
      </div>
    </nav>
  );
}
