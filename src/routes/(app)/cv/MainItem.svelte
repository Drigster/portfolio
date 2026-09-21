<script lang="ts">
	import type { Component, Snippet } from "svelte";

	let {
		title,
		children,
		class: _class,
		icon,
	}: {
		title: string;
		children: Snippet;
		class?: string;
		icon?: Component;
	} = $props();

	let Icon = $derived(icon);
</script>

<div>
	<div
		class="my-4 flex items-center gap-3 border-b border-[var(--text-color)] text-lg font-bold uppercase"
	>
		{#if Icon != null}
			<Icon size="24" />
		{/if}
		<h2 class="">{title}</h2>
	</div>
	<div class="pl-1 {_class}">{@render children()}</div>
</div>
