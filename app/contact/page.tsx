import ContactForm from '../../components/ContactForm';
import { inquiries } from './inquiries';

export const metadata = {
  title: 'Contact | Palm Beach Influence 100',
  description:
    'Contact Palm Beach Influence 100 for gala tickets, general inquiries, nominations, podcast suggestions, sponsorship, press, and partnerships.',
};

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
            <ContactForm />
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
