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
			I'm Gustavo Costa, and Simulacro Tech is my interdisciplinary consultancy based in Brasília, Brazil, 
			operating at the intersection of psychology, philosophy, and data science. I bring together insights 
			from psychoanalysis, critical theory, and computational methods to address complex problems.
		</p>
		<p class="text-lg text-gray-600 mb-6">
			With a background spanning clinical psychology, Lacanian psychoanalysis, and 
			interdisciplinary research methods, my approach to data and AI challenges emphasizes 
			human understanding, ethical considerations, and the philosophical implications of 
			technology. This interdisciplinary perspective enables me to see beyond technical 
			solutions to the deeper questions of how technology shapes and is shaped by human 
			experience.
		</p>
		<p class="text-lg text-gray-600">
			From building RAG systems and conducting mixed-methods research on AI-generated 
			content to consulting on data strategy, my work is characterized by a commitment to 
			rigor, thoughtfulness, and human-centered design, informed by years of 
			psychotherapeutic practice and philosophical inquiry.
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
				<strong>Psychotherapist</strong><br />
				Partner, Espaço Psique Psychology Clinic (2020-2024)
			</p>
			<p class="text-gray-600 text-sm mb-3">
				<strong>Research</strong><br />
				Master's dissertation on AI slop using mixed-methods analysis
			</p>
			<p class="text-gray-600 text-sm mb-3">
				<strong>Writing</strong><br />
				Essays on data science, AI ethics, and philosophy at 
				<strong>simulacro.co.uk</strong> and <strong>gustavocosta.psc.br</strong>
			</p>
			<p class="text-gray-600 text-sm">
				<strong>Technical Projects</strong><br />
				RAG systems, NLP applications, and data analysis tools. See <strong>simulacro.cv</strong> for details.
			</p>
		</div>
	</div>

	<div class="prose prose-lg max-w-none">
		<h2 class="text-2xl font-bold mb-4">Interdisciplinary Approach</h2>
		<p class="text-gray-600 mb-4">
			My work is distinguished by the integration of perspectives from multiple disciplines. 
			My training in psychology and psychoanalysis informs how I approach human-technology 
			interaction. My philosophical background helps me address ethical questions and 
			conceptual frameworks. My technical skills in data science and AI enable me to 
			implement solutions that are both sophisticated and practical.
		</p>
		<p class="text-gray-600">
			This interdisciplinary lens is particularly valuable when working on projects involving 
			AI ethics, human-centered design, or research that requires both qualitative insight 
			and quantitative rigor. My approach goes beyond building systems to consider what they 
			mean, how they affect people, and how they can be designed to serve human flourishing.
		</p>
	</div>
</div>

