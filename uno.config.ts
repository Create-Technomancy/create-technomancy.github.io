import { defineConfig, presetUno } from "unocss";
import presetAnim from "unocss-preset-animations";
import extractSvelte from "@unocss/extractor-svelte";
import presetIcons from "@unocss/preset-icons";
import presetWebFonts from "@unocss/preset-web-fonts";
// import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";

export default defineConfig({
    presets: [
        presetWebFonts({
            provider: "fontsource",

            fonts: {
                ubuntu: "Ubuntu",
            },

            // processors: createLocalFontProcessor({
            //     cacheDir: "node_modules/.cache/unocss/fonts",
            //     fontAssetsDir: "public/assets/fonts",
            //     fontServeBaseUrl: "/assets/fonts",
            // }),
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
