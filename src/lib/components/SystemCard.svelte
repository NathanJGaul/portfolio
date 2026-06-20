<script lang="ts">
  import { onMount } from 'svelte';
  import { prepare, layout } from '@chenglou/pretext';
  import type { SystemEntry } from '$lib/data/systems';
  import { experiments } from '$lib/data/experiments';

  const { system, index }: { system: SystemEntry; index: number } = $props();

  let open = $state(false);
  let contentEl = $state<HTMLDivElement>();
  let contentHeight = $state(0);

  onMount(() => {
    if (!experiments.smoothCards) return;
    const pre = prepare(system.description, '14px "Geist Sans"');
    const descH = layout(pre, 632, 22).height;
    const padding = 48;
    const tagsH = 32;
    const borderH = 1;
    contentHeight = descH + padding + tagsH + borderH;
  });

  const toggle = () => {
    if (experiments.smoothCards) {
      open = !open;
    }
  };
</script>

{#if experiments.smoothCards}
  <div
    class="group border border-border rounded-xl transition-all duration-300 cursor-pointer select-none {open ? 'border-accent/30' : 'hover:border-accent/20'}"
    onclick={toggle}
    onkeydown={(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
    role="button"
    tabindex="0"
    aria-expanded={open}
  >
    <div class="flex items-center justify-between p-6">
      <div class="flex items-center gap-5 min-w-0">
        <span class="font-mono text-xs text-text-secondary/50 w-5 shrink-0 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
        <div class="min-w-0">
          <h3 class="font-medium text-text-primary text-base truncate">{system.title}</h3>
          <p class="text-sm text-text-secondary truncate">{system.subtitle}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 shrink-0">
        <span class="hidden sm:inline text-xs text-text-secondary/60 font-mono">{system.context}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-text-secondary shrink-0 transition-transform duration-300"
          class:rotate-180={open}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </div>
    <div
      class="grid transition-all duration-300"
      style="grid-template-rows: {open ? '1fr' : '0fr'}"
    >
      <div class="overflow-hidden" bind:this={contentEl}>
        <div class="px-6 pb-6 pt-2 border-t border-border">
          <p class="text-sm text-text-secondary leading-relaxed mb-4">{system.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each system.tech as t}
              <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-elevated text-text-secondary">{t}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <details class="group border border-border rounded-xl transition-colors open:border-accent/30 hover:border-accent/20">
    <summary class="flex items-center justify-between p-6 cursor-pointer list-none select-none">
      <div class="flex items-center gap-5 min-w-0">
        <span class="font-mono text-xs text-text-secondary/50 w-5 shrink-0 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
        <div class="min-w-0">
          <h3 class="font-medium text-text-primary text-base truncate">{system.title}</h3>
          <p class="text-sm text-text-secondary truncate">{system.subtitle}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 shrink-0">
        <span class="hidden sm:inline text-xs text-text-secondary/60 font-mono">{system.context}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-text-secondary shrink-0 transition-transform group-open:rotate-180"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </summary>
    <div class="px-6 pb-6 pt-2 border-t border-border">
      <p class="text-sm text-text-secondary leading-relaxed mb-4">{system.description}</p>
      <div class="flex flex-wrap gap-2">
        {#each system.tech as t}
          <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-elevated text-text-secondary">{t}</span>
        {/each}
      </div>
    </div>
  </details>
{/if}
