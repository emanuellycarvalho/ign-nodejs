import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { AppError } from '../../../../../errors/AppError';

interface IRequest {
        user_id: string;
        avatar_file: string;
}

@injectable()
class updateAvatarUseCase { 

        constructor(
                @inject("UserRepositoy")
                private usersRepository: IUserRepository
        ){}

        async execute({ user_id, avatar_file}: IRequest): Promise<void>{
                const user = await this.usersRepository.findById(user_id);
                user.avatar = avatar_file;

                
        }
}

export { updateAvatarUseCase }