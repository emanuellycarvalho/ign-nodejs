import { Router } from "express";

const cotegoriesRoutes = Router();

const categories = [];

cotegoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    categories.push({
        name,
        description
    });

    return response.status(201).json({ message: "Categorie created!"});
});

export { cotegoriesRoutes };