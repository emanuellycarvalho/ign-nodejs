import { SpecificationRepository } from "../../repositories/specification/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


// REPOSITORY
const specificationRepository = SpecificationRepository.getInstance();

// CREATE
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }