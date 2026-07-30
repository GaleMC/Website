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

  try {
    const artRes = await fetch(
      `https://api.github.com/repos/${REPO}/actions/runs/${runId}/artifacts`,
      { headers: authHeaders() }
    );
    if (!artRes.ok) {
      return new Response("Artifacts not found", { status: 404 });
    }

    const artData = await artRes.json();
    const artifact = (artData.artifacts || [])[0];
    if (!artifact) {
      return new Response("No artifacts for this run", { status: 404 });
    }

    const downloadRes = await fetch(artifact.archive_download_url, {
      headers: authHeaders(),
      redirect: "manual",
    });
    if (downloadRes.status !== 302 && downloadRes.status !== 301) {
      return new Response("Unexpected response from GitHub", { status: 502 });
    }

    const s3Url = downloadRes.headers.get("location");
    if (!s3Url) {
      return new Response("No download URL", { status: 502 });
    }

    return Response.redirect(s3Url, 302);
  } catch {
    return new Response("Internal error", { status: 500 });
  }
};
