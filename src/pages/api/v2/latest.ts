import type { APIRoute } from "astro";
import { REPO, authHeaders } from "@/lib/github";

const WORKFLOW_ID = 43796647;

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const runsRes = await fetch(
      `https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW_ID}/runs?per_page=30&status=success`,
      { headers: authHeaders() }
    );
    if (!runsRes.ok) return new Response("Not found", { status: 404 });
    const runsData = await runsRes.json();
    const run = (runsData.workflow_runs || []).find(
      (r: any) => r.head_branch === "master" || r.head_branch === "main"
    );
    if (!run) return new Response("Not found", { status: 404 });

    return new Response(null, {
      status: 302,
      headers: { Location: `/api/v2/download/artifact?run_id=${run.id}` },
    });
  } catch {
    return new Response("Internal error", { status: 500 });
  }
};
