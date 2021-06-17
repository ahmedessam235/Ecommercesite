import { NextFunction,Request,Response } from "express";

export class SubCategoryController {
    public static instance: SubCategoryController = new SubCategoryController();
    private constructor() { }
    public async getSubCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
            res.send("get thesubcategory like : v - necks, normal shirts  or t-shirts");
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