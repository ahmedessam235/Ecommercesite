import { NextFunction,Request,Response } from "express";
import { Subcategories } from "../../models/entities/Subcategories";
import { SubcategoriesRepo } from "../../storage/repos/SubCategoriesRepo";

export class SubCategoryController {
    public static instance: SubCategoryController = new SubCategoryController();
    private constructor() { }
    public async getSubCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let categoryId:any = req.params.categoryId;
            if(isNaN(categoryId)){
                throw new Error("Invalid category id");
            }
            let subcategories:Subcategories[] = await SubcategoriesRepo.instance.getSubcategories(categoryId);
            res.send(JSON.stringify(subcategories));
        } catch (e) {
            next(e);
        }
    }
    public async setSubCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("post request done /subcategory ");
        } catch (e) {
            next(e);
        }
    }
    public async updateSubCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("update request done /subcategory ");
        } catch (e) {
            next(e);
        }
    }
    public async deleteSubCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log(req);
            res.send("delete request done /subcategory ");
        } catch (e) {
            next(e);
        }
    }
}