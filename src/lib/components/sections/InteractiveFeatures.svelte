<script lang="ts">
	import { StickyScrollReveal } from "$lib/components/ui/StickyScrollReveal";

	const stickyContent = [
		{
			title: "Collaborative Editing",
			description:
				"Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
		},
		{
			title: "Real time changes",
			description:
				"See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
		},
		{
			title: "Version control",
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		},
		{
			title: "Advanced Analytics",
			description:
				"Get deep insights into your workflow with our advanced analytics dashboard. Track performance metrics, identify bottlenecks, and optimize your processes. Make data-driven decisions to improve efficiency and achieve better results.",
		},
		{
			title: "Smart Automation",
			description:
				"Automate repetitive tasks and workflows with our intelligent automation engine. Set up triggers, create custom workflows, and let our AI handle the mundane while you focus on what matters most. Save hours every day with smart automation.",
		},
		{
			title: "Seamless Integration",
			description:
				"Connect with your favorite tools and platforms effortlessly. Our extensive API and integration library works with over 100+ popular services. From Slack to Salesforce, everything works together seamlessly.",
		},
		{
			title: "Security & Compliance",
			description:
				"Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and advanced access controls. Your data is protected with bank-level security standards, ensuring peace of mind for your organization.",
		},
		{
			title: "Mobile Optimization",
			description:
				"Work from anywhere with our fully responsive mobile experience. Access all features on your phone or tablet with the same powerful functionality. Stay productive whether you're in the office or on the go.",
		},
	];
</script>

<section class="interactive-features-section">
	<div class="background-gradient"></div>

	<div class="mx-auto px-4 relative z-10">
		<div class="text-center mb-16">
			<div class="badge">
				<span class="badge-dot"></span>
				Interactive
			</div>

			<h2 class="main-title">Interactive Features</h2>
			<p class="subtitle">
				Discover our powerful collaboration tools and real-time
				capabilities
			</p>
		</div>
		<StickyScrollReveal content={stickyContent} />
	</div>
</section>

<style>
	.interactive-features-section {
		position: relative;
		padding: 5rem 0;
		background-color: #0a1226;
		overflow: hidden;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.background-gradient {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom right,
			#0a1226,
			rgb(15 23 42),
			#0a1226
		);
		z-index: 1;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		border: 1px solid rgba(34, 211, 238, 0.3);
		background-color: rgba(34, 211, 238, 0.1);
		color: rgb(34, 211, 238);
	}

	.badge-dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		margin-right: 0.5rem;
		background-color: rgb(34, 211, 238);
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	.main-title {
		font-size: 3rem;
		font-weight: bold;
		margin-bottom: 1rem;
		background: linear-gradient(
			to bottom right,
			rgb(229, 231, 235),
			rgb(107, 114, 128)
		);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.125rem;
		color: rgb(156, 163, 175);
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.main-title {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1rem;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
