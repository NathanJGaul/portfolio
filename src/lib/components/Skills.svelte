<script lang="ts">
  const { skills } = $props();
</script>

<section id="skills" class="py-16">
  <div class="container mx-auto px-4 max-w-6xl">
    <h2 class="text-4xl font-bold mb-8 text-center">Skills & Expertise</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Languages -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Programming Languages</h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.languages as skill}
              <span class="badge badge-lg">{skill}</span>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Frameworks -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Frameworks & Libraries</h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.frameworks as skill}
              <span class="badge badge-lg">{skill}</span>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Tools -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Tools & Platforms</h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.tools as skill}
              <span class="badge badge-lg">{skill}</span>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Concepts -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Domains & Concepts</h3>
          <div class="flex flex-wrap gap-2">
            {#each skills.concepts as skill}
              <span class="badge badge-lg">{skill}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>