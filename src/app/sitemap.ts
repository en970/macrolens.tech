import type { MetadataRoute } from "next";

const SITE = "https://macrolens.tech";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  return staticRoutes.map(({ path, priority, freq }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        "tr-TR": `${SITE}${path}`,
        "en-US": `${SITE}${path}`,
        "x-default": `${SITE}${path}`,
      },
    },
  }));
}
