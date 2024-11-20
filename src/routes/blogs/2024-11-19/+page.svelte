<script lang="ts">
    import moment from "moment";
    import BlogHead from "../../../components/blogs/BlogHead.svelte";
    import BlogSection from "../../../components/blogs/BlogSection.svelte";

    const blogInfo = {
        title: "We are so back!",
        date: moment("2024-11-19").toDate(),
        authors: ["Chazbomb1", "VII", "RedstoneWizard08"],
    };
</script>

<svelte:head>
    <title>We are so back | Create Technomancy</title>
</svelte:head>

<div class="w-full min-h-screen flex flex-col items-center justify-center bg-img-technomancy mt-16">
    <article class="font-ubuntu md:w-[50%] w-[75%] bg-slate-7 p-8 my-8 rounded-lg blog-post">
        <BlogHead {...blogInfo} />

        <BlogSection title="The Prelude" authors={["RedstoneWizard08"]} />

        <h4>What's up?</h4>

        <p>
            Hi everyone! I'm RedstoneWizard08, the second-newest member of the Technomancy team at
            the time of writing. I've been leading the Architectury port of the mod and designing
            this website. Now you may be wondering, what do you mean, "we are so back?"
        </p>

        <h4>Are you late?</h4>

        <p>
            Yes, I am definitely late. I've been working on this website for... not that long... but
            I didn't want to make 3 posts, so I just copied the text from our last announcement
            here, and added some context and other stuff. Sorry for the long wait for a proper
            website!
        </p>

        <h4>We're not dead anymore</h4>

        <p>
            A long time ago (in this very galaxy), Technomancy was abandoned because of it's tech
            debt and original poor planning and execution (as well as some other reasons I'm not
            going to get into here). Unfortunately, because of all of that, Chaz and VII decided to
            call it quits, and stop working on it. A long time later, Chaz decided to revive the
            project and invited a few more people to work on it, and here we are. We've been working
            in the shadows (ooh, spooky!) this whole time. <i
                >And you all probably expected it because Chaz has been leaking stuff over on the
                Aeronautics discord.</i
            >
        </p>

        <p>
            You can check out the announcement video here (written by Chaz, edited & directed by the
            wonderful ModogTheDev, and with art made by MilkyFur):
        </p>

        <iframe
            class="w-full h-md"
            src="https://www.youtube.com/embed/pEE2mvc81Yg"
            title="WE ARE SO BACK"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>

        <BlogSection title="Technomancy Update" authors={["Chazbomb1", "VII"]} />

        <h4>Hey everyone!</h4>

        <p>
            We're thrilled to share what we've been working on in Create Technomancy. This update
            lays the groundwork for the core features of the mod, which cmobine themes of magic,
            technology, and light to bring fresh ways to interact with the world. Whether it's
            crafting, processing, or building, there's something for everyone to play with. Let's
            take a look at what's new!
        </p>

        <h4>Polishing the Process</h4>

        <p>
            Mirrors and lenses are an essential part of the magical and technological systems we're
            introducing, and the journey begins with mirror polishing. This process will let players
            refine raw materials into smooth, reflective surfaces, forming the base for more
            advanced systems down the line.
        </p>

        <h4>Magic Through Light</h4>

        <p>
            Our magic system is beginning to take shape, centered around the concept of light
            manipulation through engraved lenses. Each lens holds a unique magical property, and by
            stacking them, players can create magical beams of light that interact with the world.
            Through all of the possible combinations of effects, modifiers, and triggers, this
            system invites creativity in how you build your spells.
        </p>

        <h4>Light Logic - The First Steps</h4>

        <p>
            To complement our magical systems, we're developing a set of tools designed for building
            smart, light-responsive setups. The Detector Lens is the first piece of this system,
            allowing players to sense changes in light beams and integrate this functionality into
            their creations. Over time, we'll be adding more logic components to enable increasingly
            complex and innovative builds.
        </p>

        <h4>A Focus on Visual Quality</h4>

        <p>
            From textures to effects, we're committed to delivering visuals that elevate the
            experience. Whether you're polishing mirrors or channeling beams of magical light, every
            element is designed with care to immerse players in the unique experience. We want every
            detail to feel polished, purposeful, and inspiring.
        </p>

        <p>
            This update is just the beginning, and there's so much more to come. As we continue
            developing these systems, we're looking forward to seeing how you'll use them to create,
            automate, and experiment. Stay tuned for future updates as we expand this magical
            journey!
        </p>

        <BlogSection title="Ready when it's ready" authors={["RedstoneWizard08"]} />

        <h4>What does that mean?</h4>

        <p>
            Technomancy is going to be ready when it's ready. That means no releases, no paid early
            access, nothing of the sort. We'll release the mod to everyone at the same time when we
            feel it's in a good enough state to release. That also means it might be a while. None
            of us can predict when the mod will be done or released. All we can do is keep working
            on it, and trust us, we're working <i>hard</i>.
        </p>

        <h4>Did you steal that philosophy from Aeronautics?</h4>

        <p>Yes, shamelessly.</p>

        <h4>How will you know it's still being worked on?</h4>

        <p>
            <b><i>PERIODICALLY</i></b>, we will be releasing teasers, images, and maybe videos.
            We'll try to keep all of you up-to-date on the progress of the mod, without spoiling any
            content of course.
        </p>

        <h4>What can you do to help?</h4>

        <p>
            What all of you can do to help is just be friendly. Don't bother us too much, and just
            be generally friendly and nice. You can join our
            <a href="https://discord.gg/Kwb5sNGy2T">Discord</a>
            to stay up-to-date, and subscribe to our
            <a href="https://www.youtube.com/@createtechnomancy">YouTube channel</a>
            for any potential video releases. We're super excited to share what we have been doing and
            to see what you all create with it! See you all in the next post!
        </p>
    </article>
</div>
