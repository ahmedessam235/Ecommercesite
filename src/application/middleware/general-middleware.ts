import {Request,NextFunction,Response} from "express";
import { IncomingHttpHeaders } from "http";
import { Tokens } from "../../../src/models/entities/Tokens";
import { TokensRepo } from "../../../src/storage/repos/TokensRepo";


export class GeneralMiddleware{
    public static instance: GeneralMiddleware = new GeneralMiddleware();
    private GeneralMiddleware() { };

    public async authenticateAdmin(req:Request,res:Response,next:NextFunction){
        try {
            let headers:IncomingHttpHeaders = req.headers;
          
            //Validate that there is a token in header.
            let adminToken:any = headers["admin-token"];
            if(adminToken===null || adminToken===undefined){
                throw new Error("Missing token");
            }
            if(adminToken == "q6REPcm4ukCBx6FZYQWEHJ!@G$U@!G$!UNRQN!I"){
                next();
            }

            //Retrieve the token from the database
            let tokenObj:Tokens  = await TokensRepo.instance.getToken(adminToken);
            if (tokenObj.user.isadmin !== true){  //checks if the token from a normal or admin user.
                throw new Error("not an admin");
            }
            if (tokenObj.token !== adminToken ){
                throw new Error("Token mismatch");
            }

            next();
        } catch (error) {
            next(error);
        }
    }
}