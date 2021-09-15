import { CategoryRepository } from "../../repositories/category/CategoryRepository";
import { CreateCategoryController } from "./create/CreateCategoryController";
import { CreateCategoryUseCase } from "./create/CreateCategoryUseCase";
import { ImportCategoryUseCase } from "./import/ImportCategoryUseCase";
import { ImportCategoryController } from "./import/ImportCategoryController";
import { ListCategoriesController } from "./list/ListCategoriesController";
import { ListCategoriesUseCase } from "./list/ListCategoriesUseCase";

// REPOSITORY
const categoryRepository = CategoryRepository.getInstance();

// CREATE
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }

// LIST
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController }

// IMPORT
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase); 

export { importCategoryController }