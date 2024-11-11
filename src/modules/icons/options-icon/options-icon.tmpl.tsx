// options-icon.tmpl.ts
import { jsx } from "snabbdom-jsx-lite";

const optionsIconVNode = (
    <svg
        attrs={{
            width: "3",
            height: "16",
            viewBox: "0 0 3 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
        }}
    >
        <circle attrs={{ cx: "1.5", cy: "2", r: "1.5", fill: "#1E1E1E" }} />
        <circle attrs={{ cx: "1.5", cy: "8", r: "1.5", fill: "#1E1E1E" }} />
        <circle attrs={{ cx: "1.5", cy: "14", r: "1.5", fill: "#1E1E1E" }} />
    </svg>
);

export { optionsIconVNode };
