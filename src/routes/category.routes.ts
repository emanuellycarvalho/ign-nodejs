import multer from "multer";
import { request, response, Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/category";
import { listCategoriesController } from "../modules/cars/useCases/category";
import { importCategoryController } from "../modules/cars/useCases/category";

const categoryRoutes = Router();

// const upload = multer();    [for reading here only]
//[but we're saving in a temporary folder for reading it in another place, so]
const upload = multer({
    dest: "./tmp"
});

categoryRoutes.post("/", (request, response) => {
    return createCategoryController.handler(request, response);
});

categoryRoutes.get("/", (request, response) => {
    return listCategoriesController.handler(request, response);
});

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handler(request, response);
})

export { categoryRoutes };