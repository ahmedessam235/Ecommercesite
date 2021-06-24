"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORMConfigurations = void 0;
var path = require('path');
class ORMConfigurations {
    constructor() {
    }
    default() {
        return {
            name: 'default',
            type: 'postgres',
            database: "ecommerce",
            username: "ecommerce_admin",
            password: "123456",
            synchronize: false,
            host: "127.0.0.1",
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
    }
    ;
}
exports.ORMConfigurations = ORMConfigurations;
ORMConfigurations.instance = new ORMConfigurations();
//# sourceMappingURL=ormconfig.js.map