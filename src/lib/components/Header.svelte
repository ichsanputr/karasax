<script lang="ts">
	export let brand = "XTRACT";
	export let showMobileMenu = false;
	export let currentPath = "/";
	
	// Navigation items - can be customized per page
	export let navItems = [
		{ label: 'Home', href: '/' },
		{ label: '3D Demo', href: '/3d-card' },
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

<nav class="w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-white/20 dark:border-white/10">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16 lg:h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group">
				<span class="text-2xl lg:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
					{brand}
				</span>
			</a>

			<!-- Desktop Nav -->
			<div class="hidden md:flex items-center gap-6">
				{#each navItems as nav}
					<a
						href={nav.href}
						class="relative px-3 py-2 font-semibold text-base text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-cyan-400 transition-colors duration-200 group"
						class:active={currentPath === nav.href}
					>
						{nav.label}
						<span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-sky-400 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<div class="md:hidden flex items-center">
				<button 
					on:click={toggleMobileMenu} 
					class="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
					aria-label="Toggle mobile menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
		<div class="md:hidden absolute inset-x-0 top-full z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-lg">
			<div class="flex flex-col py-4 px-4 space-y-2">
				{#each navItems as nav}
					<a 
						href={nav.href} 
						class="text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
						class:active={currentPath === nav.href}
						on:click={closeMobileMenu}
					>
						{nav.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	.active {
		color: #0ea5e9; /* sky-500 */
	}
	
	@media (prefers-color-scheme: dark) {
		.active {
			color: #22d3ee; /* cyan-400 */
		}
	}
	
	.active span {
		width: 100%;
		height: 0.25rem;
	}
	
	:global(.menu-open) {
		overflow: hidden;
	}
</style> 