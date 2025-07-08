<script lang="ts">
	import { BackgroundGradient } from '$lib';

	const blogPosts = [
		{
			id: 1,
			title: "5 Smart Budgeting Tips for Financial Freedom",
			excerpt: "Learn practical strategies to create and stick to a budget that actually works for your lifestyle and financial goals.",
			author: "Sarah Chen",
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
			date: "2024-01-05",
			category: "Investing",
			readTime: "8 min read",
			image: "https://images.unsplash.com/photo-1518544866521-3d79d2b8cc1f?q=80&w=2560&auto=format&fit=crop",
			featured: false
		},
		{
			id: 6,
			title: "Retirement Planning in Your 30s: Getting Started",
			excerpt: "Why starting early matters and practical steps to secure your financial future in retirement.",
			author: "Michael Thompson",
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
<section class="py-20 bg-slate-950 dark:bg-black">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
				<span class="w-2 h-2 rounded-full mr-2 animate-pulse bg-cyan-400"></span>
				Financial Insights & Tips
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
				Karasax 
				<span class="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">Financial Blog</span>
			</h1>
			
			<p class="text-xl mb-8 max-w-3xl mx-auto text-neutral-400">
				Expert insights, practical tips, and strategies to help you achieve financial freedom and build lasting wealth.
			</p>
		</div>
	</div>
</section>

<!-- Featured Posts -->
<section class="py-16 bg-slate-950/50">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold mb-8 text-center text-neutral-200">Featured Articles</h2>
		<div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
			{#each featuredPosts as post}
				<BackgroundGradient className="rounded-xl h-full">
					<article class="bg-slate-900/50 rounded-xl overflow-hidden border border-neutral-800/50 backdrop-blur-sm h-full">
						<img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
						<div class="p-6">
							<div class="flex items-center gap-2 mb-3">
								<span class="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
									{post.category}
								</span>
								<span class="text-neutral-500 text-sm">{post.readTime}</span>
							</div>
							<h3 class="text-xl font-bold mb-3 text-neutral-200 hover:text-cyan-400 transition-colors">
								<a href="/blog/{post.id}">{post.title}</a>
							</h3>
							<p class="text-neutral-400 mb-4 line-clamp-3">{post.excerpt}</p>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2">
									<div class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white text-sm font-semibold">
										{post.author.split(' ').map(n => n[0]).join('')}
									</div>
									<div>
										<p class="text-sm font-medium text-neutral-300">{post.author}</p>
										<p class="text-xs text-neutral-500">{new Date(post.date).toLocaleDateString()}</p>
									</div>
								</div>
								<a href="/blog/{post.id}" class="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
									Read more →
								</a>
							</div>
						</div>
					</article>
				</BackgroundGradient>
			{/each}
		</div>
	</div>
</section>

<!-- Category Filter -->
<section class="py-8 bg-slate-950">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap justify-center gap-3">
			{#each categories as category}
				<button
					on:click={() => selectedCategory = category}
					class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border {
						selectedCategory === category 
							? 'bg-cyan-500 text-white border-cyan-500' 
							: 'bg-slate-800/50 text-neutral-400 border-neutral-700/50 hover:bg-slate-700/50 hover:text-neutral-300'
					}"
				>
					{category}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Blog Posts Grid -->
<section class="py-16 bg-slate-950">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold mb-8 text-center text-neutral-200">
			{selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
		</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			{#each filteredPosts as post}
				<article class="bg-slate-900/30 rounded-xl overflow-hidden border border-neutral-800/30 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-300 group">
					<img src={post.image} alt={post.title} class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
					<div class="p-6">
						<div class="flex items-center gap-2 mb-3">
							<span class="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
								{post.category}
							</span>
							<span class="text-neutral-500 text-sm">{post.readTime}</span>
						</div>
						<h3 class="text-lg font-bold mb-3 text-neutral-200 group-hover:text-cyan-400 transition-colors">
							<a href="/blog/{post.id}">{post.title}</a>
						</h3>
						<p class="text-neutral-400 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								<div class="w-6 h-6 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center text-white text-xs font-semibold">
									{post.author.split(' ').map(n => n[0]).join('')}
								</div>
								<div>
									<p class="text-xs font-medium text-neutral-400">{post.author}</p>
									<p class="text-xs text-neutral-500">{new Date(post.date).toLocaleDateString()}</p>
								</div>
							</div>
							<a href="/blog/{post.id}" class="text-cyan-400 hover:text-cyan-300 text-xs font-medium">
								Read →
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Newsletter Signup -->
<section class="py-20 bg-slate-950">
	<div class="container mx-auto px-4">
		<BackgroundGradient className="rounded-xl max-w-2xl mx-auto">
			<div class="bg-slate-900/50 rounded-xl p-8 border border-neutral-800/50 backdrop-blur-sm text-center">
				<h3 class="text-2xl font-bold mb-4 text-neutral-200">Stay Updated</h3>
				<p class="text-neutral-400 mb-6">Get the latest financial insights and tips delivered to your inbox weekly.</p>
				<div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
					<input 
						type="email" 
						placeholder="Enter your email" 
						class="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-neutral-700/50 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
					/>
					<button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-sky-600 transition-all duration-300">
						Subscribe
					</button>
				</div>
			</div>
		</BackgroundGradient>
	</div>
</section> 