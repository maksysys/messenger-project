// back-arrow-icon.tmpl.ts
import { jsx } from "snabbdom-jsx-lite";

const backArrowIconVNode = (
    <svg
        attrs={{
            width: "28",
            height: "28",
            viewBox: "0 0 28 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
        }}
    >
        <circle
            attrs={{
                cx: "14",
                cy: "14",
                r: "14",
                transform: "rotate(-180 14 14)",
                fill: "#3369F3",
            }}
        />
        <rect
            attrs={{
                x: "20",
                y: "14.8",
                width: "11",
                height: "1.6",
                transform: "rotate(-180 20 14.8)",
                fill: "white",
            }}
        />
        <path
            attrs={{
                d: "M13 19L9 14L13 9",
                stroke: "white",
                "stroke-width": "1.6",
            }}
        />
    </svg>
);

export { backArrowIconVNode };
