<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { Database, BarChart3, Code, ArrowRight } from 'lucide-svelte';
	import { base } from '$app/paths';
	
	const imagePath = base ? `${base.replace(/\/$/, '')}/simulacro.png` : '/simulacro.png';
</script>

<svelte:head>
	<title>Simulacro Tech - Interdisciplinary Data & AI Consultancy</title>
</svelte:head>

<!-- Hero Section -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
	<div class="text-center">
		<div class="mb-8 flex justify-center">
			<img src={imagePath} alt="Simulacro Tech" class="w-32 h-32 md:w-40 md:h-40" />
		</div>
		<h1 class="text-5xl md:text-6xl font-bold mb-6 [font-variant:small-caps]">Simulacro Tech</h1>
		<p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
			Data and AI consultancy grounded in ethics. 
			Building technology that serves people, not the other way around.
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
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Services</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<Database size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">AI & NLP Solutions</h3>
				<p class="text-gray-600">
					RAG systems, embeddings, topic modeling, and fine-tuned LLMs. 
					Built with transparency and accountability from the start.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<BarChart3 size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">Data Analysis & Research</h3>
				<p class="text-gray-600">
					Mixed-methods research that pairs qualitative depth with computational rigor. 
					Data mining, visualization, and statistical analysis.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<div class="mb-4">
					<Code size={40} />
				</div>
				<h3 class="text-xl font-semibold mb-4">Ethics & Strategy</h3>
				<p class="text-gray-600">
					AI ethics audits and data strategy consulting. 
					Practical guidance rooted in philosophy and psychology.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Why Us Section -->
<section class="py-24">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Why Us</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white border border-black p-8">
				<h3 class="text-xl font-semibold mb-4">Clinical Background</h3>
				<p class="text-gray-600">
					Years of psychotherapeutic practice shape how I understand 
					technology's impact on real people — not just users in the abstract.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<h3 class="text-xl font-semibold mb-4">Philosophical Rigor</h3>
				<p class="text-gray-600">
					Ethics isn't an afterthought. Training in philosophy means asking 
					the hard questions before building, not after.
				</p>
			</div>

			<div class="bg-white border border-black p-8">
				<h3 class="text-xl font-semibold mb-4">Technical Depth</h3>
				<p class="text-gray-600">
					From NLP pipelines to statistical analysis, the technical work 
					is grounded in research-grade methodology.
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
			I'm Gustavo Costa — psychologist turned data scientist. After years in clinical practice, 
			I now apply that same attentiveness to how we build and deploy AI systems.
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
