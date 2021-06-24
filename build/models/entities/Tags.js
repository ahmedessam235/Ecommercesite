"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
const typeorm_1 = require("typeorm");
const Products_1 = require("./Products");
let Tags = class Tags {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "tagID" })
], Tags.prototype, "tagId", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "name", length: 255 })
], Tags.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Products_1.Products, (products) => products.tags)
], Tags.prototype, "products", void 0);
Tags = __decorate([
    typeorm_1.Index("tag_pkey", ["tagId"], { unique: true }),
    typeorm_1.Entity("tags", { schema: "public" })
], Tags);
exports.Tags = Tags;
//# sourceMappingURL=Tags.js.map