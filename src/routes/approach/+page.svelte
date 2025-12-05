<script lang="ts">
	import { Search, Cog, CheckCircle, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Approach - Simulacro Tech</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<h1 class="text-4xl md:text-5xl font-bold mb-12">Our Approach</h1>

	<div class="prose prose-lg max-w-none mb-16">
		<p class="text-lg text-gray-600 mb-6">
			At Simulacro Tech, we believe that successful data initiatives require a structured,
			collaborative approach. Our methodology is designed to ensure alignment with your
			business objectives while delivering practical, scalable solutions.
		</p>
		<p class="text-lg text-gray-600">
			We work closely with your team throughout the entire process, from initial discovery to
			implementation and beyond, ensuring that solutions are not just technically sound but
			also sustainable and aligned with your organizational culture.
		</p>
	</div>

	<div class="space-y-12 mb-16">
		<div class="flex gap-6">
			<div class="flex-shrink-0">
				<div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
					1
				</div>
			</div>
			<div>
				<div class="flex items-center gap-3 mb-3">
					<Search size={24} />
					<h3 class="text-2xl font-semibold">Discovery & Assessment</h3>
				</div>
				<p class="text-gray-600">
					We begin by understanding your business context, current data landscape, and
					specific challenges. Through workshops, interviews, and technical assessments, we
					identify opportunities and define clear objectives.
				</p>
			</div>
		</div>

		<div class="flex gap-6">
			<div class="flex-shrink-0">
				<div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
					2
				</div>
			</div>
			<div>
				<div class="flex items-center gap-3 mb-3">
					<Cog size={24} />
					<h3 class="text-2xl font-semibold">Strategy & Planning</h3>
				</div>
				<p class="text-gray-600">
					Based on our discovery findings, we develop a comprehensive strategy that outlines
					the roadmap, architecture, and implementation plan. We prioritize initiatives based
					on business value and technical feasibility.
				</p>
			</div>
		</div>

		<div class="flex gap-6">
			<div class="flex-shrink-0">
				<div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
					3
				</div>
			</div>
			<div>
				<div class="flex items-center gap-3 mb-3">
					<CheckCircle size={24} />
					<h3 class="text-2xl font-semibold">Implementation & Delivery</h3>
				</div>
				<p class="text-gray-600">
					We execute the plan using agile methodologies, ensuring regular communication and
					iterative delivery. Our team works alongside yours, providing knowledge transfer
					and ensuring smooth adoption of new systems and processes.
				</p>
			</div>
		</div>

		<div class="flex gap-6">
			<div class="flex-shrink-0">
				<div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
					4
				</div>
			</div>
			<div>
				<div class="flex items-center gap-3 mb-3">
					<ArrowRight size={24} />
					<h3 class="text-2xl font-semibold">Optimization & Support</h3>
				</div>
				<p class="text-gray-600">
					After implementation, we provide ongoing support and optimization services. We
					monitor performance, gather feedback, and continuously refine solutions to ensure
					they continue to deliver value as your business evolves.
				</p>
			</div>
		</div>
	</div>

	<div class="bg-gray-50 border border-black p-8">
		<h2 class="text-2xl font-bold mb-4">How We Operate</h2>
		<ul class="space-y-3 text-gray-600">
			<li class="flex items-start gap-3">
				<span class="font-semibold">Collaborative:</span>
				<span>We work as an extension of your team, not as external consultants.</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="font-semibold">Transparent:</span>
				<span>Clear communication, regular updates, and no surprises.</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="font-semibold">Practical:</span>
				<span>We focus on solutions that work in the real world, not just in theory.</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="font-semibold">Results-Driven:</span>
				<span>Every project is measured against business outcomes, not just technical metrics.</span>
			</li>
		</ul>
	</div>
</div>

