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
exports.TagController = void 0;
class TagController {
    constructor() { }
    getTag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("get tag like : sportswear, best sellers last pieces");
            }
            catch (e) {
                next(e);
            }
        });
    }
    setTag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("post request done /tag ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    updateTag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("update request done /tag ");
            }
            catch (e) {
                next(e);
            }
        });
    }
    deleteTag(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req);
                res.send("delete request done /tag ");
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.TagController = TagController;
TagController.instance = new TagController();
//# sourceMappingURL=TagController.js.map