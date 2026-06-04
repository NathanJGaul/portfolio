<script lang="ts">
	import { onMount } from 'svelte';

	let activeSection = $state('');

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			{ rootMargin: '-40% 0px -55% 0px' }
		);

		const sections = document.querySelectorAll('section[id]');
		for (const section of sections) observer.observe(section);

		return () => observer.disconnect();
	});
</script>

<nav class="navbar bg-base-100/80 backdrop-blur-sm sticky top-0 z-50 border-b border-base-200">
	<div class="navbar-start">
		<div class="dropdown lg:hidden">
			<button tabindex="0" class="btn btn-ghost btn-circle" aria-label="Menu">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
			>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</div>
		<a href="#hero" class="btn btn-ghost text-lg font-semibold tracking-tight">Nathan Gaul</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-1">
			<li><a href="#about" class="{activeSection === 'about' ? 'text-primary font-medium' : ''}">About</a></li>
			<li><a href="#experience" class="{activeSection === 'experience' ? 'text-primary font-medium' : ''}">Experience</a></li>
			<li><a href="#projects" class="{activeSection === 'projects' ? 'text-primary font-medium' : ''}">Projects</a></li>
			<li><a href="#skills" class="{activeSection === 'skills' ? 'text-primary font-medium' : ''}">Skills</a></li>
			<li><a href="#contact" class="{activeSection === 'contact' ? 'text-primary font-medium' : ''}">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<label class="flex items-center gap-2 cursor-pointer">
			<input
				type="checkbox"
				class="theme-controller toggle toggle-sm"
				data-toggle-theme="dim,nord"
				data-act-class="ACTIVECLASS"
			/>
			<span class="text-xs font-medium opacity-60 hidden sm:inline">Theme</span>
		</label>
	</div>
</nav>
