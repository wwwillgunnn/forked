<script lang="ts">
	import { Search, Flame } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Tabs, TabsList, TabsContent, TabsTrigger } from '$lib/components/ui/tabs/index.js';
	import type { Snippet } from 'svelte';
	import { foodTabs } from '$lib/data/food.js';

	let { popular, query = $bindable('') }: { popular: Snippet; query?: string } = $props();
</script>

<div class="space-y-6">
	<div class="space-y-1.5">
		<h1 class="text-3xl font-semibold tracking-tight">Discover Food</h1>
		<p class="text-muted-foreground">Find something worth eating.</p>
	</div>

	<div class="relative">
		<Search class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
		<Input
			type="search"
			bind:value={query}
			placeholder="What are you craving?"
			class="h-11 rounded-full bg-card pl-9 text-base"
			aria-label="What are you craving?"
		/>
	</div>

	<Tabs value="popular" class="space-y-6">
		<h2 class="sr-only">Browse food</h2>
		<TabsList
			variant="line"
			class="w-full justify-start gap-6 rounded-none border-b border-border px-1"
		>
			{#each foodTabs as tab (tab.value)}
				<TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
			{/each}
		</TabsList>

		<TabsContent value="popular" class="space-y-4">
			<h2 class="flex items-center gap-2 text-lg font-semibold tracking-tight">
				<Flame class="size-4.5 text-tomato" />
				Popular right now
			</h2>
			{@render popular()}
		</TabsContent>

		{#each foodTabs as tab (tab.value)}
			{#if tab.value !== 'popular'}
				<TabsContent value={tab.value} class="space-y-4">
					<h2 class="text-lg font-semibold tracking-tight">{tab.label}</h2>
					<p class="text-sm text-muted-foreground">
						Browse {tab.label.toLowerCase()} around you.
					</p>
				</TabsContent>
			{/if}
		{/each}
	</Tabs>
</div>