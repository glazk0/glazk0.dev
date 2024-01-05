<script>
	import '../app.css';

	import { page } from '$app/stores';

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>glazk0.dev</title>

	<script
		defer
		data-domain={$page.url.hostname}
		src="https://plausible.glazk0.dev/js/script.js"
	></script>

	<link rel="icon" href="/favicon.ico" />

	<meta name="theme-color" content="#e2e2e2" />

	<meta name="description" content="Developer, gamer, and student." />

	<meta property="og:site_name" content="glazk0.dev" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={`https://glazk0.dev${$page.url.pathname}`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="glazk0.dev" />
	<meta property="og:description" content="Developer, gamer, and student." />
	<meta property="og:image" content="/assets/banner.webp" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="glazk0.dev" />
	<meta name="twitter:description" content="Developer, gamer, and student." />
	<meta name="twitter:image" content="/assets/banner.webp" />

	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
</svelte:head>

<div class="flex flex-col max-w-3xl px-6 py-10 w-full m-auto gap-10">
	<Navbar />
	<div class="flex flex-col">
		<slot />
	</div>
</div>
