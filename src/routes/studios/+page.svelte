<script lang="ts">
	import { fly } from 'svelte/transition';
	const hardwares = [
		'Macbook Pro M1',
		'Control 24',
		'UAD Apollo x8p',
		'UAD-2 Satellite',
		'UA LA-610 MKII',
		'UA 4-710d Mic Preamp'
	];
	const softwares = [
		'Ableton Live 10',
		'Auto-Tune Pro',
		'Komplete 12 Ultimate',
		'Lexicon PCM Total Bundle',
		'Logic Pro',
		'Melodyne 4',
		'Pro Tools Ultimate',
		'Vocalign pro',
		'Waves Mercury Bundle'
	];
	const microphones = [
		'Neumann TLM 103',
		'Neumann U87 (2)',
		'Shure 57 (3)',
		'Shure Beta 52a',
		'Shure VP82'
	];
	const keyboards = [
		'M-Audio Keystation 88',
		'M-Audio Keystation 49',
		'Prophet VS',
		'Roland JD-800',
		'Roland JP-8000',
		'Roland JUNO-106',
		'Roland Super JX',
		'Roland TB303',
		'Roland TR909',
		'Sequential Circuits PRO-ONE',
		'Studio Electronics SE-1',
		'Yamaha Upright Piano'
	];
	const monitors = ['Genelec 1037B', 'Yamaha NS-10'];
</script>

<svelte:head>
	<title>Kram Studio</title>
	<meta
		name="description"
		content="Kram Studio was designed from the ground up as a no-compromise mastering facility. High-end
	custom equipment and rooms based on the most perfectly optimized acoustical ratios. The main
	suite is an enormous 30+ foot long room to allow the most natural and precise sonic environment
	possible allowing us to make the decisions necessary to make your music sound its best."
	/>
</svelte:head>

<section class="container overflow-hidden w-full">
	<h1 class="text-lg md:text-2xl font-bold text-center my-8 uppercase">Studios</h1>
	<p class="text-center text-sm md:text-lg" in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 }}>
		Kram Studio was designed from the ground up as a no-compromise mastering facility. High-end
		custom equipment and rooms based on the most perfectly optimized acoustical ratios. The main
		suite is an enormous 30+ foot long room to allow the most natural and precise sonic environment
		possible allowing us to make the decisions necessary to make your music sound its best.
	</p>
</section>
<section
	class="container my-8 grid grid-cols-1 sm:gap-2 sm:grid-cols-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 w-full"
>
	<div class="w-full">
		<h2
			class="text-base lg:text-lg uppercase my-8 font-semibold"
			in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 }}
		>
			Hardware
		</h2>
		<ul class="pl-8">
			{#each hardwares as hardware, idx}
				<li
					class="text-sm md:text-lg my-8"
					in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 * idx }}
				>
					{hardware}
				</li>
			{/each}
		</ul>
	</div>
	<div class="w-full">
		<h2
			class="text-base lg:text-lg uppercase my-8 font-semibold"
			in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 }}
		>
			Software
		</h2>
		<ul class="pl-8">
			{#each softwares as software, idx}
				<li
					class="text-sm md:text-lg my-8"
					in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 * idx }}
				>
					{software}
				</li>
			{/each}
		</ul>
	</div>
	<div class="w-full">
		<h2
			class="text-base lg:text-lg uppercase my-8 font-semibold"
			in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 }}
		>
			Microphones
		</h2>
		<ul class="pl-8">
			{#each microphones as microphone, idx}
				<li
					class="text-sm md:text-lg my-8"
					in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 * idx }}
				>
					{microphone}
				</li>
			{/each}
		</ul>
	</div>
	<div class="w-full">
		<h2
			class="text-base lg:text-lg uppercase my-8 font-semibold"
			in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 }}
		>
			Keyboards
		</h2>
		<ul class="pl-8">
			{#each keyboards as keyboard, idx}
				<li
					class="text-sm md:text-lg my-8"
					in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 * idx }}
				>
					{keyboard}
				</li>
			{/each}
		</ul>
	</div>
	<div class="w-full">
		<h2
			class="text-base lg:text-lg uppercase my-8 font-semibold"
			in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 }}
		>
			Monitors
		</h2>
		<ul class="pl-4">
			{#each monitors as monitor, idx}
				<li
					class="text-sm md:text-lg my-8"
					in:fly={{ x: 10, y: 0, duration: 1000, delay: 100 * idx }}
				>
					{monitor}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
</style>
