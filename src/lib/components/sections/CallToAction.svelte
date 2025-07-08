<script lang="ts">
	import { GridAndDotBackgrounds } from "$lib/components/ui/GridAndDotBackgrounds";

	export let title = "Ready to Get Started?";
	export let subtitle =
		"Join thousands of developers building amazing applications with Svelte";
	export let primaryButton = {
		text: "Start Building",
		action: () => console.log("Primary action"),
	};
	export let secondaryButton = {
		text: "View Documentation",
		action: () => console.log("Secondary action"),
	};
	export let showSecondaryButton = true;
	export let backgroundColor = "gradient-bg";
</script>

<!-- Example with grid pattern -->
<GridAndDotBackgrounds pattern="grid" opacity={0.1}>
	<div class="content-container">
		<h2 class="main-title">
			{title}
		</h2>
		<p class="subtitle">
			{subtitle}
		</p>
		<div class="button-container">
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
</GridAndDotBackgrounds>

<style>
	.content-container {
		position: relative;
		z-index: 20;
		text-align: center;
		padding: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.main-title {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		color: var(--color-neutral);
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.25rem;
		margin-bottom: 2rem;
		color: var(--color-neutral-muted);
		line-height: 1.6;
	}

	.button-container {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.main-title {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.button-container {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
