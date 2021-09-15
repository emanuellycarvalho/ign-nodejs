

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

class ISpecificationRepository{

    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string);

}


export { ISpecificationRepository, ICreateSpecificationDTO }