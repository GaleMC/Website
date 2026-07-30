<script lang="ts">
  import { Download, ExternalLink, Tag } from "lucide-svelte";
  import { scrollReveal } from "@/lib/animations";
  import { t, currentLanguage } from "@/lib/i18n";
  import { get } from "svelte/store";

  interface Props {
    releases: any[];
    project: { slug: string; repo: string };
  }

  let { releases, project }: Props = $props();
  let lang = $state("en");

  function getJarAsset(release: any) {
    return release.assets?.find((a: any) => a.name?.endsWith(".jar")) ?? null;
  }

  function formatter(locale: string) {
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  $effect(() => {
    lang = get(currentLanguage);
  });

  function formatSize(bytes: number) {
    if (!bytes) return "";
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  }
</script>

<section class="mt-12 sm:mt-16 relative mb-20">
  <div use:scrollReveal={{ type: "slideUp", start: "top 85%" }}>
    <div class="rounded-lg p-4 sm:p-6" style="border: 1px solid var(--border); background: var(--card);">
      {#if releases.length === 0}
        <p class="text-neutral-300 text-center py-12">{$t("downloads.noBuilds")}</p>
      {:else}
        <div class="space-y-3">
          {#each releases as release, index (release.id)}
            {@const jar = getJarAsset(release)}
            {@const isLatest = index === 0}
            <div
              use:scrollReveal={{ type: "slideUp", start: "top 100%", delay: index * 0.05 }}
              class="group relative flex flex-col gap-4 border border-neutral-800 rounded-lg p-4 sm:flex-row sm:items-center transition-all duration-200 hover:bg-white/5 hover:border-white/20"
            >
              <div class="flex items-center gap-3 min-w-0 flex-1">
                <div class="shrink-0">
                  {#if isLatest}
                    <span class="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium px-2.5 py-0.5">
                      {$t("downloads.latest")}
                    </span>
                  {/if}
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2">
                    <Tag class="size-4 text-neutral-400 shrink-0" />
                    <a
                      href={release.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-semibold text-neutral-100 hover:text-white transition-colors truncate"
                    >
                      {release.tag_name}
                    </a>
                  </div>
                  <p class="text-xs text-neutral-500 mt-0.5">
                    {formatter(lang).format(new Date(release.published_at))}
                    {#if jar}
                      <span class="text-neutral-600"> &middot; {formatSize(jar.size)}</span>
                    {/if}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                  {#if release.body}
                  <details class="group/details text-xs text-neutral-400">
                    <summary class="cursor-pointer hover:text-neutral-300 transition-colors list-none flex items-center gap-1">
                      {$t("downloads.releaseNotes")}
                      <svg class="size-3 transition-transform group-open/details:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div class="mt-2 p-2 rounded bg-neutral-900/50 max-w-md whitespace-pre-wrap text-xs leading-relaxed max-h-48 overflow-y-auto">
                      {release.body}
                    </div>
                  </details>
                {/if}

                {#if jar}
                  <a
                    href={jar.browser_download_url}
                    class="inline-flex items-center gap-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium px-3 py-2 text-neutral-200"
                  >
                    <Download class="size-4" />
                    {$t("downloads.download")}
                  </a>
                {:else}
                  <a
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium px-3 py-2 text-neutral-400"
                  >
                    <ExternalLink class="size-4" />
                    {$t("downloads.view")}
                  </a>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      {/if}

      <div class="mt-8 text-center">
        <a
          href="https://github.com/{project.repo}/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="text-neutral-400 text-sm hover:text-neutral-300 transition-colors"
        >
          {$t("downloads.olderBuilds")}
        </a>
      </div>
    </div>
  </div>
</section>
