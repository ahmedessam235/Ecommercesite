"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subcategories = void 0;
const typeorm_1 = require("typeorm");
const Products_1 = require("./Products");
const Categories_1 = require("./Categories");
let Subcategories = class Subcategories {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "subcategoryID" })
], Subcategories.prototype, "subcategoryId", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "name", unique: true, length: 255 })
], Subcategories.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "categoryID" })
], Subcategories.prototype, "categoryID", void 0);
__decorate([
    typeorm_1.OneToMany(() => Products_1.Products, (products) => products.subcategory)
], Subcategories.prototype, "products", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Categories_1.Categories, (categories) => categories.subcategories),
    typeorm_1.JoinColumn([{ name: "categoryID", referencedColumnName: "categoryId" }])
], Subcategories.prototype, "category", void 0);
Subcategories = __decorate([
    typeorm_1.Index("subcategories_name_key", ["name"], { unique: true }),
    typeorm_1.Index("subcategory_pkey", ["subcategoryId"], { unique: true }),
    typeorm_1.Entity("subcategories", { schema: "public" })
], Subcategories);
exports.Subcategories = Subcategories;
//# sourceMappingURL=Subcategories.js.map