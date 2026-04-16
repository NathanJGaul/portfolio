<script lang="ts">
	import { browser } from '$app/environment';

	import Hero from '$lib/components/Hero.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import About from '../lib/components/About.svelte';
	import Projects from '../lib/components/Projects.svelte';

	import projects from '$lib/data/projects';
	import skills from '$lib/data/skills';
	import experience from '$lib/data/experience';

	let isDarkMode = $state(browser && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false);
</script>

<Navbar {isDarkMode} />

<!-- Hero Section -->
<Hero />

<!-- About Section -->
<About />

<!-- Experience Section -->
<Experience {experience} />

<!-- Projects Section -->
<Projects />

<!-- Skills Section -->
<Skills {skills} />

<!-- Contact Section -->
<Contact />

<!-- Footer -->
<Footer />
