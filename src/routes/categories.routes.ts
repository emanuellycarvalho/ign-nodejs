import { Router } from "express";
import { v4 as uuid } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    const categorie = {
        id: uuid(),
        name,
        description
    };

    categories.push(categorie);
    return response.status(201).json({ message: "Categorie created!"});
});

export { categoriesRoutes };