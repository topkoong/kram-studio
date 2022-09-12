<script lang="ts">
	import { fly } from 'svelte/transition';
	const faqs: string[] = [
		'What is the rate for studio time?',
		'Is it possible to pay a flat rate per song?',
		'Can you make me a custom beat or do I have to just pick a pre-made one?',
		'Do you only record musicians with previous studio experience?',
		`I’m thinking of surprising a friend with some studio time. What would be the best way to do
			this?`
	];
</script>

<svelte:head>
	<title>Kram Studio Services</title>
	<meta name="description" content="Kram Studio Services" />
</svelte:head>

<!-- <section
	class="flex flex-col items-center justify-center mt-4 lg:mt-6 mb-10 lg:mb-12 max-w-[1440px] py-10 lg:py-20 lg:mx-10"
> -->
<!-- ref: https://resonatemusic.ca/recording-studio/recording-studio-services/ -->
<section class="containe overflow-hidden">
	<h1 class="text-lg md:text-2xl font-bold text-center my-8 uppercase">Studios</h1>
	<h2 class="text-center">Content is coming soon</h2>
</section>
<section class="container my-8">
	<ul class="text-left px-4">
		{#each faqs as faq, idx}<li
				class="text-sm md:text-lg"
				in:fly={{ x: 500, y: 0, duration: 1000, delay: 1000 * idx }}
			>
				{faq}
			</li>
		{/each}
	</ul>
</section>

<style>
</style>
