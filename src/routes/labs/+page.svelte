<script lang="ts">
	import { PinContainer } from '$lib/components/ui/ThreeDPin';
	import { Footer } from '$lib';
</script>

<svelte:head>
	<title>Labs - XTRACT</title>
	<meta name="description" content="Labs: Explore experimental UI and interactive 3D Pin demos." />
</svelte:head>

<section class="min-h-screen flex flex-col items-center justify-center gradient-bg">
	<h1 class="text-5xl font-bold mb-8" style="color: var(--color-neutral);">Labs</h1>
	<p class="text-xl mb-12 max-w-2xl text-center" style="color: var(--color-neutral-muted);">
		Dive into our experimental UI playground, featuring the latest in 3D Pin animation and creative Svelte components.
	</p>
	<div class="flex w-full items-center justify-center">
		<PinContainer title="Labs Experiment" href="/labs">
			<div class="flex h-[20rem] w-[20rem] flex-col p-4 tracking-tight text-slate-100/50">
				<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">AI + UI Experiments</h3>
				<div class="!m-0 !p-0 text-base font-normal">
					<span class="text-slate-500">
						Try out our latest interactive demos and creative UI ideas.
					</span>
				</div>
				<div class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500">
					<img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Labs Demo" class="w-full h-full object-cover rounded-lg opacity-80" loading="lazy" />
				</div>
			</div>
		</PinContainer>
	</div>
</section>

<Footer /> 