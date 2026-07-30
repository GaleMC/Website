import type { APIRoute } from "astro";

const REPO = "GaleMC/Gale";
const WORKFLOW_ID = 43796647;

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

export const GET: APIRoute = async () => {
  try {
    const runsRes = await fetch(
      `https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW_ID}/runs?per_page=30&status=success`,
      { headers: authHeaders() }
    );
    if (!runsRes.ok) {
      return new Response(JSON.stringify({ error: "GitHub API error" }), { status: 502 });
    }
    const runsData = await runsRes.json();
    const runs = (runsData.workflow_runs || []).filter((r: any) => r.head_branch === "master" || r.head_branch === "main");

    const builds = await Promise.all(
      runs.map(async (run: any) => {
        let artifactDownloadUrl: string | null = null;
        let artifactName: string | null = null;
        try {
          const artRes = await fetch(
            `https://api.github.com/repos/${REPO}/actions/runs/${run.id}/artifacts`,
            { headers: authHeaders() }
          );
          if (artRes.ok) {
            const artData = await artRes.json();
            const art = (artData.artifacts || [])[0];
            if (art) {
              artifactDownloadUrl = `https://github.com/${REPO}/actions/runs/${run.id}/artifacts/${art.id}`;
              artifactName = art.name;
            }
          }
        } catch {}

        return {
          id: run.id,
          runNumber: run.run_number,
          commitId: run.head_commit?.id?.substring(0, 7) || run.head_sha?.substring(0, 7),
          commitMessage: run.head_commit?.message?.split("\n")[0] || run.display_title || "",
          branch: run.head_branch,
          createdAt: run.created_at,
          htmlUrl: run.html_url,
          artifactDownloadUrl,
          artifactName,
        };
      })
    );

    return new Response(JSON.stringify({ builds }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
};
