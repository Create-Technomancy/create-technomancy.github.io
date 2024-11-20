<script lang="ts">
    import { chaz, /* cake, */ modog, ryan, seven, rdh, casey, redstone, karl, luna, kali, milky, max } from "$lib/team";
    import Person from "../../components/Person.svelte";

    const team = [
        { name: "Chazbomb1", avatar: chaz, github: "Chazbomb1" },
        // { name: "Cake", avatar: cake, github: "CakeGit" },
        { name: "ModogTheDev", avatar: modog, github: "Modog500000" },
        { name: "RyanHCode", avatar: ryan, github: "RyanHCode" },
        { name: "VII", avatar: seven, github: "The7seVen" },
        { name: "rdh", avatar: rdh, github: "rhysdh540" },
        { name: "Casey", avatar: casey }, // TODO: Find github
        { name: "RedstoneWizard08", avatar: redstone, github: "RedstoneWizard08" },
        // TODO: New member
    ];

    const contributors = [
        { name: "KarlBH", avatar: karl, github: "jam-jar-binks" },
        { name: "LopyLuna", avatar: luna, github: "LopyLuna" },
        { name: "Kalibunni", avatar: kali }, // github is Kalibunni maybe, need to verify
        { name: "MilkyFur", avatar: milky, github: "MilkyFur" },
        { name: "Maxigineer", avatar: max }, // TODO: Find github
    ];
</script>

<svelte:head>
    <title>Our Team | Create Technomancy</title>
</svelte:head>

<div class="w-full min-h-screen flex flex-col items-center justify-start bg-img-technomancy">
    <div class="w-[75%] bg-slate-6 font-ubuntu p-8 mt-24 rounded-lg">
        <h1 class="mt-0">Our Team</h1>

        <div class="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4">
            {#each team as { name, avatar, github }}
                <Person {name} {avatar} {github} />
            {/each}
        </div>
    </div>

    <div class="w-[75%] bg-slate-6 font-ubuntu p-8 mb-8 mt-8 rounded-lg">
        <h1 class="mt-0">Contributors</h1>

        <div class="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4">
            {#each contributors as { name, avatar, github }}
                <Person {name} {avatar} {github} />
            {/each}
        </div>
    </div>
</div>
