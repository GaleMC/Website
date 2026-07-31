<script lang="ts">
  import { t } from "@/lib/i18n";
  import { ArrowRight } from "lucide-svelte";
</script>

<section class="max-w-5xl mx-auto">
  <a
    href="/downloads/gale"
    class="group flex items-center gap-5 rounded-lg p-6 transition-all hover:-translate-y-0.5"
    style="border: 1px solid var(--border); background: var(--card);"
  >
    <div class="flex items-center justify-center w-14 h-14 rounded-lg shrink-0" style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.15);">
      <img src="/logo.png" alt="Gale logo" class="w-8 h-8 object-contain" />
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="font-semibold text-[var(--foreground)] group-hover:text-blue-300 transition-colors">
        {$t("downloads.products.gale.title")}
      </h3>
      <p class="text-sm text-neutral-400 mt-1">
        {$t("downloads.products.gale.description")}
      </p>
    </div>
    <ArrowRight class="size-5 text-neutral-500 group-hover:text-blue-400 transition-colors shrink-0" />
  </a>
</section>
