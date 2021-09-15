import { SpecificationRepository } from "../../repositories/specification/SpecificationRepository";
import { CreateSpecificationController } from "./create/CreateSpecificationController";
import { CreateSpecificationUseCase } from "./create/CreateSpecificationUseCase";


// REPOSITORY
const specificationRepository = SpecificationRepository.getInstance();

// CREATE
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }