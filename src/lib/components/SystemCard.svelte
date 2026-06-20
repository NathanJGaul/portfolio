<script lang="ts">
  import type { SystemEntry } from '$lib/data/systems';

  const { system, index }: { system: SystemEntry; index: number } = $props();
</script>

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
