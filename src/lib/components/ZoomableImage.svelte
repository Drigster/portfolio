<script lang="ts">
	import { X } from "@o7/icon/lucide";
	import type { PanzoomObject } from "@panzoom/panzoom";

	let {
		scrollable,
		src,
		alt,
	}: { scrollable?: boolean; src: string; alt?: string } = $props();

	let open = $state(false);
	let label = $state<HTMLLabelElement>();
	let img = $state<HTMLImageElement>();

	let panzoom: PanzoomObject | undefined;
	let moved = false;

	// Must match the max-width media query in the styles below
	const MOBILE_QUERY = "(max-width: 767px)";

	// Pinch, drag and wheel zoom while the image is open fullscreen.
	// On desktop, tall scrollable images keep native scrolling instead;
	// on phones they are fitted to the screen and zoomable like the rest.
	$effect(() => {
		if (!open || !label || !img) return;
		if (scrollable && !window.matchMedia(MOBILE_QUERY).matches) return;
		const container = label;
		const image = img;

		let cancelled = false;
		let cleanup: (() => void) | undefined;

		// Loaded on demand: it is only needed in the browser, once an image is opened
		import("@panzoom/panzoom").then(({ default: Panzoom }) => {
			if (cancelled) return;

			// Panzoom writes inline styles; restore them when closing
			const containerStyle = container.getAttribute("style");
			const imageStyle = image.getAttribute("style");

			const pz = Panzoom(image, {
				minScale: 1,
				maxScale: 5,
				contain: "outside",
				panOnlyWhenZoomed: true,
				cursor: "",
			});
			panzoom = pz;

			const onWheel = (e: WheelEvent) => pz.zoomWithWheel(e);
			const onChange = () => (moved = true);
			container.addEventListener("wheel", onWheel, { passive: false });
			image.addEventListener("panzoomchange", onChange);

			cleanup = () => {
				container.removeEventListener("wheel", onWheel);
				image.removeEventListener("panzoomchange", onChange);
				pz.destroy();
				panzoom = undefined;
				restoreStyle(container, containerStyle);
				restoreStyle(image, imageStyle);
			};
		});

		return () => {
			cancelled = true;
			cleanup?.();
		};
	});

	function restoreStyle(el: HTMLElement, style: string | null) {
		if (style === null) el.removeAttribute("style");
		else el.setAttribute("style", style);
	}

	function onPointerDown() {
		moved = false;
	}

	// A tap closes the image, but not right after a pinch or drag,
	// or while zoomed in. The close button always works.
	function onClick(e: MouseEvent) {
		if (!open || !panzoom) return;
		// The label forwards a second click to the checkbox; only the first decides
		if (e.target instanceof HTMLInputElement) return;
		const onCloseButton = (e.target as Element).closest(".close-button");
		if (!onCloseButton && (moved || panzoom.getScale() > 1.01)) {
			e.preventDefault();
		}
	}
</script>

<!-- The label already toggles on click natively; these handlers only stop
     a pinch or drag from closing the image. -->
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<label
	bind:this={label}
	onpointerdown={onPointerDown}
	onclick={onClick}
	class="zoom-image modal flex h-full w-full items-baseline justify-center overflow-hidden"
	class:overflow-y-scroll={scrollable}
>
	<input
		class="modal-toggle absolute"
		type="checkbox"
		hidden
		bind:checked={open}
	/>
	<img
		bind:this={img}
		class:object-contain={!scrollable}
		class:scrollable
		{src}
		{alt}
	/>
	<span
		class="close-button absolute right-4 top-4 z-10 hidden rounded-lg border border-border bg-bg p-2 text-text hover:bg-bg-light"
	>
		<X size={28} />
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
		inset: 0;
		z-index: 50;
		width: 100vw;
		height: 100dvh;
		padding: auto;
		cursor: zoom-out;
		background-color: hsl(0 0 0 / 0.5);
		backdrop-filter: blur(10px);
	}

	/* Padding instead of margin keeps the image box the same size as the
	   overlay (needed by panzoom); object-fit draws inside the padding */
	.zoom-image:has(> input:checked) img {
		width: 100%;
		height: 100%;
		padding: 2.5rem;
	}

	.zoom-image:has(> input:checked) img.scrollable {
		height: auto;
		width: calc(100% - 5rem);
		margin: 2.5rem;
		padding: 0;
	}

	/* Use almost the whole screen on phones */
	@media (max-width: 767px) {
		.zoom-image:has(> input:checked) img {
			padding: 0.5rem;
		}

		/* Tall images are fitted and centred instead of scrolled */
		.zoom-image:has(> input:checked) {
			overflow: hidden;
		}

		.zoom-image:has(> input:checked) img.scrollable {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0.5rem;
			object-fit: contain;
		}
	}

	.zoom-image:has(> input:checked) .close-button {
		display: block;
	}
</style>
