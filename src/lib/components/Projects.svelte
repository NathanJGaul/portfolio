<script lang="ts">
	import FeaturedProjectCard from '$lib/components/FeaturedProjectCard.svelte';
	import OtherProjectCard from '$lib/components/OtherProject.svelte';

	import projects from '$lib/data/projects';
</script>

<section id="projects" class="py-20">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold tracking-tight text-center">Projects</h2>
		<div class="divider mb-3"></div>
		<p class="text-center text-base-content/50 mb-12">A selection of personal and open-source work</p>

		<div class="flex flex-wrap justify-center gap-8">
			{#each projects.filter((p) => p.featured) as project}
				<div class="w-full min-w-0 md:w-1/2 lg:w-1/2 flex">
					<FeaturedProjectCard {project} />
				</div>
			{/each}
		</div>

		{#if projects.filter((p) => !p.featured).length > 0}
			<h3 class="text-2xl font-bold mt-16 mb-8 text-center tracking-tight">Other Projects</h3>
			<div class="flex flex-wrap justify-center gap-6">
				{#each projects.filter((p) => !p.featured) as project}
					<div class="w-full min-w-0 md:w-1/2 lg:w-1/3 flex">
						<OtherProjectCard {project} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
