<script lang="ts">
	import { GraduationCap, Briefcase } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About - Simulacro Tech</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<h1 class="text-4xl md:text-5xl font-bold mb-12">About</h1>

	<div class="prose prose-lg max-w-none mb-16">
		<p class="text-lg text-gray-600 mb-6">
			I'm Gustavo Costa. Before I wrote code, I listened to people — as a clinical psychologist 
			and psychoanalyst in Brasília, Brazil. That work taught me something you don't learn from 
			tutorials: how to sit with complexity, ask better questions, and resist the urge to 
			optimize everything. 
		</p>
		<p class="text-lg text-gray-600 mb-6">    
            However, this also gave me the opportunity to see how much systems, especially in humanistic contexts, can be improved by optimization -- so they can better achieve their humanistic purposes. 
		</p>
		<p class="text-lg text-gray-600 mb-6">
			Now I build AI systems and conduct research at the edges of technology and the humanities. 
			My background in Lacanian psychoanalysis and critical theory gives me a different lens on 
			what "working" means — not just technically, but for the people affected.
		</p>
		<p class="text-lg text-gray-600">
			Simulacro Tech is where I bring this together: RAG systems, mixed-methods research, 
			data strategy — all built with the same care I brought to the clinic.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
		<div class="border border-black p-6">
			<div class="mb-4">
				<GraduationCap size={32} />
			</div>
			<h3 class="text-xl font-semibold mb-3">Education</h3>
			<p class="text-gray-600 text-sm mb-2">
				<strong>Master of Arts and Sciences</strong><br />
				London Interdisciplinary School
			</p>
			<p class="text-gray-600 text-sm mb-2">
				<strong>Specialist in Lacanian Psychoanalysis</strong><br />
				Faculdade Inspirar
			</p>
			<p class="text-gray-600 text-sm">
				<strong>Bachelor in Psychology</strong><br />
				Universidade de Brasília
			</p>
		</div>

		<div class="border border-black p-6">
			<div class="mb-4">
				<Briefcase size={32} />
			</div>
			<h3 class="text-xl font-semibold mb-3">Experience</h3>
			<p class="text-gray-600 text-sm mb-3">
				<strong>Psychotherapy</strong><br />
				Partner at Espaço Psique Psychology Clinic (2020-2024)
			</p>
			<p class="text-gray-600 text-sm mb-3">
				<strong>Writing</strong><br />
				Essays on data science, AI ethics, and philosophy at 
				<a href="https://simulacro.co.uk" target="_blank" rel="noopener noreferrer" class="text-black font-semibold hover:underline">simulacro.co.uk</a> and <a href="https://gustavocosta.psc.br" target="_blank" rel="noopener noreferrer" class="text-black font-semibold hover:underline">gustavocosta.psc.br</a>. Master's dissertation on AI slop using mixed-methods analysis
			</p>
			<p class="text-gray-600 text-sm">
				<strong>Technical Projects</strong><br />
				RAG systems, NLP applications, and data analysis tools. See <a href="https://simulacro.cv" target="_blank" rel="noopener noreferrer" class="text-black font-semibold hover:underline">simulacro.cv</a> for details.
			</p>
		</div>
	</div>

	<div class="prose prose-lg max-w-none">
		<h2 class="text-2xl font-bold mb-4">Approach</h2>
		<p class="text-gray-600 mb-4">
			I don't treat ethics as a checklist. When I audit an AI system or design a data pipeline, 
			I'm thinking about who gets left out, what assumptions are baked in, and whether the 
			thing we're building actually helps.
		</p>
		<p class="text-gray-600">
			This matters most for projects where the stakes are human: content moderation, 
			mental health tech, research on vulnerable populations. If you need someone who 
			can hold both the technical and the ethical in view, that's the work I do.
		</p>
	</div>
</div>

