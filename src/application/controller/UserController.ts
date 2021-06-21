import {
    NextFunction,
    Request,
    Response
} from "express";
import {
    TokensRepo
} from "../../storage/repos/TokensRepo";
import {
    LoginsRepo
} from "../../../src/storage/repos/LoginsRepo";
import {
    UsersRepo
} from "../../../src/storage/repos/UsersRepo";
import {
    Users
} from "../../../src/models/entities/Users";
import {
    PasswordValidator
} from "../../helpers/password-validator";
import {
    Tokens
} from "../../../src/models/entities/Tokens";

export class UserController {
    public static instance: UserController = new UserController();
    private constructor() {}
    public async getUsers(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let result = await UsersRepo.instance.getUsers();
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async getUserByToken(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let token:any = req.headers['token'];
            let tokenObj:Tokens = await TokensRepo.instance.getToken(token);
            let result:Users = tokenObj.user;
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async checkUser(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let email: string;
            let password: string;
            email = req.body.email;
            password = req.body.password;
            let result: Users = await UsersRepo.instance.getUserByEmail(email);
            if (result !== undefined) {
                let loginresult: string = await LoginsRepo.instance.getLogins(result.userid); //get the id and check it if there is a login saved "saved account"
                if (password !== loginresult) {
                    res.send("User doesn't exist please check your login credentials");
                }
            }
            if (result === undefined) {
                res.send("User doesn't exist please check your login credentials");
            } else {

                res.send(JSON.stringify(result));
            }
        } catch (e) {
            next(e);
        }
    }

    public async setUser(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let email: string;
            let password: string;
            email = req.body.email;
            password = req.body.password;
            UserController.instance.createNewUser(email, password, false);
            res.status(200).send("user registered");
        } catch (e) {
            next(e);
        }
    }
    public async setAdmin(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let email: string;
            let password: string;
            email = req.body.email;
            password = req.body.password;
            UserController.instance.createNewUser(email, password, true);
            res.status(200).send();
        } catch (e) {
            next(e);
        }
    }
    private async createNewUser(email: string, password: string, isAdmin: boolean): Promise < void > {
        let insertedUserId: number = await UsersRepo.instance.setUser(email, isAdmin);
        let loginId: number = await LoginsRepo.instance.setLogin(insertedUserId, password);
    }
    public async login(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let email: string;
            let password: string;
            email = req.body.email;
            password = req.body.password;


            //1- Exchange email for user, to get the user id.
            let userObj: Users = await UsersRepo.instance.getUserByEmail(email);
            if (UsersRepo === null) {
                throw new Error("Email not found");
            }

            //2- Send user id to database to get the password.
            let correctPassword: string = await LoginsRepo.instance.getLogins(userObj.userid);

            //3- Compare password (Requires unhashing).
            let passwordsMatch = PasswordValidator.instance.validate(password, correctPassword);
            if (passwordsMatch !== true) {
                throw new Error("Password not correct");
            }

            //4- Create token for the user id.
            let token: string;
            let tokenObj: Tokens = await TokensRepo.instance.setToken(userObj.userid);
            if (tokenObj === null || tokenObj.token === null) {
                throw new Error("Failed to generate the token");
            }
            token = tokenObj.token;

            //5- Return the generated token.
            res.send(JSON.stringify({
                token: token
            }));
        } catch (e) {
            next(e);
        }
    }
    public async updateUser(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let userEmail: string;
            let userIsAdmin: boolean;
            let id: number;
            userEmail = req.body.email;
            userIsAdmin = req.body.isAdmin;
            id = req.body.id
            let result = await UsersRepo.instance.updateUser(id, userEmail, userIsAdmin);
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
    public async deleteUser(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            let id: number;
            id = req.body.id
            let result = await UsersRepo.instance.deleteUser(id);
            res.send(JSON.stringify(result));
        } catch (e) {
            next(e);
        }
    }
}