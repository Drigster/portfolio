<script lang="ts">
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
</script>

<div
	{id}
	class="flex flex-col row-span-2 grid-rows-subgrid md:grid md:gap-0 md2:row-span-1 md2:grid-cols-2 md2:gap-4"
>
	<div
		class="rounded-t-lg md2:rounded-lg aspect-[16/9] w-full h-full bg-bg border border-border overflow-x-hidden overflow-y-scroll flex items-baseline justify-center"
	>
		<img
			class={imageScroll ? "w-full h-auto" : "w-auto h-full"}
			src={image}
			alt=""
		/>
	</div>
	<div
		class="bg-bg border border-border p-4 rounded-b-lg md2:rounded-lg flex flex-col gap-3 md2:aspect-[16/9]"
	>
		<h2 class="text-text text-3xl">{title}</h2>
		<p class="text-text-muted flex-1 min-h-0 overflow-y-auto">
			{description}
		</p>
		<div class="text-text-muted flex gap-1">
			{#each technologies as technology}
				<span class="bg-bg-light px-2 rounded-xl">{technology}</span>
			{/each}
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
			{#if url}
				<a
					class="bg-bg-light p-3 rounded-lg text-md hover:opacity-50 text-center"
					href={url}
					target="_blank">View</a
				>
			{/if}
			{#if sourceUrl}
				<a
					class="bg-bg-light p-3 rounded-lg text-md hover:opacity-50 text-center"
					href={sourceUrl}
					target="_blank">Source</a
				>
			{/if}
		</div>
	</div>
</div>
