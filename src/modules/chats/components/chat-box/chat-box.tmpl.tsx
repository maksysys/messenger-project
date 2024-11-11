// chat-box.tmpl.ts
import { jsx } from "snabbdom-jsx-lite";
import { attachIconVNode } from "../../../icons/attach-icon/attach-icon.tmpl";
import { optionsIconVNode } from "../../../icons/options-icon/options-icon.tmpl";
import { forwardArrowIconVNode } from "../../../icons/forward-arrow-icon/forward-arrow-icon.tmpl";

const chatBoxVNode = (
    <>
        <script
            sel="module"
            attrs={{
                type: "module",
                defer: true,
                src: "modules/chats/components/chat-box/chat-box.ts",
            }}
        ></script>
        <link
            sel="stylesheet"
            attrs={{
                rel: "stylesheet",
                href: "/modules/chats/components/chat-box/chat-box.css",
            }}
        />

        <div sel=".chat-box">
            <div sel=".chat-box__header">
                <div sel=".chat-box__header-start">
                    <img
                        sel=".chat-box__avatar"
                        attrs={{
                            src: "assets/images/default-avatar.jpg",
                            alt: "",
                            width: "34px",
                            height: "34px",
                        }}
                    />
                    <div sel=".chat-box__title">Chat Name</div>
                </div>
                <div sel=".chat-box__options" attrs={{ role: "button" }}>
                    {optionsIconVNode}
                </div>
            </div>

            <div sel=".chat-box__content">
                <div sel=".chat-box__messages">
                    {globalContextData.messages.map((message) => (
                        <div
                            sel={
                                message.sentByYou
                                    ? ".message.own-message"
                                    : ".message"
                            }
                        >
                            <img
                                sel=".message__avatar"
                                attrs={{
                                    src: message.image,
                                    alt: "",
                                    height: "34px",
                                    width: "34px",
                                }}
                            />
                            <div sel=".message__content">
                                <div sel=".message__text">{message.text}</div>
                                <div sel=".message__time">{message.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div sel=".chat-box__input-container">
                <div sel=".chat-box__attach-button" attrs={{ role: "button" }}>
                    {attachIconVNode}
                </div>
                <input
                    sel=".chat-box__input"
                    attrs={{ type: "text", placeholder: "Сообщение" }}
                />
                <div sel=".chat-box__send-button" attrs={{ role: "button" }}>
                    {forwardArrowIconVNode}
                </div>
            </div>
        </div>
    </>
);

export { chatBoxVNode };
