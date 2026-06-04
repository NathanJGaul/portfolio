<script lang="ts">
	import StatBar from '$lib/components/StatBar.svelte';
</script>

<section id="about" class="py-20">
	<div class="container mx-auto px-4 max-w-6xl">
		<h2 class="text-4xl font-bold tracking-tight text-center">About Me</h2>
		<div class="divider mb-12"></div>

		<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
			<div class="lg:col-span-3 card bg-base-100">
				<div class="card-body px-0">
					<p class="text-base leading-relaxed text-base-content/70">
						Defense software engineering leader with 8 years of full-stack development and operational test experience, all with an active TS/SCI clearance. Led tri-service evaluation of the DoD's first Joint Cyber C2 platform ($765M, 23K warfighters), translating field requirements from Air Force, Army, and Navy stakeholders into test architectures that resolved 6 critical deficiencies. At the AF-MIT AI Accelerator, deployed a production GPT-4 pipeline that replaced 800+ hours of annual manual reporting for USAF operations. Currently building production C#/.NET and Python applications at DS2 for DoD clients.
					</p>
					<p class="text-base leading-relaxed text-base-content/70 mt-4">
						My technical work ranges from GPU-accelerated computer vision systems for real-time airfield damage detection to full-stack React and Svelte web applications to LLM-powered operational tooling. I'm comfortable across the stack and across domains — from Python data pipelines and deep learning models to C#/.NET desktop applications and system architecture.
					</p>
				</div>
			</div>

			<div class="lg:col-span-2 card bg-base-200">
				<div class="card-body">
					<h3 class="card-title font-semibold text-base mb-3">Quick Facts</h3>
					<ul class="space-y-3 text-sm">
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Currently:</span> Software Engineer at DS2, Niceville FL</span>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Clearance:</span> Active Top Secret / SCI</span>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Education:</span> MS Electrical Engineering, AFIT</span>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Education:</span> BS Electrical Engineering, University of Idaho</span>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Former:</span> USAF Officer, AI Research Fellow at MIT</span>
						</li>
						<li class="flex gap-3">
							<span class="text-primary shrink-0 mt-0.5">▸</span>
							<span><span class="font-medium">Recognition:</span> Stanford AI Professional Certificate, IEEE Published</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="mt-10">
			<StatBar />
		</div>
	</div>
</section>
