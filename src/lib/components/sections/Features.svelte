<script lang="ts">
	import autoAnimate from "@formkit/auto-animate";
	import { BackgroundGradient } from "$lib";

	export let title = "Why Choose Karasax?";
	export let features = [
		{
			icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
			title: "Smart Budgeting",
			description:
				"Take control of your finances with intelligent budget tracking and automated expense categorization.",
			bgColor: "rgba(34, 211, 238, 0.1)",
			iconColor: "#22d3ee",
		},
		{
			icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
			title: "Investment Insights",
			description:
				"Make informed investment decisions with real-time market data and personalized recommendations.",
			bgColor: "rgba(14, 165, 233, 0.1)",
			iconColor: "#0ea5e9",
		},
		{
			icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
			title: "Secure & Protected",
			description:
				"Bank-level security with 256-bit encryption ensures your financial data is always safe and protected.",
			bgColor: "rgba(59, 130, 246, 0.1)",
			iconColor: "#3b82f6",
		},
	];
	export let backgroundColor = "rgb(2 6 23)";
</script>

<section class="py-20 bg-slate-950 dark:bg-black relative" style="background-color: {backgroundColor};">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
	<div class="absolute inset-0 bg-grid-white/[0.02]"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
				<span class="w-2 h-2 rounded-full mr-2 animate-pulse bg-cyan-400"></span>
				Core Features
			</div>
			
			<h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
				{title}
			</h2>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" use:autoAnimate>
			{#each features as feature}
				<BackgroundGradient className="rounded-xl h-full">
					<div class="bg-slate-900/50 h-full rounded-xl text-center relative p-8 border border-slate-700/50 backdrop-blur-sm group hover:bg-slate-900/70 transition-all duration-300">
						<!-- Icon -->
						<div
							class="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center border border-slate-600/50 group-hover:border-cyan-500/30 transition-all duration-300"
							style="background-color: {feature.bgColor};"
						>
							<svg
								class="w-8 h-8"
								style="color: {feature.iconColor};"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d={feature.icon}
								></path>
							</svg>
						</div>
						
						<!-- Title -->
						<h3 class="text-xl font-bold mb-4 text-neutral-200 group-hover:text-cyan-400 transition-colors duration-300">
							{feature.title}
						</h3>
						
						<!-- Description -->
						<p class="text-neutral-400 leading-relaxed">
							{feature.description}
						</p>
					</div>
				</BackgroundGradient>
			{/each}
		</div>
	</div>
</section>
