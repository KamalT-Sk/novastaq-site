/**
 * WebMCP (Web Model Context Protocol) In-Browser Agent Tools
 * Exposes tools to browser-embedded and autonomous AI agents via navigator.modelContext.
 */

interface WebMCPTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (params: Record<string, unknown>) => Promise<unknown> | unknown;
}

interface ModelContextAPI {
  registerTool: (tool: WebMCPTool) => void;
  unregisterTool?: (toolName: string) => void;
}

declare global {
  interface Navigator {
    modelContext?: ModelContextAPI;
  }
  interface Window {
    modelContext?: ModelContextAPI;
  }
}

export function registerWebMCPTools(): void {
  if (typeof window === 'undefined') return;

  const init = () => {
    const api: ModelContextAPI | undefined = window.navigator.modelContext || window.modelContext;

    if (!api || typeof api.registerTool !== 'function') {
      // In-browser agent environment doesn't expose modelContext yet; graceful fallback
      return;
    }

    try {
      // 1. Tool: Request Project Quote or Tech Procurement
      api.registerTool({
        name: 'request_quote',
        description: 'Submit a software development enquiry, project quote request, or technology procurement order to Novastaq Technologies Inc.',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Name of the contact person or company' },
            email: { type: 'string', description: 'Email address for reply and quote delivery' },
            phone: { type: 'string', description: 'Phone or WhatsApp number for direct communication' },
            service: {
              type: 'string',
              description: 'Requested service',
              enum: ['product-development', 'fintech', 'web3', 'design', 'consultation', 'procurement', 'other']
            },
            message: { type: 'string', description: 'Detailed project requirements, scope, timeline, or devices needed' }
          },
          required: ['name', 'email', 'message']
        },
        execute: async (params: Record<string, unknown>) => {
          const { sendForm, INBOX } = await import('@/lib/sendForm');
          const name = String(params.name || 'Anonymous');
          const email = String(params.email || '');
          const phone = String(params.phone || 'Not given');
          const service = String(params.service || 'General enquiry');
          const message = String(params.message || '');

          const res = await sendForm(
            `${service}: enquiry from ${name} (via WebMCP Agent)`,
            { Name: name, Email: email, 'Phone/WhatsApp': phone, Service: service, Message: message },
            email
          );

          return {
            success: res === 'sent',
            recipient: INBOX,
            message: 'Your enquiry has been delivered to the Novastaq engineering team. We will review and reply within 24-48 hours.',
            channel: res
          };
        }
      });

      // 2. Tool: Get Services Catalog
      api.registerTool({
        name: 'get_services',
        description: 'List all digital product development, fintech infrastructure, Web3 engineering, and tech procurement services provided by Novastaq Technologies Inc.',
        inputSchema: {
          type: 'object',
          properties: {}
        },
        execute: () => ({
          company: 'Novastaq Technologies Inc',
          services: [
            {
              id: 'product-development',
              name: 'Product Development (Web & Mobile)',
              description: 'Custom full-stack web and mobile application engineering from MVP to enterprise scale (React, TypeScript, Flutter, Go, Python, Laravel).',
              url: 'https://novastaq.com/services/product-development'
            },
            {
              id: 'fintech',
              name: 'Fintech & Payment Systems',
              description: 'Payment gateway integrations (Paystack, Nomba, Tsara, Stripe), automated bank transfer verification, virtual accounts, ledger & settlement engines.',
              url: 'https://novastaq.com/services/fintech'
            },
            {
              id: 'web3',
              name: 'Web3 & Blockchain Infrastructure',
              description: 'Smart contract development (Solidity/Rust) for EVM and Solana, Real World Asset (RWA) tokenization, non-custodial wallets, and security audits.',
              url: 'https://novastaq.com/services/web3'
            },
            {
              id: 'design',
              name: 'Product Design (UI/UX)',
              description: 'User research, wireframing, high-fidelity Figma prototypes, comprehensive design systems, and conversion-focused UX.',
              url: 'https://novastaq.com/services/design'
            },
            {
              id: 'consultation',
              name: 'Consultation & Architecture Advisory',
              description: 'Codebase reviews, architecture audits, security assessments, and technical roadmap planning.',
              url: 'https://novastaq.com/services/consultation'
            },
            {
              id: 'procurement',
              name: 'Tech Procurement & Hardware Sourcing',
              description: 'Authentic smartphones (iPhone, Samsung, Pixel), laptops (MacBook, ThinkPad, Dell, HP), and office gadgets with nationwide delivery in Nigeria.',
              url: 'https://novastaq.com/procurement'
            }
          ]
        })
      });

      // 3. Tool: Get Official Contact Details
      api.registerTool({
        name: 'get_contact_info',
        description: 'Get verified company contact information, headquarters location, and support channels for Novastaq Technologies Inc.',
        inputSchema: {
          type: 'object',
          properties: {}
        },
        execute: () => ({
          companyName: 'Novastaq Technologies Inc',
          email: 'hello@novastaq.com',
          telephone: '+2348150533325',
          whatsapp: 'https://wa.me/2348150533325',
          address: {
            city: 'Lagos',
            state: 'Lagos State',
            country: 'Nigeria'
          },
          website: 'https://novastaq.com',
          onlineStore: 'https://store.novastaq.com',
          socials: {
            x: 'https://x.com/NovastaqHQ',
            instagram: 'https://instagram.com/novastaq',
            facebook: 'https://facebook.com/NovastaqHQ'
          }
        })
      });
    } catch (err) {
      // In case the host implements a strict subset of WebMCP
      console.warn('WebMCP registration notice:', err);
    }
  };

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
}
