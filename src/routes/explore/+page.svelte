<script lang="ts">
import { PinContainer } from '$lib/components/ui/ThreeDPin';
</script>

<svelte:head>
	<title>Explore More - XTRACT</title>
	<meta name="description" content="Explore more interactive demos and creative Svelte features." />
</svelte:head>

<section class="py-20 gradient-bg min-h-[70vh] flex flex-col justify-center">
	<div class="container mx-auto px-4">
		<h2 class="text-4xl font-bold text-center mb-12" style="color: var(--color-neutral);">
			Explore More
		</h2>
		<div class="flex flex-col md:flex-row gap-12 justify-center items-center" use:autoAnimate>
			<!-- Showcase Pin -->
			<div class="flex-1 flex justify-center">
				<PinContainer title="Showcase" href="/showcase">
					<div class="flex h-[18rem] w-[18rem] flex-col p-4 tracking-tight text-slate-100/50">
						<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Showcase</h3>
						<div class="!m-0 !p-0 text-base font-normal">
							<span class="text-slate-500">
								See our best interactive UI demos and creative Svelte features.
							</span>
						</div>
						<div class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
							<img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Showcase Demo" class="w-full h-full object-cover rounded-lg opacity-80" loading="lazy" />
						</div>
					</div>
				</PinContainer>
			</div>
			<!-- Labs Pin -->
			<div class="flex-1 flex justify-center">
				<PinContainer title="Labs" href="/labs">
					<div class="flex h-[18rem] w-[18rem] flex-col p-4 tracking-tight text-slate-100/50">
						<h3 class="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">Labs</h3>
						<div class="!m-0 !p-0 text-base font-normal">
							<span class="text-slate-500">
								Try our latest experiments and UI playgrounds.
							</span>
						</div>
						<div class="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500">
							<img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Labs Demo" class="w-full h-full object-cover rounded-lg opacity-80" loading="lazy" />
						</div>
					</div>
				</PinContainer>
			</div>
		</div>
	</div>
</section> 