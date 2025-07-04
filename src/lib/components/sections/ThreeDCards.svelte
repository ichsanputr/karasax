<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';

	export let title = "Interactive 3D Cards";
	export let subtitle = "Experience the power of modern web animations with our 3D card effects";
	export let ctaText = "View Full 3D Demo";
	export let ctaLink = "/3d-card";
	export let showCta = true;
	export let cards = [
		{
			title: "Performance",
			description: "Lightning-fast rendering with minimal overhead",
			icon: "M13 10V3L4 14h7v7l9-11h-7z",
			bgColor: "var(--color-primary-muted)",
			iconColor: "var(--color-primary)",
			gradientFrom: "blue-500/20",
			gradientTo: "purple-500/20"
		},
		{
			title: "Developer Experience",
			description: "Intuitive syntax and excellent tooling",
			icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
			bgColor: "var(--color-success-muted)",
			iconColor: "var(--color-success)",
			gradientFrom: "green-500/20",
			gradientTo: "blue-500/20"
		},
		{
			title: "Security",
			description: "Built with security best practices in mind",
			icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
			bgColor: "var(--color-done-muted)",
			iconColor: "var(--color-done)",
			gradientFrom: "purple-500/20",
			gradientTo: "pink-500/20"
		}
	];
	export let backgroundColor = "var(--color-canvas-default)";
</script>

<section class="py-20" style="background-color: {backgroundColor};">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12" style="color: var(--color-neutral);">
			{title}
		</h2>
		{#if subtitle}
			<p class="text-center mb-12 text-lg" style="color: var(--color-neutral-muted);">
				{subtitle}
			</p>
		{/if}
		
		<!-- 3D Card Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" use:autoAnimate>
			{#each cards as card}
				<div class="card group relative overflow-hidden" style="background: linear-gradient(135deg, var(--color-canvas-overlay) 0%, var(--color-canvas-subtle) 100%);">
					<div class="absolute inset-0 bg-gradient-to-r from-{card.gradientFrom} to-{card.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<div class="relative z-10">
						<div class="w-12 h-12 mb-4 rounded-lg flex items-center justify-center" style="background-color: {card.bgColor};">
							<svg class="w-6 h-6" style="color: {card.iconColor};" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={card.icon}></path>
							</svg>
						</div>
						<h3 class="text-xl font-semibold mb-2" style="color: var(--color-neutral);">{card.title}</h3>
						<p style="color: var(--color-neutral-muted);">{card.description}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Call to Action -->
		{#if showCta}
			<div class="text-center mt-12">
				<a href={ctaLink} class="btn-primary inline-block">
					{ctaText}
				</a>
			</div>
		{/if}
	</div>
</section> 