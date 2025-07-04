<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';

	export let title = "Why Choose Svelte?";
	export let features = [
		{
			icon: "M13 10V3L4 14h7v7l9-11h-7z",
			title: "Lightning Fast",
			description: "Build applications that are truly reactive and performant",
			bgColor: "var(--color-primary-muted)",
			iconColor: "var(--color-primary)"
		},
		{
			icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
			title: "Less Code",
			description: "Write less code, achieve more with Svelte's intuitive syntax",
			bgColor: "var(--color-success-muted)",
			iconColor: "var(--color-success)"
		},
		{
			icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
			title: "True Reactivity",
			description: "Automatic updates when your data changes",
			bgColor: "var(--color-done-muted)",
			iconColor: "var(--color-done)"
		}
	];
	export let backgroundColor = "var(--color-canvas-subtle)";
</script>

<section class="py-20" style="background-color: {backgroundColor};">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12" style="color: var(--color-neutral);">
			{title}
		</h2>
		<div class="grid md:grid-cols-3 gap-8" use:autoAnimate>
			{#each features as feature}
				<div class="card text-center">
					<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background-color: {feature.bgColor};">
						<svg class="w-8 h-8" style="color: {feature.iconColor};" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon}></path>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2" style="color: var(--color-neutral);">{feature.title}</h3>
					<p style="color: var(--color-neutral-muted);">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section> 