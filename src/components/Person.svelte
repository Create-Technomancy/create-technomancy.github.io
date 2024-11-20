<script lang="ts">
    import { inview, type Options, type ObserverEventDetails } from "svelte-inview";
    import { fly } from "svelte/transition";

    const { avatar, name, github }: { avatar: string; name: string; github?: string } = $props();

    let isInView = $state(false);
    const animDelay = Math.random() * 200;

    const inviewOpts: Options = {
        unobserveOnEnter: true,
        rootMargin: "-20%",
    };

    const inviewChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
        isInView = detail.inView;
    };
</script>

{#if github}
    <div
        class="flex flex-col items-center justify-center"
        use:inview={inviewOpts}
        oninview_change={inviewChange}
    >
        {#if isInView}
            <a
                in:fly={{ x: 20, delay: animDelay }}
                href="https://github.com/{github}"
                target="_blank"
                class="flex flex-col items-center justify-start bg-slate-9 py-4 w-full h-full rounded-lg transition-all hover:scale-110 hover:bg-slate-8 cursor-pointer decoration-none color-white"
            >
                <img class="w-60 rounded-lg h-60 object-cover object-top" src={avatar} alt={name} />
                <p class="text-lg font-bold mb-0">{name}</p>
                <p class="mt-0 color-blue-3">@{github}</p>
            </a>
        {:else}
            <div class="w-full h-full"></div>
        {/if}
    </div>
{:else}
    <div
        class="flex flex-col items-center justify-center"
        use:inview={inviewOpts}
        oninview_change={inviewChange}
    >
        {#if isInView}
            <div
                in:fly={{ x: 20, delay: animDelay }}
                class="w-full h-full flex flex-col items-center justify-start bg-slate-9 py-4 rounded-lg decoration-none color-white"
            >
                <img class="w-60 rounded-lg h-60 object-cover object-top" src={avatar} alt={name} />
                <p class="text-lg font-bold mb-0">{name}</p>
            </div>
        {:else}
            <div class="w-full h-full"></div>
        {/if}
    </div>
{/if}
