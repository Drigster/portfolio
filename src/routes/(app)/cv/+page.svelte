<script lang="ts">
	import {
		AcademicCap,
		Calendar,
		CodeBracket,
		Envelope,
		Home,
		MapPin,
		ServerStack,
		CpuChip,
		Square3Stack3d,
		Cube,
		Printer,
		WrenchScrewdriver,
	} from "@o7/icon/heroicons/solid";
	import { Github, LinkedinBox } from "@o7/icon/remix/solid";
	import SidebarItem from "./SidebarItem.svelte";
	import Raiting from "$lib/components/Raiting.svelte";
	import MainItem from "./MainItem.svelte";
	import { page } from "$app/state";
	import { Paintbrush } from "@o7/icon/lucide";
	import { resolve } from "$app/paths";

	let theme: "dark" | "light" = $derived.by(() => {
		let themeParam = page.url.searchParams.get("theme");
		if (themeParam && themeParam == "light") {
			return "light";
		} else {
			return "dark";
		}
	});
</script>

<svelte:head>
	<title>CV - Gabriel Jõe</title>
</svelte:head>

<div
	class="nav sticky mx-auto mb-4 mt-4 flex w-screen max-w-[900px] justify-between gap-2 rounded-lg border border-border bg-bg p-2"
>
	<div class="nav flex gap-2">
		<a href={resolve("/")}>
			<button
				class="w-full rounded-lg bg-bg-light px-4 py-2 text-xl hover:bg-opacity-50 hover:text-accent"
			>
				Home
			</button>
		</a>
		<button
			class="w-full rounded-lg bg-bg-light px-4 py-2 text-xl disabled:bg-opacity-50 disabled:line-through"
			disabled
		>
			Homelab
		</button>
		<a href={resolve("/projects")}>
			<button
				class="w-full rounded-lg bg-bg-light px-4 py-2 text-xl hover:bg-opacity-50 hover:text-accent"
			>
				Projects
			</button>
		</a>
	</div>
	<span class="nav hidden border-t-2 border-bg-light"></span>
	<div class="nav flex gap-2">
		<div class="dropdown relative">
			<label
				class="dropdown flex w-full cursor-pointer items-center justify-center gap-0.5 rounded-lg bg-bg-light px-4 py-2 text-xl"
			>
				<input type="checkbox" hidden />
				Theme
				<Paintbrush class="inline" size="24" />
			</label>
			<div
				class="dropdown-content absolute inset-x-0 z-10 hidden flex-col rounded-b-lg border border-border bg-bg text-center text-lg"
			>
				<a
					class="border-t-2 border-bg bg-bg-light px-4 py-2 hover:bg-opacity-50"
					class:text-accent={theme == "dark"}
					href={resolve("/cv?theme=dark")}>Dark</a
				>
				<a
					class="border-t-2 border-bg bg-bg-light px-4 py-2 hover:bg-opacity-50"
					class:text-accent={theme == "light"}
					href={resolve("/cv?theme=light")}>Light</a
				>
			</div>
		</div>
		<button
			onclick={() => window.print()}
			class="flex w-full items-center justify-center gap-0.5 rounded-lg bg-bg-light px-4 py-2 text-xl hover:bg-opacity-50 hover:text-accent"
		>
			<span>Print<noscript>(CTRL + P)</noscript></span>
			<Printer class="inline" size="24" />
		</button>
	</div>
