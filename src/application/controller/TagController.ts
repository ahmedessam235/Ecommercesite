import { NextFunction,Request,Response } from "express";

export class TagController {
    public static instance: TagController = new TagController();
    private constructor() { }
    public async getTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("get tag like : sportswear, best sellers last pieces");
        } catch (e) {
            next(e);
        }
    }
    public async setTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("post request done /tag ");
        } catch (e) {
            next(e);
        }
    }
    public async updateTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("update request done /tag ");
        } catch (e) {
            next(e);
        }
    }
    public async deleteTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("delete request done /tag ");
        } catch (e) {
            next(e);
        }
    }
}