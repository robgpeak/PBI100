import Link from 'next/link';

export const metadata = {
  title: 'The Gala | Palm Beach Influence 100',
  description:
    'September 2026. Black tie. One night honoring the 100 businesses and business leaders shaping Palm Beach County. Inquire for tickets.',
};

const evening = [
  {
    time: 'Arrivals',
    title: 'The Champagne Reception',
    description:
      'Step out of the car and into the room everyone in Palm Beach County will be talking about Monday morning. Champagne, a step-and-repeat, and the kind of introductions that usually take six months to arrange.',
  },
  {
    time: 'Dinner',
    title: 'A Seated Evening',
    description:
      'A plated dinner where the seating chart is the real luxury. Founders beside financiers, developers beside the institutions funding them — arranged with intent, not alphabetically.',
  },
  {
    time: 'The Ceremony',
    title: 'The 100, Revealed',
    description:
      'The Palm Beach Influence 100 for 2026, announced from the stage and honored one by one. For the businesses named, it is the moment the year gets defined.',
  },
  {
    time: 'Late',
    title: 'The After',
    description:
      'The jackets come off, the band comes on, and the conversations that matter most start after the program ends. They always do.',
  },
];

const room = [
  'Founders and CEOs of the county’s defining companies',
  'Private capital, family offices, and wealth advisors',
  'Developers and the architects of the Palm Beach skyline',
  'Hospitality, luxury, and lifestyle operators',
  'Healthcare, longevity, and professional service leaders',
  'Philanthropic and civic institutions',
];

const attend = [
  {
    label: 'Individual Seats',
    description:
      'A single seat at a shared table, placed by industry and interest. The most efficient introduction to the Palm Beach business community you will make this year.',
  },
  {
    label: 'Tables of Ten',
    description:
      'Host your leadership team, your clients, or the people you have been meaning to get in a room together. Premier placement is allocated in the order inquiries are received.',
  },
  {
    label: 'Presenting Partnerships',
    description:
      'Put your brand at the center of the evening — on the stage, in the program, and in front of every decision-maker in attendance.',
  },
];

export default function GalaPage() {
  return (
    <main className="min-h-screen bg-[#0b1424]">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,12,22,0.82), rgba(7,12,22,0.92)), url('/black-tie.jpeg')",
          backgroundSize: 'cover',
          // Anchored high in the frame so the guests' heads stay in view rather
          // than being cropped off by the top edge of the section.
          backgroundPosition: 'center 12%',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32 xl:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#d4b27b] sm:text-xs">
                Black Tie &middot; September 2026 &middot; Palm Beach County
              </p>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                One night. One hundred. One room.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                The Palm Beach Influence 100 Gala is the evening the county&rsquo;s most
                consequential businesses and the people who built them stop competing for
                attention and share a room. Floor-length gowns, black tie, a live reveal of
                the 2026 honorees, and a guest list assembled the way the list itself is:
                deliberately.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Some rooms you attend. This is one you want to be seen in.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact?inquiry=gala"
                  className="inline-flex items-center justify-center rounded-full bg-[#d4b27b] px-8 py-4 text-sm font-semibold text-[#0f1b2d] shadow-elegant transition hover:bg-[#bea568]"
                >
                  Inquire for Tickets
                </Link>
                <Link
                  href="/sponsorship"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Become a Partner
                </Link>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/45">
                Seating is limited &middot; Attendance by inquiry
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#b8945f]/40 shadow-elegant">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pbi100-black-tie-venue.jpg"
                  alt="Guests in black tie in a chandeliered ballroom beneath the Palm Beach Influence 100 stage banner"
                  width={1400}
                  height={763}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070c16]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20 xl:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b27b]">The evening</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              How the night unfolds.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {evening.map((moment) => (
              <div
                key={moment.title}
                className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#d4b27b]">
                  {moment.time}
                </p>
                <h3 className="mt-4 font-serif text-xl font-semibold text-white">
                  {moment.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1424]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d4b27b]">Who is in the room</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                The shortest distance between you and Palm Beach County&rsquo;s decision-makers.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Every honoree earned their place through what they built. That is what makes
                the guest list worth your evening — there is no way to buy your way onto the
                list, so everyone at your table is there on merit.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                One dinner. A hundred businesses that move the county. Do the math on what
                that would cost you in meetings.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {room.map((group) => (
                <div
                  key={group}
                  className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4"
                >
                  <p className="text-sm text-slate-200">{group}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070c16]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20 xl:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4b27b]">Ways to attend</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Claim your place at the table.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              The room has a fixed capacity and the honoree list fills a meaningful share of
              it. Inquiries are reviewed in the order they arrive.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {attend.map((option) => (
              <div
                key={option.label}
                className="flex flex-col rounded-[1.75rem] border border-[#b8945f]/30 bg-white/5 p-8"
              >
                <h3 className="font-serif text-2xl font-semibold text-white">{option.label}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                  {option.description}
                </p>
                <Link
                  href="/contact?inquiry=gala"
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-[#d4b27b]/50 px-6 py-3 text-sm font-semibold text-[#d4b27b] transition hover:bg-[#d4b27b] hover:text-[#0f1b2d]"
                >
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,12,22,0.9), rgba(7,12,22,0.94)), url('/black-tie.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-24">
          <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#d4b27b] to-transparent" />
          <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            September 2026. The invitation is open — briefly.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Date and venue are released to the inquiry list first, and seats are confirmed in
            the order requests come in. Put your name down now and you will hear before the
            announcement goes public.
          </p>
          <Link
            href="/contact?inquiry=gala"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#d4b27b] px-10 py-4 text-sm font-semibold text-[#0f1b2d] shadow-elegant transition hover:bg-[#bea568]"
          >
            Inquire for Tickets
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/45">
            Black tie &middot; Palm Beach County
          </p>
        </div>
      </section>
    </main>
  );
}
