import type { APIRoute } from "astro";

const REPO = "GaleMC/Gale";

export const prerender = false;

function authHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "GaleMC-Website",
  };
  const token = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

export const GET: APIRoute = async ({ url }) => {
  const runId = url.searchParams.get("run_id");
  if (!runId) {
    return new Response("Missing run_id", { status: 400 });
  }

  const runPageUrl = `https://github.com/${REPO}/actions/runs/${runId}`;

  try {
    const artRes = await fetch(
      `https://api.github.com/repos/${REPO}/actions/runs/${runId}/artifacts`,
      { headers: authHeaders() }
    );
    if (artRes.ok) {
      const artData = await artRes.json();
      const artifact = (artData.artifacts || [])[0];
      if (artifact) {
        const downloadRes = await fetch(artifact.archive_download_url, {
          headers: authHeaders(),
          redirect: "manual",
        });
        if (downloadRes.status === 301 || downloadRes.status === 302) {
          const s3Url = downloadRes.headers.get("location");
          if (s3Url) {
            return Response.redirect(s3Url, 302);
          }
        }
      }
    }
  } catch {
    // fall through to GitHub web page
  }

  return Response.redirect(runPageUrl, 302);
};
