<script lang="ts">
	import type { ExperienceEntry } from '$lib/data/experience';
	const { experience }: { experience: ExperienceEntry[] } = $props();
</script>

<section id="experience" class="py-20 bg-base-200">
	<div class="container mx-auto px-4 max-w-4xl">
		<h2 class="text-4xl font-bold tracking-tight text-center">Work History</h2>
		<div class="divider mb-12"></div>

		<div class="relative">
			<div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-base-content/10 -translate-x-1/2 hidden md:block"></div>

			<div class="flex flex-col gap-8">
				{#each experience as entry, i}
					<div class="relative flex flex-col {i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6">
						<div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-base-200 -translate-x-1/2 top-6 hidden md:block"></div>

						<div class="hidden md:block md:w-1/2"></div>

						<div class="w-full md:w-1/2 {i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}">
							<div class="card bg-base-100">
								<div class="card-body py-5 px-6">
									<div class="flex flex-wrap justify-between items-start gap-2">
										<div>
											<h3 class="card-title text-lg leading-tight">{entry.role}</h3>
											<p class="text-base-content/50 text-sm font-medium">{entry.company}</p>
										</div>
										<div class="flex flex-wrap gap-1 justify-end">
											<span class="badge badge-ghost badge-sm whitespace-nowrap">{entry.period}</span>
											{#if entry.badge}
												<span class="badge badge-primary badge-sm whitespace-nowrap">{entry.badge}</span>
											{/if}
										</div>
									</div>
									<ul class="mt-3 space-y-2">
										{#each entry.bullets as bullet}
											<li class="flex gap-2 text-sm leading-relaxed text-base-content/70">
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
