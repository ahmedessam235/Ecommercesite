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
exports.OrderItemsRepo = void 0;
const database_1 = require("../database");
const Orderitems_1 = require("../../models/entities/Orderitems");
class OrderItemsRepo {
    OrderItemsRepo() { }
    ;
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Orderitems_1.Orderitems).find({});
            return result;
        });
    }
    setOrders(OrderName, itemprice) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            // let category:Categories;      /* To DO how to get the value of order price */
            // category = new Categories();
            // category.name=CategoryName;
            // category = await  Database.instance.connection.getRepository(Categories).save(category);
            // result = category.categoryId; 
            return result;
        });
    }
    updateOrders(ID, UpdatedName) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            // let updatedResult:UpdateResult;
            // updatedResult= await  Database.instance.connection.getRepository(Categories).update(ID,{name:UpdatedName});
            // result = updatedResult.affected; 
            return result;
        });
    }
    deleteOrders(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Orderitems_1.Orderitems).delete(ID);
            return result.affected;
        });
    }
}
exports.OrderItemsRepo = OrderItemsRepo;
OrderItemsRepo.instance = new OrderItemsRepo();
//# sourceMappingURL=OrderItemsRepo.js.map