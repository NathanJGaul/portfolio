<script lang="ts">
  import { onMount } from 'svelte';
  import { prepare, layout } from '@chenglou/pretext';
  import systems from '$lib/data/systems';
  import SystemCard from '$lib/components/SystemCard.svelte';
  import { experiments } from '$lib/data/experiments';

  let allTags = $state<{ name: string; active: boolean }[]>([]);
  let tagPanel: HTMLDivElement;
  let tagPrepared: Map<string, ReturnType<typeof prepare>> = new Map();

  const font = '12px "Geist Mono"';

  onMount(() => {
    if (!experiments.techTagWall) return;
    const seen = new Set<string>();
    for (const s of systems) {
      for (const t of s.tech) {
        if (!seen.has(t)) {
          seen.add(t);
          allTags = [...allTags, { name: t, active: false }];
          tagPrepared.set(t, prepare(t, font));
        }
      }
    }
  });
</script>

<section id="work" class="py-24 md:py-32">
  <div class="max-w-6xl mx-auto px-4">
    <div class="max-w-xl mb-16">
      <p class="font-mono text-xs text-accent/80 mb-4 tracking-widest uppercase">01</p>
      <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
        What I Build
      </h2>
      <p class="text-text-secondary mt-4 leading-relaxed">
        Systems that operate at the intersection of defense, AI, and real-time decision-making.
        From C2 platforms to computer vision pipelines, each one had to work when it mattered.
      </p>
    </div>

    <div class="flex gap-8">
      <div class="flex-1 space-y-4">
        {#each systems as system, i}
          <SystemCard {system} index={i} />
        {/each}
      </div>

      {#if experiments.techTagWall}
        <div
          bind:this={tagPanel}
          class="hidden lg:block w-56 shrink-0 self-start sticky top-24"
        >
          <p class="font-mono text-[10px] text-text-secondary/40 mb-4 tracking-widest uppercase">tech</p>
          <div class="flex flex-wrap gap-1.5">
            {#each allTags as tag}
              <span
                class="text-[11px] font-mono px-2 py-0.5 rounded transition-all duration-300 {tag.active ? 'bg-accent/20 text-accent' : 'bg-surface-elevated text-text-secondary/60'}"
              >
                {tag.name}
              </span>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
