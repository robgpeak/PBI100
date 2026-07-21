import Link from 'next/link';

export type LegalSection = {
  heading: string;
  /** Rendered as paragraphs; strings only, no markup. */
  body?: string[];
  /** Rendered as a bulleted list beneath the paragraphs. */
  bullets?: string[];
};

/**
 * Shared shell for the three policy pages so their typography, measure, and
 * "last updated" treatment stay identical.
 */
export default function LegalPage({
  eyebrow,
  title,
  summary,
  updated,
  sections,
  contactLabel,
  contactEmail,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  sections: LegalSection[];
  contactLabel: string;
  contactEmail: string;
}) {
  return (
    <main className="min-h-screen bg-[#fbf6f0]">
      <section className="border-b border-slate-200 bg-white/60">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">{summary}</p>
          <p className="mt-6 text-sm text-slate-500">Last updated {updated}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-2xl font-semibold text-[#0f1b2d]">
                {section.heading}
              </h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-6 text-base leading-8 text-slate-700 before:absolute before:left-0 before:top-[0.95rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#b8945f]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-[#0f1b2d]">{contactLabel}</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Write to{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-[#0f1b2d] underline decoration-[#b8945f] decoration-2 underline-offset-4 transition hover:text-[#6d5840]"
            >
              {contactEmail}
            </a>
            , or use the{' '}
            <Link
              href="/contact"
              className="font-medium text-[#0f1b2d] underline decoration-[#b8945f] decoration-2 underline-offset-4 transition hover:text-[#6d5840]"
            >
              contact page
            </Link>
            . We aim to respond within ten business days.
          </p>
        </div>
      </section>
    </main>
  );
}
