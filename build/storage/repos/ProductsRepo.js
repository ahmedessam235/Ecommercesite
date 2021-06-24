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
exports.ProductsRepo = void 0;
const Products_1 = require("../../models/entities/Products");
const database_1 = require("../database");
class ProductsRepo {
    ProductsRepo() { }
    ;
    getProducts(subCategoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Products_1.Products).find({
                subcategoryID: subCategoryId
            });
            return result;
        });
    }
}
exports.ProductsRepo = ProductsRepo;
ProductsRepo.instance = new ProductsRepo();
//# sourceMappingURL=ProductsRepo.js.map