</div>
<div class="cv flex flex-col items-center justify-center px-4 pb-4">
	<div id="wrapper" class="max-w-[800px]">
		<div
			id="print-section"
			class="flex h-full w-full flex-col shadow-xl sm:aspect-[210/297] {theme}"
		>
			<div class="head bg-[var(--color-2)] px-6 py-3 font-bold">
				<h1 class="my-4 text-2xl uppercase">Gabriel Jõe</h1>
				<p class="my-3 text-xs">
					Backend Developer, Computer Science Student, Homelab Enthusiast
				</p>
			</div>
			<div class="relative grid min-h-0 flex-1 sm:grid-cols-[1fr_2fr]">
				<div class="sidebar bg-[var(--color-1)] px-4 py-3 text-xs">
					<SidebarItem title="Contact">
						<ul class="text-xs">
							<li class="mb-1 flex items-center gap-1">
								<Home size="16" />
								<a href="https://drigster.dev/">drigster.dev</a>
							</li>
							<li class="mb-1 flex items-center gap-1">
								<MapPin size="16" />
								<span>Tallinn, Estonia</span>
							</li>
							<li class="mb-1 flex items-center gap-1">
								<Envelope size="16" />
								<a href="mailto:me@drigster.dev">me@drigster.dev</a>
							</li>
							<li class="mb-1 flex items-center gap-1">
								<Github size="16" />
								<a href="https://github.com/drigster">@drigster</a>
							</li>
							<li class="mb-1 flex items-center gap-1">
								<LinkedinBox size="16" />
								<a href="https://www.linkedin.com/in/drigster/">@drigster</a>
							</li>
						</ul>
					</SidebarItem>
					<SidebarItem title="Skills" class="flex flex-col gap-2">
						<div>
							<h3>Programming Languages</h3>
							<ul>
								<li>
									<Raiting title="HTML/CSS" rating={5} size="1em" />
								</li>
								<li>
									<Raiting title="TypeScript" rating={5} size="1em" />
								</li>
								<li>
									<Raiting title="JavaScript/Node.js" rating={5} size="1em" />
								</li>
								<li>
									<Raiting title="Svelte" rating={5} size="1em" />
								</li>
								<li>
									<Raiting title="C#" rating={4} size="1em" />
								</li>
								<li>
									<Raiting title="Python" rating={3} size="1em" />
								</li>
								<li>
									<Raiting title="Rust" rating={3} size="1em" />
								</li>
								<li>
									<Raiting title="Java" rating={2} size="1em" />
								</li>
								<li>
									<Raiting title="React" rating={1} size="1em" />
								</li>
							</ul>
						</div>
						<div>
							<h3>Operating Systems</h3>
							<ul>
								<li>
									<Raiting title="Linux" rating={5} size="1em" />
								</li>
								<li>
									<Raiting title="Windows" rating={4} size="1em" />
								</li>
								<li>
									<Raiting title="MacOS" rating={0} size="1em" />
								</li>
							</ul>
						</div>
						<div>
							<h3>Tools</h3>
							<ul>
								<li>
									<Raiting title="Git" rating={5} size="1em" />
								</li>
								<li>
									<Raiting title="Proxmox" rating={3} size="1em" />
								</li>
								<li>
									<Raiting title="Docker" rating={2} size="1em" />
								</li>
								<li>
									<Raiting title="MySQL" rating={3} size="1em" />
								</li>
								<li>
									<Raiting title="Claude Code" rating={3} size="1em" />
								</li>
							</ul>
						</div>
						<div>
							<h3>Languages</h3>
							<ul>
								<li>
									<div class="flex items-center justify-between gap-1">
										<span class="font-bold">Russian</span>
										<span>Native</span>
									</div>
								</li>
								<li>
									<div class="flex items-center justify-between gap-1">
										<span class="font-bold">English</span>
										<span>C1</span>
									</div>
								</li>
								<li>
									<div class="flex items-center justify-between gap-1">
										<span class="font-bold">Estonian</span>
										<span>C1</span>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<h3>Other</h3>
							<div class="flex items-center justify-between gap-1">
								<span class="font-bold">Driving Licence</span>
								<span>Category B</span>
							</div>
						</div>
					</SidebarItem>
				</div>
				<div class="content bg-[var(--color-3)] px-8 py-3">
					<MainItem
						class="flex flex-col gap-2"
						title="Projects"
						icon={CodeBracket}
					>
						<div>
							<div class="flex items-center justify-between">
								<a href="https://github.com/drigster/tasku_peatus/">
									<h3 class="text-md font-bold">
										TaskuPeatus<span class="ml-1 text-[10px] opacity-30"
											>https://github.com/drigster/tasku_peatus/</span
										>
									</h3>
								</a>
								<div class="text-xs">
									<div class="flex items-center justify-end gap-0.5">
										<Calendar class="inline" size="14" />
										<span>2025 - Present</span>
									</div>
									<div class="flex items-center gap-0.5">
										<Cube class="inline" size="14" />
										<span>Rust; Freya</span>
									</div>
								</div>
							</div>
							<p class="text-xs">
								TaskuPeats is an app for public transport users in Tallinn. It
								uses GPS and public APIs to show users when transport on the
								closest stops arrives.
							</p>
						</div>
						<div>
							<div class="flex items-center justify-between">
								<a href="https://github.com/drigster/minecraftsitev4/">
									<h3 class="text-md font-bold">
										Foxy.town<span class="ml-1 text-[10px] opacity-30"
											>https://github.com/drigster/minecraftsitev4/</span
										>
									</h3>
								</a>
								<div class="text-xs">
									<div class="flex items-center justify-end gap-0.5">
										<Calendar class="inline" size="14" />
										<span>2019 - Present</span>
									</div>
									<div class="flex items-center gap-0.5">
										<Cube class="inline" size="14" />
										<span>Svelte; REST; Rust</span>
									</div>
								</div>
							</div>
							<p class="text-xs">
								Foxy.town is a minecraft server fully hosted on my own server.
								Over the years it gatheret a lot of improvements. Right now it
								has: website where users register and change their info,
								advanced admin dashboard that allows editing all info about
								servers and launcher; Integration with GravitLauncher; And
								minecraft servers themselves.
							</p>
						</div>
						<div>
							<div class="flex items-center justify-between">
								<a href="https://github.com/Drigster/oxide_plus/">
									<h3 class="text-md font-bold">
										Oxide+<span class="ml-1 text-[10px] opacity-30"
											>https://github.com/Drigster/oxide_plus/</span
										>
									</h3>
								</a>
								<div class="text-xs">
									<div class="flex items-center justify-end gap-0.5">
										<Calendar class="inline" size="14" />
										<span>2025</span>
									</div>
									<div class="flex items-center gap-0.5">
										<Cube class="inline" size="14" />
										<span>Rust;</span>
										<span>Freya</span>
									</div>
								</div>
							</div>
							<p class="text-xs">
								Oxide+ is a desktop port of Rust+ companion app for the game
								Rust. It provides live server info, map visualization, team
								tracking, minimap support, and a sleek desktop UI designed for
								quick access and usability.
							</p>
						</div>
						<div>
							<div class="flex items-center justify-between">
								<a href="https://github.com/drigster/projectphoenix/">
									<h3 class="text-md font-bold">
										ProjectPhoenix<span class="ml-1 text-[10px] opacity-30"
											>https://github.com/drigster/projectphoenix/</span
										>
									</h3>
								</a>
								<div class="text-xs">
									<div class="flex items-center justify-end gap-0.5">
										<Calendar class="inline" size="14" />
										<span>2022 - 2024</span>
									</div>
									<div class="flex items-center gap-0.5">
										<Cube class="inline" size="14" />
										<span>Godot</span>
									</div>
								</div>
							</div>
							<p class="text-xs">
								ProjectPhoenix is a 2d sandbox game made originaly in Unity, but
								then ported in Godot after Unity controversy. It has an
								Inventory, dynamic UI, Crafting and Resource gathering systems.
								Also a prototype of the Building system. Sadly it was abandoned
								from a lack of motivation. Maybe I will revisit it in the
								future.
							</p>
						</div>
					</MainItem>
					<MainItem
						class="grid grid-cols-2 gap-4"
						title="Homelab"
						icon={ServerStack}
					>
						<div class="flex flex-col gap-1">
							<div>
								<h3 class="flex items-center gap-0.5 text-sm font-bold">
									<CpuChip class="inline" size="16" />
									<span>Hardware</span>
								</h3>
								<ul class="list-disc pl-6 text-xs">
									<li>Fujitsu Primergy RX2530 M4</li>
									<li>Ubiquiti Dream Router</li>
									<li>Couple of RaspberyPis</li>
								</ul>
							</div>
							<div>
								<h3 class="flex items-center gap-0.5 text-xs font-bold">
									<Square3Stack3d class="inline" size="14" />
									<span>Control and monitoring</span>
								</h3>
								<ul class="list-disc pl-6 text-xs">
									<li>Proxmox</li>
									<li>Ubiquiti Site Manager</li>
									<li>My own status monitoring scripts</li>
								</ul>
							</div>
							<div>
								<h3 class="flex items-center gap-0.5 text-xs font-bold">
									<Square3Stack3d class="inline" size="14" />
									<span>Networking</span>
								</h3>
								<ul class="list-disc pl-6 text-xs">
									<li>Nginx</li>
									<li>Ubiquiti Firewall</li>
									<li>Ubiquiti Threat Detection</li>
								</ul>
							</div>
						</div>
						<div>
							<h3 class="flex items-center gap-0.5 text-xs font-bold">
								<Square3Stack3d class="inline" size="14" />
								<span>Running software</span>
							</h3>
							<ul class="list-disc pl-6 text-xs">
								<li>
									Minecraft server
									<ul class="list-disc pl-3 text-xs">
										<li>Website</li>
										<li>Launcher</li>
										<li>1 or 2 servers</li>
										<li>server proxy</li>
									</ul>
								</li>
								<li>Mail server</li>
								<li>Portfolio website</li>
								<li>Unraid</li>
								<li>Jellyfin</li>
								<li>Home assistant</li>
							</ul>
						</div>
					</MainItem>
					<MainItem
						class="flex flex-col gap-2"
						title="Education"
						icon={AcademicCap}
					>
						<div class="flex items-center justify-between">
							<div class="text-xs">
								<div>
									<Calendar class="inline" size="14" />
									<span>2024 - 2027 (expected)</span>
								</div>
								<div>
									<MapPin class="inline" size="14" />
									<span>Tallinn University, Estonia</span>
								</div>
							</div>
							<div class="text-end">Bachelor’s in Computer Science</div>
						</div>
						<div class="flex items-center justify-between">
							<div class="text-xs">
								<div>
									<Calendar class="inline" size="14" />
									<span>2020 - 2024</span>
								</div>
								<div>
									<MapPin class="inline" size="14" />
									<span>Tallinna Polütehnikum, Estonia</span>
								</div>
							</div>
							<div class="text-end">Junior Software Developer</div>
						</div>
					</MainItem>
					<MainItem
						class="flex flex-col gap-2"
						title="Hobbies"
						icon={WrenchScrewdriver}
					>
						<div>
							<div class="flex items-center justify-between">
								<h3 class="text-md font-bold">Radio Electronics Club</h3>
								<div class="text-xs">
									<div class="flex items-center justify-end gap-0.5">
										<Calendar class="inline" size="14" />
										<span>10 years</span>
									</div>
								</div>
							</div>
							<p class="text-xs">
								Spent 10 years in a radio electronics hobby club, building and
								repairing electronic circuits and devices.
							</p>
						</div>
					</MainItem>
				</div>
				<div class="absolute bottom-0 right-0 p-2 text-sm opacity-10">
					Modified template by Diogo Correia <br />
					<a href="https://github.com/diogotcorreia/cv"
						>https://github.com/diogotcorreia/cv</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.background {
		background: url("$lib/assets/background.svg");
		min-height: 100vh;
	}

	.cv {
		font-family: "Open Sans", sans-serif;
	}

	#print-section {
		--color-1: #232b2e;
		--color-2: #0b3948;
		--color-3: #1b1b1b;
		--color-4: #6b7280;
		--text-color: white;

		color: var(--text-color);
	}

	#print-section.light {
		--color-1: white;
		--color-2: white;
		--color-3: white;
		--color-4: #cecece;
		--text-color: black;
	}

	#print-section.light .head {
		border-bottom: solid 1px black;
	}
	#print-section.light .sidebar {
		border-right: solid 1px black;
	}

	@media print {
		.nav {
			display: none !important;
		}

		.cv {
			width: 210mm;
			height: 297mm;
			max-height: 297mm;
			padding: 0 !important;
			margin: 0 !important;
			overflow: hidden;
		}

		#wrapper {
			width: 210mm;
			height: 297mm;
			max-width: none !important;
			margin: 0 !important;
			padding: 0 !important;
		}

		#print-section {
			width: 210mm;
			height: 297mm;
			max-height: 297mm;
			aspect-ratio: auto;
			box-shadow: none !important;
			margin: 0 !important;
			overflow: hidden;
		}

		#print-section .head,
		#print-section .sidebar,
		#print-section .content {
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
	}

	.dropdown:hover,
	.dropdown:has(*:hover) .dropdown,
	.dropdown:has(input:checked) .dropdown {
		border-radius: 0.5rem 0.5rem 0 0 !important;
	}

	.dropdown:hover .dropdown-content,
	.dropdown:has(input:checked) .dropdown-content {
		display: flex;
	}

	@media (max-width: 608px) {
		.nav {
			flex-direction: column;
		}
		span.nav {
			display: inline;
		}

		.dropdown:hover .dropdown-content,
		.dropdown:has(input:checked) .dropdown-content {
			position: static;
		}
	}
</style>
