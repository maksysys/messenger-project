// login.ts
import { FormValidator } from "../../../../utils/validation";

const form: HTMLFormElement | null = document.querySelector("#form");
console.log("Login Form:", form);
if (form) {
    const fields = ["login", "password"];
    const validate = new FormValidator(form, fields, "login");
}
