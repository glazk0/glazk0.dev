<script lang="ts">
	import { page } from '$app/stores';
	import { toggleMode, mode } from 'mode-watcher';

	import { cn, routes } from '$lib/utils';

	import Sun from '$lib/components/icons/Sun.svelte';
	import Moon from '$lib/components/icons/Moon.svelte';
	import Mail from './icons/Mail.svelte';
</script>

<nav class="flex justify-between items-center">
	<a class="text-2xl font-bold" href="/">glazk0</a>
	<ul class="flex items-center gap-4">
		{#each routes as route}
			<li>
				<a
					class={cn('hover:underline', {
						'font-bold underline': $page.url.pathname === route.path
					})}
					href={route.path}>{route.name}</a
				>
			</li>
		{/each}
	</ul>
	<div class="flex gap-4">
		<a href="mailto:hi@glazk0.dev?subject=Mail from your website">
			<Mail />
		</a>
		<button on:click={toggleMode}>
			{#if $mode === 'dark'}
				<Sun />
			{:else}
				<Moon />
			{/if}
		</button>
	</div>
</nav>
