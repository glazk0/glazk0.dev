<script lang="ts">
	import { page } from '$app/stores';

	import { cn, routes } from '$lib/utils';
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
</nav>
