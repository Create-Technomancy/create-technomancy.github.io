import uno from "@unocss/postcss";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";

/** @type {import("postcss-load-config").Config} */
const config = {
    plugins: [nested(), uno(), autoprefixer()],
};

export default config;
