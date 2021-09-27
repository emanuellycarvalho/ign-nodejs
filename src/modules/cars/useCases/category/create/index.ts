import { CategoryRepository } from "../../../repositories/category/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default(): CreateCategoryController => {
    const categoryRepository = new CategoryRepository();
    console.log('Index 01');

    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return createCategoryController;
}

