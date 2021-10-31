import "reflect-metadata";
import { container } from "tsyringe";

import { ICategoryRepository } from "@modules/cars/repositories/category/ICategoryRepository";
import { CategoryRepository } from "@modules/cars/repositories/category/CategoryRepository";

import { ISpecificationRepository } from "@modules/cars/repositories/specification/ISpecificationRepository";
import { SpecificationRepository } from "@modules/cars/repositories/specification/SpecificationRepository";

import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { UserRepository } from "@modules/users/repositories/UserRepository";


container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);



