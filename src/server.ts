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
import { Database } from "./storage/database";
import { GeneralMiddleware } from "./application/middleware/general-middleware";

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({ origin: true }));
app.use(bodyParser.json());

//GET requests "READ"
app.get("/",GeneralController.instance.ping);
app.get("/category",CategoryController.instance.getCategory);
app.get("/order",OrderController.instance.getOrder);
app.get("/orderitem",OrderItemController.instance.getOrderItem);
app.get("/product",ProductController.instance.getProduct);
app.get("/producttag",ProductTagController.instance.getProductTag);
app.get("/subcategory",SubCategoryController.instance.getSubCategory);
app.get("/tag",TagController.instance.getTag);
app.get("/user",UserController.instance.getUsers);
//Post requests  "CREATE"
app.post("/category",CategoryController.instance.setCategory);
app.post("/order",OrderController.instance.setOrder);
app.post("/orderitem",OrderItemController.instance.setOrderItem);
app.post("/product",ProductController.instance.setProduct);
app.post("/producttag",ProductTagController.instance.setProductTag);
app.post("/subcategory",SubCategoryController.instance.setSubCategory);
app.post("/tag",TagController.instance.setTag);
app.post("/user",UserController.instance.setUser);
app.post("/checkuser",UserController.instance.checkUser);
app.post("/admin",[GeneralMiddleware.instance.authenticateAdmin,UserController.instance.setAdmin]);
app.post("/login",UserController.instance.login);
//PUT requests "update"
app.put("/category",CategoryController.instance.updateCategory);
app.put("/order",OrderController.instance.updateOrder);
app.put("/orderitem",OrderItemController.instance.updateOrderItem);
app.put("/product",ProductController.instance.updateProduct);
app.put("/producttag",ProductTagController.instance.updateProductTag);
app.put("/subcategory",SubCategoryController.instance.updateSubCategory);
app.put("/tag",TagController.instance.updateTag);
app.put("/user",UserController.instance.updateUser);
//DELETE requests "delete"
app.delete("/category",CategoryController.instance.deleteCategory);
app.delete("/order",OrderController.instance.deleteOrder);
app.delete("/orderitem",OrderItemController.instance.deleteOrderItem);
app.delete("/product",ProductController.instance.deleteProduct);
app.delete("/producttag",ProductTagController.instance.deleteProductTag);
app.delete("/subcategory",SubCategoryController.instance.deleteSubCategory);
app.delete("/tag",TagController.instance.deleteTag);
app.delete("/user",UserController.instance.deleteUser);


app.use(function(err:any,req:any,res:any,next:any){
  console.log(err);
  
  res.status(500).send();
  next();
})

Database.instance.init().then(function(){
  app.listen(process.env.PORT || 5000, function() {
    console.log("Server started on port 5000");
  });
});
