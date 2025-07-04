<script lang="ts">
	export let title = "Ready to Get Started?";
	export let subtitle = "Join thousands of developers building amazing applications with Svelte";
	export let primaryButton = {
		text: "Start Building",
		action: () => console.log("Primary action")
	};
	export let secondaryButton = {
		text: "View Documentation",
		action: () => console.log("Secondary action")
	};
	export let showSecondaryButton = true;
	export let backgroundColor = "gradient-bg";
</script>

<section class="py-20 {backgroundColor}">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-4xl font-bold mb-6" style="color: var(--color-neutral);">
			{title}
		</h2>
		<p class="text-xl mb-8" style="color: var(--color-neutral-muted);">
			{subtitle}
		</p>
		<div class="flex gap-4 justify-center">
			<button class="btn-primary" on:click={primaryButton.action}>
				{primaryButton.text}
			</button>
			{#if showSecondaryButton}
				<button class="btn-secondary" on:click={secondaryButton.action}>
					{secondaryButton.text}
				</button>
			{/if}
		</div>
	</div>
</section> 