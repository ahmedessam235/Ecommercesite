import { NextFunction,Request,Response } from "express";
import { OrdersRepo } from "../../storage/repos/OrdersRepo";

export class OrderController {
    public static instance: OrderController = new OrderController();
    private constructor() { }
    public async getOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            let result = await OrdersRepo.instance.getOrders();          
            res.send(JSON.stringify(result));
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
    public async updateOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("update request done /order");
        } catch (e) {
            next(e);
        }
    }
    public async deleteOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("delete request done /order");
        } catch (e) {
            next(e);
        }
    }
}