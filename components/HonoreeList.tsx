'use client';

import { useMemo, useState } from 'react';
import { categories, type Category, type Honoree } from '../app/the-list/types';

type Filter = Category | 'All';

export default function HonoreeList({ honorees }: { honorees: Honoree[] }) {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([['All', honorees.length]]);
    for (const category of categories) {
      map.set(category, honorees.filter((h) => h.category === category).length);
    }
    return map;
  }, [honorees]);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return honorees.filter((honoree) => {
      const matchesCategory = filter === 'All' || honoree.category === filter;
      if (!matchesCategory) return false;
      if (!term) return true;
      return (
        honoree.name.toLowerCase().includes(term) ||
        honoree.city.toLowerCase().includes(term) ||
        honoree.focus.toLowerCase().includes(term) ||
        honoree.description.toLowerCase().includes(term)
      );
    });
  }, [honorees, filter, query]);

  const filters: Filter[] = ['All', ...categories];

  return (
    <div>
      <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-elegant sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-navy">Browse the list</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Filter by category or search by name, city, or sector.
            </p>
          </div>
          <label className="w-full sm:w-72">
            <span className="sr-only">Search honorees</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search honorees…"
              className="w-full rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-800 outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold-soft"
            />
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition ${
                  active
                    ? 'border-navy bg-navy text-white shadow-sm'
                    : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-gold hover:bg-white'
                }`}
              >
                {item}
                <span className={active ? 'text-gold-soft' : 'text-slate-400'}>{counts.get(item) ?? 0}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#6d5840]">
        Showing {visible.length} of {honorees.length}
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {visible.map((honoree) => (
          <article
            key={honoree.rank}
            className="flex flex-col rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm transition hover:border-gold-soft hover:shadow-elegant"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#6d5840]">{honoree.category}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-navy">{honoree.name}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {honoree.city}
                  {honoree.founded ? ` · Est. ${honoree.founded}` : ''}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-serif text-sm text-navy">
                {String(honoree.rank).padStart(2, '0')}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-700">{honoree.description}</p>

            <div className="mt-5 flex-1 rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-navy">Why it matters</p>
              <p className="mt-2">{honoree.why}</p>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 text-sm">
              <span className="text-slate-500">{honoree.focus}</span>
              <a
                href={honoree.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6d5840] underline underline-offset-4 transition hover:text-navy"
              >
                Source
              </a>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-white/60 p-12 text-center">
          <p className="text-slate-700">No honorees match that search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setFilter('All');
            }}
            className="mt-4 rounded-full border border-navy px-5 py-2.5 text-sm text-navy transition hover:bg-navy hover:text-white"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
