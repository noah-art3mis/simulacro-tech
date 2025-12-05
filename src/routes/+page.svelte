<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { Database, BarChart3, Code, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Simulacro Tech - Tech Data Consultancy</title>
</svelte:head>

<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
	<div class="text-center">
		<h1 class="text-5xl md:text-6xl font-bold mb-6">Simulacro Tech</h1>
		<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
			Transforming data into strategic insights. We help businesses unlock the power of their
			data through expert consulting and innovative solutions.
		</p>
		<a
			href="#contact"
			class="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
		>
			Get Started
			<ArrowRight size={20} />
		</a>
	</div>
</section>

<!-- Services Overview -->
<section class="bg-gray-50 py-24">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<Database size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">Data Strategy</h3>
				<p class="text-gray-600">
					Develop comprehensive data strategies that align with your business objectives and
					drive measurable results.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<BarChart3 size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">Analytics & Insights</h3>
				<p class="text-gray-600">
					Transform raw data into actionable insights that inform decision-making and
					optimize performance.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<Code size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">Data Solutions</h3>
				<p class="text-gray-600">
					Build scalable data infrastructure and custom solutions tailored to your unique
					business needs.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Brief Intro -->
<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
	<div class="prose prose-lg max-w-none">
		<h2 class="text-3xl font-bold mb-6">About Simulacro Tech</h2>
		<p class="text-gray-600 mb-4">
			Simulacro Tech is a specialized tech data consultancy focused on helping organizations
			harness the full potential of their data assets. We combine deep technical expertise
			with strategic business understanding to deliver solutions that drive real value.
		</p>
		<p class="text-gray-600">
			Whether you're looking to establish a data-driven culture, implement advanced analytics,
			or build robust data infrastructure, we partner with you every step of the way.
		</p>
		<div class="mt-8">
			<a href="/about" class="text-black font-semibold hover:underline">
				Learn more about us →
			</a>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section id="contact" class="bg-black text-white py-24">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
		<ContactForm />
	</div>
</section>
