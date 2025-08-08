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
	class="tech-stats absolute hidden text-text-muted flex-col inset-0 bg-[#0000008e] backdrop-blur-sm rounded-lg"
	data-for={id}
>
	<div
		class="flex items-center justify-between border-b mx-fixed-4 mt-fixed-3 p-fixed-1"
	>
		<div class="pt-fixed-1">
			<h3 class="text-clamp-xl uppercase text-accent">{title}</h3>
			<h4 class="text-clamp-sm -mt-fixed-2">{type}</h4>
		</div>
		<Icon size="4.4vh" />
	</div>
	<div class="px-fixed-1 py-fixed-2 border-b text-text flex mx-fixed-4">
		<span>Experience:</span>
		<Raiting class="ml-fixed-2" {rating} size="1vh" />
	</div>
	<div
		class="overflow-y-scroll overflow-x-hidden px-fixed-1 h-full py-fixed-2 border-b mx-fixed-4"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
	<div class="flex items-end justify-center mx-fixed-4">
		<label for={id} class="p-fixed-3 cursor-pointer">Close</label>
	</div>
</div>
