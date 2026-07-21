export const metadata = {
  title: 'The List | Palm Beach Influence 100',
  description:
    'Explore the Palm Beach Influence 100 honorees and discover the organizations making the greatest influence across commerce, culture, capital, and community.',
};

import HonoreeList from '../../components/HonoreeList';
import { honorees } from './honorees';

const criteria = [
  'Economic influence',
  'Network influence',
  'Brand influence',
  'Community influence',
  'Palm Beach relevance',
  'Innovation or category leadership',
];

export default function TheListPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f0]">
      <section
        className="relative overflow-hidden border-b border-slate-200 bg-white/50 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/the-list-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '34rem',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">The List</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl">
            Palm Beach Influence 100 honorees.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            One hundred businesses, institutions, and platforms recognized for their influence across commerce, capital, culture, and community in Palm Beach County.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            Listed alphabetically within each category. Numbering is for reference only and does not indicate rank.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 xl:px-12">
        <div className="grid gap-10">
          <aside className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-[#0f1b2d] p-10 text-white shadow-elegant">
              <h2 className="text-2xl font-semibold">Selection criteria</h2>
              <p className="mt-4 leading-7 text-slate-200">Palm Beach Influence 100 evaluates organizations based on measurable influence and local relevance.</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                {criteria.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
              <h3 className="text-xl font-semibold text-[#0f1b2d]">Why this matters</h3>
              <p className="mt-4 leading-7 text-slate-700">The list provides a thoughtful view of Palm Beach influence while leaving room for growth, editorial coverage, and future events.</p>
            </div>
          </aside>
          <HonoreeList honorees={honorees} />
        </div>
      </section>
    </main>
  );
}
