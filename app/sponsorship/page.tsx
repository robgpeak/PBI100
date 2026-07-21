import SponsorshipForm from '../../components/SponsorshipForm';

export const metadata = {
  title: 'Sponsorship | Palm Beach Influence 100',
  description:
    'Explore sponsorship and partnership opportunities with Palm Beach Influence 100 across podcast, events, reports, and platform content.',
};

const opportunities = [
  'Website sponsorship',
  'Podcast sponsorship',
  'Category sponsorship',
  'Private dinner sponsorship',
  'Annual report sponsorship',
  'Event partnership',
  'Newsletter sponsorship',
];

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f0]">
      <section
        className="relative overflow-hidden border-b border-slate-200 bg-white/50 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/sponsorship.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '34rem',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Sponsorship</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl">
            Sponsor the platform that highlights Palm Beach influence.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Align your brand with premium content, podcast conversations, and recognition experiences for the Palm Beach business community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Opportunities</h2>
              <p className="mt-4 leading-7 text-slate-700">Palm Beach Influence 100 offers refined sponsorships for brands that seek access to decision-makers, investors, and business leaders.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {opportunities.map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
              <h3 className="text-xl font-semibold text-[#0f1b2d]">Partner inquiries</h3>
              <p className="mt-4 leading-7 text-slate-700">Request sponsorship information and discuss bespoke partnerships for events, content, and branded experiences.</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Sponsorship inquiry</h2>
              <SponsorshipForm opportunities={opportunities} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
