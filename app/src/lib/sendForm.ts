// Set VITE_FORMSPREE_ID in app/.env (from formspree.io → your form → "Integration") to send
// form messages straight to the inbox. Without it, forms open the visitor's email app.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
export const INBOX = 'hello@novastaq.com';

export type SendResult = 'sent' | 'mailto';

/** Sends a form message. Fields appear in the email in the order given. */
export async function sendForm(subject: string, fields: Record<string, string>, replyTo: string): Promise<SendResult> {
  if (FORMSPREE_ID) {
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, _replyto: replyTo, email: replyTo, ...fields }),
      });
      if (res.ok) return 'sent';
    } catch {
      // network trouble: fall through to the email app so the message isn't lost
    }
  }

  const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n');
  window.open(`mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  return 'mailto';
}
