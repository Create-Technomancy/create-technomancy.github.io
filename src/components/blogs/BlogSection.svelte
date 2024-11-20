<script lang="ts">
    import { applyOxfordComma } from "$lib";

    interface Props {
        title: string;
        authors: string[];
    }

    const { title, authors }: Props = $props();
</script>

<hr />
<h2 class="mb-0">{title}</h2>
<p class="italic mt-0">Written by <b>{applyOxfordComma(authors)}</b></p>
<hr />
