import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../../repositories/specification/ISpecificationRepository";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase { 

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
        ){}

    async execute({ name, description }: IRequest): Promise<void>{
        if(await this.specificationRepository.findByName(name)){
            throw new Error("Specification already exists!");
        }

        await this.specificationRepository.create({
            name, 
            description
        });
    }

}

export { CreateSpecificationUseCase }