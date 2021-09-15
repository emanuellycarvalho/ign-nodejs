import { request, response, Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/category/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoryRepository);
    createCategoryService.execute({ name, description });
    
    return response.status(201).json({ message: "Category created!" });
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoryRepository.list();

    return response.json(all);
})

export { categoriesRoutes };