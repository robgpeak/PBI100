export const metadata = {
  title: 'Contact | Palm Beach Influence 100',
  description:
    'Contact Palm Beach Influence 100 for general inquiries, nominations, podcast suggestions, sponsorship, press, and partnerships.',
};

const inquiries = [
  { title: 'General inquiry', description: 'Questions about the platform, editorial focus, or updates.' },
  { title: 'Nomination question', description: 'Assistance with the nomination process and eligibility.' },
  { title: 'Podcast guest suggestion', description: 'Recommend a guest for The Palm Beach Influence Podcast.' },
  { title: 'Sponsorship inquiry', description: 'Discuss sponsorship, events, or partnership opportunities.' },
  { title: 'Press / media', description: 'Media inquiries and content partnership requests.' },
  { title: 'Partnership', description: 'Explore strategic platform and event collaboration.' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f0]">
      <section
        className="relative overflow-hidden border-b border-slate-200 bg-white/50 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/contact-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '34rem',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 xl:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#6d5840]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0f1b2d] sm:text-5xl">
            Connect with Palm Beach Influence 100.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Reach out for general inquiries, nominations, podcast ideas, sponsorships, press, or partnership discussions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-elegant">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Contact form</h2>
              <form className="mt-8 space-y-4">
                <div className="grid gap-6 lg:grid-cols-2">
                  <label className="space-y-3 text-sm text-slate-700">
                    Name
                    <input type="text" className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20" />
                  </label>
                  <label className="space-y-3 text-sm text-slate-700">
                    Email
                    <input type="email" className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20" />
                  </label>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <label className="space-y-3 text-sm text-slate-700">
                    Phone
                    <input type="tel" className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20" />
                  </label>
                  <label className="space-y-3 text-sm text-slate-700">
                    Inquiry type
                    <select className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20">
                      <option value="">Select inquiry</option>
                      {inquiries.map((item) => (
                        <option key={item.title} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block text-sm font-medium text-slate-700">
                  Message
                  <textarea rows={5} className="mt-3 w-full rounded-[1.25rem] border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-[#d4b27b] focus:ring-2 focus:ring-[#d4b27b]/20"></textarea>
                </label>
                <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-[#0f1b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10203a]">
                  Send inquiry
                </button>
              </form>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10">
              <h2 className="text-2xl font-semibold text-[#0f1b2d]">Inquiry options</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                {inquiries.map((item) => (
                  <div key={item.title}>
                    <p className="font-semibold text-[#0f1b2d]">{item.title}</p>
                    <p className="mt-1 text-sm leading-6">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0f1b2d]">Next steps</h3>
              <p className="mt-4 leading-7 text-slate-700">Our team reviews inquiries promptly and will respond with additional guidance on nominations, podcast participation, or sponsorship opportunities.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
