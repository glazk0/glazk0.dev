<script lang="ts">
	import { cn } from '$lib/utils';

	import navigation from '$lib/stores/navigation';

	const handleNavigation = (key: string) => {
		navigation.set(key);
	};

	$: category = $navigation;

	$: console.log(category);
</script>

<nav class="flex w-full justify-center">
	<div class="flex items-center justify-center rounded-full gap-4 font-semibold focus:outline-none">
		<button
			on:click={() => handleNavigation('')}
			class={cn(
				'hover:bg-gray-200 hover:text-black text-white rounded-full px-4 py-3 focus:outline-none',
				{
					'bg-gray-200 text-black': category === ''
				}
			)}
		>
			Home
		</button>
		<button
			on:click={() => handleNavigation('about')}
			class={cn(
				'hover:bg-gray-200 hover:text-black text-white rounded-full px-4 py-3 focus:outline-none',
				{
					'bg-gray-200 text-black': category === 'about'
				}
			)}
		>
			About
		</button>
		<button
			on:click={() => handleNavigation('work')}
			class={cn(
				'hover:bg-gray-200 hover:text-black  text-white rounded-full px-4 py-3 focus:outline-none',
				{
					'bg-gray-200 text-black': category === 'work'
				}
			)}
		>
			Work
		</button>
	</div>
</nav>
