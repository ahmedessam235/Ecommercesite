import { NextFunction,Request,Response } from "express";

export class GeneralController {
    public static instance: GeneralController = new GeneralController();
    private constructor() { }
    public async ping(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let result: string = JSON.stringify(
                {
                    timestamp: new Date().toString(),
                }
            );
            res.send(result);
        } catch (e) {
            next(e);
        }
    }
}
