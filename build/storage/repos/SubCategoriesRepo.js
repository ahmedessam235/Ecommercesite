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
exports.SubcategoriesRepo = void 0;
const Subcategories_1 = require("../../models/entities/Subcategories");
const database_1 = require("../database");
class SubcategoriesRepo {
    SubcategoriesRepo() { }
    ;
    getSubcategories(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Subcategories_1.Subcategories).find({
                categoryID: categoryId
            });
            return result;
        });
    }
}
exports.SubcategoriesRepo = SubcategoriesRepo;
SubcategoriesRepo.instance = new SubcategoriesRepo();
//# sourceMappingURL=SubCategoriesRepo.js.map