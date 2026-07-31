<script lang="ts">
  import { ExternalLink, Menu, X } from "lucide-svelte";
  import { siteConfig } from "@/config/site";
  import GithubIcon from "./icons/GithubIcon.svelte";
  import DiscordIcon from "./icons/DiscordIcon.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import LanguageSelector from "./LanguageSelector.svelte";
  import { t } from "@/lib/i18n";

  interface NavbarItem {
    href: string;
    translationKey: string;
    showExternalIcon?: boolean;
    icon?: any;
  }

  const LINKS: NavbarItem[] = [
    { href: "/downloads", translationKey: "nav.downloads" },
    { href: "/docs", translationKey: "nav.documentation" },
  ];

  const SOCIAL: NavbarItem[] = [
    {
      href: siteConfig.links.github.repo,
      translationKey: "nav.github",
      icon: GithubIcon,
    },
    {
      href: siteConfig.links.discord,
      translationKey: "nav.discord",
      icon: DiscordIcon,
    },
  ];

  let isOpen = $state(false);
  let currentPath = $state("");

  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  function handleExternalRedirect(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleClick(e: MouseEvent, href: string) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      e.preventDefault();
      handleExternalRedirect(href);
    }
  }
</script>

<nav
  class="fixed inset-x-0 top-0 z-50 w-[calc(100%-var(--removed-body-scroll-bar-size,0px))]"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <a href="/" class="flex items-center gap-2.5" aria-label={$t("nav.home")}>
        <img src="/logo.png" alt="" width="28" height="28" class="w-6 h-6 sm:w-7 sm:h-7" />
        <span class="font-semibold text-sm sm:text-base tracking-wide gale-gradient-text">{siteConfig.name}</span>
      </a>

      <div class="hidden md:flex md:items-center md:gap-8">
        {#each LINKS as link (link.href)}
          {@const isActive = currentPath === link.href}
          {@const isExternal = link.href.startsWith("http")}
          <a
            href={link.href}
            onclick={(e) => handleClick(e, link.href)}
            class="text-sm font-medium transition-colors {isActive
              ? 'text-blue-300'
              : 'text-neutral-500 hover:text-neutral-300'}"
            aria-current={isActive ? "page" : undefined}
          >
            {$t(link.translationKey)}
            {#if isExternal}
              <ExternalLink class="size-3 ml-0.5 inline" aria-hidden />
            {/if}
          </a>
        {/each}
        <div class="flex items-center gap-3 ml-4 pl-4" style="border-left: 1px solid var(--border)">
          {#each SOCIAL as link (link.icon)}
            {@const IconComponent = link.icon}
            <a
              href={link.href}
              onclick={(e) => handleClick(e, link.href)}
              class="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <IconComponent class="size-5" />
            </a>
          {/each}
          <div class="w-px h-5 bg-[var(--border)]"></div>
          <LanguageSelector />
          <ThemeToggle size={20} />
        </div>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <LanguageSelector />
        <ThemeToggle size={20} />
        <button
          type="button"
          onclick={() => (isOpen = !isOpen)}
          class="p-2 text-neutral-500 hover:text-neutral-300 transition-colors"
          aria-label={`${isOpen ? $t("common.close") : $t("common.open")} ${$t("nav.menu")}`}
          aria-expanded={isOpen}
        >
          {#if isOpen}
            <X class="size-5" />
          {:else}
            <Menu class="size-5" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if isOpen}
    <div class="border-t border-[var(--border)] bg-[var(--background)] pt-4 pb-3 md:hidden">
      <div class="space-y-1 px-4">
        {#each LINKS as link (link.href)}
          {@const isActive = currentPath === link.href}
          {@const isExternal = link.href.startsWith("http")}
          <a
            href={link.href}
            onclick={(e) => handleClick(e, link.href)}
            class="block px-3 py-2 text-sm rounded-md transition-colors {isActive
              ? 'text-blue-300 bg-blue-500/5'
              : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'}"
          >
            {$t(link.translationKey)}
            {#if isExternal}
              <ExternalLink class="size-3 ml-1 inline" aria-hidden />
            {/if}
          </a>
        {/each}
        <div class="flex items-center gap-3 px-3 pt-3 mt-2 border-t border-[var(--border)]">
          {#each SOCIAL as link (link.icon)}
            {@const IconComponent = link.icon}
            <a
              href={link.href}
              onclick={(e) => handleClick(e, link.href)}
              class="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <IconComponent class="size-5" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</nav>
