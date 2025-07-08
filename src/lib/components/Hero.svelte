<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { ArrowRight } from 'lucide-svelte';
	import { BackgroundBeams } from '$lib';

	export let badge = "✨ Welcome to Karasax";
	export let title = "Financial Freedom for";
	export let highlightText = "Your Future";
	export let description = "Smart budgeting, investment tracking, and automated insights. Take control of your finances and build wealth with confidence.";
	export let ctaText = "Start Now";
	export let ctaLink = "#features";
	export let showCta = true;
</script>


<section id="hero" class="relative mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[70vh] md:py-[10rem] bg-slate-950 dark:bg-black overflow-hidden">
	<!-- Background Box -->
	<BackgroundBeams />
	
	<!-- Overlay for better text readability -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50 z-10"></div>

	<!-- Content -->
	<div class="relative z-20 flex flex-col items-center space-y-6 md:space-y-8">
		{#if badge}
			<Motion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
				<div class="inline-flex h-8 items-center justify-center gap-2 rounded-full border border-neutral-600 bg-neutral-800/50 px-4 text-xs text-neutral-200 shadow-lg backdrop-blur-md hover:bg-neutral-700/50 transition-all cursor-pointer mb-2 font-semibold">
					<span class="inline-flex items-center">{badge}</span>
				</div>
			</Motion>
		{/if}

		<Motion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
			<h1 class="bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text font-extrabold leading-[1.1] tracking-tighter text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-4xl mx-auto">
				{title} 
				<span class="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent block sm:inline">{highlightText}</span>
			</h1>
		</Motion>

		<Motion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
			<p class="text-balance text-lg md:text-xl tracking-tight text-neutral-400 mx-auto leading-relaxed">
				{description}
			</p>
		</Motion>

		{#if showCta}
			<Motion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
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
		0%, 100% {
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
</style> 