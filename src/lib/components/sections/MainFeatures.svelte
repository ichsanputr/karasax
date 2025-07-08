<script lang="ts">
	import autoAnimate from "@formkit/auto-animate";
	import {
		CardContainer,
		CardBody,
		CardItem,
	} from "$lib/components/ui/ThreeDCardEffect";
	import Sparkles from "$lib/components/ui/Sparkles/Sparkles.svelte";

	export let title = "Powerful Financial";

	export let cards = [
		{
			title: "Real-Time Analytics",
			description:
				"Live financial dashboards with instant insights into your spending, savings, and investments",
			icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
			bgColor: "rgba(34, 211, 238, 0.1)",
			iconColor: "#22d3ee",
			gradientFrom: "from-cyan-500/20",
			gradientTo: "to-sky-500/20",
		},
		{
			title: "Smart Automation",
			description:
				"AI-powered savings goals, bill reminders, and automated investment strategies",
			icon: "M13 10V3L4 14h7v7l9-11h-7z",
			bgColor: "rgba(14, 165, 233, 0.1)",
			iconColor: "#0ea5e9",
			gradientFrom: "from-sky-500/20",
			gradientTo: "to-blue-500/20",
		},
		{
			title: "Bank-Level Security",
			description:
				"256-bit encryption, multi-factor authentication, and secure data protection",
			icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
			bgColor: "rgba(59, 130, 246, 0.1)",
			iconColor: "#3b82f6",
			gradientFrom: "from-blue-500/20",
			gradientTo: "to-indigo-500/20",
		},
	];
	export let backgroundColor = "rgb(2 6 23)";

	// Track mouse state for each card
	let mouseStates = cards.map(() => false);

	function handleMouseEnter(index: number) {
		mouseStates[index] = true;
		mouseStates = mouseStates;
	}

	function handleMouseLeave(index: number) {
		mouseStates[index] = false;
		mouseStates = mouseStates;
	}
</script>

<section
	class="py-20 bg-slate-950 dark:bg-black"
	style="background-color: {backgroundColor};"
>
	<div class="container mx-auto px-4">
		<div class="relative mb-10 h-10 w-full sm:w-[40rem] mx-auto">
			<h2
				class="text-4xl font-bold text-center mb-3 bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text text-transparent"
			>
				{title}
			</h2>
			<div
				class="absolute hidden sm:block inset-x-20 bottom-2 h-[10px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
			/>
			<div
				class="absolute hidden sm:block inset-x-20 -bottom-2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
			/>
			<div
				class="absolute hidden sm:block inset-x-60 -bottom-2 h-[6px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
			/>
			<div
				class="absolute  hidden sm:block inset-x-60 -bottom-2 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
			/>

			<!-- Radial Gradient to prevent sharp edges -->
			<div
				class="absolute hidden sm:block inset-0 h-full w-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
			></div>
		</div>

		<!-- 3D Card Grid -->
		<div
			class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
			use:autoAnimate
		>
			{#each cards as card, index}
				<div
					class="w-full h-full"
					on:mouseenter={() => handleMouseEnter(index)}
					on:mouseleave={() => handleMouseLeave(index)}
				>
					<CardContainer
						className="w-full h-full"
						containerClassName="py-0"
					>
						<CardBody
							className="bg-slate-900/50 flex flex-col justify-between h-full relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black/50 border-neutral-800/50 w-full h-auto rounded-xl p-6 border backdrop-blur-sm"
						>
							<CardItem
								isMouseEntered={mouseStates[index]}
								translateZ="50"
								className="text-xl font-bold text-neutral-200 mb-2"
							>
								{card.title}
							</CardItem>
							<CardItem
								isMouseEntered={mouseStates[index]}
								translateZ="60"
								className="text-neutral-400 text-sm mb-4"
							>
								{card.description}
							</CardItem>
							<div class="flex items-center justify-between mt-5">
								<CardItem
									isMouseEntered={mouseStates[index]}
									translateZ="100"
									className="w-full"
								>
									<div
										class="w-12 h-12 rounded-lg flex items-center justify-center border border-neutral-700/50"
										style="background-color: {card.bgColor};"
									>
										<svg
											class="w-6 h-6"
											style="color: {card.iconColor};"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d={card.icon}
											></path>
										</svg>
									</div>
								</CardItem>
								<CardItem
									isMouseEntered={mouseStates[index]}
									translateZ={20}
									className="px-4 py-2 flex-none rounded-lg text-xs font-normal text-neutral-300 hover:text-neutral-100 transition-colors"
								>
									Learn more →
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</div>
			{/each}
		</div>
	</div>
</section>
