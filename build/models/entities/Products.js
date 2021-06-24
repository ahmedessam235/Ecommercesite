"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const typeorm_1 = require("typeorm");
const Orderitems_1 = require("./Orderitems");
const Subcategories_1 = require("./Subcategories");
const Tags_1 = require("./Tags");
let Products = class Products {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", name: "productID" })
], Products.prototype, "productId", void 0);
__decorate([
    typeorm_1.Column("double precision", { name: "price", precision: 53 })
], Products.prototype, "price", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "name", length: 255 })
], Products.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => Orderitems_1.Orderitems, (orderitems) => orderitems.product)
], Products.prototype, "orderitems", void 0);
__decorate([
    typeorm_1.Column("bigint", { name: "subcategoryID" })
], Products.prototype, "subcategoryID", void 0);
__decorate([
    typeorm_1.Column("character varying", { name: "image_url", length: 255 })
], Products.prototype, "imageURL", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Subcategories_1.Subcategories, (subcategories) => subcategories.products),
    typeorm_1.JoinColumn([
        { name: "subcategoryID", referencedColumnName: "subcategoryId" },
    ])
], Products.prototype, "subcategory", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Tags_1.Tags, (tags) => tags.products),
    typeorm_1.JoinTable({
        name: "producttags",
        joinColumns: [{ name: "productID", referencedColumnName: "productId" }],
        inverseJoinColumns: [{ name: "tagID", referencedColumnName: "tagId" }],
        schema: "public",
    })
], Products.prototype, "tags", void 0);
Products = __decorate([
    typeorm_1.Index("products_pkey", ["productId"], { unique: true }),
    typeorm_1.Entity("products", { schema: "public" })
], Products);
exports.Products = Products;
//# sourceMappingURL=Products.js.map