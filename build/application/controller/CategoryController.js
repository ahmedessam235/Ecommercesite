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
exports.CategoryController = void 0;
class CategoryController {
    constructor() { }
    getCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("list of categories are : shirts,pants,socks,accessories and bags");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("post request done ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("update request done ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("delete request done ");
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.CategoryController = CategoryController;
CategoryController.instance = new CategoryController();
//# sourceMappingURL=CategoryController.js.map