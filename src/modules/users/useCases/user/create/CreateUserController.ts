import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



class CreateUserController{

        async handler(request: Request, response: Response): Promise<Response>{
            const createUserUseCase = container.resolve(CreateUserUseCase);
            const { name, username, email, password, driver_license } = request.body;

            await createUserUseCase.execute({
                name,
                username,
                email,
                password,
                driver_license
            });

            return response.status(201).send();
        }


}

export { CreateUserController }