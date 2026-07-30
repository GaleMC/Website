import type { APIRoute } from "astro";

const REPO = "GaleMC/Gale";

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github.v3+json", "User-Agent": "GaleMC-Website" };
    const token = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `token ${token}`;
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases?per_page=20`,
      { headers }
    );
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "GitHub API error" }), { status: 502 });
    }
    const data = await res.json();

    const releases = data
      .filter((r: any) => !r.draft && !r.prerelease)
      .map((r: any) => {
        const jarAsset = r.assets?.find((a: any) => a.name?.endsWith(".jar")) ?? null;
        return {
          id: r.id,
          tagName: r.tag_name,
          name: r.name,
          publishedAt: r.published_at,
          htmlUrl: r.html_url,
          jarDownloadUrl: jarAsset?.browser_download_url ?? null,
          jarSize: jarAsset?.size ?? null,
          jarName: jarAsset?.name ?? null,
        };
      });

    return new Response(JSON.stringify({ releases }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=600",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
};
