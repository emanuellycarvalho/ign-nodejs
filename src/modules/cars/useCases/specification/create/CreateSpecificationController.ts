import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";


class CreateSpecificationController{

    constructor(private createSpecificationUseCase: CreateSpecificationUseCase){}

    handler(request: Request, response: Response): Response{
        const { name, description } = request.body;

        this.createSpecificationUseCase.execute({ name, description });

        return response.status(201).json({ message: "Specification created! "});
    }
}

export { CreateSpecificationController }