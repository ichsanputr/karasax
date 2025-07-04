<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	import { 
		Hero, 
		Features, 
		HowItWorks, 
		ThreeDCards, 
		CallToAction, 
		Testimonials, 
		SuccessStories, 
		Team, 
		PressMedia, 
		Footer 
	} from '$lib';

	// Scroll utility function
	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}
</script>

<svelte:head>
	<title>Karasax</title>
	<meta name="description" content="A modern landing page built with Svelte and Tailwind CSS" />
</svelte:head>

<!-- All sections now as components -->
<Hero />
<Features />
<HowItWorks />
<ThreeDCards />
<CallToAction />
<Testimonials />
<SuccessStories />
<Team />
<PressMedia />
<Footer />

<style>
	/* Additional hover effects for 3D cards */
	.card {
		transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
		transition: all 0.3s ease;
	}

	.card:hover {
		transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateZ(10px);
		box-shadow: var(--shadow-overlay);
	}

	/* Smooth scrolling */
	html {
		scroll-behavior: smooth;
	}

	/* Container max-width */
	.container {
		max-width: 1200px;
	}

	/* Jak-inspired animations */
	@keyframes gradient-move {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	
	@keyframes gradient-move-reverse {
		0%, 100% { background-position: 100% 50%; }
		50% { background-position: 0% 50%; }
	}
	
	@keyframes gradient-move-slow {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	
	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(180deg); }
	}
	
	@keyframes float-delayed {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-15px) rotate(-180deg); }
	}
	
	@keyframes float-slow {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-10px) rotate(90deg); }
	}
	
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	.animate-gradient-move {
		background-size: 200% 200%;
		animation: gradient-move 8s ease-in-out infinite;
	}
	
	.animate-gradient-move-reverse {
		background-size: 200% 200%;
		animation: gradient-move-reverse 12s ease-in-out infinite;
	}
	
	.animate-gradient-move-slow {
		background-size: 200% 200%;
		animation: gradient-move-slow 16s ease-in-out infinite;
	}
	
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
	
	.animate-float-delayed {
		animation: float-delayed 8s ease-in-out infinite;
		animation-delay: 2s;
	}
	
	.animate-float-slow {
		animation: float-slow 10s ease-in-out infinite;
		animation-delay: 4s;
	}
	
	.animate-fade-in {
		animation: fade-in 0.8s ease-out forwards;
		animation-delay: var(--animation-delay, 0ms);
	}
	
	/* Mobile responsive improvements */
	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
			line-height: 1.1;
		}
		
		.hero-description {
			font-size: 1rem;
			line-height: 1.6;
		}
		
		.floating-element {
			display: none;
		}
	}
	
	/* Smooth scroll behavior */
	html {
		scroll-behavior: smooth;
	}
	
	/* Prevent body scroll when mobile menu is open */
	body.menu-open {
		overflow: hidden;
	}
</style>
