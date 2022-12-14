<script lang="ts">
	import LineIcon from '$lib/icons/line.svg';
	import FacebookIcon from '$lib/icons/facebook.svg';
	import InstagramIcon from '$lib/icons/instagram.svg';
	import YouTubeIcon from '$lib/icons/youtube.svg';
	import MediaQuery from 'svelte-media-queries';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Loader } from '@googlemaps/js-api-loader';

	function getMobileOperatingSystem() {
		if (browser) {
			const userAgent = navigator.userAgent || navigator.vendor;
			// Windows Phone must come first because its UA also contains "Android"
			if (/windows phone/i.test(userAgent)) {
				return 'Windows Phone';
			}

			if (/android/i.test(userAgent)) {
				return 'Android';
			}

			// iOS detection from: http://stackoverflow.com/a/9039885/177710
			if (/iPad|iPhone|iPod/.test(userAgent)) {
				return 'iOS';
			}

			return 'unknown';
		}
	}

	let containerRef: HTMLElement;

	onMount(() => {
		/*global google*/
		if (browser) {
			// @ts-ignore
			let map: google.maps.Map;
			// @ts-ignore
			const center: google.maps.LatLngLiteral = { lat: 13.7722548, lng: 100.6813562 };
			const mapOptions = {
				center,
				zoom: 21
			};
			const loader = new Loader({
				apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
				version: 'weekly',
				libraries: ['places']
			});

			loader
				.load()
				.then((google) => {
					// @ts-ignore
					map = new google.maps.Map(containerRef, mapOptions);
				})
				.then(() => {
					// @ts-ignore
					new google.maps.Marker({
						position: { lat: 13.7722548, lng: 100.6813562 },
						map: map,
						label: {
							text: 'Kram Studio',
							fontFamily: 'eqTH',
							color: 'black',
							fontSize: '24px',
							className: 'text-lg md:text-2xl font-bold text-center uppercase'
						}
					});
				})
				.catch((e) => {
					// do something
					console.error(e.message);
				});
		}
	});
</script>

<svelte:head>
	<title>KRAM Studio - We help grow your business rapidly</title>
	<meta
		name="description"
		content="คุณอยากเป็นศิลปิน เราทำฝันให้เป็นจริงได้ ด้วยทีมงานโปรดิวเซอร์จากค่ายใหญ่ ยอดวิว 100 ล้าน. ห้องอัดเสียงระดับประเทศ รับทำเพลง แต่งเพลง ทำบีทเพลง มิกซ์มาสเตอร์"
	/>
	<meta
		name="title"
		content="Kram Studio Services - 
	RECORDING, MIXING & MASTERING, EDITING, SONGWRITING & COMPOSITION, MIDI PROGRAMMING, JINGLES, AUDIO LOGOS & RADIO ADS"
	/>

	<meta
		property="og:title"
		content="ทีมงานมืออาชีพ มีประสบการณ์ เครื่องดนตรีอุปกรณ์อัดเสียงคุณภาพสูง. บริการทำเพลง แต่งเพลง ห้องอัดเสียงพร้อมถ่าย MV ครบวงจร."
	/>
	<meta
		property="og:description"
		content="ทีมงานมืออาชีพ มีประสบการณ์ เครื่องดนตรีอุปกรณ์อัดเสียงคุณภาพสูง. บริการทำเพลง แต่งเพลง ห้องอัดเสียงพร้อมถ่าย MV ครบวงจร."
	/>
</svelte:head>

<!-- ref: https://resonatemusic.ca/recording-studio/recording-studio-services/ -->
<section class="container my-8 h-full">
	<h1 class="text-lg md:text-2xl font-bold text-center my-8 uppercase">Stay in the loop</h1>
</section>

<section class="container my-8 overflow-hidden h-full">
	{#if browser && window}
		<div id="map" class="h-72 lg:h-96" bind:this={containerRef} />
	{/if}
</section>
<section class="container my-8 overflow-hidden">
	<ul class="flex justify-center">
		<li class=""><LineIcon class="w-8 h-8 mx-2" /></li>
		<li class="">
			<MediaQuery query="(min-width: 1280px)" let:matches>
				{#if matches}
					<a href="https://www.facebook.com/100702638827648"
						><FacebookIcon class="w-8 h-8 mx-2" /></a
					>
				{:else}
					<a
						href={getMobileOperatingSystem() === 'iOS'
							? 'fb://profile/100702638827648'
							: 'fb://page/100702638827648'}><FacebookIcon class="w-8 h-8 mx-2" /></a
					>
				{/if}
			</MediaQuery>
		</li>
		<li class="">
			<MediaQuery query="(min-width: 1280px)" let:matches>
				{#if matches}
					<a href="https://www.instagram.com/kramamr"><InstagramIcon class="w-8 h-8 mx-2" /></a>
				{:else}
					<a href="instagram://user?username=kramamr"><InstagramIcon class="w-8 h-8 mx-2" /></a>
				{/if}
			</MediaQuery>
		</li>
		<li class="">
			<a href="https://www.youtube.com/channel/UCRfq6suvqwv6-Eu-tE6k3tg">
				<YouTubeIcon class="w-8 h-8 mx-2" />
			</a>
		</li>
	</ul>
</section>

<style>
</style>
