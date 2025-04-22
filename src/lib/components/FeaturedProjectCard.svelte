<script lang="ts">
  let { project } = $props();
</script>

<div class="card bg-base-100 shadow-xl overflow-hidden">
  <figure><img src={project.image} alt={project.title} /></figure>
  <div class="card-body">
    <h3 class="card-title">{project.title}</h3>
    <p>{project.description}</p>
    <div class="flex flex-wrap gap-2 mt-2">
      {#each project.tech as tech}
        <span class="badge badge-primary">{tech}</span>
      {/each}
    </div>
    <div class="card-actions justify-end mt-4">
      <a href={project.github} class="btn btn-primary">View on GitHub</a>
    </div>
  </div>
</div>