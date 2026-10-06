import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const UPDATED = '6 October 2026';
const EMAIL = 'hello@novastaq.com';
const WHATSAPP = 'https://wa.me/2348150533325';

interface Section {
  title: string;
  body: ReactNode;
}

function LegalPage({ title, intro, sections }: { title: string; intro: ReactNode; sections: Section[] }) {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="eyebrow">Legal</p>
          <h1 className="heading-xl text-4xl md:text-6xl mb-4">{title}</h1>
          <p className="text-[14px] text-[#71717a] mb-10">Last updated: {UPDATED}</p>
          <div className="lead mb-12">{intro}</div>

          <nav aria-label="On this page" className="panel p-5 mb-14">
            <p className="text-[13px] font-medium text-[#0b0b0f] mb-3">On this page</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px] list-decimal list-inside text-[#52525b]">
              {sections.map((s, i) => (
                <li key={s.title}><a href={`#s${i + 1}`} className="hover:text-[#0b0b0f] hover:underline underline-offset-4">{s.title}</a></li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <section key={s.title} id={`s${i + 1}`} className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] text-[#0b0b0f] mb-4">{i + 1}. {s.title}</h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-[#3f3f46] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#0b0b0f] [&_a]:underline [&_a]:underline-offset-4">{s.body}</div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-black/[0.08] text-[14px] text-[#71717a]">
            Questions about this page? Email <a href={`mailto:${EMAIL}`} className="text-[#0b0b0f] underline underline-offset-4">{EMAIL}</a> or{' '}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-[#0b0b0f] underline underline-offset-4">chat with us on WhatsApp</a>.
            <span className="block mt-2">See also: <Link to="/terms" className="underline underline-offset-4">Terms</Link> · <Link to="/privacy" className="underline underline-offset-4">Privacy</Link> · <Link to="/returns" className="underline underline-offset-4">Refunds & Returns</Link></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={<p>These terms apply when you use novastaq.com and store.novastaq.com, buy from our store, subscribe to a plan, join our referral program or hire us for a project. By doing any of these, you agree to them. "Novastaq", "we" and "us" mean Novastaq Technologies Inc.</p>}
      sections={[
        { title: 'Who we are', body: <p>Novastaq Technologies Inc builds software and Web3 products, supplies technology devices, and resells software subscriptions to businesses and individuals, mainly in Nigeria. You can reach us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p> },
        { title: 'Your account', body: <><p>Some features, such as subscriptions and order history, need an account. Keep your password private. You are responsible for activity on your account. Tell us straight away if you think someone else has used it.</p><p>You must be at least 18, or have a parent's or guardian's permission, to buy from us.</p></> },
        { title: 'Prices and payment', body: <><ul>
          <li>Prices are in Nigerian naira (₦) and include any applicable taxes unless stated otherwise.</li>
          <li>Payments are processed by <strong>Paystack</strong>. We never see or store your full card details.</li>
          <li>An order is confirmed only when payment is successful. If we listed a wrong price by mistake, we will tell you before we ship and you can cancel for a full refund.</li>
          <li>We may change prices at any time. Changes don't affect orders already paid for.</li>
        </ul></> },
        { title: 'Orders and delivery', body: <><ul>
          <li>We deliver physical products within Nigeria. A flat delivery fee (currently ₦2,000) is shown at checkout.</li>
          <li>Delivery times are estimates. We'll contact you on the phone number you give us to arrange delivery.</li>
          <li>Please check items when they arrive. Report damage or missing items within 48 hours, with photos if possible.</li>
          <li>If an item goes out of stock after you pay, we'll offer a similar item or a full refund.</li>
        </ul></> },
        { title: 'Subscriptions', body: <><ul>
          <li>Subscriptions renew automatically at the end of each billing period (monthly, quarterly or yearly) until you cancel.</li>
          <li>Paystack charges your saved payment method on the renewal date. You can cancel at any time using the link in your Paystack receipt email, or by contacting us. Cancelling stops future renewals; you keep access until the end of the period you've paid for.</li>
          <li>Some plans give you access to third-party software (for example AI tools). That software is also governed by its provider's own terms, and features or availability may change at the provider's discretion.</li>
        </ul></> },
        { title: 'Projects and services', body: <p>Software, design, Web3 and consulting work is governed by the proposal or contract we agree with you, which sets out scope, timelines, fees and ownership. If a contract conflicts with these terms, the contract wins.</p> },
        { title: 'Referral program', body: <><p>When someone you refer signs a contract with us, you earn between 5% and 10% of the contract value. We confirm the exact percentage before the client signs. Rewards are paid after the client's payment is received.</p><p>You can't refer yourself or your own business, and you must not use spam or misleading claims. We may end the program or change its terms at any time; rewards already earned will still be paid.</p></> },
        { title: 'Acceptable use', body: <p>Don't misuse our websites: no attempts to break in, overload or copy them, no fraud, and no use for anything illegal. We may suspend accounts that do.</p> },
        { title: 'Warranties', body: <p>New devices carry the manufacturer's warranty where one applies. Beyond that, and except where the law says otherwise, our websites and services are provided "as is". See our <Link to="/returns">Refunds & Returns policy</Link> for faulty items.</p> },
        { title: 'Limitation of liability', body: <p>To the extent the law allows, we aren't liable for indirect or consequential losses, such as lost profits or data. Our total liability for any claim is limited to the amount you paid us for the product or service involved. Nothing in these terms limits liability that cannot legally be limited.</p> },
        { title: 'Governing law', body: <p>These terms are governed by the laws of the Federal Republic of Nigeria. We'll always try to resolve disputes informally first, so please contact us.</p> },
        { title: 'Changes to these terms', body: <p>We may update these terms. The date at the top shows the latest version. Changes apply to purchases made after that date.</p> },
      ]}
    />
  );
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={<p>This policy explains what personal data Novastaq Technologies Inc collects when you use novastaq.com and store.novastaq.com, why, and your rights. We follow the Nigeria Data Protection Act 2023.</p>}
      sections={[
        { title: 'What we collect', body: <ul>
          <li><strong>Contact details</strong> you give us: name, email, phone or WhatsApp number, company.</li>
          <li><strong>Order details</strong>: delivery address, items bought, amounts, order history.</li>
          <li><strong>Account details</strong>: your login email and an encrypted (hashed) password. We cannot see your password.</li>
          <li><strong>Payment information</strong>: handled by Paystack. We receive a payment reference and status, never your full card number.</li>
          <li><strong>Messages</strong> you send through our forms, by email or on WhatsApp.</li>
          <li><strong>Technical data</strong>: basic logs such as IP address and browser type, used for security and to keep the site working.</li>
        </ul> },
        { title: 'Why we use it', body: <ul>
          <li>To process and deliver your orders and manage your subscriptions.</li>
          <li>To reply to enquiries and quote for projects.</li>
          <li>To run the referral program and pay rewards.</li>
          <li>To prevent fraud and keep our services secure.</li>
          <li>To meet legal, tax and accounting obligations.</li>
        </ul> },
        { title: 'Who we share it with', body: <><p>We never sell your data. We share only what's needed with:</p><ul>
          <li><strong>Paystack</strong>, to process payments and subscriptions.</li>
          <li><strong>Delivery partners</strong>, who receive your name, phone number and address to deliver orders.</li>
          <li><strong>Our hosting and email providers</strong>, which store data on our behalf.</li>
          <li><strong>Authorities</strong>, when the law requires it.</li>
        </ul></> },
        { title: 'How long we keep it', body: <p>We keep order and payment records for as long as tax and accounting law requires (typically six years). We keep enquiry messages for up to two years, and account data until you delete your account.</p> },
        { title: 'Your rights', body: <><p>You can ask us to give you a copy of your data, correct it, delete it, or stop using it for a particular purpose. You can delete your store account yourself from your profile page. For anything else, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We'll respond within 30 days.</p><p>If you're unhappy with how we handle your data, you can complain to the Nigeria Data Protection Commission.</p></> },
        { title: 'Cookies', body: <p>We use only essential cookies: to keep you signed in, remember your cart and protect forms from abuse. We don't use advertising cookies. If we add analytics, we'll update this policy.</p> },
        { title: 'Security', body: <p>Our sites use encrypted connections (HTTPS), passwords are stored hashed, and access to customer data is limited to staff who need it.</p> },
        { title: 'Children', body: <p>Our services aren't aimed at children under 13, and we don't knowingly collect their data.</p> },
        { title: 'Changes', body: <p>We may update this policy. The date at the top shows the latest version.</p> },
      ]}
    />
  );
}

export function Returns() {
  return (
    <LegalPage
      title="Refunds & Returns"
      intro={<p>We want you to be happy with what you buy. This policy explains how returns and refunds work for devices from our store, subscriptions and project work.</p>}
      sections={[
        { title: 'Devices and gadgets', body: <><p>You can return a device within <strong>7 days of delivery</strong> if:</p><ul>
          <li>it arrived <strong>faulty or damaged</strong>, or is not what you ordered: we'll replace it or refund you in full, including delivery; or</li>
          <li>you <strong>changed your mind</strong>: the item must be unused, in its original sealed packaging, with all accessories. Delivery fees aren't refunded, and you cover the cost of sending it back.</li>
        </ul><p>Items that have been activated, unsealed, damaged by use, or registered to your account (for example with iCloud or Google) can only be returned if they're faulty.</p></> },
        { title: 'Faults after 7 days', body: <p>After 7 days, faults are covered by the manufacturer's warranty where one applies. We'll help you make a warranty claim.</p> },
        { title: 'Subscriptions', body: <ul>
          <li>You can cancel at any time. Cancelling stops the next renewal, and you keep access until the end of the period you've paid for.</li>
          <li>Payments for a period that has already started aren't refundable, because access is provided straight away.</li>
          <li>If we can't activate your plan, or it stops working because of a problem on our side, we'll fix it or refund the affected period.</li>
        </ul> },
        { title: 'Project work', body: <p>Refunds for software, design and consulting projects follow the milestones and terms in your project contract.</p> },
        { title: 'How to request a return or refund', body: <><p>Contact us within the time limits above with your order number (it starts with <strong>NV-</strong>), what's wrong, and photos if the item is damaged:</p><ul>
          <li>WhatsApp: <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">chat with us</a></li>
          <li>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        </ul><p>We'll arrange the pickup or tell you where to send the item.</p></> },
        { title: 'When you get your money back', body: <p>Once we've received and checked a returned item, or approved a refund, we refund the original payment method through Paystack within <strong>5 to 10 working days</strong>. Your bank may take a few extra days to show it.</p> },
        { title: 'Order cancellations', body: <p>You can cancel an order for a full refund any time before it ships. Contact us as soon as possible with your order number.</p> },
      ]}
    />
  );
}
