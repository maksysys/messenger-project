//- chat-page.tmpl.ts
import { jsx } from "snabbdom-jsx-lite";
import { globalContextData } from "../../global-store";
import { chatBoxVNode } from "./components/chat-box/chat-box.tmpl";
import { chatListVNode } from "./components/chat-list/chat-list.tmpl";
import { profileInfoVNode } from "./components/profile/profile-info/profile-info.tmpl";

const chatPageVNode = (
    <>
        <script
            sel="module"
            attrs={{
                type: "module",
                defer: true,
                src: "/modules/chats/chat-page.ts",
            }}
        ></script>
        <link
            sel="stylesheet"
            attrs={{ rel: "stylesheet", href: "/modules/chats/chat-page.css" }}
        />
        <div sel=".chat-page">
            {chatListVNode}
            {chatBoxVNode}
        </div>
        {profileInfoVNode}
    </>
);

export { chatPageVNode };
