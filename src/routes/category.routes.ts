import multer from "multer";
import { request, response, Router } from "express";
import { CreateCategoryController } from "../modules/cars/useCases/category/create/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/category/import/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/category/list/ListCategoriesController";

const categoryRoutes = Router();

// const upload = multer();    [for reading here only]
//[but we're saving in a temporary folder for reading it in another place, so]
const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
categoryRoutes.post("/", createCategoryController.handler);

const importCategoryController = new ImportCategoryController();
categoryRoutes.post("/import", upload.single("file"), importCategoryController.handler);

const listCategoriesController = new ListCategoriesController();
categoryRoutes.get("/", listCategoriesController.handler);


export { categoryRoutes };