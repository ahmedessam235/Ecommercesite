import {Request,Response} from "express";
import { GeneralController } from "./application/controller/GeneralController";
import { CategoryController } from "./application/controller/CategoryController";
import { OrderController } from "./application/controller/OrderController";
import { OrderItemController } from "./application/controller/OrderItemController";
import { ProductController } from "./application/controller/ProductController";
import { ProductTagController } from "./application/controller/ProductTagController";
import { SubCategoryController } from "./application/controller/SubCategoryController";
import { TagController } from "./application/controller/TagController";
import { UserController } from "./application/controller/UserController";
const express = require('express');
const app = express();


//GET requests
app.get("/",GeneralController.instance.ping);
app.get("/category",CategoryController.instance.getCategory);
app.get("/order",OrderController.instance.getOrder);
app.get("/orderitem",OrderItemController.instance.getOrderItem);
app.get("/product",ProductController.instance.getProduct);
app.get("/producttag",ProductTagController.instance.getProductTag);
app.get("/subcategory",SubCategoryController.instance.getSubCategory);
app.get("/tag",TagController.instance.getTag);
app.get("/user",UserController.instance.getUser);

//Post requests
app.post("/setcategory",CategoryController.instance.setCategory);
app.post("/setorder",OrderController.instance.setOrder);
app.post("/setorderitem",OrderItemController.instance.setOrderItem);
app.post("/setproduct",ProductController.instance.setProduct);
app.post("/setproducttag",ProductTagController.instance.setProductTag);
app.post("/setsubcategory",SubCategoryController.instance.setSubCategory);
app.post("/settag",TagController.instance.setTag);
app.post("/setuser",UserController.instance.setUser);

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });