//register.ts
import { globalContextData } from "../../../../global-store";
import { FormValidator } from "../../../../utils/validation";

const form: HTMLFormElement | null = document.querySelector("#form");
if (form) {
    const fields = [
        "email",
        "login",
        "firstName",
        "lastName",
        "phone",
        "password",
        "confirmPassword",
    ];
    const validate = new FormValidator(form, fields, "register");
}
