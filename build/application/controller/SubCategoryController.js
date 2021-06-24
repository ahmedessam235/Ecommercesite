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
exports.SubCategoryController = void 0;
const SubCategoriesRepo_1 = require("../../../src/storage/repos/SubCategoriesRepo");
class SubCategoryController {
    constructor() { }
    getSubCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let categoryId = req.params.categoryId;
                if (isNaN(categoryId)) {
                    throw new Error("Invalid category id");
                }
                let subcategories = yield SubCategoriesRepo_1.SubcategoriesRepo.instance.getSubcategories(categoryId);
                res.send(JSON.stringify(subcategories));
            }
            catch (e) {
                next(e);
            }
        });
    }
    setSubCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("post request done /subcategory ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateSubCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("update request done /subcategory ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteSubCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("delete request done /subcategory ");
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.SubCategoryController = SubCategoryController;
SubCategoryController.instance = new SubCategoryController();
//# sourceMappingURL=SubCategoryController.js.map