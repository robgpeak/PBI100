import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Palm Beach Influence 100 | Businesses Shaping Palm Beach',
  description:
    'Palm Beach Influence 100 recognizes the businesses, firms, institutions, and platforms shaping commerce, capital, culture, philanthropy, lifestyle, and community across all of Palm Beach County.',
};

import PageShell from '../components/PageShell';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
