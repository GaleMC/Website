import type { APIRoute } from "astro";

const REPO = "GaleMC/Gale";

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github.v3+json", "User-Agent": "GaleMC-Website" };
    const token = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `token ${token}`;
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases?per_page=5`,
      { headers }
    );
    if (!res.ok) {
      return new Response("Not found", { status: 404 });
    }
    const data = await res.json();
    const latest = data.find((r: any) => !r.draft && !r.prerelease);
    if (!latest) return new Response("Not found", { status: 404 });

    const jarAsset = latest.assets?.find((a: any) => a.name?.endsWith(".jar"));
    if (jarAsset?.browser_download_url) {
      return Response.redirect(jarAsset.browser_download_url, 302);
    }
    return Response.redirect(latest.html_url, 302);
  } catch {
    return new Response("Internal error", { status: 500 });
  }
};
