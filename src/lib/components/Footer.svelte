<script lang="ts">
	import { Mail, Linkedin, MapPin, Phone } from 'lucide-svelte';
</script>

<footer class="border-t border-black mt-auto">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-lg font-semibold mb-4 [font-variant:small-caps]">Simulacro Tech</h3>
				<p class="text-sm text-gray-600">
					Human-centered AI and data consulting.
				</p>
			</div>

			<div>
				<h3 class="text-lg font-semibold mb-4">Contact</h3>
				<div class="space-y-2 text-sm">
					<a href="mailto:contact@simulacro.tech" class="flex items-center gap-2 hover:underline">
						<Mail size={16} />
						contact@simulacro.tech
					</a>
					<a href="tel:+5561981334405" class="flex items-center gap-2 hover:underline">
						<Phone size={16} />
						+55 61 98133-4405
					</a>
					<div class="flex items-center gap-2">
						<MapPin size={16} />
						London, UK / Brasília, Brazil
					</div>
				</div>
			</div>

			<div>
				<h3 class="text-lg font-semibold mb-4">Connect</h3>
				<div class="flex gap-4">
					<a
						href="https://linkedin.com/in/gustavoarcos"
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline"
					>
						<Linkedin size={20} />
					</a>
				</div>
			</div>
		</div>

		<div class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
			<p>&copy; {new Date().getFullYear()} Simulacro Tech. All rights reserved.</p>
		</div>
	</div>
</footer>

