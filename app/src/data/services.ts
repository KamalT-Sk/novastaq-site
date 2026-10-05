import {
  Code, CreditCard, Blocks, Palette, Laptop, Wrench, Smartphone, Globe, Cloud, Plug, Gauge, Wallet, Landmark, Receipt,
  ArrowLeftRight, ShieldCheck, Coins, FileCode2, KeyRound, Layers, Users, PenTool, Search, LayoutTemplate, Activity,
  LifeBuoy, ServerCog, Bug, Zap, Rocket, Lightbulb, type LucideIcon,
} from 'lucide-react';

export interface Feature { icon: LucideIcon; title: string; text: string }

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** one line for the services grid */
  summary: string;
  /** the detail page's headline under the title */
  tagline: string;
  intro: string;
  /** which option the quote form opens with */
  quote: string;
  /** a service with its own page elsewhere (procurement) links there instead */
  to?: string;
  features: Feature[];
  audience: { title: string; text: string }[];
}

export const WHY_US: Feature[] = [
  { icon: Zap, title: 'Speed', text: 'We move fast and ship in small, steady releases you can see.' },
  { icon: ShieldCheck, title: 'Security first', text: 'Secure by default: auth, encryption and audits are built in, not bolted on.' },
  { icon: Layers, title: 'Built to scale', text: 'Clean architecture that grows from your first user to your millionth.' },
  { icon: Rocket, title: 'Proven', text: "100+ products shipped and making money. We've done this before." },
];

