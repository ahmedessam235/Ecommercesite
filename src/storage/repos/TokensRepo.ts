import {Tokens} from '../../models/entities/Tokens';
import { Repository } from "typeorm";
import { Database } from '../database';
import { TokenGenerator } from '../../../src/helpers/token-generator';

interface ITokensRepo{
    //1- Valid token (Exists in DB) >> token
    //2- Invalid Token (Non-existent) >> null
    getToken(token:string):Promise<Tokens>
    setToken(userId:number):Promise<Tokens>
}
export  class TokensRepo implements ITokensRepo {
    public static instance: TokensRepo = new TokensRepo();
    private TokensRepo() { };
    
    async getRepo():Promise<Repository<Tokens>>{
        return await Database.instance.connection.getRepository(Tokens);
    }

    async getToken(token: string): Promise<Tokens> {
        let repo: Repository<Tokens> = await this.getRepo();
        let tokenObj: Tokens = await repo.findOne({token: token},{relations:['user']}); //load the data between token and users aka, performing inner join betwen token and user
        return tokenObj;
    }
    async setToken(userId: number): Promise<Tokens> {
        let repo: Repository<Tokens> = await this.getRepo();
        let tokenObj: Tokens = new Tokens();
        tokenObj.userId = userId;
        tokenObj.token = TokenGenerator.instance.generate();
        tokenObj = await repo.save(tokenObj);
        return tokenObj;
    }

     
}