<script lang="ts">
	import { X } from "@o7/icon/lucide";

	let {
		scrollable,
		src,
		alt,
	}: { scrollable?: boolean; src: string; alt?: string } = $props();
</script>

<label
	class="zoom-image modal w-full h-full overflow-hidden flex items-baseline justify-center"
	class:overflow-y-scroll={scrollable}
>
	<input class="modal-toggle absolute" type="checkbox" hidden />
	<img class:object-contain={!scrollable} class:scrollable {src} {alt} />
	<span class="close-button hidden absolute top-4 right-4">
		<X size={42} />
	</span>
</label>

<style>
	:global(body:has(.modal .modal-toggle:checked)) {
		overflow: hidden;
	}

	.zoom-image {
		cursor: zoom-in;
		border-radius: inherit;
	}

	.zoom-image img {
		width: 100%;
		height: 100%;
	}

	.zoom-image img.scrollable {
		height: auto;
	}

	.zoom-image:has(> input:checked) {
		position: fixed;
		left: 0;
		top: 0;
		padding: auto;
		cursor: zoom-out;
		background-color: hsl(0 0 0 / 0.5);
		backdrop-filter: blur(10px);
	}

	.zoom-image:has(> input:checked) img {
		margin: 2.5rem;
		width: calc(100% - 5rem);
		height: calc(100% - 5rem);
	}

	.zoom-image:has(> input:checked) img.scrollable {
		height: auto;
		width: 100%;
	}

	.zoom-image:has(> input:checked) .close-button {
		display: block;
	}
</style>
