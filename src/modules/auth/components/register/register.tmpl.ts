// register.tmpl.ts
import { Templator } from "../../../../templator";
const registerTemplate = `
    <script type="module" defer src="modules/auth/components/register/register.ts"></script>
    <link rel="stylesheet" href="/modules/common/form.css">

    <div class="form-container">
        <h1 class="form-header">Регистрация</h1>
        <form class="form" id="form" action="/register" method="POST">
            <div class="form__block">
                <label class="form__label" for="email">Почта</label>
                <input class="form__input" id="email" type="email" name="email" placeholder="Почта">
                <p class="form__error-message">{{errorMessage}}</p>
            </div>
            <div class="form__block">
                <label class="form__label" for="login">Логин</label>
                <input class="form__input" id="login" type="text" name="login" placeholder="Логин">
                <p class="form__error-message">{{errorMessage}}</p>
            </div>
            <div class="form__block">
                <label class="form__label" for="firstName">Имя</label>
                <input class="form__input" id="firstName" type="text" name="firstName" placeholder="Имя">
                <p class="form__error-message">{{errorMessage}}</p>
            </div>
            <div class="form__block">
                <label class="form__label" for="lastName">Фамилия</label>
                <input class="form__input" id="lastName" type="text" name="lastName" placeholder="Фамилия">
                <p class="form__error-message">{{errorMessage}}</p>
            </div>
            <div class="form__block">
                <label class="form__label" for="phone">Телефон</label>
                <input class="form__input" id="phone" type="tel" name="phone" placeholder="Телефон">
                <p class="form__error-message">{{errorMessage}}</p>
            </div>
            <div class="form__block">
                <label class="form__label" for="password">Пароль</label>
                <input class="form__input" id="password" type="password" name="password" placeholder="Пароль">
                <p class="form__error-message">{{errorMessage}}</p>
            </div>
            <div class="form__block">
                <label class="form__label" for="confirmPassword">Пароль (еще раз)</label>
                <input class="form__input" id="confirmPassword" type="password" name="confirmPassword" placeholder="Пароль (еще раз)">
                <p class="form__error-message">{{errorMessage}}</p>
            </div>
            <div class="form__options">
                <button class="form__button" type="submit">
                    <span>Зарегистрироваться</span>
                </button>
                <a class="form__link" href="/register">Войти</a>
            </div>
        </form>
    </div>
`;

const registerContextData = {
    errorMessage: "",
};

const registerTemplator = new Templator(registerTemplate);
const registerComp = registerTemplator.compile(registerContextData);
export { registerComp };
