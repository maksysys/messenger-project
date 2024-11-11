// add-user.tmpl.ts
import { Templator } from "../../../../../templator";

const addUserTemplate = `
    <link rel="stylesheet" href="modules/common/form.css">
    <link rel="stylesheet" href="modules/chats/components/user-actions/user-actions.css">
    <div class="form-container">
        <h2 class="form-header">Добавить пользователя</h2>
        <form class="form" action="/login" method="POST">
            <div class="form__block">
                <label class="form__label" for="login">Логин</label>
                <input class="form__input" type="text" name="login" placeholder="Логин" required>
            </div>
            <button class="form__button" type="submit">Добавить</button>
        </form>
    </div>
`;

const addUserContextData = {};

const addUserTemplator = new Templator(addUserTemplate);

const addUserComp = addUserTemplator.compile(addUserContextData);

export { addUserComp };
