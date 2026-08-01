export const seoConfig = {
  lastmod: "2025-06-01T00:00:00Z",
} as const;

export function getLastmod(): string {
  return process.env.SITEMAP_LASTMOD ?? seoConfig.lastmod;
}
