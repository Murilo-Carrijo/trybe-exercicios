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
const validateName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'O campo nome é obrigatório!' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'O campo nome deve possuir mais do que 3 caracteres.' });
    }
    next();
});
const validateEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (!email)
        return res.status(400).json({ message: 'O campo email é obrigatório!' });
    if (!emailRegex.test(email))
        return res.status(400).json({ message: 'O texto inserido nao corresponde a um e-mail!' });
    next();
});
const validatePassworld = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    const length = password.length;
    if (!password)
        return res.status(400).json({ message: 'O campo password é obrigatorio' });
    if (length < 6 || length > 12) {
        return res.status(400).json({ message: 'A senha deve possuir no min 6 e no max 12 caracteres' });
    }
    next();
});
exports.default = {
    validateName,
    validateEmail,
    validatePassworld,
};
