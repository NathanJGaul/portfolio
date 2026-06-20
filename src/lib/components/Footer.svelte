<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="py-12 border-t border-border">
  <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p class="text-xs text-text-secondary/50">
      &copy; {year} Nathan Gaul
    </p>
    <p class="text-xs text-text-secondary/50 font-mono">
      Built with SvelteKit &bull; Deployed on Cloudflare
    </p>
  </div>
</footer>
