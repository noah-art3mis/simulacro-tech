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
			I'm Gustavo Costa, an interdisciplinary researcher and consultant based in Brasília, Brazil. 
			My work sits at the intersection of psychology, philosophy, and data science—bringing 
			together insights from psychoanalysis, critical theory, and computational methods to 
			address complex problems.
		</p>
		<p class="text-lg text-gray-600 mb-6">
			With a background spanning clinical psychology, Lacanian psychoanalysis, and 
			interdisciplinary research methods, I approach data and AI challenges with a focus on 
			human understanding, ethical considerations, and the philosophical implications of 
			technology. This interdisciplinary perspective allows me to see beyond technical 
			solutions to the deeper questions of how technology shapes and is shaped by human 
			experience.
		</p>
		<p class="text-lg text-gray-600">
			Whether I'm building RAG systems, conducting mixed-methods research on AI-generated 
			content, or consulting on data strategy, I bring the same commitment to rigor, 
			thoughtfulness, and human-centered design that I developed through years of 
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
			<p class="text-gray-600 text-sm mb-2">
				<strong>Psychotherapist</strong><br />
				Partner at Espaço Psique Psychology Clinic (2020-2024)<br />
				Psychoanalytic counselling
			</p>
			<p class="text-gray-600 text-sm mb-2">
				<strong>Research</strong><br />
				Master's dissertation on AI slop, integrating qualitative and computational 
				methods to analyze AI-generated text
			</p>
			<p class="text-gray-600 text-sm mb-2">
				<strong>Writing</strong><br />
				Essays on data science, AI ethics, and philosophy of science at 
				<strong>simulacro.co.uk</strong>, as well as essays on philosophy of psychoanalysis at gustavocosta.psc.br
			</p>
            <p class="text-gray-600 text-sm mb-2">
				<strong>Development</strong><br />
				See simulacro.cv and a range of technical projects with a focus on data and NLP.
			</p>    
			<p class="text-gray-600 text-sm">
				Publications and talks on philosophy of science, critical theory, and 
				psychoanalysis
			</p>
		</div>
	</div>

	<div class="prose prose-lg max-w-none">
		<h2 class="text-2xl font-bold mb-4">Interdisciplinary Approach</h2>
		<p class="text-gray-600 mb-4">
			What sets my work apart is the integration of perspectives from multiple disciplines. 
			My training in psychology and psychoanalysis informs how I think about human-technology 
			interaction. My philosophical background helps me address ethical questions and 
			conceptual frameworks. And my technical skills in data science and AI enable me to 
			implement solutions that are both sophisticated and practical.
		</p>
		<p class="text-gray-600">
			This interdisciplinary lens is particularly valuable when working on projects involving 
			AI ethics, human-centered design, or research that requires both qualitative insight 
			and quantitative rigor. I don't just build systems—I think deeply about what they 
			mean, how they affect people, and how they can be designed to serve human flourishing.
		</p>
	</div>
</div>

