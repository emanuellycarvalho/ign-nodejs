import { request, response, Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/specification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
    createSpecificationController.handler(request, response);
});

export { specificationRoutes }