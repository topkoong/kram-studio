<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
	const services: string[] = [
		'RECORDING, MIXING & MASTERING',
		'PRODUCTION & SOUND DESIGN',
		'SONGWRITING & COMPOSITION',
		'IN-STUDIO VIDEO',
		'JINGLES, AUDIO LOGOS & RADIO ADS'
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
<section class="container">
	<h1 class="text-lg md:text-2xl font-bold text-center my-8">RECORDING STUDIO SERVICES</h1>
	<ul class="text-left px-4">
		{#each services as service}
			<li class="text-sm md:text-lg">{service}</li>
		{/each}
	</ul>
</section>

<style>
</style>
