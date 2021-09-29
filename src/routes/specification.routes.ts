import { request, response, Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/specification/create/CreateSpecificationController";

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handler);

export { specificationRoutes }