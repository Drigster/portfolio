<script lang="ts">
	let {
		title,
		rating,
		size,
		class: className,
	}: {
		title?: string;
		rating: number;
		size: string | number;
		class?: string;
	} = $props();
	if (!Number.isNaN(Number(size))) {
		size = size + "px";
	}
</script>

<div class="{className} flex items-center justify-between gap-1">
	{#if title != undefined}
		<span class="font-bold">{title}</span>
	{/if}
	<span class="flex items-center" style="gap: calc({size} / 2);">
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
