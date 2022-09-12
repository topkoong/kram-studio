<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
	import LineIcon from '$lib/icons/line.svg';
	import FacebookIcon from '$lib/icons/facebook.svg';
	import InstagramIcon from '$lib/icons/instagram.svg';
	import YouTubeIcon from '$lib/icons/youtube.svg';
	import MediaQuery from 'svelte-media-queries';
	function getMobileOperatingSystem() {
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
	<h1 class="text-lg md:text-2xl font-bold text-center my-8">Location section - coming soon</h1>
	<h2 class="text-center">Googlemap is coming soon</h2>
</section>
<section class="container my-8">
	<!-- <h1 class="text-lg md:text-2xl font-bold text-center my-8">Social Media</h1> -->
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
