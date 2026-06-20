<script lang="ts">
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-zinc-950/90 backdrop-blur-sm border-b border-border' : ''}"
>
  <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
    <a href="#hero" class="text-sm font-mono text-text-secondary hover:text-text-primary transition-colors">
      nathanjgaul<span class="text-accent">/</span>
    </a>

    <button
      class="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Menu"
    >
      {#if menuOpen}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
      {/if}
    </button>

    <ul class="hidden md:flex items-center gap-8 text-sm">
      <li><a href="#work" class="text-text-secondary hover:text-text-primary transition-colors">Work</a></li>
      <li><a href="#thinking" class="text-text-secondary hover:text-text-primary transition-colors">Thinking</a></li>
      <li><a href="#projects" class="text-text-secondary hover:text-text-primary transition-colors">Projects</a></li>
      <li><a href="#contact" class="text-text-secondary hover:text-text-primary transition-colors">Contact</a></li>
    </ul>
  </div>

  {#if menuOpen}
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <ul
      tabindex="0"
      class="md:hidden border-t border-border bg-zinc-950 px-4 py-4 space-y-3 text-sm"
    >
      <li><a href="#work" onclick={() => (menuOpen = false)} class="text-text-secondary hover:text-text-primary transition-colors">Work</a></li>
      <li><a href="#thinking" onclick={() => (menuOpen = false)} class="text-text-secondary hover:text-text-primary transition-colors">Thinking</a></li>
      <li><a href="#projects" onclick={() => (menuOpen = false)} class="text-text-secondary hover:text-text-primary transition-colors">Projects</a></li>
      <li><a href="#contact" onclick={() => (menuOpen = false)} class="text-text-secondary hover:text-text-primary transition-colors">Contact</a></li>
    </ul>
  {/if}
</nav>
