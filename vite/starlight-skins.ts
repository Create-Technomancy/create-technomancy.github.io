import path from "path";
import fs from "fs";
import type { Plugin } from "vite";

export type AllRenders = "full" | "bust" | "face";

export interface RenderTypes {
    default: AllRenders;
    marching: AllRenders;
    walking: AllRenders;
    crouching: AllRenders;
    crossed: AllRenders;
    criss_cross: AllRenders;
    ultimate: AllRenders;
    isometric: AllRenders | "head";
    head: "full";
    custom: AllRenders;
    cheering: AllRenders;
    relaxing: AllRenders;
    trudging: AllRenders;
    cowering: AllRenders;
    pointing: AllRenders;
    lunging: AllRenders;
    dungeons: AllRenders;
    facepalm: AllRenders;
    sleeping: "full" | "bust";
    dead: AllRenders;
    archer: AllRenders;
    kicking: AllRenders;
    mojavatar: "full" | "bust";
    reading: AllRenders;
    high_ground: AllRenders;
    bitzel: AllRenders;
    pixel: AllRenders;
    ornament: "full";
    skin: "default" | "processed" | "barebones";
    profile: AllRenders;
}

export const fetchSkin = async <R extends keyof RenderTypes>(
    username: string,
    renderType: R,
    cropping: RenderTypes[R],
) => {
    const url = `https://starlightskins.lunareclipse.studio/render/${renderType}/${username}/${cropping}`;

    return await (await fetch(url)).arrayBuffer();
};

export const starlightSkinPlugin = (): Plugin => {
    const prefix = "starlight-skin:";
    const base = path.dirname(import.meta.dirname);
    const cacheDir = path.join(base, "node_modules", ".cache", "vite", "starlight-skin-api");

    if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
    }

    const downloadSkin = async (username: string, renderType: string, cropping: string) => {
        const filePath = path.join(cacheDir, username, renderType, cropping + ".png");

        if (fs.existsSync(filePath)) return fs.readFileSync(filePath).buffer as ArrayBuffer;

        const data = await fetchSkin(username, renderType as any, cropping);

        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
        }

        fs.writeFileSync(filePath, new Uint8Array(data));

        return data;
    };

    return {
        name: "starlight-skin-api",

        resolveId(id) {
            if (id.startsWith(prefix)) return id;
        },

        async load(id) {
            if (id.startsWith(prefix)) {
                const raw = id.slice(prefix.length);
                const [username, renderType, cropping] = raw.split("/");

                if (!username || !renderType || !cropping) return;

                const data = await downloadSkin(username, renderType, cropping);

                return `export default \`data:image/png;base64,${Buffer.from(data).toString("base64")}\``;
            }
        },
    };
};