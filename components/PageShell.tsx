import Footer from './Footer';
import Navbar from './Navbar';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fbf6f0] text-[#0f1b2d]">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
