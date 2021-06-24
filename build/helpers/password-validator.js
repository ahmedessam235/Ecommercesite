"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidator = void 0;
class PasswordValidator {
    constructor() {
    }
    validate(password, originalPassword) {
        return password === originalPassword;
    }
}
exports.PasswordValidator = PasswordValidator;
PasswordValidator.instance = new PasswordValidator();
//# sourceMappingURL=password-validator.js.map