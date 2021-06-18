import { NextFunction,Request,Response } from "express";
import { UsersRepo } from "../../../src/storage/repos/UsersRepo";

export class UserController {
    public static instance: UserController = new UserController();
    private constructor() { }
    public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let result = await UsersRepo.instance.getUsers();          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async setUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let email:string;
            let userIsAdmin:boolean;
            email = req.body.email;
            userIsAdmin = req.body.isAdmin;
            let result = await UsersRepo.instance.setUser(email,userIsAdmin);          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let userEmail:string;
            let userIsAdmin:boolean;
            let id:number;
            userEmail = req.body.email;
            userIsAdmin = req.body.isAdmin;
            id = req.body.id
            let result = await UsersRepo.instance.updateUser(id,userEmail,userIsAdmin); 
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let id:number;
            id = req.body.id
            let result = await UsersRepo.instance.deleteUser(id); 
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
}