<script lang="ts">
	import { Users, Target, Lightbulb } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About - Simulacro Tech</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
	<h1 class="text-4xl md:text-5xl font-bold mb-12">About Simulacro Tech</h1>

	<div class="prose prose-lg max-w-none mb-16">
		<p class="text-lg text-gray-600 mb-6">
			Simulacro Tech is a leading tech data consultancy dedicated to helping businesses
			transform their data into strategic advantages. Founded with a vision to bridge the gap
			between complex data technologies and business outcomes, we deliver practical,
			actionable solutions.
		</p>
		<p class="text-lg text-gray-600">
			Our team brings together years of experience in data engineering, analytics, and
			business strategy. We understand that every organization is unique, and we tailor our
			approach to meet your specific challenges and goals.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
		<div class="border border-black p-6">
			<div class="mb-4">
				<Users size={32} />
			</div>
			<h3 class="text-xl font-semibold mb-3">Our Team</h3>
			<p class="text-gray-600">
				A diverse team of data scientists, engineers, and strategists with expertise across
				industries and technologies.
			</p>
		</div>

		<div class="border border-black p-6">
			<div class="mb-4">
				<Target size={32} />
			</div>
			<h3 class="text-xl font-semibold mb-3">Our Mission</h3>
			<p class="text-gray-600">
				To empower organizations with data-driven decision-making capabilities that drive
				growth and innovation.
			</p>
		</div>

		<div class="border border-black p-6">
			<div class="mb-4">
				<Lightbulb size={32} />
			</div>
			<h3 class="text-xl font-semibold mb-3">Our Values</h3>
			<p class="text-gray-600">
				Integrity, innovation, and client success guide everything we do. We believe in
				transparent communication and collaborative partnerships.
			</p>
		</div>
	</div>

	<div class="prose prose-lg max-w-none">
		<h2 class="text-2xl font-bold mb-4">Company Background</h2>
		<p class="text-gray-600 mb-4">
			Simulacro Tech was established to address the growing need for expert data consulting
			that combines technical excellence with business acumen. We've worked with organizations
			of all sizes, from startups to enterprise companies, helping them navigate the
			complexities of modern data ecosystems.
		</p>
		<p class="text-gray-600">
			Our approach is rooted in understanding your business first, then applying the right
			technologies and methodologies to solve your specific challenges. We don't believe in
			one-size-fits-all solutions—every engagement is customized to deliver maximum value.
		</p>
	</div>
</div>

