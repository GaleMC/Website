<script lang="ts">
  import {
    Equal,
    FilePlay,
    Zap,
    Cpu,
    Database,
    GitPullRequest,
  } from "@lucide/svelte";
  import { scrollReveal } from "../../lib/animations";
  import { t } from "../../lib/i18n";

  const FEATURES = [
    {
      titleKey: "features.zeroChanges.title",
      descriptionKey: "features.zeroChanges.description",
      icon: Equal,
    },
    {
      titleKey: "features.dropIn.title",
      descriptionKey: "features.dropIn.description",
      icon: FilePlay,
    },
    {
      titleKey: "features.optimizations.title",
      descriptionKey: "features.optimizations.description",
      icon: Zap,
    },
    {
      titleKey: "features.hardware.title",
      descriptionKey: "features.hardware.description",
      icon: Cpu,
    },
    {
      titleKey: "features.caching.title",
      descriptionKey: "features.caching.description",
      icon: Database,
    },
    {
      titleKey: "features.upstream.title",
      descriptionKey: "features.upstream.description",
      icon: GitPullRequest,
    },
  ] as const;
</script>

<section class="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:py-28">
  <header
    use:scrollReveal={{ type: "fadeIn", start: "top 85%" }}
    class="text-center"
  >
    <!-- Reserved: "Header" (features.label) - re-add later
    <p class="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-3">{$t("features.label")}</p>
    -->
    <h2 class="font-bold text-3xl sm:text-4xl text-[var(--foreground)]">
      {$t("features.heading")}
    </h2>
    <!-- Reserved: "Text" (features.subheading) - re-add later
    <p class="mt-3 text-lg text-neutral-400 max-w-xl mx-auto">
      {$t("features.subheading")}
    </p>
    -->
  </header>

  <div class="mt-16 space-y-6">
    {#each FEATURES as { titleKey, descriptionKey, icon: Icon }, index (titleKey)}
      {@const isEven = index % 2 === 0}
      <div
        use:scrollReveal={{
          type: "slideUp",
          start: "top 90%",
          delay: index * 0.08,
        }}
        class="group relative flex items-start gap-5 sm:gap-8 p-5 sm:p-7 rounded-lg transition-all"
        style="background: linear-gradient(135deg, var(--card) 0%, transparent 100%);"
      >
        <div
          class="shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg transition-colors"
          style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.15);"
        >
          <Icon
            class="size-5 sm:size-5.5"
            style="color: rgba(96, 165, 250, 0.9);"
          />
        </div>
        <div class="min-w-0 flex-1">
          <h3
            class="font-semibold text-base sm:text-lg text-[var(--foreground)]"
          >
            {$t(titleKey)}
          </h3>
          <p
            class="mt-1.5 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl"
          >
            {$t(descriptionKey)}
          </p>
        </div>
        <div
          class="absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
          style="background: linear-gradient(to bottom, #3b82f6, #60a5fa);"
        ></div>
      </div>
    {/each}
  </div>
</section>
