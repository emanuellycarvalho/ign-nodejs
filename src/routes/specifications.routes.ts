import { request, response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/specification/SpecificationRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/specification/CreateSpecificationUseCase";

const specificationRoutes = Router();
const speficationRepository = new SpecificationRepository;

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationUseCase = new CreateSpecificationUseCase(speficationRepository);
    createSpecificationUseCase.execute({ name, description });   
    
    return response.status(201).json({ message: "Specification created!" });
});

export { specificationRoutes }