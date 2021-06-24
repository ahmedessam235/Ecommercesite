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
const categoriesrepo_1 = require("../../storage/repos/categoriesrepo");
class CategoryController {
    constructor() { }
    getCategories(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield categoriesrepo_1.CategoriesRepo.instance.getCategories();
                res.send(JSON.stringify(result));
            }
            catch (e) {
                next(e);
            }
        });
    }
    setCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let name;
                name = req.body.name;
                let result = yield categoriesrepo_1.CategoriesRepo.instance.setCategory(name);
                res.send(JSON.stringify(result));
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let name;
                let id;
                name = req.body.name;
                id = req.body.id;
                let result = yield categoriesrepo_1.CategoriesRepo.instance.updateCategory(id, name);
                res.send(JSON.stringify(result));
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id;
                id = req.body.id;
                let result = yield categoriesrepo_1.CategoriesRepo.instance.deleteCategory(id);
                res.send(JSON.stringify(result));
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