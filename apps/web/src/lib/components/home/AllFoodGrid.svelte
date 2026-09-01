<script lang="ts">
	import { resolve } from '$app/paths';
	import { allFoods } from '$lib/data/food.js';

	let { query = '' }: { query?: string } = $props();

	let filtered = $derived(
		query.trim()
			? allFoods.filter((name) => name.toLowerCase().includes(query.trim().toLowerCase()))
			: allFoods
	);
</script>

<div class="space-y-4">
	<h2 class="text-lg font-semibold tracking-tight">All food {query.trim() ? `matching “${query.trim()}”` : ''}</h2>
	{#if filtered.length > 0}
		<ul class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
			{#each filtered as name (name)}
				<li>
					<a
						href={resolve('/')}
						class="block rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-accent"
					>
						{name}
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-sm text-muted-foreground">No food found for “{query.trim()}”.</p>
	{/if}
</div>