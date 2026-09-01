<script lang="ts">
	import type { FoodCategory } from '$lib/data/food.js';
	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils.js';

	let { food }: { food: FoodCategory } = $props();
</script>

<a
	href={resolve('/')}
	class={cn(
		'group w-full rounded-xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md',
		'flex flex-col gap-3'
	)}
>
	<div
		class={cn(
			'flex h-28 items-center justify-center rounded-lg bg-linear-to-br text-5xl',
			food.gradient
		)}
	>
		<span aria-hidden="true">{food.emoji}</span>
	</div>
	<div class="flex flex-col gap-0.5">
		<h3 class="text-base font-semibold tracking-tight">{food.name}</h3>
		<p class="text-xs text-muted-foreground">
			Top 100 <span class="capitalize">{food.city}</span>
		</p>
		<p class="text-xs text-muted-foreground">
			{food.places.toLocaleString()} {food.places === 1 ? 'place' : 'places'}
		</p>
	</div>
</a>