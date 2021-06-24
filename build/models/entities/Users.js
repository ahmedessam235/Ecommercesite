"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Logins_1 = require("./Logins");
const Orders_1 = require("./Orders");
const Tokens_1 = require("./Tokens");
let Users = class Users {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "userid" })
], Users.prototype, "userid", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "user_email", length: 255, unique: true })
], Users.prototype, "userEmail", void 0);
__decorate([
    typeorm_1.Column("boolean", { name: "isadmin" })
], Users.prototype, "isadmin", void 0);
__decorate([
    typeorm_1.OneToMany(() => Logins_1.Logins, (logins) => logins.user)
], Users.prototype, "logins", void 0);
__decorate([
    typeorm_1.OneToMany(() => Orders_1.Orders, (orders) => orders.user)
], Users.prototype, "orders", void 0);
__decorate([
    typeorm_1.OneToOne(() => Tokens_1.Tokens, (tokens) => tokens.user)
], Users.prototype, "tokens", void 0);
Users = __decorate([
    typeorm_1.Index("users_pkey", ["userid"], { unique: true }),
    typeorm_1.Entity("users", { schema: "public" })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map