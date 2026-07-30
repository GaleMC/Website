<script lang="ts">
  import { onMount } from "svelte";
  import { Palette } from "lucide-svelte";
  import { t } from "@/lib/i18n";
  import CiBuilds from "./CiBuilds.svelte";

  interface Props {
    redirecting?: boolean;
    project: { slug: string; repo: string };
    hideSculptor?: boolean;
  }

  let {
    redirecting = $bindable(false),
    project,
    hideSculptor = false,
  }: Props = $props();

  let builds = $state<any[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function fetchBuilds() {
    try {
      loading = true;
      error = null;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch("/api/v2/builds?per_page=15", { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`API returned ${res.status}`);
      const data = await res.json();
      builds = data.releases || [];
      loading = false;
    } catch (err) {
      error = err instanceof Error ? err.message : "Failed to fetch builds";
      loading = false;
    }
  }

  onMount(() => {
    fetchBuilds();
  });
</script>

{#if loading}
  <section class="mt-12 sm:mt-16 min-h-[60vh] mb-20">
    <div class="rounded-lg p-6" style="border: 1px solid var(--border); background: var(--card);">
      <div class="flex flex-col items-center justify-center py-24 text-center">
        <div class="heartbeat-container mb-6">
          <Palette class="size-12 text-neutral-200" />
        </div>
        <p class="text-xl font-medium text-neutral-300">{$t("common.loading")}</p>
      </div>
    </div>
  </section>
{:else if error}
  <section class="mt-12 sm:mt-16">
    <div class="rounded-lg p-6" style="border: 1px solid var(--border); background: var(--card);">
      <div class="flex flex-col items-center justify-center py-24 text-center">
        <h3 class="text-xl font-semibold text-neutral-100 mb-2">{$t("downloads.downloadsUnavailable")}</h3>
        <p class="text-neutral-400 max-w-md mx-auto">{$error}</p>
        <button onclick={fetchBuilds} class="mt-4 px-4 py-2 rounded-md text-sm transition-colors" style="border: 1px solid var(--border); color: var(--foreground);">Retry</button>
      </div>
    </div>
  </section>
{:else}
  <CiBuilds {builds} />
{/if}
