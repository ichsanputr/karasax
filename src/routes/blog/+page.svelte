<script lang="ts">
	import { BackgroundGradient } from '$lib';
	import { BlogVersion } from '$lib/components/ui/InfiniteMovingCards';
	import autoAnimate from '@formkit/auto-animate';

	// Function to generate DiceBear avatar URL
	function generateAvatar(name: string, clothesColor: string = '0891b2', hairColor: string = '724133') {
		return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=1e293b&clothesColor=${clothesColor}&hairColor=${hairColor}`;
	}

	const blogPosts = [
		{
			id: 1,
			title: "5 Smart Budgeting Tips for Financial Freedom",
			excerpt: "Learn practical strategies to create and stick to a budget that actually works for your lifestyle and financial goals.",
			author: "Sarah Chen",
			avatar: generateAvatar("Sarah Chen", "0891b2", "724133"),
			date: "2024-01-15",
			category: "Budgeting",
			readTime: "4 min read",
			image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2560&auto=format&fit=crop",
			featured: true
		},
		{
			id: 2,
			title: "Understanding Investment Risk vs Return",
			excerpt: "Navigate the complex world of investments with confidence by understanding how risk and return work together.",
			author: "Marcus Rodriguez",
			avatar: generateAvatar("Marcus Rodriguez", "0ea5e9", "0c0e0c"),
			date: "2024-01-12",
			category: "Investing",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop",
			featured: true
		},
		{
			id: 3,
			title: "Building Your Emergency Fund: A Step-by-Step Guide",
			excerpt: "Discover how to build a robust emergency fund that provides peace of mind and financial security.",
			author: "Emily Watson",
			avatar: generateAvatar("Emily Watson", "22d3ee", "f59e0b"),
			date: "2024-01-10",
			category: "Savings",
			readTime: "5 min read",
			image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2560&auto=format&fit=crop",
			featured: false
		},
		{
			id: 4,
			title: "Maximizing Your Tax Savings in 2024",
			excerpt: "Expert strategies to reduce your tax burden while staying compliant with the latest regulations.",
			author: "David Kim",
			avatar: generateAvatar("David Kim", "3b82f6", "6b7280"),
			date: "2024-01-08",
			category: "Tax Planning",
			readTime: "7 min read",
			image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2560&auto=format&fit=crop",
			featured: false
		},
		{
			id: 5,
			title: "Cryptocurrency: Should It Be Part of Your Portfolio?",
			excerpt: "An unbiased look at cryptocurrency investing and how it fits into a diversified investment strategy.",
			author: "Lisa Park",
			avatar: generateAvatar("Lisa Park", "14b8a6", "8b5cf6"),
			date: "2024-01-05",
			category: "Investing",
			readTime: "8 min read",
			image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2560&auto=format&fit=crop",
			featured: false
		},
		{
			id: 6,
			title: "Retirement Planning in Your 30s: Getting Started",
			excerpt: "Why starting early matters and practical steps to secure your financial future in retirement.",
			author: "Michael Thompson",
			avatar: generateAvatar("Michael Thompson", "f97316", "dc2626"),
			date: "2024-01-03",
			category: "Retirement",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2560&auto=format&fit=crop",
			featured: false
		}
	];

	const categories = ["All", "Budgeting", "Investing", "Savings", "Tax Planning", "Retirement"];
	let selectedCategory = "All";

	$: filteredPosts = selectedCategory === "All" 
		? blogPosts 
		: blogPosts.filter(post => post.category === selectedCategory);

	$: featuredPosts = blogPosts.filter(post => post.featured);
</script>

<svelte:head>
	<title>Financial Blog - Karasax</title>
	<meta name="description" content="Stay informed with expert financial insights, tips, and strategies from Karasax. Learn about budgeting, investing, saving, and building wealth." />
</svelte:head>

<!-- Hero Section -->
<section class="pt-30 pb-6 relative overflow-hidden" style="background: rgb(2 6 23);">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
	<div class="absolute inset-0 bg-grid-white/[0.02]"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
				<span class="w-2 h-2 rounded-full mr-2 animate-pulse bg-cyan-400"></span>
				Financial Insights & Tips
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
				Karasax 
				<span class="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent block md:inline">Financial Blog</span>
			</h1>
			
			<p class="text-xl mb-8 mx-auto text-neutral-400 leading-relaxed">
				Expert insights, practical tips, and strategies to help you achieve financial freedom and build lasting wealth.
			</p>
		</div>
	</div>
</section>

<!-- Featured Posts -->
<section class="py-10 relative overflow-hidden bg-slate-950/50">
	<div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-900/80"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-10">
			<div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
				<span class="w-2 h-2 rounded-full mr-2 animate-pulse bg-cyan-400"></span>
				Featured Content
			</div>
			
			<h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
				Featured Articles
			</h2>
			<p class="text-lg text-neutral-400 mx-auto leading-relaxed">
				Our most popular and impactful financial guides
			</p>
		</div>
	</div>

	<!-- Infinite Moving Cards -->
	<div class="relative ">
		<div class="absolute inset-0 via-transparent to-slate-950 z-10 pointer-events-none"></div>
		<BlogVersion 
			items={featuredPosts} 
			direction="right" 
			speed="fast"
			pauseOnHover={true}
			className="max-w-none"
		/>
	</div>
</section>

<!-- Category Filter -->
<section class="py-12 relative bg-slate-950">
	<div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-8">
			<h3 class="text-2xl font-bold mb-4 text-neutral-200">Browse by Category</h3>
			<p class="text-neutral-400">Find articles that match your interests</p>
		</div>
		<div class="flex flex-wrap justify-center gap-4" use:autoAnimate>
			{#each categories as category}
				<button
					on:click={() => selectedCategory = category}
					class="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 border {
						selectedCategory === category 
							? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white border-cyan-500 shadow-lg' 
							: 'bg-slate-800/50 text-neutral-400 border-slate-600/50 hover:bg-slate-700/50 hover:text-neutral-300 hover:border-cyan-500/30'
					}"
				>
					{category}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Blog Posts Grid -->
<section class="py-20 relative overflow-hidden bg-slate-950">
	<div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
	<div class="absolute inset-0 bg-grid-white/[0.02]"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
				{selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
			</h2>
			<p class="text-neutral-400">Comprehensive guides to master your finances</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto" use:autoAnimate>
			{#each filteredPosts as post}
				<article class="bg-slate-900/30 rounded-xl overflow-hidden border border-slate-700/30 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-300 group hover:border-cyan-500/30">
					<div class="relative overflow-hidden">
						<img src={post.image} alt={post.title} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
						<div class="absolute top-4 left-4">
							<span class="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/90 text-white border border-sky-400/50 backdrop-blur-sm">
								{post.category}
							</span>
						</div>
					</div>
					<div class="p-6">
						<div class="flex items-center gap-2 mb-3">
							<span class="text-neutral-500 text-sm">{post.readTime}</span>
							<span class="text-neutral-600">•</span>
							<span class="text-neutral-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
						</div>
						<h3 class="text-lg font-bold mb-3 text-neutral-200 group-hover:text-cyan-400 transition-colors leading-tight">
							<a href="/blog/{post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}">{post.title}</a>
						</h3>
						<p class="text-neutral-400 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								<img 
									src={post.avatar} 
									alt={post.author}
									class="w-8 h-8 rounded-full border border-sky-500/30"
								/>
								<div>
									<p class="text-xs font-medium text-neutral-400">{post.author}</p>
								</div>
							</div>
							<a href="/blog/{post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}" class="text-cyan-400 hover:text-cyan-300 text-xs font-medium flex items-center gap-1 group">
								Read
								<svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
								</svg>
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Newsletter Signup -->
<section class="py-20 relative overflow-hidden bg-slate-950">
	<div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"></div>
	
	<div class="container mx-auto max-w-4xl px-4 relative z-10">
		<BackgroundGradient className="rounded-xl w-full">
			<div class="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm text-center">
				<div class="mb-8">
					<h3 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
						Stay Updated
					</h3>
					<p class="text-lg text-neutral-400 leading-relaxed">
						Get the latest financial insights and tips delivered to your inbox weekly. Join thousands of readers building wealth.
					</p>
				</div>
				<div class="flex flex-col sm:flex-row gap-4 mx-auto">
					<input 
						type="email" 
						placeholder="Enter your email address" 
						class="flex-1 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-600/50 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
					/>
					<button class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
						Subscribe Now
					</button>
				</div>
				<p class="text-xs text-neutral-500 mt-4">
					No spam, unsubscribe at any time. Read our privacy policy.
				</p>
			</div>
		</BackgroundGradient>
	</div>
</section> 