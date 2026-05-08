"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  detectLocale,
  readStoredLocale,
  writeStoredLocale,
  translations,
  type Locale,
  type Translations,
} from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Site-wide locale context. Initial render is always TR (SEO-friendly default
 * for Turkish target market). On client mount, we re-evaluate:
 *   1) User's persisted choice (localStorage) — wins if set
 *   2) navigator.language — used otherwise
 * If the resolved locale differs from the SSR default, state updates and
 * components re-render in EN.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    const stored = readStoredLocale();
    const resolved = stored ?? detectLocale();
    if (resolved !== locale) {
      setLocaleState(resolved);
      // <html lang> attribute güncelle (SEO + accessibility)
      if (typeof document !== "undefined") {
        document.documentElement.lang = resolved;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    writeStoredLocale(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  const toggleLocale = () => setLocale(locale === "tr" ? "en" : "tr");

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, toggleLocale, t: translations[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
