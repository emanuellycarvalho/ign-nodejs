import "reflect-metadata";
import { container } from "tsyringe";
import { CategoryRepository } from "../../modules/cars/repositories/category/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/category/ICategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/specification/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/specification/SpecificationRepository";


container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);



