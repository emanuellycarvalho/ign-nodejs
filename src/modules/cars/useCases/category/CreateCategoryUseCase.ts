// import { CategoriesRepository } from "../../repositories/CategoryRepository";
import { ICategoryRepository } from "../../repositories/category/ICategoryRepository";


interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoriesRepository: ICategoryRepository){}

    execute({ name, description }: IRequest): void{
        if(this.categoriesRepository.findByName(name)){
            // return response.status(400).json({ error: "Category already exists!" })
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryService }