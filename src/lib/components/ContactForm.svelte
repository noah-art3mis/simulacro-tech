<script lang="ts">
	import { Send } from 'lucide-svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let error = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		error = '';

		if (!name || !email || !message) {
			error = 'Please fill in all fields.';
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			error = 'Please enter a valid email address.';
			return;
		}

		// In a real application, you would send this to a backend
		console.log('Form submitted:', { name, email, message });
		submitted = true;
		name = '';
		email = '';
		message = '';
	}
</script>

<div class="w-full max-w-2xl mx-auto">
	{#if submitted}
		<div class="bg-gray-100 border border-black p-6 text-center">
			<p class="text-lg font-semibold mb-2">Thank you for your message!</p>
			<p class="text-sm text-gray-600">We'll get back to you soon.</p>
			<button
				type="button"
				onclick={() => (submitted = false)}
				class="mt-4 text-sm underline hover:no-underline"
			>
				Send another message
			</button>
		</div>
	{:else}
		<form onsubmit={handleSubmit} class="space-y-6">
			<div>
				<label for="name" class="block text-sm font-medium mb-2">Name</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					required
					class="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
				/>
			</div>

			<div>
				<label for="email" class="block text-sm font-medium mb-2">Email</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					class="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black"
				/>
			</div>

			<div>
				<label for="message" class="block text-sm font-medium mb-2">Message</label>
				<textarea
					id="message"
					bind:value={message}
					required
					rows="6"
					class="w-full px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
				></textarea>
			</div>

			{#if error}
				<div class="text-sm text-red-600">{error}</div>
			{/if}

			<button
				type="submit"
				class="w-full bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
			>
				Send Message
				<Send size={18} />
			</button>
		</form>
	{/if}
</div>

