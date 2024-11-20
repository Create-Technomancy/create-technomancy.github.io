import fs from "fs";

import mdoc, {
    type Schema as TagSchema,
    type CustomAttributeTypeInterface,
    type Config,
    type ValidationError,
    type Scalar,
    type Schema as NodeSchema,
    Tag,
    nodes,
} from "@markdoc/markdoc";

import { applyOxfordComma } from "../../../lib";

const data = fs.readFileSync("post.md", "utf-8");

export class StringArray implements CustomAttributeTypeInterface {
    validate(value: any, config: Config, name: string): ValidationError[] {
        if (!Array.isArray(value)) {
            return [
                {
                    id: "invalid-stringarray-type",
                    level: "critical",
                    message: "Must be an array!",
                },
            ];
        }

        if (value.length <= 0) {
            return [
                {
                    id: "invalid-stringarray-array-length",
                    level: "critical",
                    message: "Must have one or more elements!",
                },
            ];
        }

        if (typeof value[0] != "string") {
            return [
                {
                    id: "invalid-stringarray-array-type",
                    level: "critical",
                    message: "Must be an array of strings!",
                },
            ];
        }

        return [];
    }

    transform(value: any, config: Config): Scalar {
        return value as string[];
    }
}

export const section: TagSchema = {
    render: "blog-section",
    attributes: {
        title: {
            type: String,
            required: true,
            errorLevel: "critical",
        },

        authors: {
            type: StringArray,
            required: true,
            errorLevel: "critical",
        },
    },
};

const ast = mdoc.parse(data);

for (const node of ast.walk()) {
    if (node.tag == "section") {
        const { title, authors } = node.attributes;

        if (!title || !authors)
            throw new Error(
                `Missing title or authors attribute on section node!
At: ${node.location?.file}:${node.location?.start.line}`,
            );
        
        node.tag = "div";
        node.attributes.class = "__markdoc-blog-section";
        
        delete node.attributes.title;
        delete node.attributes.authors;
        
        node.annotations = [];

        console.log(node);

        // new Tag("div", {
        //     attributes: {
        //         class: "__markdoc-blog-section",
        //     },
        //     children: [
        //         new Tag("hr"),
        //         new Tag("h2", {
        //             children: [node.attributes.title],
        //         }),
        //         new Tag("p", {
        //             children: ["Written by", new Tag("b", {
        //                 children: [applyOxfordComma(node.attributes.authors)],
        //             })],
        //         }),
        //         new Tag("hr"),
        //     ],
        // })
    }
}

const transformed = mdoc.transform(ast, { tags: { section } });
const html = mdoc.renderers.html(transformed);

console.log(html);
