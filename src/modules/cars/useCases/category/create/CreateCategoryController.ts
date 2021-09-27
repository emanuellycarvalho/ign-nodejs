import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



class CreateCategoryController{

    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    async handler(request: Request, response: Response): Promise<Response>{
        const { name, description } = request.body;
        console.log('Controller 01');
        await this.createCategoryUseCase.execute({ name, description });
        console.log('Controller 02');
        
        return response.status(200).send();
    }

}

export { CreateCategoryController }