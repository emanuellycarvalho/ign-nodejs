import { request, response, Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/category/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/useCases/category/CreateCategoryUseCase";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoryRepository.list();

    return response.json(all);
})

export { categoriesRoutes };