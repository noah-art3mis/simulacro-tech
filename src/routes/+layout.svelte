<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Simulacro Tech</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navigation />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
