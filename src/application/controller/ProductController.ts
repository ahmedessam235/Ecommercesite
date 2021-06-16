import { NextFunction,Request,Response } from "express";

export class ProductController {
    public static instance: ProductController = new ProductController();
    private constructor() { }
    public async getProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("product can be any fashion stuff");
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
}