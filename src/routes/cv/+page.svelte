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
		Briefcase,
		Cube,
		Printer,
	} from "@o7/icon/heroicons/solid";
	import { Github, LinkedinBox } from "@o7/icon/remix/solid";
	import SidebarItem from "./SidebarItem.svelte";
	import Raiting from "./Raiting.svelte";
	import MainItem from "./MainItem.svelte";
	import { page } from "$app/state";

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

<div class="cv flex flex-col items-center justify-center">
	<div class="flex h-20 w-full max-w-[800px] items-center justify-between p-4">
		<a href="/" class="flex items-center justify-end gap-0.5">
			<Home class="inline" size="18" />
			<span>Homepage</span>
		</a>
		<div class="flex gap-2">
			<div>
				Print style:
				<div class="dropdown">
					<button class="dropbtn"
						>{theme.charAt(0).toUpperCase() + theme.slice(1)}</button
					>
					<div class="dropdown-content">
						<a href="?theme=dark">Dark</a>
						<a href="?theme=light">Light</a>
					</div>
				</div>
			</div>
			<button
				onclick={() => window.print()}
				class="flex items-center justify-end gap-0.5"
			>
				<Printer class="inline" size="18" />
				<span>Print<noscript>(CTRL + P)</noscript></span>
			</button>
		</div>
	</div>
	<div
		id="print-section"
		class="flex aspect-[210/297] h-full w-full max-w-[800px] flex-col shadow-xl {theme}"
	>
		<div class="head bg-[var(--color-2)] px-6 py-3 font-bold">
			<h1 class="my-4 text-2xl uppercase">Gabriel Jõe</h1>
			<p class="my-3 text-xs">
				Computer Science Student, Programmer, Homelab Enthusiast
			</p>
		</div>
		<div class="relative grid h-full grid-cols-[1fr_2fr]">
			<div class="sidebar bg-[var(--color-1)] px-4 py-3 text-xs">
				<SidebarItem title="Contact">
					<ul class="text-xs">
						<li class="mb-1 flex items-center gap-1">
							<Home size="16" />
							<a href="https://drigster.dev/">drigster.dev</a>
						</li>
						<li class="mb-1 flex items-center gap-1">
							<MapPin size="16" />
							<span>Estonia, Tallinn</span>
						</li>
						<li class="mb-1 flex items-center gap-1">
							<Envelope size="16" />
							<a href="">me@drigster.dev</a>
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
								<Raiting title="HTML/CSS" rating={5} size={"1em"} />
							</li>
							<li>
								<Raiting title="TypeScript" rating={4} size={"1em"} />
							</li>
							<li>
								<Raiting title="C#" rating={4} size={"1em"} />
							</li>
							<li>
								<Raiting title="Python" rating={3} size={"1em"} />
							</li>
							<li>
								<Raiting title="Rust" rating={2} size={"1em"} />
							</li>
							<li>
								<Raiting title="Java" rating={2} size={"1em"} />
							</li>
							<li>
								<Raiting title="React" rating={1} size={"1em"} />
							</li>
						</ul>
					</div>
					<div>
						<h3>Operating Systems</h3>
						<ul>
							<li>
								<Raiting title="Linux" rating={5} size={"1em"} />
							</li>
							<li>
								<Raiting title="Windows" rating={4} size={"1em"} />
							</li>
							<li>
								<Raiting title="MacOS" rating={0} size={"1em"} />
							</li>
						</ul>
					</div>
					<div>
						<h3>Tools</h3>
						<ul>
							<li>
								<Raiting title="Git" rating={5} size={"1em"} />
							</li>
							<li>
								<Raiting title="Docker" rating={2} size={"1em"} />
							</li>
							<li>
								<Raiting title="Proxmox" rating={2} size={"1em"} />
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
									<span>B2</span>
								</div>
							</li>
						</ul>
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
							<a href="https://drigster.dev/projects/taskupeatus/">
								<h3 class="text-md font-bold">
									TaskuPeatus<span class="ml-1 text-[10px] opacity-30"
										>https://drigster.dev/projects/taskupeatus/</span
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
									<span>Flutter</span>
								</div>
							</div>
						</div>
						<p class="text-xs">
							TaskuPeats is an app for public transport users in Tallinn. Is
							uses GPS and public APIs to show users when transport on the
							closest stops arrives.
						</p>
					</div>
					<div>
						<div class="flex items-center justify-between">
							<a href="https://drigster.dev/projects/foxytown/">
								<h3 class="text-md font-bold">
									Foxy.town<span class="ml-1 text-[10px] opacity-30"
										>https://drigster.dev/projects/foxytown/</span
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
							has: website where users register and change their info, advanced
							admin dashboard that allows editing all info about servers and
							launcher; Integration with GravitLauncher; And minecraft servers
							themselves.
						</p>
					</div>
					<div>
						<div class="flex items-center justify-between">
							<a href="https://drigster.dev/projects/projectphoenix/">
								<h3 class="text-md font-bold">
									ProjectPhoenix<span class="ml-1 text-[10px] opacity-30"
										>https://drigster.dev/projects/projectphoenix/</span
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
							then ported in Godot after Unity controversy. It has an Inventory,
							dynamic UI, Crafting and Resource gathering systems. Also a
							prototype of the Building system. Sadly it was abandoned from a
							lack of motivation. Maybe I will revisit it in the future.
						</p>
					</div>
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-md font-bold">SecretProject</h3>
							<div class="text-xs">
								<div class="flex items-center justify-end gap-0.5">
									<Calendar class="inline" size="14" />
									<span>2025 - Present</span>
								</div>
								<div class="flex items-center gap-0.5">
									<Cube class="inline" size="14" />
									<span>Rust;</span>
									<span>Vue;</span>
									<span>Tauri</span>
								</div>
							</div>
						</div>
						<p class="text-xs"></p>
					</div>
					<div>
						<div class="flex items-center justify-between">
							<h3 class="text-md font-bold">SecretProject</h3>
							<div class="text-xs">
								<div class="flex items-center gap-0.5">
									<Calendar class="inline" size="14" />
									<span>2025 - Present</span>
								</div>
								<div class="flex items-center gap-0.5">
									<Cube class="inline" size="14" />
									<span>Svelte</span>
								</div>
							</div>
						</div>
						<p class="text-xs"></p>
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
								<span>University of Tallin, Estonia</span>
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
				<!-- <MainItem
					class="flex flex-col gap-2"
					title="Professional Experience"
					icon={Briefcase}
				>
					<div class="text-xs">I hope you will be first ;)</div>
				</MainItem> -->
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

<style>
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

	.dropdown {
		padding: 0.5rem;
		border-radius: 0.5rem;
		position: relative;
		display: inline-block;
	}

	.dropbtn {
		cursor: pointer;
		border-radius: 4px;
	}

	.dropdown-content {
		border-radius: 0.5rem;
		background-color: #1b1b1b;
		border: #0b3948 1px solid;
		display: none;
		position: absolute;
		z-index: 1;
		flex-direction: column;
	}

	.dropdown-content a {
		padding: 0.25rem;
		border-radius: inherit;
	}

	.dropdown-content a:hover {
		padding: 0.25rem;
		background-color: #232b2e;
	}

	.dropdown:hover .dropdown-content {
		display: flex;
	}
</style>
