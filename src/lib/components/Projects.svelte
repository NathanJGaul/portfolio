<script lang="ts">
	import { browser } from '$app/environment';
	
	import FeaturedProjectCard from '$lib/components/FeaturedProjectCard.svelte';
	import OtherProjectCard from '$lib/components/OtherProject.svelte';

	import projects from '$lib/data/projects';

	let isDarkMode = $state(browser && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false);
</script>

<section id="projects" class="py-16 bg-base-200">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold mb-2 text-center">Projects</h2>
		<div class="flex justify-center mb-3">
			<span class="block w-16 h-1 bg-primary rounded"></span>
		</div>
		<p class="text-center mb-10 opacity-70">A selection of personal and open-source work</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects.filter((p) => p.featured) as project}
				<FeaturedProjectCard {project} />
			{/each}
		</div>

		{#if projects.filter((p) => !p.featured).length > 0}
			<h3 class="text-2xl font-bold mt-14 mb-6 text-center">Other Projects</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each projects.filter((p) => !p.featured) as project}
					<OtherProjectCard {project} />
				{/each}
			</div>
		{/if}
	</div>
</section>

