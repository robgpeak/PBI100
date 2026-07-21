'use client';

import { useState, type FormEvent } from 'react';
import { INQUIRY_ACCESS_KEY, submitToWeb3Forms } from '../lib/web3forms';

const FALLBACK_EMAIL = 'inquiry@pbi100.com';

const fieldClass =
  'mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20 disabled:opacity-60';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function SponsorshipForm({ opportunities }: { opportunities: string[] }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const company = String(formData.get('Company') || 'inquiry');
    const interest = String(formData.get('Sponsorship interest') || '');

    const result = await submitToWeb3Forms({
      formData,
      accessKey: INQUIRY_ACCESS_KEY,
      subject: `PBI 100 sponsorship — ${company}${interest ? ` (${interest})` : ''}`,
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
      <div className="mt-8">
        <div className="h-px w-16 bg-gradient-to-r from-[#b8945f] to-transparent" />
        <p className="mt-6 font-serif text-xl font-semibold text-[#0f1b2d]">
          Request received.
        </p>
        <p className="mt-3 leading-7 text-slate-700">
          Thank you for your interest in partnering with Palm Beach Influence 100. We will
          follow up with details on the opportunities that fit what you described.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:border-slate-400 hover:bg-slate-50"
        >
          Send another request
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      {/* Honeypot: hidden from people, irresistible to bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="block text-sm font-medium text-slate-700">
        Name
        <input type="text" name="Name" required disabled={submitting} className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Company
        <input type="text" name="Company" required disabled={submitting} className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Email
        <input type="email" name="Email" required disabled={submitting} className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Phone
        <input type="tel" name="Phone" disabled={submitting} className={fieldClass} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Sponsorship interest
        <select name="Sponsorship interest" required disabled={submitting} className={fieldClass}>
          <option value="">Select an opportunity</option>
          {opportunities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Budget range
        <select name="Budget range" disabled={submitting} className={fieldClass}>
          <option value="">Select range</option>
          <option>$25k–$50k</option>
          <option>$50k–$100k</option>
          <option>$100k+</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Message
        <textarea
          name="Message"
          rows={4}
          disabled={submitting}
          className="mt-3 w-full rounded-[1.25rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20 disabled:opacity-60"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10203a] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? 'Sending…' : 'Request Sponsorship Information'}
      </button>

      <p aria-live="polite" className="min-h-[1.25rem] text-sm">
        {status === 'error' ? (
          <span className="text-red-700">
            {errorMessage} Please try again, or email{' '}
            <a href={`mailto:${FALLBACK_EMAIL}`} className="font-medium underline">
              {FALLBACK_EMAIL}
            </a>
            .
          </span>
        ) : null}
      </p>
    </form>
  );
}
