<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	let { children } = $props();

	onMount(() => {
		themeChange(false);
	});
</script>

<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-content focus:rounded focus:outline-none">
	Skip to content
</a>

{@render children()}
