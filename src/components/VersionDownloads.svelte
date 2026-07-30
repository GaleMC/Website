<script lang="ts">
  import { onMount } from "svelte";

  interface Build {
    id: number;
    runNumber: number;
    commitId: string;
    commitMessage: string;
    branch: string;
    createdAt: string;
    htmlUrl: string;
    artifactDownloadUrl: string | null;
    artifactName: string | null;
  }

  let builds = $state<Build[]>([]);
  let loading = $state(true);

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  onMount(async () => {
    try {
      const res = await fetch("/api/v2/ci");
      if (!res.ok) throw Error("API error");
      const data = await res.json();
      builds = data.builds || [];
    } catch {}
    loading = false;
  });
</script>

<section class="mt-12 sm:mt-16 relative mb-20">
  <div class="rounded-lg p-4 sm:p-6" style="border: 1px solid var(--border); background: var(--card);">
    {#if loading}
      <p class="text-neutral-300 text-center py-12">Loading CI builds...</p>
    {:else if builds.length === 0}
      <p class="text-neutral-300 text-center py-12">No builds available.</p>
    {:else}
      <div class="space-y-2">
        {#each builds as build, i}
          <div
            class="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
            style={i === 0 ? "border: 1px solid rgba(59,130,246,0.15);" : "border: 1px solid transparent;"}
          >
            <div class="flex items-center gap-3 min-w-0 flex-1">
              {#if i === 0}
                <span class="inline-flex items-center rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium px-2 py-0.5 shrink-0">Latest</span>
              {/if}
              <svg class="size-4 text-neutral-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-sm text-neutral-200 font-medium">#{build.runNumber}</span>
                  {#if build.commitId}
                    <span class="font-mono text-xs text-neutral-500">({build.commitId})</span>
                  {/if}
                </div>
                {#if build.commitMessage}
                  <p class="text-xs text-neutral-400 truncate max-w-md mt-0.5">{build.commitMessage}</p>
                {/if}
              </div>
            </div>
            <div class="hidden sm:block text-xs text-neutral-500 shrink-0">
              {dateFormatter.format(new Date(build.createdAt))}
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <a
                href={build.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="p-1.5 rounded text-neutral-500 hover:text-neutral-300 transition-colors"
                title="View on GitHub Actions"
              >
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              {#if build.artifactDownloadUrl}
                <a
                  href={build.artifactDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-1.5 rounded text-neutral-400 hover:text-blue-300 transition-colors"
                  title={"Download " + (build.artifactName || "artifact")}
                >
                  <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
      <div class="mt-6 text-center">
        <a
          href="https://github.com/GaleMC/Gale/actions"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          View all builds on GitHub Actions &rarr;
        </a>
      </div>
    {/if}
  </div>
</section>
