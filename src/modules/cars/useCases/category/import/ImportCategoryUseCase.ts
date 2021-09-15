import fs from "fs";
import csvParse from "csv-parse";
import { CategoryRepository } from "../../../repositories/category/CategoryRepository";

interface IImportCategory{
    name: string;
    description: string;
}

class ImportCategoryUseCase{
    
    constructor(private categoryRepository: CategoryRepository){}

    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file);
    }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path); 
            const categories: IImportCategory[] = [];
            const parseFile = csvParse(); //cut the file in pieces
            
            stream.pipe(parseFile); //get those pieces

            parseFile.on("data", async (line) => { //read and pushes on categories
                const [name, description] = line;
                categories.push({
                    name, 
                    description
                });
            })
            .on("end", () => {
                resolve(categories);
            })
            .on("error", (err) => {
                reject(err);
            });

        });
    }
    
}

export { ImportCategoryUseCase }