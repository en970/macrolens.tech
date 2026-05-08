// Centralized schema.org JSON-LD factory for MacroLens.
// Wired into root layout once; per-page schemas (article, FAQ, breadcrumb)
// can be added per-page using the named factories below.

const SITE = "https://macrolens.tech";
const APP_STORE_ID = "id6756659153";
const PLAY_PACKAGE = "com.ens.macrolens.ai";

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "MacroLens",
  url: SITE,
  logo: `${SITE}/logo.png`,
  sameAs: [
    `https://apps.apple.com/app/${APP_STORE_ID}`,
    `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`,
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "MacroLens",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: ["tr-TR", "en-US"],
};

export const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE}/#app`,
  name: "MacroLens — AI Calorie & Macro Tracker",
  alternateName: "MacroLens AI Kalori Takip",
  description:
    "AI-powered calorie & macro tracker. Photograph your meal and get instant calorie, protein, carb, fat and fiber breakdown — with NOVA processing score and locale-aware food database (TR/EN/DE/ES/FR).",
  operatingSystem: "iOS, ANDROID",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Nutrition",
  downloadUrl: [
    `https://apps.apple.com/app/${APP_STORE_ID}`,
    `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`,
  ],
  installUrl: `https://apps.apple.com/app/${APP_STORE_ID}`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: ["tr-TR", "en-US", "de-DE", "es-ES", "fr-FR"],
};

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
