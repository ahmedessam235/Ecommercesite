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
exports.UsersRepo = void 0;
const database_1 = require("../database");
const Users_1 = require("../../../src/models/entities/Users");
class UsersRepo {
    UsersRepo() { }
    ;
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Users_1.Users).findOne({
                userEmail: email
            });
            return result;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Users_1.Users).find({});
            return result;
        });
    }
    setUser(UserEmail, UserIsAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let user;
            user = new Users_1.Users();
            user.userEmail = UserEmail;
            user.isadmin = UserIsAdmin;
            user = yield database_1.Database.instance.connection.getRepository(Users_1.Users).save(user);
            result = user.userid;
            return result;
        });
    }
    updateUser(ID, UserEmail, UserIsAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let updatedResult;
            updatedResult = yield database_1.Database.instance.connection.getRepository(Users_1.Users).update(ID, { userEmail: UserEmail, isadmin: UserIsAdmin });
            result = updatedResult.affected;
            return result;
        });
    }
    deleteUser(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Users_1.Users).delete(ID);
            return result.affected;
        });
    }
}
exports.UsersRepo = UsersRepo;
UsersRepo.instance = new UsersRepo();
//# sourceMappingURL=UsersRepo.js.map