<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded focus:outline-none">
  Skip to content
</a>

{@render children()}
