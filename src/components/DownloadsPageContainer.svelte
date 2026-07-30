<script lang="ts">
  import DownloadsPageWrapper from "./DownloadsPageWrapper.svelte";
  interface Props {
    project: { slug: string; repo: string };
    hideSculptor?: boolean;
  }

  let { project, hideSculptor = false }: Props = $props();

  let redirecting = $state(false);
</script>

<DownloadsPageWrapper bind:redirecting {project} {hideSculptor} />
