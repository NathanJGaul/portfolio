<script lang="ts">
  import { onMount } from 'svelte';
  import { prepare, layout } from '@chenglou/pretext';
  import { experiments } from '$lib/data/experiments';

  const phrases = [
    { id: 'mission', short: 'systems that have to work', full: 'I care about systems that have to work. Not abstractly, I mean the kind of work where failure means a mission doesn\'t happen, a report doesn\'t get filed, a decision gets made without the right data.' },
    { id: 'arc', short: 'hardware to AI', full: 'I started in hardware, lasers, thermal management, real-time control systems at AFRL, then moved through the stack to AI pipelines, web applications, and C2 architectures.' },
    { id: 'operators', short: 'operator trust', full: 'The hard part is rarely the technology. It\'s building something that actual operators trust enough to use when it counts.' },
    { id: 'mit', short: 'what MIT taught me', full: 'At the AF-MIT AI Accelerator, I watched non-technical operators adopt a RAG pipeline I built because it fit their workflow instead of fighting it. The best model is worthless if it doesn\'t integrate into how people actually operate.' },
    { id: 'foundation', short: 'physics foundation', full: 'My electrical engineering background (MS from AFIT) gives me a physics-level foundation. My time in operational test taught me how to measure whether something actually works. Both inform every system I build.' },
  ];

  let expanded = $state<Record<string, boolean>>({});
  let hovering = $state<string | null>(null);
  let sizes = $state<Record<string, { width: number; height: number }>>({});

  onMount(() => {
    if (!experiments.manifestoColumn) return;
    for (const p of phrases) {
      const pre = prepare(p.short, '18px "Geist Sans"');
      const { height, lineCount } = layout(pre, 9999, 24);
      const w = pre ? 9999 : 0; // natural width, approximate
      sizes[p.id] = { width: 180 + Math.random() * 120, height };
    }
  });

  const toggle = (id: string) => {
    expanded[id] = !expanded[id];
    expanded = { ...expanded };
  };
</script>

<section id="thinking" class="py-24 md:py-32">
  <div class="max-w-6xl mx-auto px-4">
    <div class="max-w-2xl">
      <p class="font-mono text-xs text-accent/80 mb-4 tracking-widest uppercase">02</p>
      <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
        How I Think
      </h2>
    </div>

    {#if experiments.manifestoColumn}
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <p class="text-base text-text-secondary leading-relaxed">
            I care about systems that have to work. Not abstractly, I mean
            the kind of work where failure means a mission doesn't happen,
            a report doesn't get filed, a decision gets made without the
            right data. That constraint is what I optimize for.
          </p>
          <p class="text-base text-text-secondary leading-relaxed">
            I started in hardware, lasers, thermal management, real-time
            control systems at AFRL, then moved through the stack to
            AI pipelines, web applications, and C2 architectures. That arc
            taught me that the hard part is rarely the technology. It's
            building something that actual operators trust enough to use
            when it counts.
          </p>
          <p class="text-base text-text-secondary leading-relaxed">
            At the AF-MIT AI Accelerator, I watched non-technical operators
            adopt a GPT-4 pipeline I built because it fit their workflow
            instead of fighting it. That experience shaped how I think about
            AI: the best model in the world is worthless if it doesn't
            integrate into how people actually operate.
          </p>
          <p class="text-base text-text-secondary leading-relaxed">
            My electrical engineering background (MS from AFIT) gives me a
            physics-level foundation. My time in operational test taught me
            how to measure whether something actually works. Both inform
            every system I build.
          </p>
        </div>
        <div class="relative min-h-[400px]">
          <div class="sticky top-28 space-y-3">
            {#each phrases as phrase}
              <button
                onclick={() => toggle(phrase.id)}
                onmouseenter={() => (hovering = phrase.id)}
                onmouseleave={() => (hovering = null)}
                class="block w-full text-left transition-all duration-300 rounded-lg {expanded[phrase.id] ? 'bg-accent/5 p-4' : (hovering === phrase.id ? 'bg-surface-elevated p-0' : 'bg-transparent p-0')}"
              >
                {#if expanded[phrase.id]}
                  <p class="text-sm text-text-primary leading-relaxed">{phrase.full}</p>
                  <span class="text-[11px] text-text-secondary/50 mt-2 inline-block font-mono">click to collapse</span>
                {:else}
                  <span
                    class="text-sm font-medium transition-colors inline-block px-3 py-1.5 rounded-md"
                    class:text-accent={hovering === phrase.id}
                    class:text-text-secondary={hovering !== phrase.id}
                    class:bg-surface-elevated={hovering === phrase.id}
                  >
                    {phrase.short}
                  </span>
                {/if}
              </button>
            {/each}
          </div>
        </div>
      </div>
    {:else}
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <p class="text-base text-text-secondary leading-relaxed">
            I care about systems that have to work. Not abstractly, I mean
            the kind of work where failure means a mission doesn't happen,
            a report doesn't get filed, a decision gets made without the
            right data. That constraint is what I optimize for.
          </p>
          <p class="text-base text-text-secondary leading-relaxed">
            I started in hardware, lasers, thermal management, real-time
            control systems at AFRL, then moved through the stack to
            AI pipelines, web applications, and C2 architectures. That arc
            taught me that the hard part is rarely the technology. It's
            building something that actual operators trust enough to use
            when it counts.
          </p>
        </div>
        <div class="space-y-6">
          <p class="text-base text-text-secondary leading-relaxed">
            At the AF-MIT AI Accelerator, I watched non-technical operators
            adopt a GPT-4 pipeline I built because it fit their workflow
            instead of fighting it. That experience shaped how I think about
            AI: the best model in the world is worthless if it doesn't
            integrate into how people actually operate.
          </p>
          <p class="text-base text-text-secondary leading-relaxed">
            My electrical engineering background (MS from AFIT) gives me a
            physics-level foundation. My time in operational test taught me
            how to measure whether something actually works. Both inform
            every system I build.
          </p>
        </div>
      </div>
    {/if}
  </div>
</section>
