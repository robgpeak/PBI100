import Link from 'next/link';
import Logo from './Logo';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/the-list', label: 'The List' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/nominate', label: 'Nominate' },
  { href: '/sponsorship', label: 'Sponsorship' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/editorial-standards', label: 'Editorial Standards' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-2xl text-sm leading-7 text-slate-700">
              A curated editorial platform recognizing the businesses and institutions shaping commerce, capital, culture, philanthropy, lifestyle, and community in Palm Beach.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6d5840]">Explore</p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block hover:text-[#0f1b2d]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6d5840]">Legal</p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block hover:text-[#0f1b2d]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center">
          <p>© 2026 Palm Beach Influence 100. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span className="text-slate-400">Follow</span>
            <span className="text-slate-700">LinkedIn</span>
            <span className="text-slate-700">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
