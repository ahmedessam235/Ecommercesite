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
class UserController {
    constructor() { }
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("get user can be admin or normal user");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("post request done /user ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("update request done /user ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("delete request done /user ");
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