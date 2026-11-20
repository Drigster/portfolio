<script lang="ts">
	import ZoomableImage from "$lib/components/ZoomableImage.svelte";

	let {
		id,
		title,
		description,
		technologies,
		image,
		imageScroll,
		url,
		sourceUrl,
	}: {
		id: string;
		title: string;
		description: string;
		technologies: string[];
		image: string;
		imageScroll?: boolean;
		url?: string;
		sourceUrl?: string;
	} = $props();

	let descriptionEl = $state<HTMLParagraphElement>();
	let hasMore = $state(false);

	function updateFade() {
		if (!descriptionEl) return;
		const { scrollTop, scrollHeight, clientHeight } = descriptionEl;
		hasMore = scrollHeight - scrollTop - clientHeight > 1;
	}

	$effect(() => {
		if (!descriptionEl) return;
		const observer = new ResizeObserver(updateFade);
		observer.observe(descriptionEl);
		return () => observer.disconnect();
	});
</script>

<div
	{id}
	class="row-span-2 flex grid-rows-subgrid flex-col md:grid md:gap-0 md2:row-span-1 md2:grid-cols-2 md2:gap-4"
>
	<div
		class="aspect-[16/9] h-full w-full rounded-t-lg border border-border bg-bg md2:rounded-lg"
	>
		<ZoomableImage scrollable={imageScroll} src={image} alt="" />
	</div>
	<div
		class="flex flex-col gap-3 rounded-b-lg border border-border bg-bg p-4 md2:aspect-[16/9] md2:rounded-lg"
	>
		<h2 class="text-3xl text-text">{title}</h2>
		<p
			bind:this={descriptionEl}
			onscroll={updateFade}
			class:fade={hasMore}
			class="-my-1 min-h-0 flex-1 overflow-y-auto text-text-muted"
		>
			{description}
		</p>
		<div class="flex flex-wrap gap-1 text-xs text-text-muted">
			{#each technologies as technology (technology)}
				<span class="rounded-lg bg-bg-light px-1.5 py-0.5">{technology}</span>
			{/each}
		</div>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			{#if url}
				<a
					class="text-md rounded-lg bg-bg-light p-3 text-center hover:opacity-50"
					href={url}
					target="_blank">View</a
				>
			{/if}
			{#if sourceUrl}
				<a
					class="text-md rounded-lg bg-bg-light p-3 text-center hover:opacity-50"
					href={sourceUrl}
					target="_blank">Source</a
				>
			{/if}
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</div>
	</div>
</div>

<style>
	.fade {
		mask-image: linear-gradient(
			to bottom,
			black calc(100% - 2.5em),
			transparent
		);
	}
</style>
