<script lang="ts">
	import portraitImg from '$lib/images/portrait-nobg.png?enhanced';
	import MountainBackdrop from '$lib/components/MountainBackdrop.svelte';
	import type { Component } from 'svelte';

	let {
		backdrop = MountainBackdrop,
		backdropMargin = 5
	}: {
		/** Backdrop canvas component to render behind the hero. Defaults to MountainBackdrop. */
		backdrop?: Component;
		/** Margin (in Tailwind spacing units, 1 unit = 0.25rem) the backdrop extends beyond the image. */
		backdropMargin?: number;
	} = $props();
</script>

<div id="hero" class="hero min-h-screen relative overflow-hidden">
	<div class="hero-content flex-col lg:flex-row-reverse items-center max-w-6xl gap-12 py-20">
		<div class="relative w-full max-w-sm">
			<div class="absolute" style="inset: -{backdropMargin * 0.25}rem;">
				<svelte:component this={backdrop} />
			</div>
			<enhanced:img
				src={portraitImg}
				sizes="(min-width: 1024px) 384px, 100vw"
				class="w-full"
				alt="Nathan Gaul"
			/>
			<div
				class="absolute inset-0"
				style="background: radial-gradient(ellipse 75% 85% at 50% 45%, transparent 55%, var(--color-base-100) 95%);"
			></div>
		</div>
		<div class="w-full lg:w-7/12 max-w-xl">
			<h1 class="text-5xl font-bold">Nathan Gaul</h1>
			<p class="text-2xl mt-2 font-semibold">Software & Autonomy Engineer</p>
			<p class="text-base-content/60 mt-1 text-lg">
				Defense systems &middot; AI research &middot; Full-stack web
			</p>
			<div class="divider my-3"></div>
			<p class="text-lg leading-relaxed text-left">
				I build software for high-stakes environments, including computer vision pipelines for aircraft inspection, LLM research tools for the Air Force, and full-stack web applications. I have an MS in Electrical Engineering from AFIT and a decade of experience in defense programs, AI research, and production software.
			</p>
			<div class="flex flex-wrap gap-3 mt-6">
				<a href="#contact" class="btn btn-primary">Get in touch</a>
				<a href="#projects" class="btn btn-outline">View Projects</a>
				<!-- <a
					href="/resume.pdf"
					download
					class="btn btn-ghost gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
						<polyline points="7 10 12 15 17 10"></polyline>
						<line x1="12" y1="15" x2="12" y2="3"></line>
					</svg>
					Resume
				</a> -->
				<a
					href="https://www.linkedin.com/in/nathanjgaul/"
					target="_blank"
					rel="noreferrer"
					class="btn btn-ghost btn-circle"
					aria-label="LinkedIn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						></path></svg
					>
				</a>
			</div>
		</div>
	</div>
	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="6 9 12 15 18 9"></polyline>
		</svg>
	</div>
</div>
