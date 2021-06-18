import { ORMConfigurations } from "../ormconfig";
import { createConnection, Connection } from "typeorm";
import { ConnectionOptions } from "typeorm";

export class Database {
    public static instance: Database = new Database();
    public connection: Connection;
    private constructor() { }
    public async init(): Promise<void> {
        let defaultConfig: ConnectionOptions = ORMConfigurations.instance.default();
        this.connection = await createConnection(defaultConfig);
    }


}