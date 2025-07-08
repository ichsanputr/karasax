<script lang="ts">
	import { PinContainer } from '$lib/components/ui/ThreeDPin';
	import autoAnimate from '@formkit/auto-animate';

	const images = [
		{
			title: 'Golden Hour',
			description: 'Magnificent sunset clouds painting the sky in warm golden hues.',
			image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
			gradient: 'from-orange-500 via-pink-500 to-purple-500',
			href: 'https://unsplash.com/',
		},
		{
			title: 'Storm Formation',
			description: 'Dramatic cloud formations creating a breathtaking atmospheric display.',
			image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=600&q=80',
			gradient: 'from-gray-600 via-blue-600 to-indigo-600',
			href: 'https://unsplash.com/',
		},
		{
			title: 'Perfect Day',
			description: 'Crystal clear blue sky with soft white clouds drifting peacefully.',
			image: 'https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop',
			gradient: 'from-cyan-400 via-blue-500 to-blue-600',
			href: 'https://unsplash.com/',
		},
	];
</script>


<svelte:head>
	<title>Showcase - Karasax</title>
	<meta name="description" content="Showcase of beautiful sky imagery and interactive 3D Pin UI components." />
</svelte:head>

<section class="py-30 gradient-bg min-h-[100vh] flex flex-col justify-center">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-4" style="color: var(--color-neutral);">
			Showcase
		</h2>
		<p class="text-xl mb-16 text-center" style="color: var(--color-neutral-muted);">
			Explore our collection of stunning sky imagery captured through our platform
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-20 justify-items-center" use:autoAnimate>
			{#each images as item}
				<div class="flex w-full justify-center">
					<PinContainer title={item.title} href={item.href}>
						<div class="flex h-[20rem] w-[20rem] flex-col p-4 tracking-tight text-slate-100/50">
							<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">{item.title}</h3>
							<div class="!m-0 !p-0 text-base font-normal">
								<span class="text-slate-500">{item.description}</span>
							</div>
							<div class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br {item.gradient}">
								<img
									src={item.image}
									alt={item.title}
									class="w-full h-full object-cover rounded-lg opacity-80"
									loading="lazy"
								/>
							</div>
						</div>
					</PinContainer>
				</div>
			{/each}
		</div>		
	</div>
</section>