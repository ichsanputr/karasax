<script lang="ts">
	export let companyName = "Karasax";
	export let companyDescription =
		"Karasax – Financial Freedom for Your Future.";
	export let socialLinks = [
		{ name: "Instagram", url: "#" },
		{ name: "Facebook", url: "#" },
		{ name: "LinkedIn", url: "#" },
	];
	export let links = [
		{ name: "Services", url: "#" },
		{ name: "Process", url: "#" },
		{ name: "Case studies", url: "#" },
		{ name: "Benefits", url: "#" },
	];
	export let pages = [
		{ name: "Home", url: "#" },
		{ name: "About", url: "#" },
		{ name: "Blog", url: "#" },
		{ name: "Contact", url: "#" },
		{ name: "404", url: "#" },
	];
	export let newsletterTitle = "Newsletter";
	export let newsletterDescription =
		"Stay updated with our latest AI automation insights.";
	export let copyrightText = "Karasax © Built by Ichsanputr";
	export let backgroundColor = "var(--color-canvas-inset)";

	let email = "";

	function handleNewsletterSubmit() {
		if (email) {
			console.log("Newsletter subscription for:", email);
			email = "";
		}
	}
</script>

<footer
	class="pt-10 pb-6"
	style="background-color: {backgroundColor}; color: var(--color-neutral);"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-3 gap-8 pb-8">
			<!-- Company Info -->
			<div class="col-span-2 sm:col-span-1">
				<h3 class="text-2xl font-bold mb-4">{companyName}</h3>
				<p class="mb-4" style="color: var(--color-neutral-muted);">
					{companyDescription}
				</p>
				<div class="flex space-x-4">
					{#each socialLinks as social}
						<a
							href={social.url}
							class="transition-colors hover:text-neutral"
							style="color: var(--color-neutral-muted);"
						>
							{social.name}
						</a>
					{/each}
				</div>
			</div>

			<!-- Links -->
			<div>
				<h4 class="font-semibold mb-4">Links</h4>
				<div class="space-y-2">
					{#each links as link}
						<a
							href={link.url}
							class="block transition-colors hover:text-neutral"
							style="color: var(--color-neutral-muted);"
						>
							{link.name}
						</a>
					{/each}
				</div>
			</div>

			<!-- Newsletter -->
			<div class="col-span-2 sm:col-span-1">
				<h4 class="font-semibold mb-4">{newsletterTitle}</h4>
				<p class="mb-4" style="color: var(--color-neutral-muted);">
					{newsletterDescription}
				</p>
				<form
					class="flex"
					on:submit|preventDefault={handleNewsletterSubmit}
				>
					<input
						type="email"
						bind:value={email}
						placeholder="Enter your email"
						class="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2"
						style="color: var(--color-neutral); background-color: var(--color-canvas-default); border: 1px solid var(--color-border-default);"
						required
					/>
					<button
						type="submit"
						class="px-4 py-2 rounded-r-lg transition-colors btn-primary"
					>
						Subscribe
					</button>
				</form>
			</div>
		</div>

		<!-- Copyright -->
		<div
			class="border-t pt-6 text-center"
			style="border-color: var(--color-border-default); color: var(--color-neutral-muted);"
		>
			<p>{copyrightText}</p>
		</div>
	</div>
</footer>
