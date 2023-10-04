<script lang="ts">
	import { birthday, cn } from '$lib/utils';

	import navigation from '$lib/stores/navigation';

	import Card from '$lib/components/Card.svelte';

	let id = 'about';

	$: category = $navigation;
</script>

<Card
	class={cn(
		'p-200 col-span-4 flex items-center justify-center overflow-hidden rounded-2xl border-pink-500 bg-pink-500/30 backdrop-blur-2xl md:h-52',
		{
			'opacity-20': category && category !== id
		}
	)}
>
	<div class="flex flex-col items-center gap-4 py-8 px-6 md:flex-row md:gap-0 md:space-x-4">
		<img
			src="/assets/me.webp"
			class="h-24 w-24 rounded-full border border-pink-500 object-cover"
			alt="Photo of me"
		/>
		<div class="flex flex-col gap-1">
			<h1
				class="text-center font-title text-xl font-bold tracking-tighter text-pink-300 md:text-left"
			>
				theo
			</h1>

			<p class="text-center text-pink-300/95 md:text-left">
				{birthday} y/o full stack developer from belgium
			</p>

			<a
				class="text-center text-pink-300/80 hover:text-purple-300 md:text-left"
				href="https://github.com/glazk0/glazk0.dev"
				target="_blank"
				rel="noopener noreferrer"
			>
				this website ↗️
			</a>
		</div>
	</div>
</Card>
