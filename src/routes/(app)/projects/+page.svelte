<script lang="ts">
	import marmaks1 from "$lib/assets/marmaks1.webp";
	import marmaks2 from "$lib/assets/marmaks2.webp";
	import marmaks3 from "$lib/assets/marmaks3.webp";
	import foxytown1 from "$lib/assets/foxytown1.webp";
	import foxytown2 from "$lib/assets/foxytown2.webp";
	import foxytown3 from "$lib/assets/foxytown3.webp";
	import taskupeatus1 from "$lib/assets/taskupeatus1.webp";
	import portfolio1 from "$lib/assets/portfolio1.webp";
	import tallquiz1 from "$lib/assets/tallquiz1.webp";
	import tallquiz2 from "$lib/assets/tallquiz2.webp";
	import tallquiz3 from "$lib/assets/tallquiz3.webp";
	import tallquiz4 from "$lib/assets/tallquiz4.webp";
	import Project from "./Project.svelte";
	import { resolve } from "$app/paths";
</script>

<svelte:head>
	<title>Projects - Gabriel Jõe</title>
</svelte:head>

<div
	class="sticky mx-auto mt-4 flex w-[calc(100vw-2rem)] max-w-[968px] justify-center gap-2 rounded-lg border border-border bg-bg p-2"
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
	class="content mx-auto grid w-screen max-w-[1000px] auto-rows-[max-content] grid-cols-1 gap-4 p-4 md:grid-cols-2 md2:auto-rows-fr md2:grid-cols-1"
>
	<Project
		id="tallquiz"
		title="TallQuiz"
		description="A quiz app for exploring Tallinn's Old Town. Landmarks are placed on a 3D map, each with its own quiz, hints and score. Includes accounts, an admin dashboard with answer statistics, and Stripe payments for access."
		technologies={["SvelteKit", "TypeScript", "Turso", "MapLibre"]}
		images={[
			{ src: tallquiz1, scrollable: true },
			{ src: tallquiz2 },
			{ src: tallquiz3 },
			{ src: tallquiz4 },
		]}
		url="https://tallquiz.vercel.app"
	/>
	<Project
		id="taskupeatus"
		title="TaskuPeatus"
		description="TaskuPeatus is a phone app for public transport users in Tallinn. It uses GPS and public APIs to show when transport arrives at the nearest stops."
		technologies={["Rust", "Freya"]}
		images={[{ src: taskupeatus1 }]}
		sourceUrl="https://github.com/drigster/tasku_peatus"
	/>
	<Project
		id="foxytown"
		title="foxy.town"
		description="Foxy.town is the website for my Minecraft server. Players can register and manage everything about their character, and an advanced admin dashboard allows editing all server and launcher info."
		technologies={["SvelteKit", "TypeScript", "Turso"]}
		images={[{ src: foxytown1 }, { src: foxytown2 }, { src: foxytown3 }]}
		url="https://foxy.town"
		sourceUrl="https://github.com/drigster/minecraftsitev4"
	/>
	<Project
		id="portfolio"
		title="Portfolio"
		description="This website."
		technologies={["SvelteKit", "TypeScript"]}
		images={[{ src: portfolio1 }]}
		url="https://drigster.dev"
		sourceUrl="https://github.com/drigster/portfolio"
	/>
	<Project
		id="marmakc"
		title="Marmakc.com"
		description="Website for an electrical panel manufacturing company, with a simple admin panel for adding products and updating contact information."
		technologies={["SvelteKit", "TypeScript", "Drizzle"]}
		images={[
			{ src: marmaks1, scrollable: true },
			{ src: marmaks2, scrollable: true },
			{ src: marmaks3 },
		]}
		url="https://marmakc.com/"
		sourceUrl="https://github.com/drigster/marmaks"
	/>
</div>
