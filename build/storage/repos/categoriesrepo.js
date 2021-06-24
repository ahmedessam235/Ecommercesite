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
exports.CategoriesRepo = void 0;
const Categories_1 = require("../../models/entities/Categories");
const database_1 = require("../database");
class CategoriesRepo {
    CategoriesRepo() { }
    ;
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Categories_1.Categories).find({});
            return result;
        });
    }
    setCategory(CategoryName) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let category;
            category = new Categories_1.Categories();
            category.name = CategoryName;
            category = yield database_1.Database.instance.connection.getRepository(Categories_1.Categories).save(category);
            result = category.categoryId;
            return result;
        });
    }
    updateCategory(ID, UpdatedName) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let updatedResult;
            updatedResult = yield database_1.Database.instance.connection.getRepository(Categories_1.Categories).update(ID, { name: UpdatedName });
            result = updatedResult.affected;
            return result;
        });
    }
    deleteCategory(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Categories_1.Categories).delete(ID);
            return result.affected;
        });
    }
}
exports.CategoriesRepo = CategoriesRepo;
CategoriesRepo.instance = new CategoriesRepo();
//# sourceMappingURL=categoriesrepo.js.map