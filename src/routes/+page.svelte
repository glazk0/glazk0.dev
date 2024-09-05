<script lang="ts">
	import {
		Code,
		Discord,
		Djs,
		Docker,
		External,
		Git,
		Github,
		Go,
		Javascript,
		Mongo,
		Nextjs,
		Node,
		Plausible,
		Postgres,
		React,
		Redis,
		Supabase,
		Svelte,
		Tailwindcss,
		Typescript,
		VsCode,
		X
	} from '$lib/components/icons';

	import { birthday, discordId } from '$lib/utils';
</script>

<div class="grid grid-cols-6 gap-6">
	<div
		class="col-span-full sm:col-span-4 flex flex-col justify-between p-8 overflow-hidden rounded-2xl bg-[#009688] text-white backdrop-blur-2xl h-52"
	>
		<div class="flex justify-between items-center">
			<img
				class="rounded-full h-20 w-20 border-4 border-white/20
			"
				src="/assets/me.webp"
				alt="me"
			/>
			<a class="hover:opacity-80 p-2 bg-white/30 rounded-xl" href="//github.com/glazk0/glazk0.dev"
				>this website ↗️</a
			>
		</div>
		<div>
			<h1 class="text-xl font-bold tracking-tighter">théo</h1>
			<p>
				{birthday} y/o full stack typescript developer
			</p>
		</div>
	</div>

	<div
		class="col-span-3 sm:col-span-2 group hover:scale-95 transition duration-300 h-52 flex p-8 flex-col justify-between overflow-hidden rounded-2xl bg-[#f5f5f5] text-black"
	>
		<a
			class="flex flex-col h-full justify-between"
			href="//github.com/glazk0"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden>
				<span class="flex justify-between items-center">
					<Github class="h-8 w-8" />
					<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
				</span>
			</span>
			<span>
				<span class="block font-title font-bold">github</span>
				<span class="block text-sm">my open source work & contributions</span>
			</span>
		</a>
	</div>

	<div
		class="col-span-3 sm:col-span-2 group hover:scale-95 transition duration-300 h-52 flex p-8 flex-col justify-between overflow-hidden rounded-2xl bg-secondary text-white"
	>
		<a class="flex flex-col h-full justify-between" href="/projects">
			<span aria-hidden>
				<span class="flex justify-between items-center">
					<Code class="h-8 w-8" />
					<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
				</span>
			</span>
			<span>
				<span class="block font-title font-bold">(side) projects</span>
				<span class="block text-sm">the things i've been working on</span>
			</span>
		</a>
	</div>

	<div
		class="col-span-full sm:col-span-4 group hover:scale-95 transition duration-300 h-52 flex p-8 flex-col justify-between overflow-hidden rounded-2xl bg-indigo-500 text-white"
	>
		<a
			href="discord://-/users/{discordId}"
			class="flex h-full flex-col items-center justify-center"
		>
			<span class="sr-only">Discord</span>
			<span class="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
				<Discord class="w-14 h-14" />
			</span>
		</a>
	</div>

	<div
		class="col-span-full sm:col-span-4 h-full bg-blue-500 text-white flex rounded-xl p-8 flex-col gap-2"
	>
		<h2 class="font-title text-xl font-bold">
			Hello world <span class="inline">⭐</span>
		</h2>

		<p>I'm Théo, a proud Belgian diving deep into the magical realms of computer science.</p>

		<p class="break-normal">
			Picture this: I'm on a quest, armed with my coding sword and shield, battling digital dragons
			on a daily basis. Lately, I've conjured up some cool creations like the
			<a href="https://github.com/lilith-discord-bot/lilith" target="_blank" class="underline hover:opacity-80"
				>Diablo 4 Discord bot</a
			>, a mystical
			<a href="https://github.com/glazk0/zeki" target="_blank" class="underline hover:opacity-80"
				>Palia Discord bot</a
			>, and an adventurous
			<a
				href="https://aeternum.me?ref=glazk0.dev"
				target="_blank"
				class="underline hover:opacity-80">New World Discord bot</a
			>.
		</p>
	</div>

	<div
		class="group hover:scale-95 transition duration-300 col-span-3 sm:col-span-2 overflow-hidden bg-black text-white rounded-2xl"
	>
		<a
			href="//twitter.com/glazk0"
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-full items-center justify-center text-4xl"
		>
			<span class="sr-only">X</span>
			<span class="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
				<X class="w-8 h-8" />
			</span>
		</a>
	</div>

	<div class="h-52 col-span-3 sm:col-span-2 bg-[#9c27b0] rounded-xl px-4 py-8 sm:px-8">
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
	</div>

	<div
		class="col-span-full sm:col-span-4 group hover:scale-95 transition duration-300 h-52 flex p-8 flex-col justify-between overflow-hidden rounded-2xl bg-[#5850ec] text-white"
	>
		<a
			class="flex flex-col h-full justify-between"
			href="//plausible.glazk0.dev/glazk0.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden>
				<span class="flex justify-between">
					<Plausible class="w-8 h-8" />
					<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
				</span>
			</span>
			<span>
				<span class="block font-title font-bold">plausible</span>
				<span class="block text-sm">interested about some analytics ?</span>
			</span>
		</a>
	</div>
</div>
