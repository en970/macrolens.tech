import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";
import { testimonialsData } from "@/lib/data";
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

      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/2 opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold">Trusted by <span className="text-primary italic">Early Adopters</span></h2>
          <p className="text-muted-foreground mt-4">Real feedback from our private beta users.</p>
        </div>
        <AnimatedTestimonials testimonials={testimonialsData} autoplay />
      </section>

      <div id="feedback" className="scroll-mt-24">
        <Feedback />
      </div>

      <Footer />
    </main>
  );
}
