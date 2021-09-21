import { CategoryRepository } from "../../../repositories/category/CategoryRepository";
import { ImportCategoryUseCase } from "../import/ImportCategoryUseCase";
import { ImportCategoryController } from "../import/ImportCategoryController";

export default() => {
    const categoryRepository = new CategoryRepository();

    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
    const importCategoryController = new ImportCategoryController(importCategoryUseCase); 
   
    return importCategoryController;
}

