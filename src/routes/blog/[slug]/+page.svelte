<script lang="ts">
	import { BackgroundGradient } from "$lib";
	import {
		ArrowLeft,
		Calendar,
		Clock,
		User,
		Share2,
		Bookmark,
		Eye,
		Heart,
	} from "lucide-svelte";
	import { page } from "$app/stores";

	// Function to generate DiceBear avatar URL
	function generateAvatar(
		name: string,
		clothesColor: string = "0891b2",
		hairColor: string = "724133",
	) {
		return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=1e293b&clothesColor=${clothesColor}&hairColor=${hairColor}`;
	}

	// Sample article data - in a real app, this would come from a CMS or database
	const articles = [
		{
			id: 1,
			slug: "5-smart-budgeting-tips-for-financial-freedom",
			title: "5 Smart Budgeting Tips for Financial Freedom",
			content: `
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Creating and sticking to a budget is one of the most important steps toward achieving financial freedom. However, many people struggle with traditional budgeting methods that feel restrictive and overwhelming. In this comprehensive guide, we'll explore five smart budgeting strategies that actually work for real life.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">1. The 50/30/20 Rule</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					The 50/30/20 rule is a simple yet effective budgeting method that divides your after-tax income into three categories:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">50% for Needs:</strong> Essential expenses like housing, utilities, food, transportation, and insurance</li>
					<li><strong class="text-cyan-400">30% for Wants:</strong> Non-essential expenses like entertainment, dining out, shopping, and hobbies</li>
					<li><strong class="text-cyan-400">20% for Savings:</strong> Emergency fund, retirement savings, debt repayment, and investments</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">2. Zero-Based Budgeting</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Zero-based budgeting requires you to assign every dollar a specific purpose before the month begins. This method ensures that your income minus expenses equals zero, leaving no money unaccounted for.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">3. The Envelope System</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					The envelope system is a physical budgeting method where you allocate cash to different spending categories in separate envelopes. Once an envelope is empty, you can't spend more in that category until the next month.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">4. Pay Yourself First</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					This strategy involves automatically transferring a portion of your income to savings or investments before you have a chance to spend it. This ensures that saving becomes a priority rather than an afterthought.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">5. Track Your Spending</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Regularly monitoring your spending habits helps you identify areas where you can cut back and stay accountable to your budget goals. Use apps, spreadsheets, or traditional pen and paper to track every expense.
				</p>

				<div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">💡 Pro Tip</h3>
					<p class="text-neutral-300">
						Start with small changes and gradually build up to more comprehensive budgeting strategies. The key is consistency and finding a method that works for your lifestyle and financial goals.
					</p>
				</div>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Conclusion</h2>
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Remember, budgeting is not about deprivation—it's about making intentional choices with your money. By implementing these smart budgeting strategies, you'll be well on your way to achieving financial freedom and building lasting wealth.
				</p>
			`,
			excerpt:
				"Learn practical strategies to create and stick to a budget that actually works for your lifestyle and financial goals.",
			author: "Sarah Chen",
			avatar: generateAvatar("Sarah Chen", "0891b2", "724133"),
			date: "2024-01-15",
			category: "Budgeting",
			readTime: "4 min read",
			image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2560&auto=format&fit=crop",
			featured: true,
			views: 1247,
			likes: 89,
		},
		{
			id: 2,
			slug: "understanding-investment-risk-vs-return",
			title: "Understanding Investment Risk vs Return",
			content: `
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Investment decisions are fundamentally about balancing risk and return. Understanding this relationship is crucial for building a successful investment portfolio that aligns with your financial goals and risk tolerance.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">The Risk-Return Relationship</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Generally, higher potential returns come with higher levels of risk. This is known as the risk-return tradeoff. Understanding this principle helps investors make informed decisions about their portfolio allocation.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Types of Investment Risk</h2>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Market Risk:</strong> The risk that the entire market will decline</li>
					<li><strong class="text-cyan-400">Credit Risk:</strong> The risk that a borrower will default on their obligations</li>
					<li><strong class="text-cyan-400">Inflation Risk:</strong> The risk that inflation will erode purchasing power</li>
					<li><strong class="text-cyan-400">Liquidity Risk:</strong> The risk that you can't sell an investment quickly</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Diversification: Your Best Defense</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Diversification is one of the most effective ways to manage investment risk. By spreading your investments across different asset classes, sectors, and geographic regions, you can reduce the impact of any single investment's poor performance.
				</p>

				<div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">📊 Risk Assessment</h3>
					<p class="text-neutral-300">
						Before investing, assess your risk tolerance by considering your time horizon, financial goals, and emotional capacity to handle market volatility.
					</p>
				</div>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Conclusion</h2>
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Successful investing requires a clear understanding of the relationship between risk and return. By carefully considering your risk tolerance and implementing proper diversification strategies, you can build a portfolio that helps you achieve your financial goals.
				</p>
			`,
			excerpt:
				"Navigate the complex world of investments with confidence by understanding how risk and return work together.",
			author: "Marcus Rodriguez",
			avatar: generateAvatar("Marcus Rodriguez", "0ea5e9", "0c0e0c"),
			date: "2024-01-12",
			category: "Investing",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop",
			featured: true,
			views: 2156,
			likes: 156,
		},
		{
			id: 3,
			slug: "building-your-emergency-fund-a-step-by-step-guide",
			title: "Building Your Emergency Fund: A Step-by-Step Guide",
			content: `
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					An emergency fund is one of the most important financial safety nets you can build. It provides peace of mind and financial security when unexpected expenses arise. In this comprehensive guide, we'll walk you through the process of building a robust emergency fund.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Why You Need an Emergency Fund</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Life is unpredictable. Unexpected expenses can arise at any time—medical emergencies, car repairs, job loss, or home repairs. Without an emergency fund, these situations can lead to debt or financial stress.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">How Much Should You Save?</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Financial experts recommend saving 3-6 months of living expenses. However, the exact amount depends on your personal circumstances:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Single income household:</strong> 6-12 months of expenses</li>
					<li><strong class="text-cyan-400">Dual income household:</strong> 3-6 months of expenses</li>
					<li><strong class="text-cyan-400">Self-employed:</strong> 6-12 months of expenses</li>
					<li><strong class="text-cyan-400">High job security:</strong> 3-6 months of expenses</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Where to Keep Your Emergency Fund</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Your emergency fund should be easily accessible but separate from your regular spending account. Consider these options:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">High-yield savings account:</strong> Earn interest while keeping money accessible</li>
					<li><strong class="text-cyan-400">Money market account:</strong> Higher interest rates with check-writing privileges</li>
					<li><strong class="text-cyan-400">Separate checking account:</strong> Easy access but lower interest rates</li>
				</ul>

				<div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">💰 Emergency Fund Calculator</h3>
					<p class="text-neutral-300">
						Calculate your target emergency fund: Monthly expenses × Number of months you want to cover = Emergency fund goal
					</p>
				</div>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Building Your Fund Step by Step</h2>
				<ol class="list-decimal list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Start small:</strong> Begin with a $1,000 goal</li>
					<li><strong class="text-cyan-400">Automate savings:</strong> Set up automatic transfers</li>
					<li><strong class="text-cyan-400">Increase gradually:</strong> Boost contributions as you can</li>
					<li><strong class="text-cyan-400">Use windfalls:</strong> Apply bonuses, tax refunds, or gifts</li>
					<li><strong class="text-cyan-400">Cut expenses:</strong> Find ways to reduce spending</li>
				</ol>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">When to Use Your Emergency Fund</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Only use your emergency fund for true emergencies:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li>Medical emergencies</li>
					<li>Car repairs (if needed for work)</li>
					<li>Home repairs (leaks, broken HVAC)</li>
					<li>Job loss</li>
					<li>Family emergencies</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Conclusion</h2>
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Building an emergency fund takes time and discipline, but the peace of mind it provides is invaluable. Start today, even with small amounts, and gradually build your financial safety net.
				</p>
			`,
			excerpt:
				"Discover how to build a robust emergency fund that provides peace of mind and financial security.",
			author: "Emily Watson",
			avatar: generateAvatar("Emily Watson", "22d3ee", "f59e0b"),
			date: "2024-01-10",
			category: "Savings",
			readTime: "5 min read",
			image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2560&auto=format&fit=crop",
			featured: false,
			views: 3421,
			likes: 234,
		},
		{
			id: 4,
			slug: "maximizing-your-tax-savings-in-2024",
			title: "Maximizing Your Tax Savings in 2024",
			content: `
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Tax season can be stressful, but with the right strategies, you can maximize your savings and keep more of your hard-earned money. This guide covers the latest tax-saving opportunities for 2024.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Understanding Tax Deductions vs Credits</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Tax deductions reduce your taxable income, while tax credits directly reduce your tax bill. Credits are generally more valuable than deductions because they provide dollar-for-dollar savings.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Key Tax Deductions for 2024</h2>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Retirement contributions:</strong> 401(k), IRA, and other retirement accounts</li>
					<li><strong class="text-cyan-400">Health savings account (HSA):</strong> Triple tax advantage for medical expenses</li>
					<li><strong class="text-cyan-400">Student loan interest:</strong> Up to $2,500 in interest payments</li>
					<li><strong class="text-cyan-400">Charitable contributions:</strong> Donations to qualified organizations</li>
					<li><strong class="text-cyan-400">Home office expenses:</strong> For self-employed individuals</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Valuable Tax Credits</h2>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Child Tax Credit:</strong> Up to $2,000 per qualifying child</li>
					<li><strong class="text-cyan-400">Earned Income Tax Credit:</strong> For low to moderate-income workers</li>
					<li><strong class="text-cyan-400">American Opportunity Credit:</strong> For higher education expenses</li>
					<li><strong class="text-cyan-400">Lifetime Learning Credit:</strong> For continuing education</li>
				</ul>

				<div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">📋 Tax Planning Checklist</h3>
					<p class="text-neutral-300">
						Review your tax situation quarterly, not just during tax season. This helps you make strategic decisions throughout the year.
					</p>
				</div>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Year-Round Tax Planning Strategies</h2>
				<ol class="list-decimal list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Adjust withholding:</strong> Ensure you're not overpaying taxes</li>
					<li><strong class="text-cyan-400">Maximize retirement contributions:</strong> Reduce taxable income</li>
					<li><strong class="text-cyan-400">Consider tax-loss harvesting:</strong> Offset investment gains</li>
					<li><strong class="text-cyan-400">Plan charitable giving:</strong> Bunch donations for maximum impact</li>
					<li><strong class="text-cyan-400">Review business expenses:</strong> Track all deductible costs</li>
				</ol>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Common Tax Mistakes to Avoid</h2>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li>Missing deadlines for contributions</li>
					<li>Not keeping proper documentation</li>
					<li>Overlooking available credits</li>
					<li>Failing to adjust withholding</li>
					<li>Not consulting a tax professional when needed</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Conclusion</h2>
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Effective tax planning requires year-round attention and strategic thinking. By implementing these strategies, you can significantly reduce your tax burden and keep more of your money working for you.
				</p>
			`,
			excerpt:
				"Expert strategies to reduce your tax burden while staying compliant with the latest regulations.",
			author: "David Kim",
			avatar: generateAvatar("David Kim", "3b82f6", "6b7280"),
			date: "2024-01-08",
			category: "Tax Planning",
			readTime: "7 min read",
			image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2560&auto=format&fit=crop",
			featured: false,
			views: 1897,
			likes: 145,
		},
		{
			id: 5,
			slug: "cryptocurrency-should-it-be-part-of-your-portfolio",
			title: "Cryptocurrency: Should It Be Part of Your Portfolio?",
			content: `
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Cryptocurrency has become a hot topic in the investment world, with Bitcoin and other digital assets gaining mainstream attention. But should cryptocurrency be part of your investment portfolio? Let's explore the pros and cons.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Understanding Cryptocurrency</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Cryptocurrency is a digital or virtual currency that uses cryptography for security. Unlike traditional currencies, cryptocurrencies are typically decentralized and operate on blockchain technology.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Pros of Cryptocurrency Investment</h2>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">High growth potential:</strong> Significant price appreciation opportunities</li>
					<li><strong class="text-cyan-400">Diversification:</strong> Low correlation with traditional assets</li>
					<li><strong class="text-cyan-400">24/7 trading:</strong> Continuous market access</li>
					<li><strong class="text-cyan-400">Inflation hedge:</strong> Limited supply for many cryptocurrencies</li>
					<li><strong class="text-cyan-400">Innovation exposure:</strong> Access to blockchain technology growth</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Cons and Risks</h2>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Extreme volatility:</strong> Prices can swing dramatically</li>
					<li><strong class="text-cyan-400">Regulatory uncertainty:</strong> Evolving legal landscape</li>
					<li><strong class="text-cyan-400">Security risks:</strong> Hacking and theft concerns</li>
					<li><strong class="text-cyan-400">Limited adoption:</strong> Still not widely accepted as payment</li>
					<li><strong class="text-cyan-400">Technical complexity:</strong> Requires understanding of blockchain</li>
				</ul>

				<div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">⚖️ Risk Assessment</h3>
					<p class="text-neutral-300">
						Cryptocurrency should typically represent only a small portion (1-5%) of your total investment portfolio due to its high volatility and risk profile.
					</p>
				</div>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">How to Invest in Cryptocurrency</h2>
				<ol class="list-decimal list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Choose a platform:</strong> Reputable cryptocurrency exchange</li>
					<li><strong class="text-cyan-400">Start small:</strong> Begin with small amounts to learn</li>
					<li><strong class="text-cyan-400">Diversify:</strong> Don't put all your crypto investment in one coin</li>
					<li><strong class="text-cyan-400">Secure storage:</strong> Use hardware wallets for large amounts</li>
					<li><strong class="text-cyan-400">Stay informed:</strong> Keep up with market developments</li>
				</ol>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Portfolio Allocation Guidelines</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Consider these factors when deciding on cryptocurrency allocation:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Risk tolerance:</strong> Higher tolerance allows for larger allocation</li>
					<li><strong class="text-cyan-400">Investment timeline:</strong> Longer timelines can accommodate more risk</li>
					<li><strong class="text-cyan-400">Portfolio size:</strong> Larger portfolios can absorb more volatility</li>
					<li><strong class="text-cyan-400">Financial goals:</strong> Align with your overall investment objectives</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Conclusion</h2>
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Cryptocurrency can be a valuable addition to a diversified portfolio, but it should be approached with caution and proper risk management. Only invest what you can afford to lose and ensure it aligns with your overall financial strategy.
				</p>
			`,
			excerpt:
				"An unbiased look at cryptocurrency investing and how it fits into a diversified investment strategy.",
			author: "Lisa Park",
			avatar: generateAvatar("Lisa Park", "14b8a6", "8b5cf6"),
			date: "2024-01-05",
			category: "Investing",
			readTime: "8 min read",
			image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2560&auto=format&fit=crop",
			featured: false,
			views: 5678,
			likes: 423,
		},
		{
			id: 6,
			slug: "retirement-planning-in-your-30s-getting-started",
			title: "Retirement Planning in Your 30s: Getting Started",
			content: `
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Your 30s are a crucial decade for retirement planning. While retirement may seem far away, starting early gives you a significant advantage due to compound interest. This guide will help you create a solid foundation for your retirement.
				</p>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Why Start in Your 30s?</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Starting retirement planning in your 30s provides several advantages:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Compound interest:</strong> More time for your money to grow</li>
					<li><strong class="text-cyan-400">Lower monthly contributions:</strong> Smaller amounts needed due to longer timeline</li>
					<li><strong class="text-cyan-400">Risk tolerance:</strong> Can afford to take more investment risk</li>
					<li><strong class="text-cyan-400">Career stability:</strong> Typically more established in your career</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">How Much Should You Save?</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					Financial experts recommend saving 10-15% of your income for retirement. However, the exact amount depends on:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Desired retirement lifestyle:</strong> More luxurious lifestyle requires more savings</li>
					<li><strong class="text-cyan-400">Retirement age:</strong> Earlier retirement requires more aggressive saving</li>
					<li><strong class="text-cyan-400">Expected retirement income:</strong> Social Security, pensions, other income sources</li>
					<li><strong class="text-cyan-400">Current age and savings:</strong> Later start requires higher contributions</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Retirement Account Options</h2>
				<div class="space-y-4 mb-6">
					<div class="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
						<h4 class="font-semibold text-cyan-400 mb-2">401(k) Plans</h4>
						<p class="text-neutral-300 text-sm">Employer-sponsored plans with potential matching contributions and tax advantages.</p>
					</div>
					<div class="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
						<h4 class="font-semibold text-cyan-400 mb-2">Individual Retirement Accounts (IRAs)</h4>
						<p class="text-neutral-300 text-sm">Personal retirement accounts with tax benefits and investment flexibility.</p>
					</div>
					<div class="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
						<h4 class="font-semibold text-cyan-400 mb-2">Roth Accounts</h4>
						<p class="text-neutral-300 text-sm">Tax-free withdrawals in retirement, ideal for those expecting higher tax rates.</p>
					</div>
				</div>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Investment Strategy for Your 30s</h2>
				<p class="text-neutral-300 leading-relaxed mb-6">
					In your 30s, you can afford to take more investment risk due to your long time horizon:
				</p>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">High equity allocation:</strong> 70-90% in stocks for growth potential</li>
					<li><strong class="text-cyan-400">Diversification:</strong> Spread investments across different asset classes</li>
					<li><strong class="text-cyan-400">Regular rebalancing:</strong> Maintain target asset allocation</li>
					<li><strong class="text-cyan-400">Low-cost index funds:</strong> Minimize fees and maximize returns</li>
				</ul>

				<div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
					<h3 class="text-xl font-bold text-cyan-400 mb-4">📈 Retirement Calculator</h3>
					<p class="text-neutral-300">
						Use online retirement calculators to estimate your needs. Consider factors like inflation, healthcare costs, and lifestyle changes.
					</p>
				</div>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Common Mistakes to Avoid</h2>
				<ul class="list-disc list-inside text-neutral-300 mb-6 space-y-2">
					<li>Not taking advantage of employer matching</li>
					<li>Being too conservative with investments</li>
					<li>Not increasing contributions over time</li>
					<li>Ignoring inflation in planning</li>
					<li>Not having a written retirement plan</li>
				</ul>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Next Steps</h2>
				<ol class="list-decimal list-inside text-neutral-300 mb-6 space-y-2">
					<li><strong class="text-cyan-400">Assess your current situation:</strong> Calculate net worth and current savings</li>
					<li><strong class="text-cyan-400">Set retirement goals:</strong> Determine desired lifestyle and retirement age</li>
					<li><strong class="text-cyan-400">Create a savings plan:</strong> Set monthly contribution targets</li>
					<li><strong class="text-cyan-400">Choose appropriate accounts:</strong> Maximize tax-advantaged options</li>
					<li><strong class="text-cyan-400">Develop investment strategy:</strong> Create diversified portfolio</li>
					<li><strong class="text-cyan-400">Review and adjust annually:</strong> Monitor progress and make changes</li>
				</ol>

				<h2 class="text-2xl font-bold text-neutral-200 mb-4 mt-8">Conclusion</h2>
				<p class="text-lg text-neutral-300 leading-relaxed mb-6">
					Starting retirement planning in your 30s gives you a significant advantage. By taking action now, you can build a secure financial future and enjoy the retirement lifestyle you envision.
				</p>
			`,
			excerpt:
				"Why starting early matters and practical steps to secure your financial future in retirement.",
			author: "Michael Thompson",
			avatar: generateAvatar("Michael Thompson", "f97316", "dc2626"),
			date: "2024-01-03",
			category: "Retirement",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2560&auto=format&fit=crop",
			featured: false,
			views: 2987,
			likes: 198,
		},
	];

	// Popular posts for the sidebar
	const popularPosts = [
		{
			id: 3,
			title: "Building Your Emergency Fund: A Step-by-Step Guide",
			excerpt:
				"Discover how to build a robust emergency fund that provides peace of mind and financial security.",
			author: "Emily Watson",
			avatar: generateAvatar("Emily Watson", "22d3ee", "f59e0b"),
			date: "2024-01-10",
			category: "Savings",
			readTime: "5 min read",
			image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2560&auto=format&fit=crop",
			views: 3421,
			likes: 234,
		},
		{
			id: 4,
			title: "Maximizing Your Tax Savings in 2024",
			excerpt:
				"Expert strategies to reduce your tax burden while staying compliant with the latest regulations.",
			author: "David Kim",
			avatar: generateAvatar("David Kim", "3b82f6", "6b7280"),
			date: "2024-01-08",
			category: "Tax Planning",
			readTime: "7 min read",
			image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2560&auto=format&fit=crop",
			views: 1897,
			likes: 145,
		},
		{
			id: 5,
			title: "Cryptocurrency: Should It Be Part of Your Portfolio?",
			excerpt:
				"An unbiased look at cryptocurrency investing and how it fits into a diversified investment strategy.",
			author: "Lisa Park",
			avatar: generateAvatar("Lisa Park", "14b8a6", "8b5cf6"),
			date: "2024-01-05",
			category: "Investing",
			readTime: "8 min read",
			image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2560&auto=format&fit=crop",
			views: 5678,
			likes: 423,
		},
		{
			id: 6,
			title: "Retirement Planning in Your 30s: Getting Started",
			excerpt:
				"Why starting early matters and practical steps to secure your financial future in retirement.",
			author: "Michael Thompson",
			avatar: generateAvatar("Michael Thompson", "f97316", "dc2626"),
			date: "2024-01-03",
			category: "Retirement",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2560&auto=format&fit=crop",
			views: 2987,
			likes: 198,
		},
	];

	// Get the current article based on the slug
	$: currentArticle = articles.find((article) => {
		const generatedSlug = article.title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/(^-|-$)/g, "");
		return generatedSlug === $page.params.slug;
	});
	$: if (!currentArticle) {
		// Redirect to 404 or blog home if article not found
		window.location.href = "/blog";
	}
</script>

<svelte:head>
	<title>{currentArticle?.title || "Article Not Found"} - KARASAX</title>
	<meta
		name="description"
		content={currentArticle?.excerpt || "Article not found"}
	/>
</svelte:head>

{#if currentArticle}
	<!-- Hero Section -->
	<section
		class="pt-30 pb-6 relative overflow-hidden"
		style="background: rgb(2 6 23);"
	>
		<!-- Background decoration -->
		<div
			class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
		></div>
		<div class="absolute inset-0 bg-grid-white/[0.02]"></div>

		<div class="container mx-auto px-4 relative z-10">
			<!-- Back to Blog Button -->
			<div class="mb-8">
				<a
					href="/blog"
					class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
				>
					<ArrowLeft class="w-4 h-4" />
					Back to Blog
				</a>
			</div>

			<!-- Article Header -->
			<div class="max-w-4xl mx-auto">
				<div
					class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
				>
					<span
						class="w-2 h-2 rounded-full mr-2 animate-pulse bg-cyan-400"
					></span>
					{currentArticle.category}
				</div>

				<h1
					class="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent"
				>
					{currentArticle.title}
				</h1>

				<p class="text-xl mb-8 text-neutral-400 leading-relaxed">
					{currentArticle.excerpt}
				</p>

				<!-- Article Meta -->
				<div
					class="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-8"
				>
					<div class="flex items-center gap-2">
						<img
							src={currentArticle.avatar}
							alt={currentArticle.author}
							class="w-8 h-8 rounded-full border border-sky-500/30"
						/>
						<span>{currentArticle.author}</span>
					</div>
					<div class="flex items-center gap-2">
						<Calendar class="w-4 h-4" />
						<span
							>{new Date(
								currentArticle.date,
							).toLocaleDateString()}</span
						>
					</div>
					<div class="flex items-center gap-2">
						<Clock class="w-4 h-4" />
						<span>{currentArticle.readTime}</span>
					</div>
					<div class="flex items-center gap-2">
						<Eye class="w-4 h-4" />
						<span>{currentArticle.views.toLocaleString()}</span>
					</div>
					<div class="flex items-center gap-2">
						<Heart class="w-4 h-4" />
						<span>{currentArticle.likes}</span>
					</div>
				</div>

				<!-- Featured Image -->
				<div
					class="relative rounded-xl overflow-hidden mb-8 border border-slate-700/30"
				>
					<img
						src={currentArticle.image}
						alt={currentArticle.title}
						class="w-full h-64 md:h-96 object-cover"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Article Content Section -->
	<section class="py-12 relative overflow-hidden bg-slate-950">
		<div
			class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
		></div>
		<div class="absolute inset-0 bg-grid-white/[0.02]"></div>

		<div class="container mx-auto px-4 relative z-10">
			<div class="grid lg:grid-cols-3 gap-12">
				<!-- Main Article Content -->
				<div class="lg:col-span-2">
					<article
						class="bg-slate-900/30 rounded-xl p-8 border border-slate-700/30 backdrop-blur-sm"
					>
						<!-- Article Actions -->
						<div
							class="flex items-center justify-between mb-8 pb-6 border-b border-slate-700/30"
						>
							<div class="flex items-center gap-4">
								<button
									class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-neutral-300 hover:bg-slate-700/50 transition-colors duration-300"
								>
									<Heart class="w-4 h-4" />
									Like
								</button>
								<button
									class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-neutral-300 hover:bg-slate-700/50 transition-colors duration-300"
								>
									<Bookmark class="w-4 h-4" />
									Save
								</button>
							</div>
							<button
								class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-neutral-300 hover:bg-slate-700/50 transition-colors duration-300"
							>
								<Share2 class="w-4 h-4" />
								Share
							</button>
						</div>

						<!-- Article Content -->
						<div class="prose prose-invert max-w-none">
							{@html currentArticle.content}
						</div>

						<!-- Article Tags -->
						<div class="mt-8 pt-6 border-t border-slate-700/30">
							<h3
								class="text-lg font-semibold text-neutral-200 mb-4"
							>
								Tags
							</h3>
							<div class="flex flex-wrap gap-2">
								<span
									class="px-3 py-1 text-sm rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
								>
									{currentArticle.category}
								</span>
								<span
									class="px-3 py-1 text-sm rounded-full bg-slate-800/50 text-neutral-300 border border-slate-600/50"
								>
									Financial Planning
								</span>
								<span
									class="px-3 py-1 text-sm rounded-full bg-slate-800/50 text-neutral-300 border border-slate-600/50"
								>
									Personal Finance
								</span>
							</div>
						</div>
					</article>
				</div>

				<!-- Sidebar - Popular Posts -->
				<div class="lg:col-span-1">
					<div class="">
						<div
							class="bg-slate-900/30 rounded-xl p-6 border border-slate-700/30 backdrop-blur-sm"
						>
							<h3 class="text-xl font-bold text-neutral-200 mb-6">
								Popular Posts
							</h3>

							<div class="space-y-6">
								{#each popularPosts as post}
									<article class="group">
										<a
											href="/blog/{post.title
												.toLowerCase()
												.replace(/[^a-z0-9]+/g, '-')
												.replace(/(^-|-$)/g, '')}"
											class="block"
										>
											<div
												class="relative overflow-hidden rounded-lg mb-3"
											>
												<img
													src={post.image}
													alt={post.title}
													class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
												/>
												<div
													class="absolute top-2 left-2"
												>
													<span
														class="px-2 py-1 text-xs font-medium rounded-full bg-sky-500/90 text-white border border-sky-400/50 backdrop-blur-sm"
													>
														{post.category}
													</span>
												</div>
											</div>

											<h4
												class="text-sm font-semibold text-neutral-200 group-hover:text-cyan-400 transition-colors duration-300 mb-2 line-clamp-2"
											>
												{post.title}
											</h4>

											<div
												class="flex items-center gap-2 text-xs text-neutral-400 mb-2"
											>
												<img
													src={post.avatar}
													alt={post.author}
													class="w-5 h-5 rounded-full border border-sky-500/30"
												/>
												<span>{post.author}</span>
											</div>

											<div
												class="flex items-center justify-between text-xs text-neutral-500"
											>
												<span>{post.readTime}</span>
												<div
													class="flex items-center gap-2"
												>
													<Eye class="w-3 h-3" />
													<span
														>{post.views.toLocaleString()}</span
													>
												</div>
											</div>
										</a>
									</article>
								{/each}
							</div>

							<!-- Newsletter Signup -->
							<div class="mt-8 pt-6 border-t border-slate-700/30">
								<BackgroundGradient className="rounded-lg">
									<div
										class="bg-slate-800/50 rounded-3xl p-4 border border-slate-700/50"
									>
										<h4
											class="text-sm font-semibold text-neutral-200 mb-2"
										>
											Stay Updated
										</h4>
										<p
											class="text-xs text-neutral-400 mb-3"
										>
											Get the latest financial insights
											delivered to your inbox.
										</p>
										<input
											type="email"
											placeholder="Enter your email"
											class="w-full px-3 py-2 text-xs rounded bg-slate-700/50 border border-slate-600/50 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
										/>
										<button
											class="w-full mt-3 px-3 rounded-lg py-2 text-xs bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded font-medium hover:from-cyan-600 hover:to-sky-600 transition-all duration-300"
										>
											Subscribe
										</button>
									</div>
								</BackgroundGradient>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{:else}
	<!-- 404 Section -->
	<section
		class="pt-30 pb-6 relative overflow-hidden"
		style="background: rgb(2 6 23);"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
		></div>
		<div class="absolute inset-0 bg-grid-white/[0.02]"></div>

		<div class="container mx-auto px-4 relative z-10">
			<div class="text-center py-20">
				<h1
					class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-neutral-200 to-neutral-500 bg-clip-text text-transparent"
				>
					Article Not Found
				</h1>
				<p class="text-xl text-neutral-400 mb-8">
					The article you're looking for doesn't exist.
				</p>
				<a
					href="/blog"
					class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-sky-600 transition-all duration-300"
				>
					<ArrowLeft class="w-4 h-4" />
					Back to Blog
				</a>
			</div>
		</div>
	</section>
{/if}
