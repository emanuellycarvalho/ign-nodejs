

interface Course{
    name: string;
    duration?: number;
    educator: string;
}

class CreateCourseService {
    
    execute({ name, duration = 8, educator }: Course){
        
    }
}

export default new CreateCourseService();