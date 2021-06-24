"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGenerator = void 0;
class TokenGenerator {
    constructor() {
    }
    generate() {
        let r = Math.random().toString(36).substring(7);
        return r;
    }
}
exports.TokenGenerator = TokenGenerator;
TokenGenerator.instance = new TokenGenerator();
//# sourceMappingURL=token-generator.js.map