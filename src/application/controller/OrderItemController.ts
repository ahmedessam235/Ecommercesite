import { NextFunction,Request,Response } from "express";

export class OrderItemController {
    public static instance: OrderItemController = new OrderItemController();
    private constructor() { }
    public async getOrderItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("orderitem is .... eg. Shirt, pants or any fashion stuff");
        } catch (e) {
            next(e);
        }
    }
    public async setOrderItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("post request done /orderItem ");
        } catch (e) {
            next(e);
        }
    }
    public async updateOrderItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("update request done /orderItem ");
        } catch (e) {
            next(e);
        }
    }
    public async deleteOrderItem(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("delete request done /orderItem ");
        } catch (e) {
            next(e);
        }
    }
}