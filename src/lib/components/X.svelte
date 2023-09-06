<script lang="ts">
	import { cn } from '$lib/utils';

	import Card from './Card.svelte';

	import X from './icons/X.svelte';

	import navigation from '$lib/stores/navigation';

	const id = 'work';

	$: category = $navigation;
</script>

<Card
	class={cn('col-span-2 transition duration-500', {
		'opacity-20': category && category !== id
	})}
	scale
>
	<a
		href="https://twitter.com/glazk0"
		target="_blank"
		rel="noopener noreferrer"
		class={cn('flex h-full items-center justify-center rounded-2xl bg-black text-4xl text-white')}
	>
		<span class="sr-only">X</span>
		<span class="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
			<X class="w-8 h-8" />
		</span>
	</a>
</Card>
