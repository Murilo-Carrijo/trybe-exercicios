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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const users_model_1 = __importDefault(require("../models/users.model"));
class UsersService {
    constructor() {
        this.model = new users_model_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.getById(id);
            return user;
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = user;
            const checkEmail = yield this.model.getByEmail(email);
            if (checkEmail)
                return false;
            const newUser = yield this.model.add(user);
            return newUser;
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const chekUser = yield this.model.getById(id);
            if (!chekUser)
                return false;
            const updateUser = yield this.model.update(id, user);
            return updateUser;
        });
    }
    exclude(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const chekUser = yield this.model.getById(id);
            if (!chekUser)
                return false;
            yield this.model.exclude(id);
        });
    }
}
;
exports.default = UsersService;
