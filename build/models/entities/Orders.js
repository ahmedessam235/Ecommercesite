"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const typeorm_1 = require("typeorm");
const Orderitems_1 = require("./Orderitems");
const Users_1 = require("./Users");
let Orders = class Orders {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "orderID" })
], Orders.prototype, "orderId", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "totalprice" })
], Orders.prototype, "totalprice", void 0);
__decorate([
    typeorm_1.OneToMany(() => Orderitems_1.Orderitems, (orderitems) => orderitems.order)
], Orders.prototype, "orderitems", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.orders),
    typeorm_1.JoinColumn([{ name: "userid", referencedColumnName: "userid" }])
], Orders.prototype, "user", void 0);
Orders = __decorate([
    typeorm_1.Index("order_pkey", ["orderId"], { unique: true }),
    typeorm_1.Entity("orders", { schema: "public" })
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=Orders.js.map