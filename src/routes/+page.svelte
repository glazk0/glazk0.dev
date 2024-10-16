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
		class="col-span-full flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-[#009688] p-8 text-white backdrop-blur-2xl sm:col-span-4"
	>
		<div class="flex items-center justify-between">
			<img class="h-20 w-20 rounded-full border-4 border-white/20" src="https://s3.glazk0.dev/glazk0.dev/assets/me.webp" alt="me" />
			<a class="rounded-xl bg-white/30 p-2 hover:opacity-80" href="//github.com/glazk0/glazk0.dev"
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
		class="group col-span-3 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-[#f5f5f5] text-black transition duration-300 hover:scale-95 sm:col-span-2"
	>
		<a
			class="flex h-full flex-col justify-between p-8"
			href="//github.com/glazk0"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden>
				<span class="flex items-center justify-between">
					<Github class="h-8 w-8" />
					<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
				</span>
			</span>
			<span>
				<span class="font-title block font-bold">github</span>
				<span class="block text-sm">my open source work & contributions</span>
			</span>
		</a>
	</div>

	<div
		class="group col-span-3 flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-secondary text-white transition duration-300 hover:scale-95 sm:col-span-2"
	>
		<a class="flex h-full flex-col justify-between p-8" href="/projects">
			<span aria-hidden>
				<span class="flex items-center justify-between">
					<Code class="h-8 w-8" />
					<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
				</span>
			</span>
			<span>
				<span class="font-title block font-bold">(side) projects</span>
				<span class="block text-sm">the things i've been working on</span>
			</span>
		</a>
	</div>

	<div
		class="group col-span-full flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-indigo-500 text-white transition duration-300 hover:scale-95 sm:col-span-4"
	>
		<a
			href="discord://-/users/{discordId}"
			class="flex h-full flex-col items-center justify-center p-8"
		>
			<span class="sr-only">Discord</span>
			<span class="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
				<Discord class="h-14 w-14" />
			</span>
		</a>
	</div>

	<div
		class="col-span-full flex h-full flex-col gap-2 rounded-xl bg-blue-500 p-8 text-white sm:col-span-4"
	>
		<h2 class="font-title text-xl font-bold">
			Hello world <span class="inline">⭐</span>
		</h2>

		<p>I'm Théo, a proud Belgian diving deep into the magical realms of computer science.</p>

		<p class="break-normal">
			Picture this: I'm on a quest, armed with my coding sword and shield, battling digital dragons
			on a daily basis. Lately, I've conjured up some cool creations like the
			<a
				href="https://github.com/lilith-discord-bot/lilith"
				target="_blank"
				class="underline hover:opacity-80">Diablo 4 Discord bot</a
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
		class="group col-span-3 overflow-hidden rounded-2xl bg-black text-white transition duration-300 hover:scale-95 sm:col-span-2"
	>
		<a
			href="//twitter.com/glazk0"
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-full items-center justify-center text-4xl"
		>
			<span class="sr-only">X</span>
			<span class="transition duration-300 group-hover:-rotate-[10deg] group-hover:scale-[1.3]">
				<X class="h-8 w-8" />
			</span>
		</a>
	</div>

	<div class="col-span-3 h-52 rounded-xl bg-[#9c27b0] px-4 py-8 sm:col-span-2 sm:px-8">
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
		class="group col-span-full flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-[#5850ec] text-white transition duration-300 hover:scale-95 sm:col-span-4"
	>
		<a
			class="flex h-full flex-col justify-between p-8"
			href="//plausible.glazk0.dev/glazk0.dev"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden>
				<span class="flex justify-between">
					<Plausible class="h-8 w-8" />
					<External class="opacity-50 transition duration-500 group-hover:opacity-100" />
				</span>
			</span>
			<span>
				<span class="font-title block font-bold">plausible</span>
				<span class="block text-sm">interested about some analytics ?</span>
			</span>
		</a>
	</div>
</div>
