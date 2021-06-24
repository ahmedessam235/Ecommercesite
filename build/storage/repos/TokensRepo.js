"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensRepo = void 0;
const Tokens_1 = require("../../models/entities/Tokens");
const database_1 = require("../database");
const token_generator_1 = require("../../helpers/token-generator");
class TokensRepo {
    TokensRepo() { }
    ;
    getRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.Database.instance.connection.getRepository(Tokens_1.Tokens);
        });
    }
    getToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = yield this.getRepo();
            let tokenObj = yield repo.findOne({ token: token }, { relations: ['user'] }); //load the data between token and users aka, performing inner join betwen token and user
            return tokenObj;
        });
    }
    setToken(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = yield this.getRepo();
            let tokenObj = new Tokens_1.Tokens();
            tokenObj.userId = userId;
            tokenObj.token = token_generator_1.TokenGenerator.instance.generate();
            tokenObj = yield repo.save(tokenObj);
            return tokenObj;
        });
    }
}
exports.TokensRepo = TokensRepo;
TokensRepo.instance = new TokensRepo();
//# sourceMappingURL=TokensRepo.js.map