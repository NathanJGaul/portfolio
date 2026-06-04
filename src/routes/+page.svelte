<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';

	import projects from '$lib/data/projects';
	import skills from '$lib/data/skills';
	import experience from '$lib/data/experience';
</script>

<Navbar />

<main id="main-content">
	<Hero />
	<About />
	<Experience {experience} />
	<Projects />
	<Skills {skills} />
	<Contact />
</main>

<Footer />
