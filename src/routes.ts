import { Request, response, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, respoonse: Response){

    CreateCourseService.execute({ 
        name: "NodeJs", 
        duration: 10, 
        educator: "Dani"
    });

    return response.send();
}