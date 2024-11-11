// validation.ts
import { globalContextData } from "../global-store";

export class FormValidator {
    private form: HTMLFormElement;
    private fields: string[];
    private type: string;

    constructor(form: HTMLFormElement, fields: string[], type: string) {
        this.form = form;
        this.fields = fields;
        this.type = type;
        this.validateOnSubmit();
    }
    validateOnSubmit = (): void => {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            let error: number = 0;
            let sentData: { [key: string]: HTMLInputElement | null } = {};
            this.fields.forEach((field) => {
                sentData[field] = this.form.querySelector(`#${field}`);

                if (sentData[field] && !this.validateField(sentData[field])) {
                    error++;
                }
            });
            if (!this.validatePasswordMatch()) {
                error++;
            }
            if (error == 0) {
                if (this.type === "register") {
                    this.fields.forEach((field) => {
                        (
                            globalContextData.registrationData as Record<
                                string,
                                unknown
                            >
                        )[field] = sentData[field]?.value ?? "";
                    });
                }
                // console.log(store.registrationData);
                this.form.submit();
            }
        });
    };
    validateField = (field: HTMLInputElement | null): boolean => {
        if (field?.value.trim() == "") {
            const fieldName: string = (
                field?.previousElementSibling as HTMLElement
            ).innerText
                .toLowerCase()
                .replace(/[()]/g, "")
                .replace(/ия/g, "ию")
                .replace(/та/g, "ту");
            this.setStatus(field, `Введите ${fieldName}`, "error");
            return false;
        } else {
            if (field?.type === "password") {
                if (field?.value.trim().length < 8) {
                    this.setStatus(
                        field,
                        `${
                            (field?.previousElementSibling as HTMLElement)
                                .innerText
                        } не может быть меньше 8 символов`,
                        "error"
                    );
                    return false;
                } else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            } else {
                this.setStatus(field, null, "success");
                return true;
            }
        }
    };
    validatePasswordMatch = (): boolean => {
        const passwordField: HTMLInputElement | null =
            this.form.querySelector("#password");
        const confirmPasswordField: HTMLInputElement | null =
            this.form.querySelector("#confirmPassword");
        if (confirmPasswordField == null) {
            return true;
        }
        if (
            passwordField?.classList.contains("input-error") ||
            confirmPasswordField?.classList.contains("input-error")
        ) {
            return false;
        }
        if (passwordField && confirmPasswordField) {
            if (passwordField?.value !== confirmPasswordField?.value) {
                this.setStatus(passwordField, null, "error");
                this.setStatus(
                    confirmPasswordField,
                    "Пароли не совпадают",
                    "error"
                );
                return false;
            } else {
                this.setStatus(passwordField, null, "success");
                this.setStatus(confirmPasswordField, null, "success");
            }
        }
        return true;
    };
    setStatus = (
        field: HTMLInputElement | null,
        message: string | null,
        status: string
    ): void => {
        const errorMessage: HTMLElement | null =
            field?.parentElement?.querySelector(".form__error-message") ?? null;
        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field?.classList.remove("input-error");
        }
        if (status == "error") {
            if (errorMessage) {
                errorMessage.innerText = message!;
            }
            field?.classList.add("input-error");
        }
    };
}
