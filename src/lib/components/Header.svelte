<script lang="ts">
	export let brand = "KARASAX";
	export let showMobileMenu = false;
	export let currentPath = "/";
	
	// Navigation items - can be customized per page
	export let navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Showcase', href: '/showcase' },
		{ label: 'Labs', href: '/labs' },
		{ label: 'AutoAnimate', href: '/auto-animate-demo' },
		{ label: 'Explore', href: '/explore' }
	];

	function toggleMobileMenu() {
		showMobileMenu = !showMobileMenu;
	}

	function closeMobileMenu() {
		showMobileMenu = false;
	}
	
	// Prevent body scroll when mobile menu is open
	$: if (showMobileMenu) {
		if (typeof document !== 'undefined') {
			document.body.classList.add('menu-open');
		}
	} else {
		if (typeof document !== 'undefined') {
			document.body.classList.remove('menu-open');
		}
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-[9999] bg-slate-950/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-800/50 dark:border-neutral-700/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16 lg:h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group">
				<span class="text-2xl lg:text-3xl font-extrabold tracking-tight bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
					{brand}
				</span>
			</a>

			<!-- Desktop Nav -->
			<div class="hidden md:flex items-center gap-8">
				{#each navItems as nav}
					<a
						href={nav.href}
						class="relative px-4 py-2 font-medium text-sm text-neutral-300 hover:text-neutral-100 transition-colors duration-200 group"
						class:active={currentPath === nav.href}
					>
						{nav.label}
						<span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
					</a>
				{/each}
				
				<!-- CTA Button -->
				<a 
					href="#contact" 
					class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
				>
					Get Started
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<div class="md:hidden flex items-center">
				<button 
					on:click={toggleMobileMenu} 
					class="p-2 rounded-lg hover:bg-neutral-800/50 transition-colors"
					aria-label="Toggle mobile menu"
				>
					<svg class="w-6 h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if showMobileMenu}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>
	
	<!-- Mobile Nav -->
	{#if showMobileMenu}
		<div class="md:hidden absolute inset-x-0 top-full z-40 bg-slate-950/95 dark:bg-black/95 backdrop-blur-xl border-b border-neutral-800/50 dark:border-neutral-700/50 shadow-2xl">
			<div class="flex flex-col py-6 px-4 space-y-3">
				{#each navItems as nav}
					<a 
						href={nav.href} 
						class="text-lg font-medium text-neutral-300 hover:text-neutral-100 transition-colors py-3 px-4 rounded-lg hover:bg-neutral-800/50"
						class:active={currentPath === nav.href}
						on:click={closeMobileMenu}
					>
						{nav.label}
					</a>
				{/each}
				
				<!-- Mobile CTA Button -->
				<div class="pt-4 border-t border-neutral-800/50">
					<a 
						href="#contact" 
						class="block w-full text-center rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
						on:click={closeMobileMenu}
					>
						Get Started
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	.active {
		color: #22d3ee; /* cyan-400 */
	}
	
	.active span {
		width: 100%;
	}
	
	:global(.menu-open) {
		overflow: hidden;
	}
</style> 