import { request, response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/specification/CreateSpecificationService";

const specificationRoutes = Router();
const speficationRepository = new SpecificationRepository;

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(speficationRepository);
    createSpecificationService.execute({ name, description });   
    
    return response.status(201).json({ message: "Specification created!" });
});

export { specificationRoutes }