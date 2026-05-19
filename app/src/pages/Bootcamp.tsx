import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Zap, Twitter, Globe, Facebook, Instagram } from 'lucide-react';

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, isIntersecting };
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd2RxKMDz4QyGfFUcM3FwgaCCOLbtKPluqRpubgwjzW6e8KQQ/viewform?usp=sf_link';
const WHATSAPP_LINK = 'https://chat.whatsapp.com/EQ5qb20PDe28y4t3ZJ0Hyv';

export default function Bootcamp() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  // Listen for Google Form submission by detecting iframe URL changes
  useEffect(() => {
    const checkFormSubmit = () => {
      try {
        if (iframeRef.current) {
          const iframeUrl = iframeRef.current.src;
          if (iframeUrl.includes('formResponse')) {
            setSubmitted(true);
            setTimeout(() => {
              window.location.href = WHATSAPP_LINK;
            }, 1500);
          }
        }
      } catch {
        // Cross-origin restrictions may prevent reading iframe URL
      }
    };

    const interval = setInterval(checkFormSubmit, 1000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { icon: Calendar, label: '4 Days', desc: 'Intensive hands-on program' },
    { icon: Clock, label: 'Live Sessions', desc: 'Interactive daily workshops' },
    { icon: Users, label: 'Beginner Friendly', desc: 'No prior coding required' },
    { icon: Zap, label: 'Build with AI', desc: 'Create real projects using AI tools' },
  ];

  const days = [
    { day: '01', title: 'AI Foundations & Prompt Engineering', desc: 'Learn how to talk to AI effectively and leverage LLMs for ideation and planning.' },
    { day: '02', title: 'No-Code & Low-Code Building', desc: 'Build functional web apps and automations without writing a single line of code.' },
    { day: '03', title: 'AI-Assisted Development', desc: 'Use AI coding assistants to build real products faster than ever before.' },
    { day: '04', title: 'Launch & Present', desc: 'Polish your project, prepare your demo, and present to the group.' },
  ];

  const { ref: heroRef } = useIntersectionObserver();
  const { ref: formRef, isIntersecting: formVisible } = useIntersectionObserver();
  const { ref: agendaRef, isIntersecting: agendaVisible } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Novastaq" className="h-7 w-auto" />
            </a>
            <a
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg-cool.png" alt="" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 pt-28 md:pt-24 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Partner Logos */}
            <div
              className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-8 md:mb-12 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img src="/logo.png" alt="Novastaq" className="h-8 md:h-12 w-auto" />
              <span className="text-gray-400 text-lg font-medium hidden md:block">×</span>
              <img
                src="/deezaina-logo.png"
                alt="Deezaina Studios"
                className="h-8 md:h-12 w-auto"
              />
            </div>

            {/* Badge */}
            <div
              className={`text-center mb-6 transition-all duration-1000 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-xs md:text-sm font-medium">
                Limited Spots Available
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center leading-tight mb-4 md:mb-6 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              4-Day Build with AI
              <br />
              <span className="text-gray-400">Bootcamp</span>
            </h1>

            <p
              className={`text-base md:text-lg text-gray-600 text-center max-w-xl mx-auto mb-8 md:mb-12 px-2 sm:px-0 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Learn to build real digital products using AI tools—no coding experience required.
              Hosted by Novastaq in partnership with Deezaina Studios.
            </p>

            {/* Highlights */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="text-center p-3 md:p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100"
                >
                  <h.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-900 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold text-xs md:text-sm">{h.label}</p>
                  <p className="text-gray-500 text-[10px] md:text-xs mt-1">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`flex justify-center transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#register"
                className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm transition-colors"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section ref={agendaRef} className="py-16 md:py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
                agendaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What You&apos;ll Learn
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                A carefully crafted 4-day curriculum designed to take you from zero to building with AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {days.map((d, i) => (
                <div
                  key={d.day}
                  className={`group p-5 md:p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                    agendaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <span className="text-gray-900 font-mono text-sm mb-2 md:mb-3 block">{d.day}</span>
                  <h3 className="font-heading text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {d.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" ref={formRef} className="py-16 md:py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              {/* Left: Info */}
              <div
                className={`transition-all duration-700 ${
                  formVisible ? 'opacity-100 translate-y-0 lg:translate-x-0' : 'opacity-0 translate-y-8 lg:-translate-x-8'
                }`}
              >
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Secure Your Spot
                </h2>
                <p className="text-gray-600 mb-8 text-sm md:text-base">
                  Fill out the form to register for the bootcamp. After signing up, you&apos;ll be redirected to join our WhatsApp group for all updates.
                </p>

                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm md:text-base">4-Day Program</p>
                      <p className="text-gray-500 text-xs md:text-sm">Intensive hands-on workshops</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm md:text-base">Follow for Updates</p>
                      <div className="flex flex-wrap gap-2 md:gap-3 mt-1">
                        <a
                          href="https://x.com/NovastaqHQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-xs md:text-sm"
                        >
                          <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4" /> @NovastaqHQ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Google Form */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  formVisible ? 'opacity-100 translate-y-0 lg:translate-x-0' : 'opacity-0 translate-y-8 lg:translate-x-8'
                }`}
              >
                {submitted ? (
                  <div className="p-6 md:p-8 rounded-3xl bg-gray-50 text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5 md:mb-6">
                      <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-green-600" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      You&apos;re Registered!
                    </h3>
                    <p className="text-gray-600 mb-5 md:mb-6 text-sm md:text-base">
                      Redirecting you to the WhatsApp group...
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                    >
                      Join WhatsApp Group <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <div className="rounded-3xl bg-gray-50 overflow-hidden">
                    <iframe
                      ref={iframeRef}
                      src={GOOGLE_FORM_URL}
                      width="100%"
                      height="800"
                      className="border-0 w-full"
                      title="Bootcamp Registration Form"
                      onLoad={() => {
                        try {
                          const iframe = iframeRef.current;
                          if (iframe && iframe.contentWindow) {
                            const currentUrl = iframe.contentWindow.location.href;
                            if (currentUrl.includes('formResponse')) {
                              setSubmitted(true);
                              setTimeout(() => {
                                window.location.href = WHATSAPP_LINK;
                              }, 1500);
                            }
                          }
                        } catch {
                          // Cross-origin restrictions prevent reading iframe URL
                        }
                      }}
                    >
                      Loading…
                    </iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — matches homepage exactly */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <img src="/logo.png" alt="Novastaq" className="h-8 w-auto mb-4 invert" />
                <p className="text-gray-400 text-sm mb-6">Build next-gen digital products—venture studio, Web2, and Web3 solutions via one modern partner.</p>
                <div className="flex gap-4">
                  <a href="https://facebook.com/NovastaqHQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/NovastaqHQ?s=20" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/novastaq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Company</h4>
                <ul className="space-y-3">
                  {['About', 'Contact', 'Careers'].map(item => (
                    <li key={item}><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Products</h4>
                <ul className="space-y-3">
                  {['Usetsara', 'Velcro', 'CriptPay', 'MyArteLab'].map(item => (
                    <li key={item}><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Resources</h4>
                <ul className="space-y-3">
                  {['Blog', 'Documentation', 'Privacy', 'Terms'].map(item => (
                    <li key={item}><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Novastaq Technologies Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
