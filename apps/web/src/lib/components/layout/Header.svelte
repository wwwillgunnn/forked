<script lang="ts">
	import { Bell, Search } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import {
		Tooltip,
		TooltipContent,
		TooltipTrigger
	} from '$lib/components/ui/tooltip/index.js';
</script>

<header class="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-4 border-b border-border bg-background px-4 lg:px-6">
	<a href={resolve('/')} class="flex shrink-0 items-center gap-2" aria-label="Forked home">
		<span class="flex size-8 items-center justify-center rounded-md bg-primary text-base text-primary-foreground"
			>🍴</span
		>
		<span class="text-lg font-semibold tracking-tight">FORKED</span>
	</a>

	<div class="relative hidden max-w-md flex-1 md:block">
		<Search class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
		<Input
			type="search"
			placeholder="Search food, restaurants..."
			class="h-9 rounded-full bg-card pl-9"
			aria-label="Search food and restaurants"
		/>
	</div>

	<div class="flex flex-1 items-center justify-end gap-2 md:flex-none md:justify-start">
		<Tooltip>
			<TooltipTrigger
				class={buttonVariants({ variant: 'ghost', size: 'icon' }) + ' rounded-full'}
				aria-label="Notifications"
			>
				<span class="rounded-full">
					<Bell class="size-4.5" />
				</span>
			</TooltipTrigger>
			<TooltipContent>Notifications</TooltipContent>
		</Tooltip>

		<a
			href={resolve('/')}
			class="flex items-center gap-2 rounded-full py-1 pr-1 pl-1 transition-colors hover:bg-muted lg:pl-1.5"
		>
			<Avatar size="default">
				<AvatarFallback>AM</AvatarFallback>
			</Avatar>
			<span class="hidden text-sm font-medium lg:inline">Alex</span>
		</a>
	</div>
</header>