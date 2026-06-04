<script lang="ts">
	import type { Skills } from '$lib/data/skills';
	const { skills }: { skills: Skills } = $props();
</script>

<section id="skills" class="py-20 bg-base-200">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold tracking-tight text-center">Skills & Expertise</h2>
		<div class="divider mb-12"></div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="card bg-base-100">
				<div class="card-body">
					<h3 class="card-title font-semibold text-base">Programming Languages</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.languages as skill}
							<span class="badge leading-relaxed {skill.tier === 'primary' ? 'badge-primary badge-lg' : 'badge-ghost badge-md'}">{skill.name}</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="card bg-base-100">
				<div class="card-body">
					<h3 class="card-title font-semibold text-base">Frameworks & Libraries</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.frameworks as skill}
							<span class="badge leading-relaxed {skill.tier === 'primary' ? 'badge-primary badge-lg' : 'badge-ghost badge-md'}">{skill.name}</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="card bg-base-100">
				<div class="card-body">
					<h3 class="card-title font-semibold text-base">Tools & Platforms</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.tools as skill}
							<span class="badge leading-relaxed {skill.tier === 'primary' ? 'badge-primary badge-lg' : 'badge-ghost badge-md'}">{skill.name}</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="card bg-base-100">
				<div class="card-body">
					<h3 class="card-title font-semibold text-base">Domains & Concepts</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.domains as skill}
							<span class="badge leading-relaxed {skill.tier === 'primary' ? 'badge-primary badge-lg' : 'badge-ghost badge-md'}">{skill.name}</span>
						{/each}
					</div>
				</div>
			</div>
		</div>

		{#if skills.certifications && skills.certifications.length > 0}
			<div class="card bg-base-100 mt-6">
				<div class="card-body">
					<h3 class="card-title font-semibold text-base">Certifications & Recognition</h3>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each skills.certifications as cert}
							<span class="badge leading-relaxed {cert.tier === 'primary' ? 'badge-primary badge-lg' : 'badge-ghost badge-md'}">{cert.name}</span>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
