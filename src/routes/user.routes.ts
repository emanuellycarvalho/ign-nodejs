import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/user/create/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
userRoutes.post("/", createUserController.handler);

export { userRoutes }