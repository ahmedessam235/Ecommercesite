"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokens = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let Tokens = class Tokens {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "tokenID" })
], Tokens.prototype, "tokenId", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "token", length: 255 })
], Tokens.prototype, "token", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "userID" })
], Tokens.prototype, "userId", void 0);
__decorate([
    typeorm_1.OneToOne(() => Users_1.Users, (users) => users.tokens),
    typeorm_1.JoinColumn([{ name: "userID", referencedColumnName: "userid" }])
], Tokens.prototype, "user", void 0);
Tokens = __decorate([
    typeorm_1.Index("token_pkey", ["userId"], { unique: true }),
    typeorm_1.Entity("tokens", { schema: "public" })
], Tokens);
exports.Tokens = Tokens;
//# sourceMappingURL=Tokens.js.map