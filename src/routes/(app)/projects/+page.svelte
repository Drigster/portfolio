<script lang="ts">
	import marmaks1 from "$lib/assets/marmaks1.png";
	import foxytown1 from "$lib/assets/foxytown1.png";
	import taskupeatus1 from "$lib/assets/taskupeatus1.jpg";
	import portfolio1 from "$lib/assets/portfolio1.png";
	import Project from "./Project.svelte";
	import { resolve } from "$app/paths";
</script>

<svelte:head>
	<title>Projects - Gabriel Jõe</title>
</svelte:head>

<div
	class="sticky mx-4 mt-4 flex justify-center gap-2 rounded-lg border border-border bg-bg p-2"
>
	<a
		class="rounded-lg bg-bg-light px-4 py-2 text-xl hover:opacity-50"
		href={resolve("/")}>Home</a
	>
	<span class="rounded-lg bg-bg-light px-4 py-2 text-xl line-through"
		>Homelab</span
	>
	<a
		class="rounded-lg bg-bg-light px-4 py-2 text-xl hover:opacity-50"
		href={resolve("/cv")}>CV</a
	>
</div>
<div
	class="content mx-auto grid auto-rows-[max-content] grid-cols-1 gap-4 p-4 md:grid-cols-2 md2:auto-rows-fr md2:grid-cols-1"
>
	<Project
		id="taskupeatus"
		title="TaskuPeatus"
		description="TaskuPeats is a phone app for public transport users in Tallinn. It uses
				GPS and public APIs to show users when transport on the closest stops
				arrives."
		technologies={["Flutter"]}
		image={taskupeatus1}
		sourceUrl="https://github.com/drigster/tasku_peatus"
	/>
	<Project
		id="foxytown"
		title="foxy.town"
		description="Foxy.town is a website for my minecraft. It has user registration and
				managment, allowing users to change all the info about theit character.
				And advanced admin dashboard that allows editing all info about servers
				and launcher;"
		technologies={["SvelteKit", "TypeScript", "Turso"]}
		image={foxytown1}
		url="https://foxy.town"
		sourceUrl="https://github.com/drigster/minecraftsitev4"
	/>
	<Project
		id="portfolio"
		title="Protfolio"
		description="This website."
		technologies={["SvelteKit", "TypeScript"]}
		image={portfolio1}
		url="https://drigster.dev"
		sourceUrl="https://github.com/drigster/portfolio"
	/>
	<Project
		id="marmakc"
		title="Marmakc.com"
		description="Website for a electrical panel manufacturing company. Has a simple admin
				panel that allows adding products and changing contact information."
		technologies={["SvelteKit", "TypeScript", "Drizzle"]}
		image={marmaks1}
		imageScroll={true}
		url="https://marmakc.com/"
		sourceUrl="https://github.com/drigster/marmaks"
	/>
</div>

<style>
	.content {
		max-width: 1000px;
	}
</style>
