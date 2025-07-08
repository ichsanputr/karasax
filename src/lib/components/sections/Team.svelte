<script lang="ts">
	import { AnimatedTooltip } from '$lib';

	export let title = "Meet the Team";
	export let subtitle = "Our passionate team of innovators, engineers, and visionaries working together to revolutionize business automation.";
	export let teamMembers = [
		{
			id: 1,
			name: 'Alex Kim',
			designation: 'Founder & CEO',
			image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80'
		},
		{
			id: 2,
			name: 'Maria Lopez',
			designation: 'Head of Engineering',
			image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
		},
		{
			id: 3,
			name: 'Chris Evans',
			designation: 'Product Designer',
			image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
		},
		{
			id: 4,
			name: 'Samantha Lee',
			designation: 'Customer Success Lead',
			image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80'
		},
		{
			id: 5,
			name: 'David Chen',
			designation: 'AI Research Lead',
			image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
		},
		{
			id: 6,
			name: 'Sarah Wilson',
			designation: 'Marketing Director',
			image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=400&q=80'
		}
	];
</script>

<section class="team-section">
	<!-- Background gradient -->
	<div class="background-gradient"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-16">
			<div class="badge">
				<span class="badge-dot"></span>
				Team
			</div>
			
			<h2 class="main-title">
				{title}
			</h2>
			<p class="subtitle">
				{subtitle}
			</p>
		</div>
		
		<div class="flex justify-center">
			<AnimatedTooltip items={teamMembers} />
		</div>
	</div>
</section>

<style>
	.team-section {
		position: relative;
		padding: 5rem 0;
		background-color: #0A1226;
		overflow: hidden;
	}

	.background-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom right, #0A1226, rgb(15 23 42), #0A1226);
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
		margin-bottom: 1.5rem;
		background: linear-gradient(to bottom right, rgb(229, 231, 235), rgb(107, 114, 128));
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
		line-height: 1.6;
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
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style> 