class Sejour{

    nom:string ;
    prix:number ;

    constructor(nom: string, prix: number){
        this.nom = nom; 
        this.prix = prix;
    }

}

class SejourService{ 
    private sejour: Sejour[] = [];

    constructor(){
        this.sejour.push(new Sejour("Paris",125))
        this.sejour.push(new Sejour("Londre",250))
        this.sejour.push(new Sejour("Bruxelle",100))
        this.sejour.push(new Sejour("Rome",300))
    }

    rechercheParNom(nom:string):Sejour|void{
        for(let i =0; i<this.sejour.length;i++){
            
        }
    }
}