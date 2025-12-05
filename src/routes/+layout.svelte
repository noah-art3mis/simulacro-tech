<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`${base}/simulacro.png`} />
	<title>Simulacro Tech - Interdisciplinary Data & AI Consultancy</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navigation />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
