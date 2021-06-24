"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orderitems = void 0;
const typeorm_1 = require("typeorm");
const Orders_1 = require("./Orders");
const Products_1 = require("./Products");
let Orderitems = class Orderitems {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "orderitemID" })
], Orderitems.prototype, "orderitemId", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "quantity" })
], Orderitems.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "itemprice", nullable: true })
], Orderitems.prototype, "itemprice", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Orders_1.Orders, (orders) => orders.orderitems),
    typeorm_1.JoinColumn([{ name: "orderid", referencedColumnName: "orderId" }])
], Orderitems.prototype, "order", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Products_1.Products, (products) => products.orderitems),
    typeorm_1.JoinColumn([{ name: "productid", referencedColumnName: "productId" }])
], Orderitems.prototype, "product", void 0);
Orderitems = __decorate([
    typeorm_1.Index("orderitem_pkey", ["orderitemId"], { unique: true }),
    typeorm_1.Entity("orderitems", { schema: "public" })
], Orderitems);
exports.Orderitems = Orderitems;
//# sourceMappingURL=Orderitems.js.map