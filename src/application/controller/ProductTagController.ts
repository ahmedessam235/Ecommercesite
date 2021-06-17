import { NextFunction,Request,Response } from "express";

export class ProductTagController {
    public static instance: ProductTagController = new ProductTagController();
    private constructor() { }
    public async getProductTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("get the product tag");
        } catch (e) {
            next(e);
        }
        
    }
    public async setProductTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("post request done /productTag ");
        } catch (e) {
            next(e);
        }
    }
    public async updateProductTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("update request done /productTag ");
        } catch (e) {
            next(e);
        }
    }
    public async deleteProductTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("delete request done /productTag ");
        } catch (e) {
            next(e);
        }
    }
}