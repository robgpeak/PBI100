import Link from 'next/link';

import PodcastGuestForm from '../../components/PodcastGuestForm';

export const metadata = {
  title: 'Podcast | The Palm Beach Influence Podcast',
  description:
    'The Palm Beach Influence Podcast: conversations with the business leaders and institution representatives shaping influence, growth, and strategy across Palm Beach County. First season in production.',
};


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
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Episodes</h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Coming soon</p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#0f1b2d]">
                    The first season is in production.
                  </h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    Episodes will be released here as they publish. Subscribe for updates and
                    you will hear about the first conversation before it goes out.
                  </p>
                  <Link
                    href="/#subscribe"
                    className="mt-8 inline-flex items-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10203a]"
                  >
                    Get Notified
                  </Link>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#d4b27b]">Podcast focus</p>
                  <p className="mt-4 leading-7 text-slate-200">The podcast highlights interviews with leaders who shape Palm Beach County business, capital, culture, and community through their organizations.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Suggest a guest</h2>
              <p className="mt-4 leading-7 text-slate-700">Recommend a leader, executive, founder, or representative for future podcast conversations.</p>
              <PodcastGuestForm />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#0f1b2d] p-10 text-white">
              <h3 className="text-xl font-semibold">Sponsor the podcast</h3>
              <p className="mt-4 leading-7 text-slate-200">Align your brand with thoughtful conversations that reach the Palm Beach County business community.</p>
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
