<script lang="ts">
	import DiscoverHero from '$lib/components/home/DiscoverHero.svelte';
	import FoodCategoryCard from '$lib/components/home/FoodCategoryCard.svelte';
	import AllFoodGrid from '$lib/components/home/AllFoodGrid.svelte';
	import { popularFoods } from '$lib/data/food.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let query = $state('');
</script>

{#snippet popular()}
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
		{#each popularFoods as food (food.name)}
			<FoodCategoryCard {food} />
		{/each}
	</div>
{/snippet}

<div class="mx-auto w-full max-w-4xl space-y-8 px-4 py-8 lg:px-8">
	<DiscoverHero {popular} bind:query />

	<Separator class="my-2" />

	<AllFoodGrid {query} />
</div>