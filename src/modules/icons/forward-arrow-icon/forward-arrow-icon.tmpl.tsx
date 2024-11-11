// forward-arrow-icon.tsx
import { jsx } from "snabbdom-jsx-lite";

const forwardArrowIconVNode = (
    <svg
        attrs={{
            width: "28",
            height: "28",
            viewBox: "0 0 28 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
        }}
    >
        <circle attrs={{ cx: "14", cy: "14", r: "14", fill: "#3369F3" }} />
        <rect
            attrs={{
                x: "8",
                y: "13.2",
                width: "11",
                height: "1.6",
                fill: "white",
            }}
        />
        <path
            attrs={{
                d: "M15 9L19 14L15 19",
                stroke: "white",
                "stroke-width": "1.6",
            }}
        />
    </svg>
);

export { forwardArrowIconVNode };
