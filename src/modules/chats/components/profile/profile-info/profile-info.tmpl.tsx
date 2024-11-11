// profile-info.tmpl.ts
import { jsx } from "snabbdom-jsx-lite";
import { globalContextData } from "../../../../../global-store";
import { backArrowIconVNode } from "../../../../icons/back-arrow-icon/back-arrow-icon.tmpl";

const profileInfoVNode = (
    <>
        <link
            sel="stylesheet"
            attrs={{
                rel: "stylesheet",
                href: "modules/chats/components/profile/profile-info/profile-info.css",
            }}
        />
        <div sel=".profile-page.hidden">
            <div sel=".profile-page__back-to-chats">
                <div
                    sel=".profile-page__back-to-chats-button"
                    attrs={{ role: "button" }}
                    on={{ click: globalContextData.profileToggle }}
                >
                    {backArrowIconVNode}
                </div>
            </div>
            <div sel=".profile-page__content">
                <img
                    sel=".profile-page__avatar"
                    attrs={{
                        src: "assets/images/default-avatar.jpg",
                        alt: "",
                        width: "130px",
                        height: "130px",
                    }}
                />
                <div sel=".profile-page__name">Иван</div>
                <div sel=".profile-page__info">
                    <div sel=".profile-page__info-item">
                        <div sel=".profile-page__info-label">Почта</div>
                        <div sel=".profile-page__info-value">
                            poсhta@yandex.ru
                        </div>
                    </div>
                    <div sel=".profile-page__info-item">
                        <div sel=".profile-page__info-label">Логин</div>
                        <div sel=".profile-page__info-value">ivanivanov</div>
                    </div>
                    <div sel=".profile-page__info-item">
                        <div sel=".profile-page__info-label">Имя</div>
                        <div sel=".profile-page__info-value">Иван</div>
                    </div>
                    <div sel=".profile-page__info-item">
                        <div sel=".profile-page__info-label">Фамилия</div>
                        <div sel=".profile-page__info-value">Иванов</div>
                    </div>
                    <div sel=".profile-page__info-item">
                        <div sel=".profile-page__info-label">Имя в чате</div>
                        <div sel=".profile-page__info-value">Иван</div>
                    </div>
                    <div sel=".profile-page__info-item">
                        <div sel=".profile-page__info-label">Телефон</div>
                        <div sel=".profile-page__info-value">
                            +7 (909) 967 30 30
                        </div>
                    </div>
                </div>
                <div sel=".profile-page__actions">
                    <a sel=".profile-page__action" attrs={{ href: "#" }}>
                        Изменить данные
                    </a>
                    <a sel=".profile-page__action" attrs={{ href: "#" }}>
                        Изменить пароль
                    </a>
                    <a
                        sel=".profile-page__action.profile-page__action--logout"
                        attrs={{ href: "#" }}
                    >
                        Выйти
                    </a>
                </div>
            </div>
        </div>
    </>
);

export { profileInfoVNode };
