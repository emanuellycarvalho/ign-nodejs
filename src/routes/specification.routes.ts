import { request, response, Router } from "express";
import { CreateUserController } from "../modules/users/useCases/user/create/CreateUserController";

const specificationRoutes = Router();
const createUserController = new CreateUserController();

specificationRoutes.post("/", createUserController.handler);

export { specificationRoutes }