import { NextFunction,Request,Response } from "express";
import { TagsRepo } from "../../storage/repos/TagsRepo";

export class TagController {
    public static instance: TagController = new TagController();
    private constructor() { }
    public async getTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            let result = await TagsRepo.instance.getTags();          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async setTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let name:string;
            name = req.body.name;
            let result = await TagsRepo.instance.setTag(name);          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async updateTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let name:string;
            let id:number;
            name = req.body.name;
            id = req.body.id
            let result = await TagsRepo.instance.updateTag(id,name);          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async deleteTag(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let id:number;
            id = req.body.id
            let result = await TagsRepo.instance.deleteTag(id);          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
}