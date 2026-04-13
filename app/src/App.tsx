import { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Star,
  Code,
  Blocks,
  Globe,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Custom hook for intersection observer animations
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isIntersecting };
}

// Partners Logo Slider - Continuous loop with only logos
function PartnersSlider() {
  const partners = [
    { name: 'SuperteamNG', src: '/logos/superteamng.png' },
    { name: 'Solana', src: '/logos/solana.png' },
    { name: 'Stacked', src: '/partners/stacked.png' },
    { name: 'Stakepadi', src: '/logos/stakepadi.png' },
    { name: 'Usetsara', src: '/logos/usesara.png' },
    { name: 'Velcro', src: '/logos/velcro.png' },
    { name: 'MyarteLab', src: '/logos/myartelab.png' },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-slide-infinite">
        {duplicatedPartners.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
              <img src={partner.src} alt={partner.name} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <img src="/logo.png" alt="Novastaq" className="h-7 w-auto" />
          
          <div className="hidden lg:flex items-center gap-8">
            {['Products', 'Services', 'Process', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm"
            >
              Get Started <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <button className="lg:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-6 space-y-4">
            {['Products', 'Services', 'Process', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-gray-900 text-white rounded-full mt-4">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section with cool curved background
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg-cool.png" alt="" className="w-full h-full object-cover opacity-40" />
      </div>
      
      <div className="relative z-10 w-full px-6 lg:px-12 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
              Digital Agency
            </span>
          </div>

          <h1 className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Build Digital Products Without Complexity
          </h1>

          <p className={`text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto px-4 sm:px-0 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Novastaq powers next-gen digital products—venture studio, Web2, and Web3 solutions. Our expertise helps startups and enterprises scale globally.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full group w-full sm:w-auto">
              Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('products')} className="border-gray-300 text-gray-700 hover:bg-white px-8 py-3 rounded-full w-full sm:w-auto">
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="w-full">
        <div className={`text-center mb-6 transition-all duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm uppercase tracking-widest">Partners</p>
        </div>
        <PartnersSlider />
      </div>
    </section>
  );
}

// Features Section with Accordion
function FeaturesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [activeFeature, setActiveFeature] = useState(2);

  const features = [
    { id: 0, icon: Globe, title: 'Venture Studio', description: 'We build and scale products from idea to market leader. Full-stack development with modern technologies.' },
    { id: 1, icon: Code, title: 'Web2 Platforms', description: 'Mobile apps, web platforms, and custom software. React Native, Node.js, and cloud-native architectures.' },
    { id: 2, icon: Blocks, title: 'Web3 Infrastructure', description: 'Smart contracts, wallets, onramps, and compliance. From DeFi to NFTs, we build the future of finance.' },
    { id: 3, icon: Zap, title: 'Growth & Scale', description: 'SEO, content, support playbooks, and business setup. We help you grow beyond the product launch.' },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Infrastructure That Powers Modern Products</h2>
              <p className="text-gray-600 mb-8">From building MVPs to scaling across borders, Novastaq provides the building blocks for global digital operations.</p>

              <div className="space-y-2">
                {features.map((feature) => (
                  <div 
                    key={feature.id}
                    className={`border-b border-gray-200 cursor-pointer transition-all duration-300 ${activeFeature === feature.id ? 'pb-4' : 'pb-2'}`}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3">
                        <feature.icon className={`w-5 h-5 transition-colors ${activeFeature === feature.id ? 'text-gray-900' : 'text-gray-400'}`} />
                        <span className={`font-medium transition-colors ${activeFeature === feature.id ? 'text-gray-900' : 'text-gray-500'}`}>{feature.title}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFeature === feature.id ? 'rotate-180' : ''}`} />
                    </div>
                    {activeFeature === feature.id && (
                      <p className="text-gray-600 text-sm pl-8 pr-4 pb-2 animate-fadeIn">{feature.description}</p>
                    )}
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full group">
                Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className={`transition-all duration-700 delay-200 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <img src="/images/feature-card.png" alt="Feature Preview" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Products Section with real screenshots
function ProductsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const products = [
    { name: 'Usetsara', description: 'A Financial Ecosystem Built for Africans', image: '/products/usetsara.png', link: 'https://usetsara.com' },
    { name: 'Velcro', description: 'Collect Payments, Ramp Crypto All Inside WhatsApp', image: '/products/velcro.png', link: 'https://usevelcro.com' },
    { name: 'CriptPay', description: 'Crypto Payment Infrastructure', image: '/products/criptpay.png', link: 'https://criptpay.com' },
    { name: 'MyArteLab', description: 'Built for African Creators. Trusted by Global Clients.', image: '/products/myartelab.png', link: 'https://myartelab.com' },
  ];

  return (
    <section id="products" ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Products we&apos;ve built</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From fintech to productivity tools, we create products that solve real problems across Africa and beyond.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <a 
                key={product.name} 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-3xl overflow-hidden bg-white transition-all duration-700 hover:shadow-xl ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-56 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{product.name}</h3>
                      <p className="text-gray-500 text-sm">{product.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0 ml-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Grid Section
function ServicesSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const services = [
    { icon: '/images/icon-dev.png', title: 'Development', description: 'Mobile & web platforms built with React Native, Node.js, and modern cloud architectures.' },
    { icon: '/images/icon-design.png', title: 'Product Design', description: 'UI/UX systems, design ops, and prototypes that ship and delight users.' },
    { icon: '/images/icon-web3.png', title: 'Web3 Solutions', description: 'Smart contracts, wallets, onramps, and compliance for the future of finance.' },
    { icon: '/images/icon-scale.png', title: 'Growth & Scale', description: 'SEO, content, support playbooks, and business setup for sustainable growth.' },
  ];

  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Products, platforms, and protocols—designed for scale.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className={`group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                <div className="w-16 h-16 mb-4">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const steps = [
    { number: '01', title: 'Build', description: 'Design systems, clean architecture, and rapid prototypes.', image: '/images/process-build.png' },
    { number: '02', title: 'Launch', description: 'Landing pages, onboarding flows, and early feedback loops.', image: '/images/process-launch.png' },
    { number: '03', title: 'Scale', description: 'Infrastructure, compliance, and growth operations.', image: '/images/process-scale.png' },
  ];

  return (
    <section id="process" ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900">Build → Launch → Scale</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Our proven process takes you from idea to global scale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className={`group text-center transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                </div>
                <span className="text-gray-900 font-mono text-sm mb-2 block">{step.number}</span>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <img src="/images/cta-dashboard.png" alt="Analytics Dashboard" className="w-full" />
            </div>

            <div className={`transition-all duration-700 delay-200 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to build the future of digital products?</h2>
              <p className="text-gray-600 mb-8">Join the teams using Novastaq to power new ways to build, launch, and scale across markets.</p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full group">
                Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: { quote: string; author: string; role: string } }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm flex-shrink-0 w-80 md:w-96">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
      </div>
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
          <span className="text-white font-semibold text-sm">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
        </div>
        <div>
          <p className="text-gray-900 font-semibold text-sm">{testimonial.author}</p>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

// Testimonials Section with sliding cards
function TestimonialsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const testimonialsRow1 = [
    { quote: "Novastaq shipped our MVP in weeks—then helped us scale across three markets. Their technical expertise is unmatched.", author: 'Amina K.', role: 'Product Lead, Fintech Startup' },
    { quote: "They design like a product team and build like an infrastructure company. The perfect partner for ambitious founders.", author: 'David O.', role: 'CTO, Logistics Platform' },
    { quote: "Working with Novastaq transformed our product vision into reality. Their attention to detail is incredible.", author: 'Sarah M.', role: 'Founder, HealthTech' },
  ];

  const testimonialsRow2 = [
    { quote: "The team at Novastaq understands both technology and business. They delivered beyond our expectations.", author: 'James L.', role: 'CEO, E-commerce Platform' },
    { quote: "From concept to launch, Novastaq was with us every step. Highly recommend for any startup.", author: 'Chioma N.', role: 'Co-founder, EdTech' },
    { quote: "Their Web3 expertise helped us navigate complex blockchain integrations seamlessly.", author: 'Michael T.', role: 'CTO, DeFi Protocol' },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-gray-50 overflow-hidden">
      <div className="w-full">
        <div className={`text-center mb-12 px-6 transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900">Trusted by Builders</h2>
          <p className="text-gray-600 mt-4">Partnering with innovative teams across Africa and beyond</p>
        </div>

        <div className={`relative overflow-hidden mb-6 transition-all duration-700 delay-200 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-slide-right-slow">
            {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
              <div key={`r1-${index}`} className="flex-shrink-0 mx-3">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className={`relative overflow-hidden transition-all duration-700 delay-300 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-slide-left-slow">
            {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
              <div key={`r2-${index}`} className="flex-shrink-0 mx-3">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Let&apos;s build something great</h2>
              <p className="text-gray-600 mb-8">Tell us what you&apos;re building. We&apos;ll reply within 48 hours.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email us</p>
                    <p className="text-gray-500 text-sm">hello@novastaq.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Follow us</p>
                    <div className="flex gap-3 mt-1">
                      <a href="https://facebook.com/NovastaqHQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Facebook className="w-5 h-5" /></a>
                      <a href="https://x.com/NovastaqHQ?s=20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Twitter className="w-5 h-5" /></a>
                      <a href="https://instagram.com/novastaq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <form className="p-8 rounded-3xl bg-gray-50">
                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
                  <li key={item}><button onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-300 hover:text-white transition-colors text-sm">{item}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">Products</h4>
              <ul className="space-y-3">
                {['Usetsara', 'Velcro', 'CriptPay', 'MyArteLab'].map(item => (
                  <li key={item}><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white transition-colors text-sm">{item}</button></li>
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
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <ProductsSection />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
