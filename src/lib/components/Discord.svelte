<script lang="ts">
	import { cn, discordId } from '$lib/utils';

	import Card from './Card.svelte';
	import Discord from './icons/Discord.svelte';
	import navigation from '../stores/navigation';

	const id = 'work';

	$: category = $navigation;
</script>

<Card class="col-span-3 h-full rounded-2xl" scale>
	<a
		href="discord://-/users/{discordId}"
		class={cn(
			'flex h-full flex-col items-center justify-center rounded-2xl bg-indigo-500 text-4xl text-white transition duration-500',
			{
				'opacity-20': category && category !== id
			}
		)}
	>
		<span class="sr-only">Discord</span>
		<span class="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
			<Discord class="w-16 h-16" />
		</span>
	</a>
</Card>
