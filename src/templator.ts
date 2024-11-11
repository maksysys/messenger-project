function decodeHtmlEntities(str: string): string {
    return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

class Templator {
    private TEMPLATE_REGEXP = /\{\{(.*?)\}\}/g;
    private EACH_BLOCK_REGEXP = /<<#each\s+([^\s>]+)>>([\s\S]*?)<<#endeach>>/g;
    private CONDITIONAL_BLOCK_REGEXP =
        /<<#if\s+([^\s>]+)>>([\s\S]*?)<<#endif>>/g;
    private _template: string;
    private static loadedScripts = new Set<string>();
    private static loadedLinks = new Set<string>();

    constructor(template: string) {
        this._template = template;
    }

    compile(ctx: Record<string, any>): string {
        console.log("Starting compile with context:", ctx);

        const decodedHtml = decodeHtmlEntities(this._template);

        const blocksParsedTemplate = this._parseBlocks(decodedHtml, ctx);

        const conditionalsParsedTemplate = this._parseConditionals(
            blocksParsedTemplate,
            ctx
        );

        const compiledTemplate = this._compileTemplate(
            conditionalsParsedTemplate,
            ctx
        );

        return this._executeScripts(compiledTemplate);
    }

    private _parseBlocks(template: string, ctx: Record<string, any>): string {
        console.log("Parsing blocks...");
        let segments: string[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = this.EACH_BLOCK_REGEXP.exec(template)) !== null) {
            console.log("Found each block for:", match[1]);

            if (match.index > lastIndex) {
                segments.push(template.slice(lastIndex, match.index));
            }

            const itemsPath = match[1].trim();
            const items = ctx[itemsPath] || [];
            const blockContent = match[2];

            items.forEach((item: Record<string, any>) => {
                const itemCtx = { ...ctx, ...item };
                const compiledBlock = this._parseConditionals(
                    this._compileTemplate(blockContent, itemCtx),
                    itemCtx
                );

                segments.push(compiledBlock);
            });

            lastIndex = this.EACH_BLOCK_REGEXP.lastIndex;
        }

        if (lastIndex < template.length) {
            segments.push(template.slice(lastIndex));
        }

        return segments.join("");
    }

    private _parseConditionals(
        template: string,
        ctx: Record<string, any>
    ): string {
        console.log("Parsing conditionals...");
        let segments: string[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while (
            (match = this.CONDITIONAL_BLOCK_REGEXP.exec(template)) !== null
        ) {
            console.log("Found conditional block for:", match[1]);

            if (match.index > lastIndex) {
                segments.push(template.slice(lastIndex, match.index));
            }

            let conditionPath = match[1].trim();
            let isNegation = false;

            if (conditionPath.startsWith("!")) {
                isNegation = true;
                conditionPath = conditionPath.slice(1).trim();
            }

            const conditionValue = this._getValueFromPath(ctx, conditionPath);
            const finalCondition = isNegation
                ? !conditionValue
                : conditionValue;

            console.log(
                `Condition ${conditionPath} (negated: ${isNegation}) in context:`,
                finalCondition
            );

            if (finalCondition) {
                segments.push(match[2]);
            } else {
                console.log(`Condition ${conditionPath} evaluated as false`);
            }

            lastIndex = this.CONDITIONAL_BLOCK_REGEXP.lastIndex;
        }

        if (lastIndex < template.length) {
            segments.push(template.slice(lastIndex));
        }

        console.log("After parsing conditionals:", segments.join(""));
        return segments.join("");
    }

    private _getValueFromPath(ctx: Record<string, any>, path: string): any {
        const result = path
            .split(".")
            .reduce((acc, part) => acc && acc[part], ctx);
        console.log("getting value for path", path, ":", result);
        return result;
    }

    private _compileTemplate(
        template: string,
        ctx: Record<string, any>
    ): string {
        console.log("Compiling template...");

        const segments = this._parseTemplate(template);
        let compiledTemplate = "";

        segments.forEach((segment) => {
            if (
                typeof segment === "string" &&
                segment.startsWith("{{") &&
                segment.endsWith("}}")
            ) {
                const tmplValue = segment.slice(2, -2).trim();
                const match = tmplValue.match(/^(\w+)\((.*)\)$/);
                if (match) {
                    console.log("MATCH WORKED: ", match[1]);
                }
                const data = match ? ctx[match[1]] : ctx[tmplValue];

                if (typeof data === "function") {
                    const funcName = `func_${tmplValue}`;
                    compiledTemplate += match ? `${funcName}` : `${funcName}()`;
                    console.log("compiled template became", compiledTemplate);
                    (window as any)[funcName] = data;
                } else {
                    compiledTemplate += data !== undefined ? data : "";
                }
            } else {
                compiledTemplate += segment;
            }
        });

        return compiledTemplate;
    }

    private _parseTemplate(template: string): string[] {
        let segments: string[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;

        while ((match = this.TEMPLATE_REGEXP.exec(template)) !== null) {
            if (match.index > lastIndex) {
                segments.push(template.slice(lastIndex, match.index));
            }

            segments.push(match[0]);
            lastIndex = this.TEMPLATE_REGEXP.lastIndex;
        }

        if (lastIndex < template.length) {
            segments.push(template.slice(lastIndex));
        }

        return segments;
    }

    private _executeScripts(template: string): string {
        const container = document.createElement("div");
        container.innerHTML = template;

        const scripts = container.querySelectorAll("script");
        scripts.forEach((script) => {
            const src = script.src || script.innerHTML.trim();
            if (src && !Templator.loadedScripts.has(src)) {
                const newScript = document.createElement("script");
                newScript.type = script.type || "text/javascript";
                newScript.text = script.innerHTML;
                newScript.defer = script.defer;
                newScript.src = script.src;
                document.body.appendChild(newScript);
            }
        });

        const links = container.querySelectorAll("link");
        links.forEach((link) => {
            const href = link.href?.trim();
            if (href && !Templator.loadedLinks.has(href)) {
                const newLink = document.createElement("link");
                newLink.rel = link.rel || "stylesheet";
                newLink.href = href;
                document.body.appendChild(newLink);
            }
        });

        return container.innerHTML;
    }
}

export { Templator };
