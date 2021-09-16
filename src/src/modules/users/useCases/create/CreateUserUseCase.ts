import { User } from "../../../model/User";
import { IUsersRepository } from "../../../repositories/user/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
  }
}

export { CreateUserUseCase };
