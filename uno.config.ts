import { defineConfig, presetUno } from "unocss";
import presetAnim from "unocss-preset-animations";
import extractSvelte from "@unocss/extractor-svelte";
import presetIcons from "@unocss/preset-icons";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
    presets: [
        presetWebFonts({
            provider: "fontsource",

            fonts: {
                ubuntu: "Ubuntu",
            },
        }),

        presetIcons(),
        presetAnim(),
        presetUno(),
    ],

    extractors: [extractSvelte()],

    rules: [],

    theme: {
        colors: {
            softwhite: "rgba(255, 255, 255, 0.2)",
        },
    },

    content: {
        filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],

        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                "(components|src)/**/*.{js,ts}",
            ],
        },
    },
});
