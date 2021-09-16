import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/user/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    
    if(user && user.admin){
      return this.usersRepository.list();
    }

    throw new Error("Permission denied!");
  }
}

export { ListAllUsersUseCase };
