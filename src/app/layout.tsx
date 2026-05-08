import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { orgJsonLd, websiteJsonLd, mobileAppJsonLd } from "@/lib/seo/jsonld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://macrolens.tech"),
  title: {
    default: "MacroLens — AI Kalori & Makro Takip Uygulaması",
    template: "%s · MacroLens",
  },
  description:
    "Yemeğinin fotoğrafını çek, AI saniyeler içinde kalori ve makroyu çıkarsın. Hassas Mod ile %30 daha doğru porsiyon. PCOS, Ramazan ve Türk mutfağı dostu. iOS ve Android.",
  applicationName: "MacroLens",
  authors: [{ name: "MacroLens" }],
  creator: "MacroLens",
  publisher: "MacroLens",
  keywords: [
    "kalori takip uygulaması",
    "makro takibi",
    "yemek fotoğrafı kalori",
    "AI kalori sayacı",
    "PCOS diyeti uygulama",
    "Ramazan kalori takibi",
    "Türk mutfağı kalori",
    "Ozempic beslenme",
    "calorie tracker",
    "macro tracker",
    "AI nutrition app",
    "photo calorie counter",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "MacroLens",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://macrolens.tech",
    title: "MacroLens — AI Kalori & Makro Takip Uygulaması",
    description:
      "Fotoğraftan kalori ve makro analizi. Hassas Mod ile %30 daha doğru porsiyon tahmini.",
    images: [
      {
        url: "/logo.png",
        width: 942,
        height: 942,
        alt: "MacroLens — AI Calorie & Macro Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacroLens — AI Kalori & Makro Takip Uygulaması",
    description:
      "Fotoğraftan kalori ve makro. Hassas Mod ile %30 daha doğru porsiyon.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-itunes-app": "app-id=6756659153, app-argument=https://macrolens.tech",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={[orgJsonLd, websiteJsonLd, mobileAppJsonLd]} />
        {children}
      </body>
    </html>
  );
}
