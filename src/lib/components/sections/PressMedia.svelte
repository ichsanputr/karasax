<script lang="ts">
	export let title = "Press & Media";
	export let mediaItems = [
		{
			name: "TechCrunch",
			image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
			quote: "XTRACT is redefining automation for modern businesses.",
			url: "https://techcrunch.com/"
		},
		{
			name: "The Next Web",
			image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
			quote: "A game-changer in AI-powered workflow automation.",
			url: "https://thenextweb.com/"
		},
		{
			name: "WIRED",
			image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
			quote: "XTRACT brings the future of business automation to today's teams.",
			url: "https://www.wired.com/"
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
			{#each mediaItems as media}
				<a href={media.url} target="_blank" rel="noopener" class="card flex flex-col hover:shadow-raised transition-shadow duration-200">
					<img src={media.image} alt={media.name} class="w-full h-32 object-cover rounded-lg mb-4" loading="lazy" />
					<h3 class="text-lg font-semibold mb-2" style="color: var(--color-neutral);">{media.name}</h3>
					<p class="text-sm" style="color: var(--color-neutral-muted);">"{media.quote}"</p>
				</a>
			{/each}
		</div>
	</div>
</section> 