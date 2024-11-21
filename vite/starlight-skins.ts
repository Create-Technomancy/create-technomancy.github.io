import path from "path";
import fs from "fs";
import crypto from "crypto";
import type { Plugin } from "vite";

export const PNG_HEADER = [137, 80, 78, 71, 13, 10, 26, 10];

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

export const compareArrays = <T>(arr: T[], other: T[]) => {
    if (arr.length != other.length) return false;

    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        const b = other[i];

        if (a != b) {
            return false;
        }
    }

    return true;
};

export const starlightSkinPlugin = (): Plugin => {
    const prefix = "starlight-skin:";
    const base = path.dirname(import.meta.dirname);
    const cacheDir = path.join(base, "node_modules", ".cache", "vite", "starlight-skin-api");
    const srcDir = path.join(base, "src", "assets");
    const outputDir = path.join(srcDir, "starlight-skin-cache");

    if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const downloadSkin = async (username: string, renderType: string, cropping: string) => {
        const filePath = path.join(cacheDir, username, renderType, cropping + ".png");

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath).buffer as ArrayBuffer;
            const head = [...new Uint8Array(data.slice(0, 8))];

            if (compareArrays(head, PNG_HEADER)) {
                return data;
            } else {
                console.log(`Image was not a PNG file: ${filePath}`);
                console.log(`Expected [${PNG_HEADER}], got [${head}]`);
            }
        }

        const data = await fetchSkin(username, renderType as any, cropping);

        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
        }

        fs.writeFileSync(filePath, new Uint8Array(data));

        return data;
    };

    return {
        name: "starlight-skin-api",

        configResolved(config) {
            if (config.command == "build") {
                if (fs.existsSync(cacheDir)) {
                    fs.rmSync(cacheDir, { recursive: true });
                }

                fs.mkdirSync(cacheDir, { recursive: true });
            }
        },

        async resolveId(id) {
            if (id.startsWith(prefix)) {
                const raw = id.slice(prefix.length);
                const [username, renderType, cropping] = raw.split("/");

                if (!username || !renderType || !cropping) return;

                const data = await downloadSkin(username, renderType, cropping);
                const md5 = crypto.createHash("md5").update(Buffer.from(data)).digest("hex");
                const file = path.join(outputDir, md5 + ".png");

                if (!fs.existsSync(file)) fs.writeFileSync(file, Buffer.from(data));

                return file;
            }
        },
    };
};
