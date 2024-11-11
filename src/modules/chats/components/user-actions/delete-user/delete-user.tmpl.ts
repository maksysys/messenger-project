// delete-user.tmpl.ts
import { Templator } from "../../../../../templator";

const deleteUserTemplate = `
    <link rel="stylesheet" href="modules/common/form.css">
    <link rel="stylesheet" href="modules/chats/components/user-actions/user-actions.css">
    <div class="form-container">
        <h2 class="form-header">Удалить пользователя</h2>
        <form class="form" action="/login" method="POST">
            <div class="form__block">
                <label class="form__label" for="login">Логин</label>
                <input class="form__input" type="text" name="login" placeholder="Логин" required>
            </div>
            <button class="form__button" type="submit">Удалить</button>
        </form>
    </div>
`;

const deleteUserContextData = {};

const deleteUserTemplator = new Templator(deleteUserTemplate);

const deleteUserComp = deleteUserTemplator.compile(deleteUserContextData);

export { deleteUserComp };
