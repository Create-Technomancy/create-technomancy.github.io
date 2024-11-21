<script lang="ts">
    import "../app.pcss";
    import logo from "../assets/logo.gif";
    import background from "../assets/background.png";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    const { children } = $props();
</script>

<svelte:head>
    <link rel="preload" as="image" href={logo} />
    <link rel="preload" as="image" href={background} />

    <link rel="prefetch" as="image" href={logo} />
    <link rel="prefetch" as="image" href={background} />
</svelte:head>

<div class="w-full h-full p-0 m-0 b-0 flex flex-col items-start justify-start">
    <Header />
    {@render children()}
    <Footer />
</div>
