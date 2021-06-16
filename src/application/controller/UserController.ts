import { NextFunction,Request,Response } from "express";

export class UserController {
    public static instance: UserController = new UserController();
    private constructor() { }
    public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("get user can be admin or normal user");
        } catch (e) {
            next(e);
        }
    }
    public async setUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("post request done /user ");
        } catch (e) {
            next(e);
        }
    }
}