"use strict";
console.log("Meteo App");
var Meteo = /** @class */ (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return '${this}._ville} - ${this._temperature}°C';
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo("Nantes", 15);
console.log(nantesCeMatin);
