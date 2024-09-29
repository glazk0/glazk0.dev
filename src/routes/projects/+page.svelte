<script lang="ts">
	import projects from '$lib/data/projects.json';

	import { cn } from '$lib/utils';

	let colors = [
		'bg-red-500',
		'bg-orange-500',
		'bg-amber-500',
		'bg-yellow-500',
		'bg-lime-500',
		'bg-green-500',
		'bg-emerald-500',
		'bg-teal-500',
		'bg-cyan-500',
		'bg-sky-500',
		'bg-blue-500',
		'bg-indigo-500',
		'bg-violet-500',
		'bg-purple-500',
		'bg-fuchsia-500',
		'bg-pink-500',
		'bg-rose-500'
	];
</script>

<div class="flex flex-col gap-4">
	{#each projects as project, index (index)}
		<h1 class="text-xl font-bold">
			{project.name}
		</h1>
		<ul class="flex flex-col gap-4">
			{#each project.projects as subproject, i (i)}
				<li
					class={cn(
						'shadow-md-500 flex flex-col gap-2 rounded-lg text-white',
						colors[Math.floor(Math.random() * colors.length)]
					)}
				>
					<a class="flex p-4" href={subproject.link} target="_blank" rel="noopener noreferrer">
						<span class="flex flex-col gap-2">
							<h2 class="text-lg font-bold">
								{subproject.name}
							</h2>
							<p>
								{subproject.description}
							</p>
							<span class="flex flex-wrap gap-2">
								{#each subproject.tags as tag}
									<span class={cn('rounded-full bg-black/10 px-2 py-1  text-sm font-semibold')}>
										{tag}
									</span>
								{/each}
							</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	{/each}
</div>
