import NominationForm from '../../components/NominationForm';

export const metadata = {
  title: 'Nominate a Business | Palm Beach Influence 100',
  description:
    'Submit a nomination for an influential Palm Beach business, firm, or institution for editorial consideration by Palm Beach Influence 100.',
};

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

export default function NominatePage() {
  return (
    <main className="min-h-screen bg-[#fbf6f0]">
      <section
        className="relative overflow-hidden border-b border-slate-200 bg-white/50 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/nominate-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '34rem',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Nomination</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl">
            Nominate an influential Palm Beach business.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            We review businesses, firms, institutions, and platforms that meaningfully shape Palm Beach commerce, capital, culture, philanthropy, lifestyle, or community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Nomination details</h2>
              <p className="mt-4 leading-8 text-slate-700">Please provide as much detail as possible to help the editorial team assess the nomination.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-sm">
              <NominationForm categories={categories} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-[#0f1b2d] p-10 text-white shadow-elegant">
              <h2 className="text-2xl font-semibold">How we review nominations</h2>
              <p className="mt-4 leading-7 text-slate-200">Nominations are evaluated through editorial review, market relevance, and business influence. The process is designed to prioritize quality and credibility.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
              <h3 className="text-xl font-semibold text-[#0f1b2d]">Need support?</h3>
              <p className="mt-4 text-slate-700 leading-7">Reach out through the contact page if you have questions about the nomination process, editorial focus, or platform standards.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
