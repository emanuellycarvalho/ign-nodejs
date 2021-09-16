import { Router } from "express";

import { createUserController } from "../modules/users/useCases/create";
import { listAllUsersController } from "../modules/users/useCases/list";
import { showUserProfileController } from "../modules/users/useCases/show";
import { turnUserAdminController } from "../modules/users/useCases/turnAdmin";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRoutes.patch("/:user_id/admin", (request, response) =>
  turnUserAdminController.handle(request, response)
);

usersRoutes.get("/:user_id", (request, response) =>
  showUserProfileController.handle(request, response)
);

usersRoutes.get("/", (request, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };
