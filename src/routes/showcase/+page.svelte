<script lang="ts">
	import { PinContainer } from '$lib/components/ui/ThreeDPin';
</script>

<svelte:head>
	<title>Showcase - XTRACT</title>
	<meta name="description" content="Showcase of interactive 3D Pin UI and modern Svelte features." />
</svelte:head>

<section class="min-h-screen flex flex-col items-center justify-center gradient-bg">
	<h1 class="text-5xl font-bold mb-8" style="color: var(--color-neutral);">Showcase</h1>
	<p class="text-xl mb-12 max-w-2xl text-center" style="color: var(--color-neutral-muted);">
		Explore our interactive 3D Pin component, perfect for highlighting products, features, or links with a modern animated effect.
	</p>
	<div class="flex w-full items-center justify-center">
		<PinContainer title="Unsplash Inspiration" href="https://unsplash.com/">
			<div class="flex h-[20rem] w-[20rem] flex-col p-4 tracking-tight text-slate-100/50">
				<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Stunning Visuals</h3>
				<div class="!m-0 !p-0 text-base font-normal">
					<span class="text-slate-500">
						Discover beautiful, high-quality images for your next project.
					</span>
				</div>
				<div class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
					<img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Unsplash Demo" class="w-full h-full object-cover rounded-lg opacity-80" loading="lazy" />
				</div>
			</div>
		</PinContainer>
	</div>
</section> 