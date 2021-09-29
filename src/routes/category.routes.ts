import multer from "multer";
import { request, response, Router } from "express";
// import createCategoryController from "../modules/cars/useCases/category/create";
import { CreateCategoryController } from "../modules/cars/useCases/category/create/CreateCategoryController";
import listCategoriesController from "../modules/cars/useCases/category/list";
import importCategoryController from "../modules/cars/useCases/category/import";

const categoryRoutes = Router();

// const upload = multer();    [for reading here only]
//[but we're saving in a temporary folder for reading it in another place, so]
const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();

categoryRoutes.post("/", createCategoryController.handler);

categoryRoutes.get("/", (request, response) => {
    return listCategoriesController().handler(request, response);
});

categoryRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController().handler(request, response);
})

export { categoryRoutes };