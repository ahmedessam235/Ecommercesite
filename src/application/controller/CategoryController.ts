import { NextFunction,Request,Response } from "express";
import { CategoriesRepo } from "../../../src/storage/repos/categoriesrepo";

export class CategoryController {
    public static instance: CategoryController = new CategoryController();
    private constructor() { }
    public async getCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let result = await CategoriesRepo.instance.getCategories();
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }

    public async setCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let name:string;
            name = req.body.name;
            let result = await CategoriesRepo.instance.setCategory(name);          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async updateCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let name:string;
            let id:number;
            name = req.body.name;
            id = req.body.id
            let result = await CategoriesRepo.instance.updateCategory(id,name);          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async deleteCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {  
            let id:number;
            id = req.body.id
            let result = await CategoriesRepo.instance.deleteCategory(id);          
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
}