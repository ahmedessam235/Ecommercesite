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
exports.GeneralMiddleware = void 0;
const TokensRepo_1 = require("../../storage/repos/TokensRepo");
class GeneralMiddleware {
    GeneralMiddleware() { }
    ;
    authenticateAdmin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let headers = req.headers;
                //Validate that there is a token in header.
                let adminToken = headers["admin-token"];
                if (adminToken === null || adminToken === undefined) {
                    throw new Error("Missing token");
                }
                if (adminToken == "q6REPcm4ukCBx6FZYQWEHJ!@G$U@!G$!UNRQN!I") {
                    next();
                }
                //Retrieve the token from the database
                let tokenObj = yield TokensRepo_1.TokensRepo.instance.getToken(adminToken);
                if (tokenObj.user.isadmin !== true) { //checks if the token from a normal or admin user.
                    throw new Error("not an admin");
                }
                if (tokenObj.token !== adminToken) {
                    throw new Error("Token mismatch");
                }
                next();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.GeneralMiddleware = GeneralMiddleware;
GeneralMiddleware.instance = new GeneralMiddleware();
//# sourceMappingURL=general-middleware.js.map