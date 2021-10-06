import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/category/ICategoryRepository";

@injectable()
class ListCategoriesUseCase { 

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
        ){}

    async execute(): Promise<Category[]>{
        return await this.categoryRepository.list();
    }

}

export { ListCategoriesUseCase }