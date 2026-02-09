import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-primary selection:text-black">
      {/* Condensed Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <div className="glass px-6 py-3 rounded-2xl flex justify-between items-center bg-black/40 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="MacroLens Logo" width={32} height={32} className="rounded-lg shadow-lg shadow-primary/20" />
            <span className="text-xl font-bold tracking-tight">MacroLens</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#waitlist" className="h-9 px-4 rounded-xl bg-primary text-black text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center">
              Join
            </a>
          </div>
        </div>
      </nav>

      <Hero />

      <div id="features" className="scroll-mt-24">
        <Features />
      </div>

      <Footer />
    </main>
  );
}
