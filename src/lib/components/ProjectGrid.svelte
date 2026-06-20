<script lang="ts">
  import projects from '$lib/data/projects';
</script>

<section id="projects" class="py-24 md:py-32 border-t border-border">
  <div class="max-w-6xl mx-auto px-4">
    <div class="max-w-xl mb-12">
      <p class="font-mono text-xs text-accent/80 mb-4 tracking-widest uppercase">Side</p>
      <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary">
        Projects
      </h2>
      <p class="text-text-secondary mt-4 leading-relaxed">
        Open-source and personal work that explores ideas I care about.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each projects as project}
        <div class="border border-border rounded-xl p-6 hover:border-accent/20 transition-colors">
          <h3 class="font-medium text-text-primary">{project.title}</h3>
          <p class="text-sm text-text-secondary mt-2 leading-relaxed">{project.description}</p>
          <div class="flex flex-wrap gap-1.5 mt-4">
            {#each project.tech as t}
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-secondary/70">{t}</span>
            {/each}
          </div>
          <div class="flex gap-3 mt-4">
            {#if project.github}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                class="text-xs text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Source
              </a>
            {/if}
            {#if project.liveUrl}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                class="text-xs text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                Live
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
