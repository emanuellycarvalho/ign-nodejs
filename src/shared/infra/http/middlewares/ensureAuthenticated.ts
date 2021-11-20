import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";


interface IPayload{
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const headers = request.headers.authorization;

    if(!headers){
        throw new AppError("Missing token!", 401);
    }

    const [prefix, token] = headers.split(" ");
    try {
        const { sub: id } = verify(token, "md5hashgenerator") as IPayload;

        const usersRepository = new UserRepository();
        const user = usersRepository.findById(id);

        if(!user){
            throw new AppError("User not found!", 401);
        }

        request.user = {
            id: id
        };

        next();

    } catch{
        throw new AppError("Invalid token!", 401);
    }
}