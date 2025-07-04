<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';

	export let title = "How It Works";
	export let steps = [
		{
			title: "Sign Up",
			description: "Create your free account in seconds and get started with our intuitive dashboard.",
			image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
			alt: "Sign Up"
		},
		{
			title: "Connect Data",
			description: "Easily integrate your favorite tools and import data with a few clicks.",
			image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
			alt: "Connect Data"
		},
		{
			title: "Automate & Grow",
			description: "Set up automations, track results, and scale your business with AI-driven insights.",
			image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
			alt: "Automate & Grow"
		}
	];
	export let backgroundColor = "var(--color-canvas-default)";
</script>

<section class="py-20" style="background-color: {backgroundColor};">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12" style="color: var(--color-neutral);">
			{title}
		</h2>
		<div class="grid md:grid-cols-3 gap-8" use:autoAnimate>
			{#each steps as step}
				<div class="card text-center flex flex-col items-center">
					<img src={step.image} alt={step.alt} class="w-full h-48 object-cover rounded-lg mb-6" loading="lazy" />
					<h3 class="text-xl font-semibold mb-2" style="color: var(--color-neutral);">{step.title}</h3>
					<p style="color: var(--color-neutral-muted);">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section> 