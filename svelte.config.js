import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import uno from "@unocss/svelte-scoped/preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex(), uno()],

    kit: {
        adapter: adapter(),

        alias: {
            "@/*": "./path/to/lib/*",
        },
    },

    extensions: [".svelte", ".svx"],
};

export default config;
