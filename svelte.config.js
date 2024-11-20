import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import uno from "@unocss/svelte-scoped/preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: [vitePreprocess(), uno()],

    kit: {
        adapter: adapter(),

        alias: {
            "@/*": "./path/to/lib/*",
        },
    },

    extensions: [".svelte"],
};

export default config;
