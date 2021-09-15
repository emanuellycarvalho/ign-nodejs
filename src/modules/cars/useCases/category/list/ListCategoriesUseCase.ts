import { Category } from "../../models/Category";
import { ICategoryRepository } from "../../repositories/category/ICategoryRepository";



class ListCategoriesUseCase { 

    constructor(private categoryRepository: ICategoryRepository){}

    execute(): Category[]{
        return this.categoryRepository.list();
    }

}

export { ListCategoriesUseCase }