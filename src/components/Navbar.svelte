<script lang="ts">
	import {  Omega, BookOpenText, PlusIcon } from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
    let { children } = $props();
	const links = [

		{ label: 'some C', href: '/code', icon: BookOpenText  },
		{ label: 'add content', href: '/addCode', icon: PlusIcon  },
	
	];
</script>

<div class=" h-screen  flex border border-surface-200-800">
	<!-- --- -->
	<div>	<Navigation layout="rail">
		<Navigation.Header>
			<Navigation.TriggerAnchor href="/#" title="View Homepage" aria-label="View Homepage">
				<Omega class="size-20 text-amber-500" />
			</Navigation.TriggerAnchor>
		</Navigation.Header>
		<Navigation.Content>
			<Navigation.Menu>
				{#each links as link (link)}
					{@const Icon = link.icon}
					<Navigation.TriggerAnchor href={link.href}>
						<Icon class="size-10 text-amber-500" />
						<Navigation.TriggerText ></Navigation.TriggerText>
					</Navigation.TriggerAnchor>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>

	</Navigation></div>

	<!-- --- -->
	 <main class=" flex-1 min-h-0"><div class=" h-full overflow-auto">
		{@render children()}
	</div>
	 </main>
	
</div>