<script lang="ts">
    import MetaTags from "../../components/MetaTags.svelte";
</script>

<svelte:head>
    <title>Blog Posts | Create Technomancy</title>

    <MetaTags
        title="Blog Posts"
        desc="Blog posts, sneak peeks, and status updates for Create Technomancy!"
    />
</svelte:head>

<div class="w-full min-h-screen flex flex-col items-center justify-start bg-img-technomancy">
    <div
        class="w-[75%] bg-slate-7 font-ubuntu p-8 rounded-lg flex flex-col items-start justify-start mt-24 mb-8"
    >
        <h1 class="mt-0">Blog Posts</h1>

        <a
            href="/blogs/2024-11-19"
            class="bg-slate-8 w-[calc(100%_-_2rem)] rounded-lg hover:bg-slate-9 transition-all decoration-none color-white p-4"
        >
            <p class="m-0 text-lg">We are so back!</p>
            <p class="m-0 text-white text-opacity-70 italic">Posted November 19th, 2024</p>
            <p class="m-0 text-white text-opacity-70 italic">
                Written by Chazbomb1, VII, and RedstoneWizard08
            </p>
        </a>
    </div>
</div>
