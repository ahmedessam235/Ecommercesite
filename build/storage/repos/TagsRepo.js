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
exports.TagsRepo = void 0;
const database_1 = require("../database");
const Tags_1 = require("../../models/entities/Tags");
class TagsRepo {
    TagsRepo() { }
    ;
    getTags() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Tags_1.Tags).find({});
            return result;
        });
    }
    setTag(TagName) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let tag;
            tag = new Tags_1.Tags();
            tag.name = TagName;
            tag = yield database_1.Database.instance.connection.getRepository(Tags_1.Tags).save(tag);
            result = tag.tagId;
            return result;
        });
    }
    updateTag(ID, UpdatedTag) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let updatedResult;
            updatedResult = yield database_1.Database.instance.connection.getRepository(Tags_1.Tags).update(ID, { name: UpdatedTag });
            result = updatedResult.affected;
            return result;
        });
    }
    deleteTag(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield database_1.Database.instance.connection.getRepository(Tags_1.Tags).delete(ID);
            return result.affected;
        });
    }
}
exports.TagsRepo = TagsRepo;
TagsRepo.instance = new TagsRepo();
//# sourceMappingURL=TagsRepo.js.map