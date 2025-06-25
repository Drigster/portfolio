<script lang="ts">
	import rack from "$lib/assets/rack.png";
	import router from "$lib/assets/router.png";
	import server from "$lib/assets/server.png";
	import { trpc } from "$lib/trpc";
</script>

<div class="grid h-96 grid-cols-2 content-center items-center">
	<div class="relative">
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

<style>
	code {
		background: theme("colors.zinc.900");
		padding: theme("spacing[0.5]");
	}
</style>
