'use client';

import { useState, type FormEvent } from 'react';
import { SUBSCRIBE_ACCESS_KEY, submitToWeb3Forms } from '../lib/web3forms';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Sits in the dark "Updates" card on the homepage, so its styling is tuned for
 * a slate-950 background rather than the light page shell.
 */
export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('Email') || '');

    const result = await submitToWeb3Forms({
      formData,
      accessKey: SUBSCRIBE_ACCESS_KEY,
      subject: `PBI 100 subscriber — ${email}`,
      replyTo: email,
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
        <div className="h-px w-16 bg-gradient-to-r from-[#d4b27b] to-transparent" />
        <p className="mt-6 text-lg font-semibold text-white">You&rsquo;re on the list.</p>
        <p className="mt-3 leading-7 text-slate-300">
          We&rsquo;ll be in touch with nomination deadlines, podcast releases, the annual
          recognition, and private events. Every email includes an unsubscribe link.
        </p>
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

      <label className="block text-sm font-medium text-slate-200">
        Email address
        <input
          type="email"
          name="Email"
          required
          disabled={submitting}
          placeholder="you@example.com"
          className="mt-3 w-full rounded-3xl border border-white/15 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20 disabled:opacity-60"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#d4b27b] px-6 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:bg-[#bea568] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? 'Joining…' : 'Join the List'}
      </button>

      <p aria-live="polite" className="min-h-[1.25rem] text-xs leading-5">
        {status === 'error' ? (
          <span className="text-red-300">
            {errorMessage} Please try again, or email{' '}
            <a href="mailto:subscribe@pbi100.com" className="font-medium underline">
              subscribe@pbi100.com
            </a>
            .
          </span>
        ) : (
          <span className="text-slate-400">
            Updates only. Unsubscribe anytime.
          </span>
        )}
      </p>
    </form>
  );
}
