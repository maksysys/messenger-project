// main.tmpl.tsx
import { jsx } from "snabbdom-jsx-lite";
import { effect } from "../../reactivity.js";
import { globalContextData } from "../../global-store.js";
import { chatPageVNode } from "../../modules/chats/chat-page.tmpl.js";
import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
} from "snabbdom";

const mainTemplate = (
    <div sel="#app">
        <link attrs={{ rel: "stylesheet", href: "/layout/main/main.css" }} />
        <div sel=".main-container"></div>
    </div>
);

const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
]);

console.log(chatPageVNode);

const appElement = document.getElementById("app");
if (appElement) {
    patch(appElement, mainTemplate);
}

effect(() => {
    globalContextData.binaryConditionalRender(
        !!globalContextData.isProfileOpened,
        document.querySelector(".profile-page"),
        document.querySelector(".chat-page")
    );
});

const unreadMessageElements = document.querySelectorAll(
    ".chat-item__unread-messages"
);
const unreadMessageTextElements = document.querySelectorAll(
    ".chat-item__unread-messages-text"
);
globalContextData.chats.forEach((chat, index) => {
    effect(() => {
        unreadMessageTextElements[index].textContent = `${
            chat?.unreadMessages || ""
        }`;
    });
    effect(() => {
        globalContextData.binaryConditionalRender(
            !!chat?.unreadMessages,
            unreadMessageElements[index]
        );
    });
});
