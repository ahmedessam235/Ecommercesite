import { ConnectionOptions } from "typeorm";
var path = require('path');

export class ORMConfigurations {
    public static instance: ORMConfigurations = new ORMConfigurations();
    private constructor() {
    }
    public default(): ConnectionOptions {
        return {
            name: 'default',
            type: 'postgres',
            database: "ecommerce",
            username: "ahmed_essam",
            password: "ahmed_essam@2021",
            synchronize: false,
            host: "212.1.214.238",
            port: 5432,
            migrationsRun: false,
            entities: [
                path.join(__dirname, 'models', 'entities', '*{.js,.ts}')
            ],
            migrations: [
                path.join(__dirname, 'migration', '*{.js,.ts}')
            ],
            cli: {
                migrationsDir: path.join(__dirname, 'migration'),
            },
        };
    };
}