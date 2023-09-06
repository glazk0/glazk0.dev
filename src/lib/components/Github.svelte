<script lang="ts">
	import { cn } from '$lib/utils';

	import Card from './Card.svelte';

	import External from './icons/External.svelte';
	import Github from './icons/Github.svelte';

	import navigation from '../stores/navigation';

	const id = 'work';

	$: category = $navigation;
</script>

<Card
	class={cn('col-span-3 h-52 md:col-span-3', {
		'opacity-20': category && category !== id
	})}
	scale
>
	<a
		href="https://github.com/glazk0"
		target="_blank"
		rel="noopener noreferrer"
		class={cn(
			'relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#f5f5f5] text-black'
			// hoverclass
		)}
	>
		<span aria-hidden class="px-6 pt-6">
			<span class="flex justify-between">
				<Github class="h-8 w-8" />
				<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
			</span>
		</span>

		<span class="space-y-0.5 px-6 pb-6">
			<span class="block font-title font-bold">github</span>
			<span class="block text-sm">my open source work & contributions</span>
		</span>
	</a>
</Card>
