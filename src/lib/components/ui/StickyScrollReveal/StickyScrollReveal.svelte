<script lang="ts">
	import { onMount } from "svelte";

	let activeCard = 0;
	let backgroundColors = ["#0f172a", "#020617", "#1e293b"]; // Modern slate colors
	let rightPanelImages = [
		"https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80", // Code development
		"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80", // Team collaboration
		"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", // Analytics dashboard
		"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80", // Content creation
		"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Automation/Robotics
		"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80", // Integration/Connections
		"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", // Security/Shield
		"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", // Mobile/Responsive
	];
	let scrollYProgress = 0;

	export let content: { title: string; description: string }[] = [
		{ title: "Title 1", description: "Description 1" },
		{ title: "Title 2", description: "Description 2" },
		// Add more items as needed
	];

	let ref: HTMLDivElement;

	onMount(() => {
		const handleScroll = (event: Event) => {
			const target = event.target as HTMLElement;
			scrollYProgress = target.scrollTop / target.scrollHeight;
			const cardsBreakpoints = content.map(
				(_, index) => index / content.length,
			);

			cardsBreakpoints.forEach((breakpoint, index) => {
				if (
					scrollYProgress > breakpoint - 0.2 &&
					scrollYProgress <= breakpoint
				) {
					activeCard = index;
				}
			});
		};

		ref.addEventListener("scroll", handleScroll);

		return () => {
			ref.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<div
	bind:this={ref}
	style="background-color: {backgroundColors[
		activeCard % backgroundColors.length
	]}"
	class="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 transition ease-in-out scrollbar-hide"
>
	<div class="div relative flex items-start px-4">
		<div class="">
			{#each content as item, index (item.title + index)}
				<div class="my-20">
					<h2
						style="opacity: {activeCard === index ? 1 : 0.3}"
						class="text-2xl font-bold text-slate-100"
					>
						{item.title}
					</h2>
					<p
						style="opacity: {activeCard === index ? 1 : 0.3}"
						class="text-lg mt-10 text-slate-300"
					>
						{item.description}
					</p>
				</div>
			{/each}
			<div class="h-40" />
		</div>
	</div>
	<div
		style="background-image: url('{rightPanelImages[
			activeCard % rightPanelImages.length
		]}'); background-size: cover; background-position: center;"
		class="sticky flex-none top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block"
	></div>
</div>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
</style>
