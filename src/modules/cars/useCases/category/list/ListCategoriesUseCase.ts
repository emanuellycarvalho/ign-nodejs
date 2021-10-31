import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { Category } from '@modules/cars/entities/Category';
import { ICategoryRepository } from '@modules/cars/repositories/category/ICategoryRepository';


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