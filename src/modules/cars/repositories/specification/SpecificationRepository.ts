import { Specification } from "../../models/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";




class SpecificationRepository implements ISpecificationRepository{

    private specifications;

    constructor(){
        this.specifications = [];
    }
    
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }

    findByName(name: string) {
        return this.specifications.find((specification) => {specification.name === name});
    }

}

export { SpecificationRepository }