<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	let { children } = $props();

	onMount(() => {
		themeChange(false);
	})
</script>

{@render children()}
