<script lang="ts">
	export let showFade: boolean = true;
	export let pattern: "grid" | "grid-small" | "dot" = "grid";
	export let strokeColor: string = "#000000";
	export let opacity: number = 0.2;
</script>

<div
	class="grid-dot-background"
	class:show-fade={showFade}
	style="--stroke-color: {strokeColor}; --opacity: {opacity};"
	data-pattern={pattern}
>
	<!-- Radial gradient for the container to give a faded look -->
	<div class="fade-overlay"></div>
	<slot />
</div>

<style>
	.grid-dot-background {
		position: relative;
		display: flex;
		height: 24rem; /* h-96 */
		width: 100%;
		align-items: center;
		justify-content: center;
		background-color: #0a1226;
	}

	/* Dark mode patterns only */
	.grid-dot-background[data-pattern="grid"] {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%2330363d'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
	}

	.fade-overlay {
		pointer-events: none;
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-canvas-default);
		mask-image: radial-gradient(ellipse at center, transparent 20%, black);
		-webkit-mask-image: radial-gradient(
			ellipse at center,
			transparent 20%,
			black
		);
	}
</style>
