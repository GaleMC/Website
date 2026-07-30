<script lang="ts">
  interface Props {
    class?: string;
  }

  let { class: className = "" }: Props = $props();
</script>

<div
  aria-hidden="true"
  class="fixed inset-0 -z-10 {className}"
>
  <div class="absolute inset-0 bg-[var(--background)]"></div>
  <div
    class="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
    style="background: radial-gradient(circle, #3b82f6 0%, transparent 70%)"
  ></div>
  <div
    class="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
    style="background: radial-gradient(circle, #60a5fa 0%, transparent 70%)"
  ></div>
  <div
    class="absolute inset-0 opacity-[0.03] pointer-events-none"
    style="background-image: linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px); background-size: 60px 60px;"
  ></div>
</div>
