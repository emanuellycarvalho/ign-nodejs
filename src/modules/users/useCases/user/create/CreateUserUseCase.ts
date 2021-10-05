import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";


@injectable()
class CreateUserUseCase{

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

    async execute({name, email, password, driver_license}: ICreateUserDTO): Promise<void>{
        const emailAlreadyExists = await this.userRepository.findByEmail(email);

        if(emailAlreadyExists){
            throw new Error("Email already exists!");
        }

        const cryptedPassword = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            password: cryptedPassword,
            driver_license
        });
    }
}

export { CreateUserUseCase }