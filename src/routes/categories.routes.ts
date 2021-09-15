import { request, response, Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    if(categoriesRepository.findByName(name)){
        return response.status(400).json({ error: "Category already exists!" })
    }

    categoriesRepository.create({ name, description });
    return response.status(201).json({ message: "Category created!" });
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
})

export { categoriesRoutes };