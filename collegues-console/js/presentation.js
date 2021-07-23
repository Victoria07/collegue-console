"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var service_1 = require("./service");
//ReadLIne : lis les infos rentrées en console par l'utilisateur 
var readLine = require("readline-sync");
var Presentation = /** @class */ (function () {
    function Presentation() {
    }
    Presentation.prototype.demarrer = function () {
        var readUser;
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
                var choixId = readLine.question("Rentrer l'id: \n");
                var choixNom = readLine.question("Rentrer le prénom \n");
                var choixPrenom = readLine.question("Rentrer le nom \n");
                return this.createUser(choixId, choixNom, choixPrenom);
            }
        }
    };
    Presentation.prototype.createUser = function (id, nom, prenom) {
        var service = new service_1.Service();
        service.createUser(id, nom, prenom);
    };
    Presentation.prototype.getAllUser = function () {
        var service = new service_1.Service();
        return service.findAllUsers().then(function (data) { return data.forEach(function (model) { return console.log("Id : " + model.id + "\n" +
            "Prenom : " + model.prenom +
            "\n" +
            "Nom : " + model.nom +
            "\n" +
            "------------------------------------------------------------------------"); }); });
    };
    return Presentation;
}());
exports.Presentation = Presentation;
