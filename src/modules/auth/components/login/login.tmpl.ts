// login.tmpl.ts
import { Templator } from "../../../../templator";

const loginTemplate = `
    <script type="module" defer src="modules/auth/components/login/login.ts"></script>
    <link rel="stylesheet" href="/modules/common/form.css">
    <div class="form-container form-container--auth">
        <h2 class="form-header">Вход</h2>
        <form class="form" id="form" action="/" method="POST">
            <div class="form__block">
                <label class="form__label" for="login">Логин</label>
                <input class="form__input" id="login" type="text" name="login" placeholder="Логин">
                <div class="form__error-message">{{errorMessage}}</div>
            </div>
            <div class="form__block">
                <label class="form__label" for="password">Пароль</label>
                <input class="form__input" id="password" type="password" name="password" placeholder="Пароль">
                <div class="form__error-message">{{errorMessage}}</div>
            </div>
            <div class="form__options">
                <button class="form__button" type="submit">Авторизоваться</button>
                <a class="form__link" href="/register">Нет аккаунта?</a>
            </div>
        </form>
    </div>
`;

const loginContextData = {
    errorMessage: "",
};

const loginTemplator = new Templator(loginTemplate);

const loginComp = loginTemplator.compile(loginContextData);

export { loginComp };
