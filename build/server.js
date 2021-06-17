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
//GET requests "READ"
app.get("/", GeneralController_1.GeneralController.instance.ping);
app.get("/category", CategoryController_1.CategoryController.instance.getCategory);
app.get("/order", OrderController_1.OrderController.instance.getOrder);
app.get("/orderitem", OrderItemController_1.OrderItemController.instance.getOrderItem);
app.get("/product", ProductController_1.ProductController.instance.getProduct);
app.get("/producttag", ProductTagController_1.ProductTagController.instance.getProductTag);
app.get("/subcategory", SubCategoryController_1.SubCategoryController.instance.getSubCategory);
app.get("/tag", TagController_1.TagController.instance.getTag);
app.get("/user", UserController_1.UserController.instance.getUser);
//Post requests  "CREATE"
app.post("/category", CategoryController_1.CategoryController.instance.setCategory);
app.post("/order", OrderController_1.OrderController.instance.setOrder);
app.post("/orderitem", OrderItemController_1.OrderItemController.instance.setOrderItem);
app.post("/product", ProductController_1.ProductController.instance.setProduct);
app.post("/producttag", ProductTagController_1.ProductTagController.instance.setProductTag);
app.post("/subcategory", SubCategoryController_1.SubCategoryController.instance.setSubCategory);
app.post("/tag", TagController_1.TagController.instance.setTag);
app.post("/user", UserController_1.UserController.instance.setUser);
//PUT requests "update"
app.put("/category", CategoryController_1.CategoryController.instance.updateCategory);
app.put("/order", OrderController_1.OrderController.instance.updateOrder);
app.put("/orderitem", OrderItemController_1.OrderItemController.instance.updateOrderItem);
app.put("/product", ProductController_1.ProductController.instance.updateProduct);
app.put("/producttag", ProductTagController_1.ProductTagController.instance.updateProductTag);
app.put("/subcategory", SubCategoryController_1.SubCategoryController.instance.updateSubCategory);
app.put("/tag", TagController_1.TagController.instance.updateTag);
app.put("/user", UserController_1.UserController.instance.updateUser);
//DELETE requests "delete"
app.delete("/category", CategoryController_1.CategoryController.instance.deleteCategory);
app.delete("/order", OrderController_1.OrderController.instance.deleteOrder);
app.delete("/orderitem", OrderItemController_1.OrderItemController.instance.deleteOrderItem);
app.delete("/product", ProductController_1.ProductController.instance.deleteProduct);
app.delete("/producttag", ProductTagController_1.ProductTagController.instance.deleteProductTag);
app.delete("/subcategory", SubCategoryController_1.SubCategoryController.instance.deleteSubCategory);
app.delete("/tag", TagController_1.TagController.instance.deleteTag);
app.delete("/user", UserController_1.UserController.instance.deleteUser);
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000");
});
//# sourceMappingURL=server.js.map