export const SERVICES: Service[] = [
  {
    slug: 'product-development', icon: Code, title: 'SaaS & Product Development', quote: 'software',
    summary: 'Web and mobile platforms built with React, React Native, Node.js and cloud-native architectures, from MVP to production.',
    tagline: 'From idea to a product people pay for.',
    intro: 'We build businesses powered by software. Our team takes you from first sketch to a live, reliable product, and stays with you as it grows.',
    features: [
      { icon: Globe, title: 'Web applications', text: 'Fast, accessible web apps and dashboards built with React and Next.js.' },
      { icon: Smartphone, title: 'Mobile apps', text: 'Cross-platform iOS and Android apps with React Native, from one codebase.' },
      { icon: Layers, title: 'SaaS platforms', text: 'Multi-tenant products with subscriptions, roles and admin tools.' },
      { icon: Plug, title: 'APIs & integrations', text: 'Robust Node.js back ends and integrations with the services you rely on.' },
      { icon: Cloud, title: 'Cloud & DevOps', text: 'Infrastructure on AWS, CI/CD and monitoring so releases are boring.' },
      { icon: Gauge, title: 'MVPs', text: 'A focused first version to test your idea with real users, fast.' },
    ],
    audience: [
      { title: 'Founders', text: 'Turning an idea into a first product.' },
      { title: 'Startups', text: 'Scaling a product that already has users.' },
      { title: 'SMEs', text: 'Replacing spreadsheets with software that fits.' },
      { title: 'Enterprises', text: 'Launching new digital products quickly.' },
    ],
  },
  {
    slug: 'fintech', icon: CreditCard, title: 'Fintech & Payments', quote: 'software',
    summary: 'Build, scale and secure payments with ease: wallets, collections, payouts and crypto onramps.',
    tagline: 'Build, scale and secure payments with ease.',
    intro: 'We have built payment products for African businesses, including Tsara and Velcro. We bring that experience to your wallets, collections, payouts and cards.',
    features: [
      { icon: Wallet, title: 'Wallets', text: 'Multi-currency wallets with balances, transfers and transaction history.' },
      { icon: Receipt, title: 'Collections & payouts', text: 'Accept payments online and in-store, and pay out to banks instantly.' },
      { icon: Landmark, title: 'Banking integrations', text: 'Connect to banks and payment providers through their APIs.' },
      { icon: ArrowLeftRight, title: 'Crypto on/off-ramps', text: 'Let users move between naira, stablecoins and crypto.' },
      { icon: CreditCard, title: 'Virtual cards', text: 'Issue cards for online spending and subscriptions.' },
      { icon: Receipt, title: 'Bills & VTU', text: 'Airtime, data, electricity and TV payments in one flow.' },
    ],
    audience: [
      { title: 'Fintech startups', text: 'Launching a new financial product.' },
      { title: 'Financial institutions', text: 'Modernising digital channels.' },
      { title: 'E-commerce brands', text: 'Getting paid faster, everywhere.' },
      { title: 'SMEs', text: 'Collecting and paying out with less hassle.' },
    ],
  },
  {
    slug: 'web3', icon: Blocks, title: 'Web3 Infrastructure', quote: 'web3',
    summary: 'Smart contracts, wallets, onramps and compliance on Solana and beyond.',
    tagline: 'Blockchain products that real people can use.',
    intro: 'We build on Solana and other chains, with partners like SuperteamNG. We focus on products that hide the complexity and just work.',
    features: [
      { icon: FileCode2, title: 'Smart contracts', text: 'Secure, tested on-chain programs for tokens, escrow and more.' },
      { icon: KeyRound, title: 'Wallets', text: 'Custodial and non-custodial wallets with a simple user experience.' },
      { icon: ArrowLeftRight, title: 'On/off-ramps', text: 'Bridges between local currency and digital assets.' },
      { icon: Coins, title: 'Crypto payments', text: 'Let businesses accept stablecoins and crypto, as CriptPay does.' },
      { icon: Blocks, title: 'dApps', text: 'Web and mobile front ends for decentralised products.' },
      { icon: ShieldCheck, title: 'Compliance', text: 'KYC, transaction monitoring and audit trails from day one.' },
    ],
    audience: [
      { title: 'Web3 startups', text: 'Shipping a first protocol or app.' },
      { title: 'Fintechs', text: 'Adding stablecoin and crypto rails.' },
      { title: 'Businesses', text: 'Accepting crypto payments.' },
      { title: 'Communities', text: 'Building tools for their members.' },
    ],
  },
  {
    slug: 'design', icon: Palette, title: 'Product Design', quote: 'software',
    summary: 'UX research, wireframes, design systems and prototypes that ship and delight users.',
    tagline: 'Design that ships, and that users love.',
    intro: 'Good design is how a product works, not only how it looks. We research, prototype and test, then hand engineers designs they can build.',
    features: [
      { icon: Search, title: 'UX research', text: 'Talk to users, map their problems and find what to build first.' },
      { icon: LayoutTemplate, title: 'Wireframes & flows', text: 'Clear user journeys before a single pixel is polished.' },
      { icon: PenTool, title: 'UI design', text: 'Modern, accessible interfaces that match your brand.' },
      { icon: Layers, title: 'Design systems', text: 'Reusable components that keep your product consistent as it grows.' },
      { icon: Smartphone, title: 'Prototypes', text: 'Clickable prototypes to test with users and pitch to investors.' },
      { icon: Activity, title: 'Usability testing', text: 'Watch real users, find the friction and fix it.' },
    ],
    audience: [
      { title: 'Founders', text: 'Who need a product investors can click.' },
      { title: 'Product teams', text: 'Who need more design capacity.' },
      { title: 'Companies', text: 'Refreshing an existing product.' },
      { title: 'Agencies', text: 'Who need a design partner.' },
    ],
  },
  {
    slug: 'procurement', icon: Laptop, title: 'Tech Procurement', quote: 'procurement', to: '/procurement',
    summary: 'Phones, laptops, gadgets and office IT, sourced for businesses and individuals and delivered to your door.',
    tagline: '', intro: '', features: [], audience: [],
  },
  {
    slug: 'consultation', icon: Wrench, title: 'Consultation & Maintenance', quote: 'consultation',
    summary: 'A full-stack team on demand: product managers, engineers, DevOps and QA to keep you running.',
    tagline: 'A full-stack team, on demand.',
    intro: 'Need advice before you build, or a team to keep your product healthy after launch? Product managers, engineers, DevOps and QA, when you need them.',
    features: [
      { icon: Lightbulb, title: 'Technical consulting', text: 'Architecture reviews, tech choices and honest advice before you spend.' },
      { icon: LifeBuoy, title: 'Maintenance', text: 'Updates, fixes and dependency upgrades so nothing rots.' },
      { icon: ServerCog, title: 'DevOps & monitoring', text: 'Uptime monitoring, alerts and incident response.' },
      { icon: Bug, title: 'QA & testing', text: 'Manual and automated testing before every release.' },
      { icon: Users, title: 'Team extension', text: 'Add our engineers to your team for as long as you need.' },
      { icon: Gauge, title: 'Performance', text: 'Find and fix what makes your product slow or expensive.' },
    ],
    audience: [
      { title: 'Startups', text: 'Without a full in-house team yet.' },
      { title: 'SMEs', text: 'Running software they did not build.' },
      { title: 'Enterprises', text: 'Needing extra hands for a project.' },
      { title: 'Founders', text: 'Wanting a second opinion.' },
    ],
  },
];

export const serviceHref = (s: Service) => s.to ?? `/services/${s.slug}`;
