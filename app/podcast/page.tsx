import Link from 'next/link';

export const metadata = {
  title: 'Podcast | The Palm Beach Influence Podcast',
  description:
    'Discover featured episodes from The Palm Beach Influence Podcast, where business leaders and institution representatives discuss influence, growth, and Palm Beach strategy.',
};

const episodes = [
  {
    title: 'Building a Palm Beach Legacy Brand',
    guest: 'Ava Lang',
    role: 'Founder',
    organization: 'Coastal Advisory Group',
    category: 'Luxury, Hospitality & Lifestyle',
    description:
      'A look at brand strategy, hospitality experiences, and the modern Palm Beach consumer.',
    date: 'June 2026',
  },
  {
    title: 'The Capital Behind Local Growth',
    guest: 'Marcus Hale',
    role: 'Managing Partner',
    organization: 'Harbor Capital Partners',
    category: 'Capital & Wealth',
    description: 'Private capital strategies and the financing trends influencing local expansion.',
    date: 'May 2026',
  },
  {
    title: 'Luxury, Hospitality, and the New Palm Beach Consumer',
    guest: 'Elena Brooks',
    role: 'CEO',
    organization: 'Palm & Pine Hospitality',
    category: 'Luxury, Hospitality & Lifestyle',
    description: 'Exploring hospitality design, guest experience, and cultural influence in the market.',
    date: 'April 2026',
  },
];

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f0]">
      <section
        className="relative overflow-hidden border-b border-slate-200 bg-white/50 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/podcast-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '34rem',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Podcast</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl">
            The Palm Beach Influence Podcast.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Conversations with selected founders, executives, and operators behind the businesses shaping Palm Beach.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Featured episode</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Featured</p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#0f1b2d]">Building a Palm Beach Legacy Brand</h3>
                  <p className="mt-4 leading-7 text-slate-700">A conversation about brand strategy, hospitality, and the future of premium Palm Beach experiences.</p>
                  <div className="mt-6 space-y-2 text-sm text-slate-600">
                    <p>Guest: Ava Lang, Founder, Coastal Advisory Group</p>
                    <p>Category: Luxury, Hospitality & Lifestyle</p>
                    <p>Date: June 2026</p>
                  </div>
                  <button type="button" className="mt-8 inline-flex items-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10203a]">
                    Listen Now
                  </button>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#d4b27b]">Podcast focus</p>
                  <p className="mt-4 leading-7 text-slate-200">The podcast highlights interviews with leaders who shape Palm Beach business, capital, culture, and community through their organizations.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {episodes.map((episode) => (
                <article key={episode.title} className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">{episode.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-[#0f1b2d]">{episode.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500">{episode.date}</p>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">{episode.description}</p>
                  <p className="mt-4 text-sm text-slate-500">
                    Guest: {episode.guest}, {episode.role} at {episode.organization}
                  </p>
                  <button type="button" className="mt-6 inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:bg-slate-50">
                    Listen / Watch
                  </button>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Suggest a guest</h2>
              <p className="mt-4 leading-7 text-slate-700">Recommend a leader, executive, founder, or representative for future podcast conversations.</p>
              <form className="mt-8 space-y-4">
                <label className="block text-sm font-medium text-slate-700">
                  Your name
                  <input type="text" className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <input type="email" className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Suggested guest name
                  <input type="text" className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Organization
                  <input type="text" className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Why this guest matters
                  <textarea rows={4} className="mt-3 w-full rounded-[1.25rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20"></textarea>
                </label>
                <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10203a]">
                  Submit Suggestion
                </button>
              </form>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#0f1b2d] p-10 text-white">
              <h3 className="text-xl font-semibold">Sponsor the podcast</h3>
              <p className="mt-4 leading-7 text-slate-200">Align your brand with thoughtful conversations that reach the Palm Beach business community.</p>
              <Link href="/sponsorship" className="mt-6 inline-flex items-center rounded-full bg-[#d4b27b] px-6 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:bg-[#bea568]">
                Request Sponsorship Information
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
