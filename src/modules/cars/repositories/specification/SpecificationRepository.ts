import { getRepository, Repository } from "typeorm";
import { Specification } from "@modules/cars/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";




class SpecificationRepository implements ISpecificationRepository{

    private repository: Repository<Specification>;
    private static INSTANCE: SpecificationRepository;

    constructor(){
        this.repository = getRepository(Specification);
    }
    
    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification>{
        return await this.repository.findOne({ name });
    }

}

export { SpecificationRepository }