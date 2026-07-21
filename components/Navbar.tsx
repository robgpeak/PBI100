'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/the-list', label: 'The List' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/nominate', label: 'Nominate' },
  { href: '/sponsorship', label: 'Sponsorship' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8 xl:px-12">
        <Link href="/" className="text-slate-900">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-[#0f1b2d] md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#0f1b2d]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 pb-5 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f1b2d]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
