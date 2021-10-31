import 'reflect-metadata';
import {inject, injectable } from "tsyringe";
import { AppError } from '@errors/AppError';
import { ICategoryRepository } from '@modules/cars/repositories/category/ICategoryRepository';

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoryRepository") 
        private categoryRepository: ICategoryRepository
    ){}

    async execute({ name, description }: IRequest): Promise<void>{
        if(await this.categoryRepository.findByName(name)){
            throw new AppError("Category already exists!");
        }

        await this.categoryRepository.create({
            name, 
            description 
        });
    }

}

export { CreateCategoryUseCase }