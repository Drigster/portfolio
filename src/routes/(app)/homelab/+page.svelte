<script lang="ts">
	import rack from "$lib/assets/rack.png";
	import router from "$lib/assets/router.png";
	import server from "$lib/assets/server.png";
</script>

<div class="grid h-96 grid-cols-2 blur content-center items-center">
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
<div class="bg-black z-50 opacity-75 absolute inset-0 flex flex-col items justify-center text-text text-center">
	<a class="absolute left-0 top-0 m-4 text-3xl hover:text-text-muted" href="/">Back</a>
	<span class="text-5xl">Work in progress.</span>
	<span class="text-3xl">There is some info in the <a class="underline text-accent hover:text-text-muted" href="/cv">CV</a></span>
</div>

<style>
</style>
