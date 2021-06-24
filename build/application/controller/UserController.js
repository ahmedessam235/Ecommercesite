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
exports.UserController = void 0;
const TokensRepo_1 = require("../../storage/repos/TokensRepo");
const LoginsRepo_1 = require("../../../src/storage/repos/LoginsRepo");
const UsersRepo_1 = require("../../../src/storage/repos/UsersRepo");
const password_validator_1 = require("../../helpers/password-validator");
class UserController {
    constructor() { }
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield UsersRepo_1.UsersRepo.instance.getUsers();
                res.send(JSON.stringify(result));
            }
            catch (e) {
                next(e);
            }
        });
    }
    getUserByToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let token = req.headers['token'];
                let tokenObj = yield TokensRepo_1.TokensRepo.instance.getToken(token);
                let result = tokenObj.user;
                res.send(JSON.stringify(result));
            }
            catch (e) {
                next(e);
            }
        });
    }
    checkUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let email;
                let password;
                email = req.body.email;
                password = req.body.password;
                let result = yield UsersRepo_1.UsersRepo.instance.getUserByEmail(email);
                if (result !== undefined) {
                    let loginresult = yield LoginsRepo_1.LoginsRepo.instance.getLogins(result.userid); //get the id and check it if there is a login saved "saved account"
                    if (password !== loginresult) {
                        res.send("User doesn't exist please check your login credentials");
                    }
                }
                if (result === undefined) {
                    res.send("User doesn't exist please check your login credentials");
                }
                else {
                    res.send(JSON.stringify(result));
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    setUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let email;
                let password;
                email = req.body.email;
                password = req.body.password;
                UserController.instance.createNewUser(email, password, false);
                res.status(200).send("user registered");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setAdmin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let email;
                let password;
                email = req.body.email;
                password = req.body.password;
                UserController.instance.createNewUser(email, password, true);
                res.status(200).send();
            }
            catch (e) {
                next(e);
            }
        });
    }
    createNewUser(email, password, isAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            let insertedUserId = yield UsersRepo_1.UsersRepo.instance.setUser(email, isAdmin);
            let loginId = yield LoginsRepo_1.LoginsRepo.instance.setLogin(insertedUserId, password);
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let email;
                let password;
                email = req.body.email;
                password = req.body.password;
                //1- Exchange email for user, to get the user id.
                let userObj = yield UsersRepo_1.UsersRepo.instance.getUserByEmail(email);
                if (UsersRepo_1.UsersRepo === null) {
                    throw new Error("Email not found");
                }
                //2- Send user id to database to get the password.
                let correctPassword = yield LoginsRepo_1.LoginsRepo.instance.getLogins(userObj.userid);
                //3- Compare password (Requires unhashing).
                let passwordsMatch = password_validator_1.PasswordValidator.instance.validate(password, correctPassword);
                if (passwordsMatch !== true) {
                    throw new Error("Password not correct");
                }
                //4- Create token for the user id.
                let token;
                let tokenObj = yield TokensRepo_1.TokensRepo.instance.setToken(userObj.userid);
                if (tokenObj === null || tokenObj.token === null) {
                    throw new Error("Failed to generate the token");
                }
                token = tokenObj.token;
                //5- Return the generated token.
                res.send(JSON.stringify({
                    token: token
                }));
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userEmail;
                let userIsAdmin;
                let id;
                userEmail = req.body.email;
                userIsAdmin = req.body.isAdmin;
                id = req.body.id;
                let result = yield UsersRepo_1.UsersRepo.instance.updateUser(id, userEmail, userIsAdmin);
                res.send(JSON.stringify(result));
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id;
                id = req.body.id;
                let result = yield UsersRepo_1.UsersRepo.instance.deleteUser(id);
                res.send(JSON.stringify(result));
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.UserController = UserController;
UserController.instance = new UserController();
//# sourceMappingURL=UserController.js.map