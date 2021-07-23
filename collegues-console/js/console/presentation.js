"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
const service_1 = require("../common/service/service");
//ReadLIne : lis les infos rentrées en console par l'utilisateur 
const readLine = require("readline-sync");
class Presentation {
    demarrer() {
        let readUser;
        while (readUser != "99") {
            console.log("1. Lister les collegues");
            console.log("2. Créer un collègue");
            console.log("3. Modifier la photo d'un collègue");
            console.log("4. Voter");
            console.log("5. Classement");
            console.log("99. Sortir");
            readUser = readLine.question("Choisissez : \n");
            if (readUser == "1") {
                console.log("Voici la liste des collègues");
                return this.getAllUser();
            }
            else if (readUser == "2") {
                let choixId = readLine.question("Rentrer l'id: \n");
                let choixNom = readLine.question("Rentrer le prénom \n");
                let choixPrenom = readLine.question("Rentrer le nom \n");
                return this.createUser(choixId, choixNom, choixPrenom);
            }
        }
    }
    createUser(id, nom, prenom) {
        const service = new service_1.Service();
        service.createUser(id, nom, prenom);
    }
    getAllUser() {
        const service = new service_1.Service();
        return service.findAllUsers().then((data) => data.forEach((model) => console.log("Id : " + model.id + "\n" +
            "Prenom : " + model.prenom +
            "\n" +
            "Nom : " + model.nom +
            "\n" +
            "------------------------------------------------------------------------")));
    }
}
exports.Presentation = Presentation;
//# sourceMappingURL=presentation.js.map