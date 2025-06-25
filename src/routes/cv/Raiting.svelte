<script lang="ts">
	let {
		title,
		rating,
		size,
	}: { title: string; rating: number; size: string | number } = $props();
	if (!Number.isNaN(Number(size))) {
		size = size + 'px';
	}
</script>

<div class="flex items-center justify-between gap-1">
	<span class="font-bold">{title}</span>
	<span class="flex items-center gap-1">
		{#each Array(7) as _, i}
			{#if i < rating}
				<div
					style="height: {size}; width: calc({size} / 2);"
					class="on rounded-[2px]"
				></div>
			{:else}
				<div
					style="height: {size}; width: calc({size} / 2);"
					class="off rounded-[2px]"
				></div>
			{/if}
		{/each}
	</span>
</div>

<style>
	.on {
		background-color: var(--text-color, white);
	}
	.off {
		background-color: var(--color-4, rgb(107, 114, 128));
	}
</style>
