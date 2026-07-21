'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { GALA_INQUIRY, inquiries } from '../app/contact/inquiries';
import { INQUIRY_ACCESS_KEY, submitToWeb3Forms } from '../lib/web3forms';

const FALLBACK_EMAIL = 'inquiry@pbi100.com';

const fieldClass =
  'w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20 disabled:opacity-60';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('');

  // Preselect the gala option when arriving from a "Inquire for Tickets" CTA.
  // Read from location rather than useSearchParams so the statically exported
  // page does not need a Suspense boundary just for this.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('inquiry');
    if (requested === 'gala') setInquiryType(GALA_INQUIRY);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const selectedType = String(formData.get('Inquiry type') || 'General inquiry');

    const result = await submitToWeb3Forms({
      formData,
      accessKey: INQUIRY_ACCESS_KEY,
      subject: `PBI 100 inquiry — ${selectedType}`,
      replyTo: String(formData.get('Email') || ''),
    });

    if (result.ok) {
      setStatus('success');
      return;
    }
    setStatus('error');
    setErrorMessage(result.message);
  }

  if (status === 'success') {
    return (
      <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
        <div className="h-px w-16 bg-gradient-to-r from-[#b8945f] to-transparent" />
        <h2 className="mt-6 font-serif text-2xl font-semibold text-[#0f1b2d]">
          Thank you — your inquiry is on its way.
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          We have received your message and will respond shortly. For anything time-sensitive,
          you can also reach us directly at{' '}
          <a
            href={`mailto:${FALLBACK_EMAIL}`}
            className="font-medium text-[#0f1b2d] underline decoration-[#b8945f] decoration-2 underline-offset-4"
          >
            {FALLBACK_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:border-slate-400 hover:bg-slate-50"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
      <h2 className="text-2xl font-semibold text-[#0f1b2d]">Contact form</h2>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        {/* Honeypot: hidden from people, irresistible to bots. Web3Forms drops
            any submission that arrives with this filled in. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <label className="space-y-3 text-sm text-slate-700">
            Name
            <input type="text" name="Name" required disabled={submitting} className={fieldClass} />
          </label>
          <label className="space-y-3 text-sm text-slate-700">
            Email
            <input type="email" name="Email" required disabled={submitting} className={fieldClass} />
          </label>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <label className="space-y-3 text-sm text-slate-700">
            Phone
            <input type="tel" name="Phone" disabled={submitting} className={fieldClass} />
          </label>
          <label className="space-y-3 text-sm text-slate-700">
            Inquiry type
            <select
              name="Inquiry type"
              required
              disabled={submitting}
              value={inquiryType}
              onChange={(event) => setInquiryType(event.target.value)}
              className={fieldClass}
            >
              <option value="">Select inquiry</option>
              {inquiries.map((item) => (
                <option key={item.title} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="block text-sm font-medium text-slate-700">
          Message
          <textarea
            name="Message"
            rows={5}
            required
            disabled={submitting}
            className="mt-3 w-full rounded-[1.25rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20 disabled:opacity-60"
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10203a] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? 'Sending…' : 'Send inquiry'}
        </button>

        <p aria-live="polite" className="min-h-[1.5rem] text-sm">
          {status === 'error' ? (
            <span className="text-red-700">
              {errorMessage} Please try again, or email us at{' '}
              <a href={`mailto:${FALLBACK_EMAIL}`} className="font-medium underline">
                {FALLBACK_EMAIL}
              </a>
              .
            </span>
          ) : null}
        </p>
      </form>
    </div>
  );
}
