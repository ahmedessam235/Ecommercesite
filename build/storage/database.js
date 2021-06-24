"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const ormconfig_1 = require("../ormconfig");
const typeorm_1 = require("typeorm");
class Database {
    constructor() { }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let defaultConfig = ormconfig_1.ORMConfigurations.instance.default();
            this.connection = yield typeorm_1.createConnection(defaultConfig);
        });
    }
}
exports.Database = Database;
Database.instance = new Database();
//# sourceMappingURL=database.js.map