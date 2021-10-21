import { Request, Response } from 'express';


class updateAvatarController { 

    async handler(request: Request, response: Response): Promise<Response>{

        return response.json();
    }
}

export { updateAvatarController }