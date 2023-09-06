<script>
	import { cn } from '$lib/utils';

	import Card from '$lib/components/Card.svelte';

	import External from '$lib/components/icons/External.svelte';

	import navigation from '$lib/stores/navigation';

	import Plausible from '$lib/components/icons/Plausible.svelte';

	const id = 'work';

	$: category = $navigation;
</script>

<Card
	class={cn('col-span-3 h-52 md:col-span-4', {
		'opacity-20': category && category !== id
	})}
	scale
>
	<a
		href="https://plausible.glazk0.dev/glazk0.dev"
		target="_blank"
		class={cn(
			'relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#5850ec]'
			// hoverclass
		)}
	>
		<span aria-hidden class="px-6 pt-6">
			<span class="flex justify-between">
				<Plausible class="w-8 h-8" />
				<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
			</span>
		</span>

		<span class="space-y-0.5 px-6 pb-6">
			<span class="block font-title font-bold">plausible</span>
			<span class="block text-sm">interested about some analytics ?</span>
		</span>
	</a>
</Card>
