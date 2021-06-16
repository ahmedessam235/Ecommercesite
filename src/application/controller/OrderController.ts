import { NextFunction,Request,Response } from "express";

export class OrderController {
    public static instance: OrderController = new OrderController();
    private constructor() { }
    public async getOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("order consists of orderitems");
        } catch (e) {
            next(e);
        }
    }
    public async setOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("post request done /order");
        } catch (e) {
            next(e);
        }
    }
}