<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import WhatIBuild from '$lib/components/WhatIBuild.svelte';
  import HowIThink from '$lib/components/HowIThink.svelte';
  import ProjectGrid from '$lib/components/ProjectGrid.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main id="main-content">
  <Hero />
  <WhatIBuild />
  <HowIThink />
  <ProjectGrid />
  <Contact />
</main>

<Footer />
