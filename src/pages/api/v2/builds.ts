import type { APIRoute } from "astro";
import { REPO, authHeaders } from "@/lib/github";

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases?per_page=20`,
      { headers: authHeaders() }
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
