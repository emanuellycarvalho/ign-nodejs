import "reflect-metadata";
import { container } from "tsyringe";

import { ICategoryRepository } from "@modules/cars/repositories/ICategoryRepository";
import { CategoryRepository } from "@modules/cars/infra/typeorm/repositories/CategoryRepository";

import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";

import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";


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



