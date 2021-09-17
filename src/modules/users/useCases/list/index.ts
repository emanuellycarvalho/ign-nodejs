import { UsersRepository } from "../../repositories/user/UsersRepository";
import { ListAllUsersController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };
