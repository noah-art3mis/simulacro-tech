<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let currentPath = $derived(page.url.pathname);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="border-b border-black">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<a href="/" class="text-xl font-semibold [font-variant:small-caps]">Simulacro Tech</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex space-x-8">
				{#each navItems as item}
					<a
						href={item.href}
						class="hover:underline {currentPath === item.href ? 'font-semibold' : ''}"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<button
				type="button"
				class="md:hidden p-2"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-black">
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each navItems as item}
					<a
						href={item.href}
						class="block px-3 py-2 hover:bg-gray-100 {currentPath === item.href ? 'font-semibold' : ''}"
						onclick={() => (mobileMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

