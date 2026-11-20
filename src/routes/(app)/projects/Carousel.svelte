<script lang="ts" module>
	export type CarouselImage = { src: string; scrollable?: boolean };
</script>

<script lang="ts">
	import ZoomableImage from "$lib/components/ZoomableImage.svelte";
	import { onMount } from "svelte";
	import { ChevronLeft, ChevronRight } from "@o7/icon/lucide";

	let { images }: { images: CarouselImage[] } = $props();

	let track = $state<HTMLDivElement>();
	let current = $state(0);
	// Controls need JS, so they only render after hydration
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	function goTo(index: number) {
		if (!track) return;
		const count = images.length;
		const next = (index + count) % count;
		track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
	}

	function onScroll() {
		if (!track || track.clientWidth === 0) return;
		current = Math.round(track.scrollLeft / track.clientWidth);
	}
</script>

<div class="carousel relative h-full w-full overflow-hidden">
	<div
		bind:this={track}
		onscroll={onScroll}
		class:js={mounted}
		class="track flex h-full w-full snap-x snap-mandatory overflow-x-auto"
	>
		{#each images as image, i (i)}
			<div class="h-full w-full shrink-0 snap-center snap-always">
				<ZoomableImage src={image.src} scrollable={image.scrollable} alt="" />
			</div>
		{/each}
	</div>

	{#if mounted && images.length > 1}
		<button
			class="control arrow absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-bg/70 p-1 text-text hover:bg-bg"
			aria-label="Previous image"
			onclick={() => goTo(current - 1)}
		>
			<ChevronLeft size={24} />
		</button>
		<button
			class="control arrow absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-bg/70 p-1 text-text hover:bg-bg"
			aria-label="Next image"
			onclick={() => goTo(current + 1)}
		>
			<ChevronRight size={24} />
		</button>
		<div
			class="control absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-bg/70 px-2 py-1.5"
		>
			{#each images as _, i (i)}
				<button
					class="h-2 w-2 rounded-full transition-colors"
					class:bg-text={i === current}
					class:bg-text-muted={i !== current}
					class:opacity-40={i !== current}
					aria-label="Go to image {i + 1}"
					aria-current={i === current}
					onclick={() => goTo(i)}
				></button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.carousel {
		border-radius: inherit;
	}

	.track {
		border-radius: inherit;
		/* Without JS the native scrollbar shows that there are more images */
		scrollbar-width: thin;
	}

	.track.js {
		scrollbar-width: none;
	}

	.track.js::-webkit-scrollbar {
		display: none;
	}

	/* Invisible hit area around the arrows, easier to tap on phones */
	.arrow::before {
		content: "";
		position: absolute;
		inset: -1.25rem -1rem;
	}

	.control {
		opacity: 0.75;
		transition: opacity 150ms;
	}

	.carousel:hover .control,
	.control:focus-visible {
		opacity: 1;
	}

	/* Hide controls while an image is open fullscreen */
	.carousel:has(:global(.modal-toggle:checked)) .control {
		display: none;
	}
</style>
