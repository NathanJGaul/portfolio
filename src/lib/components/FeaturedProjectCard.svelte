<script lang="ts">
	import type { Project } from '$lib/data/projects';
	const { project }: { project: Project } = $props();
</script>

<div class="card bg-base-100 overflow-hidden h-full">
	{#if project.image}
		<figure><img src={project.image} alt={project.title} /></figure>
	{:else}
		<div class="h-40 bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center">
			<span class="text-5xl opacity-10 font-mono select-none">&lt;/&gt;</span>
		</div>
	{/if}
	<div class="card-body">
		<h3 class="card-title text-xl">{project.title}</h3>
		<p class="leading-relaxed text-base-content/70 text-sm">{project.description}</p>
		{#if project.highlight}
			<div class="bg-primary/5 text-primary rounded px-3 py-2 text-sm font-medium mt-2 leading-snug">
				{project.highlight}
			</div>
		{/if}
		<div class="flex flex-wrap gap-2 mt-3">
			{#each project.tech as tech}
				<span class="badge badge-ghost badge-sm">{tech}</span>
			{/each}
		</div>
		<div class="card-actions justify-end mt-4">
			{#if project.liveUrl}
				<a href={project.liveUrl} class="btn btn-sm btn-outline" target="_blank" rel="noreferrer">Live Demo</a>
			{/if}
			{#if project.github}
				<a href={project.github} class="btn btn-sm btn-primary" target="_blank" rel="noreferrer">View on GitHub</a>
			{/if}
		</div>
	</div>
</div>
