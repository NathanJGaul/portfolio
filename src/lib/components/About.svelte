<script lang="ts">
	import { browser } from '$app/environment';
	import StatBar from '$lib/components/StatBar.svelte';

	let isDarkMode = $state(browser && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false);
</script>

<section id="about" class="py-16">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold mb-2 text-center">About Me</h2>
		<div class="flex justify-center mb-10">
			<span class="block w-16 h-1 bg-primary rounded"></span>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
			<!-- Bio -->
			<div class="lg:col-span-3 card bg-base-100 shadow-xl">
				<div class="card-body">
					<p class="text-lg leading-relaxed">
						I'm a software engineer with a background that spans defense systems, AI research, and
						full-stack web development. I spent a decade as an Air Force officer, where I led
						engineering programs, directed operational testing for major defense acquisitions, and
						conducted AI research in collaboration with MIT. I now build production software at DS2,
						developing mission-planning tools for government clients.
					</p>
					<p class="text-lg leading-relaxed mt-4">
						My technical work ranges from training deep learning models on synthetically generated
						imagery to building React and Svelte web applications to developing Windows desktop tools
						in C# and WPF. I'm comfortable across the stack and across domains — from writing Python
						data pipelines to designing system architecture to shipping user-facing features.
					</p>
				</div>
			</div>

			<!-- Quick facts -->
			<div class="lg:col-span-2 card bg-base-100 shadow-xl">
				<div class="card-body">
					<h3 class="card-title font-semibold text-lg mb-2">Quick Facts</h3>
					<ul class="space-y-3 text-sm">
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Education:</span> MS Electrical Engineering (Software
								Engineering Focus), AFIT</span
							>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Education:</span> BS Electrical Engineering, University
								of Idaho</span
							>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span
								><span class="font-medium">Currently:</span> Software Engineer at DS2, Niceville FL</span
							>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span
								><span class="font-medium">Former:</span> USAF Officer (O-4), AI Research Fellow at
								MIT</span
							>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span
								><span class="font-medium">Clearance:</span> Active Top Secret / SCI</span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Stat bar -->
		<div class="mt-8">
			<StatBar />
		</div>
	</div>
</section>

