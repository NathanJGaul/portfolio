<script lang="ts">
  import MountainBackdrop from '$lib/components/MountainBackdrop.svelte';
</script>

<section
  id="hero"
  class="relative min-h-[100dvh] flex items-center overflow-hidden"
>
  <div class="absolute inset-0">
    <MountainBackdrop opacity={0.6} color="#5299e0" showGrid={false} layers={4} speed={0.3} interactive={false} />
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-4 w-full pt-24 pb-20 md:pt-28 md:pb-24">
    <div class="max-w-2xl">
      <p class="font-mono text-xs text-accent/80 mb-6 tracking-widest uppercase">
        Nathan Gaul
      </p>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-text-primary">
        I build systems for the critical layer.
      </h1>
      <p class="text-base md:text-lg text-text-secondary mt-6 leading-relaxed max-w-xl">
        Defense software, AI pipelines, and real-time operations. 
        I work where reliability is not optional -- bridging field requirements 
        with technical architecture across C2 systems, computer vision, and 
        production LLM deployments.
      </p>
      <div class="flex flex-wrap items-center gap-4 mt-10">
        <a
          href="#work"
          class="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          View work
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a
          href="#contact"
          class="inline-flex items-center px-6 py-3 rounded-lg border border-border text-text-secondary text-sm font-medium hover:text-text-primary hover:border-text-secondary transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  </div>
</section>
