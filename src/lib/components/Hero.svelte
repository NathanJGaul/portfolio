<script lang="ts">
	import portraitImg from '$lib/images/portrait-nobg.png?enhanced';
</script>

<section id="hero" class="min-h-dvh flex items-center relative overflow-hidden">
	<div class="hero-content flex-col lg:flex-row-reverse items-center max-w-6xl mx-auto gap-12 py-20 px-4 w-full">
		<div class="relative w-full max-w-sm shrink-0">
			<enhanced:img
				src={portraitImg}
				sizes="(min-width: 1024px) 384px, 100vw"
				class="w-full"
				alt="Nathan Gaul"
			/>
		</div>
		<div class="w-full lg:w-7/12 max-w-xl">
			<p class="text-xs font-semibold tracking-widest uppercase text-base-content/40 mb-3">Defense Software Engineering Lead</p>
			<h1 class="text-5xl md:text-6xl font-bold tracking-tight leading-tight">Nathan Gaul</h1>
			<p class="text-xl md:text-2xl mt-2 font-medium text-base-content/70">
				Full-stack &middot; C2 systems &middot; AI pipelines &middot; Active TS/SCI
			</p>
			<div class="divider my-4"></div>
			<p class="text-base leading-relaxed text-base-content/60 max-w-prose">
				Defense software engineering leader with 8 years of full-stack development and operational test experience. Led tri-service evaluation of the DoD's first Joint Cyber C2 platform, translating field requirements into test architectures that resolved 6 critical deficiencies for 23,000 warfighters. Deployed production GPT-4 pipelines at the AF-MIT AI Accelerator, cutting 800+ hours of annual manual reporting. Currently building C#/.NET and Python applications for DoD clients.
			</p>
			<div class="flex flex-wrap items-center gap-3 mt-8">
				<a href="#contact" class="btn btn-primary">Get in touch</a>
				<a href="#projects" class="btn btn-outline">View Projects</a>
				<a
					href="https://www.linkedin.com/in/nathanjgaul/"
					target="_blank"
					rel="noreferrer"
					class="btn btn-ghost btn-circle"
					aria-label="LinkedIn"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current"
						><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						></path></svg
					>
				</a>
				<a
					href="https://github.com/nathanjgaul"
					target="_blank"
					rel="noreferrer"
					class="btn btn-ghost btn-circle"
					aria-label="GitHub"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current"
						><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						></path></svg
					>
				</a>
			</div>
		</div>
	</div>
</section>

