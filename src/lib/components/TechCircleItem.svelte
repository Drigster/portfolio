<script lang="ts">
	import type { Component } from "svelte";

	let {
		id,
		items,
		position,
		icon: Icon,
	}: {
		id: string;
		items: number;
		position: number;
		icon: Component;
	} = $props();
</script>

<div
	class="tech-circle-item pointer-events-none"
	style="--deg: {(360 / items) * (position - 1)}deg;"
>
	<label class="pointer-events-auto cursor-pointer">
		<input {id} type="checkbox" hidden />
		<Icon size="4.4vh" />
	</label>
</div>

<style>
	.tech-circle-item {
		position: absolute;
		width: 100%;
		height: 100%;
		transform: rotate(var(--deg));
	}

	@keyframes spin2 {
		to {
			--rot-deg: 360deg;
			transform: translate(-2.2vh, -2.2vh)
				rotate(calc(-1 * var(--deg) + 360deg));
		}
	}

	:global(.tech-circle-item label) {
		position: absolute;
		left: 0;
		top: 50%;
		transform-origin: 50% 50%;
		animation: spin2 30s linear infinite reverse;
		transform: translate(-2.2vh, -2.2vh) rotate(calc(-1 * var(--deg)));
	}

	:global(.tech-circle.reverse .tech-circle-item label) {
		animation-direction: normal;
	}
</style>
