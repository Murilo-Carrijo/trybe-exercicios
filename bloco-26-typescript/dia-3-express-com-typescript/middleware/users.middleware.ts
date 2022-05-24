
import { Request, Response, NextFunction } from 'express';

const validateName = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo nome é obrigatório!'});
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O campo nome deve possuir mais do que 3 caracteres.'});
  }
  next();
}

const validateEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  if (!email) return res.status(400).json({ message: 'O campo email é obrigatório!'});
  if (!emailRegex.test(email)) return res.status(400).json({ message: 'O texto inserido nao corresponde a um e-mail!'});
  next();
}

const validatePassworld = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const length = password.length;
  if (!password) return res.status(400).json({ message: 'O campo password é obrigatorio'});
  if (length < 6 || length > 12) {
    return res.status(400).json({ message: 'A senha deve possuir no min 6 e no max 12 caracteres'});  
  }
  next();
}

export default {
  validateName,
  validateEmail,
  validatePassworld,
}