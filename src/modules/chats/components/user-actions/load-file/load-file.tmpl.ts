// load-file.tmpl.ts
import { Templator } from "../../../../../templator";

const loadFileTemplate = `
    <link rel="stylesheet" href="modules/common/form.css">
    <link rel="stylesheet" href="modules/chats/components/user-actions/load-file/load-file.css">
    <div class="form-container">
        <h2 class="form-header">Загрузить файл</h2>
        <form class="form" action="/login" method="POST">
            <a class="form__link">Выбрать файл на компьютере</a>
            <button class="form__button" type="submit">Поменять</button>
        </form>
    </div>
`;

const loadFileContextData = {};

const loadFileTemplator = new Templator(loadFileTemplate);

const loadFileComp = loadFileTemplator.compile(loadFileContextData);

export { loadFileComp };
