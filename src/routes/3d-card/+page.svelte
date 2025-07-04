<script lang="ts">
	import CardBody from '$lib/components/ui/ThreeDCardEffect/CardBody.svelte';
	import CardContainer from '$lib/components/ui/ThreeDCardEffect/CardContainer.svelte';
	import CardItem from '$lib/components/ui/ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = false;
</script>

<svelte:head>
	<title>3D Card Effect - XTRACT</title>
	<meta name="description" content="Experience the power of 3D card effects with modern design and AI automation." />
</svelte:head>

<!-- Dark gradient background -->
<div class="min-h-screen" style="background: linear-gradient(135deg, var(--color-canvas-default) 0%, var(--color-canvas-subtle) 100%);">
	<!-- Hero Section -->
	<section class="pt-12 pb-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border" style="background-color: var(--color-primary-muted); color: var(--color-primary); border-color: var(--color-primary-subtle);">
					<span class="w-2 h-2 rounded-full mr-2 animate-pulse" style="background-color: var(--color-primary);"></span>
					Interactive 3D Experience
				</div>
				
				<h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight" style="color: var(--color-neutral);">
					Experience the Future of 
					<span style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-done) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">AI Automation</span>
				</h1>
				
				<p class="text-xl mb-8 max-w-3xl mx-auto" style="color: var(--color-neutral-muted);">
					Hover over the cards below to unleash the power of CSS perspective and 3D transformations
				</p>
			</div>
		</div>
	</section>

	<!-- 3D Cards Section -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
				
				<!-- Card 1: Workflow Automation -->
				<CardContainer bind:isMouseEntered className="inter-var">
					<CardBody
						className="relative group/card backdrop-blur-sm border w-auto sm:w-[30rem] h-auto rounded-xl p-6 transition-all duration-300"
						style="background-color: var(--color-canvas-overlay); border-color: var(--color-border-default);"
					>
						<CardItem
							{isMouseEntered}
							translateZ="50"
							className="text-xl font-bold"
							style="color: var(--color-neutral);"
						>
							Workflow Automation
						</CardItem>
						<CardItem
							{isMouseEntered}
							translateZ="60"
							className="text-sm max-w-sm mt-2"
							style="color: var(--color-neutral-muted);"
						>
							Automate repetitive tasks and streamline internal operations with intelligent AI workflows
						</CardItem>
						<CardItem {isMouseEntered} translateZ="100" className="w-full mt-4">
							<img
								src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								height="1000"
								width="1000"
								class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
								alt="Workflow automation"
							/>
						</CardItem>
						<div class="mt-6 flex items-center justify-between">
							<CardItem
								{isMouseEntered}
								translateZ={20}
								className="px-4 py-2 rounded-xl text-xs font-normal backdrop-blur-sm"
								style="color: var(--color-neutral); background-color: var(--color-canvas-subtle);"
							>
								Learn more →
							</CardItem>
							<CardItem
								{isMouseEntered}
								translateZ={20}
								className="px-4 py-2 rounded-xl text-xs font-bold"
								style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-done) 100%); color: white;"
							>
								Get Started
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>

				<!-- Card 2: AI Assistant -->
				<CardContainer bind:isMouseEntered className="inter-var">
					<CardBody
						className="relative group/card backdrop-blur-sm border w-auto sm:w-[30rem] h-auto rounded-xl p-6 transition-all duration-300"
						style="background-color: var(--color-canvas-overlay); border-color: var(--color-border-default);"
					>
						<CardItem
							{isMouseEntered}
							translateZ="50"
							className="text-xl font-bold"
							style="color: var(--color-neutral);"
						>
							AI Personal Assistant
						</CardItem>
						<CardItem
							{isMouseEntered}
							translateZ="60"
							className="text-sm max-w-sm mt-2"
							style="color: var(--color-neutral-muted);"
						>
							Delegate daily tasks from managing calendars to drafting emails and summarizing meetings
						</CardItem>
						<CardItem {isMouseEntered} translateZ="100" rotateX={10} className="w-full mt-4">
							<img
								src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								height="1000"
								width="1000"
								class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
								alt="AI Assistant"
							/>
						</CardItem>
						<div class="mt-6 flex items-center justify-between">
							<CardItem
								{isMouseEntered}
								translateZ={20}
								translateX={-20}
								className="px-4 py-2 rounded-xl text-xs font-normal backdrop-blur-sm"
								style="color: var(--color-neutral); background-color: var(--color-canvas-subtle);"
							>
								Explore →
							</CardItem>
							<CardItem
								{isMouseEntered}
								translateZ={20}
								translateX={20}
								className="px-4 py-2 rounded-xl text-xs font-bold"
								style="background: linear-gradient(135deg, var(--color-success) 0%, var(--color-attention) 100%); color: white;"
							>
								Try Now
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>

				<!-- Card 3: Sales & Marketing -->
				<CardContainer bind:isMouseEntered className="inter-var">
					<CardBody
						className="relative group/card backdrop-blur-sm border w-auto sm:w-[30rem] h-auto rounded-xl p-6 transition-all duration-300"
						style="background-color: var(--color-canvas-overlay); border-color: var(--color-border-default);"
					>
						<CardItem
							{isMouseEntered}
							translateZ="50"
							className="text-xl font-bold"
							style="color: var(--color-neutral);"
						>
							Sales & Marketing AI
						</CardItem>
						<CardItem
							{isMouseEntered}
							translateZ="60"
							className="text-sm max-w-sm mt-2"
							style="color: var(--color-neutral-muted);"
						>
							AI tools for lead generation, personalized outreach, and automated content creation
						</CardItem>
						<CardItem {isMouseEntered} translateZ="100" rotateZ={-5} className="w-full mt-4">
							<img
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								height="1000"
								width="1000"
								class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
								alt="Sales and Marketing"
							/>
						</CardItem>
						<div class="mt-6 flex items-center justify-between">
							<CardItem
								{isMouseEntered}
								translateZ={20}
								className="px-4 py-2 rounded-xl text-xs font-normal backdrop-blur-sm"
								style="color: var(--color-neutral); background-color: var(--color-canvas-subtle);"
							>
								Discover →
							</CardItem>
							<CardItem
								{isMouseEntered}
								translateZ={20}
								className="px-4 py-2 rounded-xl text-xs font-bold"
								style="background: linear-gradient(135deg, var(--color-attention) 0%, var(--color-danger) 100%); color: white;"
							>
								Start Free
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>

			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20">
		<div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
			<h2 class="text-4xl font-bold mb-4" style="color: var(--color-neutral);">
				Ready to Transform Your Business?
			</h2>
			<p class="text-xl mb-8" style="color: var(--color-neutral-muted);">
				Experience the power of AI automation with our cutting-edge 3D interface
			</p>
			<button class="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-primary">
				Get Started Today
			</button>
		</div>
	</section>

	<!-- Footer -->
	<footer class="backdrop-blur-sm border-t py-12" style="background-color: var(--color-canvas-inset); border-color: var(--color-border-default);">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h3 class="text-2xl font-bold mb-4" style="color: var(--color-neutral);">XTRACT</h3>
				<p class="mb-4" style="color: var(--color-neutral-muted);">Transform your business with intelligent AI automation</p>
				<div class="flex justify-center space-x-6">
					<a href="#" class="transition-colors hover:text-neutral" style="color: var(--color-neutral-muted);">Twitter</a>
					<a href="#" class="transition-colors hover:text-neutral" style="color: var(--color-neutral-muted);">LinkedIn</a>
					<a href="#" class="transition-colors hover:text-neutral" style="color: var(--color-neutral-muted);">GitHub</a>
				</div>
			</div>
		</div>
	</footer>
</div> 