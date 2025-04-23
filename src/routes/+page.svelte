<script lang="ts">
	import FeaturedProjectCard from '$lib/components/FeaturedProjectCard.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import OtherProjectCard from '$lib/components/OtherProject.svelte';

  import Navbar from '$lib/components/Navbar.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Footer from '$lib/components/Footer.svelte';
  

  import projects from '$lib/data/projects';
  import skills from '$lib/data/skills';
	import Contact from '$lib/components/Contact.svelte';

  // Theme controller for light/dark mode
  let isDarkMode = $state(false);
</script>

<Navbar {isDarkMode} />

<!-- Hero Section -->
<Hero />

<!-- About Section -->
<section id="about" class="py-16">
  <div class="container mx-auto px-4 max-w-6xl">
    <h2 class="text-4xl font-bold mb-8 text-center">About Me</h2>
    
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p class="text-lg">
          With over 8 years of experience in software development and machine learning, I've worked on projects ranging from small 
          startups to large enterprise solutions. I hold a Master's degree in Computer Science with a focus on Machine Learning 
          and have published research on efficient model training techniques for large language models.
        </p>
        <p class="text-lg mt-4">
          My approach combines strong theoretical foundations with practical engineering skills, allowing me to bridge the gap 
          between cutting-edge research and production-ready applications. I'm particularly interested in leveraging AI to 
          enhance developer productivity, automate repetitive tasks, and create intuitive developer experiences.
        </p>
        <p class="text-lg mt-4">
          When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or mentoring 
          junior developers. I'm always looking for new challenges and opportunities to learn and grow.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Featured Projects Section -->
<section id="projects" class="py-16 bg-base-200">
  <div class="container mx-auto px-4 max-w-6xl">
    <h2 class="text-4xl font-bold mb-2 text-center">Featured Projects</h2>
    <p class="text-center mb-8 opacity-80">Check out some of my recent work</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects.filter(p => p.featured) as project}
        <FeaturedProjectCard {project} />
      {/each}
    </div>
    
    <h2 class="text-3xl font-bold mt-16 mb-8 text-center">Other Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each projects.filter(p => !p.featured) as project}
        <OtherProjectCard {project} />
      {/each}
    </div>
  </div>
</section>

<!-- Skills Section -->
<Skills {skills} />

<!-- Contact Section -->
<Contact />

<!-- Footer -->
<Footer />
