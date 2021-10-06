import "reflect-metadata";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe"
import { IUserRepository } from "../../../repositories/IUserRepository";


interface IRequest{
    email: string;
    password: string;
}

interface IResponse{
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase{

    constructor(
        @inject("UserRepository") 
        private usersRepository: IUserRepository
    ){}

        async execute({email, password}: IRequest): Promise<IResponse>{
            const user = await this.usersRepository.findByEmail(email);

            if(!user){
                throw new Error("Email or password incorrect!");
            }

            if(!await compare(password, user.password)){
                throw new Error("Email or password incorrect!");
            }

            const token = sign({}, "md5hashgenerator", {
                subject: user.id,
                expiresIn: "1d"
            });

            const tokenReturn: IResponse = {
                token,
                user: {
                    name: user.name,
                    email: user.email
                }
            }

            return tokenReturn;
        }

}

export { AuthenticateUserUseCase }