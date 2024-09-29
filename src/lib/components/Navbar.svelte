<script lang="ts">
	import { page } from '$app/stores';

	import { mode, toggleMode } from 'mode-watcher';

	import { Mail, Moon, Sun } from '$lib/components/icons';

	import { cn, routes } from '$lib/utils';
</script>

<nav class="flex items-center justify-between">
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
