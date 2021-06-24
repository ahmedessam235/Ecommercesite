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
            database: "d5q941mrl0vgac",
            username: "vuukygambxkupz",
            password: "5e322bed9df50b099066ab9270d3dc1b21feb49f8b67955b35cc75a34135a206",
            synchronize: true,
            host: "ec2-34-193-101-0.compute-1.amazonaws.com",
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