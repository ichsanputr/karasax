<script lang="ts">
    import { cn } from "$lib/utils/cn";
    import { onMount } from "svelte";

    export let items: {
        id: number;
        title: string;
        excerpt: string;
        author: string;
        avatar: string;
        date: string;
        category: string;
        readTime: string;
        image: string;
        featured?: boolean;
    }[];
    export let direction: "left" | "right" | undefined = "left";
    export let speed: "fast" | "normal" | "slow" | undefined = "fast";
    export let pauseOnHover: boolean | undefined = true;
    export let className: string | undefined = undefined;

    let containerRef: HTMLDivElement;
    let scrollerRef: HTMLUListElement;

    onMount(() => {
        addAnimation();
    });

    let start = false;

    function addAnimation() {
        if (containerRef && scrollerRef) {
            const scrollerContent = Array.from(scrollerRef.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef) {
                    scrollerRef.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            start = true;
        }
    }
    const getDirection = () => {
        if (containerRef) {
            if (direction === "left") {
                containerRef.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef) {
            if (speed === "fast") {
                containerRef.style.setProperty("--animation-duration", "8s");
            } else if (speed === "normal") {
                containerRef.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.style.setProperty("--animation-duration", "80s");
            }
        }
    };
</script>

<div
    bind:this={containerRef}
    class={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
    )}
>
    <ul
        bind:this={scrollerRef}
        class={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
            start && "animate-scroll",
        )}
        on:mouseenter={() => {
            if (pauseOnHover && scrollerRef) {
                scrollerRef.style.animationPlayState = 'paused';
            }
        }}
        on:mouseleave={() => {
            if (pauseOnHover && scrollerRef) {
                scrollerRef.style.animationPlayState = 'running';
            }
        }}
    >
        {#each items as post, idx (post.id)}
            <li class="relative w-[400px] max-w-full flex-shrink-0 md:w-[450px]">
                <!-- Background Gradient Container -->
                <div class="p-[1px] rounded-xl bg-gradient-to-r from-cyan-500/50 via-sky-500/50 to-blue-500/50 group hover:from-cyan-400/60 hover:via-sky-400/60 hover:to-blue-400/60 transition-all duration-300">
                    <article class="bg-slate-900/80 rounded-xl overflow-hidden border border-slate-700/50 backdrop-blur-sm h-full group-hover:bg-slate-900/90 transition-all duration-300">
                        <div class="relative overflow-hidden">
                            <img src={post.image} alt={post.title} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div class="absolute top-4 left-4">
                                <span class="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/90 text-white border border-cyan-400/50 backdrop-blur-sm">
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
                            <h3 class="text-lg font-bold mb-3 text-neutral-200 group-hover:text-cyan-400 transition-colors leading-tight line-clamp-2">
                                <a href="/blog/{post.id}">{post.title}</a>
                            </h3>
                            <p class="text-neutral-400 mb-6 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <img 
                                        src={post.avatar} 
                                        alt={post.author}
                                        class="w-10 h-10 rounded-full border border-cyan-500/30"
                                    />
                                    <div>
                                        <p class="text-sm font-medium text-neutral-300">{post.author}</p>
                                        <p class="text-xs text-neutral-500">Author</p>
                                    </div>
                                </div>
                                <a href="/blog/{post.id}" class="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group">
                                    Read more 
                                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    @keyframes scroll {
        to {
            transform: translate(-20%);
        }
    }

    .animate-scroll {
        animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
    }

    .scroller {
        max-width: 100vw;
    }

    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
