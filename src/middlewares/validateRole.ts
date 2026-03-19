import { UserRole } from "../generated/prisma/enums";
import { Request, Response, NextFunction } from 'express';
import { AppError } from "../utils/errors";



export const validateRole = (requiredRole: UserRole) => (req: Request, _res: Response, next: NextFunction) => {

    if (!req.user) {
        throw new AppError("Usuário não autorizado", 403);
    }

    const canAccess = req.user.role === requiredRole;

    if (!canAccess) {
        throw new AppError("Usuário não autorizado", 403);
    }

    return next();
};