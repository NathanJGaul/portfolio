<script lang="ts">
	import type { Skills } from '$lib/data/skills';
	const { skills }: { skills: Skills } = $props();
</script>

<section id="skills" class="py-16 bg-base-200">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold mb-2 text-center">Skills & Expertise</h2>
		<div class="flex justify-center mb-10">
			<span class="block w-16 h-1 bg-primary rounded"></span>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<!-- Languages -->
			<div class="card bg-base-100 shadow-xl border-t-2 border-primary">
				<div class="card-body">
					<h3 class="card-title font-semibold">Programming Languages</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.languages as skill}
							<span
								class="badge leading-relaxed {skill.tier === 'primary'
									? 'badge-primary badge-lg'
									: 'badge-ghost badge-md'}">{skill.name}</span
							>
						{/each}
					</div>
				</div>
			</div>

			<!-- Frameworks -->
			<div class="card bg-base-100 shadow-xl border-t-2 border-primary">
				<div class="card-body">
					<h3 class="card-title font-semibold">Frameworks & Libraries</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.frameworks as skill}
							<span
								class="badge leading-relaxed {skill.tier === 'primary'
									? 'badge-primary badge-lg'
									: 'badge-ghost badge-md'}">{skill.name}</span
							>
						{/each}
					</div>
				</div>
			</div>

			<!-- Tools -->
			<div class="card bg-base-100 shadow-xl border-t-2 border-primary">
				<div class="card-body">
					<h3 class="card-title font-semibold">Tools & Platforms</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.tools as skill}
							<span
								class="badge leading-relaxed {skill.tier === 'primary'
									? 'badge-primary badge-lg'
									: 'badge-ghost badge-md'}">{skill.name}</span
							>
						{/each}
					</div>
				</div>
			</div>

			<!-- Domains -->
			<div class="card bg-base-100 shadow-xl border-t-2 border-primary">
				<div class="card-body">
					<h3 class="card-title font-semibold">Domains & Concepts</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.domains as skill}
							<span
								class="badge leading-relaxed {skill.tier === 'primary'
									? 'badge-primary badge-lg'
									: 'badge-ghost badge-md'}">{skill.name}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
