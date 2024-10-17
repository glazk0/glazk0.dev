<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';

	import { ModeWatcher } from 'mode-watcher';

	import Metadata from '$lib/components/metadata.svelte';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Metadata />

<ModeWatcher />

<div class="m-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-10">
	<Navbar />
	<div class="flex flex-col">
		<slot />
	</div>
</div>
