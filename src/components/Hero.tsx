"use client";

import { motion } from "framer-motion";
import { MockPhone } from "./MockPhone";
import { Apple, Play } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/id6756659153";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ens.macrolens.ai";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                App Store ve Google Play&apos;de yayında
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold">
                Hassas Mod ile %30 daha doğru porsiyon
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Tahmin etme. <br />
              <span className="text-primary italic">Fotoğraf çek.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              MacroLens, yemeğin fotoğrafını çekip kaloriyi ve makroları (protein,
              karbonhidrat, yağ, lif) saniyeler içinde çıkarır. Türk mutfağı,
              Ramazan ve PCOS dostu — 5 dilde 3000+ yerel yemek veritabanı.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  className="h-14 px-5 rounded-xl bg-black text-white border border-white/15 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group shadow-lg w-full sm:w-auto"
                >
                  <Apple className="w-7 h-7" strokeWidth={1.5} />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-300">
                      Download on the
                    </div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  className="h-14 px-5 rounded-xl bg-black text-white border border-white/15 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group shadow-lg w-full sm:w-auto"
                >
                  <Play className="w-7 h-7 fill-white" strokeWidth={0} />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-300">
                      Get it on
                    </div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              <p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-md">
                Ücretsiz indirin. Premium ile sınırsız AI tarama, Hassas Mod ve
                tam beslenme geçmişi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-30 -z-10 animate-pulse" />
            <MockPhone />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
