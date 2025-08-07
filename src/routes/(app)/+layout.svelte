<script lang="ts">
	import BackgroundBlob from "$lib/components/BackgroundBlob.svelte";
	let blob = $state<BackgroundBlob>();

	const { children } = $props();
</script>

<div
	class="background relative grid content-start justify-center overflow-hidden"
	aria-hidden="true"
	onmousemove={blob?.onMouseMove}
>
	<BackgroundBlob class="hidden md2:block" color="red" bind:this={blob} />
	{@render children()}
</div>

<style>
	.background {
		background: url("$lib/assets/background.svg");
		/* min-height: 100vh; */
	}
</style>
