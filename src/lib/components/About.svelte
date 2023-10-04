<script lang="ts">
	import { cn } from '$lib/utils';
	import navigation from '../stores/navigation';

	import Card from './Card.svelte';

	let id = 'about';

	$: category = $navigation;
</script>

<Card
	class={cn(
		'flex flex-col justify-between space-y-6 rounded-2xl p-6 bg-blue-600 h-full col-span-full',
		{
			'opacity-20': category && category !== id
		}
	)}
>
	<h2 class="font-title text-xl font-bold">
		hello world <span class="inline">⭐</span>
	</h2>
	<p>I'm Théo, I'm a Belgium nerd and I'm currently studying computer science.</p>

	<p>
		I'm passionate about development, lately I've been working on a some of projects like
		<a
			href="https://lilith.mom?ref=glazk0.dev"
			target="_blank"
			class="underline hover:opacity-80">Diablo 4 Discord bot</a
		>, a
		<a
			href="https://github.com/glazk0/zeki"
			target="_blank"
			class="underline hover:opacity-80"
		>
			Palia Discord bot
		</a>
		and a
		<a
			href="https://aeternum.me?ref=glazk0.dev"
			target="_blank"
			class="underline hover:opacity-80"
		>
			New World Discord bot</a
		>.
	</p>
</Card>
