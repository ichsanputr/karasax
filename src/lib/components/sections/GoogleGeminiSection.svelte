<script lang="ts">
	import { useTransform, useViewportScroll } from 'svelte-motion';
	import GoogleGeminiEffect from '$lib/components/ui/GoogleGeminiEffect/GoogleGeminiEffect.svelte';

	let ref: HTMLDivElement;

	const { scrollYProgress } = useViewportScroll();

	const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
	const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
	const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
	const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
	const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
</script>

<div
	class="relative h-[400vh] w-full overflow-clip bg-black py-40 dark:border dark:border-white/[0.1]"
	bind:this={ref}
>
	<GoogleGeminiEffect
		pathLengths={[
			pathLengthFirst,
			pathLengthSecond,
			pathLengthThird,
			pathLengthFourth,
			pathLengthFifth
		]}
		title="Karasax.com"
		description="A Platform for managing your finances and investments."
	/>
</div>