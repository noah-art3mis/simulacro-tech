<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { base } from '$app/paths';

	let { children } = $props();
	
	const iconPath = base ? `${base.replace(/\/$/, '')}/simulacro.png` : '/simulacro.png';
</script>

<svelte:head>
	<link rel="icon" href={iconPath} />
	<title>Simulacro Tech - Interdisciplinary Data & AI Consultancy</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navigation />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
