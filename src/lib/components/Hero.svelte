<script lang="ts">
	import { Motion } from "svelte-motion";
	import { ArrowRight } from "lucide-svelte";
	import { BackgroundBeams } from "$lib";

	export let className: any = "";
	export let colorClass: string = "";

	export let title = "Financial Freedom for";
	export let highlightText = "Your Future";
	export let description =
		"Smart budgeting, investment tracking, and automated insights. Take control of your finances and build wealth with confidence.";
	export let ctaText = "Start Now";
	export let ctaLink = "#features";
	export let showCta = true;
</script>

<section
	id="hero"
	class="relative mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[70vh] md:py-[10rem] bg-slate-950 dark:bg-black overflow-hidden"
>
	<!-- Background Box -->
	<BackgroundBeams />

	<!-- Overlay for better text readability -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50 z-10"
	></div>

	<!-- Content -->
	<div
		class="relative z-20 flex flex-col items-center space-y-6 md:space-y-8"
	>
	<button
		class="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40 {className}"
	>
		<div
			class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] {colorClass}"
		></div>

		🌟
		<hr class="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
		{" "}
		<span
			class="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
		>
			Introducing Karasax
		</span>
	</button>

	
		<Motion
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
		>
			<h1
				class="bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text font-extrabold leading-[1.1] tracking-tighter text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-4xl mx-auto"
			>
				{title}
				<span
					class="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent block sm:inline"
					>{highlightText}</span
				>
			</h1>
		</Motion>

		<Motion
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.4 }}
		>
			<div class="font-bold text-balance text-lg md:text-xl tracking-tight text-neutral-400 mx-auto leading-relaxed">
				<div class="mt-4 sm:max-w-1/2 mx-auto">
					<div class="text-lg leading-snug tracking-wide">
						<Motion let:motion custom={0} variants={{
							visible: (i) => ({
								opacity: 1,
								transition: { delay: i * 0.2, duration: 2 }
							}),
							hidden: { opacity: 0 }
						}} initial="hidden" animate={'visible'}>
							<div use:motion>
								{#each description.split(' ') as word, idx (`${word}${idx}`)}
									<Motion let:motion variants={{
										visible: (i) => ({
											opacity: 1,
											transition: { delay: i * 0.2, duration: 2 }
										}),
										hidden: { opacity: 0 }
									}} custom={idx + 1} initial="hidden" animate={'visible'}>
										<span use:motion>{word} </span>
									</Motion>
								{/each}
							</div>
						</Motion>
					</div>
				</div>
			</div>
		</Motion>

		{#if showCta}
			<Motion
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.6 }}
			>
				<a
					href={ctaLink}
					class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 px-6 md:px-8 py-3 text-base md:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
				>
					{ctaText}
					<ArrowRight class="w-4 h-4 md:w-5 md:h-5" />
				</a>
			</Motion>
		{/if}
	</div>
</section>

<style>
	@keyframes gradient-move {
		0%,
		100% {
			transform: translate(0, 0) rotate(0deg);
		}
		33% {
			transform: translate(30px, -30px) rotate(120deg);
		}
		66% {
			transform: translate(-20px, 20px) rotate(240deg);
		}
	}

	.animate-gradient-move {
		animation: gradient-move 8s ease-in-out infinite;
	}

	@keyframes gradient {
		to {
			background-position: 200% center;
		}
	}

	.animate-gradient {
		animation: gradient 8s linear infinite;
	}
</style>
