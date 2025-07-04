<script lang="ts">
	import { onMount } from "svelte";
	import autoAnimate from '@formkit/auto-animate';

	export let title = "Why Businesses Love Our AI Solutions";
	export let subtitle = "Real businesses, real results with AI automation.";
	export let testimonials = [
		{
			text: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
			author: "James Carter",
			role: "CEO at TechFlow Solutions",
		},
		{
			text: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
			author: "Sophia Martinez",
			role: "Operations Manager at NexaCorp",
		},
		{
			text: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
			author: "David Reynolds",
			role: "Head of Sales at GrowthPeak",
		},
	];
	export let autoRotate = true;
	export let rotateInterval = 5000;
	export let backgroundColor = "var(--color-canvas-subtle)";

	let currentTestimonial = 0;
	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		if (autoRotate) {
			interval = setInterval(() => {
				currentTestimonial = (currentTestimonial + 1) % testimonials.length;
			}, rotateInterval);

			return () => clearInterval(interval);
		}
	});

	function goToTestimonial(index: number) {
		currentTestimonial = index;
		if (autoRotate && interval) {
			clearInterval(interval);
			interval = setInterval(() => {
				currentTestimonial = (currentTestimonial + 1) % testimonials.length;
			}, rotateInterval);
		}
	}
</script>

<section class="py-20" style="background-color: {backgroundColor};">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold mb-4" style="color: var(--color-neutral);">
				{title}
			</h2>
			<p class="text-xl max-w-3xl mx-auto" style="color: var(--color-neutral-muted);">
				{subtitle}
			</p>
		</div>
		
		<div class="max-w-4xl mx-auto">
			<div class="card text-center" use:autoAnimate>
				<div class="mb-6">
					<svg
						class="w-12 h-12 mx-auto"
						style="color: var(--color-primary);"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
						/>
					</svg>
				</div>
				<div use:autoAnimate>
					<p class="text-xl mb-6 italic" style="color: var(--color-neutral-muted);">
						"{testimonials[currentTestimonial].text}"
					</p>
					<div>
						<p class="font-semibold" style="color: var(--color-neutral);">
							{testimonials[currentTestimonial].author}
						</p>
						<p style="color: var(--color-neutral-muted);">
							{testimonials[currentTestimonial].role}
						</p>
					</div>
				</div>
				
				<!-- Testimonial indicators -->
				<div class="flex justify-center mt-8 gap-2">
					{#each testimonials as _, index}
						<button
							class="w-3 h-3 rounded-full transition-all duration-300"
							class:bg-sky-500={currentTestimonial === index}
							class:bg-gray-300={currentTestimonial !== index}
							on:click={() => goToTestimonial(index)}
							aria-label="Go to testimonial {index + 1}"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section> 