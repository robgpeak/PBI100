'use client';

import { useState, type FormEvent } from 'react';
import { NOMINATIONS_ACCESS_KEY, submitToWeb3Forms } from '../lib/web3forms';

const FALLBACK_EMAIL = 'nominations@pbi100.com';

const inputClass =
  'w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20 disabled:opacity-60';
const textareaClass =
  'w-full rounded-[1.25rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20 disabled:opacity-60';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NominationForm({ categories }: { categories: string[] }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const business = String(formData.get('Business being nominated') || 'a business');

    const result = await submitToWeb3Forms({
      formData,
      accessKey: NOMINATIONS_ACCESS_KEY,
      subject: `PBI 100 nomination — ${business}`,
      replyTo: String(formData.get('Nominator email') || ''),
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
      // The nominate page already wraps this component in a card, so the
      // success state only supplies its own contents.
      <div>
        <div className="h-px w-16 bg-gradient-to-r from-[#b8945f] to-transparent" />
        <h2 className="mt-6 font-serif text-2xl font-semibold text-[#0f1b2d]">
          Nomination received.
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          Thank you for putting this business forward. Nominations are reviewed editorially,
          and inclusion is never guaranteed — but every submission is read. If we need more
          detail, we will be in touch at the address you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:border-slate-400 hover:bg-slate-50"
        >
          Nominate another business
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

      <div className="grid gap-6 lg:grid-cols-2">
        <label className="space-y-3 text-sm text-slate-700">
          Nominator name
          <input type="text" name="Nominator name" required disabled={submitting} className={inputClass} />
        </label>
        <label className="space-y-3 text-sm text-slate-700">
          Nominator email
          <input type="email" name="Nominator email" required disabled={submitting} className={inputClass} />
        </label>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <label className="space-y-3 text-sm text-slate-700">
          Nominator phone
          <input type="tel" name="Nominator phone" disabled={submitting} className={inputClass} />
        </label>
        <label className="space-y-3 text-sm text-slate-700">
          Business being nominated
          <input
            type="text"
            name="Business being nominated"
            required
            disabled={submitting}
            className={inputClass}
          />
        </label>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <label className="space-y-3 text-sm text-slate-700">
          Business website
          <input type="url" name="Business website" disabled={submitting} className={inputClass} />
        </label>
        <label className="space-y-3 text-sm text-slate-700">
          Business category
          <select name="Business category" required disabled={submitting} className={inputClass}>
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-3 text-sm text-slate-700">
        Primary contact at business, if known
        <input type="text" name="Primary contact at business" disabled={submitting} className={inputClass} />
      </label>
      <label className="space-y-3 text-sm text-slate-700">
        Why should this business be considered?
        <textarea
          name="Why should this business be considered"
          rows={4}
          required
          disabled={submitting}
          className={textareaClass}
        />
      </label>
      <label className="space-y-3 text-sm text-slate-700">
        What makes this business influential?
        <textarea
          name="What makes this business influential"
          rows={4}
          disabled={submitting}
          className={textareaClass}
        />
      </label>
      <label className="space-y-3 text-sm text-slate-700">
        Notable achievements, community impact, growth, or recognition
        <textarea
          name="Notable achievements"
          rows={4}
          disabled={submitting}
          className={textareaClass}
        />
      </label>
      <label className="space-y-3 text-sm text-slate-700">
        Relevant links
        <input
          type="url"
          name="Relevant links"
          placeholder="Website or news links"
          disabled={submitting}
          className={inputClass}
        />
      </label>
      <label className="space-y-3 text-sm text-slate-700">
        Is the nominator affiliated with the business?
        <select name="Nominator affiliated with business" disabled={submitting} className={inputClass}>
          <option value="">Select option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>

      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p className="font-semibold text-[#0f1b2d]">Nomination disclaimer</p>
        <p className="mt-2 leading-7">
          Nominations are reviewed for editorial consideration. Nomination does not guarantee
          inclusion. Sponsorship or advertising is not required for consideration and does not
          guarantee selection.
        </p>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10203a] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? 'Submitting…' : 'Submit Nomination'}
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
  );
}
