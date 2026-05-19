import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Zap, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export default function Bootcamp() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    phone: '',
    followTwitter: false,
  });

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

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

      {/* Hero Section — matches homepage white style */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg-cool.png" alt="" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 pt-24 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Partner Logos */}
            <div
              className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img src="/logo.png" alt="Novastaq" className="h-10 md:h-12 w-auto" />
              <span className="text-gray-400 text-lg font-medium hidden md:block">×</span>
              <img
                src="/deezaina-logo.png"
                alt="Deezaina Studios"
                className="h-10 md:h-12 w-auto"
              />
            </div>

            {/* Badge */}
            <div
              className={`text-center mb-6 transition-all duration-1000 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                Limited Spots Available
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center leading-tight mb-6 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              4-Day Build with AI
              <br />
              <span className="text-gray-400">Bootcamp</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Learn to build real digital products using AI tools—no coding experience required.
              Hosted by Novastaq in partnership with Deezaina Studios.
            </p>

            {/* Highlights */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="text-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100"
                >
                  <h.icon className="w-6 h-6 text-gray-900 mx-auto mb-2" />
                  <p className="text-gray-900 font-semibold text-sm">{h.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{h.desc}</p>
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
                className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-full font-semibold text-sm transition-colors"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section ref={agendaRef} className="py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-700 ${
                agendaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What You&apos;ll Learn
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A carefully crafted 4-day curriculum designed to take you from zero to building with AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {days.map((d, i) => (
                <div
                  key={d.day}
                  className={`group p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                    agendaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <span className="text-gray-900 font-mono text-sm mb-3 block">{d.day}</span>
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
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
      <section id="register" ref={formRef} className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Info */}
              <div
                className={`transition-all duration-700 ${
                  formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Secure Your Spot
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form to register for the bootcamp. We&apos;ll send you all the details via email.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">4-Day Program</p>
                      <p className="text-gray-500 text-sm">Intensive hands-on workshops</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Follow for Updates</p>
                      <div className="flex gap-3 mt-1">
                        <a
                          href="https://x.com/NovastaqHQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-900 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href="https://x.com/DeezainaStudios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-900 transition-colors"
                        >
                          <span className="text-sm font-medium">@DeezainaStudios</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="p-8 rounded-3xl bg-gray-50">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                        You&apos;re Registered!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for signing up. We&apos;ll be in touch soon with all the bootcamp details.
                      </p>
                      <a
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline"
                      >
                        Back to Home <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Level of Experience Using AI
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-400 transition-colors appearance-none"
                        >
                          <option value="">Select your experience level</option>
                          <option value="none">No experience — completely new to AI</option>
                          <option value="beginner">Beginner — used ChatGPT or similar tools</option>
                          <option value="intermediate">
                            Intermediate — built something with AI assistance
                          </option>
                          <option value="advanced">Advanced — regularly build with AI tools</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
                          placeholder="+234 800 000 0000"
                        />
                      </div>

                      <div className="flex items-start gap-3 pt-2">
                        <input
                          type="checkbox"
                          name="followTwitter"
                          id="followTwitter"
                          checked={formData.followTwitter}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                        />
                        <label htmlFor="followTwitter" className="text-sm text-gray-600 leading-relaxed">
                          I agree to follow{' '}
                          <a
                            href="https://x.com/NovastaqHQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-900 font-medium hover:underline"
                          >
                            <Twitter className="w-3.5 h-3.5" /> @NovastaqHQ
                          </a>{' '}
                          and{' '}
                          <a
                            href="https://x.com/DeezainaStudios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-900 font-medium hover:underline"
                          >
                            <Twitter className="w-3.5 h-3.5" /> @DeezainaStudios
                          </a>{' '}
                          on X (Twitter) for updates.
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full text-sm font-semibold mt-2"
                      >
                        Register for Bootcamp
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <img src="/logo.png" alt="Novastaq" className="h-8 w-auto mb-4 invert" />
                <p className="text-gray-400 text-sm mb-6">
                  Build next-gen digital products—venture studio, Web2, and Web3 solutions via one modern partner.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/NovastaqHQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Program</h4>
                <ul className="space-y-3">
                  {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((item) => (
                    <li key={item}>
                      <a href="#register" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Partners</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="https://x.com/NovastaqHQ" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Novastaq
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/DeezainaStudios" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Deezaina Studios
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Resources</h4>
                <ul className="space-y-3">
                  <li><a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
                  <li><a href="#register" className="text-gray-300 hover:text-white transition-colors text-sm">Register</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Novastaq Technologies Inc. & Deezaina Studios. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
