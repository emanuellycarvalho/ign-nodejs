import 'reflect-metadata';
import fs from "fs";
import csvParse from "csv-parse";
import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from '@modules/cars/repositories/ICategoryRepository';

interface IImportCategory{
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase{
     
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
        ){}

    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file);

        categories.map(async (category) => {
            const { name, description } = category;
            const alreadyExists = await this.categoryRepository.findByName(name);

            if(!alreadyExists){
                await this.categoryRepository.create({
                    name, 
                    description
                });
            }
        });
    }

    async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
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
                fs.promises.unlink(file.path);
                resolve(categories);
            })
            .on("error", (err) => {
                reject(err);
            });

        });
    }
    
}

export { ImportCategoryUseCase }