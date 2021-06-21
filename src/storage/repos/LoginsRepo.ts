import {
    Logins
} from '../../models/entities/Logins';
import {
    DeleteResult,
    Repository,
    UpdateResult
} from "typeorm";
import {
    Database
} from '../database';

interface ILoginsRepo {
    getLogins(userId: number): Promise < string >
        setLogin(userId: number, password: string): Promise < number >
}
export class LoginsRepo implements ILoginsRepo {
    public static instance: LoginsRepo = new LoginsRepo();
    private LoginsRepo() {};

    async getRepo(): Promise < Repository < Logins >> {
        return await Database.instance.connection.getRepository(Logins);
    }

    async getLogins(userId: number): Promise < string > {
        let repo: Repository < Logins > = await this.getRepo();
        let existingLogins: Logins = await repo.findOne({
            userId: userId
        });
        return existingLogins.password;
    }


    async setLogin(userId: number, password: string): Promise < number > {
        let repo: Repository < Logins > = await this.getRepo();
        let newLogin: Logins = new Logins();
        newLogin.password = password;
        newLogin.userId = userId;
        let savedLogin = await repo.save(newLogin);
        return savedLogin.loginId;
    }
}