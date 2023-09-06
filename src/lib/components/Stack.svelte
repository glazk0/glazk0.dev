<script lang="ts">
	import { cn } from '$lib/utils';

	import Card from './Card.svelte';

	import navigation from '$lib/stores/navigation';

	import Docker from './icons/Docker.svelte';
	import Git from './icons/Git.svelte';
	import Javascript from './icons/Javascript.svelte';
	import Mongo from './icons/Mongo.svelte';
	import Nextjs from './icons/Nextjs.svelte';
	import Node from './icons/Node.svelte';
	import Postgres from './icons/Postgres.svelte';
	import React from './icons/React.svelte';
	import Redis from './icons/Redis.svelte';
	import Svelte from './icons/Svelte.svelte';
	import Tailwindcss from './icons/Tailwindcss.svelte';
	import Typescript from './icons/Typescript.svelte';
	import VsCode from './icons/VSCode.svelte';
	import Djs from './icons/DJS.svelte';
	import Go from './icons/Go.svelte';
	import Supabase from './icons/Supabase.svelte';

	const id = 'about';

	$: category = $navigation;
</script>

<Card
	class={cn(
		'col-span-3 flex items-center justify-center rounded-2xl bg-fuchsia-700 p-6 text-fuchsia-100 md:col-span-2',
		{
			'opacity-20': category && category !== id
		}
	)}
>
	<div class="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
		<Javascript />
		<Typescript />
		<Go />
		<Node />
		<Svelte />
		<React />
		<Nextjs />
		<Tailwindcss />
		<Mongo />
		<Postgres />
		<Redis />
		<Supabase />
		<Docker />
		<Git />
		<Djs />
		<VsCode />
	</div>
</Card>
