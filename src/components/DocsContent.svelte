<script lang="ts">
  import { t } from "@/lib/i18n";

  const sections = [
    { id: "getting-started", key: "docs.sections.gettingStarted" },
    { id: "features", key: "docs.sections.features" },
    { id: "faq", key: "docs.sections.faq" },
    { id: "troubleshooting", key: "docs.sections.troubleshooting" },
  ];

  const perfItems = [
    {
      titleKey: "docs.features.perf.simd.title",
      descKey: "docs.features.perf.simd.desc",
    },
    {
      titleKey: "docs.features.perf.virtualThreads.title",
      descKey: "docs.features.perf.virtualThreads.desc",
    },
    {
      titleKey: "docs.features.perf.caching.title",
      descKey: "docs.features.perf.caching.desc",
    },
    {
      titleKey: "docs.features.perf.despawn.title",
      descKey: "docs.features.perf.despawn.desc",
    },
    {
      titleKey: "docs.features.perf.collections.title",
      descKey: "docs.features.perf.collections.desc",
    },
    {
      titleKey: "docs.features.perf.allocations.title",
      descKey: "docs.features.perf.allocations.desc",
    },
  ];

  const faqItems = [
    { qKey: "docs.faq.q1", aKey: "docs.faq.a1" },
    { qKey: "docs.faq.q2", aKey: "docs.faq.a2" },
    { qKey: "docs.faq.q3", aKey: "docs.faq.a3" },
    { qKey: "docs.faq.q4", aKey: "docs.faq.a4" },
    { qKey: "docs.faq.q5", aKey: "docs.faq.a5" },
    { qKey: "docs.faq.q6", aKey: "docs.faq.a6" },
    { qKey: "docs.faq.q7", aKey: "docs.faq.a7" },
  ];

  const installSteps = [
    {
      titleKey: "docs.gettingStarted.install.step1.title",
      descKey: "docs.gettingStarted.install.step1.desc",
    },
    {
      titleKey: "docs.gettingStarted.install.step2.title",
      descKey: "docs.gettingStarted.install.step2.desc",
    },
    {
      titleKey: "docs.gettingStarted.install.step3.title",
      descKey: "docs.gettingStarted.install.step3.desc",
    },
  ];

  const troubleItems = [
    {
      titleKey: "docs.troubleshooting.items.serverWontStart.title",
      descKey: "docs.troubleshooting.items.serverWontStart.desc",
    },
    {
      titleKey: "docs.troubleshooting.items.pluginIncompat.title",
      descKey: "docs.troubleshooting.items.pluginIncompat.desc",
    },
    {
      titleKey: "docs.troubleshooting.items.performance.title",
      descKey: "docs.troubleshooting.items.performance.desc",
    },
  ];
</script>

