<script lang="ts">
  import DiscordIcon from "../icons/DiscordIcon.svelte";
  import GithubIcon from "../icons/GithubIcon.svelte";
  import Button from "../ui/Button.svelte";
  import { siteConfig } from "../../config/site";
  import { scrollReveal } from "../../lib/animations";
  import { t } from "../../lib/i18n";

  const COMMUNITIES = [
    {
      titleKey: "community.discord.title",
      descriptionKey: "community.discord.description",
      icon: DiscordIcon,
      buttonTextKey: "community.discord.action",
      href: siteConfig.links.discord,
    },
    {
      titleKey: "community.github.title",
      descriptionKey: "community.github.description",
      icon: GithubIcon,
      buttonTextKey: "community.github.action",
      href: siteConfig.links.github.org,
    },
  ] as const;
</script>

<section class="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:py-28">
  <header
    use:scrollReveal={{ type: "fadeIn", start: "top 85%" }}
    class="text-center"
  >
    <!-- Reserved: "Header" (community.label) - re-add later
    <p class="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-3">{$t("community.label")}</p>
    -->
    <h2 class="font-bold text-3xl sm:text-4xl text-[var(--foreground)]">
      {$t("community.heading")}
    </h2>
    <p class="mt-3 text-lg text-neutral-400 max-w-xl mx-auto">
      {$t("community.subheading")}
    </p>
  </header>

  <div class="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
    {#each COMMUNITIES as { titleKey, descriptionKey, icon: Icon, buttonTextKey, href }, index (titleKey)}
      <div
        use:scrollReveal={{
          type: "slideUp",
          start: "top 85%",
          delay: index * 0.2,
        }}
        class="rounded-lg p-6 transition-all hover:-translate-y-0.5"
        style="border: 1px solid var(--border); background: var(--card);"
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="flex items-center justify-center w-10 h-10 rounded-lg" style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.15);">
            <Icon class="size-5" style="color: rgba(96, 165, 250, 0.9);" />
          </div>
          <h3 class="font-semibold text-[var(--foreground)]">{$t(titleKey)}</h3>
        </div>
        <p class="text-sm text-neutral-400 leading-relaxed mb-5">
          {$t(descriptionKey)}
        </p>
        <Button variant="secondary" class="w-full" {href}>
          {$t(buttonTextKey)}
        </Button>
      </div>
    {/each}
  </div>
</section>
