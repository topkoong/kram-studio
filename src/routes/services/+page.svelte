<script lang="ts">
	import { fly } from 'svelte/transition';
	const services: string[] = [
		'RECORDING, MIXING & MASTERING, EDITING',
		'PRODUCTION & SOUND DESIGN',
		'SONGWRITING & COMPOSITION',
		'MIDI PROGRAMMING',
		'IN-STUDIO VIDEO',
		'JINGLES, AUDIO LOGOS & RADIO ADS',
		'PODCASTS'
	];
</script>

<svelte:head>
	<title>Kram Studio Services</title>
	<meta
		name="description"
		content="Kram Studio Services - 
	RECORDING, MIXING & MASTERING, EDITING,
	PRODUCTION & SOUND DESIGN,
	SONGWRITING & COMPOSITION,
	MIDI PROGRAMMING,
	IN-STUDIO VIDEO,
	JINGLES, AUDIO LOGOS & RADIO ADS,
	PODCASTS"
	/>
</svelte:head>

<!-- <section
	class="flex flex-col items-center justify-center mt-4 lg:mt-6 mb-10 lg:mb-12 max-w-[1440px] py-10 lg:py-20 lg:mx-10"
> -->
<!-- ref: https://resonatemusic.ca/recording-studio/recording-studio-services/ -->
<section class="container overflow-hidden">
	<h1 class="text-lg md:text-2xl font-bold text-center my-8">
		Are you looking to record a professional demo? If so, invest in your musical future with us!
	</h1>
	<ul class="text-left px-4">
		{#each services as service, idx}
			<li class="text-sm md:text-lg" in:fly={{ x: 500, y: 0, duration: 1000, delay: 1000 * idx }}>
				{service}
			</li>
		{/each}
	</ul>
</section>

<style>
</style>
