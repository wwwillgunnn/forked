<script lang="ts">
	import {
		Activity,
		CircleUserRound,
		House,
		List,
		Map,
		Swords,
		Trophy,
		UtensilsCrossed
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils.js';

	type NavItem = {
		label: string;
		icon: typeof House;
		active?: boolean;
	};

	const navItems: NavItem[] = [
		{ label: 'Home', icon: House, active: true },
		{ label: 'Food', icon: UtensilsCrossed },
		{ label: 'Map', icon: Map },
		{ label: 'Top 100', icon: Trophy },
		{ label: 'Compare', icon: Swords },
		{ label: 'Lists', icon: List },
		{ label: 'Activity', icon: Activity },
		{ label: 'Profile', icon: CircleUserRound }
	];
</script>

<aside class="hidden w-60 shrink-0 border-r border-border bg-sidebar lg:block">
	<nav class="space-y-0.5 px-3 py-4" aria-label="Main navigation">
		{#each navItems as item (item.label)}
			<a
				href={resolve('/')}
				data-slot="nav-item"
				aria-current={item.active ? 'page' : undefined}
				class={cn(
					'flex h-9 items-center gap-3 rounded-md px-3 text-sm font-medium text-sidebar-foreground/70 transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
					item.active && 'bg-sidebar-accent text-sidebar-accent-foreground'
				)}
			>
				<item.icon class="shrink-0 size-4.5" />
				<span>{item.label}</span>
			</a>
		{/each}
	</nav>
</aside>