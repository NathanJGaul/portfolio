<script lang="ts">
	import type { Project } from '$lib/data/projects';
	const { project }: { project: Project } = $props();
</script>

<div class="card bg-base-100 shadow-lg h-full border-t-2 border-secondary">
	<div class="card-body">
		<h3 class="card-title text-lg font-semibold">{project.title}</h3>
		<p class="text-sm leading-relaxed">{project.description}</p>
		{#if project.highlight}
			<div class="bg-secondary/10 text-secondary rounded px-3 py-2 text-sm font-medium mt-2">
				{project.highlight}
			</div>
		{/if}
		<div class="flex flex-wrap gap-1 mt-3">
			{#each project.tech as tech}
				<span class="badge badge-ghost badge-sm">{tech}</span>
			{/each}
		</div>
		<div class="card-actions justify-end mt-3">
			{#if project.github}
				<a href={project.github} class="btn btn-sm btn-outline" target="_blank" rel="noreferrer"
					>View on GitHub</a
				>
			{/if}
		</div>
	</div>
</div>
