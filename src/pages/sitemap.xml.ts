import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";
import { getLastmod } from "@/config/seo";

const ALWAYS = [
  { loc: siteConfig.url, priority: "1.0" },
  { loc: `${siteConfig.url}/downloads`, priority: "0.8" },
];

export const GET: APIRoute = () => {
  const lastmod = getLastmod();

  const urls = ALWAYS.map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=3600",
    },
  });
};
