<script lang="ts">
	import { Tabs } from "$lib/components/ui/Tabs";

	const tabs = [
		{
			title: "Product",
			value: "product",
			content:
				'<div class="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"> <p class="relative z-10">Product Tab</p> <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" alt="Product analytics dashboard" class="object-cover object-center h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto opacity-80" /> </div>',
		},
		{
			title: "Services",
			value: "services",
			content:
				'<div class="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"> <p class="relative z-10">Services tab</p> <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" alt="Team collaboration" class="object-cover object-center h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto opacity-80" /> </div>',
		},
		{
			title: "Playground",
			value: "playground",
			content:
				'<div class="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"> <p class="relative z-10">Playground tab</p> <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" alt="Code playground" class="object-cover object-center h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto opacity-80" /> </div>',
		},
		{
			title: "Content",
			value: "content",
			content:
				'<div class="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"> <p class="relative z-10">Content tab</p> <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80" alt="Content creation" class="object-cover object-center h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto opacity-80" /> </div>',
		},
		{
			title: "Random",
			value: "random",
			content:
				'<div class="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"> <p class="relative z-10">Random tab</p> <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80" alt="Creative workspace" class="object-cover object-center h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto opacity-80" /> </div>',
		},
	];
</script>

<svelte:head>
	<title>Working - Karasax</title>
	<meta
		name="description"
		content="Explore our interactive tabs with beautiful imagery and modern design."
	/>
</svelte:head>

<section class="working-section">
	<!-- Background gradient -->
	<div class="background-gradient"></div>

	<div class="container mx-auto px-4 relative pt-8 z-10">
		<div class="text-center mb-10">
			<h2 class="main-title">Working</h2>
			<p class="subtitle">
				Discover our interactive tab components with stunning visuals
				and smooth animations
			</p>
		</div>

		<div class="tabs-container">
			<Tabs
				propTabs={tabs}
				contentClassName="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-xl font-bold md:text-4xl mt-24"
			/>
		</div>
	</div>
</section>

<style>
	.working-section {
		position: relative;
		padding: 5rem 0;
		background-color: #0a1226;
		overflow: hidden;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.background-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom right,
			#0a1226,
			rgb(15 23 42),
			#0a1226
		);
		z-index: 1;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		border: 1px solid rgba(34, 211, 238, 0.3);
		background-color: rgba(34, 211, 238, 0.1);
		color: rgb(34, 211, 238);
	}

	.badge-dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		margin-right: 0.5rem;
		background-color: rgb(34, 211, 238);
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	.main-title {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 1rem;
		background: linear-gradient(
			to bottom right,
			rgb(229, 231, 235),
			rgb(107, 114, 128)
		);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.125rem;
		color: rgb(156, 163, 175);
		max-width: 800px;
		margin: 0 auto;
	}

	.tabs-container {
		position: relative;
		margin: 0 auto 6rem auto;
		display: flex;
		height: 20rem;
		width: 80vw;
		max-width: 80rem;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		perspective: 1000px;
	}

	@media (min-width: 768px) {
		.tabs-container {
			height: 40rem;
			width: 60vw;
		}
	}

	@media (max-width: 768px) {
		.main-title {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1rem;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
