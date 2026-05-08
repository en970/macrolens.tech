"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { AppShowcase } from "@/components/AppShowcase";
import { useLocale } from "@/components/LocaleProvider";
import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ens.macrolens.ai";

export default function Home() {
  const { t, toggleLocale, locale } = useLocale();
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white selection:bg-primary selection:text-black">
      {/* Condensed Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
        <div className="glass px-6 py-3 rounded-2xl flex justify-between items-center bg-black/40 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MacroLens — AI Kalori & Makro Takip Uygulaması logosu"
              width={32}
              height={32}
              className="rounded-lg shadow-lg shadow-primary/20"
            />
            <span className="text-xl font-bold tracking-tight">MacroLens</span>
          </div>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={t.nav.langSwitchAria}
              className="h-8 px-2 rounded-md hover:bg-white/5 transition-colors text-xs font-semibold tracking-wider text-zinc-400 hover:text-white"
            >
              {t.nav.langSwitch}
            </button>
            <a
              href="https://www.buymeacoffee.com/macrolens"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-white/5 transition-colors group"
              title="Support Us"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy Me a Coffee"
                className="h-6 w-auto grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
              />
            </a>
            <a
              href="#features"
              className="hidden sm:inline text-sm font-medium hover:text-primary transition-colors"
            >
              {t.nav.features}
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-4 rounded-xl bg-primary text-black text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center"
            >
              {t.nav.download}
            </a>
          </div>
        </div>
      </nav>

      <Hero />

      <AppShowcase />

      <div id="features" className="scroll-mt-24">
        <Features />
      </div>

      <Footer />

      {/* Locale debug — remove in prod if visible. Currently hidden via display none below. */}
      <span className="sr-only" data-locale={locale} />
    </main>
  );
}
