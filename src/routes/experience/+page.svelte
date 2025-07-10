<script lang="ts">
	import { HeroParallax } from '$lib/components/ui/HeroParallax';

	const products = [
		{
			title: 'Moonbeam',
			link: 'https://gomoonbeam.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png'
		},
		{
			title: 'Cursor',
			link: 'https://cursor.so',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png'
		},
		{
			title: 'Rogue',
			link: 'https://userogue.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png'
		},

		{
			title: 'Editorially',
			link: 'https://editorially.org',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png'
		},
		{
			title: 'Editrix AI',
			link: 'https://editrix.ai',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png'
		},
		{
			title: 'Pixel Perfect',
			link: 'https://app.pixelperfect.quest',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png'
		},

		{
			title: 'Algochurn',
			link: 'https://algochurn.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png'
		},
		{
			title: 'Aceternity UI',
			link: 'https://ui.aceternity.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png'
		},
		{
			title: 'Tailwind Master Kit',
			link: 'https://tailwindmasterkit.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png'
		},
		{
			title: 'SmartBridge',
			link: 'https://smartbridgetech.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png'
		},
		{
			title: 'Renderwork Studio',
			link: 'https://renderwork.studio',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png'
		},

		{
			title: 'Creme Digital',
			link: 'https://cremedigital.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cremedigital.png'
		},
		{
			title: 'Golden Bells Academy',
			link: 'https://goldenbellsacademy.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png'
		},
		{
			title: 'Invoker Labs',
			link: 'https://invoker.lol',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/invoker.png'
		},
		{
			title: 'E Free Invoice',
			link: 'https://efreeinvoice.com',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png'
		}
	];
</script>

<svelte:head>
	<title>Experience - KARASAX</title>
	<meta name="description" content="Explore our expertise in web development, mobile apps, backend solutions, and cloud infrastructure." />
</svelte:head>

<!-- Hero Section with same styling as blog -->
<section class="pt-30 pb-6 relative overflow-hidden" style="background: rgb(2 6 23);">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
	<div class="absolute inset-0 bg-grid-white/[0.02]"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-16">
			<h1 class="text-3xl md:text-5xl font-bold mb-3 leading-tight bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
				Karasax 
				<span class="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent block md:inline">Experience</span>
			</h1>
			
			<p class="text-lg mb-8 mx-auto text-neutral-400 leading-relaxed">
				Discover our expertise across multiple domains of software development and technology solutions.
			</p>
		</div>
	</div>
</section>

<!-- Hero Parallax Section -->
<div class="relative overflow-hidden bg-slate-950">
	<div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
	<div class="absolute inset-0 bg-grid-white/[0.02]"></div>
	
	<div class="container mx-auto w-[80vw] lg:w-[60vw] relative z-10">
		<HeroParallax {products} />
	</div>
</div>