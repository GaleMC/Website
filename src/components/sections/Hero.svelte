<script lang="ts">
  import { ArrowRight, Download } from "lucide-svelte";
  import Button from "../ui/Button.svelte";
  import { t } from "@/lib/i18n";
</script>

<section class="relative isolate overflow-hidden">
  <div class="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 md:px-8 lg:py-40">
    <div class="flex flex-col items-center text-center">
      <div class="mb-8">
        <img
          src="/logo.png"
          alt="Gale Logo"
          width="120"
          height="120"
          class="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain select-none"
          style="filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.35));"
        />
      </div>

      <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-4xl">
        <span class="gale-gradient-text">{$t("hero.line1")}</span><br />
        <span class="text-[var(--foreground)]">{$t("hero.line2")}</span>
      </h1>

      <div class="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>

      <p class="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
        {$t("hero.subtitle")}
      </p>

      <div class="mt-10 flex flex-col sm:flex-row gap-4">
        <Button size="lg" href="/downloads" class="gap-2 text-base">
          <Download class="size-4" />
          {$t("hero.downloadGale")}
        </Button>
        <Button variant="secondary" size="lg" href="https://github.com/GaleMC/Gale" class="gap-2 text-base">
          <svg class="size-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
          {$t("downloads.sourceCode")}
        </Button>
      </div>

      <!-- Reserved: stats (green dots) "Text 1 / Text 2 / Text 3" - re-add later
      <div class="mt-16 flex items-center gap-8 sm:gap-12 text-sm text-neutral-500">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          {$t("hero.stat1")}
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          {$t("hero.stat2")}
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          {$t("hero.stat3")}
        </div>
      </div>
      -->
    </div>
  </div>
</section>
