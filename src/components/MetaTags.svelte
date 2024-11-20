<script lang="ts">
    import logo from "../assets/logo.gif";

    const { title, desc }: { title: string; desc: string } = $props();
</script>

<meta name="description" content={desc} />

<meta property="og:title" content={title} />
<meta property="og:type" content="website" />
<meta property="og:image" content={logo} />

<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={desc} />
<meta name="twitter:image" content={logo} />
