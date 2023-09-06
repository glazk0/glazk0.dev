<script>
	import '../app.css';

	import { page } from '$app/stores';

	import Navbar from '$lib/components/Navbar.svelte';

	$: hostname = $page.url.hostname;
</script>

<svelte:head>
	<title>glazk0.dev</title>
	<script defer data-domain={hostname} src="https://plausible.glazk0.dev/js/script.js"></script>
</svelte:head>

<div class="flex flex-col max-w-3xl px-6 py-12 w-full m-auto gap-6">
	<Navbar />
	<div class="grid grid-cols-6 gap-6">
		<slot />
	</div>
</div>
