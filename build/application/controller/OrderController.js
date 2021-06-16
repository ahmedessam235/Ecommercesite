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
exports.OrderController = void 0;
class OrderController {
    constructor() { }
    getOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("order consists of orderitems");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("post request done /order");
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.OrderController = OrderController;
OrderController.instance = new OrderController();
//# sourceMappingURL=OrderController.js.map