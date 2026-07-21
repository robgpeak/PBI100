'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Show the invitation once per browsing session rather than on every route
// change, so navigating the site doesn't re-trigger it.
const SEEN_KEY = 'pbi100-gala-invitation-seen';
const REVEAL_DELAY_MS = 3000;

export default function GalaModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Pointless to invite someone to the gala page they are already reading.
    if (pathname?.startsWith('/gala')) return;
    if (sessionStorage.getItem(SEEN_KEY)) return;

    const timer = setTimeout(() => {
      setMounted(true);
      // Paint the closed state first so the entrance transition has somewhere
      // to travel from.
      requestAnimationFrame(() => setOpen(true));
    }, REVEAL_DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    sessionStorage.setItem(SEEN_KEY, '1');
    setTimeout(() => setMounted(false), 300);
  }, []);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gala-modal-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 transition-opacity duration-300 sm:p-8 ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Scrim: dims the site behind the invitation. */}
      <button
        type="button"
        aria-label="Close invitation"
        onClick={close}
        className="absolute inset-0 h-full w-full cursor-default bg-[#070c16]/80 backdrop-blur-[2px]"
      />

      <div
        className={`relative flex max-h-[80vh] w-[80vw] max-w-lg flex-col overflow-hidden rounded-[1.75rem] border border-[#b8945f]/40 bg-[#0b1424] shadow-elegant transition-all duration-500 sm:max-h-[86vh] sm:w-full sm:rounded-[2rem] ${
          open ? 'translate-y-0 scale-100' : 'translate-y-4 scale-[0.97]'
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-lg leading-none text-white/60 transition hover:border-[#d4b27b]/60 hover:text-[#d4b27b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b27b]/50"
        >
          &times;
        </button>

        {/* Gold rule reading as the top edge of an engraved invitation. */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#d4b27b] to-transparent" />

        {/* Shallow banner on mobile so the copy and CTA still clear 80vh.
            Anchored to the top of the frame — the guests' faces sit high in the
            photograph, so any lower focal point crops through their heads. */}
        <div className="relative h-[5.5rem] shrink-0 overflow-hidden min-[400px]:h-28 sm:h-44">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/black-tie.jpeg"
            alt="Guests in black tie at a Palm Beach Influence 100 evening"
            className="h-full w-full object-cover object-top"
          />
          {/* Fade the photograph into the panel rather than ending it on a hard edge. */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1424]/45 to-[#0b1424]" />
        </div>

        <div className="overflow-y-auto px-7 pb-9 pt-1 text-center sm:px-12 sm:pb-12">
          <p className="text-[0.6rem] uppercase tracking-[0.4em] text-[#d4b27b] sm:text-xs">
            Black Tie &middot; September 2026
          </p>

          <h2
            id="gala-modal-title"
            className="mt-4 font-serif text-2xl font-semibold leading-tight text-white sm:mt-5 sm:text-4xl"
          >
            The Palm Beach Influence 100 Gala
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3 sm:mt-6">
            <span className="h-px w-10 bg-[#b8945f]/50" />
            <span className="text-[0.6rem] uppercase tracking-[0.35em] text-white/50">
              An Evening of Recognition
            </span>
            <span className="h-px w-10 bg-[#b8945f]/50" />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
            A black-tie evening honoring the most influential businesses and business
            leaders in Palm Beach County for 2026 — recognized together, in one room.
          </p>

          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-white/45 sm:mt-4 sm:text-sm sm:tracking-[0.3em]">
            Seating is limited &middot; By inquiry
          </p>

          <Link
            href="/gala"
            onClick={close}
            className="mt-6 inline-flex sm:mt-8 w-full items-center justify-center rounded-full bg-[#d4b27b] px-7 py-3.5 text-sm font-semibold text-[#0f1b2d] shadow-elegant transition hover:bg-[#bea568] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b27b]/50 sm:w-auto"
          >
            Inquire for Tickets
          </Link>

          <button
            type="button"
            onClick={close}
            className="mt-4 block w-full text-xs uppercase sm:mt-5 tracking-[0.25em] text-white/40 transition hover:text-white/70"
          >
            Continue to the site
          </button>
        </div>
      </div>
    </div>
  );
}
