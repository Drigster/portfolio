<script lang="ts">
	let { color, class: className }: { color: string; class?: string } = $props();
	let x = $state(-100);
	let y = $state(-100);

	export function onMouseMove(e: MouseEvent) {
		x = e.pageX;
		y = e.pageY;
	}
</script>

<div
	class="blob {className}"
	style="--fromTop: {y}px;--fromLeft: {x}px; --color: {color};"
></div>

<style>
	.blob {
		position: absolute;
		top: var(--fromTop);
		left: var(--fromLeft);
		width: 12rem;
		height: 12rem;
		background: radial-gradient(circle, var(--color) 15%, rgba(0, 0, 0, 0) 75%);
		transform: translate(-50%, -50%);
		transition: all 200ms linear;
		z-index: -10;
	}
</style>
