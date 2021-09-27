import { SpecificationRepository } from "../../repositories/specification/SpecificationRepository";
import { CreateSpecificationController } from "./create/CreateSpecificationController";
import { CreateSpecificationUseCase } from "./create/CreateSpecificationUseCase";

export default(): CreateSpecificationController => {
    const specificationRepository = SpecificationRepository.getInstance();

    // CREATE
    const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
    const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

    return createSpecificationController;
}
