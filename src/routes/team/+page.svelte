<script lang="ts">
    import {
        chaz,
        cake,
        modog,
        ryan,
        seven,
        rdh,
        casey,
        redstone,
        karl,
        luna,
        kali,
        milky,
        max,
        robotix,
        emma,
        happyg,
        llama,
        // kaicoyote,
        // shblock,
        spydnel,
        mango,
    } from "$lib/team";

    import MetaTags from "../../components/MetaTags.svelte";
    import Person from "../../components/Person.svelte";

    const team = [
        { name: "Chazbomb1", avatar: chaz, github: "Chazbomb1" },
        { name: "Cake", avatar: cake, github: "CakeGit" },
        { name: "ModogTheDev", avatar: modog, github: "Modog500000" },
        { name: "RyanHCode", avatar: ryan, github: "RyanHCode" },
        { name: "VII", avatar: seven, github: "The7seVen" },
        { name: "rdh", avatar: rdh, github: "rhysdh540" },
        { name: "Casey", avatar: casey }, // github?
        { name: "RedstoneWizard08", avatar: redstone, github: "RedstoneWizard08" },
        { name: "KarlBH", avatar: karl, github: "jam-jar-binks" },
        { name: "HappyG", avatar: happyg, github: "happygill" },
    ];

    const contributors = [
        { name: "LopyLuna", avatar: luna, github: "LopyLuna" },
        { name: "Kalibunni", avatar: kali, github: "Kalibunni" },
        { name: "MilkyFur", avatar: milky, github: "MilkyFur" },
        { name: "Maxigineer", avatar: max, github: "minMaximilian" },
        { name: "Robotix", avatar: robotix, github: "realRobotix" },
        { name: "EmmaTheMartian", avatar: emma, github: "EmmaTheMartian" },
        { name: "LlamaMan", avatar: llama, github: "LlamaMan122" },
        // { name: "KaiCoyote", avatar: kai, github: "KaiCoyote" },
        // { name: "shBLOCK", avatar: shblock, github: "shBLOCK" },
        { name: "Spydnel", avatar: spydnel, github: "Spydnel" },
        { name: "DrMangoTea", avatar: mango, github: "DrMango14" },
    ];
</script>

<svelte:head>
    <title>Our Team | Create Technomancy</title>
    <MetaTags title="Our Team" desc="A list of the incredible members of our team!" />

    {#each [...team, ...contributors] as people}
        <link rel="preload" as="image" href={people.avatar} />
        <link rel="prefetch" as="image" href={people.avatar} />
    {/each}
</svelte:head>

<div class="w-full min-h-screen flex flex-col items-center justify-start bg-img-technomancy">
    <div class="w-[75%] bg-slate-7 font-ubuntu p-8 mt-24 rounded-lg">
        <h1 class="mt-0">Our Team</h1>

        <div class="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4">
            {#each team as { name, avatar, github }}
                <Person {name} {avatar} {github} />
            {/each}
        </div>
    </div>

    <div class="w-[75%] bg-slate-6 font-ubuntu p-8 mb-16 mt-8 rounded-lg">
        <h1 class="mt-0">Artists & Contributors</h1>

        <div class="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-4">
            {#each contributors as { name, avatar, github }}
                <Person {name} {avatar} {github} />
            {/each}
        </div>
    </div>
</div>
