import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoryRepository implements ICategoriesRepository{
    create({ name, description }: ICreateCategoryDTO): void {
        throw new Error("It's just an example.");
    }
    list(): Category[] {
        throw new Error("It's just an example.");
    }
    findByName(name: string): Category {
        throw new Error("It's just an example.");
    }

}

export { PostgresCategoryRepository }