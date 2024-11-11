// chat-list.tmpl.ts
import { jsx } from "snabbdom-jsx-lite";
import { globalContextData } from "../../../../global-store";
import { searchIconVNode } from "../../../icons/search-icon/search-icon.tmpl";

const chatListVNode = (
    <>
        <script
            sel="module"
            attrs={{
                type: "module",
                defer: true,
                src: "modules/chats/components/chat-list/chat-list.ts",
            }}
        ></script>
        <link
            sel="stylesheet"
            attrs={{
                rel: "stylesheet",
                href: "/modules/chats/components/chat-list/chat-list.css",
            }}
        />

        <div sel=".chat-list">
            <div
                sel=".profile-link"
                attrs={{ role: "button" }}
                on={{ click: globalContextData.profileToggle }}
            >
                <div sel=".profile-link__text">Профиль &gt;</div>
            </div>
            <div sel=".chat-list__search">
                {searchIconVNode}
                <input
                    sel=".chat-list__search-field"
                    attrs={{ placeholder: "Поиск" }}
                    on={{
                        input: (event) =>
                            globalContextData.handleSearch(event.target.value),
                    }}
                />
            </div>
            <div sel=".chat-items">
                {globalContextData.chats.map((chat) => (
                    <div sel=".chat-item">
                        <img
                            sel=".chat-item__avatar"
                            attrs={{
                                src: chat.image,
                                alt: "",
                                width: "47px",
                                height: "47px",
                            }}
                        />
                        <div sel=".chat-item__details">
                            <div sel=".chat-item__name">{chat.name}</div>
                            <div sel=".chat-item__last-message">
                                {chat.lastMessage}
                            </div>
                        </div>
                        <div sel=".chat-item__time">
                            <div sel=".chat-item__time-text">
                                {chat.lastMessageTime}
                            </div>
                            <div sel=".chat-item__unread-messages">
                                <div sel=".chat-item__unread-messages-text">
                                    {chat.unreadMessages}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);

export { chatListVNode };
