<script lang="ts">
	import { AnimatedTooltip } from "$lib";
	import { WavyBackground } from "$lib/components/ui/WavyBackground";
	import { Motion } from "svelte-motion";

	export let title = "Meet the Team";
	export let subtitle =
		"Our passionate team of innovators, engineers, and visionaries working together to revolutionize business automation.";
	export let teamMembers = [
		{
			id: 1,
			name: "Alex Kim",
			designation: "Founder & CEO",
			image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
		},
		{
			id: 2,
			name: "Maria Lopez",
			designation: "Head of Engineering",
			image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
		},
		{
			id: 3,
			name: "Chris Evans",
			designation: "Product Designer",
			image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
		},
		{
			id: 4,
			name: "Samantha Lee",
			designation: "Customer Success Lead",
			image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
		},
		{
			id: 5,
			name: "David Chen",
			designation: "AI Research Lead",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
		},
		{
			id: 6,
			name: "Sarah Wilson",
			designation: "Marketing Director",
			image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400&q=80",
		},
	];
</script>

<section class="team-section">
	<div class="relative z-10">
		<div class="text-center">
			<WavyBackground>
				<h2 class="main-title">
					{title}
				</h2>
				<p class="subtitle">
					{subtitle}
				</p>
				<div class="flex justify-center">
					<AnimatedTooltip items={teamMembers} />
				</div>
			</WavyBackground>
		</div>
	</div>
</section>

<style>
	.team-section {
		padding: 0;
		background-color: #0a1226;
		overflow: hidden;
	}

	.main-title {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 1rem;
		color: #fff;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.125rem;
		color: #fff;
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
		margin-bottom: 2rem !important;
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
