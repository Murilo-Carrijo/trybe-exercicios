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
const http_status_codes_1 = require("http-status-codes");
const users_service_1 = __importDefault(require("../services/users.service"));
class UsersController {
    constructor() {
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.getAll();
            return res.status(http_status_codes_1.StatusCodes.OK).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const user = yield this.usersService.getById(id);
            if (!user)
                res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dataNewUser = req.body;
            const newUser = yield this.usersService.add(dataNewUser);
            if (newUser === false)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: 'Email já cadastrado' });
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(newUser);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const dataUpdateUser = req.body;
            const id = Number(req.params.id);
            const newUser = yield this.usersService.update(id, dataUpdateUser);
            if (newUser === false) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            }
            return res.status(http_status_codes_1.StatusCodes.CREATED).json(newUser);
        });
        this.exclude = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const exUser = yield this.usersService.exclude(id);
            if (exUser === false)
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Usuario excluido com sucesso' });
        });
        this.usersService = new users_service_1.default();
    }
}
;
exports.default = UsersController;
