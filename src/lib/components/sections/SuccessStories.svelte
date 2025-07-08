<script lang="ts">
	import { InfiniteMovingCards } from "$lib";

	export let title = "Customer Success Stories";
	export let subtitle = "See how Karasax has transformed financial lives across thousands of customers";

	const testimonials = [
		{
			quote: "Karasax helped me save $15,000 in my first year! The automated budgeting and smart investment tracking made managing my finances completely effortless.",
			name: "Sarah Johnson",
			title: "Software Engineer",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=1e293b&clothesColor=0891b2&hairColor=724133",
			rating: 5
		},
		{
			quote: "I finally understand my spending patterns and built a 6-month emergency fund. Karasax's insights completely changed my relationship with money.",
			name: "Michael Chen",
			title: "Marketing Director",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=1e293b&clothesColor=0ea5e9&hairColor=0c0e0c",
			rating: 4
		},
		{
			quote: "The investment recommendations were spot-on. My portfolio has grown 28% since I started using Karasax's smart automation features.",
			name: "Emily Rodriguez",
			title: "Small Business Owner",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily&backgroundColor=1e293b&clothesColor=22d3ee&hairColor=f59e0b",
			rating: 5
		},
		{
			quote: "Retirement planning seemed impossible until Karasax. Now I'm on track to retire 5 years earlier than I ever thought possible!",
			name: "David Kim",
			title: "Teacher",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=1e293b&clothesColor=3b82f6&hairColor=6b7280",
			rating: 4
		},
		{
			quote: "Debt freedom in 18 months! Karasax's debt payoff strategy and progress tracking kept me motivated throughout the entire journey.",
			name: "Lisa Park",
			title: "Nurse Practitioner",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa&backgroundColor=1e293b&clothesColor=14b8a6&hairColor=8b5cf6",
			rating: 5
		},
		{
			quote: "Tax season stress is completely gone. Karasax's automated expense categorization saved me hours and maximized my refund by $3,200.",
			name: "James Wilson",
			title: "Freelance Designer",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=1e293b&clothesColor=f97316&hairColor=dc2626",
			rating: 4
		}
	];

	
	export let backgroundColor = "rgb(2 6 23)";
</script>

<section class="pt-10 relative overflow-hidden" style="background-color: {backgroundColor};">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
	<div class="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
	
	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center mb-16">
			<div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
				<span class="w-2 h-2 rounded-full mr-2 animate-pulse bg-cyan-400"></span>
				Success Stories
			</div>
			
			<h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
				{title}
			</h2>
			<p class="text-lg text-neutral-400 mx-auto leading-relaxed">
				{subtitle}
			</p>
		</div>
	</div>

	<!-- Infinite Moving Cards -->
	<div class="relative mb-0">
		<div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none"></div>
		<InfiniteMovingCards 
			items={testimonials} 
			direction="right" 
			speed="slow"
			pauseOnHover={true}
			className="max-w-none"
		/>
	</div>
</section>
