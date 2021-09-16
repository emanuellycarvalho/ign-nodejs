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

      this.usersRepository.create({ name, email });
      return this.usersRepository.findByEmail(email);
  }
}

export { CreateUserUseCase };
