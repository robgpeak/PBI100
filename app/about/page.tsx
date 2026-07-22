import Link from 'next/link';

export const metadata = {
  title: 'About | Palm Beach Influence 100',
  description:
    'Learn how Palm Beach Influence 100 recognizes the businesses and institutions shaping Palm Beach County through research, editorial review, and curated recognition.',
};

const sections = [
  {
    title: 'Why influence matters',
    content:
      'Influence in Palm Beach County is defined by economic scale, network reach, cultural resonance, and community impact. This platform highlights businesses and institutions that move capital, shape markets, and create meaningful local change.',
  },
  {
    title: 'Why businesses, not just individuals',
    content:
      'The platform focuses on organizations, firms, and institutions because teams, systems, and corporate platforms are the engines that sustain long-term influence in Palm Beach County.',
  },
  {
    title: 'How the platform works',
    content:
      'Each nomination and candidate is reviewed through editorial research, market signals, and the platform’s curated criteria. The process is designed to surface businesses that are both influential and relevant to Palm Beach County.',
  },
  {
    title: 'Editorial standards',
    content:
      'Inclusion is based on research and editorial assessment. Sponsorship or advertising does not guarantee selection, and nominations are evaluated on merit, relevance, and impact.',
  },
  {
    title: 'Future plans',
    content:
      'Palm Beach Influence 100 will expand to an annual recognition list, private dinners, podcasts, industry salons, downloadable research reports, and invitation-only events.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f0]">
      <section
        className="relative overflow-hidden border-b border-slate-200 bg-white/50 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/about-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '34rem',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl">
            Recognizing the organizations and institutions shaping Palm Beach.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Palm Beach Influence 100 exists to identify, recognize, and tell the stories of businesses and institutions that meaningfully shape the Palm Beach economy, culture, and community.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Selection</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">Editorial review, nominations, and research determine which organizations qualify for recognition.</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Integrity</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">Inclusion is not for sale. Sponsorship and partnerships do not influence recognition.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
                <h2 className="text-2xl font-semibold text-[#0f1b2d]">{section.title}</h2>
                <p className="mt-4 leading-8 text-slate-700">{section.content}</p>
              </article>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-[#0f1b2d] p-10 text-white shadow-elegant">
              <h2 className="text-2xl font-semibold">Editorial clarity</h2>
              <p className="mt-4 leading-8 text-slate-200">
                The platform is curated, research-driven, and designed to highlight credible, business-focused influence across all of Palm Beach County.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
              <h3 className="text-xl font-semibold text-[#0f1b2d]">Core principles</h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Influence through business and institutional impact</li>
                <li>Research-based editorial review</li>
                <li>Transparency in nomination process</li>
                <li>No pay-to-play recognition</li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 px-10 py-12 text-white shadow-elegant">
          <h2 className="text-3xl font-semibold">Inclusion is earned, not purchased.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Palm Beach Influence 100 is committed to recognizing organizations that demonstrate real influence in the market. Sponsorship or advertising does not guarantee inclusion, and nominations are reviewed through editorial standards and market relevance.
          </p>
          <Link href="/nominate" className="mt-8 inline-flex items-center rounded-full bg-[#d4b27b] px-7 py-3 text-sm font-semibold text-[#0f1b2d] transition hover:bg-[#bea568]">
            Nominate a Business
          </Link>
        </div>
      </section>
    </main>
  );
}
