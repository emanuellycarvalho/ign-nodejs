import { getRepository, Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoryRepository";

class CategoryRepository implements ICategoryRepository{

    private repository: Repository<Category>;
    private static INSTANCE: CategoryRepository;

    constructor(){
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
            const category = this.repository.create({
            description,
            name
        });

        await this.repository.save(category);
        
    }

    async list(): Promise<Category[]>{
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Category>{
        return await this.repository.findOne({ name });
    }
}

export { CategoryRepository }