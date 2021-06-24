import { NextFunction,Request,Response } from "express";
import { Products } from "../../models/entities/Products";
import { ProductsRepo } from "../../storage/repos/ProductsRepo";

export class ProductController {
    public static instance: ProductController = new ProductController();
    private constructor() { }
    public async getProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let subCategoryId:any = req.params.subCategoryId;
            let products:Products[] = await ProductsRepo.instance.getProducts(subCategoryId);
            res.send(JSON.stringify(products));
        } catch (e) {
            next(e);
        }
    }
    public async setProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send(req.body);
        } catch (e) {
            next(e);
        }
    }
    public async updateProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("update request for product");
        } catch (e) {
            next(e);
        }
    }
    public async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("delete product request");
        } catch (e) {
            next(e);
        }
    }
}