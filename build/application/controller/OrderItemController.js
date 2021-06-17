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
exports.OrderItemController = void 0;
class OrderItemController {
    constructor() { }
    getOrderItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("orderitem is .... eg. Shirt, pants or any fashion stuff");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setOrderItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("post request done /orderItem ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateOrderItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("update request done /orderItem ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteOrderItem(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("delete request done /orderItem ");
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.OrderItemController = OrderItemController;
OrderItemController.instance = new OrderItemController();
//# sourceMappingURL=OrderItemController.js.map