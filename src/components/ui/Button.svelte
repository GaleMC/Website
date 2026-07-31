<script lang="ts">
  import { type Snippet } from "svelte";

  interface Props {
    variant?: "primary" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
    href?: string;
    type?: "button" | "submit" | "reset";
    class?: string;
    disabled?: boolean;
    children: Snippet;
    onclick?: (e: MouseEvent) => void;
    target?: string;
    rel?: string;
  }

  let {
    variant = "primary",
    size = "default",
    href,
    type = "button",
    class: className = "",
    disabled = false,
    children,
    onclick,
    target,
    rel,
  }: Props = $props();

  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 will-change-transform";

  const variantClasses = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-400 shadow-sm shadow-blue-500/20",
    secondary:
      "border border-blue-500/30 text-neutral-200 hover:bg-blue-500/10 hover:border-blue-400/50 " +
      "group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-400",
    ghost: "text-neutral-400 hover:text-blue-300",
  };

  const sizeClasses = {
    default: "h-10 px-5 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-11 rounded-md px-7",
    icon: "h-9 w-9",
  };

  const classes = $derived(
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  );
</script>

{#if href}
  <a {href} class={classes} {onclick} aria-disabled={disabled} {target} {rel}>
    {@render children()}
  </a>
{:else}
  <button {type} class={classes} {onclick} {disabled}>
    {@render children()}
  </button>
{/if}
