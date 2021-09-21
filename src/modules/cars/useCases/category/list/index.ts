import { CategoryRepository } from "../../../repositories/category/CategoryRepository";
import { ListCategoriesController } from "../list/ListCategoriesController";
import { ListCategoriesUseCase } from "../list/ListCategoriesUseCase";

export default() => {
    const categoryRepository = new CategoryRepository();

    const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
    const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

    return listCategoriesController;
}