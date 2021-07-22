"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejour = [];
        this.sejour.push(new Sejour("Paris", 125));
        this.sejour.push(new Sejour("Londre", 250));
        this.sejour.push(new Sejour("Bruxelle", 100));
        this.sejour.push(new Sejour("Rome", 300));
    }
    SejourService.prototype.rechercheParNom = function (nom) {
        for (var i = 0; i < this.sejour.length; i++) {
        }
    };
    return SejourService;
}());
