<script lang="ts">
	import type { Component, Snippet } from "svelte";
	import Raiting from "./Raiting.svelte";

	let {
		id,
		title,
		type,
		rating,
		icon: Icon,
		children,
	}: {
		id: string;
		title: string;
		type: string;
		rating: number;
		icon: Component;
		children?: Snippet;
	} = $props();
</script>

<div
	class="tech-stats absolute inset-0 hidden flex-col rounded-lg bg-[#0000008e] text-text-muted backdrop-blur-sm"
	data-for={id}
>
	<div
		class="mx-fixed-4 mt-fixed-3 flex items-center justify-between border-b p-fixed-1"
	>
		<div class="pt-fixed-1">
			<h3 class="text-clamp-xl uppercase text-accent">{title}</h3>
			<h4 class="-mt-fixed-2 text-clamp-sm">{type}</h4>
		</div>
		<Icon size="4.4vh" />
	</div>
	<div class="mx-fixed-4 flex border-b px-fixed-1 py-fixed-2 text-text">
		<span>Experience:</span>
		<Raiting class="ml-fixed-2" {rating} size="1vh" />
	</div>
	<div
		class="mx-fixed-4 h-full overflow-x-hidden overflow-y-scroll border-b px-fixed-1 py-fixed-2"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
	<div class="mx-fixed-4 flex items-end justify-center">
		<label for={id} class="cursor-pointer p-fixed-3">Close</label>
	</div>
</div>
