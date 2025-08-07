<script lang="ts">
	import marmaks1 from "$lib/assets/marmaks1.png";
	import marmaks2 from "$lib/assets/marmaks2.png";
	import marmaks3 from "$lib/assets/marmaks3.png";
	import foxytown1 from "$lib/assets/foxytown1.png";
	import foxytown2 from "$lib/assets/foxytown2.png";
	import foxytown3 from "$lib/assets/foxytown3.png";
	import taskupeatus1 from "$lib/assets/taskupeatus1.jpg";
	import portfolio1 from "$lib/assets/portfolio1.png";
	import Project from "./Project.svelte";
</script>

<svelte:head>
	<title>Projects - Gabriel Jõe</title>
</svelte:head>

<div
	class="sticky flex gap-2 mt-4 p-2 rounded-lg justify-center bg-bg border border-border mx-4"
>
	<a class="bg-bg-light py-2 px-4 rounded-lg text-xl hover:opacity-50" href="/"
		>Home</a
	>
	<span class="bg-bg-light py-2 px-4 rounded-lg text-xl line-through"
		>Homelab</span
	>
	<a
		class="bg-bg-light py-2 px-4 rounded-lg text-xl hover:opacity-50"
		href="/cv">CV</a
	>
</div>
<div
	class="grid auto-rows-[max-content] md2:auto-rows-fr grid-cols-1 md:grid-cols-2 md2:grid-cols-1 content mx-auto gap-4 p-4"
>
	<Project
		id="taskupeatus"
		title="TaskuPeatus"
		description="TaskuPeats is a phone app for public transport users in Tallinn. It uses
				GPS and public APIs to show users when transport on the closest stops
				arrives."
		technologies={["Flutter"]}
		image={taskupeatus1}
		sourceUrl="https://github.com/drigster/taskupeatus"
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
