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
exports.LoginsRepo = void 0;
const Logins_1 = require("../../models/entities/Logins");
const database_1 = require("../database");
class LoginsRepo {
    LoginsRepo() { }
    ;
    getRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.Database.instance.connection.getRepository(Logins_1.Logins);
        });
    }
    getLogins(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = yield this.getRepo();
            let existingLogins = yield repo.findOne({
                userId: userId
            });
            return existingLogins.password;
        });
    }
    setLogin(userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = yield this.getRepo();
            let newLogin = new Logins_1.Logins();
            newLogin.password = password;
            newLogin.userId = userId;
            let savedLogin = yield repo.save(newLogin);
            return savedLogin.loginId;
        });
    }
}
exports.LoginsRepo = LoginsRepo;
LoginsRepo.instance = new LoginsRepo();
//# sourceMappingURL=LoginsRepo.js.map