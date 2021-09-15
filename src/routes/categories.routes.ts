import { request, response, Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/category/CategoryRepository";
import { createCategoryController, listCategoriesController } from "../modules/cars/useCases/category";
import { CreateCategoryUseCase } from "../modules/cars/useCases/category/CreateCategoryUseCase";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handler(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handler(request, response);
})

export { categoriesRoutes };