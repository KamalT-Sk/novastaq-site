// Form messages go to the store's server, which emails them to the inbox through Mailhive
// (the website is static, so the email key can't live here). Override with VITE_FORM_ENDPOINT.
const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || 'https://store.novastaq.com/api/contact';
export const INBOX = 'hello@novastaq.com';

export type SendResult = 'sent' | 'mailto';

/**
 * Sends a form message. Fields appear in the email in the order given.
 * `trap` is the hidden honeypot input: people leave it empty, bots fill it.
 * If the server can't be reached, opens the visitor's email app so the message isn't lost.
 */
export async function sendForm(subject: string, fields: Record<string, string>, replyTo: string, trap = ''): Promise<SendResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ subject, reply_to: replyTo, fields, website: trap }),
    });
    if (res.ok) return 'sent';
  } catch {
    // network trouble: fall through to the email app
  }

  const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n');
  window.open(`mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  return 'mailto';
}
