<script lang="ts">
	import { base } from '$app/paths';
	import { fly, fade } from 'svelte/transition';
	import { tweened } from '$lib/discreteTween';
	import { onMount, tick } from 'svelte';
	const texts = [
		'Where words fail, music speaks.',
		'I like beautiful melodies telling me terrible things.',
		'Music, when soft voices die, vibrates in the memory.',
		`Beethoven tells you what it's like to be Beethoven and Mozart tells you what it's like to be human. Bach tells you what it's like to be the universe.`,
		'Music is an agreeable harmony for the honor of God and the permissible delights of the soul.',
		'Music is healing. Music holds things together',
		'Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.',
		'Where words leave off, music begins.',
		'Music, once admitted to the soul, becomes a sort of spirit, and never dies.',
		'Music is the universal language of mankind.',
		'Music produces a kind of pleasure which human nature cannot do without.',
		'If you are looking for a trustworthy recording studio, look no further. Kram Studio has our very own recording studio right here in Sammakorn, Ramkhamhaeng 112',
		'Make some noise, explore a new sound!',
		'Get flawless sound instantly',
		'Our mixing makes memories for maximum impact. Music is essential so let it reach its full potential. We can make it great.',
		'In addition to tracking and mixing, Kram Studio can produce your sound with customised production/beat production, tracking, mastering & mixing.'
	];
	const randomTextEffect = tweened({ values: texts, duration: 10000 });

	let loaded = false;
	let randomText = '';

	onMount(() => {
		randomizeTexts();
	});

	async function randomizeTexts() {
		loaded = false;
		randomTextEffect.run();
		randomText = texts[Math.floor(Math.random() * texts.length)];
		await tick();
		setTimeout(() => {
			loaded = true;
			randomTextEffect.reset();
		}, 3000);
	}
</script>

<svelte:head>
	<title>Kram Studio</title>
	<meta
		name="title"
		content="Kram Studio Services - 
	RECORDING, MIXING & MASTERING, EDITING, SONGWRITING & COMPOSITION, MIDI PROGRAMMING, JINGLES, AUDIO LOGOS & RADIO ADS"
	/>
	<meta
		name="description"
		content="Kram Studio รับ Editing, Mixing, Mastering เพลง ด้วยอุปกรณ์คุณภาพสูง รับผลิต Beat ดนตรีสมัยใหม่หลากหลายแนว มีผลงานทำให้ศิลปินมากมาย Your music is unique, don't try to sound like someone else. Free Mix Evaluation! Free Mix Consultation!"
	/>
	<meta
		property="og:title"
		content="SONGWRITING & COMPOSITION, MIDI PROGRAMMING, RECORDING, MIXING & MASTERING, EDITING, JINGLES, AUDIO LOGOS & RADIO ADS"
	/>
	<meta
		property="og:description"
		content="SONGWRITING & COMPOSITION, MIDI PROGRAMMING, RECORDING, MIXING & MASTERING, EDITING, JINGLES, AUDIO LOGOS & RADIO ADS"
	/>
</svelte:head>

<section class="container">
	<div class="flex justify-center">
		<img src="{base}/images/ape-shit.jpeg" alt="Welcome" />
	</div>
	<div class="flex flex-col justify-center">
		<h1
			class="text-xl md:text-3xl font-bold text-center h-28 md:h-32 text-yellow-300"
			in:fly={{ y: 200, duration: 500 }}
			out:fade
		>
			{#if loaded}
				{randomText}
			{:else}
				{$randomTextEffect}
			{/if}
		</h1>
		<button
			class="mx-auto border border-[#71CC00] max-w-xs border-4 mt-8 px-4 py-3 text-center text-sm font-semibold uppercase text-white"
			on:click={randomizeTexts}>Get Random Quotes</button
		>
	</div>
</section>

<style>
</style>