<main class="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-12">
  <header class="text-center mb-16">
    <p
      class="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-3"
    >
      {$t("docs.label")}
    </p>
    <h1 class="font-bold text-4xl sm:text-5xl text-[var(--foreground)]">
      {$t("docs.title")}
    </h1>
    <p class="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
      {$t("docs.subtitle")}
    </p>
  </header>

  <nav class="flex flex-wrap gap-3 justify-center mb-16">
    {#each sections as { id, key } (id)}
      <a
        href="#{id}"
        class="text-sm px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-neutral-300 hover:text-blue-300 hover:border-blue-500/30 transition-colors"
      >
        {$t(key)}
      </a>
    {/each}
  </nav>

  <div class="space-y-20">
    <section id="getting-started">
      <h2 class="text-2xl font-bold text-[var(--foreground)] mb-6">
        {$t("docs.sections.gettingStarted")}
      </h2>

      <div
        class="rounded-lg p-6 mb-6"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-3">
          {$t("docs.gettingStarted.whatIsGale.title")}
        </h3>
        <p class="text-sm text-neutral-400 leading-relaxed">
          {@html $t("docs.gettingStarted.whatIsGale.body1")}
        </p>
      </div>

      <div
        class="rounded-lg p-6 mb-6"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-3">
          {$t("docs.gettingStarted.install.title")}
        </h3>
        <p class="text-sm text-neutral-400 mb-4">
          {$t("docs.gettingStarted.install.subtitle")}
        </p>
        <div class="space-y-3">
          {#each installSteps as step, i (step.titleKey)}
            <div class="flex items-start gap-3">
              <span
                class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold shrink-0 mt-0.5"
                >{i + 1}</span
              >
              <div>
                <p class="text-sm text-neutral-200 font-medium">
                  {$t(step.titleKey)}
                </p>
                <p class="text-xs text-neutral-500 mt-0.5">
                  {@html $t(step.descKey)}
                </p>
              </div>
            </div>
          {/each}
        </div>
        <p class="text-xs text-neutral-500 mt-4">
          {$t("docs.gettingStarted.install.footer")}
        </p>
      </div>

      <div
        class="rounded-lg p-6"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-3">
          {$t("docs.gettingStarted.building.title")}
        </h3>
        <pre
          class="text-xs text-neutral-400 bg-neutral-900/50 p-3 rounded overflow-x-auto">{$t(
            "docs.gettingStarted.building.command"
          )}</pre>
      </div>
    </section>

    <section id="features">
      <h2 class="text-2xl font-bold text-[var(--foreground)] mb-6">
        {$t("docs.sections.features")}
      </h2>

      <div
        class="rounded-lg p-6 mb-6"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-3">
          {$t("docs.features.zeroChanges.title")}
        </h3>
        <p class="text-sm text-neutral-400 leading-relaxed">
          {$t("docs.features.zeroChanges.body")}
        </p>
      </div>

      <div
        class="rounded-lg p-6 mb-6"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-3">
          {$t("docs.features.perf.title")}
        </h3>
        <p class="text-sm text-neutral-400 leading-relaxed mb-4">
          {@html $t("docs.features.perf.subtitle")}
        </p>
        <div class="grid gap-3 sm:grid-cols-2">
          {#each perfItems as { titleKey, descKey } (titleKey)}
            <div
              class="p-3 rounded bg-neutral-900/30"
              style="border: 1px solid var(--border);"
            >
              <p class="text-sm font-medium text-neutral-200 mb-1">
                {$t(titleKey)}
              </p>
              <p class="text-xs text-neutral-500">{$t(descKey)}</p>
            </div>
          {/each}
        </div>
        <p class="text-xs text-neutral-500 mt-4">
          {@html $t("docs.features.perf.fullList")}
        </p>
      </div>

      <div
        class="rounded-lg p-6"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <h3 class="text-lg font-semibold text-[var(--foreground)] mb-3">
          {$t("docs.features.upToDate.title")}
        </h3>
        <p class="text-sm text-neutral-400 leading-relaxed">
          {$t("docs.features.upToDate.body")}
        </p>
      </div>
    </section>

    <section id="faq">
      <h2 class="text-2xl font-bold text-[var(--foreground)] mb-6">
        {$t("docs.sections.faq")}
      </h2>

      <div class="space-y-4">
        {#each faqItems as { qKey, aKey } (qKey)}
          <details
            class="rounded-lg p-5 group"
            style="border: 1px solid var(--border); background: var(--card);"
          >
            <summary
              class="cursor-pointer text-sm font-medium text-neutral-200 list-none flex items-center justify-between"
            >
              {$t(qKey)}
              <svg
                class="size-4 text-neutral-500 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                /></svg
              >
            </summary>
            <p class="mt-3 text-sm text-neutral-400 leading-relaxed">
              {@html $t(aKey)}
            </p>
          </details>
        {/each}
      </div>
    </section>

    <section id="troubleshooting">
      <h2 class="text-2xl font-bold text-[var(--foreground)] mb-6">
        {$t("docs.sections.troubleshooting")}
      </h2>

      <div
        class="rounded-lg p-6"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <div class="space-y-6">
          {#each troubleItems as { titleKey, descKey } (titleKey)}
            <div>
              <h3 class="text-sm font-semibold text-neutral-200 mb-2">
                {$t(titleKey)}
              </h3>
              <p class="text-xs text-neutral-400 leading-relaxed">
                {@html $t(descKey)}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </div>

  <div class="mt-20 text-center">
    <p class="text-sm text-neutral-500">
      {@html $t("docs.footer")}
    </p>
  </div>
</main>
