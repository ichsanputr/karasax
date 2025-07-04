<script lang="ts">
	export let title = "Customer Success Stories";
	export let stories = [
		{
			company: "TechFlow Solutions",
			image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
			quote: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
			author: "James Carter",
			role: "CEO"
		},
		{
			company: "NexaCorp",
			image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80",
			quote: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
			author: "Sophia Martinez",
			role: "Operations Manager"
		},
		{
			company: "GrowthPeak",
			image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
			quote: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
			author: "David Reynolds",
			role: "Head of Sales"
		}
	];
	export let backgroundColor = "var(--color-canvas-default)";
</script>

<section class="py-20" style="background-color: {backgroundColor};">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12" style="color: var(--color-neutral);">
			{title}
		</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each stories as story}
				<div class="card flex flex-col">
					<img src={story.image} alt={story.company} class="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
					<div class="flex-1 flex flex-col justify-between">
						<h3 class="text-lg font-semibold mb-2" style="color: var(--color-neutral);">{story.company}</h3>
						<p style="color: var(--color-neutral-muted);">"{story.quote}"</p>
						<p class="mt-4 text-sm" style="color: var(--color-neutral-muted);">— {story.author}, {story.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section> 