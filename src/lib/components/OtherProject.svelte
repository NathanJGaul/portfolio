<script lang="ts">
  const { project } = $props();
</script>

<div class="card card-side bg-base-100 shadow-lg">
  <figure class="w-1/3"><img src={project.image} alt={project.title} /></figure>
  <div class="card-body w-2/3">
    <h3 class="card-title text-lg">{project.title}</h3>
    <p class="text-sm">{project.description}</p>
    <div class="flex flex-wrap gap-1 mt-1">
      {#each project.tech as tech}
        <span class="badge badge-sm">{tech}</span>
      {/each}
    </div>
    <div class="card-actions justify-end">
      <a href={project.github} class="btn btn-sm btn-outline">View</a>
    </div>
  </div>
</div>