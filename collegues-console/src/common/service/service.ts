import fetch from 'node-fetch';
import {Model} from '../model/model';

export class Service{

    async createUser(id:number, nom:string, prenom:string){
        const model = new Model(id, nom, prenom);
        console.log(model);
        const response = await fetch("https://c1.cleverapps.io/collegues",{
            method:"post",
            body:JSON.stringify(model),
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json();
    }

    async findAllUsers(){
        const response = await fetch("https://c1.cleverapps.io/collegues");
        const data:Model[] = await response.json();

        return data;
    }
    
}