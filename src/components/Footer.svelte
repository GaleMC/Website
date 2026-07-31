<script lang="ts">
  import { Heart } from "lucide-svelte";
  import { siteConfig } from "@/config/site";
  import { t } from "@/lib/i18n";

  const LINKS = [
    { href: "/downloads", labelKey: "footer.links.downloads" },
    { href: siteConfig.links.github.repo, labelKey: "footer.links.githubRepo" },
    {
      href: `${siteConfig.links.github.repo}/issues`,
      labelKey: "footer.links.githubIssues",
    },
    {
      href: `${siteConfig.links.github.repo}/blob/main/LICENSE.md`,
      labelKey: "footer.links.license",
    },
  ];

  const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-[var(--border)] bg-[var(--background)]">
  <div class="mx-auto max-w-5xl px-6 py-12 sm:px-8">
    <div class="flex flex-col items-center text-center gap-4">
      <a href="/" class="inline-flex items-center gap-2">
        <img src="/logo.png" alt="" width="22" height="22" class="w-5 h-5" />
        <span class="font-semibold text-sm gale-gradient-text"
          >{siteConfig.name}</span
        >
      </a>

      <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        {#each LINKS as { href, labelKey } (labelKey)}
          <a
            {href}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            {$t(labelKey)}
          </a>
        {/each}
      </div>

      <p class="text-xs text-neutral-600 max-w-lg leading-relaxed mt-2">
        {$t("footer.disclaimer")}
      </p>

      <p class="text-xs text-neutral-600 mt-2">
        &copy; {currentYear}
        {siteConfig.name}
        <span class="mx-1">&middot;</span>
        <span class="inline-flex items-center gap-1">
          {$t("footer.builtWith")}
          <Heart class="size-3 inline" fill="currentColor" />
          {$t("footer.by")}
          {$t("footer.team")}
        </span>
      </p>
    </div>
  </div>
</footer>
