import Link from 'next/link';
import NewsletterForm from '../components/NewsletterForm';

const categoryPillars = [
  'Commerce',
  'Capital',
  'Culture',
  'Community',
];

const categories = [
  'Capital & Wealth',
  'Real Estate & Development',
  'Luxury, Hospitality & Lifestyle',
  'Professional Power Centers',
  'Healthcare & Longevity',
  'Media, Events & Influence',
  'Philanthropy & Civic Institutions',
  'Emerging Growth Businesses',
];

const episodes = [
  {
    title: 'Building a Palm Beach Legacy Brand',
    guest: 'Ava Lang',
    role: 'Founder',
    organization: 'Coastal Advisory Group',
    category: 'Luxury, Hospitality & Lifestyle',
    description:
      'A conversation about legacy brand building, curated hospitality, and Palm Beach’s modern luxury economy.',
    date: 'June 2026',
  },
  {
    title: 'The Capital Behind Local Growth',
    guest: 'Marcus Hale',
    role: 'Managing Partner',
    organization: 'Harbor Capital Partners',
    category: 'Capital & Wealth',
    description:
      'Insights into private capital, family office strategies, and the next wave of Palm Beach investment.',
    date: 'May 2026',
  },
  {
    title: 'Hospitality, Culture, and the New Palm Beach Consumer',
    guest: 'Elena Brooks',
    role: 'CEO',
    organization: 'Palm & Pine Hospitality',
    category: 'Luxury, Hospitality & Lifestyle',
    description:
      'Exploring the intersection of hospitality, culture, and differentiated guest experiences.',
    date: 'April 2026',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header
        className="relative overflow-hidden border-b border-slate-200/80 bg-white/50 backdrop-blur-sm"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/palm-beach-skyline.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '40rem',
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#6d5840]">Palm Beach Influence 100</p>
            <h1 className="text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl lg:text-6xl">
              The businesses shaping Palm Beach influence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Palm Beach Influence 100 recognizes the companies, institutions, and business platforms driving commerce, capital, culture, philanthropy, and community across ALL of Palm Beach County.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/nominate" className="inline-flex items-center justify-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white shadow-elegant transition hover:bg-[#10203a]">
                Nominate a Business
              </Link>
              <Link href="/podcast" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:border-slate-400 hover:bg-slate-50">
                Explore the Podcast
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-elegant backdrop-blur-sm sm:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6d5840]">Platform pillars</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {categoryPillars.map((pillar) => (
                <div key={pillar} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <p className="text-sm text-slate-700">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-16">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
              <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">About the platform</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f1b2d]">A curated recognition platform for Palm Beach influence.</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Palm Beach Influence 100 is a curated recognition and media platform focused on businesses and institutions that meaningfully influence Palm Beach County through commerce, capital, culture, philanthropy, and community.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {categories.slice(0, 4).map((category) => (
                <div key={category} className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#0f1b2d]">{category}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">A curated lens on Palm Beach’s most significant commercial and institutional forces.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
              <h2 className="text-3xl font-semibold text-[#0f1b2d]">Categories preview</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Featured categories reflect the range of institutions shaping the Palm Beach ecosystem.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <div key={category} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-sm font-medium text-[#0f1b2d]">{category}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#0f1b2d] px-8 py-10 text-white shadow-elegant">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b27b]">Podcast feature</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">The Palm Beach Influence Podcast</h2>
              <p className="mt-4 text-base leading-8 text-slate-200">
                Conversations with the founders, operators, executives, and representatives behind the businesses shaping Palm Beach.
              </p>
              <div className="mt-8 space-y-4">
                {episodes.map((episode) => (
                  <div key={episode.title} className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
                    <p className="text-sm uppercase tracking-[0.35em] text-[#d4b27b]">{episode.category}</p>
                    <h3 className="mt-3 text-xl font-semibold">{episode.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{episode.description}</p>
                    <p className="mt-3 text-sm text-slate-400">{episode.guest}, {episode.role} at {episode.organization}</p>
                  </div>
                ))}
              </div>
              <Link href="/podcast" className="mt-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Visit the Podcast
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 xl:px-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b27b]">Nomination</p>
              <h2 className="mt-4 text-3xl font-semibold">Nominate an influential business</h2>
              <p className="mt-4 leading-7 text-slate-200">Tell us about a company or institution that belongs on Palm Beach Influence 100. Nominations are reviewed with editorial care; inclusion is not guaranteed.</p>
              <Link href="/nominate" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:bg-slate-100">
                Submit a Nomination
              </Link>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b27b]">Sponsorship</p>
              <h2 className="mt-4 text-3xl font-semibold">Partnerships for premium reach</h2>
              <p className="mt-4 leading-7 text-slate-200">Engage with decision-makers through podcast sponsorships, reports, events, and platform partnerships aligned with the Palm Beach business community.</p>
              <Link href="/sponsorship" className="mt-8 inline-flex items-center rounded-full bg-transparent border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Request Sponsorship Info
              </Link>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4b27b]">Updates</p>
              <h2 className="mt-4 text-3xl font-semibold">Subscribe for announcements</h2>
              <p className="mt-4 leading-7 text-slate-200">Receive email updates on nomination deadlines, podcast releases, annual recognition, and private events.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
