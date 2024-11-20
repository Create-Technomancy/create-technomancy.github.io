<script lang="ts">
    import "../app.pcss";
    import Header from "../components/Header.svelte";

    const { children } = $props();
</script>

<div class="w-full h-full p-0 m-0 b-0 flex flex-col items-start justify-start">
    <Header />
    {@render children()}
</div>
