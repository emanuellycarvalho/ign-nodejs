import { Router } from "express";
import multer from "multer";
import upload from "../config/upload";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateUserController } from "../modules/users/useCases/user/create/CreateUserController";
import { UpdateAvatarController } from "../modules/users/useCases/user/updateAvatar/UpdateAvatarController";

const userRoutes = Router();
const uploadAvatar = multer(upload.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
userRoutes.post("/", createUserController.handler);

const updateAvatarController = new UpdateAvatarController();
userRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateAvatarController.handler);





export { userRoutes }