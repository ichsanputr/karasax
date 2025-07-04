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
	export let backgroundColor = "var(--color-canvas-subtle)";
</script>

<section class="py-20" style="background-color: {backgroundColor};">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-8" style="color: var(--color-neutral);">
			{title}
		</h2>
		<p class="text-lg text-center mb-12 mx-auto" style="color: var(--color-neutral-muted);">
			{subtitle}
		</p>
		<div class="flex justify-center">
			<AnimatedTooltip items={teamMembers} />
		</div>
	</div>
</section> 