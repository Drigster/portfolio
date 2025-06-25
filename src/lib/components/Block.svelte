<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		title,
		learnMore,
		children,
	}: {
		title: string;
		learnMore: string;
		children: Snippet;
	} = $props();
</script>

<section
	class="shadow-inner-xl flex flex-col gap-2 rounded-lg border bg-zinc-800 p-4 shadow-lg"
>
	{@render children()}
</section>
