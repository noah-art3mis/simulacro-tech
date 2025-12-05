<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { Database, BarChart3, Code, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Simulacro Tech - Interdisciplinary Data & AI Consultancy</title>
</svelte:head>

<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
	<div class="text-center">
		<div class="mb-8 flex justify-center">
			<img src="/simulacro.png" alt="Simulacro Tech" class="w-32 h-32 md:w-40 md:h-40" />
		</div>
		<h1 class="text-5xl md:text-6xl font-bold mb-6 [font-variant:small-caps]">Simulacro Tech</h1>
		<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
			Interdisciplinary data consultancy bridging psychology, philosophy, and technology. 
			Human-centered approaches to AI, analytics, and data strategy.
		</p>
		<a
			href="#contact"
			class="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
		>
			Get in Touch
			<ArrowRight size={20} />
		</a>
	</div>
</section>

<!-- Services Overview -->
<section class="bg-gray-50 py-24">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">What I Offer</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<Database size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">AI & NLP Solutions</h3>
				<p class="text-gray-600">
					Custom AI applications, RAG systems, and NLP solutions. From embeddings and topic modeling 
					to fine-tuned LLMs, with a focus on ethical implementation and human-centered design.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<BarChart3 size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">Data Analysis & Research</h3>
				<p class="text-gray-600">
					Mixed-methods research combining qualitative insights with computational approaches. 
					Data mining, visualization, and statistical analysis informed by interdisciplinary thinking.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<Code size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">Strategic Consulting</h3>
				<p class="text-gray-600">
					Data strategy and AI ethics consulting that bridges technical expertise with 
					philosophical rigor and psychological understanding of human-technology interaction.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Brief Intro -->
<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
	<div class="prose prose-lg max-w-none">
		<h2 class="text-3xl font-bold mb-6">About</h2>
		<p class="text-gray-600 mb-4">
			I'm Gustavo Costa, an interdisciplinary researcher and consultant working at the intersection 
			of psychology, philosophy, and data science. With a background spanning psychoanalysis, 
			interdisciplinary methods, and AI research, I bring a uniquely human-centered perspective 
			to technical challenges.
		</p>
		<p class="text-gray-600">
			My approach integrates qualitative understanding with computational methods, ensuring that 
			data solutions are not just technically sound, but ethically grounded and attuned to human 
			needs. Whether it's building RAG systems, conducting mixed-methods research, or developing 
			AI ethics frameworks, I work to bridge the gap between technical excellence and human insight.
		</p>
		<div class="mt-8">
			<a href="/about" class="text-black font-semibold hover:underline">
				Learn more →
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
