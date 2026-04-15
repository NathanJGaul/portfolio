<script lang="ts">
	import type { ExperienceEntry } from '$lib/data/experience';
	const { experience }: { experience: ExperienceEntry[] } = $props();

	function borderColor(type: ExperienceEntry['type']): string {
		if (type === 'software') return 'border-primary';
		if (type === 'research') return 'border-secondary';
		return 'border-accent';
	}
</script>

<section id="experience" class="py-16">
	<div class="container mx-auto px-4 max-w-4xl">
		<h2 class="text-4xl font-bold mb-2 text-center">Work History</h2>
		<div class="flex justify-center mb-12">
			<span class="block w-16 h-1 bg-primary rounded"></span>
		</div>

		<div class="relative">
			<!-- Vertical line -->
			<div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-base-300 -translate-x-1/2 hidden md:block"></div>

			<div class="flex flex-col gap-10">
				{#each experience as entry, i}
					<div
						class="relative flex flex-col {i % 2 === 0
							? 'md:flex-row'
							: 'md:flex-row-reverse'} items-start gap-6"
					>
						<!-- Timeline dot -->
						<div
							class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-base-100 shadow -translate-x-1/2 top-5 hidden md:block"
						></div>

						<!-- Spacer for center alignment -->
						<div class="hidden md:block md:w-1/2"></div>

						<!-- Card -->
						<div class="w-full md:w-1/2 {i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}">
							<div class="card bg-base-100 shadow-lg border-l-4 {borderColor(entry.type)}">
								<div class="card-body py-5 px-6">
									<div class="flex flex-wrap justify-between items-start gap-2">
										<div>
											<h3 class="card-title text-lg leading-tight">{entry.role}</h3>
											<p class="text-base-content/70 font-medium">{entry.company}</p>
										</div>
										<div class="flex flex-wrap gap-1 justify-end">
											<span class="badge badge-outline badge-sm whitespace-nowrap">{entry.period}</span>
											{#if entry.badge}
												<span class="badge badge-secondary badge-sm whitespace-nowrap">{entry.badge}</span>
											{/if}
										</div>
									</div>
									<ul class="mt-3 space-y-2">
										{#each entry.bullets as bullet}
											<li class="flex gap-2 text-sm leading-relaxed">
												<span class="text-primary mt-0.5 shrink-0">▸</span>
												<span>{bullet}</span>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
