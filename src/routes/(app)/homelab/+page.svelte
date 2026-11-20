<script lang="ts">
	import { resolve } from "$app/paths";
	import rack from "$lib/assets/rack.webp";
	import router from "$lib/assets/router.webp";
	import server from "$lib/assets/server.webp";
</script>

<svelte:head>
	<title>Homelab - Gabriel Jõe</title>
</svelte:head>

<div class="grid h-96 grid-cols-2 content-center items-center blur">
	<div class="relative left-1/2 translate-x-1/4">
		<img class="absolute top-1 w-96" src={rack} alt="" />
		<img class="absolute left-12 w-24" src={router} alt="" />
		<img
			class="absolute left-[2.7rem] top-[8.7rem] w-[17rem]"
			src={server}
			alt=""
		/>
	</div>
	<div class="h-full w-full bg-gray-500"></div>
</div>
<div
	class="items absolute inset-0 z-50 flex flex-col justify-center bg-black text-center text-text opacity-75"
>
	<a
		class="absolute left-0 top-0 m-4 text-3xl hover:text-text-muted"
		href={resolve("/")}>Back</a
	>
	<span class="text-5xl">Work in progress.</span>
	<span class="text-3xl"
		>There is some info in the <a
			class="text-accent underline hover:text-text-muted"
			href={resolve("/cv")}>CV</a
		></span
	>
</div>

<style>
</style>
