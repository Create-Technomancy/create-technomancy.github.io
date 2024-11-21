<script lang="ts">
    import { fly } from "svelte/transition";

    const { avatar, name, github }: { avatar: string; name: string; github?: string } = $props();
    const animDelay = Math.random() * 200;
</script>

{#if github}
    <a
        in:fly={{ x: 20, delay: animDelay }}
        href="https://github.com/{github}"
        target="_blank"
        class="flex flex-col items-center justify-start bg-slate-9 py-4 w-full rounded-lg transition-all hover:scale-110 hover:bg-slate-8 cursor-pointer decoration-none color-white"
    >
        <img class="w-60 rounded-lg h-60 object-cover object-top" src={avatar} alt={name} />
        <p class="text-lg font-bold mb-0">{name}</p>
        <div class="flex flex-row items-center justify-center mt-0">
            <div class="i-bytesize-github fill-white mr-2"></div>
            <p class="color-blue-3 m-0">
                @{github}
            </p>
        </div>
    </a>
{:else}
    <div
        in:fly={{ x: 20, delay: animDelay }}
        class="w-full flex flex-col items-center justify-start bg-slate-9 py-4 rounded-lg decoration-none color-white"
    >
        <img class="w-60 rounded-lg h-60 object-cover object-top" src={avatar} alt={name} />
        <p class="text-lg font-bold mb-0">{name}</p>
    </div>
{/if}
