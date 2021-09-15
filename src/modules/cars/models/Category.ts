import { v4 as uuid } from 'uuid';

class Category {

    id?: string;
    name: string;
    description: string;
    created_at: Date;

    // constructor(name: string, description: string){
    //     if(!this.id){
    //         this.id = uuid();
    //         this.created_at = new Date();
    //     }
    // }

    constructor(){
        if(!this.id){
            this.id = uuid();
            this.created_at = new Date();
        }
    }
} 

export {  Category }