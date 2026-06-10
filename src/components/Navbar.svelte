<script lang="ts">
	import { Omega, BookOpenText, PlusIcon } from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	let { children } = $props();
	const links = [

		{ label: 'kod', href: '/code', icon: BookOpenText  },
		{ label: 'dodaj sadržaj', href: '/addCode', icon: PlusIcon  },
	
	];
</script>

<div class="flex min-h-dvh flex-col border border-surface-200-800 md:flex-row">
	<nav class="border-b border-surface-200-800 bg-surface-50/95 backdrop-blur md:hidden">
		<div class="flex items-center justify-between gap-3 px-4 py-3">
			<a href="/#" title="View Homepage" aria-label="View Homepage" class="inline-flex items-center">
				<Omega class="size-10 text-amber-500" />
			</a>
			<div class="flex items-center gap-2">
				{#each links as link (link.href)}
					{@const Icon = link.icon}
					<a href={link.href} class="inline-flex items-center rounded-full border border-surface-200-800 px-3 py-2">
						<Icon class="size-6 text-amber-500" />
						<span class="sr-only">{link.label}</span>
					</a>
				{/each}
			</div>
		</div>
	</nav>

	<div class="hidden border-r border-surface-200-800 md:block">
		<Navigation layout="rail">
			<Navigation.Header>
				<Navigation.TriggerAnchor href="/#" title="View Homepage" aria-label="View Homepage">
					<Omega class="size-20 text-amber-500" />
				</Navigation.TriggerAnchor>
			</Navigation.Header>
			<Navigation.Content>
				<Navigation.Menu>
					{#each links as link (link.href)}
						{@const Icon = link.icon}
						<Navigation.TriggerAnchor href={link.href}>
							<Icon class="size-10 text-amber-500" />
							<Navigation.TriggerText></Navigation.TriggerText>
						</Navigation.TriggerAnchor>
					{/each}
				</Navigation.Menu>
			</Navigation.Content>
		</Navigation>
	</div>

	<main class="min-h-0 flex-1">
		<div class="h-full overflow-auto">
			{@render children()}
		</div>
	</main>
</div>