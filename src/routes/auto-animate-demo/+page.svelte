<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import { ArrowRight, Plus, X, Check } from 'lucide-svelte';
	import { Footer } from '$lib';

	// Dynamic list example
	let fruits = ['🍎 Apple', '🍌 Banana', '🍒 Cherry', '🍊 Orange', '🍇 Grape'];
	let newFruit = '';

	// Cards example
	let events = [
		{ id: 1, title: 'Team Meeting', date: 'March 15th', description: 'Weekly team sync and planning session.' },
		{ id: 2, title: 'Product Launch', date: 'March 20th', description: 'Launch of our new AI-powered features.' }
	];

	// FAQ accordion example
	let faqs = [
		{ id: 1, question: 'What is AutoAnimate?', answer: 'AutoAnimate is a zero-config animation utility that adds smooth transitions to your web app with a single line of code.', open: false },
		{ id: 2, question: 'How does it work?', answer: 'It automatically detects when DOM elements are added, removed, or moved and applies smooth animations.', open: false },
		{ id: 3, question: 'Is it framework agnostic?', answer: 'Yes! AutoAnimate works with React, Vue, Svelte, Solid, Angular, and vanilla JavaScript.', open: false }
	];

	// Form validation example
	let form = {
		username: '',
		password: '',
		confirmPassword: ''
	};
	let errors: Record<string, string> = {};

	function addFruit() {
		if (newFruit.trim()) {
			fruits = [...fruits, newFruit.trim()];
			newFruit = '';
		}
	}

	function removeFruit(index: number) {
		fruits = fruits.filter((_, i) => i !== index);
	}

	function shuffleFruits() {
		fruits = [...fruits].sort(() => Math.random() - 0.5);
	}

	function addEvent() {
		const newEvent = {
			id: Date.now(),
			title: 'New Event',
			date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
			description: 'This is a new event added to the list.'
		};
		events = [newEvent, ...events];
	}

	function removeEvent(id: number) {
		events = events.filter(event => event.id !== id);
	}

	function toggleFaq(id: number) {
		faqs = faqs.map(faq => 
			faq.id === id ? { ...faq, open: !faq.open } : faq
		);
	}

	function validateForm() {
		errors = {};
		
		if (!form.username) {
			errors.username = 'Username is required';
		} else if (form.username.length < 3) {
			errors.username = 'Username must be at least 3 characters';
		}
		
		if (!form.password) {
			errors.password = 'Password is required';
		} else if (form.password.length < 6) {
			errors.password = 'Password must be at least 6 characters';
		}
		
		if (form.password !== form.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
		}
	}
</script>

<svelte:head>
	<title>AutoAnimate Demo - XTRACT</title>
	<meta name="description" content="Interactive AutoAnimate demonstrations with dynamic lists, cards, and form validation." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
	<!-- Page Header -->
	<div class="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-white/20 dark:border-white/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<div class="text-center">
				<h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
					AutoAnimate Demo
				</h1>
				<p class="text-gray-600 dark:text-gray-400 mt-2">
					Interactive demonstrations of smooth animations
				</p>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<!-- Dynamic List Example -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Dynamic List Example</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
					<h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Without AutoAnimate</h3>
					<div class="space-y-2">
						{#each fruits as fruit, index}
							<div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
								<span class="text-gray-700 dark:text-gray-300">{fruit}</span>
								<button 
									on:click={() => removeFruit(index)}
									class="text-red-500 hover:text-red-700 transition-colors"
								>
									<X class="w-4 h-4" />
								</button>
							</div>
						{/each}
					</div>
				</div>

				<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
					<h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">With AutoAnimate</h3>
					<div class="space-y-2" use:autoAnimate>
						{#each fruits as fruit, index}
							<div class="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
								<span class="text-gray-700 dark:text-gray-300">{fruit}</span>
								<button 
									on:click={() => removeFruit(index)}
									class="text-red-500 hover:text-red-700 transition-colors"
								>
									<X class="w-4 h-4" />
								</button>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="mt-6 flex gap-4 flex-wrap">
				<div class="flex gap-2">
					<input 
						bind:value={newFruit}
						placeholder="Add a fruit..."
						class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						on:keydown={(e) => e.key === 'Enter' && addFruit()}
					/>
					<button 
						on:click={addFruit}
						class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
					>
						<Plus class="w-4 h-4" />
						Add
					</button>
				</div>
				<button 
					on:click={shuffleFruits}
					class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
				>
					Shuffle
				</button>
			</div>
		</section>

		<!-- Cards Example -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Cards Example</h2>
			<div class="mb-6">
				<button 
					on:click={addEvent}
					class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
				>
					<Plus class="w-4 h-4" />
					Add Event
				</button>
			</div>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" use:autoAnimate>
				{#each events as event}
					<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
						<div class="flex items-start justify-between mb-4">
							<div>
								<h3 class="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
								<p class="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
							</div>
							<button 
								on:click={() => removeEvent(event.id)}
								class="text-red-500 hover:text-red-700 transition-colors"
							>
								<X class="w-4 h-4" />
							</button>
						</div>
						<p class="text-gray-600 dark:text-gray-300">{event.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- FAQ Accordion Example -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white">FAQ Accordion Example</h2>
			<div class="max-w-2xl mx-auto space-y-4" use:autoAnimate>
				{#each faqs as faq}
					<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
						<button 
							on:click={() => toggleFaq(faq.id)}
							class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-xl"
						>
							<span class="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
							<ArrowRight class="w-5 h-5 text-gray-500 transition-transform duration-300 {faq.open ? 'rotate-90' : ''}" />
						</button>
						{#if faq.open}
							<div class="px-6 pb-4">
								<p class="text-gray-600 dark:text-gray-300">{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Form Validation Example -->
		<section class="mb-16">
			<h2 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Form Validation Example</h2>
			<div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
				<form on:submit|preventDefault={validateForm} class="space-y-4">
					<div>
						<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Username
						</label>
						<input 
							bind:value={form.username}
							type="text"
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Password
						</label>
						<input 
							bind:value={form.password}
							type="password"
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
							Confirm Password
						</label>
						<input 
							bind:value={form.confirmPassword}
							type="password"
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<button 
						type="submit"
						class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
					>
						Submit
					</button>
				</form>

				<!-- Error Messages -->
				<div class="mt-4 space-y-2" use:autoAnimate>
					{#each Object.entries(errors) as [field, message]}
						<div class="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
							<X class="w-4 h-4 text-red-500" />
							<span class="text-red-700 dark:text-red-300 text-sm">{message}</span>
						</div>
					{/each}
				</div>

				<!-- Success Message -->
				{#if Object.keys(errors).length === 0 && (form.username || form.password || form.confirmPassword)}
					<div class="mt-4 flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg" use:autoAnimate>
						<Check class="w-4 h-4 text-green-500" />
						<span class="text-green-700 dark:text-green-300 text-sm">Form is valid!</span>
					</div>
				{/if}
			</div>
		</section>
	</div>
</div>

<style>
	/* Custom animations for better visual feedback */
	.card-enter {
		animation: slideIn 0.3s ease-out;
	}

	.card-exit {
		animation: slideOut 0.3s ease-in;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideOut {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-20px);
		}
	}
</style>

<Footer /> 