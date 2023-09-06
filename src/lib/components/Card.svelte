<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string;

	export let scale = false;

	export { className as class };
</script>

<div
	class={cn('group h-full transition duration-500', className, {
		'hover:scale-95': scale
	})}
>
	<slot />
</div>
