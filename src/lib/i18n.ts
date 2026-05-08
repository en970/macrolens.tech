// Two-language i18n helper for static-exported site.
// Default render is TR (target market is Turkey, SEO-first). On client
// mount, navigator.language is checked and EN is loaded if locale doesn't
// start with "tr". User can also toggle manually; choice persists in
// localStorage.

export type Locale = "tr" | "en";

export interface Translations {
  nav: {
    features: string;
    download: string;
    langSwitch: string;
    langSwitchAria: string;
  };
  hero: {
    badge: string;
    badgeBeta: string;
    title1: string;
    title2: string;
    desc: string;
    ctaPlay: string;
    ctaPlaySub: string;
    footnote: string;
  };
  features: {
    sectionTitle: string;
    sectionDesc: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    f5Title: string;
    f5Desc: string;
  };
  footer: {
    tagline: string;
    privacy: string;
    terms: string;
    support: string;
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  tr: {
    nav: {
      features: "Özellikler",
      download: "İndir",
      langSwitch: "EN",
      langSwitchAria: "Switch to English",
    },
    hero: {
      badge: "Google Play'de yayında",
      badgeBeta: "Hassas Mod ile %30 daha doğru porsiyon",
      title1: "Tahmin etme.",
      title2: "Fotoğraf çek.",
      desc: "MacroLens, yemeğin fotoğrafını çekip kaloriyi ve makroları (protein, karbonhidrat, yağ, lif) saniyeler içinde çıkarır. Türk mutfağı, Ramazan ve PCOS dostu — 5 dilde 3000+ yerel yemek veritabanı.",
      ctaPlay: "Google Play",
      ctaPlaySub: "Google Play'den",
      footnote:
        "Ücretsiz indirin. Premium ile sınırsız AI tarama, Hassas Mod ve tam beslenme geçmişi.",
    },
    features: {
      sectionTitle: "Neler yapabilirsin?",
      sectionDesc:
        "AI ile yemeğini fotoğrafla, makrolarını anında al. Türk mutfağı odaklı, 5 dilli yerel veritabanı.",
      f1Title: "Yemekleri tanı",
      f1Desc:
        "Tek fotoğrafla yemeğin türünü, gramajını ve kalorisini AI tahmin eder. Türk mutfağı için özel optimize.",
      f2Title: "AI Diyetisyen",
      f2Desc:
        "24/7 sohbet edebileceğin yapay zeka diyetisyenin. Hedeflerine göre öneriler, eksiklerini görür.",
      f3Title: "Barkod Okuyucu",
      f3Desc:
        "Marketten aldığın paketli ürünü saniyede tara, makroları otomatik kaydet.",
      f4Title: "Hassas Mod (Premium)",
      f4Desc:
        "2-3 farklı açıdan foto çek, parallaks ile %30 daha doğru porsiyon ölçümü. Referans nesneyle kalibrasyon.",
      f5Title: "Detaylı analiz",
      f5Desc:
        "Günlük, haftalık ve aylık trendler. Hedeflerine ne kadar yaklaştığını gör.",
    },
    footer: {
      tagline: "AI Kalori & Makro Takip",
      privacy: "Gizlilik",
      terms: "Şartlar",
      support: "Destek",
      copyright: "© 2026 MacroLens. Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      features: "Features",
      download: "Download",
      langSwitch: "TR",
      langSwitchAria: "Türkçe'ye geç",
    },
    hero: {
      badge: "Live on Google Play",
      badgeBeta: "Precision Mode — 30% more accurate portions",
      title1: "Stop guessing.",
      title2: "Start snapping.",
      desc: "Photograph your meal and MacroLens extracts calories and macros (protein, carbs, fat, fiber) in seconds. Turkish cuisine, Ramadan and PCOS friendly — 3000+ local foods across 5 languages.",
      ctaPlay: "Google Play",
      ctaPlaySub: "Get it on",
      footnote:
        "Free to download. Premium unlocks unlimited AI scans, Precision Mode, and full nutrition history.",
    },
    features: {
      sectionTitle: "What you can do",
      sectionDesc:
        "Snap your food, get macros instantly. AI-powered, with a Turkish-cuisine-first 5-language local food database.",
      f1Title: "Identify meals",
      f1Desc:
        "AI estimates food type, grams and calories from a single photo. Tuned for Turkish cuisine.",
      f2Title: "AI Nutritionist",
      f2Desc:
        "Chat with your AI dietitian 24/7. Personalized recommendations based on your goals.",
      f3Title: "Barcode Scanner",
      f3Desc:
        "Scan packaged products in seconds, log macros automatically.",
      f4Title: "Precision Mode (Premium)",
      f4Desc:
        "2-3 photos from different angles, parallax-based portion measurement up to 30% more accurate. Reference-object calibration.",
      f5Title: "Detailed analytics",
      f5Desc:
        "Daily, weekly and monthly trends. See exactly how close you are to your goals.",
    },
    footer: {
      tagline: "AI Calorie & Macro Tracker",
      privacy: "Privacy",
      terms: "Terms",
      support: "Support",
      copyright: "© 2026 MacroLens. All rights reserved.",
    },
  },
};

/**
 * Detect locale from `navigator.language`. Returns "tr" if browser language
 * starts with "tr" (Turkey, Cyprus Turkish, etc.); "en" otherwise.
 * SSR-safe: returns "tr" (default) when navigator is undefined.
 */
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "tr";
  const lang = (navigator.language || "tr").toLowerCase();
  return lang.startsWith("tr") ? "tr" : "en";
}

const STORAGE_KEY = "macrolens.locale";

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "tr" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

export function writeStoredLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // ignore (private mode etc.)
  }
}
