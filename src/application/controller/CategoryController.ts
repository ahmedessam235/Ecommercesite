import { NextFunction,Request,Response } from "express";

export class CategoryController {
    public static instance: CategoryController = new CategoryController();
    private constructor() { }
    public async getCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("list of categories are : shirts,pants,socks,accessories and bags");
        } catch (e) {
            next(e);
        }
    }

    public async setCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("post request done ");
        } catch (e) {
            next(e);
        }
    }
}