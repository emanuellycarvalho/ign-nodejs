import { request, response, Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/category/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/category";
import { CreateCategoryUseCase } from "../modules/cars/useCases/category/CreateCategoryUseCase";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handler(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoryRepository.list();

    return response.json(all);
})

export { categoriesRoutes };