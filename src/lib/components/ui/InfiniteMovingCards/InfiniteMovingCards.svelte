<script lang="ts">
    import { cn } from "$lib/utils/cn";
    import { onMount } from "svelte";

    export let items: {
        quote: string;
        name: string;
        title: string;
        avatar?: string;
        rating?: number;
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
                containerRef.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    function getAvatarUrl(name: string): string {
        return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=1e293b&clothesColor=0891b2&skinColor=f3a952`;
    }
</script>

<div
    bind:this={containerRef}
    class={cn(
        "scroller relative z-20 py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
    )}
>
    <ul
        bind:this={scrollerRef}
        class={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
        )}
    >
        {#each items as item, idx (item.name)}
            <li
                class="relative w-[380px] max-w-full flex-shrink-0 rounded-2xl border border-slate-700/50 px-8 py-6 md:w-[420px] backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
                style="background: linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6));"
            >
                <!-- Gradient border effect -->
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <blockquote class="relative h-full">
                    <!-- Quote icon -->
                    <div class="absolute -top-2 -left-2 text-cyan-400/30 text-4xl font-serif">"</div>
                    
                    <div class="relative flex flex-col justify-between h-full z-10">
                        <p class="text-neutral-200 text-base leading-relaxed mb-6 italic">
                            {item.quote}
                        </p>
                        
                        <div class="flex items-center gap-4">
                            <!-- Avatar -->
                            <div class="relative">
                                <img
                                    src={item.avatar || getAvatarUrl(item.name)}
                                    alt={item.name}
                                    class="w-12 h-12 rounded-full border-2 border-cyan-400/30 bg-slate-800"
                                />
                                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-sky-500/20"></div>
                            </div>
                            
                            <!-- Name and title -->
                            <div class="flex flex-col">
                                <span class="text-neutral-100 font-semibold text-sm">
                                    {item.name}
                                </span>
                                <span class="text-cyan-400 text-xs font-medium">
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Variable star rating -->
                    <div class="absolute bottom-4 right-4 flex gap-1">
                        {#each Array(5) as _, i}
                            <svg class="w-4 h-4 {i < (item.rating || 5) ? 'text-yellow-400' : 'text-gray-600'} fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        {/each}
                    </div>
                </blockquote>
            </li>
        {/each}
    </ul>
</div>

<style>
    @keyframes scroll {
        to {
            transform: translate(calc(-50% - 0.75rem));
        }
    }

    .animate-scroll {
        animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
    }

    .scroller {
        max-width: 100vw;
    }
</style>
