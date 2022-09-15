<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<header>
	<nav data-sveltekit-prefetch class="container py-4 md:py-8">
		<h1 class="text-2xl md:text-4xl text-center uppercase animate-bounce duration-700">
			KRAM Studio
		</h1>
		<ul class="flex justify-center uppercase my-2">
			<li
				class="{$page.url.pathname === base
					? 'underline underline-offset-8 decoration-4 decoration-[#71CC00]'
					: ''} text-sm md:text-lg mx-2"
			>
				<a href="{base}/">Home</a>
			</li>
			<li
				class="{$page.url.pathname === `${base}/services`
					? 'underline underline-offset-8 decoration-4 decoration-[#71CC00]'
					: ''} text-sm md:text-lg mx-2"
			>
				<a href="{base}/services">Services</a>
			</li>
			<li
				class="{$page.url.pathname === `${base}/studios`
					? 'underline underline-offset-8 decoration-4 decoration-[#71CC00]'
					: ''} text-sm md:text-lg mx-2"
			>
				<a href="{base}/studios">Studios</a>
			</li>
			<li
				class="{$page.url.pathname === `${base}/about-us`
					? 'underline underline-offset-8 decoration-4 decoration-[#71CC00]'
					: ''} hidden md:block text-sm md:text-lg mx-2"
			>
				<a href="{base}/about-us">About Us</a>
			</li>
			<li
				class="{$page.url.pathname === `${base}/faqs`
					? 'underline underline-offset-8 decoration-4 decoration-[#71CC00]'
					: ''} hidden md:block text-sm md:text-lg mx-2"
			>
				<a href="{base}/faqs">Faqs</a>
			</li>
			<li
				class="{$page.url.pathname === `${base}/contact-us`
					? 'underline underline-offset-8 decoration-4 decoration-[#71CC00]'
					: ''} text-sm md:text-lg mx-2"
			>
				<a href="{base}/contact-us">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
</style>
