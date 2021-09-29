import { inject, injectable } from "tsyringe";
import { SpecificationRepository } from "../../../repositories/specification/SpecificationRepository";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase { 

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: SpecificationRepository
        ){}

    execute({ name, description }: IRequest): void{

        if(this.specificationRepository.findByName(name)){
            throw new Error("Specification already exists!");
        }

        this.specificationRepository.create({
            name, 
            description
        });
    }

}

export { CreateSpecificationUseCase }