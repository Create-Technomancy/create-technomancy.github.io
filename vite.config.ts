import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { starlightSkinPlugin } from "./vite/starlight-skins";
import uno from "@unocss/svelte-scoped/vite";

export default defineConfig({
    clearScreen: false,

    plugins: [
        uno({
            injectReset: "@unocss/reset/normalize.css",
        }),
        starlightSkinPlugin(),
        sveltekit(),
    ],

    build: {
        minify: "terser",
        cssMinify: "lightningcss",
    },

    server: process.env.REDSTONE_IS_DUMB
        ? {
              port: 4000,
              strictPort: true,

              hmr: {
                  port: 4000,
                  protocol: "wss",
                  clientPort: 443,
              },
          }
        : {},
});
