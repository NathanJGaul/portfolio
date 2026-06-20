<script lang="ts">
  import { onMount } from 'svelte';
  import { prepare, layout } from '@chenglou/pretext';
  import MountainBackdrop from '$lib/components/MountainBackdrop.svelte';
  import { experiments } from '$lib/data/experiments';

  let container: HTMLDivElement;
  let containerWidth = $state(800);
  let typed = $state('');
  let showCursor = $state(true);
  let done = $state(false);
  let reveal = $state(false);

  const fullText = "I build systems for the critical layer.";

  let prepared = $state<ReturnType<typeof prepare> | null>(null);

  onMount(() => {
    if (container) {
      containerWidth = container.clientWidth;
    }
    if (!experiments.terminalHero) return;

    prepared = prepare(fullText, `bold 48px "Geist Sans"`);

    let i = 0;
    const speed = 42;
    const iv = setInterval(() => {
      i++;
      typed = fullText.slice(0, i);
      if (i >= fullText.length) {
        clearInterval(iv);
        done = true;
        setTimeout(() => { reveal = true; }, 350);
      }
    }, speed);

    const ci = setInterval(() => {
      showCursor = !showCursor;
    }, 530);

    return () => { clearInterval(iv); clearInterval(ci); };
  });
</script>

<section
  id="hero"
  class="relative min-h-[100dvh] flex items-center overflow-hidden"
>
  <div
    class="absolute inset-0 transition-opacity duration-700"
    class:opacity-100={done}
    class:opacity-0={!done}
  >
    <MountainBackdrop opacity={0.6} color="#5299e0" showGrid={false} layers={4} speed={0.3} interactive={false} />
  </div>

  <div class="relative z-10 max-w-6xl mx-auto px-4 w-full pt-24 pb-20 md:pt-28 md:pb-24">
    <div class="max-w-2xl" bind:this={container}>
      {#if experiments.terminalHero}
        <p class="font-mono text-xs text-accent/80 mb-6 tracking-widest uppercase">
          nathanjgaul<span class="text-accent/50">/</span>about
        </p>
        <h1 class="font-mono text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-text-primary min-h-[1.2em]">
          {typed}<span
            class="inline-block w-[0.6em] h-[1.1em] bg-accent/80 align-middle ml-0.5"
            class:animate-pulse={showCursor}
            class:opacity-0={!showCursor || done}
          ></span>
        </h1>
        <div
          class="transition-all duration-500"
          class:opacity-100={reveal}
          class:opacity-0={!reveal}
          class:translate-y-0={reveal}
          class:translate-y-4={!reveal}
        >
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
      {:else}
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
      {/if}
    </div>
  </div>
</section>
