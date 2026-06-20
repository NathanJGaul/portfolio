<script lang="ts">
  import systems from '$lib/data/systems';
  import SystemCard from '$lib/components/SystemCard.svelte';
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

    <div class="space-y-4">
      {#each systems as system, i}
        <SystemCard {system} index={i} />
      {/each}
    </div>
  </div>
</section>
