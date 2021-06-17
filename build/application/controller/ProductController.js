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
exports.ProductController = void 0;
class ProductController {
    constructor() { }
    getProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("product can be any fashion stuff");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send(req.body);
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("update request for product");
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("delete product request");
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.ProductController = ProductController;
ProductController.instance = new ProductController();
//# sourceMappingURL=ProductController.js.map