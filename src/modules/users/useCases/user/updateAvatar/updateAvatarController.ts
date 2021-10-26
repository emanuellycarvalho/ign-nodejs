import 'reflect-metadata';
import { container } from "tsyringe";
import { Request, Response } from 'express';
import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";

class UpdateAvatarController { 

    async handler(request: Request, response: Response): Promise<Response>{
        const { id } = request.user;
        const avatar_file = request.file.filename;

        const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase);
        await updateAvatarUseCase.execute({ user_id: id, avatar_file });

        return response.status(204).send();
    }
}

export { UpdateAvatarController }