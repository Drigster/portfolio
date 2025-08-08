<script lang="ts">
	import BackgroundBlob from "$lib/components/BackgroundBlob.svelte";
	import drigster from "$lib/assets/Drigster.png";
	import {
		Check,
		Copy,
		Github,
		House,
		Mail,
		MapPin,
		Linkedin,
		Calendar,
		Link,
	} from "@o7/icon/lucide";
	import { copyText } from "$lib/util";
	import { onMount } from "svelte";
	import TechCircleItem from "$lib/components/TechCircleItem.svelte";
	import SvelteIcon from "$lib/components/icons/SvelteIcon.svelte";
	import TypeScriptIcon from "$lib/components/icons/TypeScriptIcon.svelte";
	import JavaScriptIcon from "$lib/components/icons/JavaScriptIcon.svelte";
	import JavaIcon from "$lib/components/icons/JavaIcon.svelte";
	import CSharpIcon from "$lib/components/icons/CSharpIcon.svelte";
	import RustIcon from "$lib/components/icons/RustIcon.svelte";
	import ReactIcon from "$lib/components/icons/ReactIcon.svelte";
	import GitIcon from "$lib/components/icons/GitIcon.svelte";
	import PythonIcon from "$lib/components/icons/PythonIcon.svelte";
	import ProxmoxIcon from "$lib/components/icons/ProxmoxIcon.svelte";
	import TechCircleItemStats from "$lib/components/TechCircleItemStats.svelte";

	let blob = $state<BackgroundBlob>();
	let copyEmailButton = $state<HTMLButtonElement>();
	let copied = $state(false);

	onMount(() => {
		if (!copyEmailButton) {
			return;
		}
		copyEmailButton.style.display = "grid";
	});

	function copyEmail(text: string) {
		copyText(text);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
	//	class="grid aspect-square h-screen grid-cols-3 grid-rows-3 gap-fixed-4 p-fixed-4 max-w-screen min-w-0 min-h-0 mx-auto text-clamp-lg"
</script>

<svelte:head>
	<title>Homepage - Gabriel Jõe</title>
</svelte:head>

<div
	class="grid md2:aspect-square md2:h-svh md2:grid-cols-3 md2:grid-rows-3 gap-fixed-4 p-fixed-4 text-clamp-lg"
>
	<div class="md2:col-span-2 flex flex-col gap-fixed-4">
		<div class="bg-bg border-border rounded-fixed-lg border p-fixed-2">
			<span class="text-accent text-clamp-3xl">Gabriel Jõe</span>
			<span class="text-text-muted text-clamp-sm">AKA</span>
			<span class="text-text-muted text-clamp-2xl">Drigster</span>
		</div>
		<div
			class="overflow-y-scroll overflow-x-hidden bg-bg border-border text-text-muted flex-1 rounded-fixed-lg border p-fixed-10px text-clamp-xl"
		>
			Hi I'm a computer science student and a backend developer who enjoys
			working with <span class="text-accent">TypeScript</span> and
			<span class="text-accent">Svelte</span>. I run my own
			<span class="text-accent">homelab</span> and
			<span class="text-accent">Minecraft</span> server, constantly exploring new
			technologies and improving my skills through hands-on projects and real-world
			challenges.
		</div>
	</div>
	<div
		class="overflow-y-scroll overflow-x-hidden hidden md2:block bg-bg border-border relative rounded-fixed-lg border"
	>
		<img class="rounded-[inherit]" src={drigster} alt="Avatar" />
		<span
			class="tooltip text-text-muted absolute bottom-0 right-0 cursor-help px-fixed-1"
		>
			<span class="opacity-25 text-clamp-sm">Why no real picture?</span>
			<span class="tooltiptext">
				I am quite privacy centerd. So I have very little personal information
				online, including no pictures.
			</span>
		</span>
	</div>
	<div
		class="tech-circle-container aspect-square md2:aspect-auto bg-bg border-border relative rounded-fixed-lg border p-fixed-10px"
	>
		<div class="tech-circle h-4/5 w-4/5">
			<TechCircleItem id="svelte" items={8} position={1} icon={SvelteIcon} />
			<TechCircleItem
				id="typescript"
				items={8}
				position={2}
				icon={TypeScriptIcon}
			/>
			<TechCircleItem
				id="javascript"
				items={8}
				position={3}
				icon={JavaScriptIcon}
			/>
			<TechCircleItem id="python" items={8} position={4} icon={PythonIcon} />
			<TechCircleItem id="java" items={8} position={5} icon={JavaIcon} />
			<TechCircleItem id="csharp" items={8} position={6} icon={CSharpIcon} />
			<TechCircleItem id="react" items={8} position={7} icon={ReactIcon} />
			<TechCircleItem id="rust" items={8} position={8} icon={RustIcon} />
		</div>
		<div class="tech-circle reverse h-1/3 w-1/3">
			<TechCircleItem id="git" items={2} position={1} icon={GitIcon} />
			<TechCircleItem id="proxmox" items={2} position={12} icon={ProxmoxIcon} />
		</div>
		<TechCircleItemStats
			id="svelte"
			title="Svelte"
			type="Framework"
			rating={4}
			icon={SvelteIcon}
		>
			<span class="text-text">Projects:</span>
			<ul class="project-list">
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="/portfolio#foxytown"
					>
						Foxy.town<Link size="12" />
					</a>
				</li>
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="/portfolio#portfolio"
					>
						Portfolio<Link size="12" />
					</a>
				</li>
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="/portfolio#marmakc"
					>
						Marmakc.com<Link size="12" />
					</a>
				</li>
			</ul>
		</TechCircleItemStats>
		<TechCircleItemStats
			id="typescript"
			title="Typescript"
			type="Language"
			rating={4}
			icon={TypeScriptIcon}
		>
			<span class="text-text">Projects:</span>
			<ul class="project-list">
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="/portfolio#foxytown"
					>
						Foxy.town<Link size="12" />
					</a>
				</li>
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="/portfolio#portfolio"
					>
						Portfolio<Link size="12" />
					</a>
				</li>
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="/portfolio#marmakc"
					>
						Marmakc.com<Link size="12" />
					</a>
				</li>
			</ul>
		</TechCircleItemStats>
		<TechCircleItemStats
			id="javascript"
			title="JavaScript"
			type="Language"
			rating={4}
			icon={JavaScriptIcon}
		></TechCircleItemStats>
		<TechCircleItemStats
			id="python"
			title="Python"
			type="Language"
			rating={3}
			icon={PythonIcon}
		></TechCircleItemStats>
		<TechCircleItemStats
			id="java"
			title="Java"
			type="Language"
			rating={2}
			icon={JavaIcon}
		></TechCircleItemStats>
		<TechCircleItemStats
			id="csharp"
			title="C#"
			type="Language"
			rating={4}
			icon={CSharpIcon}
		>
			<span class="text-text">Projects:</span>
			<ul class="project-list">
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="https://github.com/drigster/projectphoenix/"
					>
						ProjectPhoenix<Link size="12" />
					</a>
				</li>
			</ul>
		</TechCircleItemStats>
		<TechCircleItemStats
			id="react"
			title="React"
			type="Framework"
			rating={1}
			icon={ReactIcon}
		></TechCircleItemStats>
		<TechCircleItemStats
			id="rust"
			title="Rust"
			type="Language"
			rating={3}
			icon={RustIcon}
		></TechCircleItemStats>
		<TechCircleItemStats
			id="git"
			title="Git"
			type="Technology"
			rating={5}
			icon={GitIcon}
		>
			<span class="text-text">Projects:</span>
			<ul class="project-list">
				<li>
					<a
						class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
						href="https://github.com/drigster/"
					>
						See on github<Link size="12" />
					</a>
				</li>
			</ul>
		</TechCircleItemStats>
		<TechCircleItemStats
			id="proxmox"
			title="Proxmox"
			type="Technology"
			rating={2}
			icon={ProxmoxIcon}
		>
			<a
				class="text-text-muted hover:text-accent flex items-center gap-fixed-1"
				href="/homelab"
			>
				View homelab page<Link size="12" />
			</a>
		</TechCircleItemStats>
	</div>
	<div
		class="row-start-2 md2:row-start-auto bg-bg border-border flex flex-col gap-[1vh] rounded-fixed-lg border p-fixed-10px"
	>
		<a class="flex-1" href="/projects">
			<button
				class="w-full h-full bg-bg-light place-content-center rounded-fixed-lg text-center text-clamp-2xl hover:bg-opacity-50 hover:text-accent"
			>
				Projects
			</button>
		</a>
		<a class="flex-1" href="/homelab">
			<button
				class="w-full h-full bg-bg-light place-content-center rounded-fixed-lg text-center text-clamp-2xl hover:bg-opacity-50 hover:text-accent disabled:line-through disabled:bg-opacity-50"
				disabled={true}
			>
				<span>Homelab</span>
			</button>
		</a>
		<a class="flex-1" href="/cv">
			<button
				class="w-full h-full bg-bg-light place-content-center rounded-fixed-lg text-center text-clamp-2xl hover:bg-opacity-50 hover:text-accent"
			>
				CV
			</button>
		</a>
	</div>
	<div
		class="bg-bg border-border rounded-fixed-lg border p-fixed-10px hidden md2:block"
	></div>
	<div
		class="bg-bg border-border grid gap-[1vh] rounded-fixed-lg border p-fixed-10px"
	>
		<a href="https://drigster.dev">
			<button
				class="w-full h-full bg-bg-light text-clamp-lg text-text-muted flex items-center gap-fixed-1 rounded-fixed-lg px-fixed-2 pb-fixed-1 pt-fixed-2 text-center hover:bg-opacity-50 hover:text-accent"
			>
				<House class="mb-fixed-1 !w-font-clamp-lg !h-font-clamp-lg" />
				<span>drigster.dev</span>
			</button>
		</a>
		<span
			class="bg-bg-light text-clamp-lg text-text-muted flex items-center gap-fixed-1 rounded-fixed-lg px-fixed-2 pb-fixed-1 pt-fixed-2 text-center"
			><MapPin class="mb-fixed-1 !w-font-clamp-lg !h-font-clamp-lg" /><span
				>Tallinn, Estonia</span
			></span
		>
		<span class="text-clamp-lg flex items-center gap-fixed-2 text-center">
			<a class="flex-1 h-full" href="mailto:me@drigster.dev">
				<button
					class="text-text-muted text-ellipsis w-full h-full bg-bg-light text-clamp-lg flex items-center gap-fixed-1 rounded-fixed-lg px-fixed-2 pb-fixed-1 pt-fixed-2 text-center hover:bg-opacity-50 hover:text-accent"
				>
					<Mail class="mb-fixed-1 !w-font-clamp-lg !h-font-clamp-lg" />
					<span style="font-size: clamp(1.15vh, 1.125rem, 2.12vh);"
						>me@drigster.dev</span
					>
				</button>
			</a>
			<button
				class="bg-bg-light text-text hidden aspect-square h-full place-content-center rounded-fixed-lg hover:bg-opacity-50 hover:text-accent"
				onclick={() => copyEmail("me@drigster.dev")}
				bind:this={copyEmailButton}
			>
				{#if !copied}
					<Copy class="!w-[2.5vh] !h-[2.5vh]" />
				{:else}
					<Check class="!w-[2.5vh] !h-[2.5vh]" />
				{/if}
			</button>
		</span>
		<a
			class="bg-bg-light text-clamp-lg text-text-muted flex items-center gap-fixed-1 rounded-fixed-lg px-fixed-2 pb-fixed-1 pt-fixed-2 text-center hover:bg-opacity-50 hover:text-accent"
			href="https://github.com/drigster"
			><Github class="mb-fixed-1 !w-font-clamp-lg !h-font-clamp-lg" /><span
				>@drigster</span
			></a
		>
		<a
			class="bg-bg-light text-clamp-lg text-text-muted flex items-center gap-fixed-1 rounded-fixed-lg px-fixed-2 pb-fixed-1 pt-fixed-2 text-center hover:bg-opacity-50 hover:text-accent"
			href="https://linkedin.com/in/drigster/"
			><Linkedin class="mb-fixed-1 !w-font-clamp-lg !h-font-clamp-lg" /><span
				>@drigster</span
			></a
		>
	</div>
	<div
		class="overflow-y-scroll overflow-x-hidden row-start-5 md2:row-start-auto bg-bg border-border text-text-muted md2:col-span-2 flex flex-col gap-2 rounded-fixed-lg border p-fixed-10px"
	>
		<h3 class="text-text text-clamp-2xl">Education</h3>
		<div class="flex items-center justify-between">
			<div class="">
				<div>
					<Calendar
						class="inline !w-font-clamp-lg !h-font-clamp-lg"
						size="14"
					/>
					<span>2024 - 2027 (expected)</span>
				</div>
				<div>
					<MapPin class="inline !w-font-clamp-lg !h-font-clamp-lg" />
					<span
						><a class="hover:text-accent" href="https://tlu.ee/"
							>University of Tallinn</a
						>, Estonia</span
					>
				</div>
			</div>
			<div class="text-text text-end">Bachelor’s in<br /> Computer Science</div>
		</div>
		<div class="flex items-center justify-between">
			<div class="">
				<div>
					<Calendar class="inline !w-font-clamp-lg !h-font-clamp-lg" />
					<span>2020 - 2024</span>
				</div>
				<div>
					<MapPin class="inline !w-font-clamp-lg !h-font-clamp-lg" />
					<span
						><a class="hover:text-accent" href="https://tptlive.ee/"
							>Tallinna Polütehnikum</a
						>, Estonia</span
					>
				</div>
			</div>
			<div class="text-text text-end items">
				Junior<br /> Software Developer
			</div>
		</div>
	</div>
</div>

<style>
	:global {
		.tech-circle-container:has(#svelte:checked) .tech-stats[data-for="svelte"] {
			display: flex;
		}
		.tech-circle-container:has(#typescript:checked)
			.tech-stats[data-for="typescript"] {
			display: flex;
		}
		.tech-circle-container:has(#javascript:checked)
			.tech-stats[data-for="javascript"] {
			display: flex;
		}
		.tech-circle-container:has(#python:checked) .tech-stats[data-for="python"] {
			display: flex;
		}
		.tech-circle-container:has(#java:checked) .tech-stats[data-for="java"] {
			display: flex;
		}
		.tech-circle-container:has(#csharp:checked) .tech-stats[data-for="csharp"] {
			display: flex;
		}
		.tech-circle-container:has(#react:checked) .tech-stats[data-for="react"] {
			display: flex;
		}
		.tech-circle-container:has(#rust:checked) .tech-stats[data-for="rust"] {
			display: flex;
		}
		.tech-circle-container:has(#git:checked) .tech-stats[data-for="git"] {
			display: flex;
		}
		.tech-circle-container:has(#proxmox:checked)
			.tech-stats[data-for="proxmox"] {
			display: flex;
		}
	}

	.project-list {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0.425vh;
	}
	.project-list li {
		display: flex;
		align-items: center;
		justify-items: center;
		gap: 0.85vh;
		margin-left: 0.425vh;
		line-height: 1.2;
	}

	.project-list li::before {
		content: "";
		display: inline-block;
		width: 0.425vh;
		height: 0.425vh;
		background-color: white;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		background-color: var(--background);
		color: var(--text);
		border-radius: 0.85vh;
		border: 1px solid var(--border);
		text-align: center;
		padding: 0.85vh;
		position: absolute;
		z-index: 1;
		bottom: 125%;
		inset-inline: 5%;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
	@property --rot-deg {
		syntax: "<angle>";
		initial-value: 0deg;
		inherits: false;
	}
	.tech-circle {
		position: absolute;
		left: 50%;
		top: 50%;
		border: 0.1vh dashed var(--text-muted);
		border-radius: 100%;
		transform: translate(-50%, -50%);
		animation: spin 30s linear infinite;
		transform-origin: 50% 50%;
	}

	.tech-circle.reverse {
		animation-direction: reverse;
	}

	@keyframes spin {
		to {
			--rot-deg: 360deg;
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
</style>
