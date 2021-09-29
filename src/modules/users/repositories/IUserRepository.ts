import { User } from "../entities/User";

interface IUserRepository{
    create(data: ICreateUserDTO): Promise<void>;
}

export { IUserRepository }