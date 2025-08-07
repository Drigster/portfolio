<script lang="ts">
	import { Link } from "@o7/icon/lucide";
	import type { Component } from "svelte";
	import Raiting from "./Raiting.svelte";

	let {
		id,
		title,
		type,
		rating,
		links,
		linkTitles,
		icon: Icon,
	}: {
		id: string;
		title: string;
		type: string;
		rating: number;
		links: string[];
		linkTitles: string[];
		icon: Component;
	} = $props();
</script>

<div
	class="tech-stats absolute hidden flex-col inset-0 bg-[#0000008e] backdrop-blur-sm rounded-lg"
	data-for={id}
>
	<div class="flex items-center justify-between border-b mx-4 mt-3 p-1">
		<div class="pt-1">
			<h3 class="text-xl uppercase">{title}</h3>
			<h4 class="text-sm -mt-2 text-gray-400">{type}</h4>
		</div>
		<Icon size="40" />
	</div>
	<div class="px-1 py-2 border-b flex mx-4">
		<span>Experience:</span>
		<Raiting class="ml-2" {rating} size={10} />
	</div>
	<div class="px-1 h-full py-2 border-b mx-4">
		<span>Projects:</span>
		<ul class="project-list">
			{#each links as link, i}
				<li>
					<a
						class="text-text hover:text-text-muted flex items-center gap-1"
						href={link}
					>
						{linkTitles[i]}<Link size="12" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex items-end justify-center mx-4">
		<label for={id} class="p-3 cursor-pointer text-text hover:text-text-muted"
			>Close</label
		>
	</div>
</div>

<style>
	@keyframes spin2 {
		to {
			--rot-deg: 360deg;
			transform: translate(-1.5rem, -1.5rem)
				rotate(calc(-1 * var(--deg) + 360deg));
		}
	}

	:global(.tech-circle-item label) {
		position: absolute;
		left: 0;
		top: 50%;
		transform-origin: 50% 50%;
		animation: spin2 30s linear infinite reverse;
		transform: translate(-1.5rem, -1.5rem) rotate(calc(-1 * var(--deg)));
	}

	:global(.tech-circle.reverse .tech-circle-item label) {
		animation-direction: normal;
	}
</style>
