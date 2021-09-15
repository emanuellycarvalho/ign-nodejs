import fs from "fs";
import csvParse from "csv-parse";


class ImportCategoryUseCase{

    execute(file: Express.Multer.File): void{
        const stream = fs.createReadStream(file.path); 
        const parseFile = csvParse(); //cut the file in pieces
        
        stream.pipe(parseFile); //get those pieces

        parseFile.on("data", async (line) => {
            console.log(line);
        })
    }
    
}

export { ImportCategoryUseCase }