import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

/** The shell every page shares: nav, page, footer. New pages start at the top, or at their #hash. */
function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white text-[#0b0b0f]">
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}

export default App;
