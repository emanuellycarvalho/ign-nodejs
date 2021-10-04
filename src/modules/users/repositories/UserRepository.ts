import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUserRepository } from "./IUserRepository";



class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }


    async create({name, email, password, driver_license}: ICreateUserDTO): Promise<void> {
        const user = await this.repository.create({
            name, 
            email, 
            password, 
            driver_license
        });
        
        await this.repository.save(user);
    }

}

export { UserRepository }