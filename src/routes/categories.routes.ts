import { request, response, Router } from "express";
import { createCategoryController, listCategoriesController } from "../modules/cars/useCases/category";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handler(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handler(request, response);
});

export { categoriesRoutes };