import { UserRepository } from "../modules/users/repositories/UserRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";


interface IPayload{
    id: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const headers = request.headers.authorization;

    if(!headers){
        throw new AppError("Missing token!", 401);
    }

    const [, token] = headers.split(" ");
    try {
        const { id } = verify(token, "md5hashgenerator") as IPayload;

        const usersRepository = new UserRepository();
        const user = usersRepository.findById(id);

        if(!user){
            throw new AppError("User not found!", 401);
        }

        next();

    } catch{
        throw new AppError("Invalid token!", 401);
    }
}