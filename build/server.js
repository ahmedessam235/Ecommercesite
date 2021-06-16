"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeneralController_1 = require("./application/controller/GeneralController");
const CategoryController_1 = require("./application/controller/CategoryController");
const OrderController_1 = require("./application/controller/OrderController");
const OrderItemController_1 = require("./application/controller/OrderItemController");
const ProductController_1 = require("./application/controller/ProductController");
const ProductTagController_1 = require("./application/controller/ProductTagController");
const SubCategoryController_1 = require("./application/controller/SubCategoryController");
const TagController_1 = require("./application/controller/TagController");
const UserController_1 = require("./application/controller/UserController");
const express = require('express');
const app = express();
//GET requests
app.get("/", GeneralController_1.GeneralController.instance.ping);
app.get("/category", CategoryController_1.CategoryController.instance.getCategory);
app.get("/order", OrderController_1.OrderController.instance.getOrder);
app.get("/orderitem", OrderItemController_1.OrderItemController.instance.getOrderItem);
app.get("/product", ProductController_1.ProductController.instance.getProduct);
app.get("/producttag", ProductTagController_1.ProductTagController.instance.getProductTag);
app.get("/subcategory", SubCategoryController_1.SubCategoryController.instance.getSubCategory);
app.get("/tag", TagController_1.TagController.instance.getTag);
app.get("/user", UserController_1.UserController.instance.getUser);
//Post requests
app.post("/setcategory", CategoryController_1.CategoryController.instance.setCategory);
app.post("/setorder", OrderController_1.OrderController.instance.setOrder);
app.post("/setorderitem", OrderItemController_1.OrderItemController.instance.setOrderItem);
app.post("/setproduct", ProductController_1.ProductController.instance.setProduct);
app.post("/setproducttag", ProductTagController_1.ProductTagController.instance.setProductTag);
app.post("/setsubcategory", SubCategoryController_1.SubCategoryController.instance.setSubCategory);
app.post("/settag", TagController_1.TagController.instance.setTag);
app.post("/setuser", UserController_1.UserController.instance.setUser);
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000");
});
//# sourceMappingURL=server.js.map