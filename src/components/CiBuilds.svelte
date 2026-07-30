<script lang="ts">
  import { Download, ExternalLink, Tag } from "lucide-svelte";
  import { scrollReveal } from "@/lib/animations";
  import { t } from "@/lib/i18n";

  interface Props {
    builds: any[];
  }

  let { builds }: Props = $props();

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
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
      {#if builds.length === 0}
        <p class="text-neutral-300 text-center py-12">{$t("downloads.noBuilds")}</p>
      {:else}
        <div class="space-y-2">
          {#each builds as release, index (release.id)}
            {@const isLatest = index === 0}
              <div
                use:scrollReveal={{ type: "slideUp", start: "top 100%", delay: index * 0.03 }}
                class="group flex items-center gap-4 px-4 py-3 rounded-lg transition-all hover:bg-white/5"
                style="border: 1px solid transparent; transition: border-color 0.2s, background 0.2s;"
                onmouseenter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)')}
                onmouseleave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
                role="listitem"
              >
              <div class="flex items-center gap-3 min-w-0 flex-1">
                {#if isLatest}
                  <span class="inline-flex items-center rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium px-2 py-0.5 shrink-0">
                    {$t("downloads.latest")}
                  </span>
                {/if}
                <Tag class="size-4 text-neutral-500 shrink-0" />
                <span class="text-sm text-neutral-200 font-medium">{release.name}</span>
              </div>

              <div class="hidden sm:block text-xs text-neutral-500 shrink-0">
                {dateFormatter.format(new Date(release.publishedAt))}
              </div>

              <div class="text-xs text-neutral-500 shrink-0">
                {#if release.jarSize}
                  {formatSize(release.jarSize)}
                {/if}
              </div>

              <div class="flex items-center gap-1.5 shrink-0">
                <a
                  href={release.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-1.5 rounded text-neutral-500 hover:text-neutral-300 transition-colors"
                  title="View on GitHub"
                >
                  <ExternalLink class="size-4" />
                </a>
                {#if release.jarDownloadUrl}
                  <a
                    href={release.jarDownloadUrl}
                    class="p-1.5 rounded text-neutral-400 hover:text-blue-300 transition-colors"
                    title="Download JAR"
                  >
                    <Download class="size-4" />
                  </a>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      {/if}

      <div class="mt-6 text-center">
        <a
          href="https://github.com/GaleMC/Gale/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          View all releases on GitHub →
        </a>
      </div>
    </div>
  </div>
</section>
