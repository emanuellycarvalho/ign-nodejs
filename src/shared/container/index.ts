import "reflect-metadata";
import { container } from "tsyringe";
import { CategoryRepository } from "../../modules/cars/repositories/category/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/category/ICategoryRepository";


container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

