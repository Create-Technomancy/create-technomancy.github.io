<script lang="ts">
    import { applyOxfordComma } from "$lib";
    import moment from "moment";

    interface Props {
        title: string;
        date: Date;
        authors: string[];
    }

    const { title, date, authors }: Props = $props();
    const formattedDate = $derived(moment(date).format("MMMM Do, YYYY"));
</script>

<h1 class="my-0">{title}</h1>
<p class="italic my-0">Posted <b>{formattedDate}</b></p>
<p class="italic mt-0">Written by <b>{applyOxfordComma(authors)}</b></p>
