import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/useCases/user/authenticate/AuthenticateUserController";

const authenticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/session", authenticateUserController.handler);

export { authenticateRoutes}