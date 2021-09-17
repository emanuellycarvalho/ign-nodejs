import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/user/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
      if(this.usersRepository.findByEmail(email)){
        throw new Error("Email already registered!");
      }

      return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
