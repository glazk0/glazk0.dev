<script lang="ts">
	import projects from '$lib/data/projects.json';
</script>

<div class="flex flex-col gap-4">
	{#each projects as project}
		<h1 class="text-xl font-bold">
			{project.name}
		</h1>
		<ul class="flex flex-col gap-4">
			{#each project.projects as subproject}
				<li
					class="dark:bg-slate-50 bg-background-dark rounded-xl p-4 text-white dark:text-black hover:opacity-90"
				>
					<a href={subproject.link} target="_blank" rel="noopener noreferrer">
						<span class="flex flex-col gap-2">
							<h2 class="text-lg font-bold">
								{subproject.name}
							</h2>
							<p>
								{subproject.description}
							</p>
							<span class="flex flex-wrap gap-2">
								{#each subproject.tags as tag}
									<span
										class="px-2 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
									>
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
