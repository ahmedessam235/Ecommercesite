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
exports.ProductTagController = void 0;
class ProductTagController {
    constructor() { }
    getProductTag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("get the product tag");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setProductTag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("post request done /productTag ");
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.ProductTagController = ProductTagController;
ProductTagController.instance = new ProductTagController();
//# sourceMappingURL=ProductTagController.js.map