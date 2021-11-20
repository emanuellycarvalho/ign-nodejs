import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUserRepository } from "@modules/users/repositories/IUserRepository"


class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }


    async create({id, name, email, password, driver_license, avatar}: ICreateUserDTO): Promise<void> {
        const user = await this.repository.create({
            id,
            name, 
            email, 
            password, 
            driver_license,
            avatar
        });
        
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User>{
        return await this.repository.findOne({ email });
    }

    async findById(id: string): Promise<User>{
        return await this.repository.findOne({ id });
    }

}

export { UserRepository }