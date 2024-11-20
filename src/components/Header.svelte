<script lang="ts">
    import logo from "../assets/logo.gif";
</script>

<div
    class="w-full fixed z-10 flex flex-row items-center justify-between bg-dark b-b-solid b-softwhite b-b-1"
>
    <div class="flex flex-row items-center justify-start">
        <a
            class="p-2 ml-2 mr-4 flex flex-row items-center justify-start text-white font-ubuntu decoration-none"
            href="/"
        >
            <img src={logo} alt="Technomancy Logo" class="h-12 md:mr-4" />
            <span class="text-xl md:block hidden">Create Technomancy</span>
        </a>

        <a
            href="/blogs"
            class="text-lg text-white b-b-1 b-b-solid b-softwhite font-ubuntu decoration-none hover:b-white transition-all p-2 mr-4"
            >Blogs</a
        >

        <a
            href="/team"
            class="text-lg text-white b-b-1 b-b-solid b-softwhite font-ubuntu decoration-none hover:b-white transition-all p-2 mr-4"
            >Our Team</a
        >
    </div>

    <div class="flex flex-row items-center justify-start">
        <a
            href="https://github.com/Create-Technomancy"
            target="_blank"
            aria-label="GitHub"
            class="text-lg text-white b-b-1 b-b-solid b-softwhite font-ubuntu decoration-none hover:b-white transition-all p-2 mr-4"
            ><div class="i-bytesize-github w-6"></div></a
        >

        <a
            href="https://discord.gg/Kwb5sNGy2T"
            target="_blank"
            aria-label="Discord"
            class="text-lg text-blue b-b-1 b-b-solid b-softwhite font-ubuntu decoration-none hover:b-white transition-all p-2 mr-4"
            ><div class="i-logos-discord-icon w-6"></div></a
        >

        <a
            href="https://www.youtube.com/@createtechnomancy"
            target="_blank"
            aria-label="YouTube"
            class="text-lg text-red b-b-1 b-b-solid b-softwhite font-ubuntu decoration-none hover:b-white transition-all p-2 mr-4"
            ><div class="i-logos-youtube-icon w-6"></div></a
        >
    </div>
</div>
