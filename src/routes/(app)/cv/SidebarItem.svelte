<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		title,
		children,
		class: _class,
	}: { title: string; children: Snippet; class?: string } = $props();
</script>

<div>
	<h2
		class="my-4 border-b border-[var(--text-color)] text-lg font-bold uppercase"
	>
		{title}
	</h2>
	<div class="pl-1 {_class}">{@render children()}</div>
</div>
