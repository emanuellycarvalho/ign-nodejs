import { UserRepository } from "../modules/users/repositories/UserRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload{
    id: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const headers = request.headers.authorization;

    if(!headers){
        throw new Error("Missing token!");
    }

    const [, token] = headers.split(" ");
    try {
        const { id } = verify(token, "md5hashgenerator") as IPayload;

        const usersRepository = new UserRepository();
        const user = usersRepository.findById(id);

        if(!user){
            throw new Error("User not found!");
        }

        next();

    } catch{
        throw new Error("Invalid token!");
    }
}