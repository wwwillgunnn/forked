<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import { TooltipProvider } from '$lib/components/ui/tooltip/index.js';
	let { children } = $props();
</script>

<TooltipProvider>
	<div class="flex min-h-screen flex-col">
		<Header />
		<div class="flex flex-1">
			<Sidebar />
			<main class="min-w-0 flex-1">
				{@render children?.()}
			</main>
		</div>
	</div>
</TooltipProvider>